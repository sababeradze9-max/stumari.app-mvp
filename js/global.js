/**
 * Stumari Global Architecture & Data Store
 * Modular data structures designed for seamless future Supabase integration.
 */

const StumariDB = {
  // Initial default properties matching the showcase mockup
  initialProperties: [
    {
      id: "prop_001",
      slug: "old-tbilisi-apartment",
      name: "Old Tbilisi Apartment",
      type: "apartment",
      location: "Tbilisi, Georgia",
      address: "14 Lado Asatiani Street, Apt 3",
      coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      status: "published",
      updatedAt: "2026-03-28",
      views: 142,
      languages: ["en", "ka", "ru"],
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      guide: {
        welcome: {
          title: "Welcome to Old Tbilisi!",
          subtitle: "19th-Century Heritage Residence with Historic Balcony",
          greeting: "Gamarjoba! Welcome to your bohemian refuge above the cobbled streets of Sololaki.",
          hostName: "Saba Beradze",
          hostAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
          hostPhone: "+995 555 123 456",
          hostWhatsApp: "+995555123456"
        },
        checkIn: {
          time: "3:00 PM",
          checkoutTime: "11:00 AM",
          method: "Smart Lockpad",
          doorCode: "3829#",
          lockboxCode: "7419",
          parking: "Free street parking along Lado Asatiani St. If busy, courtyard parking 50m up.",
          instructions: "Push the carved wooden gate, take the spiral staircase to 2nd floor, teal door."
        },
        wifi: {
          network: "OldTbilisi_5G",
          password: "MadlobaGuest2026!"
        },
        howThingsWork: [
          { id: "h1", name: "Daikin AC & Heating", icon: "thermometer", instruction: "Remote on the hallway wall. Mode switches between Snowflake (Cool) and Sun (Heat). 22°C is optimal." },
          { id: "h2", name: "Espresso Machine", icon: "coffee", instruction: "Fresh beans in pantry jar. Power on, wait 30s for green light, press single or double shot." },
          { id: "h3", name: "Washer & Dryer Combo", icon: "wash", instruction: "Detergent pods in vanity drawer. Turn dial to Mix 40° and press Start." },
          { id: "h4", name: "Smart TV & Soundbar", icon: "tv", instruction: "Use small solar remote. Pre-logged guest accounts on Netflix & Spotify." }
        ],
        houseRules: [
          "No smoking indoors (balcony with ashtray is fine)",
          "Quiet hours from 11:00 PM to 8:00 AM",
          "Remove shoes at the entrance hall",
          "Antique wooden balcony is 130 years old — please treat gently"
        ],
        recommendations: [
          { id: "r1", name: "Café Littera", category: "Restaurants", distance: "2 min walk", note: "Romantic garden dining at Writers' House" },
          { id: "r2", name: "Barbarestan", category: "Restaurants", distance: "5 min taxi", note: "Historic 19th century Georgian recipes" },
          { id: "r3", name: "Sulphur Baths", category: "Attractions", distance: "8 min walk", note: "Traditional Chreli Abano bath experience" },
          { id: "r4", name: "Freedom Square", category: "Attractions", distance: "12 min walk", note: "Historic city center landmark" },
          { id: "r5", name: "Coffee LAB Sololaki", category: "Cafés", distance: "3 min walk", note: "Top specialty espresso and cold brew" }
        ],
        transport: {
          taxiApp: "Bolt or Yandex Taxi (Both work seamlessly in Tbilisi)",
          metro: "Liberty Square Metro Station is 10 mins walk",
          airportTransit: "Airport shuttle or 25-minute Bolt ride (~35 GEL)"
        },
        checkout: {
          time: "11:00 AM",
          instructions: "Turn off AC, leave keys in entrance bowl, lock deadbolt."
        },
        contact: {
          host: "Saba Beradze",
          phone: "+995 555 123 456",
          emergency: "+995 112 (Emergency Services)"
        }
      }
    },
    {
      id: "prop_002",
      slug: "batumi-sea-view",
      name: "Batumi Sea View",
      type: "apartment",
      location: "Batumi, Georgia",
      address: "28 Rustaveli Avenue, Tower B",
      coverImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      status: "published",
      updatedAt: "2026-03-24",
      views: 98,
      languages: ["en", "ka"],
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      guide: {
        welcome: {
          title: "Welcome to Batumi Sea View",
          subtitle: "Panoramic Black Sea sunsets from the 18th floor",
          greeting: "Enjoy the coastal breeze and endless sea horizon.",
          hostName: "Mariam Chikovani",
          hostAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
          hostPhone: "+995 599 345 678",
          hostWhatsApp: "+995599345678"
        },
        checkIn: {
          time: "2:00 PM",
          checkoutTime: "12:00 PM",
          method: "Keycard at Concierge",
          doorCode: "Card 1804",
          lockboxCode: "8821",
          parking: "Underground parking stall #18B",
          instructions: "Show reservation to front desk concierge for access badge."
        },
        wifi: {
          network: "BatumiSea_Guest",
          password: "BlackSeaBreeze26"
        },
        howThingsWork: [
          { id: "b1", name: "Balcony Sliding Doors", icon: "sun", instruction: "Lift handle to unlock before sliding." }
        ],
        houseRules: ["No parties", "No pets", "Quiet after 11 PM"],
        recommendations: [
          { id: "br1", name: "Old Boulevard Restaurant", category: "Restaurants", distance: "4 min walk", note: "Classic seafood and wine" }
        ],
        transport: { taxiApp: "Bolt", airportTransit: "15 min drive from Batumi Airport" },
        checkout: { time: "12:00 PM", instructions: "Drop keycards at reception." },
        contact: { host: "Mariam", phone: "+995 599 345 678", emergency: "112" }
      }
    },
    {
      id: "prop_003",
      slug: "mountain-house-kazbegi",
      name: "Mountain House",
      type: "villa",
      location: "Kazbegi, Georgia",
      address: "Gergeti Valley Road",
      coverImage: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80",
      status: "draft",
      updatedAt: "2026-03-15",
      views: 12,
      languages: ["en", "ka"],
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      guide: {
        welcome: {
          title: "Welcome to Mountain House",
          subtitle: "Alpine sanctuary facing Mount Kazbek",
          greeting: "Breathe in the alpine air and unwind by the wood fireplace.",
          hostName: "David Giorgadze",
          hostAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
          hostPhone: "+995 577 987 654",
          hostWhatsApp: "+995577987654"
        },
        checkIn: {
          time: "4:00 PM",
          checkoutTime: "11:00 AM",
          method: "Lockbox on Pine Porch",
          doorCode: "9412",
          lockboxCode: "9412",
          parking: "Private gravel driveway fits 3 cars",
          instructions: "Keypad is mounted to right of front cedar door."
        },
        wifi: {
          network: "Kazbegi_Peak_WiFi",
          password: "GergetiTrinity26"
        },
        howThingsWork: [
          { id: "m1", name: "Stone Fireplace", icon: "flame", instruction: "Open damper fully before lighting birch wood logs." }
        ],
        houseRules: ["No open flames outside", "No smoking", "Keep sauna clean"],
        recommendations: [
          { id: "mr1", name: "Rooms Hotel Kazbegi Restaurant", category: "Restaurants", distance: "10 min walk", note: "Iconic mountain views" }
        ],
        transport: { taxiApp: "Local 4x4 drivers available", airportTransit: "2.5 hours from Tbilisi" },
        checkout: { time: "11:00 AM", instructions: "Ensure fire is out, lock deadbolt." },
        contact: { host: "David", phone: "+995 577 987 654", emergency: "112" }
      }
    }
  ]
};

// Main Stumari Client Framework
window.Stumari = {
  // Load all properties
  getProperties() {
    try {
      const data = localStorage.getItem("stumari_properties");
      if (data) return JSON.parse(data);
    } catch (e) {
      console.error(e);
    }
    this.saveProperties(StumariDB.initialProperties);
    return StumariDB.initialProperties;
  },

  // Save properties
  saveProperties(props) {
    try {
      localStorage.setItem("stumari_properties", JSON.stringify(props));
    } catch (e) {
      console.error(e);
    }
  },

  // Get active property ID or default
  getActivePropertyId() {
    return localStorage.getItem("stumari_active_property_id") || "prop_001";
  },

  // Set active property ID
  setActivePropertyId(id) {
    localStorage.setItem("stumari_active_property_id", id);
  },

  // Get current active property
  getActiveProperty() {
    const props = this.getProperties();
    const activeId = this.getActivePropertyId();
    return props.find(p => p.id === activeId) || props[0];
  },

  // Update a single property
  updateProperty(updatedProp) {
    const props = this.getProperties();
    const index = props.findIndex(p => p.id === updatedProp.id);
    if (index !== -1) {
      props[index] = { ...props[index], ...updatedProp, updatedAt: new Date().toISOString().split("T")[0] };
    } else {
      props.push(updatedProp);
    }
    this.saveProperties(props);
    this.showToast("Changes saved successfully!");
  },

  // Create a new property
  createProperty(propData) {
    const props = this.getProperties();
    const newId = `prop_${Date.now()}`;
    const slug = (propData.name || "New Property").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const newProp = {
      id: newId,
      slug: slug,
      name: propData.name || "New Property",
      type: propData.type || "apartment",
      location: propData.location || "Tbilisi, Georgia",
      address: propData.address || "Main Street",
      coverImage: propData.coverImage || "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      status: "published",
      updatedAt: new Date().toISOString().split("T")[0],
      views: 0,
      languages: ["en", "ka"],
      guests: propData.guests || 2,
      bedrooms: propData.bedrooms || 1,
      bathrooms: propData.bathrooms || 1,
      guide: {
        welcome: {
          title: `Welcome to ${propData.name}`,
          subtitle: "Your comfortable retreat",
          greeting: "Welcome! Everything you need for your stay is right here.",
          hostName: "Your Host",
          hostAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
          hostPhone: "+995 555 000 000",
          hostWhatsApp: "+995555000000"
        },
        checkIn: {
          time: "3:00 PM",
          checkoutTime: "11:00 AM",
          method: "Keyless Code",
          doorCode: "1234#",
          lockboxCode: "5678",
          parking: "Street parking available",
          instructions: "Enter the code on the smart deadbolt."
        },
        wifi: {
          network: `${propData.name.replace(/\s+/g, '')}_Guest`,
          password: "WelcomeGuest2026"
        },
        howThingsWork: [
          { id: "h1", name: "Climate Control", icon: "thermometer", instruction: "Set thermostat between 20°C and 24°C." }
        ],
        houseRules: ["No smoking", "Quiet hours after 10 PM"],
        recommendations: [
          { id: "r1", name: "Local Bakery", category: "Cafés", distance: "3 min walk", note: "Fresh bread & morning coffee" }
        ],
        transport: { taxiApp: "Bolt app", airportTransit: "City center taxi" },
        checkout: { time: "11:00 AM", instructions: "Lock the front door." },
        contact: { host: "Your Host", phone: "+995 555 000 000", emergency: "112" }
      }
    };
    props.unshift(newProp);
    this.saveProperties(props);
    this.setActivePropertyId(newProp.id);
    return newProp;
  },

  // Toast Notification System
  showToast(message) {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "all 200ms ease";
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  },

  // Copy to clipboard helper
  copyToClipboard(text, label = "Item") {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast(`${label} copied to clipboard!`);
      }).catch(() => {
        this.fallbackCopy(text, label);
      });
    } else {
      this.fallbackCopy(text, label);
    }
  },

  fallbackCopy(text, label) {
    const el = document.createElement("textarea");
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    this.showToast(`${label} copied to clipboard!`);
  }
};

// Auto-initialize StumariDB on load
document.addEventListener("DOMContentLoaded", () => {
  Stumari.getProperties();
});
