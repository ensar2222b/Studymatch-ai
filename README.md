# StudyMatch AI

Ein statischer, responsiver Prototyp für einen Studienfinder. Die angezeigten Studiengänge sind ausdrücklich **Beispieldaten** und keine offiziellen Hochschulangebote oder Zulassungsaussagen.

## Lokal testen

Im Projektordner genügt ein einfacher lokaler Webserver, zum Beispiel:

```bash
python3 -m http.server 8080
```

Danach `http://localhost:8080` im Browser öffnen. Alternativ kann `index.html` direkt geöffnet werden; ein lokaler Server ist für spätere API-Anbindungen besser geeignet.

## Weiterentwicklung

- Studienprofile in `app.js` durch geprüfte, strukturierte Daten ersetzen.
- Matching in ein separates Modul verschieben und mit Gewichtungen, Ausschlusskriterien und Tests erweitern.
- Für eine echte KI einen sicheren Backend-Endpunkt ergänzen; API-Schlüssel niemals in `app.js` oder anderen öffentlich ausgelieferten Dateien speichern.
- Für GitHub Pages die drei Webdateien (`index.html`, `styles.css`, `app.js`) und optional die README in ein Repository legen und unter **Settings → Pages** den Branch `main` sowie den Ordner `/root` auswählen.
