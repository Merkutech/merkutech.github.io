"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PenLine } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

const easeOut = [0.22, 1, 0.36, 1] as const;

function GhostCard({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.1, ease: easeOut }}
      className="relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.015] p-5"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.6, ease: "easeInOut" }}
      />
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-3 rounded-full bg-white/[0.05]" />
        <div className="w-16 h-3 rounded-full bg-white/[0.03]" />
      </div>
      <div className="space-y-2.5">
        <div className="w-3/4 h-4 rounded bg-white/[0.06]" />
        <div className="w-full h-3 rounded bg-white/[0.03]" />
        <div className="w-2/3 h-3 rounded bg-white/[0.03]" />
      </div>
    </motion.div>
  );
}

export default function BlogPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <p className="text-sm font-mono text-primary/80 mb-2">
            {language === "tr" ? "Merkutech" : "Merkutech"}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tighter">
            {language === "tr" ? "Blog" : "Blog"}
          </h1>
          <p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
            {language === "tr"
              ? "Projelerimiz, etkinliklerimiz ve teknoloji üzerine yazılarımız."
              : "Our projects, events, and writings on technology."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
          className="mt-16 space-y-4"
        >
          <GhostCard index={0} />
          <GhostCard index={1} />
          <GhostCard index={2} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: easeOut }}
          className="mt-8 flex items-center justify-center gap-2.5 text-neutral-500"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <PenLine className="h-3.5 w-3.5" />
          </motion.div>
          <span className="text-xs tracking-wide">
            {language === "tr" ? "Yakında burada" : "Coming soon"}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
