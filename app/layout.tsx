import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Merkutech - İstanbul Arel Üniversitesi",
  description: "İstanbul Arel Üniversitesi Merkutech - Teknoloji ve İnovasyon Kulübü",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                Merkutech
              </span>
            </Link>
            <div className="flex flex-1 items-center justify-end space-x-4 md:justify-between">
              <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
                <Link href="/" className="transition-colors hover:text-primary">
                  Ana Sayfa
                </Link>
                <Link href="/hakkimizda" className="transition-colors hover:text-primary">
                  Hakkımızda
                </Link>
                <Link href="/projelerimiz" className="transition-colors hover:text-primary">
                  Projelerimiz
                </Link>
                <Link href="/ekibimiz" className="transition-colors hover:text-primary">
                  Ekibimiz
                </Link>
                <Link href="/iletisim" className="transition-colors hover:text-primary">
                  İletişim
                </Link>
              </div>
              <MobileNav />
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border/40 py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row px-4 md:px-8">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Merkutech - İstanbul Arel Üniversitesi
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Teknoloji ve İnovasyon Kulübü</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

function MobileNav() {
  return (
    <details className="md:hidden group">
      <summary className="list-none cursor-pointer p-2">
        <Menu className="h-5 w-5 group-open:hidden" />
        <X className="h-5 w-5 hidden group-open:block" />
      </summary>
      <div className="absolute left-0 top-14 w-full border-b border-border bg-background p-4 shadow-lg">
        <div className="flex flex-col space-y-4 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">
            Ana Sayfa
          </Link>
          <Link href="/hakkimizda" className="transition-colors hover:text-primary">
            Hakkımızda
          </Link>
          <Link href="/projelerimiz" className="transition-colors hover:text-primary">
            Projelerimiz
          </Link>
          <Link href="/ekibimiz" className="transition-colors hover:text-primary">
            Ekibimiz
          </Link>
          <Link href="/iletisim" className="transition-colors hover:text-primary">
            İletişim
          </Link>
        </div>
      </div>
    </details>
  );
}
