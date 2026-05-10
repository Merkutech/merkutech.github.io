'use client'

import { Suspense, lazy, useCallback } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const onLoad = useCallback((spline: any) => {
    if (spline && spline.setBackgroundColor) {
      spline.setBackgroundColor('#0a0a0a')
    }
  }, [])

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
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
