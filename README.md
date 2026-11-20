# Tasto

Tipptrainer für das 10-Finger-System im Browser – adaptives Training, Tipp-Test und Bestenliste.
Läuft auf Cloudflare Workers unter `tasto.endlab.de`.

## Entwicklung

```bash
npm install
npm run dev
```

## Stack

React · TypeScript · Vite · Tailwind CSS · shadcn/ui · Hono · Cloudflare Workers · D1

## Look und Vollbild

EndLab-Look wie in allen EndLab-Apps: Schrift Sora (selbst ausgeliefert),
Marineblau mit Eisblau, hell „Welle“, dunkel „Nachthimmel“ nach der
Systemeinstellung, unten „Powered by EndLab“. Vorlage: `src/endlab/endlab.css`, in allen Apps
gleich halten.

Auf dem Handy reicht die Seite bis an alle Ränder (`viewport-fit=cover`,
Hintergrund auch auf `<html>`). Bedienbares hält mit
`env(safe-area-inset-*)` Abstand zu Notch, Kamera-Loch und Home-Leiste, auch
im Querformat.

## Prüfen und Deploy

```bash
npm run check
```

Prüft Lint, Typen und Build. Deployt wird nur über Cloudflare Workers Builds
nach dem Merge auf `main`, nie von Hand. Einstellungen, Datenbank und Rückweg:
[`docs/betrieb.md`](docs/betrieb.md).
