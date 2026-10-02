import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  KeyRound, 
  Wifi, 
  BookOpen, 
  Compass, 
  Phone, 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Image as ImageIcon,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Clock,
  Car,
  Coffee,
  AlertCircle,
  Shirt,
  Tv,
  Thermometer,
  Shield,
  Zap,
  HelpCircle,
  MessageCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Property, PropertyType } from '../../types';
import { StumariArchIcon } from '../common/StumariLogo';
import { LanguageSelector } from '../common/LanguageSelector';

export const OnboardingWizard: React.FC = () => {
  const { createProperty, navigateToPropertyHub, setCurrentRoute, theme, showToast, t, language } = useApp();
  const isDark = theme === 'dark';

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [mobileTab, setMobileTab] = useState<'form' | 'preview'>('form');

  // Form state
  const [formData, setFormData] = useState<Partial<Property>>({
    title: language === 'ka' ? 'მზიანი სოლოლაკის ტერასა' : language === 'ru' ? 'Солнечная терраса в Сололаки' : 'Sunny Sololaki Terrace',
    subtitle: language === 'ka' ? 'მყუდრო აპარტამენტი ძველ თბილისში პანორამული აივნით' : language === 'ru' ? 'Уютные апартаменты в Старом городе с живописным балконом' : 'Charming Old Town apartment with scenic balcony',
    type: 'apartment',
    address: '8 Asatiani Street, Apt 4',
    city: 'Tbilisi',
    country: 'Georgia',
    coverImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    sourcePlatform: 'airbnb',
    sourceUrl: 'https://airbnb.com/rooms/example-listing',

    // Step 2 Arrival
    checkInTime: '3:00 PM',
    checkOutTime: '11:00 AM',
    checkInMethod: 'keypad',
    doorKeypadCode: '4820#',
    lockboxCode: '6192',
    parkingInstructions: 'Free street parking along the street or courtyard space behind building.',
    arrivalDirections: 'Push wooden courtyard gate, walk up iron staircase to 2nd floor, teal door on left.',

    // Step 3 Stay
    wifiNetwork: 'Stumari_Guest_5G',
    wifiPassword: 'WelcomeGuest2026',
    appliances: [
      { id: 'app-ob-1', title: 'Daikin AC & Heating', icon: 'Thermometer', instructions: 'Wall remote in hallway. Set to 22°C for optimal comfort.' },
      { id: 'app-ob-2', title: 'Coffee Machine', icon: 'Coffee', instructions: 'Complimentary beans in glass jar. Press power button and slide lever.' },
      { id: 'app-ob-3', title: 'Washing Machine', icon: 'Shirt', instructions: 'Pods under sink. Turn dial to Quick 30° cycle.' }
    ],

    // Step 4 Rules
    quietHours: '11:00 PM – 8:00 AM',
    trashSchedule: 'Municipal green bins on the corner. Daily pickup after 9 PM.',
    houseRules: [
      'No smoking inside (balcony is fine)',
      'Quiet hours from 11 PM to 8 AM',
      'Please take off shoes at the entryway'
    ],

    // Step 5 Explore & Transport
    recommendations: [
      { id: 'rec-ob-1', name: 'Luka Polare Coffee & Gelato', category: 'coffee', description: 'Best morning espresso and pistacchio gelato.', hostTip: 'Get an iced latte and sit outside.', address: '4 Asatiani St', distance: '2 min walk', mapsUrl: 'https://maps.google.com' },
      { id: 'rec-ob-2', name: 'Ezo Georgian Kitchen', category: 'food', description: 'Authentic organic dishes in an open courtyard.', hostTip: 'Order the Shkmeruli garlic chicken.', address: '16 Kikodze St', distance: '4 min walk', mapsUrl: 'https://maps.google.com' }
    ],
    taxiInfo: 'Download Bolt app for affordable and safe rides around the city.',
    transitInfo: 'Liberty Square Metro Station is a 10-minute stroll.',
    airportTransit: '25 minutes by taxi to Tbilisi International Airport (~35 GEL).',

    // Step 6 Contact
    hostName: 'Saba Beradze',
    hostRole: 'Host & Superhost',
    hostPhone: '+995 555 123 456',
    hostWhatsApp: '+995555123456',
    emergencyContact: '+995 555 987 654 (Nino / Co-host)',
    emergencyServicesNumber: '112'
  });

  const stepTitles = [
    t.onboarding.steps.step1,
    t.onboarding.steps.step2,
    t.onboarding.steps.step3,
    t.onboarding.steps.step4,
    t.propertyHub.guideSections.recommendations,
    t.guestGuide.bento.contact,
    t.propertyHub.tabs.preview
  ];

  // Presets to populate data with 1-click
  const handleApplyPreset = (presetName: 'tbilisi' | 'batumi' | 'kazbegi') => {
    if (presetName === 'tbilisi') {
      setFormData(prev => ({
        ...prev,
        title: 'Sunny Sololaki Terrace',
        subtitle: 'Charming Old Town apartment with scenic balcony',
        type: 'apartment',
        address: '8 Asatiani Street, Apt 4',
        city: 'Tbilisi',
        country: 'Georgia',
        coverImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
        wifiNetwork: 'OldTbilisi_5G',
        wifiPassword: 'TbilisiHost2026',
        doorKeypadCode: '4820#'
      }));
      showToast('Loaded "Old Tbilisi Balcony" preset!');
    } else if (presetName === 'batumi') {
      setFormData(prev => ({
        ...prev,
        title: 'Batumi Boulevard Sea Penthouse',
        subtitle: 'Modern waterfront apartment with Black Sea sunset terrace',
        type: 'apartment',
        address: '15 Rustaveli Ave, 18th Floor',
        city: 'Batumi',
        country: 'Georgia',
        coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        wifiNetwork: 'BatumiSunset_Fiber',
        wifiPassword: 'SeaBreeze2026',
        doorKeypadCode: '9182#'
      }));
      showToast('Loaded "Batumi Sea Penthouse" preset!');
    } else {
      setFormData(prev => ({
        ...prev,
        title: 'Kazbegi Alpine Chalet',
        subtitle: 'Timber mountain retreat with panoramic Mount Kazbek view',
        type: 'villa',
        address: 'Mountain Valley Way 12',
        city: 'Stepantsminda',
        country: 'Georgia',
        coverImage: 'https://images.unsplash.com/photo-1542314831-c6a4d27f8842?auto=format&fit=crop&w=1200&q=80',
        wifiNetwork: 'Kazbek_Starlink_WiFi',
        wifiPassword: 'MountPeak2026',
        doorKeypadCode: '3311#'
      }));
      showToast('Loaded "Kazbegi Alpine Chalet" preset!');
    }
  };

  const handlePublish = () => {
    const created = createProperty(formData);
    showToast(`"${created.title}" successfully created!`);
    navigateToPropertyHub(created.id, 'overview');
  };

  // Calculate readiness score
  const readinessChecklist = [
    { label: 'Title & Address', done: !!formData.title && !!formData.city },
    { label: 'Cover Photo', done: !!formData.coverImage },
    { label: 'Door Keypad Code', done: !!formData.doorKeypadCode },
    { label: 'Wi-Fi Credentials', done: !!formData.wifiPassword },
    { label: 'House Rules', done: (formData.houseRules || []).length > 0 },
    { label: 'Curated Recommendations', done: (formData.recommendations || []).length > 0 },
    { label: 'Host WhatsApp Contact', done: !!formData.hostWhatsApp }
  ];
  const completedCount = readinessChecklist.filter(c => c.done).length;
  const readinessPct = Math.round((completedCount / readinessChecklist.length) * 100);

  return (
    <div className={`min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300 ${
      isDark ? 'bg-[#080B0D] text-stone-100' : 'bg-stone-100 text-stone-900'
    }`}>
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Header Card */}
        <div className={`p-6 sm:p-7 rounded-[32px] border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
          isDark ? 'bg-[#0C1013] border-stone-800 text-stone-100 shadow-xl' : 'bg-white border-stone-200 text-stone-900 shadow-md'
        }`}>
          <div className="flex items-center gap-3.5">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border shadow-xs ${
              isDark ? 'bg-stone-900 border-stone-800 text-[#E4E98E]' : 'bg-[#F5EFEB] border-[#E7DFD5] text-stone-900'
            }`}>
              <StumariArchIcon size={22} className={isDark ? 'text-[#E4E98E]' : 'text-stone-900'} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-serif font-bold tracking-tight">
                  {t.onboarding.title}
                </h1>
                <span className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded-full ${
                  isDark ? 'bg-stone-800 text-[#E4E98E]' : 'bg-stone-100 text-stone-800'
                }`}>
                  {currentStep} / 7
                </span>
              </div>
              <p className={`text-xs mt-0.5 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                {t.onboarding.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <LanguageSelector variant="dropdown" />

            {/* Stepper Progress Badges */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {stepTitles.map((title, idx) => {
                const stepNum = idx + 1;
                const isCompleted = currentStep > stepNum;
                const isCurrent = currentStep === stepNum;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentStep(stepNum)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                      isCurrent
                        ? isDark 
                          ? 'bg-[#E4E98E] text-[#0C1510] shadow-sm' 
                          : 'bg-stone-900 text-white shadow-sm'
                        : isCompleted
                        ? isDark 
                          ? 'bg-stone-800 text-stone-300 hover:text-white' 
                          : 'bg-stone-200 text-stone-700 hover:text-stone-950'
                        : isDark
                        ? 'text-stone-500 hover:text-stone-400'
                        : 'text-stone-400 hover:text-stone-600'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                      isCurrent ? 'bg-black/20 text-current' : isCompleted ? 'bg-emerald-500 text-white' : 'bg-stone-700/40'
                    }`}>
                      {isCompleted ? <Check className="w-2.5 h-2.5" /> : stepNum}
                    </span>
                    <span>{title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile View Toggle: Form vs Live Phone Preview */}
        <div className={`flex sm:hidden items-center justify-center p-1 rounded-2xl border max-w-xs mx-auto mb-4 ${
          isDark ? 'bg-[#14191C] border-stone-800' : 'bg-stone-100 border-stone-200'
        }`}>
          <button
            onClick={() => setMobileTab('form')}
            className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
              mobileTab === 'form' 
                ? isDark ? 'bg-[#E4E98E] text-[#0C1510] shadow-xs' : 'bg-stone-900 text-white shadow-xs' 
                : isDark ? 'text-stone-400' : 'text-stone-600'
            }`}
          >
            Form (Step {currentStep}/7)
          </button>
          <button
            onClick={() => setMobileTab('preview')}
            className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
              mobileTab === 'preview' 
                ? isDark ? 'bg-[#E4E98E] text-[#0C1510] shadow-xs' : 'bg-stone-900 text-white shadow-xs' 
                : isDark ? 'text-stone-400' : 'text-stone-600'
            }`}
          >
            📱 Live Preview
          </button>
        </div>

        {/* Asymmetric Bento Workspace: Form Card + Preview & Presets Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Form Bento Card (Span 7 cols) */}
          <div className={`lg:col-span-7 ${mobileTab === 'form' ? 'flex' : 'hidden lg:flex'} p-6 sm:p-8 rounded-[36px] border transition-all flex-col justify-between ${
            isDark ? 'bg-[#0C1013] border-stone-800 text-stone-100 shadow-2xl' : 'bg-white border-stone-200 text-stone-900 shadow-xl'
          }`}>
            
            {/* Step 1: Property Identity */}
            {currentStep === 1 && (
              <div className="space-y-5 animate-in fade-in">
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider font-bold block mb-1 ${
                    isDark ? 'text-[#E4E98E]' : 'text-amber-600'
                  }`}>
                    Step 1 · Basic Property Identity
                  </span>
                  <h3 className="text-2xl font-serif font-bold">What is your property called?</h3>
                  <p className={`text-xs mt-1 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                    Enter the public title and address your guests will see.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className={`font-bold block mb-1.5 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                      Property Title / Listing Name
                    </label>
                    <input
                      type="text"
                      value={formData.title || ''}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border transition-all text-sm font-medium focus:outline-none focus:ring-2 ${
                        isDark 
                          ? 'bg-[#14191C] border-stone-700 text-white focus:ring-[#E4E98E]/50' 
                          : 'bg-stone-50 border-stone-300 text-stone-900 focus:ring-amber-500'
                      }`}
                      placeholder="e.g. Sunny Sololaki Balcony Loft"
                    />
                  </div>

                  <div>
                    <label className={`font-bold block mb-1.5 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                      Subtitle / Catchphrase
                    </label>
                    <input
                      type="text"
                      value={formData.subtitle || ''}
                      onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border transition-all text-sm font-medium focus:outline-none focus:ring-2 ${
                        isDark 
                          ? 'bg-[#14191C] border-stone-700 text-white focus:ring-[#E4E98E]/50' 
                          : 'bg-stone-50 border-stone-300 text-stone-900 focus:ring-amber-500'
                      }`}
                      placeholder="e.g. Historic courtyard apartment with panoramic city views"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className={`font-bold block mb-1.5 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                        Property Type
                      </label>
                      <select
                        value={formData.type || 'apartment'}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value as PropertyType })}
                        className={`w-full px-4 py-3 rounded-2xl border transition-all text-sm font-medium focus:outline-none focus:ring-2 ${
                          isDark 
                            ? 'bg-[#14191C] border-stone-700 text-white focus:ring-[#E4E98E]/50' 
                            : 'bg-stone-50 border-stone-300 text-stone-900 focus:ring-amber-500'
                        }`}
                      >
                        <option value="apartment">Apartment</option>
                        <option value="guesthouse">Guesthouse</option>
                        <option value="hotel">Boutique Hotel</option>
                        <option value="villa">Villa / Chalet</option>
                      </select>
                    </div>

                    <div>
                      <label className={`font-bold block mb-1.5 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                        City & Country
                      </label>
                      <input
                        type="text"
                        value={`${formData.city || ''}, ${formData.country || ''}`}
                        onChange={(e) => {
                          const parts = e.target.value.split(',');
                          setFormData({ 
                            ...formData, 
                            city: parts[0]?.trim() || '', 
                            country: parts[1]?.trim() || '' 
                          });
                        }}
                        className={`w-full px-4 py-3 rounded-2xl border transition-all text-sm font-medium focus:outline-none focus:ring-2 ${
                          isDark 
                            ? 'bg-[#14191C] border-stone-700 text-white focus:ring-[#E4E98E]/50' 
                            : 'bg-stone-50 border-stone-300 text-stone-900 focus:ring-amber-500'
                        }`}
                        placeholder="e.g. Tbilisi, Georgia"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`font-bold block mb-1.5 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                      Cover Photo URL
                    </label>
                    <input
                      type="text"
                      value={formData.coverImage || ''}
                      onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border transition-all text-sm font-medium focus:outline-none focus:ring-2 ${
                        isDark 
                          ? 'bg-[#14191C] border-stone-700 text-white focus:ring-[#E4E98E]/50' 
                          : 'bg-stone-50 border-stone-300 text-stone-900 focus:ring-amber-500'
                      }`}
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Arrival & Check-in */}
            {currentStep === 2 && (
              <div className="space-y-5 animate-in fade-in">
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider font-bold block mb-1 ${
                    isDark ? 'text-[#E4E98E]' : 'text-amber-600'
                  }`}>
                    Step 2 · Arrival & Keypad
                  </span>
                  <h3 className="text-2xl font-serif font-bold">Check-in times & door access</h3>
                  <p className={`text-xs mt-1 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                    Give exhausted guests clear access instructions so they never get stranded.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-3.5">
                    <div>
                      <label className={`font-bold block mb-1.5 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                        Check-in Time
                      </label>
                      <input
                        type="text"
                        value={formData.checkInTime || '3:00 PM'}
                        onChange={(e) => setFormData({ ...formData, checkInTime: e.target.value })}
                        className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                          isDark ? 'bg-[#14191C] border-stone-700 text-white focus:ring-[#E4E98E]/50' : 'bg-stone-50 border-stone-300 text-stone-900 focus:ring-amber-500'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`font-bold block mb-1.5 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                        Check-out Time
                      </label>
                      <input
                        type="text"
                        value={formData.checkOutTime || '11:00 AM'}
                        onChange={(e) => setFormData({ ...formData, checkOutTime: e.target.value })}
                        className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium focus:outline-none focus:ring-2 ${
                          isDark ? 'bg-[#14191C] border-stone-700 text-white focus:ring-[#E4E98E]/50' : 'bg-stone-50 border-stone-300 text-stone-900 focus:ring-amber-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div className={`p-4 rounded-2xl border space-y-3 ${
                    isDark ? 'bg-[#14191C] border-stone-700/80' : 'bg-stone-50 border-stone-200'
                  }`}>
                    <label className={`font-bold block ${isDark ? 'text-white' : 'text-stone-900'}`}>
                      Door Keypad Pin Code
                    </label>
                    <input
                      type="text"
                      value={formData.doorKeypadCode || ''}
                      onChange={(e) => setFormData({ ...formData, doorKeypadCode: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-base font-mono font-bold tracking-widest ${
                        isDark ? 'bg-[#1B2226] border-stone-600 text-[#E4E98E]' : 'bg-white border-stone-300 text-stone-900'
                      }`}
                      placeholder="e.g. 4820#"
                    />
                    <span className={`text-[11px] block ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                      Tip: Include '#' or '*' if required to unlock the physical deadbolt.
                    </span>
                  </div>

                  <div>
                    <label className={`font-bold block mb-1.5 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                      Arrival Directions / Gate Code
                    </label>
                    <textarea
                      rows={3}
                      value={formData.arrivalDirections || ''}
                      onChange={(e) => setFormData({ ...formData, arrivalDirections: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium focus:outline-none focus:ring-2 ${
                        isDark ? 'bg-[#14191C] border-stone-700 text-white focus:ring-[#E4E98E]/50' : 'bg-stone-50 border-stone-300 text-stone-900 focus:ring-amber-500'
                      }`}
                      placeholder="e.g. Push the carved courtyard door, go up the spiraled stairs to the 2nd floor, blue door on right."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Stay & Wi-Fi */}
            {currentStep === 3 && (
              <div className="space-y-5 animate-in fade-in">
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider font-bold block mb-1 ${
                    isDark ? 'text-[#E4E98E]' : 'text-amber-600'
                  }`}>
                    Step 3 · Stay Essentials
                  </span>
                  <h3 className="text-2xl font-serif font-bold">1-Tap Wi-Fi & Appliances</h3>
                  <p className={`text-xs mt-1 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                    Guests can copy the Wi-Fi password with 1 tap or scan the router QR.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className={`p-4 rounded-2xl border space-y-3.5 ${
                    isDark ? 'bg-[#14191C] border-stone-700/80' : 'bg-stone-50 border-stone-200'
                  }`}>
                    <div>
                      <label className={`font-bold block mb-1 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                        Wi-Fi Network Name (SSID)
                      </label>
                      <input
                        type="text"
                        value={formData.wifiNetwork || ''}
                        onChange={(e) => setFormData({ ...formData, wifiNetwork: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm font-semibold ${
                          isDark ? 'bg-[#1B2226] border-stone-600 text-white' : 'bg-white border-stone-300 text-stone-900'
                        }`}
                        placeholder="e.g. Stumari_Guest_5G"
                      />
                    </div>

                    <div>
                      <label className={`font-bold block mb-1 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                        Wi-Fi Password
                      </label>
                      <input
                        type="text"
                        value={formData.wifiPassword || ''}
                        onChange={(e) => setFormData({ ...formData, wifiPassword: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm font-mono font-bold ${
                          isDark ? 'bg-[#1B2226] border-stone-600 text-emerald-400' : 'bg-white border-stone-300 text-emerald-600'
                        }`}
                        placeholder="e.g. WelcomeGuest2026"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`font-bold block mb-2 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                      Key Appliances (AC, Coffee, Washer)
                    </label>
                    <div className="space-y-2">
                      {(formData.appliances || []).map((app, idx) => (
                        <div key={idx} className={`p-3 rounded-2xl border flex items-center justify-between gap-3 ${
                          isDark ? 'bg-[#14191C] border-stone-800' : 'bg-white border-stone-200'
                        }`}>
                          <div className="min-w-0">
                            <span className="font-bold block text-xs truncate">{app.title}</span>
                            <span className="text-[11px] text-stone-400 truncate block">{app.instructions}</span>
                          </div>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${
                            isDark ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-600'
                          }`}>
                            Active
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: House Rules */}
            {currentStep === 4 && (
              <div className="space-y-5 animate-in fade-in">
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider font-bold block mb-1 ${
                    isDark ? 'text-[#E4E98E]' : 'text-amber-600'
                  }`}>
                    Step 4 · Peaceful Hospitality
                  </span>
                  <h3 className="text-2xl font-serif font-bold">House Rules & Quiet Hours</h3>
                  <p className={`text-xs mt-1 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                    Set clear expectations for quiet hours, smoking, and garbage disposal.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className={`font-bold block mb-1.5 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                      Quiet Hours
                    </label>
                    <input
                      type="text"
                      value={formData.quietHours || '11:00 PM – 8:00 AM'}
                      onChange={(e) => setFormData({ ...formData, quietHours: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium ${
                        isDark ? 'bg-[#14191C] border-stone-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`font-bold block mb-1.5 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                      Trash & Recycling Instructions
                    </label>
                    <textarea
                      rows={2}
                      value={formData.trashSchedule || ''}
                      onChange={(e) => setFormData({ ...formData, trashSchedule: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-xs font-medium ${
                        isDark ? 'bg-[#14191C] border-stone-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`font-bold block mb-2 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                      House Rules List
                    </label>
                    <div className="space-y-2">
                      {(formData.houseRules || []).map((rule, idx) => (
                        <div key={idx} className={`p-3 rounded-2xl border flex items-center gap-2.5 text-xs ${
                          isDark ? 'bg-[#14191C] border-stone-800' : 'bg-white border-stone-200'
                        }`}>
                          <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-bold text-xs shrink-0">
                            ✓
                          </span>
                          <span>{rule}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Explore & Recommendations */}
            {currentStep === 5 && (
              <div className="space-y-5 animate-in fade-in">
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider font-bold block mb-1 ${
                    isDark ? 'text-[#E4E98E]' : 'text-amber-600'
                  }`}>
                    Step 5 · Local Secrets
                  </span>
                  <h3 className="text-2xl font-serif font-bold">Curated Neighborhood Spots</h3>
                  <p className={`text-xs mt-1 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                    Give your guests local insider recommendations they'll rave about in reviews.
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  {(formData.recommendations || []).map((rec, idx) => (
                    <div key={idx} className={`p-4 rounded-2xl border ${
                      isDark ? 'bg-[#14191C] border-stone-800' : 'bg-white border-stone-200'
                    }`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm">{rec.name}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full capitalize ${
                          isDark ? 'bg-stone-800 text-amber-300' : 'bg-amber-100 text-amber-900'
                        }`}>
                          {rec.category}
                        </span>
                      </div>
                      <p className="text-stone-400 text-xs mb-1.5">{rec.description}</p>
                      <div className={`p-2 rounded-xl text-[11px] ${
                        isDark ? 'bg-[#1C2327] text-stone-300' : 'bg-stone-50 text-stone-700'
                      }`}>
                        <strong>Host insider tip:</strong> {rec.hostTip}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: Contact */}
            {currentStep === 6 && (
              <div className="space-y-5 animate-in fade-in">
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider font-bold block mb-1 ${
                    isDark ? 'text-[#E4E98E]' : 'text-amber-600'
                  }`}>
                    Step 6 · Direct Communication
                  </span>
                  <h3 className="text-2xl font-serif font-bold">Host & Emergency Contact</h3>
                  <p className={`text-xs mt-1 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                    1-tap WhatsApp chat button for instant questions and 112 emergency dialing.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className={`font-bold block mb-1.5 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                        Host Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.hostName || ''}
                        onChange={(e) => setFormData({ ...formData, hostName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium ${
                          isDark ? 'bg-[#14191C] border-stone-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`font-bold block mb-1.5 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                        WhatsApp Number (with country code)
                      </label>
                      <input
                        type="text"
                        value={formData.hostWhatsApp || ''}
                        onChange={(e) => setFormData({ ...formData, hostWhatsApp: e.target.value })}
                        className={`w-full px-4 py-3 rounded-2xl border text-sm font-mono font-semibold ${
                          isDark ? 'bg-[#14191C] border-stone-700 text-emerald-400' : 'bg-stone-50 border-stone-300 text-emerald-600'
                        }`}
                        placeholder="+995 555 123 456"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`font-bold block mb-1.5 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                      Emergency Secondary Contact
                    </label>
                    <input
                      type="text"
                      value={formData.emergencyContact || ''}
                      onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm font-medium ${
                        isDark ? 'bg-[#14191C] border-stone-700 text-white' : 'bg-stone-50 border-stone-300 text-stone-900'
                      }`}
                      placeholder="e.g. +995 555 987 654 (Building Manager)"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 7: Ready to Launch */}
            {currentStep === 7 && (
              <div className="space-y-5 animate-in fade-in">
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider font-bold block mb-1 text-emerald-500`}>
                    Step 7 · Final Review
                  </span>
                  <h3 className="text-2xl font-serif font-bold">Your Stumari is ready to go live!</h3>
                  <p className={`text-xs mt-1 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                    Publish now to generate your QR placards, download printable flyers, and share with your guests.
                  </p>
                </div>

                <div className={`p-5 rounded-3xl border space-y-3.5 ${
                  isDark ? 'bg-[#14191C] border-stone-800' : 'bg-stone-50 border-stone-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-lg">{formData.title}</h4>
                      <p className="text-xs text-stone-400">{formData.city}, {formData.country} · {formData.type}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold text-xs">
                      100% Configured
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-[#1B2226] border-stone-700' : 'bg-white border-stone-200'}`}>
                      <span className="text-[10px] text-stone-400 block">Wi-Fi:</span>
                      <strong className="truncate block">{formData.wifiNetwork}</strong>
                    </div>
                    <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-[#1B2226] border-stone-700' : 'bg-white border-stone-200'}`}>
                      <span className="text-[10px] text-stone-400 block">Keypad:</span>
                      <strong className="truncate block text-amber-500 font-mono">{formData.doorKeypadCode}</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className={`mt-8 pt-6 border-t flex items-center justify-between ${
              isDark ? 'border-stone-800' : 'border-stone-200'
            }`}>
              <button
                type="button"
                disabled={currentStep === 1}
                onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  currentStep === 1 
                    ? 'opacity-30 cursor-not-allowed' 
                    : isDark 
                      ? 'bg-stone-900 hover:bg-stone-800 text-stone-300' 
                      : 'bg-stone-200 hover:bg-stone-300 text-stone-800'
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{t.onboarding.buttons.back}</span>
              </button>

              {currentStep < 7 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(prev => Math.min(7, prev + 1))}
                  className={`px-6 py-2.5 rounded-full font-bold text-xs shadow-md transition-all flex items-center gap-1.5 active:scale-95 ${
                    isDark 
                      ? 'bg-[#E4E98E] hover:bg-[#d9de7d] text-[#0C1510]' 
                      : 'bg-stone-950 hover:bg-stone-850 text-white'
                  }`}
                >
                  <span>{t.onboarding.buttons.continue}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handlePublish}
                  className="px-7 py-2.5 rounded-full font-bold text-xs shadow-lg bg-emerald-500 hover:bg-emerald-400 text-white transition-all flex items-center gap-2 active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{t.onboarding.buttons.finishAndLaunch}</span>
                </button>
              )}
            </div>

          </div>

          {/* Right Bento Sidebar: Live Guest Mirror Card + Starter Presets Card (Span 5 cols) */}
          <div className={`lg:col-span-5 space-y-5 ${mobileTab === 'preview' ? 'block' : 'hidden lg:block'}`}>
            
            {/* Bento Card A: Real-Time Live Guest Guide Mirror */}
            <div className={`p-6 rounded-[36px] border transition-all ${
              isDark ? 'bg-[#0C1013] border-stone-800 text-stone-100 shadow-xl' : 'bg-white border-stone-200 text-stone-900 shadow-md'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${
                  isDark ? 'bg-stone-800 text-[#E4E98E]' : 'bg-stone-100 text-stone-800'
                }`}>
                  Live Guest View
                </span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-500 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Real-time Mirror
                </span>
              </div>

              {/* Smartphone Card Frame */}
              <div className={`rounded-[28px] overflow-hidden border shadow-inner ${
                isDark ? 'bg-[#14191C] border-stone-800' : 'bg-stone-50 border-stone-200'
              }`}>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={formData.coverImage || 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'}
                    alt="Cover preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#E4E98E]">
                      {formData.city || 'Tbilisi'}, {formData.country || 'Georgia'}
                    </span>
                    <h4 className="text-base font-serif font-bold text-white leading-tight">
                      {formData.title || 'Untitled Property'}
                    </h4>
                  </div>
                </div>

                <div className="p-4 space-y-2.5 text-xs">
                  {/* Wi-Fi Pill */}
                  <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
                    isDark ? 'bg-[#1C2327] border-stone-700 text-white' : 'bg-white border-stone-200 text-stone-900'
                  }`}>
                    <div className="flex items-center gap-2">
                      <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-bold text-[11px] truncate">{formData.wifiNetwork || 'Wi-Fi Name'}</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-500 font-bold">1-Tap Copy</span>
                  </div>

                  {/* Door Keypad Pill */}
                  <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
                    isDark ? 'bg-[#1C2327] border-stone-700 text-white' : 'bg-white border-stone-200 text-stone-900'
                  }`}>
                    <div className="flex items-center gap-2">
                      <KeyRound className="w-3.5 h-3.5 text-amber-500" />
                      <span className="font-bold text-[11px]">Door Code:</span>
                    </div>
                    <span className="text-[11px] font-mono text-amber-500 font-bold">{formData.doorKeypadCode || '----'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card B: Quick 1-Click Starter Presets */}
            <div className={`p-6 rounded-[36px] border transition-all ${
              isDark ? 'bg-[#0C1013] border-stone-800 text-stone-100 shadow-xl' : 'bg-white border-stone-200 text-stone-900 shadow-md'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${
                  isDark ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30' : 'bg-amber-100 text-amber-900'
                }`}>
                  Instant Presets
                </span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </div>

              <h4 className="text-sm font-serif font-bold mb-1">
                Load Realistic Sample Data
              </h4>
              <p className={`text-xs mb-3 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                Click any preset to immediately test the complete wizard:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => handleApplyPreset('tbilisi')}
                  className={`p-3 rounded-2xl border text-left transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    isDark 
                      ? 'bg-[#282115] border-amber-500/30 text-amber-100 hover:border-amber-400' 
                      : 'bg-[#FDF0D5] border-[#F6E0B3] text-[#2C1F0D] hover:border-amber-400'
                  }`}
                >
                  <span className="text-[11px] font-bold block truncate">Tbilisi Loft</span>
                  <span className="text-[9px] opacity-75 block truncate">Old Town Terrace</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleApplyPreset('batumi')}
                  className={`p-3 rounded-2xl border text-left transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    isDark 
                      ? 'bg-[#182733] border-[#92B1C9]/30 text-stone-100 hover:border-[#92B1C9]' 
                      : 'bg-[#E3EDF4] border-[#C9DEED] text-[#0F2230] hover:border-[#92B1C9]'
                  }`}
                >
                  <span className="text-[11px] font-bold block truncate">Batumi Penthouse</span>
                  <span className="text-[9px] opacity-75 block truncate">Sea Boulevard</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleApplyPreset('kazbegi')}
                  className={`p-3 rounded-2xl border text-left transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    isDark 
                      ? 'bg-[#1E2B1C] border-[#859768]/30 text-stone-100 hover:border-[#859768]' 
                      : 'bg-[#E5ECE0] border-[#CFDEC7] text-[#192A17] hover:border-[#859768]'
                  }`}
                >
                  <span className="text-[11px] font-bold block truncate">Kazbegi Chalet</span>
                  <span className="text-[9px] opacity-75 block truncate">Alpine Retreat</span>
                </button>
              </div>
            </div>

            {/* Bento Card C: Guidebook Readiness Meter */}
            <div className={`p-6 rounded-[36px] border transition-all ${
              isDark ? 'bg-[#14191C] border-stone-800 text-stone-100 shadow-xl' : 'bg-white border-stone-200 text-stone-900 shadow-md'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${
                  readinessPct === 100 
                    ? 'bg-emerald-500/20 text-emerald-400' 
                    : isDark ? 'bg-stone-800 text-[#E4E98E]' : 'bg-stone-100 text-stone-800'
                }`}>
                  Readiness Score: {readinessPct}%
                </span>
                <span className="text-xs font-mono font-bold text-stone-400">{completedCount}/7 checks</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-stone-700/40 overflow-hidden mb-3">
                <div 
                  className="h-full bg-[#E4E98E] transition-all duration-500" 
                  style={{ width: `${readinessPct}%` }}
                />
              </div>

              <div className="space-y-1.5 text-xs">
                {readinessChecklist.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-[11px]">
                    <span className={item.done ? 'text-stone-300' : 'text-stone-500'}>{item.label}</span>
                    <span className={item.done ? 'text-emerald-400 font-bold' : 'text-stone-600'}>
                      {item.done ? '✓ Done' : '○ Pending'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
