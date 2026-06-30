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
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="preconnect" href="https://prod.spline.design" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        <link rel="preload" as="fetch" href="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://umami-x7rusnpsmhmu5aj8gy6wfrb2.erencakar.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://umami-x7rusnpsmhmu5aj8gy6wfrb2.erencakar.com" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=function(){var s=document.createElement('script');s.defer=true;s.src='https://umami-x7rusnpsmhmu5aj8gy6wfrb2.erencakar.com/script.js';s.setAttribute('data-website-id','0de9e7f8-36ed-453c-bcc2-301905e1bc56');document.body.appendChild(s);};if('requestIdleCallback'in window){requestIdleCallback(l,{timeout:3500});}else{setTimeout(l,2500);}})();`,
          }}
        />
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
