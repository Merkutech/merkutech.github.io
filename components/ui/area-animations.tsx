"use client";

import { useEffect, useRef } from "react";

/* Robotik: eklemleri sallanan robot kol */
function RoboticsAnim() {
  return (
    <svg viewBox="0 0 160 90" className="w-full h-auto overflow-visible" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 84 H90" opacity="0.35" />
      <rect x="44" y="72" width="32" height="12" rx="3" />
      <g transform="translate(60 72)">
        <g className="area-swing-a">
          <path d="M0 0 L22 -38" strokeWidth="6" opacity="0.9" />
          <circle r="5" fill="currentColor" stroke="none" />
          <g transform="translate(22 -38)">
            <g className="area-swing-b">
              <path d="M0 0 L40 -6" strokeWidth="5" opacity="0.9" />
              <circle r="4.5" fill="currentColor" stroke="none" />
              <g transform="translate(40 -6)">
                <g className="area-grip">
                  <path d="M0 0 L8 -6 M0 0 L8 6" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

/* Yapay zeka: bağlantılarında sinyal akan küçük bir sinir ağı */
const layers = [
  [20, 45, 70],
  [22, 45, 68],
  [33, 57],
];
const layerX = [24, 80, 136];

function AIAnim() {
  const edges: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let l = 0; l < layers.length - 1; l++) {
    for (const y1 of layers[l]) {
      for (const y2 of layers[l + 1]) {
        edges.push({ x1: layerX[l], y1, x2: layerX[l + 1], y2 });
      }
    }
  }

  return (
    <svg viewBox="0 0 160 90" className="w-full h-auto overflow-visible" fill="none" stroke="currentColor" strokeWidth="1.5">
      {edges.map((e, i) => (
        <line key={`b${i}`} {...e} opacity="0.18" />
      ))}
      {edges.map((e, i) => (
        <line
          key={`p${i}`}
          {...e}
          strokeWidth="2"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray="12 88"
          className="area-signal"
          style={{ animationDelay: `${(i % 5) * 0.32}s` }}
        />
      ))}
      {layers.map((ys, l) =>
        ys.map((y, j) => (
          <circle
            key={`${l}-${j}`}
            cx={layerX[l]}
            cy={y}
            r="5.5"
            fill="currentColor"
            strokeWidth="2"
            className="area-node"
            style={{ animationDelay: `${l * 0.45 + j * 0.15}s` }}
          />
        )),
      )}
    </svg>
  );
}

/* Drone: pervaneleri dönen, süzülen quadcopter (üstten) */
function DroneAnim() {
  const arms = [
    [-34, -22],
    [34, -22],
    [-34, 22],
    [34, 22],
  ];

  return (
    <svg viewBox="0 0 160 90" className="w-full h-auto overflow-visible" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <g transform="translate(80 45)">
        <g className="area-hover">
          {arms.map(([x, y], i) => (
            <path key={`a${i}`} d={`M0 0 L${x} ${y}`} strokeWidth="3" />
          ))}
          <rect x="-12" y="-9" width="24" height="18" rx="5" fill="currentColor" stroke="none" />
          {arms.map(([x, y], i) => (
            <g key={`r${i}`} transform={`translate(${x} ${y})`}>
              <circle r="3" fill="currentColor" stroke="none" />
              <g className={i % 2 ? "area-rotor-rev" : "area-rotor"}>
                <path d="M-15 0 H15" strokeWidth="2.5" />
              </g>
              <circle r="16" opacity="0.15" strokeWidth="1.5" />
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}

/* Gömülü sistemler: hatlarında veri akan çip */
function EmbeddedAnim() {
  const traces = [
    "M58 30 H34 V14 H8",
    "M58 45 H8",
    "M58 60 H34 V76 H8",
    "M102 30 H126 V14 H152",
    "M102 45 H152",
    "M102 60 H126 V76 H152",
  ];

  return (
    <svg viewBox="0 0 160 90" className="w-full h-auto overflow-visible" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {traces.map((d, i) => (
        <path key={`t${i}`} d={d} opacity="0.2" />
      ))}
      {traces.map((d, i) => (
        <path
          key={`f${i}`}
          d={d}
          strokeWidth="2.5"
          pathLength={100}
          strokeDasharray="10 90"
          className="area-data"
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}
      <rect x="58" y="22" width="44" height="46" rx="5" strokeWidth="2" />
      {[30, 45, 60].map((y) => (
        <g key={y}>
          <path d={`M52 ${y} H58`} strokeWidth="2" />
          <path d={`M102 ${y} H108`} strokeWidth="2" />
        </g>
      ))}
      <circle cx="80" cy="45" r="5" fill="currentColor" stroke="none" className="apply-blink" />
    </svg>
  );
}

/* 3D modelleme: kendi etrafında dönen tel kafes küp */
const cube = [
  [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
  [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
];
const cubeEdges = [
  [0, 1], [1, 2], [2, 3], [3, 0],
  [4, 5], [5, 6], [6, 7], [7, 4],
  [0, 4], [1, 5], [2, 6], [3, 7],
];

function ModelingAnim() {
  const lines = useRef<(SVGLineElement | null)[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const start = performance.now();

    const draw = (now: number) => {
      const t = reduce ? 0.6 : (now - start) / 1000;
      const ay = t * 0.7;
      const ax = 0.5 + Math.sin(t * 0.4) * 0.25;
      const pts = cube.map(([x, y, z]) => {
        const x1 = x * Math.cos(ay) + z * Math.sin(ay);
        const z1 = -x * Math.sin(ay) + z * Math.cos(ay);
        const y1 = y * Math.cos(ax) - z1 * Math.sin(ax);
        const z2 = y * Math.sin(ax) + z1 * Math.cos(ax);
        const s = 26 / (1 + z2 * 0.18);
        return [80 + x1 * s, 45 + y1 * s];
      });
      cubeEdges.forEach(([a, b], i) => {
        const el = lines.current[i];
        if (!el) return;
        el.setAttribute("x1", pts[a][0].toFixed(2));
        el.setAttribute("y1", pts[a][1].toFixed(2));
        el.setAttribute("x2", pts[b][0].toFixed(2));
        el.setAttribute("y2", pts[b][1].toFixed(2));
      });
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg viewBox="0 0 160 90" className="w-full h-auto overflow-visible" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <ellipse cx="80" cy="84" rx="34" ry="4" opacity="0.15" fill="currentColor" stroke="none" />
      {cubeEdges.map((_, i) => (
        <line key={i} ref={(el) => { lines.current[i] = el; }} />
      ))}
    </svg>
  );
}

/* Yarışmalar: kupa ve etrafında parlayan yıldızlar */
function CompetitionAnim() {
  const star = "M0 -6 L1.6 -1.6 L6 0 L1.6 1.6 L0 6 L-1.6 1.6 L-6 0 L-1.6 -1.6 Z";
  const sparkles = [
    [42, 22, 0],
    [118, 18, 0.6],
    [128, 52, 1.2],
    [34, 58, 1.8],
  ];

  return (
    <svg viewBox="0 0 160 90" className="w-full h-auto overflow-visible" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <g className="area-hover">
        <path d="M62 12 H98 V30 C98 44 90 52 80 52 C70 52 62 44 62 30 Z" />
        <path d="M62 18 H52 C52 30 58 36 64 36" />
        <path d="M98 18 H108 C108 30 102 36 96 36" />
        <path d="M80 52 V64" />
        <path d="M66 72 H94 L90 64 H70 Z" />
        <path d="M60 80 H100" strokeWidth="3" />
      </g>
      {sparkles.map(([x, y, d], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <path d={star} fill="currentColor" stroke="none" className="area-twinkle" style={{ animationDelay: `${d}s` }} />
        </g>
      ))}
    </svg>
  );
}

const animations = [RoboticsAnim, AIAnim, DroneAnim, EmbeddedAnim, ModelingAnim, CompetitionAnim];

export function AreaAnimation({ index }: { index: number }) {
  const Anim = animations[index];
  return Anim ? <Anim /> : null;
}
