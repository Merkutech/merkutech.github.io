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
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/projelerimiz", label: "Projelerimiz" },
  { href: "/iletisim", label: "İletişim" },
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

        {/* Header — floating pill on scroll */}
        <header className="fixed top-0 left-0 right-0 z-50">
          <div className={`transition-all duration-500 ease-out ${scrolled ? 'pt-3 px-4' : 'pt-0 px-0'}`}>
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`mx-auto flex items-center justify-between transition-all duration-500 ${
                scrolled
                  ? 'max-w-xl bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-full px-5 py-2.5 shadow-2xl shadow-black/50'
                  : 'max-w-7xl border-b border-white/[0.06] px-5 sm:px-8 lg:px-12 py-4'
              }`}
            >
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group">
                <div className={`flex items-center justify-center bg-white/[0.1] rounded-lg transition-all duration-500 ${scrolled ? 'w-6 h-6' : 'w-8 h-8'}`}>
                  <svg viewBox="0 0 24 24" className={`text-white transition-all duration-500 ${scrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1z"/>
                    <path d="M12 20a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"/>
                    <path d="M2 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1z"/>
                    <path d="M20 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1z"/>
                    <circle cx="12" cy="12" r="4"/>
                    <path d="m4.93 4.93 1.41 1.41"/>
                    <path d="m17.66 17.66 1.41 1.41"/>
                    <path d="m4.93 19.07 1.41-1.41"/>
                    <path d="m17.66 6.34 1.41-1.41"/>
                  </svg>
                </div>
                <span className={`font-semibold text-white tracking-tight transition-all duration-500 ${scrolled ? 'text-xs' : 'text-sm'}`}>
                  Merkutech
                </span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                      pathname === link.href
                        ? "text-white"
                        : "text-neutral-500 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                ))}
              </nav>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
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

        {/* Floating Footer */}
        <div className="px-4 pb-6">
          <div className="max-w-7xl mx-auto">
            <footer className="bg-white/[0.02] border border-white/[0.06] rounded-2xl px-6 py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1z"/>
                      <path d="M12 20a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"/>
                      <path d="M2 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1z"/>
                      <path d="M20 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1z"/>
                      <circle cx="12" cy="12" r="4"/>
                      <path d="m4.93 4.93 1.41 1.41"/>
                      <path d="m17.66 17.66 1.41 1.41"/>
                      <path d="m4.93 19.07 1.41-1.41"/>
                      <path d="m17.66 6.34 1.41-1.41"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white">Merkutech</span>
                </div>
                <div className="flex items-center gap-8 text-sm text-neutral-500">
                  {navLinks.slice(1).map((link) => (
                    <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.04] text-center text-xs text-neutral-700">
                &copy; {new Date().getFullYear()} Merkutech
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
