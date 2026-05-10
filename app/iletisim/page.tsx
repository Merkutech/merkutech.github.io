'use client'

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { GlobeFlights } from "@/components/ui/globe-flights";

const easeOut = [0.22, 1, 0.36, 1] as const;

const links = [
  {
    name: "Takıma Başvur",
    handle: "Google Form",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSckYuTY80b2k3wLRspS8xys9TvVyKRoC-WZcsM65g-3LchyWA/closedform",
    icon: <ArrowUpRight className="h-5 w-5" />,
  },
  {
    name: "Arel Savunma Sanayi Kulübü WhatsApp Grubu",
    handle: "WhatsApp Community",
    href: "https://chat.whatsapp.com/BDYclqEKqlI6JuJcusQuMZ",
    icon: <MessageCircle className="h-5 w-5" />,
  },
  {
    name: "Merkutech Instagram",
    handle: "@merkutech",
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
    name: "Arel Savunma Sanayi Kulübü Instagram",
    handle: "@arelsavunma",
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
    name: "Merkutech YouTube",
    handle: "Merkutech",
    href: "https://www.youtube.com/@merkutech",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
        <path d="m10 15 5-3-5-3z"/>
      </svg>
    ),
  },
  {
    name: "Merkutech LinkedIn",
    handle: "Merkutech",
    href: "https://www.linkedin.com/company/merkutech",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

export default function IletisimPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Sol — Globe */}
      <div className="flex-1 flex items-center justify-center px-8 py-24 lg:py-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: easeOut }}
          className="w-full max-w-xl"
        >
          <GlobeFlights className="w-full" />
        </motion.div>
      </div>

      {/* Sağ — Linkler */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-24 border-t lg:border-t-0 lg:border-l border-white/[0.06]">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
          className="max-w-md"
        >
          <span className="text-xs font-mono text-neutral-600 tracking-[0.3em] uppercase">
            Merkutech
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mt-3 mb-4">
            Bize Ulaşın
          </h1>
          <p className="text-sm text-neutral-500 mb-12 leading-relaxed">
            Tüm sosyal medya hesaplarımız ve iletişim kanallarımız burada. Takip et, bize katıl.
          </p>

          <div className="space-y-1">
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: easeOut }}
                className="group flex items-center gap-4 py-4 border-b border-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-white/[0.04] text-neutral-500 group-hover:text-white group-hover:bg-white/[0.08] transition-all duration-300">
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {link.name}
                  </p>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    {link.handle}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-neutral-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
