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
    setScrolled(latest > 50);
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
      <body className="min-h-full flex flex-col bg-neutral-950 text-white selection:bg-white/20">
        <div className="fixed inset-0 pointer-events-none z-0">
          <SpotlightCursor size={250} className="from-white/10 via-white/5 to-white/2" />
        </div>
        
        {/* Floating Header */}
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
        >
          <div className={`rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'glass'}`}>
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-lg font-bold gradient-text group-hover:opacity-80 transition-opacity">
                Merkutech
              </span>
              <span className="text-[10px] font-mono text-neutral-500 border border-neutral-800 rounded px-1.5 py-0.5 hidden sm:inline-block">
                ROBOTICS
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    pathname === link.href 
                      ? "text-white bg-white/10" 
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-white/10 -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="md:hidden mt-2 glass-strong rounded-2xl p-4"
              >
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3 text-sm font-medium rounded-lg transition-all ${
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
        </motion.nav>

        <main className="flex-1 pt-20">{children}</main>
        
        <footer className="border-t border-white/[0.06] py-12">
          <div className="container max-w-5xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold gradient-text">Merkutech</span>
                <span className="text-[10px] font-mono text-neutral-600 border border-neutral-800 rounded px-1.5 py-0.5">
                  ROBOTICS
                </span>
              </div>
              <div className="flex items-center gap-8 text-sm text-neutral-500">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/[0.06] text-center text-xs text-neutral-600">
              &copy; {new Date().getFullYear()} Merkutech - İstanbul Arel Üniversitesi Robotik Kulübü
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
