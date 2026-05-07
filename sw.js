const CACHE_NAME = 'vault-v1';
const ASSETS = ['./indexENC.html', './reader.html', './Logger_Pub_Icon.png', './Reader_Icon.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
