# Coolify Deployment Rehberi

Bu proje Next.js 16.2.6 App Router kullanir ve Coolify uzerinde Docker image olarak yayinlanmaya hazirdir.

## On kosullar

- Sunucuda Coolify kurulu ve domain DNS kaydi sunucuya yonlenmis olmali.
- Repository Coolify tarafindan okunabilir olmali.
- Node.js icin proje gereksinimi `>=20.9`; Docker build ise `node:20-alpine` taban imajini kullanir.

## Coolify ayarlari

1. Coolify panelinde `New Resource` > `Application` secin.
2. Git repository'yi baglayin.
3. Build pack olarak `Dockerfile` secin.
4. Dockerfile yolu: `./Dockerfile`
5. Port olarak `3000` kullanin.
6. Domain alanina yayinlanacak domaini girin.
7. Environment variables alaninda su degerleri yeterlidir:

```env
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
NEXT_TELEMETRY_DISABLED=1
```

Coolify'da `NODE_ENV=production` icin `Available at Buildtime` secenegini kapali tutun. Runtime'da production olmasi yeterlidir. Dockerfile build asamasinda `npm ci --include=dev` kullandigi icin Tailwind/PostCSS gibi build araclari kurulmaya devam eder, ancak build-time `NODE_ENV=production` uyarisi almamak icin bu degiskeni runtime-only birakin.

Bu projede su an zorunlu gizli environment variable yoktur. Ileride client tarafinda kullanilacak degiskenler `NEXT_PUBLIC_` ile baslamali ve build sirasinda set edilmelidir; Next.js bu degerleri client bundle'a build aninda gomdugu icin sonradan degistirmek yeni deployment gerektirir.

## Health check

Uygulama saglik kontrolu icin asagidaki endpoint'i sunar:

```txt
/api/health
```

Docker Compose healthcheck de bu endpoint'i kullanir. Coolify healthcheck URL'i isterse `http://127.0.0.1:3000/api/health` olarak girilebilir. Production Docker imajinda Coolify healthcheck icin `curl` bulunur.

## Lokal dogrulama

Deployment oncesi lokal kontrol:

```bash
npm ci
npm run lint
npm run build
```

Docker ile kontrol:

```bash
docker build -t merkutech-website .
docker run --rm -p 3000:3000 merkutech-website
```

Ardindan:

```bash
curl http://localhost:3000/api/health
```

## Coolify deployment akisi

1. Degisiklikleri repository'ye pushlayin.
2. Coolify uygulamasinda `Deploy` calistirin.
3. Build loglarinda `npm ci` ve `npm run build` adimlarinin tamamlandigini kontrol edin.
4. Container ayaga kalktiktan sonra domain uzerinden siteyi ve `/api/health` endpoint'ini kontrol edin.

## Notlar

- `next.config.ts` icinde `output: "standalone"` aktif. Bu, Docker image icine sadece gerekli runtime dosyalarinin alinmasini saglar.
- Google Fonts build sirasinda dis aga bagimli oldugu icin kaldirildi; uygulama sistem font stack ile calisir. Bu, Coolify build'lerinin ag kesintilerinden etkilenmesini azaltir.
- `images.unoptimized: true` aktif oldugu icin ek `sharp` kurulumu gerekmiyor.
