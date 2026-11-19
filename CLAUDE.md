# Hinweise für Claude

Tasto ist ein Tipptrainer für das 10-Finger-System (React + Cloudflare
Worker + D1). Überblick: `README.md`, Betrieb: `docs/betrieb.md`.

## Zusammenarbeit (gilt in allen EndLab-Repos)

- Immer auf **Deutsch**, per **du**, kurz und direkt. Entscheidungen mit
  Optionen und Empfehlung vorlegen.
- **Jede Änderung als PR.** Vorher Vorschau-Link und Screenshots zeigen.
- **Vor jedem Merge fragen.** Gemergt wird erst, wenn Björn „merge“ schreibt.
  Jeder Merge auf `main` geht sofort live.
- **Keine Geheimnisse** im Chat, im Code oder in GitHub. Secrets setzt Björn
  in Cloudflare.
- Deploy nur über **Cloudflare Workers Builds**, nie von Hand und nie aus
  GitHub Actions. GitHub Actions prüfen nur.
- Nichts darf hängen bleiben: Jede Änderung am Betrieb hat einen Rückweg.
- **Keine Ideen, Konzepte oder Pläne im Repo.** Ins Repo kommt nur, was gebaut
  ist und gilt: Code, Tests, Betriebsdoku, CLAUDE.md. Vorschläge nur im Chat.

## Arbeiten im Repo

- Vor dem Commit: `npm run check` (Lint, Typen, Build).
- Datenbankänderungen nur als neue Datei in `migrations/`; sie laufen beim
  Deploy von `main` automatisch.
- Zielgerät ist der Computer mit echter Tastatur; Handy zeigt nur Hinweis,
  Ergebnisse und Bestenliste.
