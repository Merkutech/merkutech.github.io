'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SpotlightCursor } from "@/components/ui/spotlight-cursor";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/projelerimiz", label: "Projelerimiz" },
  { href: "/iletisim", label: "İletişim" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0">
        <SpotlightCursor size={250} className="from-foreground/10 via-foreground/5 to-foreground/0" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="hidden px-4 pt-3 md:block">
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 350, damping: 32 }}
            className="site-header-panel mx-auto flex h-12 w-full max-w-xl items-center justify-between overflow-hidden rounded-full border border-white/[0.1] bg-white/[0.04] px-5 shadow-xl shadow-black/40 backdrop-blur-2xl"
          >
            <Link href="/" className="flex-shrink-0">
              <span className="site-header-brand text-xs font-semibold tracking-tight text-white">
                Merkutech
              </span>
            </Link>

            <nav className="flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-[11px] font-medium rounded-full transition-colors ${
                    pathname === link.href
                      ? "text-white"
                      : "text-neutral-500 hover:text-white"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="site-nav-indicator absolute inset-0 bg-white/[0.08] rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSckYuTY80b2k3wLRspS8xys9TvVyKRoC-WZcsM65g-3LchyWA/closedform"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="site-header-cta inline-flex items-center px-4 py-1.5 rounded-full bg-white text-black text-[11px] font-semibold hover:bg-neutral-200 transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10">Takıma Başvur</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="px-3 pt-3 md:hidden">
          <motion.div
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 360, damping: 34 }}
            className="site-mobile-header mx-auto flex h-14 max-w-md items-center justify-between rounded-[1.35rem] border border-white/[0.1] bg-black/55 px-3 shadow-2xl shadow-black/45 backdrop-blur-2xl"
          >
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex min-w-0 items-center gap-3"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl border border-white/[0.1] bg-white/[0.07] text-[11px] font-bold text-white">
                M
              </span>
              <span className="min-w-0">
                <span className="site-header-brand block truncate text-sm font-semibold leading-none text-white">
                  Merkutech
                </span>
                <span className="mt-1 block truncate text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  Robotik Kulübü
                </span>
              </span>
            </Link>

            <div className="flex shrink-0 items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="site-mobile-menu-button inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.06] text-neutral-300 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.1] hover:text-white"
                aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="site-mobile-menu mx-3 mt-2 overflow-hidden rounded-[1.35rem] border border-white/[0.1] bg-black/70 p-2 shadow-2xl shadow-black/45 backdrop-blur-2xl md:hidden"
            >
              <div className="mx-auto max-w-md space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-white text-black"
                        : "text-neutral-300 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className={`h-1.5 w-1.5 rounded-full ${
                      pathname === link.href ? "bg-black" : "bg-white/20"
                    }`} />
                  </Link>
                ))}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSckYuTY80b2k3wLRspS8xys9TvVyKRoC-WZcsM65g-3LchyWA/closedform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-neutral-200"
                >
                  Takıma Başvur
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">{children}</main>

      <div className="px-4 pb-4">
        <footer className="max-w-4xl mx-auto rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] px-4 sm:px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xl font-bold text-white tracking-tight">Merkutech</span>
            <div className="flex items-center gap-2">
              <SocialIcon href="https://www.instagram.com/merkutech/" label="Merkutech Instagram">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com/@merkutech" label="Merkutech YouTube">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <path d="m10 15 5-3-5-3z"/>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/merkutech" label="Merkutech LinkedIn">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </SocialIcon>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] text-neutral-500">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSckYuTY80b2k3wLRspS8xys9TvVyKRoC-WZcsM65g-3LchyWA/closedform" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Takım Başvurusu</a>
            <span className="text-neutral-800">·</span>
            <a href="https://chat.whatsapp.com/BDYclqEKqlI6JuJcusQuMZ" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Arel Savunma Sanayi WhatsApp</a>
            <span className="text-neutral-800">·</span>
            <a href="https://www.instagram.com/arelsavunma" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Arel Savunma Sanayi Instagram</a>
            <span className="text-neutral-800">·</span>
            <span className="text-neutral-700">&copy; {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    </>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
    >
      {children}
    </a>
  );
}
