const CACHE_NAME = "flora-anotomy-shell-v124";
const APP_SHELL = [
  "./",
  "./index.html",
  "./style.css?v=105",
  "./script.js?v=102",
  "./ai-chat.js?v=103",
  "./ui-enhancements.js?v=1",
  "./supabase-config.js?v=2",
  "./supabase-auth.js?v=8",
  "./flora-extra.js",
  "./flora-additional.js",
  "./flora-houseplants.js",
  "./flora-new-pack.js",
  "./flora-expansion.js",
  "./flora-expansion-media.js",
  "./flora-verified-media.js",
  "./flora-additional-media.js",
  "./flora-more.js",
  "./flora-more-media.js",
  "./flora-1000.js",
  "./flora-1111.js",
  "./manifest.webmanifest.json?v=92",
  "./icon.svg?v=92",
  "./icon-192.png?v=92",
  "./icon-512.png?v=92",
  "./apple-touch-icon.png?v=92"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key.startsWith("flora-anotomy-shell-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const requestURL = new URL(event.request.url);
  if (event.request.method !== "GET" || requestURL.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", copy));
          }
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => cachedResponse || fetch(event.request))
  );
});