const CACHE_NAME = "galaxi-cache-v2";

const urlsToCache = [
  "/Galaxi_amber/",
  "/Galaxi_amber/home.html",
  "/Galaxi_amber/index.html",
  "/Galaxi_amber/style.css",
  "/Galaxi_amber/icon.png",
  "/Galaxi_amber/manifest.json",
  "/Galaxi_amber/Galexi_perfume_part1.pdf",
  "/Galaxi_amber/Galexi_perfume_part2.pdf"
];

// نصب سرویس‌ورکر و کش‌کردن فایل‌ها
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// فعال‌سازی سرویس‌ورکر و حذف کش‌های قدیمی
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) return caches.delete(cache);
        })
      )
    )
  );
});

// پاسخ‌دهی از کش یا شبکه
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
