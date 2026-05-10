'use client'

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { SpotlightCursor } from "@/components/ui/spotlight-cursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/projelerimiz", label: "Projelerimiz" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <title>Merkutech - İstanbul Arel Üniversitesi Robotik Kulübü</title>
        <meta name="description" content="İstanbul Arel Üniversitesi Merkutech Robotik ve Teknoloji Kulübü" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-white/20">
        <div className="fixed inset-0 pointer-events-none z-0">
          <SpotlightCursor size={250} className="from-white/10 via-white/5 to-white/2" />
        </div>

        {/* Header — sadece floating, scroll ile belirir */}
        <header className="fixed top-0 left-0 right-0 z-50">
          <div className="pt-3 px-4">
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
              className="mx-auto max-w-lg h-12 bg-white/[0.04] backdrop-blur-2xl border border-white/[0.1] rounded-full px-5 shadow-xl shadow-black/40 flex items-center justify-between overflow-hidden"
            >
              <Link href="/" className="flex-shrink-0">
                <span className="font-semibold text-white tracking-tight text-xs">
                  Merkutech
                </span>
              </Link>

              <nav className="hidden md:flex items-center gap-0.5">
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
                        className="absolute inset-0 bg-white/[0.08] rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </Link>
                ))}
              </nav>

              {/* Takıma Başvur — beyaz, animasyonlu */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full bg-white text-black text-[11px] font-semibold hover:bg-neutral-200 transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10">Takıma Başvur</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-1.5 rounded-md hover:bg-white/5 transition-colors"
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </motion.div>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-white/[0.06] mx-4 mt-2 rounded-2xl"
              >
                <div className="px-4 py-3 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                        pathname === link.href
                          ? "text-white bg-white/10"
                          : "text-neutral-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="flex-1">{children}</main>

        {/* Footer — floating, ikonlu, linkli */}
        <div className="px-4 pb-4">
          <footer className="max-w-7xl mx-auto rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] px-5 py-4">
            {/* Üst satır: Logo + Sosyal İkonlar */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xl font-bold text-white tracking-tight">Merkutech</span>
              <div className="flex items-center gap-2">
                <SocialIcon href="#" label="Merkutech Instagram">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="#" label="Arel Savunma Sanayi Kulübü Instagram">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="#" label="Merkutech YouTube">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                    <path d="m10 15 5-3-5-3z"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="#" label="Merkutech LinkedIn">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </SocialIcon>
                <SocialIcon href="#" label="Arel Savunma Sanayi Kulübü WhatsApp Grubu">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </SocialIcon>
              </div>
            </div>

            {/* Alt satır: Tüm Linkler */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] text-neutral-500">
              <a href="#" className="hover:text-white transition-colors">Takım Başvurusu</a>
              <span className="text-neutral-800">·</span>
              <a href="#" className="hover:text-white transition-colors">WhatsApp Grubu</a>
              <span className="text-neutral-800">·</span>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <span className="text-neutral-800">·</span>
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
              <span className="text-neutral-800">·</span>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <span className="text-neutral-800">·</span>
              <span className="text-neutral-700">&copy; {new Date().getFullYear()}</span>
            </div>
          </footer>
        </div>

      </body>
    </html>
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
