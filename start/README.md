# BurnStart — Verbrennung ≥ 20 % VKOF, Aufnahme bis Tag 5

Adresse: https://ftigiser-collab.github.io/BurnICU/start/

Eigene App (eigenes Symbol, eigener Offline-Speicher, eigenes Update) für die ersten fünf Tage eines großen Verbrennungspatienten auf der V1. Primär für den PC, druckbar auf A4. Arbeitsdokument, keine Patientenakte — Aliasnamen verwenden.

## Kopplung mit BurnICU

BurnStart liegt auf derselben Adresse wie BurnICU und liest und schreibt **denselben Browserspeicher** (`burnicu_v3`). Es gibt keinen Export/Import zwischen den Apps — alles gilt sofort in beiden:

- Patienten, Zimmer, Name, Alter, Geschlecht, Größe, Gewicht, Unfallzeit, VKOF (davon 2b/3), IHT, Strom, Myoglobinurie
- Übergabe Schockraum und alle Häkchen der Checkliste 48 h (gleiche Schlüssel), Inhalations-Intoxikation (CO/Cyanid)
- Diurese, Laufraten, Präklinik + Schockraum, Laborwerte (Laktat, ScvO2, Na, Albumin, COHb, CK, Myoglobin, Anti-Xa), IAP, PiCCO-HI, Rekap, ZVK/Arterie, Transfusionen (FFP/EK)

Sind beide Apps gleichzeitig offen, übernimmt jede die Änderungen der anderen ohne Neuladen (BurnICU ab 3.27.0). Voraussetzung: gleicher Browser auf demselben Gerät. Auf dem iPhone hat eine Home-Bildschirm-App einen eigenen Speicher — dort nur im Browser koppelbar.

Zusätzlich speichert BurnStart einen Verlaufsspiegel (`burnstart_v1`): BurnICU kürzt Diurese nach 72 h und Labor nach 48 h, BurnStart behält die Schockphase bis Tag 5. Albumin-Perfusor, Zusatzgaben, Rekap-Verlauf und Erledigt-Zeiten liegen beim Patienten unter `bs` und sind in der BurnICU-Sicherung enthalten.

## Aufbau

- **Kopf:** Patient, Stunde nach Unfall, Rule of 10, Ziel-Diurese, ABSI ab > 40 % VKOF; darunter die aktuelle Anweisung und was als Nächstes fällig ist.
- **Checkliste:** Stammdaten und Übergabe Schockraum, Inhalations-Intoxikation, Phasen Aufnahme · h 0–8 · h 8–24 · h 24–48 · Tag 3 · Tag 4 · Tag 5. Fälligkeit ab Unfallzeit (gelb fällig, rot überfällig), „–“ = entfällt. Rechts: jetzt fällig, laufende Aufgaben (Stundendiurese, IAP alle 4 h, CK alle 6 h bei Strom, COHb-Kontrolle, PiCCO 1 × pro Schicht), Nicht tun.
- **Kontext nur auf Klick:** Das (i) an jedem Punkt zeigt Warum (Pathophysiologie), Studien und die zugehörige SOP. Bei Widerspruch zwischen Literatur und SOP gilt die SOP der V1.
- **Volumentherapie:** Rule of 10, Laufrate, Albumin, Diurese, Volumen seit Unfall, Grenzen (ml/kg/% VKOF, Ivy-Index). Anweisung nach SOP-Reevaluation (alle Ziele erfüllt −10 %, eines nicht +20 %), Defizit/Übertherapie aus Präklinik und Schockraum, Hinweise zu Albumin, Natrium, IAP, MAP. Nachtragen für Spätankömmlinge (Präklinik/SR, Laufraten ab Uhrzeit, Diurese-Sammelwert, Zusatzgaben). Stundentabelle h 0–48 zum direkten Eintragen (Enter = nächste Zeile) mit SOP-Empfehlung je Stunde, Tagesbilanz ab Tag 2.
- **Ohne ZVK/PiCCO** werden HI und ScvO2 nicht bewertet; die Anweisung stützt sich dann auf Diurese, Laktat und Rekap (umschaltbar: automatisch / ja / nein).
- **Drucken:** Checkliste Tag 0–5 (2 Seiten), Volumenprotokoll h 0–24, h 24–48 oder ab jetzt (1 Seite, vorbefüllt, Rest zum Ausfüllen, Stufentabelle +20 %/−10 %), jeweils mit Abkürzungslegende.
- **Erinnerungen:** im Menü einschalten — solange die App offen ist, meldet der Browser fällige Stundendiurese, IAP und Checklistenpunkte.

## Installieren und offline

Adresse in Chrome/Edge öffnen → Installieren-Symbol in der Adressleiste (bzw. Menü → „App installieren“). Einmal mit Internet öffnen, danach läuft sie offline.

## Updates

`index.html` ändern, in `sw.js` `VERSION` hochzählen (z. B. `burnstart-v1.0.1`) und `version.json` sowie `APP_VERSION` in `index.html` anpassen. Der Service Worker räumt nur eigene Caches (Präfix `burnstart-`).

## Abkürzungen

ABA American Burn Association · ABSI Abbreviated Burn Severity Index · AIS Abbreviated Injury Score · BG Berufsgenossenschaft · COHb Carboxyhämoglobin · CK Kreatinkinase · EK Erythrozytenkonzentrat · FFP Fresh Frozen Plasma · HI Herzindex · IAP intraabdomineller Druck · IHT Inhalationstrauma · PiCCO Pulse Contour Cardiac Output · PWA Progressive Web App · Rekap Rekapillarisierungszeit · ScvO2 zentralvenöse O2-Sättigung · SOP Standardvorgehen · SR Schockraum · V1 Verbrennungs-Intensivstation · VKOF verbrannte Körperoberfläche · ZVK zentraler Venenkatheter
