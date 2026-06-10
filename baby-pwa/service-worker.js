const CACHE = 'baby-rhythm-pwa-v16';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './schedule-data.js',
  './infant_sleep_daily_schedule_0_24_months.csv',
  './manifest.webmanifest',
  './icons/icon.svg',
  './icons/icon.png',
  './icons/sleep.svg',
  './icons/bottle.svg',
  './icons/toys.svg',
  './icons/stroller.svg',
  './icons/sound.svg',
  './icons/bulb.svg',
  './icons/plan.svg',
  './icons/graphs.svg',
  './icons/settings.svg',
  './icons/bird.svg',
  './icons/rain.svg',
  './assets/white-noise.wav',
  './assets/rain-loop.wav',
  './assets/bird-sounds.wav'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      const copy = response.clone();
      caches.open(CACHE).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
