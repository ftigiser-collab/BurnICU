# BurnICU — V1 Schicht- und Übergabeliste

Version 3.3.0 · Offline-fähige Web-App (PWA) für die Verbrennungs-Intensivstation V1.
Adresse: https://ftigiser-collab.github.io/BurnICU/

Daten bleiben ausschließlich lokal auf dem Gerät (Browserspeicher). Arbeitsdokument, keine Patientenakte — Aliasnamen verwenden.

## Hochladen (geht auch vom Handy)

Die Dateien sind kein Installationspaket — installiert wird die App erst von der Website aus.

1. github.com → Repo **BurnICU** öffnen (am Handy ggf. „Desktop-Website“ in Chrome aktivieren).
2. „Add file“ → „Upload files“ → diese Dateien auswählen:
   `index.html`, `sw.js`, `version.json`, `manifest.webmanifest`, `v1-alt.html`, `README.md`
   Gleichnamige Dateien werden ersetzt. Der Ordner `icons/` bleibt unverändert, er ist schon im Repo.
3. „Commit changes“. Nach 1–2 Minuten ist die neue Version unter der Adresse oben online (Settings → Pages: Branch `main`, `/ (root)`).

## Neu in 3.3.0

- Checkliste 48 h als Eingabemaske: Schockraum-Übergabe, Rauchgas (CO und Cyanid: Erkennen und Handeln, Hinweis „Cyanid-Verdacht“) und Aufgaben h 0–48 zum Abhaken.
- Pflicht vor dem Druck: Größe, Gewicht und VKOF (mit BMI und KOF). Größe auch in den Stammdaten.
- Vorab-Aufnahme „in der Luft“: Zimmerplan → „✈ Vorab-Aufnahme“ oder Drucken → Checkliste 48 h; der Patient steht als „angekündigt“ im Zimmer, „eingetroffen“ schließt die Aufnahme ab.
- Checkliste in den ersten 48 h über die Patientenansicht erreichbar; Eingaben gelten in beiden Masken (Unfallzeit, VKOF, Gewicht, Größe, Inhalationstrauma/AIS/Ruß, Volumen, Rate, BGA-Werte, ZVK/Arterie/Tubus).

## Neu in 3.2.0

- Drucken → „Checkliste 48 h“: eine A4-Seite je Patient, nur mit Namen, farbkodiert (blau Schockraum erfragen, rot sofort, orange h 0–8, gelb h 8–24, grün h 24–48). Uhrzeiten für h 8/24/48 ab Unfallzeit, Rule-of-Ten-Rate, Diureseziel in ml/h, Rescue- und Ivy-Grenze werden aus der App eingesetzt, sonst Felder zum Ausfüllen. „+ leere Vorlage“ druckt ein Blankoblatt.

## Neu in 3.1.0

- Wissen um Verbrennungsthemen erweitert (Schockphase/Rule of Ten, metabolisches Bündel, Inhalationstrauma, CO/Cyanid, Strom/Myoglobinurie, Escharotomie/ACS, Sepsis, Atemweg/Narkose, TEN/SJS).
- Volumen initial nur noch nach Rule of Ten; andere Formeln entfernt. Danach Titration nach Diurese.
- Metabolisches Bündel als Checkliste (ab ≥ 30 % VKOF oder ABSI ≥ 8) mit Erinnerung nach Burn-Tag.
- Erste 48 h: Hinweis und Erinnerung Ringer-Laktat statt Jonosteril.
- Neue Patienten sind immer zuerst „mein Patient“.
- Schlanker Modus: Patientenansicht zeigt oben, welche Organsysteme und ob die Diurese in dieser Schicht noch zu prüfen sind; erledigte Punkte verschwinden.

## Installieren

**Android (Chrome):** https://ftigiser-collab.github.io/BurnICU/ öffnen → Menü ⋮ → „App installieren“ bzw. „Zum Startbildschirm hinzufügen“. Eine alte BurnICU-Verknüpfung vorher entfernen.
**iPhone/iPad (Safari):** Adresse öffnen → Teilen-Symbol → „Zum Home-Bildschirm“. Nur aus Safari heraus.

Auf dem iPhone hat die Home-Bildschirm-App einen eigenen Speicher, getrennt von Safari. Daten bei Bedarf per Menü ⋯ → „Sicherung exportieren“ / „Sicherung importieren“ übertragen.

## Offline

- Einmal mit Internet öffnen — danach liegen alle Dateien im Cache. Start, Eingabe und Ausdruck funktionieren ohne Netz.
- Prüfen: App öffnen, Flugmodus an, App ganz schließen, neu starten.
- Regelmäßig „Sicherung exportieren“, besonders auf iOS: Bei wochenlanger Nichtnutzung oder knappem Speicher kann iOS Website-Daten löschen.

## Updates

1. Neue `index.html` hochladen.
2. In `sw.js` `const VERSION = 'burnicu-v3.3.0';` hochzählen (z. B. `burnicu-v3.3.1`).
3. In `version.json` dieselbe Version eintragen.

Geräte mit Internet melden „Neue Version geladen“; nach dem Neuladen läuft die neue Version.

## Altversion

`v1-alt.html` (https://ftigiser-collab.github.io/BurnICU/v1-alt.html) zeigt die bisherige Version 1 nur zum Ansehen und Exportieren alter Daten — nicht offline, nicht installierbar.

## Beste Liste ever (gleiche Domain)

Beide Apps teilen sich den Cache-Speicher der Domain. Der Service Worker der Besten Liste löscht beim Update alle fremden Caches. Abhilfe im Repo **Beste-Liste-ever**, Datei `sw.js` bearbeiten (Stift-Symbol):
- Zeile `const VERSION = 'beste-liste-v24';` → `'beste-liste-v25'`
- `ks.filter(k => k !== VERSION)` → `ks.filter(k => k.startsWith('beste-liste-') && k !== VERSION)`

## Abkürzungen

ABSI Abbreviated Burn Severity Index · AIS Abbreviated Injury Score · BGA Blutgasanalyse · BMI Body-Mass-Index · CO Kohlenmonoxid · COHb Carboxyhämoglobin · KOF Körperoberfläche · SR Schockraum · ZVK zentraler Venenkatheter · iOS Betriebssystem von iPhone/iPad · ITS Intensivstation · JSON JavaScript Object Notation (Sicherungsdatei) · PWA Progressive Web App · V1 Verbrennungs-Intensivstation · VKOF verbrannte Körperoberfläche
