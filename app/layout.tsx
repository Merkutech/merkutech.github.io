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
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <head>
        <title>MCT SENSOR Merkutech</title>
        <meta name="description" content="Istanbul Arel University Merkutech Robotics and Technology Club — SUAS 2026" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script defer src="https://umami-x7rusnpsmhmu5aj8gy6wfrb2.erencakar.com/script.js" data-website-id="0de9e7f8-36ed-453c-bcc2-301905e1bc56" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/20 transition-colors duration-300">
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
