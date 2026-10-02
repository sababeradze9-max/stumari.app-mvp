import { Language } from '../i18n/types';

export interface LocalizedFeature {
  category: 'access' | 'house' | 'local' | 'support';
  title: string;
  subtitle: string;
  description: string;
}

export interface LocalizedPropertyType {
  id: 'apartments' | 'guesthouses' | 'hotels' | 'managers';
  label: string;
  headline: string;
  subhead: string;
  image: string;
  painPoints: string[];
  solution: string[];
}

export interface LocalizedFaq {
  q: string;
  a: string;
}

export interface LocalizedJourneyStep {
  step: number;
  title: string;
  desc: string;
}

export interface MarketingContent {
  featuresPage: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    categories: {
      all: string;
      access: string;
      house: string;
      local: string;
      support: string;
    };
    viewCards: string;
    viewGrid: string;
    includedTag: string;
    disciplineBadge: string;
    disciplineTitle: string;
    disciplineDesc: string;
    ctaBannerTitle: string;
    ctaBannerSubtitle: string;
    ctaBannerBtn1: string;
    ctaBannerBtn2: string;
    features: LocalizedFeature[];
  };
  forPropertiesPage: {
    badge: string;
    title: string;
    subtitle: string;
    solutionTab: string;
    headachesTab: string;
    solutionHeader: string;
    headachesHeader: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaBtn: string;
    types: LocalizedPropertyType[];
  };
  pricingPage: {
    allPlans: string;
    mostPopular: string;
    billedAnnually: string;
    month: string;
    featuresTitle: string;
    faqTitle: string;
    faqs: LocalizedFaq[];
  };
  demoPage: {
    badge: string;
    title: string;
    subtitle: string;
    propertyLabel: string;
    tabDemo: string;
    tabJourney: string;
    simBadge: string;
    journeyTitle: string;
    steps: LocalizedJourneyStep[];
    launchFullscreen: string;
    createYourOwn: string;
    helperTip: string;
    openFullscreen: string;
  };
}

export const MARKETING_I18N: Record<Language, MarketingContent> = {
  // 🇬🇪 GEORGIAN (ქართული)
  ka: {
    featuresPage: {
      badge: 'STUMARI - ძირითადი შესაძლებლობები',
      titlePart1: 'ყველაფერი, რაც თქვენს სტუმარს სჭირდება.',
      titleHighlight: 'არაფერი ზედმეტი.',
      subtitle: 'ერთი დახვეწილი ციფრული გზამკვლევი, რომელიც სტუმრის შეკითხვების 90%-ს წინასწარ პასუხობს. არანაირი აპლიკაციის ჩამოტვირთვა და გაუგებარი მენიუები.',
      ctaPrimary: 'შექმენით გიდი 5 წუთში',
      ctaSecondary: 'სტუმრის რეალური ხედი',
      categories: {
        all: '✨ ყველა (10)',
        access: '🔑 შესვლა და Wi-Fi',
        house: '🏠 სახლი და ტექნიკა',
        local: '🍷 ადგილობრივი რჩევები',
        support: '🛡️ უსაფრთხოება და WhatsApp'
      },
      viewCards: 'ბარათები',
      viewGrid: 'ბადე',
      includedTag: 'შედის ყველა გიდში',
      disciplineBadge: 'გააზრებული არქიტექტურა',
      disciplineTitle: 'რა ხდის Stumari-ს უსწრაფესს? ის, რასაც განზრახ არ ვაშენებთ.',
      disciplineDesc: 'დაღლილ სტუმარს მძიმე ჩემოდნებით არ სურს ჩატბოტები, ანგარიშის შექმნა ან რთული ფორმები. მათ სჭირდებათ Wi-Fi, კარების კოდი და ცხელი წყლის ჩართვა 2 წამში.',
      ctaBannerTitle: 'მზად ხართ გააუმჯობესოთ თქვენი სტუმრების გამოცდილება?',
      ctaBannerSubtitle: 'შექმენით გიდი 5 წუთში. დაბეჭდეთ QR-სადგამი თქვენი სამზარეულოსთვის. ასიამოვნეთ სტუმრები.',
      ctaBannerBtn1: 'დაიწყეთ უფასოდ',
      ctaBannerBtn2: 'სტუმრის გიდის ტესტი',
      features: [
        {
          category: 'access',
          title: 'ციფრული სტუმრის გიდი',
          subtitle: 'მყისიერი PWA ჩამოტვირთვის გარეშე',
          description: 'სტუმარი ასკანერებს QR-ს და 1 წამში ხსნის კომფორტულ მობილურ გიდს. სწრაფი ჩატვირთვა, პაროლების გარეშე ნებისმიერ ტელეფონზე.'
        },
        {
          category: 'access',
          title: 'QR + NFC უკონტაქტო წვდომა',
          subtitle: '300 DPI საბეჭდი მაგიდის სადგამი',
          description: 'დააგენერირეთ მაღალი ხარისხის მაგიდის კარავი ან დააკავშირეთ NFC ჩიპი. სტუმარი მიადებს iPhone-ს ან Android-ს და პირდაპირ გიდში ხვდება.'
        },
        {
          category: 'access',
          title: 'დამოუკიდებელი შესვლა და გასვლა',
          subtitle: 'მარტივი მისვლა ნებისმიერ დროს',
          description: 'ნაბიჯ-ნაბიჯ შესვლის ინსტრუქცია, პარკინგი, კარების კოდები და ლოქბოქსი. გასვლის ჩეკლისტი უზრუნველყოფს სახლის უსაფრთხოდ დატოვებას.'
        },
        {
          category: 'access',
          title: '1-შეხებით Wi-Fi კავშირი',
          subtitle: 'აღარ არის საჭირო რთული პაროლების აკრეფა',
          description: 'სტუმარი აჭერს "პაროლის კოპირებას" და პირდაპირ აერთებს ტელეფონს. აქრობს ღამის #1 ყველაზე ხშირ შეკითხვას.'
        },
        {
          category: 'house',
          title: 'სახლის წესები და სიჩუმის საათები',
          subtitle: 'ზრდილობიანი და მკაფიო მოლოდინები',
          description: 'სიჩუმის საათები, ფეხსაცმლის წესი, მოწევის შეზღუდვა და ნაგვის გადაყრა - თბილი, მასპინძლური ტონით.'
        },
        {
          category: 'house',
          title: 'როგორ მუშაობს ტექნიკა',
          subtitle: 'აღარ მოგიწევთ კონდიციონერის პულტის ახსნა',
          description: 'ფოტოინსტრუქციები კონდიციონერის გათბობაზე ჩართვისთვის, ყავის აპარატისთვის, გაზის ქვაბისა და სარეცხი მანქანისთვის.'
        },
        {
          category: 'local',
          title: 'ავთენტური ადგილობრივი რჩევები',
          subtitle: 'თქვენი უბნის საუკეთესო საიდუმლო ადგილები',
          description: 'გაუზიარეთ საუკეთესო საცხობები, ღვინის ბარები, აფთიაქები და სუპერმარკეტები მანძილებითა და Google Maps ნავიგაციით.'
        },
        {
          category: 'local',
          title: 'ტრანსპორტი და აეროპორტის გზა',
          subtitle: 'ტაქსი, აეროპორტის ტრანსფერი და მეტრო',
          description: 'მკაფიო რჩევები ტაქსის აპლიკაციებზე (Bolt), აეროპორტის რეალური ტარიფები, უახლოესი მეტრო და ავტობუსის გაჩერებები.'
        },
        {
          category: 'support',
          title: 'მრავალენოვანი მხარდაჭერა',
          subtitle: 'დახვდით უცხოელ სტუმრებს მათ მშობლიურ ენაზე',
          description: 'ინფორმაცია ხელმისაწვდომია ქართულ, რუსულ და ინგლისურ ენებზე, რათა საერთაშორისო მოგზაურმა თავი მშვიდად იგრძნოს.'
        },
        {
          category: 'support',
          title: 'პირდაპირი WhatsApp და 112 გადაუდებელი დახმარება',
          subtitle: '1-დაწკაპუნებით WhatsApp და სასწრაფო',
          description: 'პირდაპირი WhatsApp ღილაკი, გადაუდებელი დახმარების ნომრები (112), უახლოესი აფთიაქი და კორპუსის მენეჯერის კონტაქტი.'
        }
      ]
    },
    forPropertiesPage: {
      badge: 'მორგებული მასპინძლობის გადაწყვეტილებები',
      title: 'შექმნილია თქვენი მასპინძლობის სტილისთვის.',
      subtitle: 'თბილისის მყუდრო ბინიდან დაწყებული, ყაზბეგის კოტეჯებითა და 50-ბინიანი პორტფოლიოს მენეჯერებით დამთავრებული.',
      solutionTab: '✨ Stumari-ს გადაწყვეტა',
      headachesTab: '⚠️ თავიდან არიდებული პრობლემები',
      solutionHeader: 'როგორ წყვეტს ამას Stumari',
      headachesHeader: 'ტიპიური თავის ტკივილი, რომელსაც ივიწყებთ',
      ctaTitle: 'მზად ხართ სცადოთ თქვენი ობიექტისთვის?',
      ctaSubtitle: 'შექმენით თქვენი პირველი გიდი სრულიად უფასოდ 5 წუთში.',
      ctaBtn: 'დაიწყეთ უფასოდ',
      types: [
        {
          id: 'apartments',
          label: 'ბინები და ლოფტები',
          headline: 'იდეალური კომპანიონი Airbnb და დღიური ბინებისთვის',
          subhead: 'შეამცირეთ განმეორებადი შეტყობინებები 70%-ით და თავიდან აიცილეთ გაუგებრობები შესვლისას.',
          image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
          painPoints: [
            'სტუმრები მუდმივად გწერენ ღამის 11 საათზე Wi-Fi პაროლის გასაგებად',
            'გაუგებრობა კარების კოდებთან ან ჭკვიან საკეტებთან',
            'კონდიციონერის გათბობაზე გადართვის გამო შეშფოთებული ზარები',
            'დაბეჭდილი ფურცლები, რომლებიც ისვრება, იკარგება და ცვდება'
          ],
          solution: [
            'მყისიერი 1-შეხებით Wi-Fi პაროლის კოპირება ტელეფონში',
            'უტყუარი ნაბიჯ-ნაბიჯ შესვლის ინსტრუქცია ქუჩის ფოტოებით',
            'ტექნიკის ფოტო-მეგზური სწრაფი რჩევებით',
            'რჩეული ადგილობრივი ლოკაციები, რომლებიც 5-ვარსკვლავიან შეფასებას მოგიტანთ'
          ]
        },
        {
          id: 'guesthouses',
          label: 'საოჯახო სასტუმროები და B&B',
          headline: 'თბილი, ქართული სტუმართმოყვარეობა თანამედროვე სიმარტივით',
          subhead: 'გაუზიარეთ თქვენი სახლის სული და მიეცით სტუმრებს სრული კომფორტი და დამოუკიდებლობა.',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
          painPoints: [
            'საუზმის დროისა და წესების განმეორებით ახსნა ყოველი სტუმრისთვის',
            'ენობრივი ბარიერი გვიან ჩამოსულ უცხოელ ტურისტებთან',
            'ბალანსი პირად სითბოსა და სტუმრის სიმშვიდეს შორის'
          ],
          solution: [
            'მრავალენოვანი მისასალმებელი წერილები ქართულად, ინგლისურად და რუსულად',
            'საუზმის, სიჩუმისა და გასვლის მკაფიო განრიგი',
            'პირდაპირი WhatsApp ღილაკი საჭიროების შემთხვევაში დასაკავშირებლად',
            'სახლის ისტორია და ნამდვილი ხელნაკეთი პროდუქტების რეკომენდაციები'
          ]
        },
        {
          id: 'hotels',
          label: 'ბუტიკ-სასტუმროები',
          headline: 'გააუმჯობესეთ სტუმრის გზა ძვირადღირებული აპარატურის გარეშე',
          subhead: 'დახვეწილი ციფრული დირექტორია ხის ან აკრილის ელეგანტურ NFC/QR სადგამებზე.',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
          painPoints: [
            'ოთახის ძვირიანი ტაბლეტები, რომლებიც ფუჭდება, ჯდება ან იკარგება',
            'რესეფშენი გადატვირთულია რუტინული კითხვებით',
            'ძველი ბეჭდური ბუკლეტები, რომელთა განახლება ათასობით ლარი ჯდება'
          ],
          solution: [
            'სტუმრები იყენებენ საკუთარ სმარტფონს 1 წამში სკანირებით',
            'კონსიერჟი, ნომრის მომსახურება და გასვლის დრო წამებში განახლებადია',
            'ელეგანტური ბრენდირებული ტიპოგრაფია სასტუმროს ესთეტიკის შესაბამისად',
            'არანაირი აპლიკაციის გადმოწერა სტუმრისგან'
          ]
        },
        {
          id: 'managers',
          label: 'ქონების მმართველები (Portfolio)',
          headline: 'ერთიანი 5-ვარსკვლავიანი სტანდარტი თქვენს მთელ პორტფოლიოში',
          subhead: 'მართეთ 5-დან 50+ ობიექტამდე ერთი ცენტრალიზებული მართვის პანელიდან.',
          image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80',
          painPoints: [
            'ოპერაციული გუნდი კვირაში ასობით ერთნაირ შეტყობინებას პასუხობს',
            'არაერთგვაროვანი მისასალმებელი მასალები სხვადასხვა მესაკუთრის ბინებში',
            'კოდების ცალ-ცალკე განახლების სირთულე საკეტის შეცვლისას'
          ],
          solution: [
            'ერთი ცენტრალიზებული პანელი ყველა ბინისთვის',
            'სტანდარტიზებული, მაღალი დონის გიდის სტრუქტურა',
            'განაახლეთ Wi-Fi ან კოდი ერთხელ და ის მყისიერად იცვლება ყველგან',
            'დაბეჭდეთ ფლაერები დასუფთავებისა და მომსახურების გუნდისთვის'
          ]
        }
      ]
    },
    pricingPage: {
      allPlans: 'ყველა ტარიფი (3)',
      mostPopular: '⭐ ყველაზე პოპულარული არჩევანი',
      billedAnnually: '(წლიური გადახდით)',
      month: 'თვეში',
      featuresTitle: 'შედის ტარიფში:',
      faqTitle: 'ხშირად დასმული კითხვები',
      faqs: [
        {
          q: 'სჭირდებათ თუ არა სტუმრებს აპლიკაციის ჩამოტვირთვა?',
          a: 'არასდროს. Stumari იხსნება პირდაპირ ტელეფონის ბრაუზერში (Safari, Chrome) QR კოდის დასკანერებით ან NFC-ზე შეხებით. რეგისტრაცია და პაროლები საჭირო არ არის.'
        },
        {
          q: 'შემიძლია თუ არა რეალური QR მაგიდის სადგამების დაბეჭდვა?',
          a: 'დიახ, Stumari ავტომატურად ამზადებს მაღალი რეზოლუციის საბეჭდ ფაილებს (A4, 5x7, A6) მაგიდის სადგამებისთვის და NFC ჩიპებისთვის.'
        },
        {
          q: 'შემიძლია შევცვალო კოდები სტუმრის ყოფნის დროს?',
          a: 'დიახ! ნებისმიერი ცვლილება კარების კოდში, Wi-Fi პაროლში თუ წესებში მყისიერად აისახება სტუმრის ეკრანზე.'
        },
        {
          q: 'შემიძლია ტარიფის ნებისმიერ დროს გაუქმება ან შეცვლა?',
          a: 'რა თქმა უნდა. არანაირი გრძელვადიანი კონტრაქტები ან ჯარიმები. შეგიძლიათ შეცვალოთ ან გააუქმოთ 1 დაწკაპუნებით.'
        }
      ]
    },
    demoPage: {
      badge: 'ინტერაქტიული დემო',
      title: 'გამოსცადეთ Stumari სტუმრის თვალით.',
      subtitle: 'ეს არის ზუსტად ის კომფორტული გამოცდილება, რასაც სტუმარი იღებს QR-ის დასკანერებისას. დააწკაპუნეთ ღილაკებზე შესამოწმებლად!',
      propertyLabel: 'ობიექტი:',
      tabDemo: 'ინტერაქტიული ცოცხალი გიდი',
      tabJourney: 'სტუმრის 2-წამიანი გზა',
      simBadge: 'ცოცხალი ინტერაქტიული სიმულაცია',
      journeyTitle: 'სტუმრის 2-წამიანი გამოცდილება',
      steps: [
        {
          step: 1,
          title: 'სტუმარი შემოდის ბინაში',
          desc: 'ხედავს დახვეწილ QR მაგიდის სადგამს ან ადებს ტელეფონს საწოლთან არსებულ NFC დისკს.'
        },
        {
          step: 2,
          title: 'მყისიერი გახსნა ბრაუზერში',
          desc: 'ავტორიზაციის, App Store-ის და პაროლების გარეშე. მუშაობს სუსტი ინტერნეტის პირობებშიც.'
        },
        {
          step: 3,
          title: 'ერთი შეხებით ყველაფერი ხელთ გაქვთ',
          desc: '1-შეხებით Wi-Fi პაროლი, კონდიციონერის ინსტრუქცია, ღვინის ბარები და მასპინძლის WhatsApp.'
        }
      ],
      launchFullscreen: 'სრული ეკრანით გაშვება',
      createYourOwn: 'შექმენით თქვენი ობიექტის გიდი',
      helperTip: '✨ დააწკაპუნეთ ნებისმიერ ღილაკზე ცოცხალი პასუხის სანახავად',
      openFullscreen: 'სრულ ეკრანზე'
    }
  },

  // 🇷🇺 RUSSIAN (Русский)
  ru: {
    featuresPage: {
      badge: 'STUMARI - ОСНОВНЫЕ ВОЗМОЖНОСТИ',
      titlePart1: 'Всё, что нужно вашим гостям.',
      titleHighlight: 'И ничего лишнего.',
      subtitle: 'Один продуманный цифровой путеводитель, отвечающий на 90% вопросов гостей до того, как они их зададут. Никаких скачиваний приложений и путаницы.',
      ctaPrimary: 'Создать гид за 5 минут',
      ctaSecondary: 'Смотреть реальный вид гостя',
      categories: {
        all: '✨ Все (10)',
        access: '🔑 Доступ и Wi-Fi',
        house: '🏠 Дом и техника',
        local: '🍷 Местные секреты',
        support: '🛡️ Безопасность и WhatsApp'
      },
      viewCards: 'Карточки',
      viewGrid: 'Сетка',
      includedTag: 'Включено во все путеводители',
      disciplineBadge: 'Осознанная архитектура',
      disciplineTitle: 'Что делает Stumari быстрым? То, что мы намеренно не создаём.',
      disciplineDesc: 'Уставшие гости с тяжёлыми чемоданами не хотят общаться с чат-ботами или регистрироваться. Им нужен Wi-Fi, код от двери и инструкция к горячей воде за 2 секунды.',
      ctaBannerTitle: 'Готовы улучшить впечатления ваших гостей?',
      ctaBannerSubtitle: 'Создайте путеводитель за 5 минут. Распечатайте стойку с QR-кодом для кухни. Радуйте гостей.',
      ctaBannerBtn1: 'Начать бесплатно',
      ctaBannerBtn2: 'Протестировать гид гостя',
      features: [
        {
          category: 'access',
          title: 'Цифровой путеводитель гостя',
          subtitle: 'Мгновенное PWA без скачивания приложений',
          description: 'Гости сканируют QR-код или прикладывают смартфон и открывают гид за 1 секунду. Быстрая загрузка и нулевое трение.'
        },
        {
          category: 'access',
          title: 'Бесконтактный доступ через QR + NFC',
          subtitle: 'Макеты настольных стоек качества 300 DPI',
          description: 'Генерируйте файлы для печати настольных табличек или привязывайте NFC-метки. Гость касается телефоном и сразу видит гид.'
        },
        {
          category: 'access',
          title: 'Самостоятельное заселение и выезд',
          subtitle: 'Комфортное прибытие в любое время суток',
          description: 'Пошаговые фотоинструкции входа, схема парковки, коды замков и сейфов. Чеклист выезда гарантирует сохранность жилья.'
        },
        {
          category: 'access',
          title: 'Подключение к Wi-Fi в 1 клик',
          subtitle: 'Больше не нужно вручную вводить сложные пароли',
          description: 'Гости нажимают «Скопировать пароль» и сразу подключаются в настройках. Устраняет вопрос #1 среди ночных сообщений.'
        },
        {
          category: 'house',
          title: 'Правила дома и часы тишины',
          subtitle: 'Вежливые и чёткие ожидания от проживания',
          description: 'Часы тишины, правила обуви, запрет курения и вынос мусора в доброжелательном тоне, ценящемся гостями и соседями.'
        },
        {
          category: 'house',
          title: 'Как работает техника',
          subtitle: 'Больше не придётся объяснять пульт от кондиционера',
          description: 'Наглядные инструкции для обогрева кондиционером, кофемашин, газовых котлов, плит и колонок с советами при неполадках.'
        },
        {
          category: 'local',
          title: 'Авторские рекомендации района',
          subtitle: 'Ваши любимые скрытые жемчужины',
          description: 'Делитесь лучшими пекарнями, винными барами, аптеками и магазинами с указанием расстояния и точками на Google Maps.'
        },
        {
          category: 'local',
          title: 'Транспорт и дорога в аэропорт',
          subtitle: 'Такси, трансфер и общественный транспорт',
          description: 'Советы по вызову такси (Bolt), честные тарифы в аэропорт, ближайшие станции метро и автобусные маршруты.'
        },
        {
          category: 'support',
          title: 'Многоязычная поддержка',
          subtitle: 'Встречайте иностранных гостей на их языке',
          description: 'Информация доступна на грузинском, русском и английском языках, чтобы путешественники чувствовали себя уверенно.'
        },
        {
          category: 'support',
          title: 'Прямой WhatsApp и экстренная связь 112',
          subtitle: 'WhatsApp в 1 касание и служба спасения',
          description: 'Кнопки звонка и WhatsApp хозяина, телефон службы 112, круглосуточная аптека и контакт управляющего домом.'
        }
      ]
    },
    forPropertiesPage: {
      badge: 'ИНДИВИДУАЛЬНЫЕ РЕШЕНИЯ ДЛЯ ГОСТЕПРИИМСТВА',
      title: 'Создано под ваш формат приёма гостей.',
      subtitle: 'От уютных студий в Тбилиси до горных шале в Казбеги и управляющих компаниями с 50 объектами.',
      solutionTab: '✨ Решение Stumari',
      headachesTab: '⚠️ Решённые проблемы',
      solutionHeader: 'Как Stumari решает задачи',
      headachesHeader: 'Обычные проблемы, о которых вы забудете',
      ctaTitle: 'Готовы попробовать для вашего объекта?',
      ctaSubtitle: 'Создайте ваш первый цифровой гид совершенно бесплатно за 5 минут.',
      ctaBtn: 'Начать бесплатно',
      types: [
        {
          id: 'apartments',
          label: 'Квартиры и апартаменты',
          headline: 'Идеальный спутник для посуточной аренды и Airbnb',
          subhead: 'Сократите повторяющиеся сообщения на 70% и исключите путаницу при заселении.',
          image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
          painPoints: [
            'Гости пишут в 11 вечера с вопросом о пароле от Wi-Fi',
            'Путаница с кодом от кейбокса или умного электронного замка',
            'Панические звонки из-за сложного переключения кондиционера на тепло',
            'Бумажные папки, которые пачкаются, рвутся и теряются'
          ],
          solution: [
            'Копирование пароля Wi-Fi в буфер телефона в 1 касание',
            'Пошаговая инструкция прибытия с фотографиями подъезда и двери',
            'Гид по технике с фото и быстрыми решениями проблем',
            'Подборка любимых мест района, приносящая вам отзывы на 5 звёзд'
          ]
        },
        {
          id: 'guesthouses',
          label: 'Гостевые дома и B&B',
          headline: 'Тёплое гостеприимство в сочетании с современным удобством',
          subhead: 'Поделитесь душой вашего дома, предоставив гостям полную независимость.',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
          painPoints: [
            'Необходимость объяснять время завтрака и правила каждому гостю',
            'Языковой барьер с иностранными туристами при позднем заезде',
            'Поиск баланса между радушием и желанием гостя отдохнуть в тишине'
          ],
          solution: [
            'Приветственные сообщения на грузинском, русском и английском языках',
            'Чёткое расписание завтраков, часов тишины и выезда',
            'Прямая кнопка WhatsApp для связи при необходимости',
            'История дома и рекомендации подлинных ремесленных продуктов'
          ]
        },
        {
          id: 'hotels',
          label: 'Бутик-отели',
          headline: 'Премиальный уровень сервиса без лишнего оборудования',
          subhead: 'Элегантный цифровой справочник на стильных деревянных или акриловых QR/NFC стойках.',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
          painPoints: [
            'Дорогие планшеты в номерах, которые разряжаются, ломаются или пропадают',
            'Стойка регистрации перегружена рутинными вопросами гостей',
            'Устаревшие бумажные папки, перепечатка которых стоит немалых денег'
          ],
          solution: [
            'Гости пользуются собственным смартфоном за 1 секунду по QR или NFC',
            'Консьерж, рум-сервис и правила обновляются мгновенно в пару кликов',
            'Фирменная типографика, гармонирующая с интерьером отеля',
            'Никаких требований скачивать приложение для гостей'
          ]
        },
        {
          id: 'managers',
          label: 'Управляющие компании (Portfolio)',
          headline: 'Единый 5-звёздочный стандарт во всём вашем портфолио',
          subhead: 'Управляйте от 5 до 50+ объектов из единой централизованной панели хозяина.',
          image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80',
          painPoints: [
            'Команда поддержки отвечает на сотни однотипных сообщений еженедельно',
            'Разрозненные материалы в квартирах разных владельцев',
            'Сложность обновления кодов на всех объектах при смене замков'
          ],
          solution: [
            'Единая панель управления для всех объектов недвижимости',
            'Стандартизированная, безупречная структура путеводителя',
            'Обновите код или пароль один раз — и он обновится везде мгновенно',
            'Готовые макеты для печати клининговым бригадам и администраторам'
          ]
        }
      ]
    },
    pricingPage: {
      allPlans: 'Все тарифы (3)',
      mostPopular: '⭐ Самый популярный выбор',
      billedAnnually: '(при оплате за год)',
      month: 'в месяц',
      featuresTitle: 'Что включено:',
      faqTitle: 'Часто задаваемые вопросы',
      faqs: [
        {
          q: 'Нужно ли гостям скачивать приложение?',
          a: 'Ни в коем случае. Stumari открывается прямо в браузере телефона (Safari, Chrome) при сканировании QR-кода или касании NFC. Без логинов и паролей.'
        },
        {
          q: 'Могу ли я распечатать настольные стойки?',
          a: 'Да, Stumari мгновенно создаёт макеты высокого разрешения (A4, 5x7, A6) для настольных стоек, табличек и записи NFC-меток.'
        },
        {
          q: 'Могу ли я менять коды, пока гости живут в квартире?',
          a: 'Да! Любые изменения пароля Wi-Fi, кода двери или правил сразу обновляются на экранах гостей в реальном времени.'
        },
        {
          q: 'Могу ли я отменить подписку в любой момент?',
          a: 'Конечно. Никаких долгосрочных контрактов или комиссий. Вы можете сменить тариф или отменить подписку в 1 клик.'
        }
      ]
    },
    demoPage: {
      badge: 'ИНТЕРАКТИВНОЕ ДЕМО',
      title: 'Попробуйте Stumari глазами гостя.',
      subtitle: 'Именно так выглядит путеводитель, когда гость сканирует QR-стойку или прикладывает телефон. Нажимайте на любые кнопки!',
      propertyLabel: 'Объект:',
      tabDemo: 'Интерактивный живой гид',
      tabJourney: 'Путь гостя за 2 секунды',
      simBadge: 'Интерактивная живая симуляция',
      journeyTitle: 'Путь гостя за 2 секунды',
      steps: [
        {
          step: 1,
          title: 'Гость заходит в квартиру',
          desc: 'Видит стильную настольную QR-стойку или прикладывает телефон к прикроватному диску NFC.'
        },
        {
          step: 2,
          title: 'Мгновенное открытие в браузере',
          desc: 'Без паролей, регистрации и App Store. Работает даже при слабом мобильном интернете.'
        },
        {
          step: 3,
          title: 'Всё необходимое в 1 касание',
          desc: 'Копирование Wi-Fi, инструкция к кондиционеру, винные бары и прямой WhatsApp хозяина.'
        }
      ],
      launchFullscreen: 'Открыть во весь экран',
      createYourOwn: 'Создать путеводитель для своего жилья',
      helperTip: '✨ Нажмите любую кнопку выше, чтобы увидеть реакцию интерфейса',
      openFullscreen: 'Во весь экран'
    }
  },

  // 🇬🇧 ENGLISH
  en: {
    featuresPage: {
      badge: 'STUMARI CORE MVP FEATURES',
      titlePart1: 'Everything your guests need.',
      titleHighlight: 'Nothing they don\'t.',
      subtitle: 'One single, thoughtfully designed digital guide that solves 90% of guest questions before they even ask. No app downloads. No confusing menus.',
      ctaPrimary: 'Create Your Guide in 5 Mins',
      ctaSecondary: 'See Live Guest View',
      categories: {
        all: '✨ All (10)',
        access: '🔑 Access & Wi-Fi',
        house: '🏠 House & Appliances',
        local: '🍷 Local Secrets',
        support: '🛡️ Safety & WhatsApp'
      },
      viewCards: 'Cards',
      viewGrid: 'Grid',
      includedTag: 'Included in all guides',
      disciplineBadge: 'Disciplined Architecture',
      disciplineTitle: 'What makes Stumari fast? What we don\'t build.',
      disciplineDesc: 'Guests don\'t want another chatbot, account registration, or complex booking widget when arriving exhausted with heavy suitcases. They want Wi-Fi, door codes, and hot water instructions in 2 seconds.',
      ctaBannerTitle: 'Ready to upgrade your property\'s guest experience?',
      ctaBannerSubtitle: 'Build your guide in 5 minutes. Print a custom QR code stand for your kitchen counter. Delight your guests.',
      ctaBannerBtn1: 'Get Started Free',
      ctaBannerBtn2: 'Experience Guest Guide',
      features: [
        {
          category: 'access',
          title: 'Digital Guest Guide',
          subtitle: 'Instant PWA without app downloads',
          description: 'Your guests tap or scan and open a tactile mobile guide in 1 second. Clean typography, fast loading, zero passwords, and zero friction on any device.'
        },
        {
          category: 'access',
          title: 'QR + NFC Contactless Access',
          subtitle: '300 DPI print-ready stand builder',
          description: 'Generate high-resolution printable table tents or link physical NFC tags. Guests tap their iPhone or Android and land directly on your property guide.'
        },
        {
          category: 'access',
          title: 'Self Check-in & Check-out',
          subtitle: 'Effortless arrival at any hour',
          description: 'Step-by-step entry instructions, parking diagrams, keypad codes, and lockbox combinations. Departure checklist ensures guests leave the property secured.'
        },
        {
          category: 'access',
          title: '1-Tap Wi-Fi Connection',
          subtitle: 'No more typing 20-character passwords',
          description: 'Guests tap "Copy Password" and paste directly into phone settings. Eliminates the #1 most frequent late-night message hosts receive.'
        },
        {
          category: 'house',
          title: 'House Rules & Quiet Hours',
          subtitle: 'Polite, clear community expectations',
          description: 'Communicate quiet hours, shoe policies, smoking restrictions, and trash disposal in a warm, welcoming tone that neighbors and guests appreciate.'
        },
        {
          category: 'house',
          title: 'How Things Work (Appliances)',
          subtitle: 'Never explain the AC remote again',
          description: 'Foolproof photo guides for air conditioning heating modes, espresso machines, hot water boilers, induction stoves, and soundbars with troubleshooting.'
        },
        {
          category: 'local',
          title: 'Curated Local Secrets',
          subtitle: 'Your personal neighborhood gems',
          description: 'Recommend your favorite neighborhood bakeries, natural wine bars, supermarkets, and late-night pharmacies with walking distances and Google Maps pins.'
        },
        {
          category: 'local',
          title: 'Transport & Airport Guidance',
          subtitle: 'Airport taxi & transit directions',
          description: 'Clear advice on ride-hailing apps (Bolt/Uber), fair airport taxi rates, nearest metro stations, bus routes, and parking garage locations.'
        },
        {
          category: 'support',
          title: 'Multilingual Support',
          subtitle: 'Welcome overseas guests in their language',
          description: 'Provide information in English, Georgian, and Russian so international visitors feel completely confident and cared for.'
        },
        {
          category: 'support',
          title: 'Direct WhatsApp & Emergency Info',
          subtitle: '1-tap WhatsApp and 112 emergency numbers',
          description: 'Direct WhatsApp and phone buttons, emergency contact numbers (112), nearest pharmacy, and building manager details for peace of mind.'
        }
      ]
    },
    forPropertiesPage: {
      badge: 'TAILORED FOR HOSPITALITY',
      title: 'Built for how you host.',
      subtitle: 'Whether you rent a single cozy apartment in Old Tbilisi or manage 20 boutique properties, Stumari scales to your exact setup.',
      solutionTab: '✨ Stumari Solutions',
      headachesTab: '⚠️ Headaches Avoided',
      solutionHeader: 'How Stumari Solves It',
      headachesHeader: 'The Usual Headaches Eliminated',
      ctaTitle: 'Ready to try it for your property?',
      ctaSubtitle: 'Create your first digital guide completely free in 5 minutes.',
      ctaBtn: 'Start Free',
      types: [
        {
          id: 'apartments',
          label: 'Apartments & Lofts',
          headline: 'The perfect companion for Airbnb & short-term apartments',
          subhead: 'Reduce repetitive messaging by 70% and prevent guest confusion during check-in.',
          image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
          painPoints: [
            'Guests constantly texting for the Wi-Fi password at 11 PM',
            'Confusion over lockbox combinations or smart deadbolts',
            'Complex heating/AC controls causing frantic calls',
            'Paper binders that get dirty, misplaced, or torn'
          ],
          solution: [
            'Instant 1-tap Wi-Fi copy directly to phone clipboard',
            'Foolproof step-by-step entry directions with street photos',
            'Appliances manual with photos & quick troubleshooting',
            'Curated neighborhood spots that earn you 5-star reviews'
          ]
        },
        {
          id: 'guesthouses',
          label: 'Guesthouses & B&Bs',
          headline: 'Personal, warm hospitality made effortless & modern',
          subhead: 'Share the soul of your home while giving guests complete autonomy.',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
          painPoints: [
            'Explaining breakfast times and house customs repeatedly to every guest',
            'Language barriers with foreign travelers arriving late at night',
            'Balancing personal warmth with guests who prefer independence'
          ],
          solution: [
            'Multilingual welcome notes in English, Georgian & Russian',
            'Clear daily schedules for breakfast, quiet hours, and checkout',
            'Direct WhatsApp button to connect directly when needed',
            'Story of the house and authentic artisan recommendations'
          ]
        },
        {
          id: 'hotels',
          label: 'Boutique Hotels',
          headline: 'Elevate your guest journey without heavy hardware',
          subhead: 'A sleek digital directory on stylish wooden or acrylic NFC stands.',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
          painPoints: [
            'Expensive in-room tablets that break, discharge, or go missing',
            'Front desk reception overwhelmed with routine inquiries',
            'Outdated printed compendiums that cost thousands to reprint'
          ],
          solution: [
            'Guests use their own smartphones via tap or scan in 1 second',
            'Concierge, room service, and checkout times updated in seconds',
            'Elegant branded typography matching boutique aesthetics',
            'Zero app downloads required by hotel guests'
          ]
        },
        {
          id: 'managers',
          label: 'Portfolio Managers',
          headline: 'Consistent 5-star standard across your entire portfolio',
          subhead: 'Manage 5 to 50+ listings from one single centralized dashboard.',
          image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80',
          painPoints: [
            'Operations team answering hundreds of repetitive messages weekly',
            'Inconsistent welcome materials across different unit owners',
            'Updating codes across multiple units whenever locks change'
          ],
          solution: [
            'One centralized host dashboard for all properties',
            'Standardized, high-standard guide structure across all doors',
            'Update Wi-Fi or door codes once and it updates live everywhere',
            'Export printable flyers ready for cleaners and staging teams'
          ]
        }
      ]
    },
    pricingPage: {
      allPlans: 'All Plans (3)',
      mostPopular: '⭐ Most Popular Choice',
      billedAnnually: '(billed annually)',
      month: 'month',
      featuresTitle: 'What\'s included:',
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        {
          q: 'Do guests need to download an app?',
          a: 'Never. Stumari opens natively in any mobile browser (Safari, Chrome) via QR scan or NFC tap. Zero downloads or logins required.'
        },
        {
          q: 'Can I print physical QR stands?',
          a: 'Yes, Stumari generates high-resolution print flyers (5x7, A4) and vector graphics ready for table stands and NFC writing.'
        },
        {
          q: 'Can I update codes while guests are staying?',
          a: 'Yes! Any changes you make to door codes, Wi-Fi passwords, or check-in instructions update in real-time immediately.'
        },
        {
          q: 'Can I cancel or switch plans anytime?',
          a: 'Absolutely. There are no contracts or cancellation fees. You can upgrade, downgrade, or cancel with one click.'
        }
      ]
    },
    demoPage: {
      badge: 'INTERACTIVE SHOWCASE',
      title: 'Experience Stumari like a guest.',
      subtitle: 'This is the exact tactile experience guests get when they scan your QR stand or tap the NFC disc. Tap any buttons to test!',
      propertyLabel: 'Property:',
      tabDemo: 'Interactive Live Guide',
      tabJourney: '2-Sec Guest Journey',
      simBadge: 'Live Interactive Simulation',
      journeyTitle: 'The 2-Second Guest Journey',
      steps: [
        {
          step: 1,
          title: 'Guest arrives at property',
          desc: 'Sees high-end QR table stand or taps phone on the bedside NFC disc.'
        },
        {
          step: 2,
          title: 'Instant Browser Opening',
          desc: 'No login, no App Store downloads, no passwords. Operates even in low cell service.'
        },
        {
          step: 3,
          title: 'One Tap to Everything',
          desc: '1-tap Wi-Fi copy, AC instructions, local wine spots, and emergency contacts.'
        }
      ],
      launchFullscreen: 'Launch Fullscreen Guide',
      createYourOwn: 'Create Your Own Property Guide',
      helperTip: '✨ Tap any button above to test real interactive response',
      openFullscreen: 'Open fullscreen'
    }
  }
};
