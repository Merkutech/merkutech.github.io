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
          <div className={`transition-all duration-500 ease-out ${scrolled ? 'pt-4 px-4' : 'pt-0 px-0'}`}>
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`mx-auto flex items-center justify-between transition-all duration-500 ${
                scrolled
                  ? 'max-w-2xl bg-white/[0.05] backdrop-blur-2xl border border-white/[0.12] rounded-full px-6 py-4 shadow-2xl shadow-black/50'
                  : 'max-w-7xl bg-background/80 backdrop-blur-lg px-5 sm:px-8 lg:px-12 py-6'
              }`}
            >
              {/* Logo — sadece yazı, ikon yok */}
              <Link href="/" className="flex items-center gap-2 group">
                <span className="font-semibold text-white tracking-tight text-sm">
                  Merkutech
                </span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
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
            <footer className="relative bg-gradient-to-b from-white/[0.04] to-white/[0.02] backdrop-blur-xl border border-white/[0.1] rounded-3xl overflow-hidden">
              {/* Renkli gradient blob */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]" />

              <div className="relative z-10 px-8 py-12 md:px-14 md:py-16">
                {/* Üst kısım — Logo ve sosyal */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Merkutech</h3>
                    <p className="text-sm text-neutral-500">İstanbul Arel Üniversitesi Robotik ve Teknoloji Kulübü</p>
                  </div>
                  
                  {/* Sosyal Medya İkonları */}
                  <div className="flex items-center gap-3">
                    {[
                      { name: "Instagram", color: "hover:bg-pink-500/20 hover:text-pink-400 hover:border-pink-500/30", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                      { name: "Twitter", color: "hover:bg-sky-500/20 hover:text-sky-400 hover:border-sky-500/30", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                      { name: "LinkedIn", color: "hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/30", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                      { name: "GitHub", color: "hover:bg-purple-500/20 hover:text-purple-400 hover:border-purple-500/30", path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" },
                      { name: "YouTube", color: "hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/30", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                    ].map((social) => (
                      <button
                        key={social.name}
                        className={`w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-neutral-500 transition-all duration-300 ${social.color}`}
                        title={social.name}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d={social.path} />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Linkler grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-semibold">Sayfalar</h4>
                    <ul className="space-y-3">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-semibold">Alanlarımız</h4>
                    <ul className="space-y-3">
                      {["Robotik", "Yapay Zeka", "Drone", "Gömülü Sistemler"].map((item) => (
                        <li key={item} className="text-sm text-neutral-400">{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-semibold">İletişim</h4>
                    <ul className="space-y-3">
                      <li className="text-sm text-neutral-400">İstanbul Arel Üniversitesi</li>
                      <li className="text-sm text-neutral-400">merkutech@arel.edu.tr</li>
                      <li className="text-sm text-neutral-400">+90 212 000 00 00</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-semibold">Yarışmalar</h4>
                    <ul className="space-y-3">
                      {["Teknofest", "Robotaksi", "TÜBİTAK", "IEEE"].map((item) => (
                        <li key={item} className="text-sm text-neutral-400">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Alt kısım */}
                <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-neutral-600">
                    &copy; {new Date().getFullYear()} Merkutech
                  </p>
                  <div className="flex items-center gap-6 text-xs text-neutral-600">
                    <span className="hover:text-neutral-400 cursor-pointer transition-colors">Gizlilik</span>
                    <span className="hover:text-neutral-400 cursor-pointer transition-colors">Kullanım Şartları</span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>

      </body>
    </html>
  );
}
