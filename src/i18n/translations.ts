import { Language } from './types';

export interface Translations {
  common: {
    save: string;
    saved: string;
    cancel: string;
    delete: string;
    edit: string;
    copy: string;
    copied: string;
    download: string;
    back: string;
    next: string;
    close: string;
    done: string;
    active: string;
    draft: string;
    published: string;
    all: string;
    loading: string;
    selectLanguage: string;
    viewGuide: string;
    preview: string;
    share: string;
    qrCode: string;
    language: string;
    search: string;
    settings: string;
    confirm: string;
    required: string;
    optional: string;
  };
  nav: {
    mvpBadge: string;
    marketing: string;
    hostSaas: string;
    onboarding: string;
    guestGuide: string;
    admin: string;
    features: string;
    forProperties: string;
    pricing: string;
    demo: string;
    hostLogin: string;
    bookDemo: string;
    createStumari: string;
    addProperty: string;
    dashboard: string;
    myProperties: string;
    propertyHub: string;
    guestView: string;
    guestUrl: string;
    activeProp: string;
    featuresDropdown: {
      guideGenerator: string;
      qrStand: string;
      instantWifi: string;
      appliances: string;
      houseRules: string;
      localSecrets: string;
      transport: string;
      multilingual: string;
      whatsappChat: string;
      reviews: string;
    };
    propertiesDropdown: {
      apartments: string;
      guesthouses: string;
      boutiqueHotels: string;
      propertyManagers: string;
    };
  };
  hostDashboard: {
    welcomeBack: string;
    planTag: string;
    dashboardSubtitle: string;
    fullListSubtitle: string;
    metrics: {
      totalProperties: string;
      activeGuides: string;
      totalViews: string;
      guestScans: string;
      thisMonth: string;
      allTime: string;
    };
    quickActions: {
      title: string;
      addNew: string;
      addNewSub: string;
      qrStand: string;
      qrStandSub: string;
      shareDirect: string;
      shareDirectSub: string;
    };
    filters: {
      all: string;
      published: string;
      draft: string;
    };
    card: {
      published: string;
      draft: string;
      views: string;
      editGuide: string;
      preview: string;
      qrFlyer: string;
      copyLink: string;
      quickWifi: string;
      quickCode: string;
      publishNow: string;
      unpublish: string;
      duplicate: string;
      delete: string;
    };
    emptyState: {
      title: string;
      desc: string;
      action: string;
    };
    yourProperties: string;
    viewAll: string;
    live: string;
    draft: string;
    wifiPassword: string;
    frontDoorCode: string;
    keypadCode: string;
    propertyHub: string;
    swipeCards: string;
    wantAnotherGuide: string;
    addProperty: string;
    tapToCopy: string;
  };
  propertyHub: {
    backToDashboard: string;
    tabs: {
      overview: string;
      guide: string;
      preview: string;
      qr: string;
      settings: string;
    };
    overview: {
      statusBadge: string;
      liveUrl: string;
      copyGuestUrl: string;
      openGuestView: string;
      lastUpdated: string;
      keyInfo: string;
      wifiCard: string;
      checkinCard: string;
      contactCard: string;
      quickStats: string;
      guideCompleteness: string;
      qrQuickDownload: string;
    };
    guideSections: {
      welcome: string;
      checkin: string;
      wifi: string;
      appliances: string;
      rules: string;
      recommendations: string;
      transport: string;
      checkout: string;
      emergency: string;
    };
    forms: {
      // Welcome
      welcomeTitle: string;
      welcomeGreeting: string;
      hostName: string;
      hostRole: string;
      hostPhone: string;
      hostWhatsApp: string;
      // Checkin
      checkInTime: string;
      checkOutTime: string;
      checkInMethod: string;
      keypad: string;
      lockbox: string;
      inPerson: string;
      concierge: string;
      doorKeypadCode: string;
      lockboxCode: string;
      parkingInstructions: string;
      arrivalDirections: string;
      // Wifi
      networkName: string;
      networkPassword: string;
      testCopy: string;
      // Appliances
      appliancesTitle: string;
      appliancesSub: string;
      addAppliance: string;
      applianceName: string;
      instructions: string;
      troubleshooting: string;
      // Rules
      houseRulesTitle: string;
      quietHours: string;
      trashSchedule: string;
      addRule: string;
      // Recommendations
      recsTitle: string;
      recsSub: string;
      addPlace: string;
      placeName: string;
      category: string;
      address: string;
      distance: string;
      mapsUrl: string;
      hostTip: string;
      categories: {
        all: string;
        food: string;
        coffee: string;
        groceries: string;
        activity: string;
        nightlife: string;
      };
      // Transport
      transportTitle: string;
      taxiBolt: string;
      transitMetro: string;
      airportTransit: string;
      // Checkout
      checkoutTitle: string;
      departureChecklist: string;
      addChecklistItem: string;
      // Emergency
      emergencyTitle: string;
      emergencyServicesNumber: string;
      emergencyContactName: string;
      saveChanges: string;
    };
    qrStand: {
      title: string;
      sub: string;
      acrylicStand: string;
      tableTent: string;
      printFlyer: string;
      downloadPng: string;
      printNow: string;
      standHeader: string;
      standSub: string;
      wifiLabel: string;
      passLabel: string;
      scanNotice: string;
      customColor: string;
    };
    settings: {
      title: string;
      general: string;
      propertyTitle: string;
      subtitle: string;
      propertyType: string;
      address: string;
      city: string;
      country: string;
      coverImageUrl: string;
      slugUrl: string;
      statusControl: string;
      dangerZone: string;
      deletePrompt: string;
    };
  };
  guestGuide: {
    backToHost: string;
    liveView: string;
    welcomeGreetingFallback: string;
    hostedBy: string;
    superhost: string;
    callHost: string;
    chatWhatsApp: string;
    oneTapSwitch: string;
    lockboxLabel: string;
    bento: {
      contact: string;
    };
    quickAccess: {
      wifi: string;
      wifiSub: string;
      doorCode: string;
      doorCodeSub: string;
      checkIn: string;
      checkInSub: string;
      houseManual: string;
      houseManualSub: string;
    };
    categories: {
      all: string;
      access: string;
      house: string;
      local: string;
    };
    cards: {
      wifiTitle: string;
      wifiPassword: string;
      copyPassword: string;
      passwordCopied: string;
      doorCodeTitle: string;
      doorCodeLabel: string;
      copyCode: string;
      codeCopied: string;
      checkinTitle: string;
      checkinTime: string;
      checkoutTime: string;
      directionsTitle: string;
      parkingTitle: string;
      howThingsWork: string;
      appliancesCount: string;
      troubleshootingTip: string;
      houseRules: string;
      quietHoursLabel: string;
      trashScheduleLabel: string;
      recommendations: string;
      viewOnMaps: string;
      ourTip: string;
      transport: string;
      transitSubtitle: string;
      taxiApp: string;
      publicTransit: string;
      airportGuide: string;
      checkoutChecklist: string;
      departureTasks: string;
      contactHost: string;
      emergency112: string;
      emergencyCall: string;
    };
    offlineBadge: string;
    pwaInstallPrompt: string;
    map: {
      title: string;
      subtitle: string;
      interactiveMap: string;
      listView: string;
      youAreHere: string;
      offlineReady: string;
      centerOnProperty: string;
      walkingRoute: string;
      walkTime: string;
      getDirections: string;
      copyAddress: string;
      addressCopied: string;
      viewInGoogleMaps: string;
      compassHeading: string;
      radiusRings: {
        r200: string;
        r500: string;
        r1k: string;
      };
      categories: {
        all: string;
        coffee: string;
        food: string;
        nightlife: string;
        groceries: string;
        activity: string;
      };
      cardBadge: string;
      cardSub: string;
    };
  };
  onboarding: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      step1: string;
      step2: string;
      step3: string;
      step4: string;
    };
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    fields: {
      propertyName: string;
      propertyNamePlaceholder: string;
      propertyType: string;
      city: string;
      address: string;
      checkInTime: string;
      checkOutTime: string;
      doorCode: string;
      wifiName: string;
      wifiPass: string;
      quietHours: string;
      trashSchedule: string;
      rulesSummary: string;
    };
    buttons: {
      continue: string;
      back: string;
      finishAndLaunch: string;
      launchGuide: string;
      openHostHub: string;
      printStand: string;
    };
    success: {
      heading: string;
      sub: string;
      urlReady: string;
    };
  };
  marketing: {
    hero: {
      badge: string;
      titlePart1: string;
      titleHighlight: string;
      titlePart2: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
      trustText: string;
    };
    stats: {
      hostsCount: string;
      hostsLabel: string;
      scansCount: string;
      scansLabel: string;
      ratingValue: string;
      ratingLabel: string;
      offlineValue: string;
      offlineLabel: string;
    };
    featuresPreview: {
      title: string;
      sub: string;
      wifiCardTitle: string;
      wifiCardDesc: string;
      doorCardTitle: string;
      doorCardDesc: string;
      standCardTitle: string;
      standCardDesc: string;
      languagesCardTitle: string;
      languagesCardDesc: string;
      offlineCardTitle: string;
      offlineCardDesc: string;
      supportCardTitle: string;
      supportCardDesc: string;
    };
    pricing: {
      title: string;
      subtitle: string;
      monthly: string;
      annual: string;
      saveTag: string;
      freeTitle: string;
      freePrice: string;
      freeDesc: string;
      proTitle: string;
      proPrice: string;
      proDesc: string;
      entTitle: string;
      entPrice: string;
      entDesc: string;
      popularBadge: string;
      startFree: string;
      upgradePro: string;
      contactSales: string;
    };
    footer: {
      tagline: string;
      rights: string;
      privacy: string;
      terms: string;
      builtFor: string;
    };
  };
  admin: {
    title: string;
    subtitle: string;
    tabs: {
      overview: string;
      hosts: string;
      properties: string;
      settings: string;
    };
    metrics: {
      totalUsers: string;
      activeGuidebooks: string;
      monthlyScans: string;
      proSubscriptions: string;
    };
    hostTable: {
      host: string;
      plan: string;
      properties: string;
      joined: string;
      status: string;
      actions: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  // 🇬🇪 GEORGIAN (ქართული) - 100% Native, Natural Hospitality Terminology
  ka: {
    common: {
      save: 'შენახვა',
      saved: 'შენახულია',
      cancel: 'გაუქმება',
      delete: 'წაშლა',
      edit: 'რედაქტირება',
      copy: 'კოპირება',
      copied: 'დაკოპირდა!',
      download: 'ჩამოტვირთვა',
      back: 'უკან',
      next: 'შემდეგი',
      close: 'დახურვა',
      done: 'მზადაა',
      active: 'აქტიური',
      draft: 'შავი ვარიანტი',
      published: 'გამოქვეყნებული',
      all: 'ყველა',
      loading: 'იტვირთება...',
      selectLanguage: 'ენის არჩევა',
      viewGuide: 'გიდის ნახვა',
      preview: 'წინასწარ ნახვა',
      share: 'გაზიარება',
      qrCode: 'QR კოდი',
      language: 'ენა',
      search: 'ძიება...',
      settings: 'პარამეტრები',
      confirm: 'დადასტურება',
      required: 'სავალდებულო',
      optional: 'არასავალდებულო',
    },
    nav: {
      mvpBadge: 'სტუმარი MVP',
      marketing: '1. მთავარი',
      hostSaas: '2. მასპინძელი',
      onboarding: '3. რეგისტრაცია',
      guestGuide: '4. სტუმრის გიდი',
      admin: 'ადმინი',
      features: 'ფუნქციები',
      forProperties: 'ობიექტებისთვის',
      pricing: 'ტარიფები',
      demo: 'დემო',
      hostLogin: 'შესვლა',
      bookDemo: 'დემოს ნახვა',
      createStumari: 'შექმენი შენი სტუმარი',
      addProperty: '+ ობიექტის დამატება',
      dashboard: 'პანელი',
      myProperties: 'ჩემი ობიექტები',
      propertyHub: 'ობიექტის მართვა',
      guestView: 'სტუმრის ხედი',
      guestUrl: 'სტუმრის ბმული',
      activeProp: 'აქტიური ობიექტი:',
      featuresDropdown: {
        guideGenerator: 'გიდის გენერატორი',
        qrStand: 'QR + NFC სადგამის შემქმნელი',
        instantWifi: '1-წამიანი Wi-Fi და კოდი',
        appliances: 'როგორ მუშაობს ტექნიკა',
        houseRules: 'სახლის წესები და სიჩუმე',
        localSecrets: 'რჩეული ლოკაციები',
        transport: 'ტრანსპორტი და აეროპორტი',
        multilingual: 'მრავალენოვანი და ოფლაინ',
        whatsappChat: 'პირდაპირი WhatsApp ჩატი',
        reviews: '5-ვარსკვლავიანი შეფასებები',
      },
      propertiesDropdown: {
        apartments: 'ბინები და სტუდიოები',
        guesthouses: 'საოჯახო სასტუმროები',
        boutiqueHotels: 'ბუტიკ სასტუმროები',
        propertyManagers: 'უძრავი ქონების მმართველები',
      },
    },
    hostDashboard: {
      welcomeBack: 'მოგესალმებით 👋',
      planTag: 'გეგმა',
      dashboardSubtitle: 'მართეთ ციფრული გიდები, Wi-Fi პაროლები და სტუმრების წვდომა.',
      fullListSubtitle: 'თქვენი მასპინძლის ანგარიშში რეგისტრირებული ყველა ობიექტი.',
      metrics: {
        totalProperties: 'სულ ობიექტები',
        activeGuides: 'აქტიური გიდები',
        totalViews: 'ნახვები სულ',
        guestScans: 'სტუმრის სკანირებები',
        thisMonth: 'ამ თვეში',
        allTime: 'მთლიან პერიოდში',
      },
      quickActions: {
        title: 'სწრაფი მოქმედებები',
        addNew: 'ახალი ობიექტი',
        addNewSub: 'შექმენით გიდი 2 წუთში',
        qrStand: 'QR სადგამის ბეჭდვა',
        qrStandSub: 'მაგიდის აკრილის სტენდი',
        shareDirect: 'ბმულის გაგზავნა',
        shareDirectSub: 'გაუგზავნეთ სტუმარს ჩათში',
      },
      filters: {
        all: 'ყველა',
        published: 'გამოქვეყნებული',
        draft: 'შავი ვარიანტი',
      },
      card: {
        published: 'აქტიური',
        draft: 'შავი ვარიანტი',
        views: 'ნახვა',
        editGuide: 'გიდის რედაქტირება',
        preview: 'სტუმრის ხედი',
        qrFlyer: 'QR სადგამი',
        copyLink: 'ბმულის კოპირება',
        quickWifi: 'ვაიფაი:',
        quickCode: 'კოდი:',
        publishNow: 'გამოქვეყნება',
        unpublish: 'გათიშვა',
        duplicate: 'დუბლირება',
        delete: 'წაშლა',
      },
      emptyState: {
        title: 'ობიექტები არ მოიძებნა',
        desc: 'შექმენით თქვენი პირველი ციფრული გიდი სტუმრებისთვის.',
        action: 'ობიექტის დამატება',
      },
      yourProperties: 'თქვენი ობიექტები',
      viewAll: 'ყველას ნახვა',
      live: 'აქტიური',
      draft: 'შავი ვარიანტი',
      wifiPassword: 'Wi-Fi პაროლი',
      frontDoorCode: 'კარების კოდი',
      keypadCode: 'კოდი',
      propertyHub: 'მართვა',
      swipeCards: 'გადაფურცლეთ ბარათები',
      wantAnotherGuide: 'გსურთ კიდევ ერთი უკონტაქტო გიდის შექმნა?',
      addProperty: 'ობიექტის დამატება',
      tapToCopy: 'შეხებით კოპირება',
    },
    propertyHub: {
      backToDashboard: 'სამართავ პანელზე დაბრუნება',
      tabs: {
        overview: 'მიმოხილვა',
        guide: 'გიდის რედაქტორი',
        preview: 'ცოცხალი ხედი',
        qr: 'QR და NFC სადგამი',
        settings: 'პარამეტრები',
      },
      overview: {
        statusBadge: 'სტატუსი:',
        liveUrl: 'სტუმრის პირდაპირი ბმული:',
        copyGuestUrl: 'ბმულის კოპირება',
        openGuestView: 'სტუმრის ხედის გახსნა',
        lastUpdated: 'ბოლო განახლება:',
        keyInfo: 'მთავარი მონაცემები',
        wifiCard: 'Wi-Fi ქსელი და პაროლი',
        checkinCard: 'შესვლის მეთოდი და კოდი',
        contactCard: 'მასპინძლის საკონტაქტო',
        quickStats: 'სტატისტიკა',
        guideCompleteness: 'გიდის შევსება',
        qrQuickDownload: 'QR კოდის ჩამოტვირთვა',
      },
      guideSections: {
        welcome: '1. მისალმება',
        checkin: '2. რეგისტრაცია და შესვლა',
        wifi: '3. Wi-Fi ქსელი',
        appliances: '4. ტექნიკის ინსტრუქციები',
        rules: '5. სახლის წესები',
        recommendations: '6. რეკომენდაციები',
        transport: '7. ტრანსპორტი და ტაქსი',
        checkout: '8. გასვლა (Check-out)',
        emergency: '9. სასწრაფო კონტაქტები',
      },
      forms: {
        welcomeTitle: 'მისალმების სათაური',
        welcomeGreeting: 'მისასალმებელი წერილი სტუმარს',
        hostName: 'მასპინძლის სახელი',
        hostRole: 'სტატუსი (მაგ: სუპერჰოსტი)',
        hostPhone: 'ტელეფონის ნომერი',
        hostWhatsApp: 'WhatsApp ნომერი (+995...)',
        checkInTime: 'შესვლის დრო (Check-in)',
        checkOutTime: 'გასვლის დრო (Check-out)',
        checkInMethod: 'შესვლის მეთოდი',
        keypad: 'ელექტრონული კოდური საკეტი',
        lockbox: 'მექანიკური სეიფი (Lockbox)',
        inPerson: 'პირადად დახვედრა',
        concierge: 'კონსიერჟი / რეცეფცია',
        doorKeypadCode: 'კარების კოდი (მაგ: 3829#)',
        lockboxCode: 'სეიფის კოდი (მაგ: 7419)',
        parkingInstructions: 'პარკინგის ინსტრუქცია',
        arrivalDirections: 'მისვლის დეტალური გზამკვლევი',
        networkName: 'Wi-Fi ქსელის სახელი (SSID)',
        networkPassword: 'Wi-Fi პაროლი',
        testCopy: 'ტესტირება და კოპირება',
        appliancesTitle: 'საყოფაცხოვრებო ტექნიკა და მოწყობილობები',
        appliancesSub: 'დაეხმარეთ სტუმრებს კონდიციონერის, ყავის აპარატის, სარეცხი მანქანის მარტივად გამოყენებაში.',
        addAppliance: '+ ტექნიკის დამატება',
        applianceName: 'მოწყობილობის დასახელება',
        instructions: 'გამოყენების ინსტრუქცია',
        troubleshooting: 'პრობლემის გადაჭრის რჩევა (არასავალდებულო)',
        houseRulesTitle: 'სახლის წესები და საათები',
        quietHours: 'სიჩუმის საათები (მაგ: 23:00 - 08:00)',
        trashSchedule: 'ნაგვის გატანის წესი და ურნების მდებარეობა',
        addRule: '+ წესის დამატება',
        recsTitle: 'რეკომენდაციები და საუკეთესო ადგილები',
        recsSub: 'გაუზიარეთ სტუმარს თქვენი საყვარელი კაფეები, რესტორნები და ღვინის ბარები.',
        addPlace: '+ ლოკაციის დამატება',
        placeName: 'ადგილის სახელი',
        category: 'კატეგორია',
        address: 'მისამართი',
        distance: 'მანძილი (მაგ: 4 წუთი ფეხით)',
        mapsUrl: 'Google Maps ბმული',
        hostTip: 'მასპინძლის რჩევა (მაგ: გასინჯეთ შქმერული)',
        categories: {
          all: 'ყველა',
          food: 'კვება / რესტორნები',
          coffee: 'ყავა და საუზმე',
          groceries: 'სუპერმარკეტები',
          activity: 'ღირსშესანიშნაობები',
          nightlife: 'ღვინის ბარები და ღამის ცხოვრება',
        },
        transportTitle: 'ტრანსპორტი, ტაქსი და აეროპორტი',
        taxiBolt: 'ტაქსის გამოძახება (Bolt აპლიკაცია)',
        transitMetro: 'საზოგადოებრივი ტრანსპორტი (მეტრო, ავტობუსი)',
        airportTransit: 'აეროპორტის ტრანსფერი და მანძილი',
        checkoutTitle: 'გასვლის წესები (Check-out)',
        departureChecklist: 'სტუმრის გასვლის საკონტროლო სია',
        addChecklistItem: '+ პუნქტის დამატება',
        emergencyTitle: 'სასწრაფო და გადაუდებელი კონტაქტები',
        emergencyServicesNumber: 'სასწრაფო დახმარება და პოლიცია',
        emergencyContactName: 'თანამასპინძლის ან მენეჯერის ნომერი',
        saveChanges: 'ცვლილებების შენახვა',
      },
      qrStand: {
        title: 'მაგიდის QR და NFC სადგამი',
        sub: 'დაბეჭდეთ ელეგანტური მაგიდის სტენდი ბინაში განსათავსებლად. სტუმრები სკანირებით მყისიერად უკავშირდებიან Wi-Fi-ს.',
        acrylicStand: 'აკრილის A6 სტენდი',
        tableTent: 'ორმხრივი მაგიდის კარავი',
        printFlyer: 'A4 ბეჭდური ფლაერი',
        downloadPng: 'QR კოდის ჩამოტვირთვა (PNG)',
        printNow: 'პირდაპირ ბეჭდვა',
        standHeader: 'კეთილი იყოს თქვენი მობრძანება!',
        standSub: 'დაასკანერეთ კამერით ციფრული გიდის სანახავად',
        wifiLabel: 'ვაიფაი:',
        passLabel: 'პაროლი:',
        scanNotice: 'აპლიკაციის ჩამოტვირთვა არ არის საჭირო',
        customColor: 'დიზაინის აქცენტის ფერი',
      },
      settings: {
        title: 'ობიექტის პარამეტრები',
        general: 'ზოგადი ინფორმაცია',
        propertyTitle: 'ობიექტის სახელი',
        subtitle: 'ქვესათაური / აღწერა',
        propertyType: 'ტიპი (ბინა, კოტეჯი, სასტუმრო)',
        address: 'ზუსტი მისამართი',
        city: 'ქალაქი / რეგიონი',
        country: 'ქვეყანა',
        coverImageUrl: 'მთავარი ფოტოს URL',
        slugUrl: 'ბმულის მისამართი (Slug)',
        statusControl: 'სტატუსის მართვა (გამოქვეყნებული / შავი ვარიანტი)',
        dangerZone: 'საშიში ზონა',
        deletePrompt: 'ამ ობიექტის წაშლა სამუდამოა და ვერ აღდგება.',
      },
    },
    guestGuide: {
      backToHost: 'მასპინძლის პანელზე დაბრუნება',
      liveView: 'სტუმრის ცოცხალი ხედი',
      welcomeGreetingFallback: 'კეთილი იყოს თქვენი მობრძანება! მოხარული ვართ თქვენი მასპინძლობით.',
      hostedBy: 'მასპინძელი:',
      superhost: 'სუპერჰოსტი',
      callHost: 'დარეკვა',
      chatWhatsApp: 'WhatsApp ჩატი',
      oneTapSwitch: '1-შეხებით შეცვლა',
      lockboxLabel: 'სეიფი/ლოქბოქსი',
      bento: {
        contact: 'კონტაქტი',
      },
      quickAccess: {
        wifi: 'Wi-Fi პაროლი',
        wifiSub: '1-შეხებით კოპირება',
        doorCode: 'კარების კოდი',
        doorCodeSub: 'შესვლის კომბინაცია',
        checkIn: 'შესვლა და გზა',
        checkInSub: 'მისამართი და პარკინგი',
        houseManual: 'სახლის ტექნიკა',
        houseManualSub: 'როგორ გამოვიყენოთ',
      },
      categories: {
        all: 'ყველა',
        access: 'შესვლა და Wi-Fi',
        house: 'სახლი და ტექნიკა',
        local: 'ადგილობრივი რჩევები',
      },
      cards: {
        wifiTitle: 'სწრაფი Wi-Fi კავშირი',
        wifiPassword: 'პაროლი:',
        copyPassword: 'პაროლის კოპირება',
        passwordCopied: 'პაროლი დაკოპირდა!',
        doorCodeTitle: 'კარების ჭკვიანი საკეტი',
        doorCodeLabel: 'კოდი:',
        copyCode: 'კოდის კოპირება',
        codeCopied: 'კოდი დაკოპირდა!',
        checkinTitle: 'შესვლის ინსტრუქცია',
        checkinTime: 'შესვლის დრო:',
        checkoutTime: 'გასვლის დრო:',
        directionsTitle: 'როგორ მოვიდეთ:',
        parkingTitle: 'პარკინგის ინფორმაცია:',
        howThingsWork: 'ტექნიკა და მოწყობილობები',
        appliancesCount: 'ინსტრუქცია',
        troubleshootingTip: 'რჩევა:',
        houseRules: 'სახლის წესები და კომფორტი',
        quietHoursLabel: 'სიჩუმის საათები:',
        trashScheduleLabel: 'ნაგვის გატანა:',
        recommendations: 'საუკეთესო ადგილები ახლოს',
        viewOnMaps: 'რუკაზე ნახვა',
        ourTip: 'ჩვენი რჩევა:',
        transport: 'ტრანსპორტი და გადაადგილება',
        transitSubtitle: 'Bolt, მეტრო და ტრანსპორტი',
        taxiApp: 'ტაქსის აპლიკაცია (Bolt):',
        publicTransit: 'საზოგადოებრივი ტრანსპორტი:',
        airportGuide: 'აეროპორტის ტრანსფერი:',
        checkoutChecklist: 'გასვლის საკონტროლო სია',
        departureTasks: 'გასვლამდე გთხოვთ შეამოწმოთ:',
        contactHost: 'მასპინძელთან დაკავშირება',
        emergency112: 'სასწრაფო დახმარება (112)',
        emergencyCall: '112-ზე დარეკვა',
      },
      offlineBadge: 'ხელმისაწვდომია ოფლაინ რეჟიმშიც',
      pwaInstallPrompt: 'დაამატეთ მთავარ ეკრანზე სწრაფი წვდომისთვის',
      map: {
        title: 'ინტერაქტიული ოფლაინ რუკა',
        subtitle: 'ახლომდებარე ადგილები და საფეხმავლო მანძილები ინტერნეტის გარეშეც',
        interactiveMap: 'ინტერაქტიული რუკა',
        listView: 'სიის ხედი',
        youAreHere: 'თქვენი ობიექტი (აქ იმყოფებით)',
        offlineReady: 'ოფლაინ რეჟიმი აქტიურია · შენახულია მოწყობილობაზე',
        centerOnProperty: 'ობიექტზე დაბრუნება',
        walkingRoute: 'საფეხმავლო მარშრუტი',
        walkTime: 'ფეხით',
        getDirections: 'GPS ნავიგაცია',
        copyAddress: 'მისამართის კოპირება',
        addressCopied: 'მისამართი დაკოპირდა!',
        viewInGoogleMaps: 'Google Maps-ში გახსნა',
        compassHeading: 'მიმართულება',
        radiusRings: {
          r200: '200მ · 2 წთ',
          r500: '500მ · 6 წთ',
          r1k: '1კმ · 12 წთ',
        },
        categories: {
          all: 'ყველა',
          coffee: 'ყავა და საცხობი',
          food: 'რესტორნები და კაფეები',
          nightlife: 'ღვინის ბარები',
          groceries: 'სუპერმარკეტები და აფთიაქი',
          activity: 'ღირსშესანიშნაობები',
        },
        cardBadge: 'ინტერაქტიული ოფლაინ რუკა',
        cardSub: 'რჩეული ადგილები და საფეხმავლო მარშრუტები',
      },
    },
    onboarding: {
      badge: 'ახალი მასპინძლის რეგისტრაცია',
      title: 'შექმენით ციფრული გზამკვლევი 2 წუთში',
      subtitle: 'შეავსეთ ძირითადი დეტალები და თქვენი QR გიდი მზად იქნება სტუმრებისთვის.',
      steps: {
        step1: '1. ობიექტი',
        step2: '2. წვდომა და Wi-Fi',
        step3: '3. წესები და ტექნიკა',
        step4: '4. მზადაა!',
      },
      step1Title: 'მოგვიყევით თქვენი ობიექტის შესახებ',
      step1Desc: 'შეიყვანეთ ბინის ან სასტუმროს სახელი და მდებარეობა.',
      step2Title: 'შესვლა და Wi-Fi კავშირი',
      step2Desc: 'ყველაზე ხშირი კითხვები, რაც სტუმრებს უჩნდებათ ჩასვლისას.',
      step3Title: 'სახლის წესები და ტექნიკა',
      step3Desc: 'სიჩუმის საათები, ნაგვის გატანა და მნიშვნელოვანი წესები.',
      step4Title: 'თქვენი სტუმარი მზადაა!',
      step4Desc: 'ციფრული გიდი შეიქმნა. შეგიძლიათ დაბეჭდოთ QR სადგამი ან გაუგზავნოთ ბმული სტუმრებს.',
      fields: {
        propertyName: 'ობიექტის სახელი',
        propertyNamePlaceholder: 'მაგ: ძველი თბილისის აპარტამენტი',
        propertyType: 'ობიექტის ტიპი',
        city: 'ქალაქი / დაბა',
        address: 'ზუსტი მისამართი',
        checkInTime: 'შესვლის დრო',
        checkOutTime: 'გასვლის დრო',
        doorCode: 'კარების კოდი (ან სეიფი)',
        wifiName: 'Wi-Fi ქსელის სახელი',
        wifiPass: 'Wi-Fi პაროლი',
        quietHours: 'სიჩუმის საათები',
        trashSchedule: 'ნაგვის გატანის ადგილი',
        rulesSummary: 'მთავარი წესები',
      },
      buttons: {
        continue: 'გაგრძელება',
        back: 'უკან',
        finishAndLaunch: 'გიდის შექმნა და გაშვება',
        launchGuide: 'სტუმრის გიდის ნახვა',
        openHostHub: 'ობიექტის მართვაში გადასვლა',
        printStand: 'QR სადგამის ბეჭდვა',
      },
      success: {
        heading: 'გილოცავთ! თქვენი გზამკვლევი აქტიურია 🎉',
        sub: 'სტუმრებს შეუძლიათ გამოიყენონ ნებისმიერ ენაზე და ოფლაინ რეჟიმშიც.',
        urlReady: 'თქვენი უნიკალური ბმული:',
      },
    },
    marketing: {
      hero: {
        badge: 'საქართველოს #1 ციფრული გიდის პლატფორმა',
        titlePart1: 'ყველაფერი, რაც თქვენს',
        titleHighlight: 'სტუმრებს სჭირდებათ.',
        titlePart2: 'ერთ ციფრულ სივრცეში.',
        subtitle: 'სტუმარი ეხმარება Airbnb-ს, Booking.com-ის მასპინძლებს და სასტუმროებს შექმნან თანამედროვე ციფრული გზამკვლევი QR კოდით. 1-შეხებით Wi-Fi, კარების კოდი და ქართული სტუმართმოყვარეობა.',
        primaryCta: 'შექმენი შენი სტუმარი უფასოდ',
        secondaryCta: 'დემოს ნახვა',
        trustText: 'ენდობა 500+ მასპინძელი თბილისში, ბათუმში, ყაზბეგსა და სვანეთში',
      },
      stats: {
        hostsCount: '500+',
        hostsLabel: 'აქტიური მასპინძელი',
        scansCount: '45,000+',
        scansLabel: 'სტუმრის სკანირება',
        ratingValue: '4.9★',
        ratingLabel: 'საშუალო შეფასება',
        offlineValue: '100%',
        offlineLabel: 'ოფლაინ მხარდაჭერა',
      },
      featuresPreview: {
        title: 'რატომ ირჩევენ მასპინძლები სტუმარს?',
        sub: 'დაზოგეთ დრო ყოველდღიურ კითხვებზე პასუხის გაცემისას და მიიღეთ მეტი 5-ვარსკვლავიანი შეფასება.',
        wifiCardTitle: 'მყისიერი Wi-Fi 1 შეხებით',
        wifiCardDesc: 'აღარავითარი რთული პაროლების ხელით შეყვანა. სტუმარი აკლიკებს და პაროლი დაკოპირებულია.',
        doorCardTitle: 'კარების კოდი და მარტივი შესვლა',
        doorCardDesc: 'ზუსტი ფოტოები, სართული და კოდი, რომ სტუმარმა პირველივე წუთიდან იგრძნოს თავი სახლში.',
        standCardTitle: 'ელეგანტური QR და NFC სადგამები',
        standCardDesc: 'დაბეჭდეთ პროფესიონალური მაგიდის სტენდები, რომლებიც უხდება ნებისმიერ ინტერიერს.',
        languagesCardTitle: '100% ქართული, რუსული და ინგლისური',
        languagesCardDesc: 'სტუმრებს შეუძლიათ წაიკითხონ თავიანთ ენაზე, ხოლო მასპინძლებს შეუძლიათ მართონ ქართულად.',
        offlineCardTitle: 'მუშაობს ინტერნეტის გარეშეც',
        offlineCardDesc: 'PWA ტექნოლოგიის წყალობით, გზამკვლევი ინახება ტელეფონში და იხსნება როუმინგის გარეშეც.',
        supportCardTitle: 'პირდაპირი WhatsApp ჩატი',
        supportCardDesc: 'სტუმარი ერთი ღილაკით გიკავშირდებათ WhatsApp-ში ან რეკავს 112-ში საგანგებო ვითარებაში.',
      },
      pricing: {
        title: 'მარტივი და გამჭვირვალე ტარიფები',
        subtitle: 'დაიწყეთ უფასოდ. გადაიხადეთ მხოლოდ მაშინ, როცა თქვენი ბიზნესი გაიზრდება.',
        monthly: 'თვიური',
        annual: 'წლიური',
        saveTag: 'დაზოგეთ 20%',
        freeTitle: 'უფასო (Free)',
        freePrice: '0 ₾',
        freeDesc: 'იდეალურია 1 ბინის ან საოჯახო სასტუმროს მასპინძლისთვის.',
        proTitle: 'პრო (Pro)',
        proPrice: '19 ₾',
        proDesc: 'აქტიური მასპინძლებისთვის 5-მდე ობიექტის მართვით.',
        entTitle: 'ბიზნესი (Enterprise)',
        entPrice: '49 ₾',
        entDesc: 'სასტუმროებისთვის და უძრავი ქონების სააგენტოებისთვის.',
        popularBadge: 'ყველაზე პოპულარული',
        startFree: 'დაიწყეთ უფასოდ',
        upgradePro: 'პრო პაკეტის არჩევა',
        contactSales: 'დაგვიკავშირდით',
      },
      footer: {
        tagline: 'სტუმარი — ყველაფერი, რაც თქვენს სტუმრებს სჭირდებათ. ერთ ადგილას.',
        rights: 'ყველა უფლება დაცულია.',
        privacy: 'კონფიდენციალურობა',
        terms: 'პირობები',
        builtFor: 'შექმნილია სიყვარულით ქართველი მასპინძლებისთვის.',
      },
    },
    admin: {
      title: 'სტუმარი ადმინ პანელი',
      subtitle: 'პლატფორმის გლობალური სტატისტიკა, მასპინძლები და ობიექტები.',
      tabs: {
        overview: 'მთავარი ანალიტიკა',
        hosts: 'მასპინძლები',
        properties: 'ობიექტების ბაზა',
        settings: 'სისტემური პარამეტრები',
      },
      metrics: {
        totalUsers: 'სულ მომხმარებლები',
        activeGuidebooks: 'აქტიური გზამკვლევები',
        monthlyScans: 'სკანირებები ამ თვეში',
        proSubscriptions: 'პრო გამომწერები',
      },
      hostTable: {
        host: 'მასპინძელი',
        plan: 'ტარიფი',
        properties: 'ობიექტები',
        joined: 'რეგისტრაციის თარიღი',
        status: 'სტატუსი',
        actions: 'მოქმედება',
      },
    },
  },

  // 🇷🇺 RUSSIAN (Русский) - 100% Native, Fluent Hospitality Terminology
  ru: {
    common: {
      save: 'Сохранить',
      saved: 'Сохранено',
      cancel: 'Отмена',
      delete: 'Удалить',
      edit: 'Редактировать',
      copy: 'Копировать',
      copied: 'Скопировано!',
      download: 'Скачать',
      back: 'Назад',
      next: 'Далее',
      close: 'Закрыть',
      done: 'Готово',
      active: 'Активен',
      draft: 'Черновик',
      published: 'Опубликован',
      all: 'Все',
      loading: 'Загрузка...',
      selectLanguage: 'Выбрать язык',
      viewGuide: 'Открыть путеводитель',
      preview: 'Предпросмотр',
      share: 'Поделиться',
      qrCode: 'QR-код',
      language: 'Язык',
      search: 'Поиск...',
      settings: 'Настройки',
      confirm: 'Подтвердить',
      required: 'Обязательно',
      optional: 'Необязательно',
    },
    nav: {
      mvpBadge: 'STUMARI MVP',
      marketing: '1. Главная',
      hostSaas: '2. Хозяин',
      onboarding: '3. Создание',
      guestGuide: '4. Путеводитель гостя',
      admin: 'Админ',
      features: 'Возможности',
      forProperties: 'Для объектов',
      pricing: 'Тарифы',
      demo: 'Демо',
      hostLogin: 'Войти',
      bookDemo: 'Смотреть демо',
      createStumari: 'Создать свой Stumari',
      addProperty: '+ Добавить объект',
      dashboard: 'Панель',
      myProperties: 'Мои объекты',
      propertyHub: 'Управление объектом',
      guestView: 'Вид гостя',
      guestUrl: 'Ссылка гостя',
      activeProp: 'Активный объект:',
      featuresDropdown: {
        guideGenerator: 'Генератор путеводителей',
        qrStand: 'Конструктор QR + NFC стоек',
        instantWifi: 'Wi-Fi и код в 1 касание',
        appliances: 'Инструкции к бытовой технике',
        houseRules: 'Правила дома и часы тишины',
        localSecrets: 'Авторские рекомендации',
        transport: 'Транспорт и трансфер',
        multilingual: 'Мультиязычность и офлайн',
        whatsappChat: 'Прямой чат в WhatsApp',
        reviews: 'Сбор 5-звёздочных отзывов',
      },
      propertiesDropdown: {
        apartments: 'Апартаменты и студии',
        guesthouses: 'Гостевые дома',
        boutiqueHotels: 'Бутик-отели',
        propertyManagers: 'Управляющие недвижимостью',
      },
    },
    hostDashboard: {
      welcomeBack: 'С возвращением 👋',
      planTag: 'Тариф',
      dashboardSubtitle: 'Управляйте цифровыми гидами, паролями от Wi-Fi и доступом гостей.',
      fullListSubtitle: 'Все объекты, привязанные к вашему аккаунту хозяина.',
      metrics: {
        totalProperties: 'Всего объектов',
        activeGuides: 'Активные гиды',
        totalViews: 'Всего просмотров',
        guestScans: 'Сканирований гостями',
        thisMonth: 'В этом месяце',
        allTime: 'За всё время',
      },
      quickActions: {
        title: 'Быстрые действия',
        addNew: 'Новый объект',
        addNewSub: 'Создайте путеводитель за 2 минуты',
        qrStand: 'Печать QR-стойки',
        qrStandSub: 'Акриловая табличка на стол',
        shareDirect: 'Отправить ссылку',
        shareDirectSub: 'Отправьте гостю в мессенджер',
      },
      filters: {
        all: 'Все',
        published: 'Опубликованы',
        draft: 'Черновики',
      },
      card: {
        published: 'Активен',
        draft: 'Черновик',
        views: 'просм.',
        editGuide: 'Редактировать гид',
        preview: 'Вид гостя',
        qrFlyer: 'QR-стойка',
        copyLink: 'Скопировать ссылку',
        quickWifi: 'Wi-Fi:',
        quickCode: 'Код:',
        publishNow: 'Опубликовать',
        unpublish: 'Снять с публикации',
        duplicate: 'Дублировать',
        delete: 'Удалить',
      },
      emptyState: {
        title: 'Объекты не найдены',
        desc: 'Создайте ваш первый цифровой гид для гостей прямо сейчас.',
        action: 'Добавить объект',
      },
      yourProperties: 'ВАШИ ОБЪЕКТЫ',
      viewAll: 'Смотреть все',
      live: 'Активен',
      draft: 'Черновик',
      wifiPassword: 'Пароль Wi-Fi',
      frontDoorCode: 'Код от входной двери',
      keypadCode: 'Код замка',
      propertyHub: 'Управление',
      swipeCards: 'Листайте карточки',
      wantAnotherGuide: 'Хотите создать ещё один путеводитель для гостей?',
      addProperty: 'Добавить объект',
      tapToCopy: 'Нажмите для копирования',
    },
    propertyHub: {
      backToDashboard: 'Назад в панель управления',
      tabs: {
        overview: 'Обзор',
        guide: 'Редактор гида',
        preview: 'Живой просмотр',
        qr: 'QR и NFC стойка',
        settings: 'Настройки',
      },
      overview: {
        statusBadge: 'Статус:',
        liveUrl: 'Прямая ссылка для гостя:',
        copyGuestUrl: 'Скопировать ссылку',
        openGuestView: 'Открыть вид гостя',
        lastUpdated: 'Обновлено:',
        keyInfo: 'Ключевые данные',
        wifiCard: 'Сеть и пароль Wi-Fi',
        checkinCard: 'Способ заселения и код',
        contactCard: 'Контакты хозяина',
        quickStats: 'Статистика',
        guideCompleteness: 'Заполненность гида',
        qrQuickDownload: 'Скачать QR-код',
      },
      guideSections: {
        welcome: '1. Приветствие',
        checkin: '2. Заселение и доступ',
        wifi: '3. Сеть Wi-Fi',
        appliances: '4. Инструкции к технике',
        rules: '5. Правила дома',
        recommendations: '6. Рекомендации',
        transport: '7. Транспорт и такси',
        checkout: '8. Выезд (Check-out)',
        emergency: '9. Экстренные контакты',
      },
      forms: {
        welcomeTitle: 'Заголовок приветствия',
        welcomeGreeting: 'Тёплое приветствие гостя',
        hostName: 'Имя хозяина',
        hostRole: 'Статус (напр. Суперхозяин)',
        hostPhone: 'Номер телефона',
        hostWhatsApp: 'WhatsApp (+995...)',
        checkInTime: 'Время заезда (Check-in)',
        checkOutTime: 'Время выезда (Check-out)',
        checkInMethod: 'Способ заселения',
        keypad: 'Электронный кодовый замок',
        lockbox: 'Механический сейф (Lockbox)',
        inPerson: 'Личная встреча',
        concierge: 'Консьерж / Ресепшн',
        doorKeypadCode: 'Код от двери (напр. 3829#)',
        lockboxCode: 'Код от сейфа (напр. 7419)',
        parkingInstructions: 'Инструкции по парковке',
        arrivalDirections: 'Как добраться и найти дверь',
        networkName: 'Имя сети Wi-Fi (SSID)',
        networkPassword: 'Пароль Wi-Fi',
        testCopy: 'Проверить копирование',
        appliancesTitle: 'Бытовая техника и электроника',
        appliancesSub: 'Помогите гостям легко пользоваться кондиционером, кофемашиной и стиралкой без лишних вопросов.',
        addAppliance: '+ Добавить прибор',
        applianceName: 'Название прибора',
        instructions: 'Инструкция по использованию',
        troubleshooting: 'Что делать при сбое (необязательно)',
        houseRulesTitle: 'Правила проживания и порядок',
        quietHours: 'Часы тишины (напр. 23:00 – 08:00)',
        trashSchedule: 'Вынос мусора и расположение контейнеров',
        addRule: '+ Добавить правило',
        recsTitle: 'Рекомендации и любимые места',
        recsSub: 'Посоветуйте гостям лучшие кафе, рестораны грузинской кухни и винные бары поблизости.',
        addPlace: '+ Добавить место',
        placeName: 'Название места',
        category: 'Категория',
        address: 'Адрес',
        distance: 'Расстояние (напр. 4 мин пешком)',
        mapsUrl: 'Ссылка на Google Maps',
        hostTip: 'Совет от хозяина (напр. попробуйте шкмерули)',
        categories: {
          all: 'Все',
          food: 'Еда и рестораны',
          coffee: 'Кофе и завтраки',
          groceries: 'Супермаркеты',
          activity: 'Достопримечательности',
          nightlife: 'Винные бары и ночная жизнь',
        },
        transportTitle: 'Транспорт, такси и аэропорт',
        taxiBolt: 'Заказ такси (приложение Bolt)',
        transitMetro: 'Общественный транспорт (метро, автобусы)',
        airportTransit: 'Трансфер в аэропорт и стоимость',
        checkoutTitle: 'Правила выезда (Check-out)',
        departureChecklist: 'Список дел перед выездом',
        addChecklistItem: '+ Добавить пункт',
        emergencyTitle: 'Экстренные службы и связь',
        emergencyServicesNumber: 'Единая служба экстренной помощи',
        emergencyContactName: 'Номер со-хозяина или консьержа',
        saveChanges: 'Сохранить изменения',
      },
      qrStand: {
        title: 'Настольная QR и NFC стойка',
        sub: 'Распечатайте стильную табличку для размещения в квартире. Гости сканируют камерой и мгновенно подключаются к Wi-Fi.',
        acrylicStand: 'Акриловая стойка A6',
        tableTent: 'Двусторонний домик на стол',
        printFlyer: 'Печатный флаер A4',
        downloadPng: 'Скачать QR-код (PNG)',
        printNow: 'Распечатать сейчас',
        standHeader: 'Добро пожаловать!',
        standSub: 'Отсканируйте камерой для гида по квартире',
        wifiLabel: 'Сеть:',
        passLabel: 'Пароль:',
        scanNotice: 'Не нужно скачивать приложение',
        customColor: 'Акцентный цвет оформления',
      },
      settings: {
        title: 'Настройки объекта',
        general: 'Основная информация',
        propertyTitle: 'Название объекта',
        subtitle: 'Подзаголовок / описание',
        propertyType: 'Тип (квартира, шале, отель)',
        address: 'Точный адрес',
        city: 'Город / Регион',
        country: 'Страна',
        coverImageUrl: 'Ссылка на обложку',
        slugUrl: 'Адрес ссылки (Slug)',
        statusControl: 'Управление статусом (Опубликован / Черновик)',
        dangerZone: 'Опасная зона',
        deletePrompt: 'Удаление объекта необратимо. Все настройки будут стёрты.',
      },
    },
    guestGuide: {
      backToHost: 'Вернуться в панель хозяина',
      liveView: 'Реальный вид гостя',
      welcomeGreetingFallback: 'Добро пожаловать! Мы рады приветствовать вас.',
      hostedBy: 'Хозяин:',
      superhost: 'Суперхозяин',
      callHost: 'Позвонить',
      chatWhatsApp: 'Чат в WhatsApp',
      oneTapSwitch: 'В 1 касание',
      lockboxLabel: 'Сейф / Локбокс',
      bento: {
        contact: 'Контакты',
      },
      quickAccess: {
        wifi: 'Пароль Wi-Fi',
        wifiSub: 'Копирование в 1 клик',
        doorCode: 'Код от двери',
        doorCodeSub: 'Комбинация замка',
        checkIn: 'Заезд и адрес',
        checkInSub: 'Инструкции и парковка',
        houseManual: 'Техника в доме',
        houseManualSub: 'Как пользоваться',
      },
      categories: {
        all: 'Все',
        access: 'Доступ и Wi-Fi',
        house: 'Дом и техника',
        local: 'Местные места',
      },
      cards: {
        wifiTitle: 'Быстрое подключение к Wi-Fi',
        wifiPassword: 'Пароль:',
        copyPassword: 'Скопировать пароль',
        passwordCopied: 'Пароль скопирован!',
        doorCodeTitle: 'Электронный замок на двери',
        doorCodeLabel: 'Код доступа:',
        copyCode: 'Скопировать код',
        codeCopied: 'Код скопирован!',
        checkinTitle: 'Инструкции по заселению',
        checkinTime: 'Время заезда:',
        checkoutTime: 'Время выезда:',
        directionsTitle: 'Как найти дверь:',
        parkingTitle: 'Информация о парковке:',
        howThingsWork: 'Бытовая техника и электроника',
        appliancesCount: 'приборов с инструкцией',
        troubleshootingTip: 'Совет:',
        houseRules: 'Правила дома и порядок',
        quietHoursLabel: 'Часы тишины:',
        trashScheduleLabel: 'Вынос мусора:',
        recommendations: 'Лучшие места поблизости',
        viewOnMaps: 'Открыть на карте',
        ourTip: 'Совет хозяина:',
        transport: 'Транспорт и передвижение',
        transitSubtitle: 'Bolt, метро и транспорт',
        taxiApp: 'Приложение такси (Bolt):',
        publicTransit: 'Общественный транспорт:',
        airportGuide: 'Трансфер в аэропорт:',
        checkoutChecklist: 'Список дел перед выездом',
        departureTasks: 'Пожалуйста, перед уходом проверьте:',
        contactHost: 'Связаться с хозяином',
        emergency112: 'Экстренная служба (112)',
        emergencyCall: 'Позвонить 112',
      },
      offlineBadge: 'Работает даже без интернета',
      pwaInstallPrompt: 'Добавьте на главный экран для быстрого доступа',
      map: {
        title: 'Интерактивная офлайн-карта',
        subtitle: 'Ближайшие места и пешие маршруты даже без интернета',
        interactiveMap: 'Интерактивная карта',
        listView: 'Списком',
        youAreHere: 'Ваше жильё (вы здесь)',
        offlineReady: 'Офлайн-карта готова · Сохранено на устройстве',
        centerOnProperty: 'Вернуться к жилью',
        walkingRoute: 'Пеший маршрут',
        walkTime: 'пешком',
        getDirections: 'Маршрут в навигаторе',
        copyAddress: 'Скопировать адрес',
        addressCopied: 'Адрес скопирован!',
        viewInGoogleMaps: 'Открыть в Google Maps',
        compassHeading: 'Направление',
        radiusRings: {
          r200: '200м · 2 мин',
          r500: '500м · 6 мин',
          r1k: '1км · 12 мин',
        },
        categories: {
          all: 'Все',
          coffee: 'Кофе и выпечка',
          food: 'Рестораны и еда',
          nightlife: 'Винные бары',
          groceries: 'Продукты и аптеки',
          activity: 'Достопримечательности',
        },
        cardBadge: 'Интерактивная офлайн-карта',
        cardSub: 'Лучшие локации и пешие маршруты',
      },
    },
    onboarding: {
      badge: 'Регистрация нового хозяина',
      title: 'Создайте путеводитель за 2 минуты',
      subtitle: 'Заполните ключевые данные, и ваш QR-гид будет мгновенно готов для гостей.',
      steps: {
        step1: '1. Объект',
        step2: '2. Доступ и Wi-Fi',
        step3: '3. Правила и техника',
        step4: '4. Готово!',
      },
      step1Title: 'Расскажите о вашем объекте',
      step1Desc: 'Укажите название квартиры или гостевого дома и адрес.',
      step2Title: 'Заселение и Wi-Fi доступ',
      step2Desc: 'Главные вопросы, которые возникают у гостей при заезде.',
      step3Title: 'Правила проживания и техника',
      step3Desc: 'Часы тишины, вынос мусора и инструкции к технике.',
      step4Title: 'Ваш Stumari готов к приёму гостей!',
      step4Desc: 'Цифровой гид сформирован. Вы можете распечатать QR-стойку или отправить ссылку гостям.',
      fields: {
        propertyName: 'Название объекта',
        propertyNamePlaceholder: 'напр. Апартаменты в Старом Тбилиси',
        propertyType: 'Тип жилья',
        city: 'Город / курорт',
        address: 'Точный адрес',
        checkInTime: 'Время заезда',
        checkOutTime: 'Время выезда',
        doorCode: 'Код от двери (или сейфа)',
        wifiName: 'Имя сети Wi-Fi',
        wifiPass: 'Пароль от Wi-Fi',
        quietHours: 'Часы тишины',
        trashSchedule: 'Куда выносить мусор',
        rulesSummary: 'Основные правила',
      },
      buttons: {
        continue: 'Продолжить',
        back: 'Назад',
        finishAndLaunch: 'Создать и запустить гид',
        launchGuide: 'Открыть вид гостя',
        openHostHub: 'Перейти к управлению объектом',
        printStand: 'Печать QR-стойки',
      },
      success: {
        heading: 'Поздравляем! Ваш путеводитель запущен 🎉',
        sub: 'Гости могут открывать его на любом языке и даже без интернета.',
        urlReady: 'Ваша уникальная ссылка:',
      },
    },
    marketing: {
      hero: {
        badge: 'Цифровая платформа гостеприимства #1 в Грузии',
        titlePart1: 'Всё, что нужно вашим',
        titleHighlight: 'гостям.',
        titlePart2: 'В одном удобном месте.',
        subtitle: 'Stumari помогает хозяевам апартаментов, гостевых домов и отелей создавать современные цифровые путеводители с доступом по QR-коду или NFC. Wi-Fi в 1 клик, коды от дверей и тёплое гостеприимство.',
        primaryCta: 'Создать Stumari бесплатно',
        secondaryCta: 'Смотреть демо',
        trustText: 'Используют 500+ хозяев в Тбилиси, Батуми, Казбеги и Сванетии',
      },
      stats: {
        hostsCount: '500+',
        hostsLabel: 'Активных хозяев',
        scansCount: '45,000+',
        scansLabel: 'Сканирований гостями',
        ratingValue: '4.9★',
        ratingLabel: 'Средний рейтинг',
        offlineValue: '100%',
        offlineLabel: 'Работает офлайн',
      },
      featuresPreview: {
        title: 'Почему хозяева выбирают Stumari?',
        sub: 'Экономьте часы на повторяющихся вопросах в переписках и получайте больше восторженных 5-звёздочных отзывов.',
        wifiCardTitle: 'Мгновенный Wi-Fi в 1 касание',
        wifiCardDesc: 'Больше никаких сложных паролей вручную. Гость нажимает одну кнопку — пароль скопирован.',
        doorCardTitle: 'Коды от дверей и лёгкий заезд',
        doorCardDesc: 'Фотографии подъезда, этаж и код замка, чтобы гость без стресса попал в квартиру в любое время.',
        standCardTitle: 'Элегантные QR и NFC стойки',
        standCardDesc: 'Печатайте стильные настольные таблички, идеально вписывающиеся в интерьер квартиры.',
        languagesCardTitle: '100% грузинский, русский и английский',
        languagesCardDesc: 'Гости читают инструкции на родном языке, а хозяева ведут кабинет на удобном для себя языке.',
        offlineCardTitle: 'Работает даже без связи',
        offlineCardDesc: 'Благодаря PWA путеводитель мгновенно кешируется на смартфоне гостя и открывается в офлайне.',
        supportCardTitle: 'Быстрый чат в WhatsApp',
        supportCardDesc: 'Гость связывается с вами в один клик или звонит в 112 в случае экстренной ситуации.',
      },
      pricing: {
        title: 'Простые и прозрачные тарифы',
        subtitle: 'Начните бесплатно. Переходите на платный тариф, только когда ваш бизнес растёт.',
        monthly: 'Помесячно',
        annual: 'За год',
        saveTag: 'Скидка 20%',
        freeTitle: 'Бесплатный (Free)',
        freePrice: '0 ₾',
        freeDesc: 'Идеально для хозяев с 1 квартирой или уютным гостевым домом.',
        proTitle: 'Про (Pro)',
        proPrice: '19 ₾',
        proDesc: 'Для активных суперхозяев с управлением до 5 объектов.',
        entTitle: 'Бизнес (Enterprise)',
        entPrice: '49 ₾',
        entDesc: 'Для отелей, апарт-комплексов и управляющих компаний.',
        popularBadge: 'Самый популярный',
        startFree: 'Начать бесплатно',
        upgradePro: 'Выбрать Pro',
        contactSales: 'Связаться с нами',
      },
      footer: {
        tagline: 'Stumari — всё, что нужно вашим гостям. В одном месте.',
        rights: 'Все права защищены.',
        privacy: 'Конфиденциальность',
        terms: 'Условия использования',
        builtFor: 'Сделано с любовью для гостеприимных хозяев.',
      },
    },
    admin: {
      title: 'Панель администратора Stumari',
      subtitle: 'Общая статистика платформы, база хозяев и активные объекты.',
      tabs: {
        overview: 'Главная аналитика',
        hosts: 'Хозяева',
        properties: 'Объекты',
        settings: 'Системные настройки',
      },
      metrics: {
        totalUsers: 'Всего пользователей',
        activeGuidebooks: 'Активных гидов',
        monthlyScans: 'Сканирований в этом месяце',
        proSubscriptions: 'Pro-подписчиков',
      },
      hostTable: {
        host: 'Хозяин',
        plan: 'Тариф',
        properties: 'Объекты',
        joined: 'Дата регистрации',
        status: 'Статус',
        actions: 'Действия',
      },
    },
  },

  // 🇬🇧 ENGLISH (English) - Pristine, Modern Hospitality Copy
  en: {
    common: {
      save: 'Save',
      saved: 'Saved',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      copy: 'Copy',
      copied: 'Copied!',
      download: 'Download',
      back: 'Back',
      next: 'Next',
      close: 'Close',
      done: 'Done',
      active: 'Active',
      draft: 'Draft',
      published: 'Published',
      all: 'All',
      loading: 'Loading...',
      selectLanguage: 'Select Language',
      viewGuide: 'View Guide',
      preview: 'Preview',
      share: 'Share',
      qrCode: 'QR Code',
      language: 'Language',
      search: 'Search...',
      settings: 'Settings',
      confirm: 'Confirm',
      required: 'Required',
      optional: 'Optional',
    },
    nav: {
      mvpBadge: 'STUMARI MVP',
      marketing: '1. Marketing',
      hostSaas: '2. Host SaaS',
      onboarding: '3. Onboarding',
      guestGuide: '4. Guest Guide',
      admin: 'Admin',
      features: 'Features',
      forProperties: 'For Properties',
      pricing: 'Pricing',
      demo: 'Demo',
      hostLogin: 'Host Login',
      bookDemo: 'Book a demo',
      createStumari: 'Create your Stumari',
      addProperty: '+ Add Property',
      dashboard: 'Dashboard',
      myProperties: 'My Properties',
      propertyHub: 'Property Hub',
      guestView: 'Guest View',
      guestUrl: 'Guest URL',
      activeProp: 'Active Property:',
      featuresDropdown: {
        guideGenerator: 'Guidebook generator',
        qrStand: 'QR + NFC Stand builder',
        instantWifi: 'Instant Wi-Fi & keypad',
        appliances: 'How things work & appliances',
        houseRules: 'House rules & quiet hours',
        localSecrets: 'Curated local secrets',
        transport: 'Transport & airport shuttle',
        multilingual: 'Multilingual & offline mode',
        whatsappChat: 'Direct WhatsApp chat',
        reviews: 'Collect 5-star reviews',
      },
      propertiesDropdown: {
        apartments: 'Apartments & Studios',
        guesthouses: 'Guesthouses & B&Bs',
        boutiqueHotels: 'Boutique Hotels',
        propertyManagers: 'Property Managers',
      },
    },
    hostDashboard: {
      welcomeBack: 'Welcome back 👋',
      planTag: 'Plan',
      dashboardSubtitle: 'Manage digital guest guides, Wi-Fi credentials, and guest access.',
      fullListSubtitle: 'All properties currently managed under your host account.',
      metrics: {
        totalProperties: 'Total Properties',
        activeGuides: 'Active Guides',
        totalViews: 'Total Views',
        guestScans: 'Guest Scans',
        thisMonth: 'This Month',
        allTime: 'All Time',
      },
      quickActions: {
        title: 'Quick Actions',
        addNew: 'Add New Property',
        addNewSub: 'Create guidebook in 2 minutes',
        qrStand: 'Print QR Stand',
        qrStandSub: 'Tabletop acrylic display card',
        shareDirect: 'Share Link',
        shareDirectSub: 'Send directly to guest chat',
      },
      filters: {
        all: 'All',
        published: 'Published',
        draft: 'Draft',
      },
      card: {
        published: 'Published',
        draft: 'Draft',
        views: 'views',
        editGuide: 'Edit Guide',
        preview: 'Preview',
        qrFlyer: 'QR Stand',
        copyLink: 'Copy Link',
        quickWifi: 'Wi-Fi:',
        quickCode: 'Code:',
        publishNow: 'Publish',
        unpublish: 'Unpublish',
        duplicate: 'Duplicate',
        delete: 'Delete',
      },
      emptyState: {
        title: 'No properties found',
        desc: 'Create your first digital welcome guidebook for your guests.',
        action: 'Add Property',
      },
      yourProperties: 'YOUR PROPERTIES',
      viewAll: 'View all',
      live: 'Live',
      draft: 'Draft',
      wifiPassword: 'Wi-Fi Password',
      frontDoorCode: 'Front Door Code',
      keypadCode: 'Key Code',
      propertyHub: 'Hub',
      swipeCards: 'Swipe cards',
      wantAnotherGuide: 'Want to create another contactless guest guide?',
      addProperty: 'Add Property',
      tapToCopy: 'Tap to Copy',
    },
    propertyHub: {
      backToDashboard: 'Back to Host Dashboard',
      tabs: {
        overview: 'Overview',
        guide: 'Guidebook Editor',
        preview: 'Live Preview',
        qr: 'QR & NFC Stand',
        settings: 'Settings',
      },
      overview: {
        statusBadge: 'Status:',
        liveUrl: 'Direct Guest URL:',
        copyGuestUrl: 'Copy Link',
        openGuestView: 'Open Guest View',
        lastUpdated: 'Last updated:',
        keyInfo: 'Key Information',
        wifiCard: 'Wi-Fi Network & Password',
        checkinCard: 'Check-in Method & Code',
        contactCard: 'Host Contact Details',
        quickStats: 'Quick Stats',
        guideCompleteness: 'Guidebook Completeness',
        qrQuickDownload: 'Download QR Code',
      },
      guideSections: {
        welcome: '1. Welcome',
        checkin: '2. Check-in & Access',
        wifi: '3. Wi-Fi Network',
        appliances: '4. Appliances Guide',
        rules: '5. House Rules',
        recommendations: '6. Local Recommendations',
        transport: '7. Transport & Taxis',
        checkout: '8. Check-out',
        emergency: '9. Emergency Contacts',
      },
      forms: {
        welcomeTitle: 'Welcome Title',
        welcomeGreeting: 'Welcome Greeting to Guest',
        hostName: 'Host Name',
        hostRole: 'Host Role (e.g. Superhost)',
        hostPhone: 'Phone Number',
        hostWhatsApp: 'WhatsApp Number (+995...)',
        checkInTime: 'Check-in Time',
        checkOutTime: 'Check-out Time',
        checkInMethod: 'Check-in Method',
        keypad: 'Digital Keypad Lock',
        lockbox: 'Mechanical Lockbox',
        inPerson: 'In-person Greeting',
        concierge: 'Concierge / Reception',
        doorKeypadCode: 'Door Keypad Code (e.g. 3829#)',
        lockboxCode: 'Lockbox Code (e.g. 7419)',
        parkingInstructions: 'Parking Instructions',
        arrivalDirections: 'Detailed Arrival & Door Directions',
        networkName: 'Wi-Fi Network Name (SSID)',
        networkPassword: 'Wi-Fi Password',
        testCopy: 'Test & Copy',
        appliancesTitle: 'Appliances & How Things Work',
        appliancesSub: 'Help guests use the air conditioning, espresso machine, and washer without sending panicked messages.',
        addAppliance: '+ Add Appliance',
        applianceName: 'Appliance Name',
        instructions: 'Usage Instructions',
        troubleshooting: 'Troubleshooting Tip (Optional)',
        houseRulesTitle: 'House Rules & Quiet Hours',
        quietHours: 'Quiet Hours (e.g. 11:00 PM – 8:00 AM)',
        trashSchedule: 'Trash Schedule & Disposal Bins',
        addRule: '+ Add Rule',
        recsTitle: 'Curated Recommendations & Secrets',
        recsSub: 'Share your personal neighborhood gems, local bakeries, and authentic Georgian wine cellars.',
        addPlace: '+ Add Recommendation',
        placeName: 'Place Name',
        category: 'Category',
        address: 'Address',
        distance: 'Distance (e.g. 4 min walk)',
        mapsUrl: 'Google Maps Link',
        hostTip: 'Host Tip (e.g. Order the garlic chicken)',
        categories: {
          all: 'All',
          food: 'Dining & Restaurants',
          coffee: 'Coffee & Breakfast',
          groceries: 'Supermarkets',
          activity: 'Things to Do',
          nightlife: 'Wine Bars & Nightlife',
        },
        transportTitle: 'Transport, Taxis & Airport',
        taxiBolt: 'Taxi Booking (Bolt app info)',
        transitMetro: 'Public Transit (Metro & bus info)',
        airportTransit: 'Airport Transit & Estimated Fare',
        checkoutTitle: 'Check-out & Departure Checklist',
        departureChecklist: 'Departure Checklist for Guests',
        addChecklistItem: '+ Add Checklist Item',
        emergencyTitle: 'Emergency Numbers & Contacts',
        emergencyServicesNumber: 'Emergency Services Number (112)',
        emergencyContactName: 'Co-host / Emergency Phone',
        saveChanges: 'Save Changes',
      },
      qrStand: {
        title: 'Tabletop QR & NFC Stand',
        sub: 'Print a clean acrylic or wooden table tent card. Guests scan with their phone camera to instantly load the guidebook and copy Wi-Fi.',
        acrylicStand: 'Acrylic A6 Stand',
        tableTent: 'Foldable Table Tent',
        printFlyer: 'A4 Printable Flyer',
        downloadPng: 'Download QR Code (PNG)',
        printNow: 'Print Display Card',
        standHeader: 'Welcome to your stay!',
        standSub: 'Scan with camera for Wi-Fi and guide',
        wifiLabel: 'Wi-Fi:',
        passLabel: 'Password:',
        scanNotice: 'No app download required',
        customColor: 'Accent Color',
      },
      settings: {
        title: 'Property Settings',
        general: 'General Information',
        propertyTitle: 'Property Title',
        subtitle: 'Subtitle / Tagline',
        propertyType: 'Property Type',
        address: 'Physical Address',
        city: 'City / Region',
        country: 'Country',
        coverImageUrl: 'Cover Image URL',
        slugUrl: 'Custom Slug URL',
        statusControl: 'Publication Status (Published / Draft)',
        dangerZone: 'Danger Zone',
        deletePrompt: 'Deleting this property is permanent and cannot be undone.',
      },
    },
    guestGuide: {
      backToHost: 'Back to Host SaaS',
      liveView: 'Live Guest View',
      welcomeGreetingFallback: 'Welcome! We are delighted to host you. Make yourself at home.',
      hostedBy: 'Hosted by',
      superhost: 'Superhost',
      callHost: 'Call Host',
      chatWhatsApp: 'WhatsApp Chat',
      oneTapSwitch: '1-Tap Switch',
      lockboxLabel: 'Lockbox',
      bento: {
        contact: 'Contact',
      },
      quickAccess: {
        wifi: 'Wi-Fi Password',
        wifiSub: '1-tap copy password',
        doorCode: 'Door Keypad',
        doorCodeSub: 'Access code & lock',
        checkIn: 'Check-in Guide',
        checkInSub: 'Arrival & parking',
        houseManual: 'How Things Work',
        houseManualSub: 'Appliances & AC',
      },
      categories: {
        all: 'All',
        access: 'Access & Wi-Fi',
        house: 'House & Appliances',
        local: 'Local Guide',
      },
      cards: {
        wifiTitle: 'Instant Wi-Fi Connection',
        wifiPassword: 'Password:',
        copyPassword: 'Copy Password',
        passwordCopied: 'Password copied!',
        doorCodeTitle: 'Door Keypad Access',
        doorCodeLabel: 'Door Code:',
        copyCode: 'Copy Door Code',
        codeCopied: 'Code copied!',
        checkinTitle: 'Check-in Instructions',
        checkinTime: 'Check-in Time:',
        checkoutTime: 'Check-out Time:',
        directionsTitle: 'Finding the Door:',
        parkingTitle: 'Parking Information:',
        howThingsWork: 'Appliances & Instructions',
        appliancesCount: 'appliances guided',
        troubleshootingTip: 'Tip:',
        houseRules: 'House Rules & Quiet Hours',
        quietHoursLabel: 'Quiet Hours:',
        trashScheduleLabel: 'Trash Disposal:',
        recommendations: 'Curated Neighborhood Gems',
        viewOnMaps: 'Open in Google Maps',
        ourTip: 'Host Tip:',
        transport: 'Transport & Getting Around',
        transitSubtitle: 'Bolt, Metro & Transit',
        taxiApp: 'Recommended Taxi (Bolt):',
        publicTransit: 'Public Transit:',
        airportGuide: 'Airport Transit:',
        checkoutChecklist: 'Departure Checklist',
        departureTasks: 'Before you leave, please:',
        contactHost: 'Contact Your Host',
        emergency112: 'Emergency Services (112)',
        emergencyCall: 'Call 112',
      },
      offlineBadge: 'Available 100% offline',
      pwaInstallPrompt: 'Add to home screen for instant offline access',
      map: {
        title: 'Interactive Offline Map',
        subtitle: 'Nearby gems & walking routes even without cell service',
        interactiveMap: 'Interactive Map',
        listView: 'List View',
        youAreHere: 'Your Property (You Are Here)',
        offlineReady: 'Offline Ready · Cached on your device',
        centerOnProperty: 'Center on Property',
        walkingRoute: 'Walking route',
        walkTime: 'walk',
        getDirections: 'Get GPS Directions',
        copyAddress: 'Copy Address',
        addressCopied: 'Address copied to clipboard!',
        viewInGoogleMaps: 'Open in Google Maps',
        compassHeading: 'Bearing',
        radiusRings: {
          r200: '200m · 2 min',
          r500: '500m · 6 min',
          r1k: '1km · 12 min',
        },
        categories: {
          all: 'All',
          coffee: 'Coffee & Bakeries',
          food: 'Restaurants & Dining',
          nightlife: 'Wine Bars & Nightlife',
          groceries: 'Groceries & Pharmacy',
          activity: 'Sights & Viewpoints',
        },
        cardBadge: 'Interactive Offline Map',
        cardSub: 'Curated local spots & walking distances',
      },
    },
    onboarding: {
      badge: 'Quick Host Setup',
      title: 'Create your digital guide in 2 minutes',
      subtitle: 'Fill in your core property details and your QR welcome guide is instantly live for guests.',
      steps: {
        step1: '1. Property',
        step2: '2. Access & Wi-Fi',
        step3: '3. Rules & Manual',
        step4: '4. Launch!',
      },
      step1Title: 'Tell us about your property',
      step1Desc: 'Enter the name, type, and location of your rental.',
      step2Title: 'Access & Wi-Fi details',
      step2Desc: 'The essential details every guest needs within 60 seconds of arrival.',
      step3Title: 'House rules & quiet hours',
      step3Desc: 'Protect your home and ensure respectful neighborhood harmony.',
      step4Title: 'Your Stumari is ready to launch!',
      step4Desc: 'Your digital guide is live. Print your QR stand or copy the link to send to your guests.',
      fields: {
        propertyName: 'Property Name',
        propertyNamePlaceholder: 'e.g. Old Tbilisi Heritage Apartment',
        propertyType: 'Property Type',
        city: 'City / Region',
        address: 'Physical Address',
        checkInTime: 'Check-in Time',
        checkOutTime: 'Check-out Time',
        doorCode: 'Door Keypad Code (or lockbox)',
        wifiName: 'Wi-Fi Network Name',
        wifiPass: 'Wi-Fi Password',
        quietHours: 'Quiet Hours',
        trashSchedule: 'Trash Disposal Location',
        rulesSummary: 'Core House Rules',
      },
      buttons: {
        continue: 'Continue',
        back: 'Back',
        finishAndLaunch: 'Finish & Launch Guide',
        launchGuide: 'View Guest Guide',
        openHostHub: 'Go to Property Hub',
        printStand: 'Print QR Stand',
      },
      success: {
        heading: 'Congratulations! Your guide is live 🎉',
        sub: 'Guests can read in English, Georgian, or Russian even without cellular signal.',
        urlReady: 'Your unique guest link:',
      },
    },
    marketing: {
      hero: {
        badge: "Georgia's #1 Digital Guest Guidebook Platform",
        titlePart1: 'Everything your',
        titleHighlight: 'guests need.',
        titlePart2: 'In one digital place.',
        subtitle: 'Stumari helps Airbnb hosts, apartments, and boutique hotels create a modern digital welcome guide accessed via QR code or NFC. 1-tap Wi-Fi, door codes, and genuine Georgian hospitality.',
        primaryCta: 'Create your Stumari for free',
        secondaryCta: 'Interactive Demo',
        trustText: 'Trusted by 500+ hosts in Tbilisi, Batumi, Kazbegi, and Mestia',
      },
      stats: {
        hostsCount: '500+',
        hostsLabel: 'Active Hosts',
        scansCount: '45,000+',
        scansLabel: 'Guest Scans',
        ratingValue: '4.9★',
        ratingLabel: 'Average Rating',
        offlineValue: '100%',
        offlineLabel: 'Offline Capable',
      },
      featuresPreview: {
        title: 'Why Hosts Love Stumari',
        sub: 'Save hours answering the same repetitive messages and earn more 5-star reviews on every checkout.',
        wifiCardTitle: 'Instant 1-Tap Wi-Fi',
        wifiCardDesc: 'No more typing 20-character passwords manually. Guests tap one button to connect or copy.',
        doorCardTitle: 'Door Codes & Self Check-in',
        doorCardDesc: 'Clear photo directions, courtyard codes, and keypad pins so guests check in smoothly at 2 AM.',
        standCardTitle: 'Custom QR & NFC Stands',
        standCardDesc: 'Print clean, minimalist acrylic display cards that look stunning on any kitchen counter.',
        languagesCardTitle: '100% Georgian, Russian & English',
        languagesCardDesc: 'Overseas tourists read in English or Russian, while local Georgian hosts manage everything in Georgian.',
        offlineCardTitle: 'Works Without Roaming Data',
        offlineCardDesc: 'PWA technology caches the entire guidebook onto the guest phone the instant they scan.',
        supportCardTitle: '1-Click WhatsApp & 112 Help',
        supportCardDesc: 'Guests reach you directly on WhatsApp or dial emergency 112 in one urgent tap.',
      },
      pricing: {
        title: 'Simple, Transparent Pricing',
        subtitle: 'Start free. Upgrade as your hospitality portfolio expands.',
        monthly: 'Monthly',
        annual: 'Annual',
        saveTag: 'Save 20%',
        freeTitle: 'Free',
        freePrice: '0 ₾',
        freeDesc: 'Perfect for single apartment hosts getting started.',
        proTitle: 'Pro',
        proPrice: '19 ₾',
        proDesc: 'For active Superhosts managing up to 5 properties.',
        entTitle: 'Enterprise',
        entPrice: '49 ₾',
        entDesc: 'For boutique hotels, guesthouses, and co-hosting teams.',
        popularBadge: 'Most Popular',
        startFree: 'Start Free',
        upgradePro: 'Choose Pro',
        contactSales: 'Contact Sales',
      },
      footer: {
        tagline: 'Stumari — Everything your guests need. In one place.',
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        builtFor: 'Handcrafted with warmth for hospitality hosts.',
      },
    },
    admin: {
      title: 'Stumari Admin Console',
      subtitle: 'Platform analytics, host directory, and system health.',
      tabs: {
        overview: 'Overview',
        hosts: 'Hosts',
        properties: 'Properties',
        settings: 'Settings',
      },
      metrics: {
        totalUsers: 'Total Users',
        activeGuidebooks: 'Active Guidebooks',
        monthlyScans: 'Monthly Scans',
        proSubscriptions: 'Pro Subscriptions',
      },
      hostTable: {
        host: 'Host',
        plan: 'Plan',
        properties: 'Properties',
        joined: 'Joined Date',
        status: 'Status',
        actions: 'Actions',
      },
    },
  },
};
