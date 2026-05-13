# Merkutech Website

İstanbul Arel Üniversitesi Merkutech Robotik ve Teknoloji Kulübü için hazırlanmış Next.js web sitesi.

## Teknoloji

- Next.js 16.2.6
- React 19
- Tailwind CSS 4
- TypeScript
- Docker standalone output

## Lokal geliştirme

```bash
npm ci
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışır.

## Production kontrol

```bash
npm run lint
npm run build
npm run start
```

Health check endpoint:

```txt
/api/health
```

## Coolify

Coolify üzerinde Dockerfile ile yayınlamak için [COOLIFY_DEPLOYMENT.md](./COOLIFY_DEPLOYMENT.md) dosyasındaki adımları izleyin.
