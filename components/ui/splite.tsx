'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
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

// Kare sayısıyla ölçülür: sekme arka plandayken kamera da durur, sayaç da
const REVEAL_MAX_FRAMES = 480

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
  const [isReady, setIsReady] = useState(false)

  const syncBackground = useCallback(() => {
    splineRef.current?.setBackgroundColor?.(getThemeBackground())
  }, [])

  const onLoad = useCallback((spline: SplineRuntime) => {
    splineRef.current = spline
    if (isLowPowerDevice() && typeof spline.setQuality === 'function') {
      try { spline.setQuality('low') } catch { /* noop */ }
    }
    syncBackground()
    onLoadProp?.(spline)

    const camera = revealWhenCamera && spline.findObjectByName?.(revealWhenCamera.name)
    if (!camera || !revealWhenCamera) {
      requestAnimationFrame(() => setIsReady(true))
      return
    }

    // Kamera son konumuna gelince göster
    let frames = 0
    const wait = () => {
      frames++
      const settled = Math.abs(camera.position.z - revealWhenCamera.z) < 2
      if (settled || frames > REVEAL_MAX_FRAMES) {
        setIsReady(true)
        return
      }
      revealRaf.current = requestAnimationFrame(wait)
    }
    revealRaf.current = requestAnimationFrame(wait)
  }, [syncBackground, onLoadProp, revealWhenCamera])

  useEffect(() => {
    syncBackground()

    const observer = new MutationObserver(syncBackground)
    observer.observe(document.documentElement, {
      attributeFilter: ['class'],
      attributes: true,
    })

    return () => {
      observer.disconnect()
      cancelAnimationFrame(revealRaf.current)
    }
  }, [syncBackground])

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
        className="absolute inset-0 transition-opacity duration-700 ease-out [container-type:size]"
        style={{ opacity: isReady ? 1 : 0 }}
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
