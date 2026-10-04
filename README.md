# BurnICU — V1 Schicht- und Übergabeliste

Version 3.0.0 · Offline-fähige Web-App (PWA) für die Verbrennungs-Intensivstation V1.
Adresse: https://ftigiser-collab.github.io/BurnICU/

Daten bleiben ausschließlich lokal auf dem Gerät (Browserspeicher). Arbeitsdokument, keine Patientenakte — Aliasnamen verwenden.

## Veröffentlichen (GitHub Pages)

1. **Vorher auf iPhone/iPad:** in der Testversion Menü ⋯ → „Sicherung exportieren“ (JSON in „Dateien“ sichern). Auf Android und am PC ist das nicht nötig — dort teilen sich Test- und Hauptversion den Speicher.
2. Im Repo **BurnICU** alle bisherigen Dateien im Hauptverzeichnis ersetzen durch den Inhalt dieses Pakets:
   `index.html`, `sw.js`, `version.json`, `manifest.webmanifest`, `.nojekyll`, `README.md`, Ordner `icons/`, `alt/`, `test/`.
   Der Ordner `zusatz-beste-liste-ever/` gehört **nicht** in dieses Repo (siehe unten).
3. Settings → Pages → Source „Deploy from a branch“, Branch `main`, Ordner `/ (root)`. Nach 1–2 Minuten ist die neue Version online.
4. Einmal mit Internet öffnen — danach läuft die App offline.

`.nojekyll` sorgt dafür, dass GitHub die Dateien unverändert ausliefert. Die Datei beginnt mit einem Punkt und ist im Finder/Explorer ggf. ausgeblendet — beim Hochladen per Drag & Drop mitnehmen oder im Repo über „Add file → Create new file“ mit dem Namen `.nojekyll` (leer) anlegen.

## Installieren

**Android (Chrome):** Adresse öffnen → Menü ⋮ → „App installieren“ bzw. „Zum Startbildschirm hinzufügen“.
**iPhone/iPad (Safari):** Adresse öffnen → Teilen-Symbol → „Zum Home-Bildschirm“. Nur aus Safari heraus installieren.

Auf dem iPhone hat die Home-Bildschirm-App einen **eigenen Speicher**, getrennt von Safari und von einer früher installierten Testversion. Daten deshalb per Menü ⋯ → „Sicherung importieren“ übernehmen. Die alte Testversion vom Home-Bildschirm löschen.

## Offline

- Nach dem ersten Öffnen mit Internet liegen alle Dateien im Cache (Service Worker). Start, Eingabe, Ausdruck funktionieren ohne Netz.
- Prüfen: App einmal öffnen, Flugmodus an, App schließen und neu starten.
- Die App fordert dauerhaften Speicher an. Trotzdem gilt: regelmäßig „Sicherung exportieren“, besonders auf iOS. Wird die App auf dem iPhone mehrere Wochen nicht genutzt oder ist der Gerätespeicher knapp, kann iOS Website-Daten löschen.

## Updates

1. Neue `index.html` hochladen.
2. In `sw.js` die Zeile `const VERSION = 'burnicu-v3.0.0';` hochzählen (z. B. `burnicu-v3.0.1`).
3. In `version.json` dieselbe Version eintragen.

Geräte mit Internet melden dann „Neue Version geladen“; nach dem Neuladen läuft die neue Version, offline wie gewohnt.

## Weitere Ordner

- `alt/` — die bisherige BurnICU-Version 1 nur zum Ansehen und Exportieren alter Daten (eigener Speicher, nicht offline, nicht installierbar).
- `test/` — legt die Testversion still: Testgeräte werden automatisch auf die Hauptversion umgeleitet und der Test-Service-Worker meldet sich ab. Kann nach einigen Wochen gelöscht werden.

## Beste Liste ever (gleiche Domain)

Beide Apps liegen auf `ftigiser-collab.github.io` und teilen sich den Cache-Speicher. Der bisherige Service Worker der Besten Liste löscht beim Update **alle** fremden Caches — damit wäre BurnICU auf diesem Gerät bis zum nächsten Online-Start nicht mehr offline verfügbar.
**Abhilfe:** `zusatz-beste-liste-ever/sw.js` im Repo **Beste-Liste-ever** gegen die dortige `sw.js` tauschen (Version `beste-liste-v25`; löscht nur noch eigene Caches). BurnICU selbst löscht ausschließlich Caches mit dem Präfix `burnicu-`.

## Speicher

| Schlüssel | Inhalt |
|---|---|
| `burnicu_v3` | alle Patientendaten (Hauptversion und Testversion) |
| `burnicu_slim` | schlanker Modus an/aus |
| `burnicu_todo_sort` | To-Do-Sortierung |
| `burnstation_v1` | Daten der alten Version 1 (nur über `alt/`) |

## Abkürzungen

ACS abdominelles Kompartmentsyndrom · AIS Abbreviated Injury Score · CAM-ICU Confusion Assessment Method for the ICU · CrCl Kreatinin-Clearance · eGFR geschätzte glomeruläre Filtrationsrate · IAH intraabdominelle Hypertension · IAP intraabdomineller Druck · ITS Intensivstation · JSON JavaScript Object Notation (Sicherungsdatei) · NA Noradrenalin · NMH niedermolekulares Heparin · PiCCO Pulse Contour Cardiac Output · PWA Progressive Web App · RASS Richmond Agitation-Sedation Scale · SBT Spontanatmungsversuch · SW Service Worker · UFH unfraktioniertes Heparin · V1 Verbrennungs-Intensivstation · VKOF verbrannte Körperoberfläche
