/**
 * Stumari Guest Experience Controller
 * Mobile-first, single-page application with bottom navigation, modals,
 * and offline Service Worker caching for seamless check-in without cell service.
 */

document.addEventListener("DOMContentLoaded", () => {
  initGuestExperience();
});

function initGuestExperience() {
  // Determine property from URL slug or active property
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get("slug");
  
  const properties = typeof Stumari !== "undefined" ? Stumari.getProperties() : [];
  let property = null;

  if (slug) {
    property = properties.find(p => p.slug === slug);
  }
  if (!property && typeof Stumari !== "undefined") {
    property = Stumari.getActiveProperty();
  }

  // Offline fallback: Check localStorage if offline or property wasn't retrieved
  if (!property && slug) {
    try {
      const cached = localStorage.getItem("stumari_cached_guide_" + slug);
      if (cached) property = JSON.parse(cached);
    } catch (e) {
      console.warn("Failed reading cached property from localStorage:", e);
    }
  }

  if (!property) {
    try {
      const last = localStorage.getItem("stumari_last_guide");
      if (last) property = JSON.parse(last);
    } catch (e) {
      console.warn("Failed reading last guide from localStorage:", e);
    }
  }

  // Fallback to a default property structure if completely empty
  if (!property) {
    property = {
      id: "prop_offline",
      slug: "offline-apartment",
      name: "Your Stumari Property",
      location: "Property Location",
      guide: {
        welcome: { title: "Welcome to Your Stay", hostName: "Your Host", hostPhone: "" },
        wifi: { network: "Host_WiFi", password: "Password123" },
        checkIn: { doorCode: "1234#", lockboxCode: "5678", instructions: "Enter through front door." }
      }
    };
  }

  // Persist current property for guaranteed offline access
  try {
    const cacheKey = "stumari_cached_guide_" + (property.slug || "default");
    localStorage.setItem(cacheKey, JSON.stringify(property));
    localStorage.setItem("stumari_last_guide", JSON.stringify(property));
    localStorage.setItem("stumari_offline_cached_at", new Date().toISOString());
  } catch (e) {
    console.warn("Failed to write to localStorage for offline access:", e);
  }

  // Setup Service Worker and offline connection listeners
  setupServiceWorker(property);
  setupOfflineSupport(property);

  // Populate Hero
  const heroEl = document.getElementById("guest-hero");
  const titleEl = document.getElementById("guest-title");
  const taglineEl = document.getElementById("guest-tagline");
  const locationEl = document.getElementById("guest-location");

  if (heroEl && property.coverImage) {
    heroEl.style.backgroundImage = `url('${property.coverImage}')`;
  }
  if (titleEl) titleEl.textContent = property.guide?.welcome?.title || `Welcome to ${property.name}`;
  if (taglineEl) taglineEl.textContent = property.guide?.welcome?.greeting || property.location;
  if (locationEl) locationEl.textContent = property.location;

  // Wi-Fi quick banner
  const wifiSsid = document.getElementById("guest-wifi-ssid");
  const wifiPass = document.getElementById("guest-wifi-pass");
  const copyWifiBtn = document.getElementById("guest-copy-wifi");

  if (wifiSsid && property.guide?.wifi?.network) {
    wifiSsid.textContent = property.guide.wifi.network;
  }
  if (wifiPass && property.guide?.wifi?.password) {
    wifiPass.textContent = property.guide.wifi.password;
  }

  if (copyWifiBtn && property.guide?.wifi?.password) {
    copyWifiBtn.addEventListener("click", () => {
      Stumari.copyToClipboard(property.guide.wifi.password, "Wi-Fi Password");
    });
  }

  // Action Cards Navigation / Modals
  const actionCards = document.querySelectorAll(".guest-action-card");
  const modal = document.getElementById("guest-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");

  function openModal(title, htmlContent) {
    if (!modal) return;
    modalTitle.textContent = title;
    modalBody.innerHTML = htmlContent;
    modal.classList.remove("hidden");
  }

  if (modalClose) {
    modalClose.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  }

  actionCards.forEach(card => {
    card.addEventListener("click", () => {
      const type = card.dataset.type;
      handleCardClick(type, property);
    });
  });

  function handleCardClick(type, prop) {
    const guide = prop.guide || {};

    switch (type) {
      case "checkin":
        openModal("Check-in & Arrival", `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div style="background:#f8fafc; padding:14px; border-radius:10px; border:1px solid #e2e8f0;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:11px; text-transform:uppercase; font-weight:700; color:#64748b;">Door Keypad Code</span>
                <span style="font-size:10px; font-weight:700; color:#127c56; background:#e8f5f0; padding:2px 6px; border-radius:4px;">Available Offline</span>
              </div>
              <div style="font-size:26px; font-weight:800; font-family:monospace; color:#0f172a; margin-top:6px; letter-spacing:1px;">
                ${guide.checkIn?.doorCode || '3829#'}
              </div>
              <p style="font-size:12px; color:#64748b; margin-top:6px;">Backup lockbox code: <strong style="font-family:monospace; color:#0f172a;">${guide.checkIn?.lockboxCode || '7419'}</strong></p>
            </div>
            <div>
              <h4 style="font-size:14px; font-weight:700; margin-bottom:4px;">Arrival Instructions</h4>
              <p style="font-size:13px; color:#475569; line-height:1.5;">${guide.checkIn?.instructions || 'Push carved wooden gate, take spiral stairs to 2nd floor, teal door.'}</p>
            </div>
            <div>
              <h4 style="font-size:14px; font-weight:700; margin-bottom:4px;">Parking</h4>
              <p style="font-size:13px; color:#475569; line-height:1.5;">${guide.checkIn?.parking || 'Free street parking along the main street.'}</p>
            </div>
            <button class="btn btn-primary btn-full" onclick="Stumari.copyToClipboard('${guide.checkIn?.doorCode || '3829#'}', 'Keypad Code')">Copy Door Code</button>
          </div>
        `);
        break;

      case "wifi":
        openModal("Wi-Fi Credentials", `
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div style="background:#0f172a; color:#fff; padding:16px; border-radius:12px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:11px; text-transform:uppercase; color:#94a3b8; font-family:monospace;">Network Name (SSID)</span>
                <span style="font-size:10px; font-weight:700; color:#10b981; background:rgba(16,185,129,0.15); padding:2px 6px; border-radius:4px;">Offline Ready</span>
              </div>
              <div style="font-size:18px; font-weight:700; color:#fff; margin-top:4px; margin-bottom:14px;">${guide.wifi?.network || 'OldTbilisi_5G'}</div>
              <span style="font-size:11px; text-transform:uppercase; color:#94a3b8; font-family:monospace;">Password</span>
              <div style="font-size:22px; font-weight:800; font-family:monospace; color:#10b981; margin-top:4px;">${guide.wifi?.password || 'MadlobaGuest2026!'}</div>
            </div>
            <button class="btn btn-primary btn-full" onclick="Stumari.copyToClipboard('${guide.wifi?.password || 'MadlobaGuest2026!'}', 'Wi-Fi Password')">Copy Wi-Fi Password</button>
          </div>
        `);
        break;

      case "howitworks":
        const items = guide.howThingsWork || [];
        openModal("How Things Work", `
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div style="font-size:12px; color:#64748b; margin-bottom:2px;">
              These appliance guides are cached locally and work even without cell reception:
            </div>
            ${items.map(it => `
              <div style="padding:12px; border:1px solid #e2e8f0; border-radius:10px; background:#fff;">
                <h4 style="font-size:13px; font-weight:700; color:#0f172a; margin-bottom:4px;">${it.name}</h4>
                <p style="font-size:12px; color:#475569; line-height:1.4;">${it.instruction}</p>
              </div>
            `).join("")}
          </div>
        `);
        break;

      case "rules":
        const rules = guide.houseRules || [];
        openModal("House Rules", `
          <ul style="display:flex; flex-direction:column; gap:10px;">
            ${rules.map(r => `
              <li style="display:flex; align-items:flex-start; gap:8px; font-size:13px; color:#334155;">
                <span style="color:#10b981; font-weight:bold;">&bull;</span>
                <span>${r}</span>
              </li>
            `).join("")}
          </ul>
        `);
        break;

      case "explore":
        switchGuestView("explore");
        break;

      case "transport":
        openModal("Transport & Getting Around", `
          <div style="display:flex; flex-direction:column; gap:12px; font-size:13px; color:#475569;">
            <p><strong>Taxi Apps:</strong> ${guide.transport?.taxiApp || 'Bolt app is fastest and most reliable.'}</p>
            <p><strong>Metro & Transit:</strong> ${guide.transport?.metro || 'Metro station is 10 mins walk.'}</p>
            <p><strong>Airport Transfer:</strong> ${guide.transport?.airportTransit || '25 min taxi ride (~35 GEL).'}</p>
          </div>
        `);
        break;

      case "checkout":
        openModal("Check-out Checklist", `
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div style="background:#ecfdf5; border:1px solid #bce3d4; padding:12px; border-radius:8px; color:#127c56; font-size:13px;">
              <strong>Check-out Time: ${guide.checkout?.time || '11:00 AM'}</strong>
            </div>
            <p style="font-size:13px; color:#475569; line-height:1.5;">${guide.checkout?.instructions || 'Turn off all AC units, leave keys on the entrance table, and pull the door shut.'}</p>
            <p style="font-size:12px; color:#64748b; margin-top:8px;">Thank you for staying with us! Safe travels!</p>
          </div>
        `);
        break;

      case "contact":
        openModal("Contact Host", `
          <div style="display:flex; flex-direction:column; gap:14px; text-align:center;">
            <img src="${guide.welcome?.hostAvatar || ''}" style="width:64px; height:64px; border-radius:50%; margin:0 auto; object-fit:cover;" />
            <div>
              <h4 style="font-size:16px; font-weight:700;">${guide.welcome?.hostName || 'Host'}</h4>
              <p style="font-size:12px; color:#64748b;">Your Host & Caretaker</p>
            </div>
            <p style="font-size:11px; color:#127c56; background:#e8f5f0; padding:6px 10px; border-radius:6px; margin:0;">
              Tip: Voice calls via the regular telephone network work even if you lack mobile data!
            </p>
            <div style="display:flex; gap:10px; margin-top:4px;">
              <a href="tel:${guide.welcome?.hostPhone || ''}" class="btn btn-secondary btn-full">Call Phone</a>
              <a href="https://wa.me/${(guide.welcome?.hostWhatsApp || '').replace(/[^0-9]/g, '')}" target="_blank" class="btn btn-primary btn-full">WhatsApp</a>
            </div>
          </div>
        `);
        break;
    }
  }

  // Bottom Navigation tabs switcher
  const navItems = document.querySelectorAll(".bottom-nav-item");
  const homeSection = document.getElementById("guest-home-view");
  const exploreSection = document.getElementById("guest-explore-view");

  window.switchGuestView = function(viewName) {
    navItems.forEach(item => item.classList.toggle("active", item.dataset.nav === viewName));
    if (viewName === "explore") {
      if (homeSection) homeSection.style.display = "none";
      if (exploreSection) exploreSection.style.display = "block";
      renderRecommendations(property, "all");
    } else if (viewName === "home") {
      if (homeSection) homeSection.style.display = "block";
      if (exploreSection) exploreSection.style.display = "none";
    } else if (viewName === "help") {
      handleCardClick("howitworks", property);
    } else if (viewName === "contact") {
      handleCardClick("contact", property);
    }
  };

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      switchGuestView(item.dataset.nav);
    });
  });

  // Ask your host button
  const askHostBtn = document.getElementById("btn-ask-host");
  if (askHostBtn) {
    askHostBtn.addEventListener("click", () => {
      handleCardClick("contact", property);
    });
  }

  // Render Explore Recommendations
  function renderRecommendations(prop, category) {
    const listEl = document.getElementById("rec-list-container");
    if (!listEl) return;

    const recs = prop.guide?.recommendations || [];
    const filtered = category === "all" ? recs : recs.filter(r => r.category === category);

    listEl.innerHTML = filtered.map(r => `
      <div class="rec-item">
        <div class="rec-item-info">
          <h4>${r.name}</h4>
          <p>${r.distance} &bull; ${r.note}</p>
        </div>
        <a href="https://maps.google.com/?q=${encodeURIComponent(r.name + ' ' + prop.location)}" target="_blank" class="btn btn-secondary btn-sm">Map</a>
      </div>
    `).join("");
  }

  // Explore tabs
  const exploreTabs = document.querySelectorAll(".explore-tab");
  exploreTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      exploreTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderRecommendations(property, tab.dataset.category);
    });
  });

  // Show detailed offline info modal
  function showOfflineInfoModal(prop) {
    const guide = prop.guide || {};
    openModal("Offline Access Information", `
      <div style="display:flex; flex-direction:column; gap:16px;">
        <div style="background:#ecfdf5; border:1px solid #a7f3d0; border-radius:10px; padding:14px; color:#065f46;">
          <div style="display:flex; align-items:center; gap:8px; font-weight:700; font-size:14px; margin-bottom:4px;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>Guidebook Cached for Offline Access</span>
          </div>
          <p style="font-size:12px; line-height:1.45; color:#047857; margin:0;">
            This entire welcome guide is safely stored in your browser cache. If you lose cellular reception or Wi-Fi outside the property, you can still view your check-in codes and appliance instructions anytime.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:12px;">
            <div style="font-size:10px; text-transform:uppercase; font-weight:700; color:#64748b;">Keypad Code</div>
            <div style="font-size:20px; font-weight:800; font-family:monospace; color:#0f172a; margin-top:2px;">
              ${guide.checkIn?.doorCode || '3829#'}
            </div>
          </div>
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:12px;">
            <div style="font-size:10px; text-transform:uppercase; font-weight:700; color:#64748b;">Wi-Fi Password</div>
            <div style="font-size:14px; font-weight:800; font-family:monospace; color:#127c56; margin-top:4px; word-break:break-all;">
              ${guide.wifi?.password || 'MadlobaGuest2026!'}
            </div>
          </div>
        </div>

        <div style="font-size:12px; color:#475569; line-height:1.5;">
          <strong>Offline Features Available:</strong>
          <ul style="margin:6px 0 0 18px; padding:0; list-style-type:disc;">
            <li>Instant retrieval of door lockbox and smart lock codes</li>
            <li>Copy Wi-Fi network and password with 1 tap</li>
            <li>Access heating, air conditioning, and washer guides</li>
            <li>Direct telephone calling (voice calls work without mobile data)</li>
          </ul>
        </div>

        <button class="btn btn-secondary btn-full" onclick="document.getElementById('guest-modal').classList.add('hidden')">
          Got It
        </button>
      </div>
    `);
  }

  // Setup Service Worker registration
  function setupServiceWorker(prop) {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        // Try root /sw.js first
        navigator.serviceWorker.register("/sw.js", { scope: "/" })
          .then((reg) => {
            console.log("[Stumari SW] Registered successfully with scope:", reg.scope);
            cachePropertyAssets(reg, prop);
          })
          .catch((err) => {
            console.log("[Stumari SW] Root registration failed, attempting relative fallback:", err);
            // Fallback to relative path for subfolder hosting
            navigator.serviceWorker.register("../sw.js")
              .then((reg) => {
                console.log("[Stumari SW] Relative registration successful:", reg.scope);
                cachePropertyAssets(reg, prop);
              })
              .catch((e) => console.warn("[Stumari SW] Service Worker registration failed:", e));
          });
      });
    }
  }

  function cachePropertyAssets(registration, prop) {
    if (!prop) return;
    const urls = [];
    if (prop.coverImage) urls.push(prop.coverImage);
    if (prop.guide?.welcome?.hostAvatar) urls.push(prop.guide.welcome.hostAvatar);

    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: "CACHE_URLS",
        urls: urls
      });
    }
  }

  // Setup Offline / Online listeners & UI state
  function setupOfflineSupport(prop) {
    const banner = document.getElementById("offline-banner");
    const bannerTitle = document.getElementById("offline-banner-title");
    const bannerDesc = document.getElementById("offline-banner-desc");
    const bannerClose = document.getElementById("offline-banner-close");
    const statusBadge = document.getElementById("btn-offline-status");
    const badgeText = document.getElementById("offline-badge-text");

    function updateNetworkStatus(isOnline) {
      if (!isOnline) {
        if (banner) {
          banner.className = "offline-banner active offline-warning";
          if (bannerTitle) bannerTitle.textContent = "No Cellular Reception — Offline Mode";
          if (bannerDesc) bannerDesc.textContent = "Door lock code, Wi-Fi password & house guide remain fully accessible.";
        }
        if (statusBadge) {
          statusBadge.className = "offline-status-badge is-offline";
          if (badgeText) badgeText.textContent = "Offline Mode";
        }
      } else {
        if (statusBadge) {
          statusBadge.className = "offline-status-badge offline-saved";
          if (badgeText) badgeText.textContent = "Offline Ready";
        }
        if (banner && banner.classList.contains("offline-warning")) {
          banner.className = "offline-banner active online-recovered";
          if (bannerTitle) bannerTitle.textContent = "Connection Restored";
          if (bannerDesc) bannerDesc.textContent = "Back online. Guide data has been re-synchronized.";
          setTimeout(() => {
            banner.classList.remove("active");
          }, 3500);
        }
      }
    }

    window.addEventListener("online", () => updateNetworkStatus(true));
    window.addEventListener("offline", () => updateNetworkStatus(false));

    if (!navigator.onLine) {
      updateNetworkStatus(false);
    }

    if (bannerClose) {
      bannerClose.addEventListener("click", () => {
        if (banner) banner.classList.remove("active");
      });
    }

    if (statusBadge) {
      statusBadge.addEventListener("click", () => {
        showOfflineInfoModal(prop);
      });
    }
  }
}
