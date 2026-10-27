'use client'

import { useCallback, useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'

export interface SplineObject {
  position: { x: number; y: number; z: number }
  rotation: { x: number; y: number; z: number }
}

export interface SplineRuntime {
  setBackgroundColor?: (color: string) => void
  setQuality?: (q: 'low' | 'medium' | 'high') => void
  findObjectByName?: (name: string) => SplineObject | undefined
}

interface SplineSceneProps {
  scene: string
  className?: string
  /* Sahnenin açılış kamera hareketini göstermemek için: kamera bu z
     konumuna oturana kadar sahne gizli kalır */
  revealWhenCamera?: { name: string; z: number }
  onLoad?: (spline: SplineRuntime) => void
  /* Sahnenin üstünde, onunla birlikte beliren katman */
  children?: React.ReactNode
}

// Süreler yalnızca sekme görünürken sayılır (arka planda kamera da durur).
// Sahnenin açılış kamera hareketi yaklaşık 3,5 sn sürüyor; sayfalar arası
// geçişte kameranın okunan konumu görüntüyle uyuşmadığı için en az bu kadar beklenir.
const REVEAL_MIN_MS = 3700
const REVEAL_MAX_MS = 6000

function getThemeBackground() {
  if (typeof document === 'undefined') {
    return '#0a0a0a'
  }

  return document.documentElement.classList.contains('light') ? '#f7f8f4' : '#0a0a0a'
}

function isLowPowerDevice() {
  if (typeof navigator === 'undefined') return false
  const ua = navigator.userAgent
  if (/Mobi|Android|iPhone|iPad/i.test(ua)) return true
  const mem = (navigator as unknown as { deviceMemory?: number }).deviceMemory
  if (typeof mem === 'number' && mem <= 4) return true
  const cores = navigator.hardwareConcurrency
  if (typeof cores === 'number' && cores <= 4) return true
  return false
}

export function SplineScene({ scene, className, revealWhenCamera, onLoad: onLoadProp, children }: SplineSceneProps) {
  const splineRef = useRef<SplineRuntime | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const revealRaf = useRef(0)
  const fadeRef = useRef<HTMLDivElement | null>(null)
  const stopReveal = useRef<() => void>(() => {})

  const syncBackground = useCallback(() => {
    splineRef.current?.setBackgroundColor?.(getThemeBackground())
  }, [])

  /* Görünürlük doğrudan DOM üzerinden yönetilir: Next.js ziyaret edilen sayfayı
     durumuyla saklayıp geri gösterebiliyor ve o sırada sahne açılış hareketini
     baştan oynatıyor. React durumuna bağlı kalırsak sahne bir an eski hâliyle görünür. */
  const setVisible = useCallback((visible: boolean) => {
    if (fadeRef.current) fadeRef.current.style.opacity = visible ? '1' : '0'
  }, [])

  const startReveal = useCallback((spline: SplineRuntime) => {
    stopReveal.current()
    setVisible(false)

    const camera = revealWhenCamera && spline.findObjectByName?.(revealWhenCamera.name)
    if (!camera || !revealWhenCamera) {
      revealRaf.current = requestAnimationFrame(() => setVisible(true))
      stopReveal.current = () => cancelAnimationFrame(revealRaf.current)
      return
    }

    // Açılış hareketi bitip kamera son konumuna oturunca göster.
    // Geçen süre gerçek saatle ölçülür, sekmenin gizli kaldığı süre düşülür.
    const start = performance.now()
    let hiddenTotal = 0
    let hiddenSince = document.hidden ? start : null
    const onVisibility = () => {
      const t = performance.now()
      if (document.hidden) hiddenSince = t
      else if (hiddenSince !== null) {
        hiddenTotal += t - hiddenSince
        hiddenSince = null
      }
    }
    document.addEventListener('visibilitychange', onVisibility)
    stopReveal.current = () => {
      cancelAnimationFrame(revealRaf.current)
      document.removeEventListener('visibilitychange', onVisibility)
    }

    const wait = (now: number) => {
      const visibleMs = now - start - hiddenTotal
      const settled = Math.abs(camera.position.z - revealWhenCamera.z) < 2
      if ((visibleMs >= REVEAL_MIN_MS && settled) || visibleMs >= REVEAL_MAX_MS) {
        stopReveal.current()
        setVisible(true)
        return
      }
      revealRaf.current = requestAnimationFrame(wait)
    }
    revealRaf.current = requestAnimationFrame(wait)
  }, [revealWhenCamera, setVisible])

  const onLoad = useCallback((spline: SplineRuntime) => {
    splineRef.current = spline
    if (isLowPowerDevice() && typeof spline.setQuality === 'function') {
      try { spline.setQuality('low') } catch { /* noop */ }
    }
    syncBackground()
    onLoadProp?.(spline)
    startReveal(spline)
  }, [syncBackground, onLoadProp, startReveal])

  useEffect(() => {
    syncBackground()
    // Sayfa geri gösterildiyse sahne zaten yüklü: açılış hareketi yeniden oynar, baştan bekle
    if (splineRef.current) startReveal(splineRef.current)

    const observer = new MutationObserver(syncBackground)
    observer.observe(document.documentElement, {
      attributeFilter: ['class'],
      attributes: true,
    })

    return () => {
      observer.disconnect()
      stopReveal.current()
      setVisible(false)
    }
  }, [syncBackground, startReveal, setVisible])

  return (
    <div
      ref={containerRef}
      className="spline-scene-container relative w-full h-full overflow-hidden bg-background"
      style={{
        contain: 'layout paint size',
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
    >
      <div
        ref={fadeRef}
        className="absolute inset-0 transition-opacity duration-700 ease-out [container-type:size]"
        style={{ opacity: 0 }}
      >
        <Spline
          scene={scene}
          className={className}
          onLoad={onLoad}
          renderOnDemand
          style={{ width: '100%', height: '100%' }}
        />
        {children}
      </div>
    </div>
  )
}
