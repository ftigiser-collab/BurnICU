/* BurnStart — Service Worker (offline) für den Unterordner /BurnICU/start/.
   Eigener Cache-Präfix "burnstart-", damit BurnICU, BurnICU Alltag und BurnStart
   sich nicht gegenseitig aufräumen. Update: VERSION hochzählen und version.json anpassen. */
const VERSION = 'burnstart-v1.0.0';
const PREFIX = 'burnstart-';
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

const fromNet = (req, key) => fetch(req, { cache: 'no-cache' }).then((res) => {
  if (res && res.ok) caches.open(VERSION).then((c) => c.put(key || req, res.clone()));
  return res;
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (url.pathname.endsWith('/version.json') || url.searchParams.has('u')) return;
  const scope = new URL(self.registration.scope).pathname;
  if (!url.pathname.startsWith(scope)) return;

  // App-Seite: sofort aus dem Cache (offline sicher), im Hintergrund aktualisieren
  if (req.mode === 'navigate') {
    if (url.pathname !== scope && url.pathname !== scope + 'index.html') return;
    e.respondWith((async () => {
      const hit = (await caches.match('./index.html')) || (await caches.match(req, { ignoreSearch: true }));
      const net = fromNet(new Request('./index.html'), './index.html').catch(() => null);
      if (hit) { e.waitUntil(net); return hit; }
      const res = await net;
      return res || new Response('<h1>BurnStart ist offline noch nicht verfügbar</h1><p>Bitte einmal mit Internet öffnen.</p>', { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
    })());
    return;
  }

  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => hit || fromNet(req).catch(() => Response.error()))
  );
});
