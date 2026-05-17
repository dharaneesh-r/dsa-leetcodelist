// DSA Roadmap Service Worker
// Caches the HTML shell so the app works offline once loaded.

const CACHE_VERSION = "dsa-v1";
const CACHE_FILES = ["./dsaSheet.html", "./manifest.json"];

// Install: pre-cache the app shell
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      // Cache the files we know about; ignore failures for any one of them
      return Promise.allSettled(
        CACHE_FILES.map((url) => cache.add(url).catch(() => null)),
      );
    }),
  );
  // Activate immediately on first install
  self.skipWaiting();
});

// Activate: clean up old caches from previous versions
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)),
        ),
      ),
  );
  // Take control of any open tabs without requiring reload
  self.clients.claim();
});

// Fetch: network-first for HTML (so updates land), cache-first for everything else
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Only handle GET requests
  if (req.method !== "GET") return;

  // Skip cross-origin requests like LeetCode, YouTube, CDNs
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // For navigation requests (HTML), try network first, fall back to cache
  if (req.mode === "navigate" || req.destination === "document") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          // Update cache with fresh copy
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req).then((c) => c || caches.match("./dsaSheet.html")),
        ),
    );
    return;
  }

  // Otherwise: cache-first
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          // Don't cache opaque or error responses
          if (!res || res.status !== 200 || res.type !== "basic") return res;
          const copy = res.clone();
          caches.open(CACHE_VERSION).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match("./dsaSheet.html"));
    }),
  );
});
