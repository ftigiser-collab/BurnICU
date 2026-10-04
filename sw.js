/* BurnICU V1 — Service Worker (offline)
   Update: index.html ersetzen und hier VERSION hochzählen (z. B. burnicu-v3.0.1),
   dazu version.json anpassen. Der SW räumt nur eigene Caches (Präfix "burnicu-") auf,
   damit andere Apps auf derselben GitHub-Pages-Domain unberührt bleiben. */
const VERSION = 'burnicu-v3.0.0';
const PREFIX = 'burnicu-';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(VERSION)
      .then((c) => c.addAll(CORE.map((u) => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k.startsWith(PREFIX) && k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (e) => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});

const fromNet = (req, key) => fetch(req, { cache: 'no-cache' }).then((res) => {
  if (res && res.ok) caches.open(VERSION).then((c) => c.put(key || req, res.clone()));
  return res;
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  // Update-Prüfung immer live
  if (url.pathname.endsWith('/version.json') || url.searchParams.has('u')) return;

  // Seitenaufruf der App: sofort aus dem Cache (offline sicher), im Hintergrund aktualisieren.
  // Unterordner (alt/, test/) gehen normal ans Netz.
  if (req.mode === 'navigate') {
    const sp = new URL(self.registration.scope).pathname;
    if (url.pathname !== sp && url.pathname !== sp + 'index.html') return;
    e.respondWith((async () => {
      const hit = (await caches.match('./index.html')) || (await caches.match(req, { ignoreSearch: true }));
      const net = fromNet(new Request('./index.html'), './index.html').catch(() => null);
      if (hit) { e.waitUntil(net); return hit; }
      const res = await net;
      return res || new Response('<h1>BurnICU ist offline noch nicht verfügbar</h1><p>Bitte einmal mit Internet öffnen.</p>', { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
    })());
    return;
  }

  // Übrige Dateien: Cache zuerst, sonst Netz (und merken)
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => hit || fromNet(req).catch(() => Response.error()))
  );
});
