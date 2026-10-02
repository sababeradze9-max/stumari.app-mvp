import { registerSW } from 'virtual:pwa-register';

// Register the Service Worker automatically
export const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('Stumari PWA: New content available, auto-updating service worker.');
  },
  onOfflineReady() {
    console.log('Stumari PWA: App ready to work offline. Guest guidebook cached locally.');
  },
  onRegisterError(error) {
    console.warn('Stumari PWA: Service worker registration error:', error);
  }
});

// Cache a guidebook property model explicitly in localStorage so zero-reception guests always have full access
export function cacheGuidebookLocally(property: any) {
  try {
    const key = `stumari_offline_guide_${property.slug}`;
    localStorage.setItem(key, JSON.stringify({
      property,
      cachedAt: new Date().toISOString()
    }));

    // Also prime browser image cache by prefetching cover image
    if (property.coverImage) {
      const img = new Image();
      img.src = property.coverImage;
    }
    if (property.hostAvatar) {
      const avatar = new Image();
      avatar.src = property.hostAvatar;
    }
    return true;
  } catch (err) {
    console.error('Failed to cache guidebook offline', err);
    return false;
  }
}

export function getCachedGuidebook(slug: string) {
  try {
    const key = `stumari_offline_guide_${slug}`;
    const raw = localStorage.getItem(key);
    if (raw) {
      const data = JSON.parse(raw);
      return data.property;
    }
  } catch (err) {
    console.error('Failed to read cached guidebook', err);
  }
  return null;
}
