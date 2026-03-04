const CACHE_NAME = "quals21-cache-v2";

const urlsToCache = [
  "/quals21-pwa/",
  "/quals21-pwa/index.html",
  "/quals21-pwa/icon-192.png",
  "/quals21-pwa/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
