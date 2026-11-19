# Betrieb

## Adresse

| Adresse | Stand |
|---|---|
| endlab.de/tasto | heute, Route `endlab.de/tasto*` |
| tasto.endlab.de | Ziel, Umzug folgt |

## Cloudflare

- Konto EndLab, Worker `tasto`, Konto-ID in `wrangler.jsonc`.
- D1 `tasto` (Binding `DB`), Migrationen in `migrations/`.
- Keine Worker-Secrets.

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
- `cf:preview`: `wrangler versions upload`, ohne Migrationen. Die Vorschau
  hat eine eigene Adresse, nutzt aber die echte Datenbank `tasto`; Ergebnisse
  aus Vorschauen landen also in der Bestenliste.

## Prüfung in GitHub

`.github/workflows/pruefung.yml` läuft bei jedem PR und auf `main`:
`npm run check` und gitleaks. Ohne Secrets.

## Rückweg

- Fehlerhafte Version: Workers & Pages → tasto → Deployments → ältere
  Version → **Rollback**.
- Migrationen lassen sich nicht zurückrollen. Deshalb nur Änderungen, die
  die alte Version noch verträgt (Spalten hinzufügen, nicht löschen).
