# Merkutech Website

İstanbul Arel Üniversitesi Merkutech Robotik ve Teknoloji Kulübü için hazırlanmış Next.js web sitesi.

## Teknoloji

- Next.js 16.2.6 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- Static export (GitHub Pages)

## Lokal geliştirme

```bash
npm ci
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışır.

## Production build (lokal kontrol)

```bash
npm run lint
npm run build
```

Statik dosyalar `out/` klasörüne üretilir.

## Deployment

Bu site GitHub Pages üzerinden yayınlanır. `main` branch'ine push yapıldığında `.github/workflows/deploy.yml` workflow'u otomatik olarak build alıp GitHub Pages'e deploy eder.

Site adresi: `https://merkutech.github.io`

### Public repo gereksinimi

GitHub Pages ücretsiz planda yalnızca **public repository**'lerde çalışır. Repo ayarlarından `Change repository visibility → Change to public` ile public yapılmalıdır.

### GitHub Pages ayarları

Repo → **Settings** → **Pages** → **Source**: `GitHub Actions` seçilmeli.

### Custom domain (opsiyonel)

`public/CNAME` dosyasına domain adı yazılır. DNS sağlayıcıda:
- Apex (`@`) → A kayıtları: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `www` → CNAME → `merkutech.github.io`

## Çoklu dil desteği

TR (varsayılan) ve EN. Header'daki 🇹🇷/🇬🇧 switcher ile değiştirilir, seçim `localStorage`'da saklanır. Tüm çeviriler `lib/i18n/translations.ts` içinde tutulur.
