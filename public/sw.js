/**
 * Stumari Guest Guidebook — Offline Service Worker
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

// Install: Pre-cache core guidebook shell assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Stumari SW] Pre-caching guest guidebook assets');
      // Use catch for individual assets so single failures don't halt the entire install
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

// Activate: Clean up older cache versions and claim clients immediately
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

// Fetch: Strategy depending on request type
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Ignore non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // 1. Navigation requests (HTML pages like /guest/guide.html?slug=...)
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          // Clone and update cache with fresh page
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
          // Try matching exact request (including query params)
          const exactMatch = await caches.match(request);
          if (exactMatch) return exactMatch;

          // Try matching ignoreSearch (e.g. /guest/guide.html?slug=... -> /guest/guide.html)
          const ignoreSearchMatch = await caches.match(request, { ignoreSearch: true });
          if (ignoreSearchMatch) return ignoreSearchMatch;

          // Fallback to guest guide shell
          const fallbackGuide = await caches.match('/guest/guide.html');
          if (fallbackGuide) return fallbackGuide;

          // Final fallback to root
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

  // 2. Google Fonts & Static CDN assets (CacheFirst)
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

  // 3. Property Images (Unsplash or local assets) — Stale While Revalidate
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

  // 4. Scripts, Styles & Other static assets — Stale-While-Revalidate
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

// Message listener: Cache dynamic property images on request from the guidebook
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
