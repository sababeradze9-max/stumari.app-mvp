/**
 * Stumari Guest Guidebook — Root Offline Service Worker
 * Ensures guests can access essential check-in details, Wi-Fi passwords,
 * key codes, and house manual even without cellular reception at the property.
 */

const CACHE_NAME = 'stumari-guest-v2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/guest/guide.html',
  '/css/global.css',
  '/css/guest.css',
  '/js/global.js',
  '/js/guest.js',
  '/icon.svg',
  '/favicon.ico',
  '/pwa-192x192.png',
  '/pwa-512x512.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Stumari SW] Pre-caching guest guidebook assets');
      return Promise.allSettled(
        STATIC_ASSETS.map((asset) =>
          cache.add(asset).catch((err) => {
            console.warn(`[Stumari SW] Failed to pre-cache ${asset}:`, err);
          })
        )
      );
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => {
            console.log('[Stumari SW] Removing legacy cache:', key);
            return caches.delete(key);
          })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== 'GET') {
    return;
  }

  // HTML page navigations (e.g. /guest/guide.html?slug=...)
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          console.log('[Stumari SW] Network unreachable. Serving cached guidebook page for:', url.pathname);
          const exactMatch = await caches.match(request);
          if (exactMatch) return exactMatch;

          const ignoreSearchMatch = await caches.match(request, { ignoreSearch: true });
          if (ignoreSearchMatch) return ignoreSearchMatch;

          const fallbackGuide = await caches.match('/guest/guide.html');
          if (fallbackGuide) return fallbackGuide;

          const fallbackRoot = await caches.match('/');
          if (fallbackRoot) return fallbackRoot;

          return new Response(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Offline — Stumari Guest Guide</title>
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; text-align: center; background: #f8fafc; color: #0f172a; }
                .card { max-width: 400px; margin: 40px auto; background: #fff; padding: 24px; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
                h1 { font-size: 1.25rem; margin-bottom: 8px; color: #127c56; }
                p { font-size: 0.9rem; color: #64748b; line-height: 1.5; }
                .btn { display: inline-block; margin-top: 16px; padding: 10px 20px; background: #127c56; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 600; }
              </style>
            </head>
            <body>
              <div class="card">
                <h1>Stumari Guest Guide</h1>
                <p>You appear to be offline or outside cellular reception.</p>
                <p>If you previously opened this property guide, try going back to view your cached check-in details.</p>
                <a href="/guest/guide.html" class="btn">Open Saved Guide</a>
              </div>
            </body>
            </html>`,
            { headers: { 'Content-Type': 'text/html' } }
          );
        })
    );
    return;
  }

  // Google Fonts & Static CDN assets (CacheFirst)
  if (url.origin.includes('fonts.googleapis.com') || url.origin.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // Images
  if (request.destination === 'image' || url.pathname.match(/\.(png|jpg|jpeg|svg|webp|ico)$/i)) {
    event.respondWith(
      caches.match(request, { ignoreSearch: true }).then((cachedResponse) => {
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // Scripts, Styles & other static assets
  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then((cachedResponse) => {
      const fetchPromise = fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CACHE_URLS') {
    const urlsToCache = event.data.urls || [];
    if (urlsToCache.length > 0) {
      caches.open(CACHE_NAME).then((cache) => {
        urlsToCache.forEach((url) => {
          if (url && typeof url === 'string' && (url.startsWith('http') || url.startsWith('/'))) {
            fetch(url, { mode: 'no-cors' })
              .then((res) => cache.put(url, res))
              .catch((err) => console.warn('[Stumari SW] Failed caching dynamic url:', url, err));
          }
        });
      });
    }
  }
});
