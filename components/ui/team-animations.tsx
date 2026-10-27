"use client";

import { useEffect, useState } from "react";

/* Aviyonik — osiloskop dalgası + yanıp sönen LED */
function AvionicsAnim() {
  const wave = Array.from({ length: 6 }, (_, i) => {
    const x = i * 40;
    return `M${x} 30 C${x + 10} 6, ${x + 10} 6, ${x + 20} 30 S${x + 30} 54, ${x + 40} 30`;
  }).join(" ");

  return (
    <svg viewBox="0 0 160 60" className="w-full h-auto overflow-visible" fill="none" stroke="currentColor">
      <line x1="0" y1="30" x2="160" y2="30" strokeWidth="1" strokeDasharray="2 4" opacity="0.25" />
      <g className="apply-wave">
        <path d={wave} strokeWidth="2" strokeLinecap="round" />
      </g>
      <circle cx="152" cy="6" r="3.5" fill="currentColor" stroke="none" className="apply-blink" />
    </svg>
  );
}

/* Mekanik — birbirine geçen iki dişli */
function gearPath(teeth: number, outer: number, inner: number) {
  const pts: string[] = [];
  const step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    const corners = [
      [inner, a],
      [outer, a + step * 0.15],
      [outer, a + step * 0.5],
      [inner, a + step * 0.65],
    ] as const;
    for (const [r, ang] of corners) {
      pts.push(`${(Math.cos(ang) * r).toFixed(2)},${(Math.sin(ang) * r).toFixed(2)}`);
    }
  }
  return `M${pts.join(" L")} Z`;
}

function MechanicalAnim() {
  return (
    <svg viewBox="0 0 160 80" className="w-full h-auto overflow-visible" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <g transform="translate(58 40) rotate(5.25)">
        <g className="apply-spin">
          <path d={gearPath(12, 30, 24)} />
          <circle r="7" />
        </g>
      </g>
      <g transform="translate(105 40) rotate(30.375)">
        <g className="apply-spin-rev">
          <path d={gearPath(8, 21, 15.5)} />
          <circle r="5" />
        </g>
      </g>
    </svg>
  );
}

/* Yazılım — kendini yazan komutlar */
const commands = ["arm()", "takeoff(10)", "detect(target)", "land()"];

function SoftwareAnim() {
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const full = commands[line].length;
    const id = setTimeout(
      () => {
        if (chars < full) setChars(chars + 1);
        else {
          setChars(0);
          setLine((line + 1) % commands.length);
        }
      },
      chars < full ? 90 : 1100,
    );
    return () => clearTimeout(id);
  }, [chars, line]);

  return (
    <div className="font-mono text-sm sm:text-base leading-relaxed">
      <div className="opacity-35">{`> ${commands[(line + commands.length - 1) % commands.length]}`}</div>
      <div>
        {"> "}
        {commands[line].slice(0, chars)}
        <span className="apply-caret inline-block w-[0.55em] h-[1.1em] align-[-0.2em] bg-current ml-0.5" />
      </div>
    </div>
  );
}

/* Tanıtım ve Sponsorluk — yayılan dalgalar ve uçuşan kalpler */
function PromotionAnim() {
  const heart = "M0 3 C0 -1, 5 -1, 5 3 C5 -1, 10 -1, 10 3 C10 7, 5 9, 5 11 C5 9, 0 7, 0 3 Z";

  return (
    <svg viewBox="0 0 160 80" className="w-full h-auto overflow-visible" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="40" cy="50" r="5" fill="currentColor" stroke="none" />
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${52 + i * 14} ${34 - i * 8} A ${20 + i * 14} ${20 + i * 14} 0 0 1 ${52 + i * 14} ${66 + i * 8}`}
          className="apply-ripple"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${112 + i * 14} ${52 - (i % 2) * 6})`}>
          <path d={heart} fill="currentColor" stroke="none" className="apply-float" style={{ animationDelay: `${i * 0.8}s` }} />
        </g>
      ))}
    </svg>
  );
}

const animations: Record<string, () => React.ReactElement> = {
  aviyonik: AvionicsAnim,
  mekanik: MechanicalAnim,
  yazilim: SoftwareAnim,
  "tanitim-sponsorluk": PromotionAnim,
};

export function TeamAnimation({ id }: { id: string }) {
  const Anim = animations[id];
  return Anim ? <Anim /> : null;
}
