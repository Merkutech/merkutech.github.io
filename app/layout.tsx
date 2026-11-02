import { Geist, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import { LanguageProvider } from "@/lib/i18n/language-context";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-mono",
  display: "swap",
});

const themeScript = `
try {
  var choice = 'system';
  try {
    var stored = localStorage.getItem('merkutech-theme');
    if (stored === 'light' || stored === 'dark' || stored === 'system') choice = stored;
  } catch (_) {}
  var theme = choice === 'system'
    ? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    : choice;
  document.documentElement.dataset.themeChoice = choice;
  try {
    var lang = localStorage.getItem('merkutech-language');
    if (lang !== 'tr' && lang !== 'en') lang = (navigator.language || '').indexOf('tr') === 0 ? 'tr' : 'en';
    document.documentElement.lang = lang;
  } catch (_) {}
  document.documentElement.classList.toggle('light', theme === 'light');
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
  function setFavicon(t) {
    var link = document.querySelector("link[rel='icon'][data-theme-aware]");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/png';
      link.setAttribute('data-theme-aware', '');
      document.head.appendChild(link);
    }
    link.href = t === 'light' ? '/logo-black.png' : '/logo-white.png';
  }
  setFavicon(theme);
} catch (_) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <title>MCT SENSOR Merkutech</title>
        <meta name="description" content="Merkutech, the UAV and defence team of the Arel Defence Industry and Technology Club at Istanbul Arel University" />
        <meta name="theme-color" content="#0a0a0a" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-white focus:text-black focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to content
        </a>
        <LanguageProvider>
          <SiteShell>{children}</SiteShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
