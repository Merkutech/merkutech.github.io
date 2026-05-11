'use client';

import { Suspense, lazy, useEffect, useRef } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

interface SplineRuntime {
  setBackgroundColor?: (color: string) => void;
}

function getThemeBackground() {
  if (typeof document === 'undefined') {
    return '#0a0a0a';
  }

  return document.documentElement.classList.contains('light') ? '#f7f8f4' : '#0a0a0a';
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<SplineRuntime | null>(null);

  useEffect(() => {
    const syncBackground = () => {
      splineRef.current?.setBackgroundColor?.(getThemeBackground());
    };

    const hide = () => {
      if (!containerRef.current) return;

      // Tüm olası watermark selektörleri
      const selectors = [
        'a[href*="spline.design"]',
        'a[href*="spline.software"]',
        'a[href*="spline"]',
        '[class*="watermark"]',
        '[class*="logo"]',
        'canvas ~ a',
        'canvas ~ div a',
        'div > a[target="_blank"]',
      ];

      selectors.forEach((sel) => {
        try {
          containerRef.current!.querySelectorAll(sel).forEach((el) => {
            const h = el as HTMLElement;
            h.style.cssText = 'display:none !important;opacity:0 !important;visibility:hidden !important;pointer-events:none !important;';
          });
        } catch { /* ignore */ }
      });
    };

    // Hemen + tekrar tekrar çalıştır (Spline lazy yüklenir)
    syncBackground();
    hide();
    const ids = [300, 600, 1000, 1500, 2500, 4000].map((t) => setTimeout(hide, t));
    const iv = setInterval(hide, 2000);

    // MutationObserver
    let obs: MutationObserver | null = null;
    if (containerRef.current) {
      obs = new MutationObserver(hide);
      obs.observe(containerRef.current, { childList: true, subtree: true });
    }

    const themeObserver = new MutationObserver(syncBackground);
    themeObserver.observe(document.documentElement, {
      attributeFilter: ['class'],
      attributes: true,
    });

    return () => {
      ids.forEach(clearTimeout);
      clearInterval(iv);
      obs?.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return (
    <Suspense
      fallback={
        <div className={`w-full h-full flex items-center justify-center bg-background text-foreground ${className}`}>
          <svg className="animate-spin h-5 w-5 text-foreground mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
          </svg>
          Yükleniyor...
        </div>
      }
    >
      <div ref={containerRef} className={className}>
        <Spline
          scene={scene}
          className="w-full h-full"
          onLoad={(spline: SplineRuntime) => {
            splineRef.current = spline;
            spline.setBackgroundColor?.(getThemeBackground());
          }}
        />
      </div>
    </Suspense>
  );
}
