'use client'

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { GlobeFlights } from "@/components/ui/globe-flights";
import { useLanguage } from "@/lib/i18n/language-context";

const easeOut = [0.22, 1, 0.36, 1] as const;

const linkConfigs = [
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSckYuTY80b2k3wLRspS8xys9TvVyKRoC-WZcsM65g-3LchyWA/closedform",
    icon: <ArrowUpRight className="h-5 w-5" />,
  },
  {
    href: "https://chat.whatsapp.com/BDYclqEKqlI6JuJcusQuMZ",
    icon: <MessageCircle className="h-5 w-5" />,
  },
  {
    href: "https://www.instagram.com/merkutech/",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/arelsavunma",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@merkutech",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
        <path d="m10 15 5-3-5-3z"/>
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/merkutech",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    href: "https://github.com/Merkutech",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 17 5.77a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 0 0-7 0C5.27 1.65 4.09 2 4.09 2A5.07 5.07 0 0 0 4 5.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 19.13V23"/>
      </svg>
    ),
  },
];

export default function IletisimPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row">
      {/* Globe — mobilde altta, masaüstünde solda */}
      <div className="flex-1 flex items-end lg:items-center justify-center px-5 sm:px-8 pb-4 pt-2 sm:py-16 lg:py-0 min-h-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easeOut }}
          className="w-full max-w-[180px] sm:max-w-md lg:max-w-xl"
        >
          <GlobeFlights className="w-full" />
        </motion.div>
      </div>

      {/* Linkler — mobilde üstte, masaüstünde sağda */}
      <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 lg:px-16 pt-20 pb-2 sm:py-16 lg:py-24 border-b lg:border-b-0 border-white/[0.06]">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
          className="max-w-md mx-auto lg:mx-0 w-full"
        >
          <span className="text-xs font-mono text-neutral-600 tracking-[0.3em] uppercase">
            {t.contact.label}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter mt-3 mb-3 sm:mb-4">
            {t.contact.title}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mb-5 sm:mb-12 leading-relaxed hidden sm:block">
            {t.contact.description}
          </p>

          <div className="space-y-0.5 sm:space-y-1">
            {linkConfigs.map((config, i) => {
              const tr = t.contact.links[i];
              return (
              <motion.a
                key={config.href}
                href={config.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: easeOut }}
                className="group flex items-center gap-3 sm:gap-4 py-2.5 sm:py-4 border-b border-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <div className="p-1.5 sm:p-2.5 rounded-lg bg-white/[0.04] text-neutral-500 group-hover:text-white group-hover:bg-white/[0.08] transition-all duration-300 shrink-0">
                  <div className="h-4 w-4 sm:h-5 sm:w-5 [&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5">
                    {config.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] sm:text-sm font-medium text-white truncate">
                    {tr.name}
                  </p>
                  <p className="text-[10px] sm:text-xs text-neutral-600 mt-0.5">
                    {tr.handle}
                  </p>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-neutral-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
