'use client'

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";

const SLIDES = [
  {
    src: "/hero/lab.webp",
    position: "62% 50%",
    tr: { eyebrow: "Atölyeden", title: "Kendi İHA'larımızı tasarlıyor, üretiyor ve uçuruyoruz" },
    en: { eyebrow: "From the lab", title: "We design, build and fly our own UAVs" },
  },
  {
    src: "/hero/adana.webp",
    position: "50% 40%",
    tr: { eyebrow: "TEKNOFEST Adana 2024", title: "Şampiyonlar Ligi birincisi" },
    en: { eyebrow: "TEKNOFEST Adana 2024", title: "Champions League winners" },
  },
  {
    src: "/hero/kktc.webp",
    position: "50% 45%",
    tr: { eyebrow: "TEKNOFEST KKTC 2025", title: "Turizm Teknolojileri ikincisi" },
    en: { eyebrow: "TEKNOFEST TRNC 2025", title: "Tourism Technologies runner-up" },
  },
];

const INTERVAL_MS = 6000;

export function HeroShowcase() {
  const { language } = useLanguage();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-showcase">
      {SLIDES.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt=""
          width={1600}
          height={1064}
          fetchPriority={i === 0 ? "high" : "low"}
          decoding="async"
          draggable={false}
          data-active={i === active}
          style={{ objectPosition: slide.position }}
        />
      ))}
      <div className="hero-showcase-caption" aria-live="off">
        <p className="hero-showcase-eyebrow">{SLIDES[active][language].eyebrow}</p>
        <p className="hero-showcase-title">{SLIDES[active][language].title}</p>
        <div className="hero-showcase-dots">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`${i + 1} / ${SLIDES.length}`}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
