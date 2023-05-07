// The service worker file
const cacheName = "v1";
const cacheAssets = ["/offline.html"];

// Install event
self.addEventListener("install", (e) => {
  console.log("Service worker installed");
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Caching files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event
self.addEventListener("activate", (e) => {
  console.log("Service worker activated");
  // Remove old caches
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Deleting old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event
self.addEventListener("fetch", (e) => {
  console.log("Service worker fetching");
  e.respondWith(
    // Check if the request is in the cache
    caches.match(e.request).then((cacheRes) => {
      // Return the cached response if found, otherwise fetch from network
      return (
        cacheRes || fetch(e.request).catch(() => caches.match("/offline.html"))
      );
    })
  );
});
