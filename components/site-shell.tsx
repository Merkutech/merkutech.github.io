'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import { SpotlightCursor } from "@/components/ui/spotlight-cursor";
import { ThemeToggle } from "@/components/theme-toggle";
import { SearchTrigger, SearchInput } from "@/components/ui/search-bar";
import { useLanguage } from "@/lib/i18n/language-context";

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSckYuTY80b2k3wLRspS8xys9TvVyKRoC-WZcsM65g-3LchyWA/closedform";

function FlagTR() {
  return (
    <svg viewBox="0 0 30 20" width="16" height="12" className="rounded-[2px] overflow-hidden shrink-0">
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="11" cy="10" r="3.4" fill="#fff" />
      <circle cx="12.4" cy="10" r="2.7" fill="#E30A17" />
      <polygon
        points="16,10 14.85,10.7 15.2,9.4 14.2,8.6 15.55,8.5 16,7.3 16.45,8.5 17.8,8.6 16.8,9.4 17.15,10.7"
        fill="#fff"
      />
    </svg>
  );
}

function FlagEN() {
  return (
    <svg viewBox="0 0 30 20" width="16" height="12" className="rounded-[2px] overflow-hidden shrink-0">
      <rect width="30" height="20" fill="#012169" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" strokeWidth="3" />
      <path d="M0,0 L30,20 M30,0 L0,20" stroke="#C8102E" strokeWidth="1.4" />
      <rect x="13" y="0" width="4" height="20" fill="#fff" />
      <rect x="0" y="8" width="30" height="4" fill="#fff" />
      <rect x="14" y="0" width="2" height="20" fill="#C8102E" />
      <rect x="0" y="9" width="30" height="2" fill="#C8102E" />
    </svg>
  );
}

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const other = language === "tr" ? "en" : "tr";
  return (
    <button
      type="button"
      onClick={() => setLanguage(other)}
      aria-label={`${t.language[other]} diline geç`}
      suppressHydrationWarning
      className="inline-flex items-center gap-1.5 h-9 px-2.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-neutral-400 hover:text-white hover:border-white/[0.16] hover:bg-white/[0.08] transition-all duration-300"
    >
      {language === "tr" ? <FlagEN /> : <FlagTR />}
      <span className="text-[10px] font-mono font-semibold tracking-wider">
        {language === "tr" ? "EN" : "TR"}
      </span>
    </button>
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

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const { t, language } = useLanguage();

  const openSearch = useCallback(() => {
    setSearchOpen(true);
    setMobileOpen(false);
  }, []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/suas-2026", label: t.nav.suas },
    { href: "/team", label: t.nav.team },
    { href: "/projelerimiz", label: t.nav.projects },
    { href: "/blog", label: t.nav.blog },
    { href: "/iletisim", label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    const cleanPath = pathname.replace(/\/$/, "");
    const cleanHref = href.replace(/\/$/, "");
    if (cleanHref === "") return cleanPath === "";
    return cleanPath === cleanHref || cleanPath.startsWith(cleanHref + "/");
  };

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
            className="site-header-panel mx-auto flex h-14 w-full max-w-3xl items-center overflow-hidden rounded-full border border-white/[0.1] bg-white/[0.04] shadow-xl shadow-black/40 backdrop-blur-2xl"
          >
            <AnimatePresence mode="wait">
              {searchOpen ? (
                <motion.div
                  key="search-mode"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.12 }}
                  className="flex items-center w-full px-5 gap-3"
                >
                  <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                    <img
                      src="/logo-white.png"
                      alt={t.footer.brand}
                      className="h-8 w-auto object-contain"
                    />
                  </Link>
                  <SearchInput onClose={closeSearch} />
                </motion.div>
              ) : (
                <motion.div
                  key="normal-mode"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.12 }}
                  className="flex items-center w-full justify-between px-7"
                >
                  <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                    <img
                      src="/logo-white.png"
                      alt={t.footer.brand}
                      className="h-10 w-auto object-contain"
                    />
                    <span className="site-header-brand text-xs font-semibold tracking-tight text-white whitespace-nowrap">
                      {t.footer.brand}
                    </span>
                  </Link>

                  <nav className="flex items-center gap-0.5">
                    {navLinks.map((link) => {
                      const active = isActive(link.href);
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`relative px-3.5 py-1.5 text-[11px] font-medium rounded-full transition-colors ${
                            active
                              ? "text-white"
                              : "text-neutral-500 hover:text-white"
                          }`}
                        >
                          {link.label}
                          {active && (
                            <motion.div
                              layoutId="nav-indicator"
                              className="site-nav-indicator absolute inset-0 bg-white/[0.08] rounded-full -z-10"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                            />
                          )}
                        </Link>
                      );
                    })}
                  </nav>

                  <div className="flex items-center gap-2">
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <motion.a
                      href={APPLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="site-header-cta inline-flex items-center px-4 py-1.5 rounded-full bg-white text-black text-[11px] font-semibold hover:bg-neutral-200 transition-colors relative overflow-hidden group"
                    >
                      <span className="relative z-10">{t.cta.apply}</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    </motion.a>
                    <SearchTrigger onClick={openSearch} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
              onClick={() => { setMobileOpen(false); setSearchOpen(false); }}
              className="flex min-w-0 items-center gap-3"
            >
              <img
                src="/logo-white.png"
                alt={t.footer.brand}
                className="h-9 w-auto shrink-0 object-contain"
              />
              <span className="min-w-0">
                <span className="site-header-brand block truncate text-sm font-semibold leading-none text-white whitespace-nowrap">
                  {t.footer.brand}
                </span>
              </span>
            </Link>

            <div className="flex shrink-0 items-center gap-2">
              <LanguageSwitcher />
              <SearchTrigger onClick={openSearch} />
              <button
                type="button"
                onClick={() => { setMobileOpen(!mobileOpen); setSearchOpen(false); }}
                className="site-mobile-menu-button inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.06] text-neutral-300 transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.1] hover:text-white"
                aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </motion.div>

          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className="mx-auto mt-2 max-w-md rounded-[1.35rem] border border-white/[0.1] bg-black/70 px-3 py-2 shadow-2xl shadow-black/45 backdrop-blur-2xl"
              >
                <SearchInput onClose={closeSearch} />
              </motion.div>
            )}
          </AnimatePresence>
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
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "bg-white text-black"
                          : "text-neutral-300 hover:bg-white/[0.08] hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className={`h-1.5 w-1.5 rounded-full ${
                        active ? "bg-black" : "bg-white/20"
                      }`} />
                    </Link>
                  );
                })}
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 group flex items-center justify-between rounded-2xl px-4 py-3 bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.14] transition-all"
                >
                  <span className="text-sm font-medium text-white">
                    {t.cta.apply}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Mobil — Tema ve dil satırı */}
                <div className="mt-2 flex items-center justify-between rounded-2xl px-4 py-3 bg-white/[0.04]">
                  <span className="text-sm font-medium text-neutral-300">
                    {language === "tr" ? "Tema" : "Theme"}
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="main-content" className="flex-1">{children}</main>

      <div className="px-4 pb-4">
        <footer className="site-footer max-w-4xl mx-auto rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] px-4 sm:px-5 py-4">
          <div className="flex items-center justify-between mb-3">
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <img
                src="/logo-white.png"
                alt={t.footer.brand}
                className="h-10 w-auto object-contain"
              />
              <span className="site-header-brand text-xs font-semibold tracking-tight text-white whitespace-nowrap">
                {t.footer.brand}
              </span>
            </Link>
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
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.footer.apply}</a>
            <span className="text-neutral-800">·</span>
            <a href="https://chat.whatsapp.com/BDYclqEKqlI6JuJcusQuMZ" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.footer.whatsapp}</a>
            <span className="text-neutral-800">·</span>
            <a href="https://www.instagram.com/arelsavunma" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.footer.instagram}</a>
            <span className="text-neutral-800">·</span>
            <span className="text-neutral-700">&copy; {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    </>
  );
}
