const CACHE_NAME = "galaxi-cache-v2";
const urlsToCache = [
  "home.html",
  "index.html",
  "galeria.html",
  "style.css",
  "app.js",
  "icon-192.png",
  "icon-512.png",
  "manifest.json",
  "Galexi_perfume_part1.pdf",
  "Galexi_perfume_part2.pdf"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

