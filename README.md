# Tasto

Tipptrainer für das 10-Finger-System im Browser – adaptives Training, Tipp-Test und Bestenliste.
Läuft auf Cloudflare Workers unter `endlab.de/tasto`.

## Entwicklung

```bash
npm install
npm run dev
```

## Stack

React · TypeScript · Vite · Tailwind CSS · shadcn/ui · Hono · Cloudflare Workers · D1

## Prüfen und Deploy

```bash
npm run check
```

Prüft Lint, Typen und Build. Deployt wird nur über Cloudflare Workers Builds
nach dem Merge auf `main`, nie von Hand. Einstellungen, Datenbank und Rückweg:
[`docs/betrieb.md`](docs/betrieb.md).
