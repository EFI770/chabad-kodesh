const CACHE_NAME = "chabad-kodesh-v11";
const CACHE_PREFIX = "chabad-kodesh-"; // shared origin efi770.github.io: never touch other apps' caches
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./logo-192.png",
  "./logo-512.png",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./prices.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);
  const isHTML = req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html");
  const isPrices = url.pathname.endsWith("prices.json");

  // Always network-first for HTML and prices so updates reach PWA users
  if (isHTML || isPrices) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || (isHTML ? caches.match("./index.html") : null)))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req))
  );
});
