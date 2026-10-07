# BurnICU — V1 Schicht- und Übergabeliste

Version 3.6.0 · Offline-fähige Web-App (PWA) für die Verbrennungs-Intensivstation V1.
Adresse: https://ftigiser-collab.github.io/BurnICU/

Daten bleiben ausschließlich lokal auf dem Gerät (Browserspeicher). Arbeitsdokument, keine Patientenakte — Aliasnamen verwenden.

## Hochladen (geht auch vom Handy)

Die Dateien sind kein Installationspaket — installiert wird die App erst von der Website aus.

1. github.com → Repo **BurnICU** öffnen (am Handy ggf. „Desktop-Website“ in Chrome aktivieren).
2. „Add file“ → „Upload files“ → diese Dateien auswählen:
   `index.html`, `sw.js`, `version.json`, `manifest.webmanifest`, `v1-alt.html`, `README.md`
   Gleichnamige Dateien werden ersetzt. Der Ordner `icons/` bleibt unverändert, er ist schon im Repo.
3. „Commit changes“. Nach 1–2 Minuten ist die neue Version unter der Adresse oben online (Settings → Pages: Branch `main`, `/ (root)`).

## Neu in 3.6.0

- To-Dos sind mit ihrem Bereich gekoppelt (IAP, Labor, PiCCO, Neuro-Scores, Diurese, Stuhlgang, Verbandswechsel, SBT, Befunde). Kopplung wird auch bei frei geschriebenen To-Dos aus dem Text erkannt und als kleines Etikett angezeigt; offene gekoppelte To-Dos stehen zusätzlich im jeweiligen Bereich.
- Beim Abhaken eines gekoppelten To-Dos erscheint eine kurze, optionale Abfrage; der eingetragene Wert landet direkt im Bereich (z. B. IAP 12 → IAP-Messreihe). „nur abhaken“ und „doch nicht erledigt“ sind möglich.
- Intervall-To-Dos statt Erinnerungstext: IAP alle 4 h, Retentionswerte täglich (Antikoagulation), Anti-Xa zum berechneten Zeitpunkt, RASS/BPS/CAM-ICU und PiCCO 1 × pro Schicht, Urin-pH alle 6 h unter Alkalisierung, Natrium alle 4 h bei schwerer Dysnatriämie, Diurese nach > 2,5 h ohne Wert, Abführen, Verbandswechsel, SBT. Ein fälliges To-Do verschwindet von selbst, sobald der Wert im Bereich eingetragen ist.
- Ausdruck: Zeile „Intervalle“ mit den Terminen der nächsten 12 h zum Abhaken.
- Wissen & SOPs in der Patientenansicht eingeklappt.

## Neu in 3.5.0

- Haus-SOPs der V1 eingearbeitet (Volumentherapie, Transfusion, Tranexamsäure, Ernährung/Abführen, Natrium, TEN, Analgesie/Sedierung/Delir, Crush, Inhalationstrauma) und in abgespeckter Form mit Rechnern aufrufbar: Menü ⋯ → „SOPs der V1“ bzw. SOP-Zeile in der Patientenansicht.
- Volumen: Ringer-Azetat, Rule of 10 aufgerundet + IHT 100 ml/h, Diurese-Ziel > 0,3 ml/kg/h, stündliche Reevaluation (−10 % / +20 %), Albumin/FFP ab h 6, Na > 139 → Deltajonin, IAP alle 4 h, ZVK/PiCCO-Indikation.
- OP-Vorbereitung bei Nekrektomie: Blutverlust, EK-Bereitstellung, Tranexamsäure (inkl. Niereninsuffizienz), Gerinnungsvoraussetzungen.
- Ernährung nach Idealgewicht mit Tagesrate, Stuhlgang-Erinnerung; Crush-Box mit McMahon-Score; TEN-Workflow; Analgosedierungs-Hinweise (Propofol > 5 Tage, Schicht-Monitoring).

## Neu in 3.4.0

- Arztbrief für die V1: Vorlagen V-Station (Plastische Chirurgie), extern, Reha, Innere, UCH/NeuroCH. Verbrennungsdiagnose mit Mechanismus, VKOF, Tiefe, Inhalationstrauma (AIS, Ruß), ABSI und rBaux; Operationen aus „Geplante Eingriffe“; Aufnahme aus dem Schockraum; neue Bausteine (Schockphase, Inhalationstrauma, CO/Cyanid, Strom, Escharotomie/IAP, Wundversorgung/Verbandswechsel, metabolisches Bündel, Thromboseprophylaxe) werden aus den App-Daten befüllt; Devices mit Liegetag; verbrennungsspezifische Empfehlungen.

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
2. In `sw.js` `const VERSION = 'burnicu-v3.6.0';` hochzählen (z. B. `burnicu-v3.6.1`).
3. In `version.json` dieselbe Version eintragen.

Geräte mit Internet melden „Neue Version geladen“; nach dem Neuladen läuft die neue Version.

## Altversion

`v1-alt.html` (https://ftigiser-collab.github.io/BurnICU/v1-alt.html) zeigt die bisherige Version 1 nur zum Ansehen und Exportieren alter Daten — nicht offline, nicht installierbar.

## Beste Liste ever (gleiche Domain)

Beide Apps teilen sich den Cache-Speicher der Domain. Der Service Worker der Besten Liste löscht beim Update alle fremden Caches. Abhilfe im Repo **Beste-Liste-ever**, Datei `sw.js` bearbeiten (Stift-Symbol):
- Zeile `const VERSION = 'beste-liste-v24';` → `'beste-liste-v25'`
- `ks.filter(k => k !== VERSION)` → `ks.filter(k => k.startsWith('beste-liste-') && k !== VERSION)`

## Abkürzungen

ABSI Abbreviated Burn Severity Index · AIS Abbreviated Injury Score · BGA Blutgasanalyse · BMI Body-Mass-Index · CO Kohlenmonoxid · COHb Carboxyhämoglobin · KOF Körperoberfläche · SR Schockraum · ZVK zentraler Venenkatheter · iOS Betriebssystem von iPhone/iPad · ITS Intensivstation · JSON JavaScript Object Notation (Sicherungsdatei) · PWA Progressive Web App · V1 Verbrennungs-Intensivstation · VKOF verbrannte Körperoberfläche · IHT Inhalationstrauma · HI Herzindex · EK Erythrozytenkonzentrat · FFP Fresh Frozen Plasma · TXA Tranexamsäure · TEN toxische epidermale Nekrolyse · SJS Stevens-Johnson-Syndrom
