# AGENTS.md

## Projektziel

StudyMatch AI ist eine statische, deutschsprachige Studienorientierungsplattform für Schülerinnen
und Schüler in Deutschland. Empfehlungen sind Orientierungshilfen und dürfen nicht als offizielle
Hochschulangebote, Zulassungsaussagen oder Studienplatzversprechen dargestellt werden.

## Technischer Rahmen

- Verwende plain HTML, CSS und JavaScript ohne Build-Schritt und ohne unnötige Abhängigkeiten.
- `index.html` bleibt der GitHub-Pages-Einstiegspunkt im Repository-Root.
- Daten und Matching-Logik liegen aktuell in `app.js`; halte Profil- und Fragedaten strukturiert.
- API-Schlüssel, personenbezogene Daten und externe KI-Aufrufe gehören nicht in das Frontend.

## Qualitätsregeln

- Änderungen müssen auf mobilen Geräten und Desktop-Breiten funktionieren.
- Interaktive Elemente benötigen sichtbare Fokuszustände, verständliche Beschriftungen und
  sinnvolle semantische HTML-Elemente.
- Neue Matching-Regeln müssen nachvollziehbar sein und in der README erklärt werden.
- Keine erfundenen Hochschulen, Studienordnungen, Zulassungsvoraussetzungen oder offiziellen Links.
- Bestehende Änderungen anderer Personen niemals zurücksetzen; nur den eigenen Scope bearbeiten.

## Vor dem Pull Request

1. `node --check app.js` ausführen.
2. Einen lokalen Server mit `python3 -m http.server 8080` starten und die Startseite öffnen.
3. Fragebogen, Zurück-Navigation, Ergebnisse, Vergleich und Neustart manuell prüfen.
4. README, Datenschutz-Hinweise und Demo-Link bei Verhaltensänderungen aktualisieren.
