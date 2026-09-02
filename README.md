# BurnICU — PWA-Nachrüstung

Diese Dateien machen die App auf GitHub Pages installierbar
(Chrome-Menü: "App installieren", iOS: Teilen > Zum Home-Bildschirm).

## Was hochladen

Ins Repo **BurnICU**, alles auf oberster Ebene:

- `index.html` (ersetzt die alte)
- `manifest.webmanifest`
- `sw.js`
- `icons/` (ganzer Ordner)
- `.nojekyll`

Die `index.html` hier ist deine bisherige Fassung, nur mit geänderten
Kopfzeilen: Manifest und Icons zeigen jetzt auf echte Dateien statt auf
eingebettete data-URIs. Inhalt und Logik sind unverändert.

## Danach prüfen

1. https://ftigiser-collab.github.io/BurnICU/ in Chrome öffnen (Android oder Desktop)
2. Dreipunktmenue -> es muss **"App installieren"** dastehen, nicht nur
   "Zum Startbildschirm hinzufügen"
3. Falls noch nicht: Seite einmal hart neu laden (Cache), Pages braucht
   nach dem Push manchmal 1-2 Minuten

## Updates spaeter

index.html ersetzen **und** in `sw.js` die Zeile `const VERSION = '...-v1'`
auf `-v2`, `-v3` usw. hochzählen. Sonst zeigt der Service Worker die alte
Fassung weiter. localStorage (Einträge, Favoriten, Einstellungen) bleibt
beim Update erhalten.

## iOS

Safari zeigt nie einen Install-Dialog: Teilen-Symbol > "Zum Home-Bildschirm".
Achtung: Eine so installierte App hat auf iOS einen **eigenen Speicher** —
was im Safari-Tab eingegeben wurde, ist in der App nicht sichtbar.
