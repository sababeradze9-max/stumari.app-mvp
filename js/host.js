/**
 * Stumari Host SaaS Application Controller
 */

document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
  initGuideBuilder();
  initQrNfc();
  initPreview();
});

// 1. Host Dashboard Controller
function initDashboard() {
  const propertyListContainer = document.getElementById("host-property-list");
  if (!propertyListContainer) return;

  const properties = Stumari.getProperties();
  
  // Update counts
  const totalCount = document.getElementById("stat-total-properties");
  const publishedCount = document.getElementById("stat-published-properties");
  const draftCount = document.getElementById("stat-draft-properties");

  const published = properties.filter(p => p.status === "published").length;
  const drafts = properties.filter(p => p.status === "draft").length;

  if (totalCount) totalCount.textContent = properties.length;
  if (publishedCount) publishedCount.textContent = published;
  if (draftCount) draftCount.textContent = drafts;

  // Render properties list
  propertyListContainer.innerHTML = properties.map(p => `
    <div class="property-item" data-id="${p.id}">
      <div class="property-item-left">
        <img src="${p.coverImage}" alt="${p.name}" class="property-thumbnail" />
        <div class="property-meta">
          <h4>${p.name}</h4>
          <p>
            <span>${p.location}</span>
            <span>&bull;</span>
            <span class="badge ${p.status === 'published' ? 'badge-published' : 'badge-draft'}">
              ${p.status === 'published' ? 'Published' : 'Draft'}
            </span>
          </p>
        </div>
      </div>
      <div class="property-item-actions">
        <a href="./guide.html?id=${p.id}" class="btn btn-secondary btn-sm" onclick="Stumari.setActivePropertyId('${p.id}')">Edit Guide</a>
        <a href="./preview.html?id=${p.id}" class="btn btn-secondary btn-sm" onclick="Stumari.setActivePropertyId('${p.id}')">Preview</a>
      </div>
    </div>
  `).join("");
}

// 2. Guide Builder Controller (Screenshot #8)
function initGuideBuilder() {
  const sectionBtns = document.querySelectorAll(".guide-section-btn");
  const editorSections = document.querySelectorAll(".editor-section-panel");
  const saveBtn = document.getElementById("save-guide-btn");

  if (!sectionBtns.length || !editorSections.length) return;

  // Active property
  const property = Stumari.getActiveProperty();

  // Populate Wi-Fi fields if present
  const wifiNetworkInput = document.getElementById("guide-wifi-network");
  const wifiPasswordInput = document.getElementById("guide-wifi-password");
  if (wifiNetworkInput && property.guide?.wifi?.network) {
    wifiNetworkInput.value = property.guide.wifi.network;
  }
  if (wifiPasswordInput && property.guide?.wifi?.password) {
    wifiPasswordInput.value = property.guide.wifi.password;
  }

  // Populate Check-in fields
  const checkinTimeInput = document.getElementById("guide-checkin-time");
  const doorCodeInput = document.getElementById("guide-door-code");
  if (checkinTimeInput && property.guide?.checkIn?.time) {
    checkinTimeInput.value = property.guide.checkIn.time;
  }
  if (doorCodeInput && property.guide?.checkIn?.doorCode) {
    doorCodeInput.value = property.guide.checkIn.doorCode;
  }

  // Section button click
  sectionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      sectionBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const targetSection = btn.dataset.section;

      editorSections.forEach(panel => {
        panel.style.display = panel.id === `section-${targetSection}` ? "block" : "none";
      });
    });
  });

  // Save changes
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      if (wifiNetworkInput && wifiPasswordInput) {
        property.guide.wifi.network = wifiNetworkInput.value;
        property.guide.wifi.password = wifiPasswordInput.value;
      }
      if (checkinTimeInput && doorCodeInput) {
        property.guide.checkIn.time = checkinTimeInput.value;
        property.guide.checkIn.doorCode = doorCodeInput.value;
      }
      Stumari.updateProperty(property);
    });
  }
}

// 3. QR & NFC Controller (Screenshot #10)
function initQrNfc() {
  const tabQr = document.getElementById("tab-qr");
  const tabNfc = document.getElementById("tab-nfc");
  const panelQr = document.getElementById("panel-qr");
  const panelNfc = document.getElementById("panel-nfc");
  const copyBtn = document.getElementById("copy-guest-url");
  const testNfcBtn = document.getElementById("test-nfc-btn");

  const property = Stumari.getActiveProperty();
  const guestUrlEl = document.getElementById("guest-url-display");

  // Relative or full URL
  const guestUrl = `${window.location.origin}/guest/guide.html?slug=${property.slug || 'old-tbilisi-apartment'}`;
  if (guestUrlEl) guestUrlEl.textContent = `stumari.app/g/${property.slug}`;

  if (tabQr && tabNfc) {
    tabQr.addEventListener("click", () => {
      tabQr.classList.add("active");
      tabNfc.classList.remove("active");
      panelQr.style.display = "block";
      panelNfc.style.display = "none";
    });

    tabNfc.addEventListener("click", () => {
      tabNfc.classList.add("active");
      tabQr.classList.remove("active");
      panelNfc.style.display = "block";
      panelQr.style.display = "none";
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      Stumari.copyToClipboard(guestUrl, "Guest Guide Link");
    });
  }

  if (testNfcBtn) {
    testNfcBtn.addEventListener("click", () => {
      Stumari.showToast("NFC Tag Simulated! Opening guest guide...");
      setTimeout(() => {
        window.open(`../guest/guide.html?slug=${property.slug}`, "_blank");
      }, 600);
    });
  }
}

// 4. Preview Controller
function initPreview() {
  const property = Stumari.getActiveProperty();
  const openGuestBtn = document.getElementById("open-live-guest-btn");
  if (openGuestBtn) {
    openGuestBtn.addEventListener("click", () => {
      window.location.href = `../guest/guide.html?slug=${property.slug}`;
    });
  }
}
