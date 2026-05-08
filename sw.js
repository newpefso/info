const CACHE_NAME = 'pefso-sales-kit-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './favicon.ico',
  './assets/icons/pefso-icon-192.png',
  './assets/icons/pefso-icon-512.png',
  './assets/icons/pefso-icon-maskable-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).catch(() => null)
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(key => {
      if (key !== CACHE_NAME) return caches.delete(key);
    })))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    fetch(req).catch(() => caches.match(req).then(cached => cached || caches.match('./index.html')))
  );
});
