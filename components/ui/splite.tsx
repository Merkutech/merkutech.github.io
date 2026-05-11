'use client'

import { Suspense, lazy, useCallback, useEffect, useRef } from 'react'
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

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-background">
          <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground/60 rounded-full animate-spin" />
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        onLoad={onLoad}
        style={{ width: '100%', height: '100%' }}
      />
    </Suspense>
  )
}
