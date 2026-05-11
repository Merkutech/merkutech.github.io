"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type AiVisionProps = {
  cardTitle?: string;
  cardDescription?: string;
};

const gridPoints = Array.from({ length: 12 }, (_, i) => ({
  x: 20 + (i % 4) * 70,
  y: 40 + Math.floor(i / 4) * 70,
}));

const AiVision = ({
  cardTitle = "Yapay Zeka Görüşü",
  cardDescription = "Derin öğrenme ve bilgisayarlı görü ile robotlara karar verme yetisi kazandırıyoruz.",
}: AiVisionProps) => {
  const [scanLine, setScanLine] = useState(0);
  const [activePoint, setActivePoint] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine((prev) => (prev + 1) % 4);
      setActivePoint((prev) => (prev + 1) % gridPoints.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "tech-demo-card relative overflow-hidden",
        "h-[30rem] w-full max-w-[350px]",
        "rounded-md border border-neutral-800 bg-black",
      )}
    >
      <div className="absolute left-1/2 h-full min-w-[300px] max-w-[300px] -translate-x-1/2">
        <div className="relative h-[80%] w-full">
          {/* Grid glow */}
          <motion.div
            className="pointer-events-none absolute top-1/2 left-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Grid lines */}
          <svg width="100%" height="100%" className="pointer-events-none absolute left-0 top-0">
            {/* Vertical lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={`v-${i}`}
                x1={20 + i * 70}
                y1={20}
                x2={20 + i * 70}
                y2={260}
                stroke="var(--tech-green-line)"
                strokeWidth="1"
              />
            ))}
            {/* Horizontal lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={`h-${i}`}
                x1={20}
                y1={20 + i * 70}
                x2={300}
                y2={20 + i * 70}
                stroke="var(--tech-green-line)"
                strokeWidth="1"
              />
            ))}
          </svg>

          {/* Grid points */}
          <svg width="100%" height="100%" className="pointer-events-none absolute left-0 top-0">
            {gridPoints.map((pos, i) => (
              <g key={i}>
                <circle cx={pos.x} cy={pos.y} r={3} fill="var(--tech-green-node)" />
                {activePoint === i && (
                  <>
                    <motion.circle
                      cx={pos.x} cy={pos.y} r={3}
                      fill="#10b981"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.8, 1] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                    <motion.circle
                      cx={pos.x} cy={pos.y} r={10}
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="1"
                      initial={{ opacity: 0.6, scale: 1 }}
                      animate={{ opacity: 0, scale: 2 }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                  </>
                )}
              </g>
            ))}
          </svg>

          {/* Scanning line */}
          <motion.div
            className="absolute left-4 right-4 h-px bg-emerald-500/50"
            style={{ boxShadow: "0 0 12px 2px rgba(16,185,129,0.4)" }}
            animate={{ top: [20, 260, 20] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Active row highlight */}
          <motion.div
            className="absolute left-4 right-4 h-[60px] bg-emerald-500/5"
            animate={{ top: 20 + scanLine * 70 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          {/* Corner brackets */}
          <div className="absolute top-6 left-6 w-6 h-6 border-l-2 border-t-2 border-emerald-800" />
          <div className="absolute top-6 right-6 w-6 h-6 border-r-2 border-t-2 border-emerald-800" />
          <div className="absolute bottom-6 left-6 w-6 h-6 border-l-2 border-b-2 border-emerald-800" />
          <div className="absolute bottom-6 right-6 w-6 h-6 border-r-2 border-b-2 border-emerald-800" />
        </div>
      </div>
      <div className="absolute bottom-5 left-0 w-full px-3">
        <h3 className="text-sm font-semibold text-neutral-100">{cardTitle}</h3>
        <p className="mt-2 text-xs text-neutral-400">{cardDescription}</p>
      </div>
    </div>
  );
};

export default AiVision;
