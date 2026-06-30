'use client'

import { Suspense, lazy, useCallback, useEffect, useRef, useState } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

interface SplineRuntime {
  setBackgroundColor?: (color: string) => void
}

function getThemeBackground() {
  if (typeof document === 'undefined') {
    return '#0a0a0a'
  }

  return document.documentElement.classList.contains('light') ? '#f7f8f4' : '#0a0a0a'
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const splineRef = useRef<SplineRuntime | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [visible, setVisible] = useState(false)

  const syncBackground = useCallback(() => {
    splineRef.current?.setBackgroundColor?.(getThemeBackground())
  }, [])

  const onLoad = useCallback((spline: SplineRuntime) => {
    splineRef.current = spline
    syncBackground()
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
    if (shouldLoad) return
    const el = containerRef.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      queueMicrotask(() => setShouldLoad(true))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            io.disconnect()
            break
          }
        }
      },
      { rootMargin: '200px' }
    )
    io.observe(el)

    return () => io.disconnect()
  }, [shouldLoad])

  useEffect(() => {
    if (!visible) return

    let cancelled = false
    const ric = (window as unknown as {
      requestIdleCallback?: (cb: () => void) => number
    }).requestIdleCallback

    let handle: number
    if (typeof ric === 'function') {
      handle = ric(() => {
        if (cancelled) return
        window.setTimeout(() => {
          if (!cancelled) setShouldLoad(true)
        }, 600)
      })
    } else {
      handle = window.setTimeout(() => {
        if (!cancelled) setShouldLoad(true)
      }, 1200) as unknown as number
    }

    return () => {
      cancelled = true
      const cic = (window as unknown as { cancelIdleCallback?: (h: number) => void })
        .cancelIdleCallback
      if (typeof cic === 'function' && typeof ric === 'function') {
        cic(handle)
      } else {
        window.clearTimeout(handle)
      }
    }
  }, [visible])

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
      {!shouldLoad && (
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(closest-side, color-mix(in srgb, var(--foreground) 8%, transparent), transparent 70%)',
            }}
          />
        </div>
      )}
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-background">
            <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground/60 rounded-full animate-spin" />
          </div>
        }
      >
        {shouldLoad ? (
          <Spline
            scene={scene}
            className={className}
            onLoad={onLoad}
            renderOnDemand
            style={{ width: '100%', height: '100%' }}
          />
        ) : null}
      </Suspense>
    </div>
  )
}
