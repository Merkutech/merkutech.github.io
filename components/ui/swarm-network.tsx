"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type SwarmNetworkProps = {
  cardTitle?: string;
  cardDescription?: string;
};

const nodePositions = [
  { cx: 40, cy: 80 },
  { cx: 110, cy: 60 },
  { cx: 180, cy: 90 },
  { cx: 250, cy: 70 },
  { cx: 80, cy: 160 },
  { cx: 150, cy: 140 },
  { cx: 220, cy: 170 },
  { cx: 50, cy: 230 },
  { cx: 120, cy: 210 },
  { cx: 200, cy: 240 },
];

const connections = [
  [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 5], [3, 6],
  [4, 5], [5, 6], [4, 7], [5, 8], [6, 9], [7, 8], [8, 9],
];

const SwarmNetwork = ({
  cardTitle = "Swarm Network",
  cardDescription = "Çoklu drone koordinasyonu ve sürü algoritmaları ile gerçek zamanlı iletişim protokolleri geliştiriyoruz.",
}: SwarmNetworkProps) => {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    setActiveNode(1);
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodePositions.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "h-[30rem] w-full max-w-[350px]",
        "rounded-md border border-neutral-800 bg-black",
      )}
    >
      <div className="absolute left-1/2 h-full min-w-[300px] max-w-[300px] -translate-x-1/2">
        <div className="relative h-[80%] w-full">
          {/* Radial glow */}
          <motion.div
            className="pointer-events-none absolute top-1/2 left-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Network lines */}
          <svg width="100%" height="100%" className="pointer-events-none absolute left-0 top-0">
            {connections.map(([a, b], i) => (
              <motion.line
                key={i}
                x1={nodePositions[a].cx}
                y1={nodePositions[a].cy}
                x2={nodePositions[b].cx}
                y2={nodePositions[b].cy}
                stroke="#1e3a5f"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
            ))}
          </svg>

          {/* Nodes */}
          <svg width="100%" height="100%" className="pointer-events-none absolute left-0 top-0">
            {nodePositions.map((pos, i) => (
              <g key={i}>
                <circle cx={pos.cx} cy={pos.cy} r={4} fill="#1e3a5f" />
                {activeNode === i && (
                  <>
                    <motion.circle
                      cx={pos.cx} cy={pos.cy} r={4}
                      fill="#3b82f6"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.circle
                      cx={pos.cx} cy={pos.cy} r={12}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="1"
                      initial={{ opacity: 0.8, scale: 1 }}
                      animate={{ opacity: 0, scale: 2 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </>
                )}
              </g>
            ))}
          </svg>

          {/* Data packet animation */}
          {connections.map(([a, b], i) => (
            activeNode === a && (
              <motion.div
                key={`packet-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_2px_rgba(59,130,246,0.8)]"
                initial={{
                  left: nodePositions[a].cx - 3,
                  top: nodePositions[a].cy - 3,
                  opacity: 1,
                }}
                animate={{
                  left: nodePositions[b].cx - 3,
                  top: nodePositions[b].cy - 3,
                  opacity: [1, 1, 0],
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            )
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 left-0 w-full px-3">
        <h3 className="text-sm font-semibold text-neutral-100">{cardTitle}</h3>
        <p className="mt-2 text-xs text-neutral-400">{cardDescription}</p>
      </div>
    </div>
  );
};

export default SwarmNetwork;
