'use client'

import { useRef } from "react";
import { useLanguage } from "@/lib/i18n/language-context";

/* Hero: üstten eğik bakışla süzülen altı rotorlu İHA. Kişi ya da fotoğraf içermez,
   takım değişse de eskimez; temaya currentColor üzerinden uyar. */

const MOTORS = [30, 90, 150, 210, 270, 330].map((deg) => {
  const rad = (deg * Math.PI) / 180;
  return { deg, x: Math.round(300 + 208 * Math.cos(rad)), y: Math.round(300 + 208 * Math.sin(rad)) };
});

const hexagon = (r: number) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i;
    return `${(300 + r * Math.cos(a)).toFixed(1)},${(300 + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

const WAYPOINTS = [
  [130, 560],
  [250, 330],
  [470, 250],
  [640, 400],
  [540, 640],
];

const TAGS = {
  tr: ["Otonom uçuş", "Bilgisayarlı görü", "Telemetri", "Yer kontrol istasyonu"],
  en: ["Autonomous flight", "Computer vision", "Telemetry", "Ground control"],
};

export function HeroDrone() {
  const { language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const box = el.getBoundingClientRect();
    el.style.setProperty("--tilt-z", `${((e.clientX - box.left) / box.width - 0.5) * 14}deg`);
    el.style.setProperty("--tilt-x", `${((e.clientY - box.top) / box.height - 0.5) * -10}deg`);
  };

  return (
    <div ref={ref} className="hero-drone" aria-hidden="true" onPointerMove={onPointerMove}>
      <div className="hd-scene">
        <svg className="hd-ground" viewBox="0 0 800 800" fill="none" stroke="currentColor">
          <defs>
            <linearGradient id="hd-sweep" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="currentColor" stopOpacity="0" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.22" />
            </linearGradient>
          </defs>
          {[390, 300, 210, 120].map((r, i) => (
            <circle key={r} cx="400" cy="400" r={r} opacity={0.1 + i * 0.05} strokeDasharray={i % 2 ? undefined : "3 9"} />
          ))}
          <path d="M10 400H790M400 10V790" opacity="0.12" />
          <g className="hd-sweep">
            <path d="M400 400 L790 400 A390 390 0 0 0 676 124 Z" fill="url(#hd-sweep)" stroke="none" />
          </g>
          <polyline className="hd-route" points={WAYPOINTS.map((p) => p.join(",")).join(" ")} strokeWidth="2" />
          {WAYPOINTS.map(([x, y], i) => (
            <g key={x} transform={`translate(${x} ${y})`}>
              <circle r="6" fill="currentColor" stroke="none" />
              <circle r="6" className="hd-ping" style={{ animationDelay: `${i * 0.5}s` }} />
            </g>
          ))}
        </svg>

        <div className="hd-shadow" />

        <div className="hd-drone">
          <svg viewBox="0 0 600 600" fill="none">
            {MOTORS.map((m) => (
              <rect key={m.deg} x="300" y="291" width="208" height="18" rx="6" fill="currentColor" transform={`rotate(${m.deg} 300 300)`} />
            ))}
            {MOTORS.map((m, i) => (
              <g key={m.deg} transform={`translate(${m.x} ${m.y})`}>
                <circle r="84" fill="currentColor" opacity="0.07" />
                <circle r="84" stroke="currentColor" opacity="0.18" />
                <g className={i % 2 ? "hd-rotor-rev" : "hd-rotor"}>
                  <path d="M-80 0C-50-9-18-7 0 0 18 7 50 9 80 0 50-9 18-7 0 0-18 7-50 9-80 0Z" fill="currentColor" stroke="currentColor" strokeWidth="3" />
                </g>
                <circle r="20" fill="currentColor" />
                <circle r="8" className="hd-hub" />
              </g>
            ))}
            <polygon points={hexagon(112)} fill="currentColor" />
            <polygon points={hexagon(92)} className="hd-plate" />
            <image className="hd-logo-on-light" href="/logo-black.png" x="238" y="238" width="124" height="124" />
            <image className="hd-logo-on-dark" href="/logo-white.png" x="238" y="238" width="124" height="124" />
          </svg>
        </div>
      </div>

      <ul className="hd-tags">
        {TAGS[language].map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}
