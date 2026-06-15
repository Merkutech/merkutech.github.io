import { SiteShell } from "@/components/site-shell";
import { LanguageProvider } from "@/lib/i18n/language-context";
import "./globals.css";

const themeScript = `
try {
  var theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
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
      lang="tr"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <head>
        <title>MCT SENSOR Merkutech</title>
        <meta name="description" content="İstanbul Arel Üniversitesi Merkutech Robotik ve Teknoloji Kulübü" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20 transition-colors duration-300">
        <LanguageProvider>
          <SiteShell>{children}</SiteShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
