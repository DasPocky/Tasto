# Betrieb

## Adresse

| Adresse | Stand |
|---|---|
| tasto.endlab.de | Live, eigene Domain am Worker `tasto` |
| endlab.de/tasto | leitet dauerhaft (301) auf tasto.endlab.de um, Route `endlab.de/tasto*` |

## Cloudflare

- Konto EndLab, Worker `tasto`, Konto-ID in `wrangler.jsonc`.
- D1 `tasto` (Binding `DB`) für Live, D1 `tasto-vorschau` für Staging.
  Migrationen für beide in `migrations/`.
- Keine Worker-Secrets.
- `workers_dev` ist aus, `preview_urls` an.

## Stufen

| Stufe | Wo | Datenbank |
|---|---|---|
| Test | lokal (`npm run dev:api`) und GitHub Actions | lokale D1 |
| Staging | Vorschau je Zweig oder PR | `tasto-vorschau` |
| Live | `main` | `tasto` |

Vorschauen sehen die Live-Datenbank nie: Der `previews`-Block in
`wrangler.jsonc` bindet `DB` an `tasto-vorschau`. Alle Vorschauen teilen
sich diese eine Staging-Datenbank. Vorschau-Adressen sind öffentlich.

## Deploy über Workers Builds

Workers & Pages → tasto → Settings → Builds:

| Feld | Wert |
|---|---|
| Production branch | `main` |
| Build command | `npm run cf:build` |
| Deploy command | `npm run cf:deploy` |
| Non-production branch deploy command | `npm run cf:preview` |
| API token | `endlab-workers-builds` |

Die Felder ändern sich nie. Was dahinter läuft, steht in `package.json`:

- `cf:build` → `check`: Lint, Typen, Build. Schlägt etwas fehl, geht nichts
  live.
- `cf:deploy`: erst `wrangler d1 migrations apply tasto --remote`, dann
  `wrangler deploy`.
- `cf:preview`: erst die Migrationen auf `tasto-vorschau`
  (`wrangler.preview-migrations.jsonc`), dann `wrangler preview`. Name der
  Vorschau ist der Zweig.
- Nach dem Merge löscht Claude die Vorschau des Zweigs:
  `npx wrangler preview delete --name <zweig>`.

## Prüfung in GitHub

`.github/workflows/pruefung.yml` läuft bei jedem PR und auf `main`:
`npm run check` und gitleaks. Ohne Secrets.

## Rückweg

- Fehlerhafte Version: Workers & Pages → tasto → Deployments → ältere
  Version → **Rollback**.
- Migrationen lassen sich nicht zurückrollen. Deshalb nur Änderungen, die
  die alte Version noch verträgt (Spalten hinzufügen, nicht löschen).
