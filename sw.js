const CACHE_NAME = 'aloush-v1';
const urlsToCache = ['/aloush-library/', '/aloush-library/index.html', '/aloush-library/manifest.json'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache)).then(() => self.skipWaiting())); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))); });
