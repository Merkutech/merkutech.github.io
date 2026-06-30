'use client'

import { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

interface SplineRuntime {
  setBackgroundColor?: (color: string) => void
  setQuality?: (q: 'low' | 'medium' | 'high') => void
}

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

export function SplineScene({ scene, className }: SplineSceneProps) {
  const splineRef = useRef<SplineRuntime | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
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
    requestAnimationFrame(() => setIsReady(true))
  }, [syncBackground])

  useEffect(() => {
    syncBackground()

    const observer = new MutationObserver(syncBackground)
    observer.observe(document.documentElement, {
      attributeFilter: ['class'],
      attributes: true,
    })

    return () => observer.disconnect()
  }, [syncBackground])

  useEffect(() => {
    if (typeof window === 'undefined') return
    let cancelled = false

    const startLoad = () => {
      if (cancelled || shouldLoad) return
      setShouldLoad(true)
    }

    const el = containerRef.current
    if (!el) {
      startLoad()
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      startLoad()
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const ric = (window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback
            if (typeof ric === 'function') {
              ric(() => startLoad(), { timeout: 800 })
            } else {
              window.setTimeout(startLoad, 120)
            }
            io.disconnect()
            break
          }
        }
      },
      { rootMargin: '400px' }
    )
    io.observe(el)

    const safety = window.setTimeout(startLoad, 2500)

    return () => {
      cancelled = true
      io.disconnect()
      window.clearTimeout(safety)
    }
  }, [shouldLoad])

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
      <Suspense fallback={null}>
        {shouldLoad ? (
          <div
            className="absolute inset-0 transition-opacity duration-700 ease-out"
            style={{ opacity: isReady ? 1 : 0 }}
          >
            <Spline
              scene={scene}
              className={className}
              onLoad={onLoad}
              renderOnDemand
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        ) : null}
      </Suspense>
    </div>
  )
}
