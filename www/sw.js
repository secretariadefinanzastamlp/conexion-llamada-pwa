const CACHE_NAME = 'app-llamada-v1';
const RECURSOS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(RECURSOS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(lista => {
      return Promise.all(
        lista.filter(nombreCache => nombreCache !== CACHE_NAME)
             .map(cache => caches.delete(cache))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (!e.request.url.startsWith('http')) return;

  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request).catch(() => {
        return caches.match('/index.html');
      });
    })
  );
});
