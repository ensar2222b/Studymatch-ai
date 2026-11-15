# Copilot-Anweisungen für StudyMatch AI

- Antworte und dokumentiere nutzerseitige Texte auf Deutsch, sofern keine andere Sprache verlangt wird.
- Bevorzuge kleine, reversible Änderungen an den statischen Dateien.
- Nutze keine kostenpflichtigen Dienste und füge keine API-Schlüssel in HTML, CSS oder JavaScript ein.
- Behandle sämtliche Studienprofile als Beispieldaten, bis geprüfte Quellen und ein Datenpflegeprozess
  vorhanden sind.
- Erkläre Änderungen am Matching-Algorithmus in `README.md` und halte Score-Berechnungen transparent.
- Bewahre `index.html` im Repository-Root für GitHub Pages.
- Achte bei UI-Änderungen auf Tastaturbedienung, `aria`-Beschriftungen, Kontrast, reduzierte Bewegung
  und responsive Layouts.
- Prüfe Änderungen mindestens mit `node --check app.js` und einem lokalen statischen Webserver.
- Erstelle Pull Requests gegen `main`; niemals automatisch mergen.
- Der Studiengang-Explorer darf ausschließlich klar gekennzeichnete Demodaten anzeigen, solange
  keine geprüfte Datenquelle mit Pflegeprozess vorhanden ist.
- Offizielle Hochschul-Links dürfen nur nach Prüfung der konkreten Studiengangsseite ergänzt werden;
  Suchportale, Rankings und aggregierte Datenbanken sind keine Primärquellen.
- Quellenlinks mit `target="_blank"` müssen `rel="noopener noreferrer"` verwenden.
- Halte den Vergleich auf maximal drei Studiengänge begrenzt und stelle auf Mobilgeräten horizontales
  Scrollen statt abgeschnittener Tabellen bereit.
- Bei Änderungen an `localStorage` dokumentiere Schlüssel, Datenumfang und Löschverhalten in der README.
