'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { SpotlightCursor } from "@/components/ui/spotlight-cursor";
import { ThemeToggle } from "@/components/theme-toggle";
import { SearchTrigger, SearchInput } from "@/components/ui/search-bar";
import { useLanguage } from "@/lib/i18n/language-context";

const APPLY_URL = "/basvuru/";

function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();
  const options = [
    { code: "tr", label: t.language.tr },
    { code: "en", label: t.language.en },
  ] as const;

  return (
    <div
      role="group"
      aria-label={language === "tr" ? "Dil" : "Language"}
      suppressHydrationWarning
      className={`seg-control seg-lang ${className}`}
    >
      <span className="seg-thumb" aria-hidden="true" />
      {options.map((o) => (
        <button
          key={o.code}
          type="button"
          onClick={() => setLanguage(o.code)}
          aria-pressed={language === o.code}
          aria-label={o.label}
          title={o.label}
          data-lang={o.code}
          className="seg-option"
        >
          {o.code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function SocialIcon({ href, label, children, className }: { href: string; label: string; children: React.ReactNode; className?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className ?? "inline-flex h-8 w-8 items-center justify-center text-neutral-500 hover:text-white transition-colors duration-300"}
    >
      {children}
    </a>
  );
}

function SocialLinks({ itemClassName }: { itemClassName?: string }) {
  return (
    <>
      <SocialIcon className={itemClassName} href="https://www.instagram.com/merkutech/" label="Merkutech Instagram">
        <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      </SocialIcon>
      <SocialIcon className={itemClassName} href="https://www.youtube.com/@merkutech" label="Merkutech YouTube">
        <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
          <path d="m10 15 5-3-5-3z"/>
        </svg>
      </SocialIcon>
      <SocialIcon className={itemClassName} href="https://www.linkedin.com/company/merkutech" label="Merkutech LinkedIn">
        <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect width="4" height="12" x="2" y="9"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      </SocialIcon>
    </>
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

  // Menü açıkken sayfa kaymasın; Escape ve sayfa değişimi menüyü kapatsın
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMobileOpen(false);
  }

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/team", label: t.nav.team },
    { href: "/projelerimiz", label: t.nav.projects },
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
        <div className="hidden md:flex items-start justify-center gap-2.5 px-4 pt-3">
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 350, damping: 32 }}
            className={`site-header-panel flex h-12 w-full max-w-4xl items-center rounded-full border border-white/[0.1] bg-white/[0.04] shadow-xl shadow-black/40 backdrop-blur-2xl ${searchOpen ? "overflow-visible" : "overflow-hidden"}`}
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
                      className="h-7 w-auto object-contain"
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
                  className="flex items-center w-full justify-between px-5"
                >
                  <Link href="/" className="flex items-center gap-1.5 flex-shrink-0">
                    <img
                      src="/logo-white.png"
                      alt={t.footer.brand}
                      className="h-7 w-auto object-contain"
                    />
                    <span className="site-header-brand text-[10px] font-semibold tracking-tight text-white whitespace-nowrap hidden lg:block">
                      {t.footer.brand}
                    </span>
                  </Link>

                  <nav className="flex items-center gap-0">
                    {navLinks.map((link) => {
                      const active = isActive(link.href);
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`relative px-2.5 py-1.5 text-[11px] font-medium rounded-full transition-colors ${
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

                  <div className="flex items-center gap-1.5">
                    <SearchTrigger onClick={openSearch} />
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <motion.a
                      href={APPLY_URL}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="site-header-cta inline-flex items-center px-3 py-1.5 rounded-full bg-white text-black text-[10px] font-semibold hover:bg-neutral-200 transition-colors relative overflow-hidden group"
                    >
                      <span className="relative z-10 whitespace-nowrap">{t.cta.apply}</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    </motion.a>
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
            className="site-mobile-header relative z-50 mx-auto flex h-14 max-w-md items-center justify-between rounded-[1.35rem] border border-white/[0.1] bg-black/55 pl-3 pr-1.5 shadow-2xl shadow-black/45 backdrop-blur-2xl"
          >
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex min-w-0 items-center gap-2.5"
            >
              <img
                src="/logo-white.png"
                alt={t.footer.brand}
                className="h-8 w-auto shrink-0 object-contain"
              />
              <span className="site-header-brand block truncate text-[13px] font-semibold leading-none text-white whitespace-nowrap">
                {t.footer.brand}
              </span>
            </Link>

            <div className="flex shrink-0 items-center">
              <SearchTrigger onClick={openSearch} />
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="site-mobile-menu-button relative inline-flex h-11 w-11 items-center justify-center"
                aria-label={mobileOpen ? (language === "tr" ? "Menüyü kapat" : "Close menu") : (language === "tr" ? "Menüyü aç" : "Open menu")}
                aria-expanded={mobileOpen}
              >
                {/* İki çizgi: açılınca çarpıya döner */}
                <span className={`mm-bar ${mobileOpen ? "translate-y-0 rotate-45" : "-translate-y-[4px]"}`} />
                <span className={`mm-bar ${mobileOpen ? "translate-y-0 -rotate-45" : "translate-y-[4px]"}`} />
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
              key="mobile-sheet"
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 28px)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0 0% 0 round 28px)" }}
              exit={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 28px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mobile-sheet fixed inset-x-3 top-[4.6rem] bottom-3 z-40 flex flex-col overflow-hidden rounded-[1.75rem] md:hidden"
            >
              <nav aria-label={language === "tr" ? "Ana menü" : "Main menu"} className="flex-1 overflow-y-auto px-6 pt-8">
                <ul className="space-y-1">
                  {navLinks.map((link, i) => {
                    const active = isActive(link.href);
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.08 + i * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className="mm-link group flex items-baseline gap-4 py-2.5"
                        >
                          <span className="mm-num font-mono text-xs tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                          <span className="text-[2.1rem] font-semibold leading-tight tracking-[-0.03em]">{link.label}</span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="shrink-0 space-y-5 px-6 pb-6 pt-4"
              >
                <a
                  href={APPLY_URL}
                  onClick={() => setMobileOpen(false)}
                  className="mm-cta flex items-center justify-center gap-2 rounded-full px-5 py-4 text-[15px] font-semibold transition-colors"
                >
                  {t.cta.apply}
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <div className="flex items-center justify-between gap-3">
                  <LanguageSwitcher />
                  <ThemeToggle />
                </div>

                <div className="flex items-center gap-1 -ml-2">
                  <SocialLinks itemClassName="mm-social inline-flex h-9 w-9 items-center justify-center transition-colors" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="main-content" className="flex-1">{children}</main>

      <div className="px-4 pb-4 pt-16">
        <footer className="site-footer relative max-w-6xl mx-auto overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] px-6 sm:px-10 pt-10 pb-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <Link href="/" className="flex items-center gap-2.5">
                <img
                  src="/logo-white.png"
                  alt={t.footer.brand}
                  className="h-10 w-auto object-contain"
                />
                <span className="site-header-brand text-sm font-semibold tracking-tight text-white whitespace-nowrap">
                  {t.footer.brand}
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">{t.home.subtitle}</p>
            </div>

            <nav aria-label={language === "tr" ? "Sayfalar" : "Pages"}>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-600">
                {language === "tr" ? "Sayfalar" : "Pages"}
              </p>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-neutral-400 hover:text-white transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-600">
                {language === "tr" ? "Topluluk" : "Community"}
              </p>
              <ul className="space-y-2 text-sm">
                <li><a href={APPLY_URL} className="text-neutral-400 hover:text-white transition-colors">{t.footer.apply}</a></li>
                <li><a href="https://chat.whatsapp.com/BDYclqEKqlI6JuJcusQuMZ" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">{t.footer.whatsapp}</a></li>
                <li><a href="https://www.instagram.com/arelsavunma" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">{t.footer.instagram}</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs text-neutral-600">&copy; {new Date().getFullYear()} {t.footer.brand}</span>
            <div className="flex items-center gap-1 -ml-2 sm:ml-0 sm:-mr-2">
              <SocialLinks />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
