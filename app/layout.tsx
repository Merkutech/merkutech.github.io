'use client'

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SpotlightCursor } from "@/components/ui/spotlight-cursor";
import { ThemeToggle } from "@/components/theme-toggle";
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
  { href: "/iletisim", label: "İletişim" },
];

const themeScript = `
try {
  var theme = localStorage.getItem('merkutech-theme') === 'light' ? 'light' : 'dark';
  document.documentElement.classList.toggle('light', theme === 'light');
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
} catch (_) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <title>MCT SENSOR Merkutech</title>
        <meta name="description" content="İstanbul Arel Üniversitesi Merkutech Robotik ve Teknoloji Kulübü" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20 transition-colors duration-300">
        <div className="fixed inset-0 pointer-events-none z-0">
          <SpotlightCursor size={250} className="from-foreground/10 via-foreground/5 to-foreground/0" />
        </div>

        {/* Header — sadece floating, scroll ile belirir */}
        <header className="fixed top-0 left-0 right-0 z-50">
          <div className="pt-3 px-4">
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
              className="mx-auto max-w-xl h-12 bg-white/[0.04] backdrop-blur-2xl border border-white/[0.1] rounded-full px-5 shadow-xl shadow-black/40 flex items-center justify-between overflow-hidden"
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

              <div className="hidden md:flex items-center gap-2">
                <ThemeToggle />
                {/* Takıma Başvur — beyaz, animasyonlu */}
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSckYuTY80b2k3wLRspS8xys9TvVyKRoC-WZcsM65g-3LchyWA/closedform"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-black text-[11px] font-semibold hover:bg-neutral-200 transition-colors relative overflow-hidden group"
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

              <div className="flex md:hidden items-center gap-1.5">
                <ThemeToggle />
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="p-1.5 rounded-md hover:bg-white/5 transition-colors"
                  aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
                >
                  {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </button>
              </div>
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
            {/* Üst satır: Logo + Sosyal İkonlar (sadece Merkutech IG, YT, LinkedIn) */}
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

            {/* Alt satır: Yazı linkler */}
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
