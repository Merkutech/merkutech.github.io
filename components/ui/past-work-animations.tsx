"use client";

/* Projelerimiz: 2021 - 2025 çalışmaları için küçük animasyonlar */

const flame = "M0 0 C-7 -6 -5 -14 0 -20 C1 -14 7 -12 6 -5 C6 -1 3 1 0 0 Z";

/* Yangın tespit ve analiz dron'u: tarama ışını ve alev */
function FireDetectionAnim() {
  return (
    <svg viewBox="0 0 160 90" className="w-full h-auto overflow-visible" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <g className="area-hover">
        <path d="M50 18 H110" />
        <rect x="68" y="16" width="24" height="10" rx="3" fill="currentColor" stroke="none" />
        <g transform="translate(50 18)"><g className="area-rotor"><path d="M-10 0 H10" /></g></g>
        <g transform="translate(110 18)"><g className="area-rotor-rev"><path d="M-10 0 H10" /></g></g>
        <path d="M80 28 L54 80 H106 Z" fill="currentColor" stroke="none" className="pw-scan" />
      </g>
      <g transform="translate(80 82)">
        <path d={flame} fill="currentColor" stroke="none" className="pw-flicker" />
      </g>
      <path d="M40 84 H120" opacity="0.3" />
    </svg>
  );
}

/* Yangın müdahale kapsülü: düşen kapsül ve sıçrayan damlalar */
function CapsuleAnim() {
  return (
    <svg viewBox="0 0 160 90" className="w-full h-auto overflow-visible" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <g className="pw-drop">
        <rect x="72" y="4" width="16" height="28" rx="8" />
        <path d="M72 14 H88" opacity="0.5" />
        <path d="M76 2 L80 -4 L84 2" />
      </g>
      {[-1, 1].map((dir) =>
        [0, 1].map((k) => (
          <circle
            key={`${dir}${k}`}
            cx={80 + dir * (10 + k * 10)}
            cy={70 - k * 8}
            r={2.5 - k * 0.5}
            fill="currentColor"
            stroke="none"
            className="pw-splash"
            style={{ animationDelay: `${k * 0.08}s` }}
          />
        )),
      )}
      <path d="M40 80 H120" opacity="0.3" />
    </svg>
  );
}

/* AquaVista denizaltı: dalgalanan denizaltı ve kabarcıklar */
function SubmarineAnim() {
  return (
    <svg viewBox="0 0 160 90" className="w-full h-auto overflow-visible" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 14 Q30 8 50 14 T90 14 T130 14 T170 14" opacity="0.3" className="apply-wave" />
      <g className="area-hover">
        <rect x="40" y="44" width="76" height="24" rx="12" />
        <path d="M70 44 V34 H86 V44" />
        <path d="M80 34 V26 H88" />
        {[58, 74, 90].map((x) => (
          <circle key={x} cx={x} cy="56" r="3" />
        ))}
        <path d="M40 56 L30 48 V64 Z" fill="currentColor" stroke="none" />
      </g>
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={124 + i * 6}
          cy="50"
          r={2 + (i % 2)}
          className="pw-bubble"
          style={{ animationDelay: `${i * 0.6}s` }}
        />
      ))}
    </svg>
  );
}

/* Engelsiz kampüs: telefonda çizilen rota ve zıplayan konum işareti */
function CampusAppAnim() {
  return (
    <svg viewBox="0 0 160 90" className="w-full h-auto overflow-visible" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="56" y="2" width="48" height="86" rx="9" />
      <path d="M74 8 H86" opacity="0.5" />
      <path
        d="M66 76 V60 H80 V44 H94 V28"
        strokeDasharray="3 4"
        opacity="0.5"
      />
      <path
        d="M66 76 V60 H80 V44 H94 V28"
        pathLength={100}
        strokeDasharray="100"
        className="pw-route"
      />
      <g transform="translate(94 26)">
        <g className="pw-pin">
          <path d="M0 0 C-7 -8 -7 -16 0 -16 C7 -16 7 -8 0 0 Z" fill="currentColor" stroke="none" />
        </g>
      </g>
      <circle cx="66" cy="76" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* Karşı ateş teknikli İHA: uçan İHA ve kilitlenen nişangâh */
function CounterFireAnim() {
  return (
    <svg viewBox="0 0 160 90" className="w-full h-auto overflow-visible" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <g className="area-hover">
        <path d="M20 40 L56 36 L64 26 H70 L68 36 L90 36 L96 32 H100 L98 40 L100 48 H96 L90 44 L68 44 L70 54 H64 L56 44 L20 40 Z" fill="currentColor" stroke="none" opacity="0.85" />
      </g>
      <g transform="translate(126 44)">
        <g className="pw-lock">
          <circle r="14" />
          <path d="M0 -20 V-10 M0 10 V20 M-20 0 H-10 M10 0 H20" />
        </g>
        <circle r="2.5" fill="currentColor" stroke="none" className="apply-blink" />
      </g>
    </svg>
  );
}

/* Çeşitli mobil uygulamalar: sırayla beliren uygulama kutucukları */
function MobileAppsAnim() {
  const tiles = [0, 1, 2, 3, 4, 5];
  return (
    <svg viewBox="0 0 160 90" className="w-full h-auto overflow-visible" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="56" y="2" width="48" height="86" rx="9" />
      {tiles.map((i) => {
        const x = 66 + (i % 2) * 16;
        const y = 16 + Math.floor(i / 2) * 18;
        return (
          <g key={i} transform={`translate(${x + 6} ${y + 6})`}>
            <rect
              x="-6"
              y="-6"
              width="12"
              height="12"
              rx="3.5"
              fill="currentColor"
              stroke="none"
              className="pw-pop"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          </g>
        );
      })}
      <path d="M74 80 H86" opacity="0.5" />
    </svg>
  );
}

const animations = [FireDetectionAnim, CapsuleAnim, SubmarineAnim, CampusAppAnim, CounterFireAnim, MobileAppsAnim];

export function PastWorkAnimation({ index }: { index: number }) {
  const Anim = animations[index];
  return Anim ? <Anim /> : null;
}
