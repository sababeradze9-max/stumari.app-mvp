/**
 * Stumari Marketing Website Interactions
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. FAQ Accordions
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        faqItems.forEach(i => i.classList.remove("open"));
        if (!isOpen) {
          item.classList.add("open");
        }
      });
    }
  });

  // 2. Pricing Interval Switcher (Monthly vs Yearly)
  const intervalBtns = document.querySelectorAll(".interval-btn");
  if (intervalBtns.length > 0) {
    intervalBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        intervalBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const interval = btn.dataset.interval;
        updatePricing(interval);
      });
    });
  }

  function updatePricing(interval) {
    const starterPrice = document.getElementById("price-starter");
    const proPrice = document.getElementById("price-pro");
    const businessPrice = document.getElementById("price-business");
    const periodLabels = document.querySelectorAll(".price-period");

    if (interval === "yearly") {
      if (starterPrice) starterPrice.textContent = "$7";
      if (proPrice) proPrice.textContent = "$15";
      if (businessPrice) businessPrice.textContent = "$39";
      periodLabels.forEach(p => p.textContent = "/month (billed yearly)");
    } else {
      if (starterPrice) starterPrice.textContent = "$9";
      if (proPrice) proPrice.textContent = "$19";
      if (businessPrice) businessPrice.textContent = "$49";
      periodLabels.forEach(p => p.textContent = "/month");
    }
  }

  // 3. Properties Page Filter Tabs
  const filterTabs = document.querySelectorAll(".property-filter-tabs .filter-tab");
  const propertyCards = document.querySelectorAll(".property-type-card");

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.dataset.filter;

      propertyCards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 4. Multi-step Onboarding logic (if on onboarding.html)
  initOnboarding();
});

function initOnboarding() {
  const nextBtn = document.getElementById("onboarding-next");
  const prevBtn = document.getElementById("onboarding-prev");
  const stepIndicators = document.querySelectorAll(".step-dot");
  const stepPanels = document.querySelectorAll(".onboarding-step-panel");
  const currentStepLabel = document.getElementById("step-counter");

  if (!nextBtn || stepPanels.length === 0) return;

  let currentStep = 1;
  const totalSteps = stepPanels.length;

  function showStep(step) {
    stepPanels.forEach((panel, i) => {
      panel.style.display = (i + 1 === step) ? "block" : "none";
    });

    stepIndicators.forEach((dot, i) => {
      dot.classList.toggle("active", i + 1 === step);
      dot.classList.toggle("completed", i + 1 < step);
    });

    if (currentStepLabel) {
      currentStepLabel.textContent = `Step ${step} of ${totalSteps}`;
    }

    if (prevBtn) {
      prevBtn.style.visibility = step === 1 ? "hidden" : "visible";
    }

    if (nextBtn) {
      if (step === totalSteps) {
        nextBtn.textContent = "Publish my Stumari 🎉";
        nextBtn.classList.add("btn-primary");
      } else {
        nextBtn.innerHTML = `Next <span>&rarr;</span>`;
      }
    }
  }

  nextBtn.addEventListener("click", () => {
    if (currentStep < totalSteps) {
      currentStep++;
      showStep(currentStep);
    } else {
      // Save created property into StumariDB and redirect to host dashboard
      const propName = document.getElementById("onboard-name")?.value || "New Heritage Apartment";
      const propType = document.getElementById("onboard-type")?.value || "apartment";
      const propAddress = document.getElementById("onboard-address")?.value || "Tbilisi, Georgia";
      const propGuests = parseInt(document.getElementById("onboard-guests")?.value || "4");

      Stumari.createProperty({
        name: propName,
        type: propType,
        address: propAddress,
        location: propAddress,
        guests: propGuests
      });

      Stumari.showToast("Your Stumari guide is published!");
      setTimeout(() => {
        window.location.href = "./host/dashboard.html";
      }, 800);
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
      }
    });
  }

  showStep(1);
}
