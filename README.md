# BurnICU — V1 Schicht- und Übergabeliste

Version 3.19.1 · Offline-fähige Web-App (PWA) für die Verbrennungs-Intensivstation V1.
Adresse: https://ftigiser-collab.github.io/BurnICU/

Daten bleiben ausschließlich lokal auf dem Gerät (Browserspeicher). Arbeitsdokument, keine Patientenakte — Aliasnamen verwenden.

## Hochladen (geht auch vom Handy)

Die Dateien sind kein Installationspaket — installiert wird die App erst von der Website aus.

1. github.com → Repo **BurnICU** öffnen (am Handy ggf. „Desktop-Website“ in Chrome aktivieren).
2. „Add file“ → „Upload files“ → diese Dateien auswählen:
   `index.html`, `sw.js`, `version.json`, `manifest.webmanifest`, `v1-alt.html`, `README.md`
   Gleichnamige Dateien werden ersetzt. Der Ordner `icons/` bleibt unverändert, er ist schon im Repo.
3. „Commit changes“. Nach 1–2 Minuten ist die neue Version unter der Adresse oben online (Settings → Pages: Branch `main`, `/ (root)`).

## Neu in 3.19.1

- **Noradrenalin kritisch**: Steigt NA um ≥ 50 % und liegt danach über 0,25 µg/kg/min, erscheint das rot im Fokus (zählt im Fokus-Zähler oben, wird nie als Dopplung ausgeblendet), die Kachel Katecholamine im Lagebild steht auf „Handeln“. Kleinere Anstiege bleiben gelb.

## Neu in 3.19.0

- **Organe & Therapie in einem Reiter**: links oben die Organe (Neuro, Pulmo, Kreislauf, Niere, Abdomen, Wunde), darunter nach einem deutlichen Trennstrich „Therapie“ (Diurese, Volumen & Bilanz, Transfusion, Verbrennung, Ernährung, Medikation, Antikoagulation, ggf. Metabolisches Bündel) — jede Zeile mit Kurzstand, rechts öffnet sich der gewählte Bereich. Infekt ist hier raus (eigener Reiter Infektion).
- **To-Do als eigener Reiter** (mit Zähler, rot bei hoher Priorität): oben die offenen To-Dos zum Abhaken mit Bündeln und Schnelleingabe, darunter „Alle To-Dos bearbeiten“ (Priorität, erledigte, ⚑). In der Übersicht steht nur noch ein Verweis mit Anzahl und den hoch priorisierten Punkten; „Devices & Orga“ enthält keine To-Dos mehr.
- **„Scores erhoben“ heißt jetzt „Visite-Doku“** (Patientenkopf, Zimmerplan-Symbol ✎, Schicht-Dialog).
- Volumen & Bilanz: Symbol ± (das Waagen-Emoji fehlte auf manchen Geräten).

## Neu in 3.18.0

- **Rundgang** (Knopf „☑ Rundgang“ im Patientenkopf, optional): einmal über den Patienten in vier Schritten — 1 Informationen sammeln (Bestandsaufnahme nur für diesen Patienten, Pflichtwerte, Organe) · 2 Bewerten (Fokus, Labor-Trends, Kreislauf/Diurese/Bilanz, Beatmung, Analgosedierung, Infektion, Ernährung, Antikoagulation, Wunde/OP, Transfusion, Devices) · 3 Abarbeiten (To-Dos) · 4 Offene Probleme & Optimierung (Baustellen, was kann weg, Angehörige/Aufklärung, Übergabe). Jede Zeile zeigt den aktuellen Stand; „›“ springt direkt in den Bereich (Abschnitt wird aufgeklappt und markiert), der grüne Knopf „‹ Rundgang“ unten rechts bringt zurück. Haken gelten für die Schicht; was die App selbst erkennt (Pflichtwerte vollständig, alle Organe abgehakt, keine To-Dos offen, Bestandsaufnahme gemacht, Übergabe geschrieben), hakt sie automatisch ab.
- **Devices leichter zu finden**: Kachel „Zugänge & Devices“ im Lagebild (Typ und Liegetag, gelb bei Prüfbedarf) springt direkt hin; der Reiter heißt jetzt „Devices & Orga“ und beginnt mit den Devices.
- **PiCCO**: „Messungen beenden“ (kein Schicht-To-Do mehr, keine alten Werte mehr im Kreislauf/Ausdruck) und „Katheter entfernt“ (trägt das PiCCO-Device heute als entfernt ein); „Messungen wieder aufnehmen“ macht es rückgängig.
- **Volumen & Bilanz** mit eigenem Symbol und direkt unter Diurese.
- **Checkliste 48 h** bei Verbrennung sichtbar bis 72 h Aufenthalt (Aufnahmezeit wird bei Neuaufnahmen gemerkt), danach weg.
- Lagebild-Kacheln springen direkt in den passenden Abschnitt (Diurese, Bilanz, Transfusion, Medikation, CiCa).

## Neu in 3.17.1

- **Bestandsaufnahme fokussiert** auf Labor, laufende Medikamente und Verlauf:
  - BGA und Labor wie bisher (letzter Wert unter jedem Feld, P/F wird berechnet, Abnahmezeit fürs Labor).
  - Katecholamine, Sedierung und Analgesie: jeder laufende Perfusor als Zeile mit „neue Dosis“ und „beendet“; „= alle unverändert“ bestätigt die Katecholamine für die Pflichtwerte; neu angesetzte Medikamente als Freitext.
  - Antiinfektiva: laufende mit Tag, einzeln „beendet“, „= fortgeführt“ bzw. „keine Antiinfektiva“, neu angesetzt als Freitext.
  - Verlauf: die letzten drei Einträge zur Orientierung, Änderungen seit der letzten Schicht — jede Zeile wird ein eigener Verlaufseintrag.
  - Beatmung, Diurese/Bilanz, RASS/Schmerz/CAM, Tmax und Ernährung sind aus der Maske raus (bleiben in den Bereichen und im Schicht-To-Do).

## Neu in 3.17.0

- **Bestandsaufnahme zum Schichtbeginn** (optional): Im Schicht-Dialog „Starten + Bestandsaufnahme“, jederzeit auch über „☰ Bestandsaufnahme“ in Meine Schicht. Patient für Patient (eigene Patienten) nur Ist-Werte, die man ohne Patientenkontakt bekommt — keine Pläne, leere Felder bleiben leer:
  - BGA (pO2, FiO2 → P/F wird berechnet, pH, BE, Laktat, K+, Na+, Glukose) und Labor (Hb, Leukozyten, Thrombozyten, CRP, PCT, Krea, Albumin; Anti-Xa bei Antikoagulation, iCa bei CiCa, Fibrinogen bei Verbrennung) mit Abnahmezeit; unter jedem Feld der letzte Wert.
  - Noradrenalin bzw. „= unverändert“, Beatmung „= unverändert“ oder neu, Diurese seit letztem Eintrag, Bilanz 24 h, RASS, BPS/NAS, CAM-ICU, Tmax, Ernährung und Antiinfektiva „unverändert/fortgeführt“, Ereignisse seit der letzten Schicht (→ Verlauf).
  - Enter springt ins nächste Feld, „Speichern & weiter ›“ zum nächsten Patienten. Die Pflichtwerte der Schicht sind damit meist schon erfüllt.
- **Erledigte To-Dos** werden nicht mehr beim Schichtstart gelöscht: Sie bleiben sichtbar und verschwinden automatisch 10 h nach dem Ende der Schicht, in der sie erledigt wurden.
- **Schicht-Dialog**: „Neue Schicht starten“ (beendet die laufende), „Startzeit korrigieren“ (ändert nur die Uhrzeit, setzt nichts zurück), „Schicht beenden“. Übergabe-Kernpunkte bleiben standardmäßig stehen, wenn die letzte Schicht vor weniger als 10 h endete.
- **RASS, Schmerz, CAM-ICU bei allen Patienten** einmal pro Schicht, auch im schlanken Modus. Schmerzskala automatisch: **BPS** bei invasiver Beatmung (Tubus/Trachealkanüle bzw. BIPAP, CPAP/ASB, VCV), sonst **NAS** (numerische Analogskala, ersetzt NRS).

## Neu in 3.16.0

Bedienbarkeit nach einem Testlauf über zwei Schichten (alle Demo-Patienten, Neuaufnahme Verbrennung und Lappenplastik).

- **Aufnahme**: Nach „Speichern“ öffnet sich der Patient direkt. Bei Verbrennungsdiagnose gibt es gleich im Dialog Unfallzeit, VKOF, davon 2b/3 und Inhalationstrauma — VKOF und Inhalationstrauma werden aus der Diagnose übernommen. Bei Lappenplastik: „Ende der Lappen-OP“ bzw. „OP gerade beendet“, die 2-h-Kontrollen laufen ab Speichern.
- **Checkliste 48 h** nur noch bei Verbrennung (nicht mehr bei jeder Neuaufnahme) und nur noch als Abschnitt in der Übersicht — der doppelte Knopf im Kopf ist weg, die Kopfzeile passt in eine Zeile.
- **To-Do**: „Jetzt dran“ und der To-Do-Abschnitt sind eine Karte (abhaken, neue Aufgabe direkt eintippen, „Liste bearbeiten ›“ für Priorität/Erledigte im Reiter „To-Do & Orga“). Gleichartige automatische Aufgaben werden gebündelt: Devices-7-Tage-Check und Metabolisches Bündel pro Patient (mit „alle belassen — Indikation besteht“ bzw. „alle umgesetzt“ in einem Tipp), auf der To-Do-Seite zusätzlich RASS/BPS/CAM über alle Patienten. Die To-Do-Seite hat damit 19 statt 31 Zeilen.
- **Fokus**: Das Zählerchen oben zeigt nur noch rote Punkte (vorher alle 20). Automatische Punkte, die ein manuelles Hauptproblem nur wiederholen (z. B. „NA 0,1 → 0,25 ↑“ unter Kreislauf-Baustelle), entfallen.
- **Sprungziele**: Ein Tipp auf einen Fokus-Punkt oder ein To-Do öffnet den Patienten im passenden Reiter (Albumin → Therapie, Verbandswechsel → Organe/Wunde, Device → To-Do & Orga, Laborwert → Labor & Verlauf).
- **Infektion**: Die Antiinfektiva-Auswahl ist eingeklappt („+ Antiinfektivum“); Hinweistext verständlicher.
- **Schlanker Modus neu — Übergabe-Werkzeug, dokumentiert wird im Klinik-System**:
  - Patient: Übergabe-Kernpunkte (mit „!“ = wichtig), To-Dos, Lage automatisch aus den vorhandenen Daten (Fokus, Katecholamine, Beatmung, Diurese/CiCa, Sedierung, Antiinfektiva, Transfusion, Labor), Verlauf mit einer Zeile zum Ergänzen. Lappenkontrolle bleibt abhakbar.
  - Weg: „Noch zu prüfen“ mit sieben Organfeldern und die Pflichtwerte-Leiste. Werte (Labor, Noradrenalin, Diurese, RASS) nur noch optional unter „Werte nachtragen“.
  - Keine Erinnerungen, die nur fehlende Dokumentation in der App anmahnen (Diurese eintragen, RASS/BPS/CAM, PiCCO, Stuhlgang). Klinische Intervalle (IAP, Anti-Xa, Natrium, Lappen, Devices, Verbandswechsel, SBT) bleiben.
  - „Vollansicht“ öffnet denselben Patienten mit allen Reitern.
  - Meine Schicht (schlank): pro Patient Lage, Übergabe und To-Dos. Ausdruck (schlank): Übergabe-Kernpunkte und Fokus oben, Lappen, Transfusion, CiCa statt Diurese.

## Neu in 3.15.0

- **Devices**: Beim Abhaken der 7-Tage-Evaluation gibt es „gewechselt“ mit Feld für den neuen Zugang (Lage, ggf. durch verbrannte Haut) — das alte Device wird heute als entfernt eingetragen, das neue liegt ab heute (Liegetag 1). „entfernt (ohne Neuanlage)“ trägt nur das Ende ein. „Wechsel geplant“ legt ein To-Do „… wechseln“ an; beim Abhaken kommt dieselbe Abfrage (gewechselt mit neuem Zugang / entfernt ohne Neuanlage / noch nicht gewechselt). Auch selbst getippte To-Dos wie „DK wechseln“ fragen so nach.
- **Metabolisches Bündel**: Die Karte verschwindet 48 h nach dem Unfall. Offene Punkte laufen dann als einzelne To-Dos („Metabolisches Bündel: …“); beim Abhaken „umgesetzt“ oder „nicht indiziert“.
- **Infektion**: Läuft schon ein Antiinfektivum, sind die Vorschläge zum Krankheitsbild (Hausleitlinie, Leitlinienlage, Erreger) minimiert — „Vorschläge anzeigen“ klappt sie wieder auf. Die Sonderregel zur Therapiedauer bleibt sichtbar.

## Neu in 3.14.0

- **Transfusion als eigene Karte** (Reiter Therapie, direkt unter Diurese):
  - Kacheln: Hb (Ziel 7–9 g/dl, rot < 7), Thrombozyten (rot < 50, gelb < 100), Fibrinogen (rot < 150, gelb < 200 mg/dl), Blutprodukte der letzten 24 h und seit Aufnahme.
  - Schnelleintrag: EK · FFP · TK · Fibrinogen (g) · PPSB (IE), Menge per Tipp, Uhrzeit optional, Indikation (Hb < 7, Blutung, OP/Nekrektomie, Gerinnung, Thrombopenie). Einträge mit × löschbar.
  - Nach einer EK-Gabe: „Hb-Kontrolle ausstehend“ mit direkter Eingabe, bis ein neues Hb da ist.
  - Bereitstellung: EK bereitgestellt (−/+, „n nach SOP“ für die nächste geplante Nekrektomie; transfundierte EK werden abgezogen), Kreuzblut „jetzt abgenommen“ → gültig 72 h, Blutgruppe, Aufklärung Transfusion.
  - Hinweise nach SOP Transfusionsregime: EK-Bedarf für die geplante OP, Kreuzblut fehlt/abgelaufen, EK : FFP bei Blutung/OP 1 : 1 bis 1 : 2, Massentransfusion 6 EK : 1 TK, fehlende Aufklärung; Gerinnungsvoraussetzungen aus dem Labor.
- **Lagebild**: Kachel „Transfusion 24 h“, sobald transfundiert wurde oder Hb < 7.
- **Ausdruck**: Zeile „Transfusion“ (Gaben der Schicht mit Uhrzeit, 48 h, gesamt, bereitgestellt, Kreuzblut, Blutgruppe, offene Hb-Kontrolle).
- Kreislauf: Chips EK/TK/FFP/Fibrinogen entfernt (jetzt in der Karte Transfusion).

## Neu in 3.13.1

- **CiCa ohne Postfilter-iCa**: Eingabe, Citrat-Anpassung und das Kontroll-To-Do „iCa postfilter und systemisch“ entfernt — macht die Pflege nach Protokoll. Im Kästchen bleiben Einstellungen, Entzug, systemisches iCa (mit Calcium-Hinweis), Ca-Ratio und der Säure-Basen-Vorschlag.

## Neu in 3.13.0

- **Diurese unter Ziel ist nur in der akuten Verbrennung (erste 48 h) rot.** Sonst gelb („prüfen“), ohne roten Alarm — in App, Zimmerplan, Lagebild und Ausdruck.
- **Dialysepflichtig**: Beim Anklicken von „Dialysepflichtig“ (Vorerkrankungen bzw. im Bereich Diurese) wird gefragt: Restausscheidung vorhanden / keine. Bei „keine“ ist die Diurese ausgegraut — keine Pflichtangabe, keine Diurese-Erinnerungen, im Ausdruck „Diurese entfällt“.
- **Laufende CiCa**: Diurese ebenfalls ausgegraut; im Pflichtwert und im Lagebild steht stattdessen der **CiCa-Entzug** (mit Trendpfeil).
- **CiCa deutlicher**: blauer Hinweis „CiCa läuft · Entzug …“ im Kopf, „CiCa“ in der Bettenleiste und im Zimmerplan, kräftig umrandetes Kästchen mit pulsierendem „läuft“.
- **CiCa-Werte nur noch unter CiCa**: Einstellungen und iCa (postfilter/systemisch) stehen im Kästchen CiCa; unter Niere nur „CiCa läuft · Entzug …“. Die Einstellungszeilen erscheinen nicht mehr im Verlauf der Niere.
- **Trendpfeile** bei jeder Änderung der Einstellung (z. B. Entzug 50 ↑ (0) ml/h, Blut 120 ↑ (100)).
- **Säure-Basen-Vorschlag**: bei metabolischer Azidose (BE < −3, pH < 7,35) Blutfluss +10 ml/min oder Dialysat −500 ml/h zum Übernehmen; bei Alkalose (BE > +3, pH > 7,45) umgekehrt. Kein Citrat-Plus bei Gesamt-Ca/iCa > 2,5 (Citratakkumulation).
- **CiCa-Filter** entfernt (macht die Pflege) — kein Filter-To-Do, keine Filterzeit mehr.
- Ausdruck: Zeile „CiCa“ (Entzug, Einstellungen mit Pfeilen, iCa) statt Diurese.

## Neu in 3.12.0

- **Lappenkontrolle als eigenes Kästchen** (Übersicht und Organe → Wunde), sobald eine Lappen-OP als erfolgt eingetragen ist oder im Verlauf steht — 5 Tage lang alle 2 h:
  - großer Knopf „✓ Kontrolle jetzt — unauffällig“, dazu Befund-Chips (vital, Rekap, Doppler, warm bzw. livide, blass, Doppler –, kalt) und Freitext.
  - Jede Kontrolle wird mit Uhrzeit dokumentiert (Kette ✓ 08:05 · ✓ 10:02 …, verpasste Termine als ✗).
  - Kontrolle mehr als 15 min überfällig → **rotes To-Do** (Priorität hoch); verschwindet, sobald abgehakt ist.
  - Auffälliger Befund → Wunde als Baustelle und To-Do „Plastische Chirurgie sofort informieren“.
  - Diagnose mit Lappenplastik, aber keine OP-Zeit → das Kästchen fragt nach dem OP-Ende (oder „keine Kontrollen nötig“).
  - Ausdruck: Zeile „Lappen“ mit den Kontrollen der Schicht und den nächsten Terminen; die Routinekontrollen stehen nicht mehr einzeln unter Wunde.
- **Niere**: Chip „Diurese ml/h“ entfernt — Diurese nur noch im Bereich Diurese.
- **O2-Einträge** lesbar: „O2 2 l/min“ bzw. „Raumluft“.
- **Neue Demo-Patienten**: Zi 1 schwer verbrannt (58 % VKOF, Inhalationstrauma, Schockphase, PiCCO, IAP steigend) · Zi 2 mittel (32 %, Tag 9, Sepsis, zwei Erreger) · Zi 3 Langlieger (45 %, Tag 24, tracheotomiert, Weaning, VAP 3-MRGN, AKI mit CiCa) · Zi 5 unter 20 % (16 % Gesicht/Hals/Arme, nicht intubiert) · Zi 6 Lappenplastik (Tag 1 nach OP, eine Kontrolle verpasst, eine überfällig) · Zi 7 Minorfall (7 % Verbrühung, eher IMC).

## Neu in 3.11.2

- **K⁺** wird im Druck schon außerhalb der Normgrenzen (3,5–5,1 mmol/l) hervorgehoben.
- **Albumin in g/dl** wie im Labor der Rotationsklinik (Eingabe, Anzeige, Trend). Hervorhebung unter 2,2 g/dl (Ziel laut SOP 2,2–2,7). Früher in g/l eingegebene Werte werden für die Bewertung automatisch umgerechnet.

## Neu in 3.11.1

- **Labor im Druck nach ITS-Relevanz** statt nach Referenzbereich, drei Stufen:
  - **fett** — ITS-Grenze überschritten, relevanter Trend (⚠) oder außerhalb der Norm und schlechter werdend (Pfeil in die ungünstige Richtung, bei Elektrolyten/Glukose/pH: weiter weg von der Mitte).
  - normal — außerhalb der Norm, aber stabil oder besser.
  - grau — im Normbereich.
- ITS-Grenzen: Laktat ≥ 2 · Hb < 8 · p/F < 200 · CRP ≥ 100 · PCT ≥ 2 · Leukos < 4 / > 12 · Thrombozyten < 100 · Quick < 50 · pTT > 50 · Fibrinogen < 150 · Krea > 1,5 · Harnstoff > 100 · K⁺ < 3,5 / > 5,1 (Normgrenzen) · Na⁺ < 130 / > 150 · Ca < 1,9 / > 2,8 · iCa < 1,0 / > 1,4 · Phosphat < 0,6 / > 2 · Mg < 0,6 / > 1,5 · CK > 5000 · Myoglobin > 1000 · Bilirubin > 3 · GOT/GPT > 150 · GGT > 300 · AP > 300 · Lipase > 180 · Albumin < 2,2 g/dl · Glukose < 70 / > 180 · Troponin > 50 · BNP > 400 · Triglyceride > 400 · pH < 7,30 / > 7,50 · pO2 < 60 · pCO2 < 30 / > 55 · BE < −5 / > 5 · ScvO2 < 65 · COHb > 10 · MetHb > 3 · Präalbumin < 10 (Einheiten wie in der App).

## Neu in 3.11.0

- **Tablet-Layout ist jetzt Standard**: Bettenleiste links, Reiter Übersicht · Organe · Therapie · Infektion · Labor & Verlauf · Organisation · Wissen & SOPs. Auf dem Handy ohne Bettenleiste, Reiter oben. Auswahl-Chips brechen um statt seitlich zu scrollen.
- **Druck Schichtliste/Übergabe**:
  - Bereichsüberschriften (Verlauf, Diurese, Devices, Neuro, Pulmo …) fetter und etwas größer.
  - Kopf ohne Dopplungen: Diagnose in einer Zeile, dahinter nur noch, was nicht schon in der Diagnose steht (z. B. „davon tief 18 % · h 19 nach Unfall · IHT AIS 2 …“). Burn-Tag nur, wenn er vom ITS-Tag abweicht. Vorerkrankungen, die schon in der Diagnose stehen, entfallen. Im Verlauf steht der Unfall nur noch als „Unfall“.
  - **Erinnern** nur noch am Ende (vor der Vertretung), jeder Punkt in eigener Zeile mit Trennlinie, zweispaltig, Kernaussage fett. Metabolisches Bündel als kurze Stichworte.
  - Kürzere Texte: Datumsangaben ohne laufendes Jahr, Infektzeile ohne doppelten Fokus, Device-Evaluation kürzer.
  - **Labor**: Trendpfeil immer (auch „→“ bei stabil), Hervorhebung nach ITS-Relevanz (siehe 3.11.1). Legende ergänzt.
- **Blanko**: Labor der letzten 24 h mit Trendpfeil (fett hervorgehobene zuerst, normale grau am Ende), laufende Antiinfektiva mit Therapietag in der Zeile „Infekt / AB“, dazu ITS-Tag und Vorerkrankungen im Kopf. Kompaktere Zeilen, damit die Übergabe-Zeile auch bei 4 Patienten je Seite Platz hat.

## Neu in 3.10.0

- **Ernährungsrechner** im Bereich Ernährung (aufklappbar) und in der SOP „Ernährung und Abführen“: Bedarf nach SOP (24 kcal/kg Idealgewicht, einstellbar), Aufbau Tag 1 / Tag 2 / ab Tag 3, Sondenkost wählbar (HPenergy, Original, Renal, HPfibre). Laufende Zufuhr wird gegengerechnet — enteral, Olimel 5,7 %, Propofol (≈ 1,1 kcal/ml, aus der Medikation vorbelegt) und Glukose 5 %/10 % — mit Deckung in % und der Rate für heute bzw. für 100 %. „übernehmen“ trägt die Rate in die Ernährung ein. Ab Tag 3 und Deckung < 80 %: Hinweis Cernevit + Addel Trace und die Olimel-Rate, die das Defizit deckt.
- **Probeweise: Verbrennung nur bei passender Diagnose.** Der Bereich „Verbrennung“ erscheint nur, wenn Verbrennungsdaten erfasst sind, die Diagnose auf eine Verbrennung hinweist (z. B. Verbrennung, Verbrühung, VKOF, Strom-/Hochspannungsunfall, Inhalationstrauma) oder der Patient als Zugang angekündigt ist. Das Metabolische Bündel hängt daran (Verbrennung > 20 % VKOF). Bei anderen Diagnosen (z. B. Pneumonie) bleiben beide ausgeblendet.

## Neu in 3.9.0

- **Klinikname**: überall „Rotationsklinik“ statt des Klinik-Namens; Kapitelangaben der Antibiotika-Leitlinie als „LL Kap.“. Bereits gespeicherte Angaben werden beim Öffnen umgestellt.
- **Raumtemperatur** und **Oxandrolon** entfernt (Metabolisches Bündel, Checkliste 48 h, Wissen).
- **Ernährung nach SOP der Rotationsklinik**: Produktwahl automatisch — Fresubin HPenergy 1,5 kcal/ml (Verbrennung, Trauma, Dialyse), Fresubin Renal 2 kcal/ml (Niereninsuffizienz ohne Dialyse, Hypernatriämie), sonst Fresubin Original 1 kcal/ml; Rate des Tages danach berechnet. Chips mit den Hausprodukten (inkl. HPfibre, Energy Drink, Pudding, Olimel 5,7 %, SmofKabiven).
- **Perfusoren gewichtsadaptiert**: Propofol, Midazolam, Esketamin, Lidocain in mg/kg/h; Sufentanil, Clonidin, Dexmedetomidin in µg/kg/h; Noradrenalin, Adrenalin, Dobutamin, Remifentanil in µg/kg/min — ml/h steht automatisch in Klammern. Eingaben in ml/h werden umgerechnet. Konzentrationen unter „Laufende Medikation → Perfusor-Standards“ einstellbar (gilt für das Gerät).
- **Eingriffe**: Nekrektomie mit OP-Vorbereitung wird nicht mehr zusammengequetscht.
- **Vertretung**: Ehegatte gewählt → Betreuer ausgeblendet und umgekehrt; der Ausdruck zeigt nur die gewählte Vertretung.
- **Verlauf** zeigt den Erkrankungsweg: Unfall/Aufnahme, Eingriffe, Schlüsselereignisse (Intubation, Extubation, Tracheotomie, CiCa, Sepsis …) und die Infektion als Diagnose — keine Perfusor- oder Medikamentenstarts mehr.
- **Übergabedruck**: Verlauf direkt unter der Kopfzeile, Vertretung ganz unten, kein Hinweis „… unter Hämodynamik/Infekt“ mehr bei den Medis. Erinnerungen stehen nur noch drauf, wenn sie im Fokus-Bereich mit ⚑ markiert sind (Schichtliste unverändert).
- **Intervalle**: kein To-Do mehr für Retentionswerte (gehört zum täglichen Labor). Anti-Xa im Intervall (täglich bis im Ziel, dann alle 3 Tage — oder fest wählbar im Bereich Antikoagulation, Abnahme 4 h nach Gabe). Nach einer Lappen-OP Lappenkontrolle alle 2 h für 5 Tage mit Schnellabfrage (auffälliger Befund → Organsystem „Baustelle“ und To-Do „Plastische Chirurgie informieren“).

## Neu in 3.8.0

- **Pflichtwerte pro Schicht** oben in der Patientenansicht: P/F, Katecholamine, Diurese, Laktat, Ernährung, AB. Grün = in dieser Schicht eingetragen, gelb = offen; antippen öffnet die Schnelleingabe (inkl. „unverändert“ bzw. „keine“). Offene Pflichtwerte werden nur in der Eingabe markiert (Leiste, Laborchips Laktat/P/F/pO2/FiO2, Ernährung) — es entsteht kein zusätzliches To-Do.
- **P/F automatisch**, sobald in der Schicht pO2 (BGA) und FiO2 (neu in der BGA-Gruppe oder aus der Beatmung) vorliegen.
- **Noradrenalin in µg/kg/min** (Standard der Rotationsklinik): Schnelleingabe und Chip „NA“ in µg/kg/min, ml/h wird nach Gewicht und Perfusor (Standard 5 mg/50 ml) dazugerechnet. Werte > 2 werden als ml/h erkannt und umgerechnet.
- **Organsysteme** werden nur noch von Hand abgehakt. Ein einzelner Eintrag (z. B. RASS aus einem To-Do) hakt nicht mehr das ganze System ab.
- **Succinylcholin** überall entfernt (Hinweise, Checkliste 48 h, Wissen, Schockraum-Übergabe).
- **Ernährung als eigener Bereich**: aktueller Stand, Hausstandard nach Katecholaminbedarf, SOP-Rate des Tages und „wie bisher“ jeweils mit einem Tipp übernehmen, eigene Chips. Die Einträge stehen weiter beim Abdomen im Ausdruck.
- **CiCa-Kästchen** (wie PiCCO), sobald „CiCA gestartet“ eingetragen ist: Einstellungen (Blut, Dialysat, Citrat, Calcium, Entzug) mit Startwerten nach Herstellerstandard, Dosis in ml/kg/h, iCa postfilter/systemisch mit Anpassungsvorschlag zum Übernehmen, Ca-Ratio, Säure-Basen-Hinweis, Filterlaufzeit. Kontrollen und Filterwechsel kommen als To-Do.
- **Infektion**: Empfehlungen je Erreger sind antippbar (übernimmt die Substanz), bei MRE-Kapiteln zusätzlich „Standard LL Kap.“ (LL = Antibiotika-Leitlinie der Rotationsklinik). Bei zwei oder mehr Erregern erscheint „Gemeinsam wirksam“ mit den Substanzen, die alle abdecken (★), und ob die laufende Therapie schon alle abdeckt.
- **Verlauf nach Kontext**: Aufnahme-Optionen verschwinden nach der Aufnahme, Intubation/Extubation/Re-Intubation passend zum Zustand, Tracheotomie nur einmal, Escharotomie nur bei Verbrennung. CiCA-Chips unter Niere ebenso.
- **Labor**: Favoriten erscheinen zusätzlich in ihrer eigentlichen Gruppe. Neu: FiO2 (BGA), iCa postfilter (Niere, für CiCa).
- **Basislaufrate**: beim frischen Verbrennungspatienten ohne Rate Vorschlag nach SOP (Rule of 10) zum Übernehmen.
- **Rekap** aus der Reevaluation wird jetzt unter Kreislauf dokumentiert (vorher nur 2 h intern für die Reevaluation gespeichert).
- **Abhak-Felder** neu gestaltet: Haken als Grafik, exakt mittig, grün gefüllt.

## Neu in 3.7.2

- Neue Druckvorlage **To-Do-Liste** (Drucken → „To-Do-Liste“): nur die To-Dos, nach Zimmer sortiert, je Patient ein Block mit Zimmer, Name, ITS-Tag, Burn-Tag und Diagnose.
- Automatisch erzeugte To-Dos (Intervall, SOP, Regel) sind immer mit **AUTO** gekennzeichnet, Erinnerungen aus den Patientendaten mit **ERINN**; gekoppelte Bereiche in [ ], Fälligkeit dahinter. Legende oben auf dem Blatt.
- Auswahl vor dem Druck: alle oder meine Patienten; Erinnerungen, Intervall-Termine der nächsten 12 h, in dieser Schicht erledigte (durchgestrichen) und zwei Leerzeilen pro Patient jeweils an/aus.

## Neu in 3.7.1

- Devices: nach 7 Tagen Liegedauer entsteht ein To-Do „Indikation und Wechsel evaluieren“ (nicht für PEG und Trachealkanüle). Beim Abhaken: belassen, Wechsel geplant (legt ein To-Do „wechseln“ an) oder entfernt (trägt das Ende ein). Nach „belassen“ folgt die nächste Evaluation 7 Tage später; die letzte Evaluation steht am Device.
- McMahon-Score nach der Originalpublikation: Hypokalzämie < 1,88 mmol/l (Gesamt-Calcium; ein Wert < 1,4 wird als ionisiert erkannt und nicht gewertet), Phosphat 1,29/1,74 mmol/l. Punkte einzeln aufgeschlüsselt in der Crush-Box.
- Natrium: Umstellgrenze auf Deltajonin überall einheitlich > 139 mmol/l.

## Neu in 3.7.0

- Infektionsteil auf dem Stand der Infektio-App v4.1: Antibiotika-Leitlinie 10.1 der Rotationsklinik (09/2026), Resistenzlage 2025. Die alte Hausleitlinie (Stand 2022) ist entfernt.
- Fokuswahl wie in Infektio: Schnellwahl nach Region (Verbrennung zuerst) oder Suche; „LL“ markiert Foki mit Kapitel in der Hausleitlinie. VCH-, GCH-, Herzchirurgie- und Gyn/GBH-Foki sind jetzt wirklich ausgeblendet.
- Fokuskarte: Regime der Leitlinie mit Entscheidungshilfe, Dauer, Penicillinallergie-Alternative und Hinweisen; Übernehmen mit einem Tipp (auch „oder …“ / „+ …“-Partner); geplante Dauer und Kapitel werden an der Therapie gespeichert. Leitlinienlage, Diagnostik, Fokussanierung und Fallstricke eingeklappt darunter; Dauer-Sonderregeln (z. B. SAB ab steriler Blutkultur) hervorgehoben.
- Erreger: alle 78 Erreger aus Infektio in 11 Gruppen mit Suche; „gut wirksam“ aus dem Hausformular, lokale Resistenzrate gegen die laufende Therapie, Erregerkapitel der Leitlinie (z. B. MRSA Kap. 19.1). Material „Wundbiopsie“ (Gewebebiopsie statt Oberflächenabstrich), Screening-Nachweise gelten als Kolonisation.
- Abdeckungsprüfung nach den Infektio-Wirksamkeiten, inkl. Phänotyp aus dem Resistenzfeld (z. B. E. coli + ESBL → Pip/Tazo klinisch untauglich), Antibiogramm-Einträgen und lokaler Resistenz > 20 %.
- Freigabestatus des Hauses an jeder Substanz (OA, Reserve G-BA) mit Anforderungsweg in den ersten Therapietagen; Auswahl nach frei / Oberarzt / Reserve.
- Vancomycin nach LL Kap. 22: Loading und Folgedosis nach Gewicht und Nierenfunktion, Zielspiegel, Bewertung des letzten Spiegels; Talspiegel als Intervall-To-Do (vor der 5. Gabe bzw. nach 48 h, danach wöchentlich, bei Instabilität 2–3 × pro Woche).
- Neue To-Dos: „Antibiose reevaluieren (48 h)“ und „geplante Dauer erreicht — absetzen?“ mit Abfrage (fortführen, deeskalieren, oralisieren, absetzen); „absetzen“ beendet die Therapie. Arztbrief übernimmt das geplante Therapieende.
- Behoben: altes automatisches Vancomycin-To-Do wurde nach kurzer Zeit wieder entfernt; Status-Vorschlag „keine Antiinfektiva“ trotz laufender Therapie.

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
