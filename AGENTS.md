# AGENTS.md

## Projektziel

StudyMatch AI ist eine statische, deutschsprachige Studienorientierungsplattform für Schülerinnen
und Schüler in Deutschland. Empfehlungen sind Orientierungshilfen und dürfen nicht als offizielle
Hochschulangebote, Zulassungsaussagen oder Studienplatzversprechen dargestellt werden.

## Technischer Rahmen

- Verwende plain HTML, CSS und JavaScript ohne Build-Schritt und ohne unnötige Abhängigkeiten.
- `index.html` bleibt der GitHub-Pages-Einstiegspunkt im Repository-Root.
- Matching-Logik liegt in `app.js`; das Studienprofil-Katalogmodul liegt in `app.js` und
  `programmes-catalog.js`. Halte Profil- und Fragedaten strukturiert und quellenbezogen.
- `tests/matching.test.mjs` prüft die zentralen Score-Verträge; bei Gewichtsänderungen aktualisieren.
- Der Vergleich darf höchstens drei Profile gleichzeitig anzeigen.
- Quiz-Fortschritt, Favoriten und Theme werden ausschließlich über die dokumentierten `localStorage`-Schlüssel gespeichert.
- API-Schlüssel, personenbezogene Daten und externe KI-Aufrufe gehören nicht in das Frontend.

## Qualitätsregeln

- Änderungen müssen auf mobilen Geräten und Desktop-Breiten funktionieren.
- Interaktive Elemente benötigen sichtbare Fokuszustände, verständliche Beschriftungen und
  sinnvolle semantische HTML-Elemente.
- Neue Matching-Regeln müssen nachvollziehbar sein und in der README erklärt werden.
- Keine erfundenen Hochschulen, Studienordnungen, Zulassungsvoraussetzungen oder offiziellen Links.
- Neue Studienprofile dürfen nur mit einer überprüfbaren offiziellen Hochschulquelle aufgenommen
  werden; Quelle und Recherche-/Prüfdatum gehören in die README.
- Detailfelder wie Mathematik- und Programmieranteil dürfen bei fehlender belastbarer Quelle nur
  als `unklar` geführt werden.
- Keine NC-Werte, Bewerbungsfristen, Gehälter oder Zulassungsaussagen aus Such-Snippets ableiten.
- „Unsicher“-Antworten dürfen den Score nicht negativ verzerren.
- Bestehende Änderungen anderer Personen niemals zurücksetzen; nur den eigenen Scope bearbeiten.

## Vor dem Pull Request

1. `node --check app.js` ausführen.
2. `node --test tests/matching.test.mjs` ausführen.
3. Einen lokalen Server mit `python3 -m http.server 8080` starten und die Startseite öffnen.
4. Fragebogen, Zurück-Navigation, Ergebnisse, Explorer, Favoriten, Vergleich und Neustart manuell prüfen.
5. README, Datenschutz-Hinweise und Demo-Link bei Verhaltensänderungen aktualisieren.
