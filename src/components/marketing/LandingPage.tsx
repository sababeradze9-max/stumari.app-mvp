import React, { useState } from 'react';
import { 
  Smartphone, 
  QrCode, 
  Wifi, 
  KeyRound, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  TrendingUp, 
  Layers, 
  MessageCircle, 
  ExternalLink,
  Copy,
  Check,
  Zap,
  Sparkles,
  Compass,
  FileText,
  Heart,
  ChevronRight,
  Shield,
  ArrowUpRight,
  Radio,
  Coffee,
  Sun,
  Moon
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { StumariArchIcon } from '../common/StumariLogo';

export const LandingPage: React.FC = () => {
  const { setCurrentRoute, navigateToGuestGuide, currentProperty, theme, showToast, t, language } = useApp();
  const isDark = theme === 'dark';

  const [activePropertyType, setActivePropertyType] = useState<'apartment' | 'villa' | 'hotel' | 'guesthouse'>('apartment');
  const [copiedWifi, setCopiedWifi] = useState(false);
  const [copiedKeypad, setCopiedKeypad] = useState(false);
  const [mobileBentoFilter, setMobileBentoFilter] = useState<'all' | 'demo' | 'automation' | 'proof'>('all');

  const handleCopyWifi = () => {
    navigator.clipboard.writeText('TbilisiGuest_5G');
    setCopiedWifi(true);
    showToast(t.common.copied);
    setTimeout(() => setCopiedWifi(false), 2000);
  };

  const handleCopyKeypad = () => {
    navigator.clipboard.writeText('4820#');
    setCopiedKeypad(true);
    showToast(t.common.copied);
    setTimeout(() => setCopiedKeypad(false), 2000);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      isDark ? 'bg-[#080B0D] text-stone-100' : 'bg-stone-50 text-stone-900'
    }`}>
      
      {/* 1. HERO BENTO SECTION */}
      <section className="pt-8 sm:pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Top Kicker & Editorial Header */}
        <div className="max-w-3xl mb-8 space-y-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold transition-colors ${
            isDark 
              ? 'bg-[#E4E98E]/15 text-[#E4E98E] border border-[#E4E98E]/30' 
              : 'bg-stone-900 text-white'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E4E98E] animate-pulse" />
            <span>{t.marketing.hero.badge}</span>
          </div>

          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.08] ${
            isDark ? 'text-white' : 'text-stone-950'
          }`}>
            {t.marketing.hero.titlePart1} <br className="hidden sm:inline" />
            <span className={isDark ? 'text-[#E4E98E]' : 'text-stone-700'}>{t.marketing.hero.titleHighlight}</span> {t.marketing.hero.titlePart2}
          </h1>

          <p className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
            isDark ? 'text-stone-300' : 'text-stone-600'
          }`}>
            {t.marketing.hero.subtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setCurrentRoute('/onboarding')}
              className={`px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition-all flex items-center gap-2 active:scale-95 ${
                isDark 
                  ? 'bg-[#E4E98E] hover:bg-[#d9de7d] text-[#0C1510]' 
                  : 'bg-stone-950 hover:bg-stone-850 text-white'
              }`}
            >
              <span>{t.marketing.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCurrentRoute('/demo')}
              className={`px-5 py-3.5 rounded-full font-semibold text-sm border transition-all flex items-center gap-2 ${
                isDark 
                  ? 'bg-stone-900/80 hover:bg-stone-850 text-stone-200 border-stone-800' 
                  : 'bg-white hover:bg-stone-100 text-stone-800 border-stone-300 shadow-2xs'
              }`}
            >
              <span>{t.marketing.hero.secondaryCta}</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </button>

            <div className={`flex items-center gap-4 text-xs ml-0 sm:ml-2 mt-2 sm:mt-0 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{t.marketing.hero.trustText}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Bento Category Filter Pills (Eliminates endless scrolling on phone) */}
        <div className="flex sm:hidden items-center gap-1.5 overflow-x-auto no-scrollbar py-2">
          {[
            { 
              id: 'all', 
              label: language === 'ka' ? '✨ მთავარი' : language === 'ru' ? '✨ Главное' : '✨ All Highlights' 
            },
            { 
              id: 'demo', 
              label: language === 'ka' ? '📱 ცოცხალი დემო' : language === 'ru' ? '📱 Демо гостя' : '📱 Live Guest Demo' 
            },
            { 
              id: 'automation', 
              label: language === 'ka' ? '⚡ სიმშვიდე' : language === 'ru' ? '⚡ Спокойствие' : '⚡ Host Superpowers' 
            },
            { 
              id: 'proof', 
              label: language === 'ka' ? '⭐ 5-ვარსკვლავიანი' : language === 'ru' ? '⭐ 5 звёзд' : '⭐ 5-Star Reviews' 
            }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setMobileBentoFilter(f.id as any)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
                mobileBentoFilter === f.id
                  ? isDark ? 'bg-[#E4E98E] text-[#0C1510] shadow-xs' : 'bg-stone-900 text-white shadow-xs'
                  : isDark ? 'bg-stone-900 text-stone-400 border border-stone-800' : 'bg-stone-100 text-stone-600 border border-stone-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* 2. DIVERSE SIZED CARDS BENTO GRID (Coordinated Pastel System matching Host SaaS) */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-5">
          
          {/* Bento Card 1 (WIDE HERO): Live Interactive Guide Phone Mockup */}
          {(mobileBentoFilter === 'all' || mobileBentoFilter === 'demo') && (
            <div className={`col-span-2 md:col-span-8 p-4 sm:p-8 rounded-[28px] sm:rounded-[36px] border transition-all relative overflow-hidden flex flex-col justify-between ${
              isDark 
                ? 'bg-[#0C1013] border-stone-800/80 shadow-2xl text-stone-100' 
                : 'bg-white border-stone-200/90 shadow-xl text-stone-900'
            }`}>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 z-10">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-[10px] uppercase font-mono tracking-wider font-bold px-2 py-0.5 rounded-full ${
                    isDark ? 'bg-stone-800 text-[#E4E98E]' : 'bg-[#E4E98E]/30 text-[#1C2618] border border-[#E4E98E]/50'
                  }`}>
                    {language === 'ka' ? 'სტუმრის ციფრული გიდი' : language === 'ru' ? 'Вид путеводителя для гостя' : 'Live Guest Guide Preview'}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-500 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    {language === 'ka' ? 'ინტერაქტიული' : language === 'ru' ? 'Интерактивно' : 'Interactive'}
                  </span>
                </div>
                <h3 className={`text-xl sm:text-3xl font-serif font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>
                  {language === 'ka' ? 'რას ხედავენ თქვენი სტუმრები მოსვლისთანავე' : language === 'ru' ? 'Что видят ваши гости сразу по прибытии' : 'What your guests see the moment they arrive'}
                </h3>
                <p className={`text-xs sm:text-sm mt-1 max-w-md ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                  {language === 'ka' ? 'ჩამოტვირთვის გარეშე. სკანირდება სამზარეულოს QR სადგამიდან ან NFC შეხებით.' : language === 'ru' ? 'Без скачивания. Сканируется с настольной стойки или касанием NFC.' : 'No app download. Scanned from an acrylic kitchen counter stand or tapped via nightstand NFC.'}
                </p>
              </div>

              <button
                onClick={() => navigateToGuestGuide(currentProperty.slug)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 self-start ${
                  isDark 
                    ? 'bg-[#E4E98E] text-[#0C1510] hover:bg-[#d9de7d]' 
                    : 'bg-stone-900 text-white hover:bg-stone-850'
                }`}
              >
                <span>{language === 'ka' ? 'სრულ ეკრანზე ნახვა' : language === 'ru' ? 'Открыть во весь экран' : 'Full screen test'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Interactive Nested Phone Experience Card */}
            <div className={`p-3.5 sm:p-5 rounded-[24px] sm:rounded-[28px] border transition-all ${
              isDark 
                ? 'bg-[#14191C] border-stone-800/90 shadow-inner' 
                : 'bg-stone-50 border-stone-200/90 shadow-inner'
            }`}>
              
              {/* Phone Hero Image with Badges */}
              <div className="relative h-36 sm:h-52 rounded-2xl overflow-hidden mb-3">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                  alt="Sunny Old Town Balcony"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                <div className="absolute bottom-2.5 sm:bottom-3 left-3 right-3 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-[#E4E98E]">Tbilisi · Old Town</span>
                    <h4 className="text-sm sm:text-lg font-serif font-bold text-white truncate max-w-[200px] sm:max-w-none">Old Tbilisi Panoramic Terrace</h4>
                    <p className="text-[10px] sm:text-[11px] text-stone-300">Hosted by Saba · Superhost ★ 4.98</p>
                  </div>
                  <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-emerald-500/90 text-white text-[9px] sm:text-[10px] font-bold shadow-xs shrink-0">
                    Live Verified
                  </span>
                </div>
              </div>

              {/* 1-Tap Interactive Wi-Fi Card Inside Guide (Soft Mint Seafoam) */}
              <div className={`p-3 sm:p-3.5 rounded-2xl border flex items-center justify-between gap-2.5 mb-2.5 transition-colors ${
                isDark 
                  ? 'bg-[#132A23] border-emerald-500/30 text-white' 
                  : 'bg-[#D7EFE7] border-[#B8E4D5] text-[#0A2D22] shadow-xs'
              }`}>
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-600/15 text-emerald-800'
                  }`}>
                    <Wifi className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className={`text-[9px] uppercase font-mono tracking-wider font-bold block ${
                      isDark ? 'text-emerald-400' : 'text-emerald-800'
                    }`}>
                      1-Tap Wi-Fi Password
                    </span>
                    <span className="text-xs font-bold font-mono truncate block">OldTbilisi_Guest_5G</span>
                  </div>
                </div>
                <button
                  onClick={handleCopyWifi}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1 shrink-0 transition-transform active:scale-95 shadow-xs ${
                    isDark ? 'bg-emerald-500 text-white hover:bg-emerald-400' : 'bg-[#0A2D22] text-white hover:bg-[#123e30]'
                  }`}
                >
                  {copiedWifi ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedWifi ? 'Copied!' : 'Copy Key'}</span>
                </button>
              </div>

              {/* 4 Mini Action Cards with Matched Pastel Colors */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {/* 1. Door Keypad (Warm Peach / Gold) */}
                <div 
                  onClick={handleCopyKeypad}
                  className={`p-2.5 rounded-xl border cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    isDark 
                      ? 'bg-[#282115] border-amber-500/30 text-amber-100 hover:border-amber-400' 
                      : 'bg-[#FDF0D5] border-[#F6E0B3] text-[#2C1F0D] hover:border-amber-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <KeyRound className="w-3.5 h-3.5 text-amber-500" />
                    <span className="text-[9px] font-mono opacity-70">Door Code</span>
                  </div>
                  <span className="text-[11px] font-bold block truncate">Front Door Pin</span>
                  <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400">
                    {copiedKeypad ? 'Copied!' : '4820#'}
                  </span>
                </div>

                {/* 2. Appliances (Sage Green) */}
                <div 
                  onClick={() => setCurrentRoute('/demo')}
                  className={`p-2.5 rounded-xl border cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    isDark 
                      ? 'bg-[#1E2B1C] border-[#859768]/30 text-stone-100' 
                      : 'bg-[#E5ECE0] border-[#CFDEC7] text-[#192A17]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <Coffee className="w-3.5 h-3.5 text-[#859768]" />
                    <span className="text-[9px] font-mono opacity-70">Guide</span>
                  </div>
                  <span className="text-[11px] font-bold block truncate">Appliances</span>
                  <span className="text-[10px] opacity-70">AC & Coffee</span>
                </div>

                {/* 3. House Rules (Soft Slate Blue) */}
                <div 
                  onClick={() => setCurrentRoute('/demo')}
                  className={`p-2.5 rounded-xl border cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    isDark 
                      ? 'bg-[#182733] border-[#92B1C9]/30 text-stone-100' 
                      : 'bg-[#E3EDF4] border-[#C9DEED] text-[#0F2230]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <Shield className="w-3.5 h-3.5 text-[#92B1C9]" />
                    <span className="text-[9px] font-mono opacity-70">Rules</span>
                  </div>
                  <span className="text-[11px] font-bold block truncate">House Rules</span>
                  <span className="text-[10px] opacity-70">Quiet 11 PM</span>
                </div>

                {/* 4. Local Spots (Buttery Lime) */}
                <div 
                  onClick={() => setCurrentRoute('/demo')}
                  className={`p-2.5 rounded-xl border cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    isDark 
                      ? 'bg-[#242A16] border-[#E4E98E]/30 text-stone-100' 
                      : 'bg-[#F6F9D6] border-[#E9F0B2] text-[#1D260D]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <Compass className="w-3.5 h-3.5 text-[#B6BD4B]" />
                    <span className="text-[9px] font-mono opacity-70">Secrets</span>
                  </div>
                  <span className="text-[11px] font-bold block truncate">Local Spots</span>
                  <span className="text-[10px] opacity-70">Wine & Food</span>
                </div>
              </div>

            </div>

          </div>
        )}

          {/* Bento Card 2 (SAGE GREEN 4-COL METRIC & PEACE OF MIND) */}
          {(mobileBentoFilter === 'all' || mobileBentoFilter === 'automation') && (
            <div className={`col-span-1 md:col-span-4 p-4 sm:p-7 rounded-[26px] sm:rounded-[36px] flex flex-col justify-between transition-all shadow-md ${
              isDark 
                ? 'bg-[#243522] border border-[#859768]/60 text-stone-100 shadow-xl' 
                : 'bg-[#859768] text-[#0C1510]'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full ${
                    isDark ? 'bg-[#859768]/20 text-[#A8C79A]' : 'bg-[#0C1510]/15 text-[#0C1510]'
                  }`}>
                    Peace of Mind
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                    isDark ? 'border border-[#859768]/40 text-[#A8C79A]' : 'border border-[#0C1510]/20 text-[#0C1510]'
                  }`}>
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8]" />
                  </div>
                </div>

                <h3 className={`text-base sm:text-2xl font-serif font-bold mb-2 sm:mb-3 leading-tight ${
                  isDark ? 'text-white' : 'text-[#0C1510]'
                }`}>
                  Stop midnight WhatsApp messages
                </h3>

                <p className={`text-[11px] sm:text-xs leading-relaxed mb-3 sm:mb-4 ${
                  isDark ? 'text-stone-300' : 'text-[#0C1510]/85'
                }`}>
                  Paper binders tear. Faded router stickers cause late-night texts. Stumari puts everything on the guest’s screen in 1 scan.
                </p>

                {/* Compact Comparison */}
                <div className="space-y-1.5">
                  <div className={`p-2 sm:p-2.5 rounded-xl text-[10px] sm:text-[11px] flex items-center gap-2 ${
                    isDark ? 'bg-[#152014] text-stone-300' : 'bg-black/10 text-[#0C1510]'
                  }`}>
                    <span className="text-rose-500 font-bold">✕</span>
                    <span className="truncate">"What's the Wi-Fi?" at 11:45 PM</span>
                  </div>

                  <div className={`p-2 sm:p-2.5 rounded-xl text-[10px] sm:text-[11px] flex items-center gap-2 ${
                    isDark ? 'bg-[#152014] text-stone-100 font-semibold' : 'bg-black/15 text-[#0C1510] font-semibold'
                  }`}>
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span className="truncate">1-Tap tap on stand. Peaceful sleep</span>
                  </div>
                </div>
              </div>

              {/* Bottom Key Metric Stat */}
              <div className={`mt-4 pt-3.5 border-t ${isDark ? 'border-[#859768]/30' : 'border-[#0C1510]/15'}`}>
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className={`text-2xl sm:text-4xl font-serif font-bold leading-none ${
                      isDark ? 'text-[#E4E98E]' : 'text-[#0C1510]'
                    }`}>
                      ~45 mins
                    </span>
                    <span className={`text-[10px] block mt-0.5 ${isDark ? 'text-stone-300' : 'text-[#0C1510]/75'}`}>
                      Saved per booking
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg sm:text-2xl font-serif font-bold text-emerald-400">
                      5.0 ★
                    </span>
                    <span className={`text-[10px] block mt-0.5 ${isDark ? 'text-stone-300' : 'text-[#0C1510]/75'}`}>
                      Check-in score
                    </span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Bento Card 5 (BUTTERY LIME 4-COL: 5-Star Reviews & Host Brand) */}
          {(mobileBentoFilter === 'all' || mobileBentoFilter === 'proof') && (
            <div className={`col-span-1 md:col-span-4 p-4 sm:p-7 rounded-[26px] sm:rounded-[36px] flex flex-col justify-between transition-all shadow-md bg-[#E4E98E] text-[#0C1510]`}>
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-[#0C1510]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-[#0C1510]/15 text-[#0C1510] px-2 py-0.5 rounded-full">
                    Verified Guest
                  </span>
                </div>

                <h3 className="text-base sm:text-2xl font-serif font-bold mb-2 leading-tight text-[#0C1510]">
                  5-Star Guest Reviews
                </h3>
                <p className="text-[11px] sm:text-xs italic leading-relaxed text-[#0C1510]/85 mb-3">
                  "Having the Wi-Fi copy and apartment instructions right on my phone was amazing. 5 stars for check-in!"
                </p>

                <div className="p-2 sm:p-2.5 rounded-xl bg-[#0C1510]/10 text-[10px] sm:text-[11px] font-semibold flex items-center justify-between">
                  <span>Guest autonomy</span>
                  <span className="font-bold text-emerald-800">100% 5-Star</span>
                </div>
              </div>

              <div className="mt-4 pt-3.5 border-t border-[#0C1510]/15 text-[11px] font-semibold flex items-center justify-between text-[#0C1510]">
                <span>Sophie T. · Airbnb</span>
                <span>Paris, FR</span>
              </div>
            </div>
          )}

          {/* Bento Card 3 (SOFT SLATE BLUE 4-COL: QR Stand & Bedside NFC) */}
          {(mobileBentoFilter === 'all' || mobileBentoFilter === 'demo' || mobileBentoFilter === 'automation') && (
            <div className={`col-span-1 md:col-span-4 p-4 sm:p-7 rounded-[26px] sm:rounded-[36px] flex flex-col justify-between transition-all shadow-md ${
              isDark 
                ? 'bg-[#1B2933] border border-[#92B1C9]/60 text-stone-100 shadow-xl' 
                : 'bg-[#92B1C9] text-[#0A1A26]'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full ${
                    isDark ? 'bg-[#92B1C9]/20 text-[#A9C8DD]' : 'bg-[#0A1A26]/15 text-[#0A1A26]'
                  }`}>
                    Hardware
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                    isDark ? 'border border-[#92B1C9]/40 text-[#A9C8DD]' : 'border border-[#0A1A26]/20 text-[#0A1A26]'
                  }`}>
                    <QrCode className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8]" />
                  </div>
                </div>

                <h3 className={`text-base sm:text-2xl font-serif font-bold mb-2 leading-tight ${
                  isDark ? 'text-white' : 'text-[#0A1A26]'
                }`}>
                  QR Stand + Bedside NFC Tag
                </h3>
                <p className={`text-[11px] sm:text-xs leading-relaxed mb-3 ${
                  isDark ? 'text-stone-300' : 'text-[#0A1A26]/85'
                }`}>
                  Acrylic QR placard for kitchen counters, plus NFC coins for nightstands. 1 phone tap opens everything.
                </p>

                {/* Visual QR Card */}
                <div className={`p-2.5 sm:p-3 rounded-2xl text-center flex flex-col items-center justify-center ${
                  isDark ? 'bg-[#0C1217]' : 'bg-white/70 shadow-xs'
                }`}>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl p-1.5 shadow-xs flex items-center justify-center mb-1">
                    <QrCode className="w-14 h-14 sm:w-16 sm:h-16 text-stone-950" />
                  </div>
                  <span className={`text-[9px] font-mono ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                    Scan or Tap NFC
                  </span>
                </div>
              </div>

              <div className={`mt-4 pt-3.5 border-t text-[10px] sm:text-xs flex items-center justify-between ${
                isDark ? 'border-[#92B1C9]/30 text-stone-300' : 'border-[#0A1A26]/15 text-[#0A1A26]'
              }`}>
                <span>300 DPI print flyer</span>
                <span className="font-bold">Included</span>
              </div>
            </div>
          )}

          {/* Bento Card 4 (SOFT MINT SEAFOAM 4-COL: Offline PWA & Zero Reception) */}
          {(mobileBentoFilter === 'all' || mobileBentoFilter === 'automation') && (
            <div className={`col-span-1 md:col-span-4 p-4 sm:p-7 rounded-[26px] sm:rounded-[36px] flex flex-col justify-between transition-all shadow-md ${
              isDark 
                ? 'bg-[#142C23] border border-emerald-500/50 text-stone-100 shadow-xl' 
                : 'bg-[#D7EFE7] text-[#0A2D22]'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full ${
                    isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-[#0A2D22]/15 text-[#0A2D22]'
                  }`}>
                    Zero Cell Signal
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                    isDark ? 'border border-emerald-500/40 text-emerald-400' : 'border border-[#0A2D22]/20 text-[#0A2D22]'
                  }`}>
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8]" />
                  </div>
                </div>

                <h3 className={`text-base sm:text-2xl font-serif font-bold mb-2 leading-tight ${
                  isDark ? 'text-white' : 'text-[#0A2D22]'
                }`}>
                  Offline Service Worker Caching
                </h3>
                <p className={`text-[11px] sm:text-xs leading-relaxed mb-3 ${
                  isDark ? 'text-stone-300' : 'text-[#0A2D22]/85'
                }`}>
                  International travelers without local SIMs won't get locked out. Keypad codes and emergency pins remain cached.
                </p>

                {/* Feature Chips */}
                <div className="space-y-1.5">
                  <div className={`p-2 rounded-xl flex items-center gap-2 text-[10px] sm:text-[11px] ${
                    isDark ? 'bg-[#0E2019] text-stone-200' : 'bg-white/60 text-[#0A2D22]'
                  }`}>
                    <Zap className="w-3 h-3 text-amber-500 shrink-0" />
                    <span className="truncate">Instant PWA Cache</span>
                  </div>
                  <div className={`p-2 rounded-xl flex items-center gap-2 text-[10px] sm:text-[11px] ${
                    isDark ? 'bg-[#0E2019] text-stone-200' : 'bg-white/60 text-[#0A2D22]'
                  }`}>
                    <MessageCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                    <span className="truncate">Direct WhatsApp</span>
                  </div>
                </div>
              </div>

              <div className={`mt-4 pt-3.5 border-t text-[10px] sm:text-xs flex items-center justify-between ${
                isDark ? 'border-emerald-500/30 text-stone-300' : 'border-[#0A2D22]/15 text-[#0A2D22]'
              }`}>
                <span>Door code sync</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">1 Sec</span>
              </div>
            </div>
          )}

        </div>

      </section>

      {/* 3. PROPERTY TYPES SHOWCASE BENTO SECTION */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark ? 'bg-[#0C1013] border-stone-800/80' : 'bg-white border-stone-200'
      }`}>
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${
                isDark ? 'bg-stone-800 text-[#E4E98E]' : 'bg-stone-100 text-stone-800'
              }`}>
                {language === 'ka' ? 'მორგებული გადაწყვეტილებები' : language === 'ru' ? 'Индивидуальные решения' : 'Tailored Solutions'}
              </span>
              <h2 className={`text-3xl sm:text-4xl font-serif font-bold mt-2 ${isDark ? 'text-white' : 'text-stone-950'}`}>
                {language === 'ka' ? 'შექმნილია ნებისმიერი ტიპის სივრცისთვის' : language === 'ru' ? 'Подходит для любого типа жилья' : 'Designed for any hospitality space'}
              </h2>
              <p className={`text-xs sm:text-sm mt-1 max-w-md ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                {language === 'ka' ? 'ქალაქის ბინებიდან მთის კოტეჯებამდე და სასტუმროებამდე.' : language === 'ru' ? 'От городских лофтов до горных шале и бутик-отелей.' : 'From boutique city lofts to remote alpine chalets and multi-room guesthouses.'}
              </p>
            </div>

            {/* Interactive Filter Tabs */}
            <div className={`flex items-center gap-1 p-1 rounded-2xl border overflow-x-auto no-scrollbar max-w-full ${
              isDark ? 'bg-[#14191C] border-stone-800' : 'bg-stone-100 border-stone-200'
            }`}>
              {[
                { id: 'apartment', label: language === 'ka' ? 'ბინა' : language === 'ru' ? 'Квартира' : 'Apartment' },
                { id: 'villa', label: language === 'ka' ? 'კოტეჯი' : language === 'ru' ? 'Шале / Вилла' : 'Villa' },
                { id: 'hotel', label: language === 'ka' ? 'ბუტიკ-სასტუმრო' : language === 'ru' ? 'Бутик-отель' : 'Boutique Hotel' },
                { id: 'guesthouse', label: language === 'ka' ? 'საოჯახო სასტუმრო' : language === 'ru' ? 'Гостевой дом' : 'Guesthouse' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePropertyType(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-all shrink-0 ${
                    activePropertyType === tab.id
                      ? isDark 
                        ? 'bg-[#E4E98E] text-[#0C1510] shadow-sm' 
                        : 'bg-white text-stone-900 shadow-sm'
                      : isDark 
                        ? 'text-stone-400 hover:text-white' 
                        : 'text-stone-600 hover:text-stone-950'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Bento Cards based on Selected Type (Matched Pastel Accents & Responsive Layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {activePropertyType === 'apartment' && (
              <>
                <div className={`p-5 sm:p-6 rounded-[26px] sm:rounded-[30px] border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between ${
                  isDark ? 'bg-[#13181B] border-stone-800 hover:border-amber-500/40' : 'bg-white border-stone-200 hover:border-amber-400 shadow-xs'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full border ${
                        isDark ? 'bg-[#282115] text-[#F9E2AF] border-amber-500/30' : 'bg-[#FDF0D5] text-[#2C1F0D] border-[#F6E0B3]'
                      }`}>
                        City Lofts & Condos
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">01</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-serif font-bold mb-2">Self Check-in Keypads</h4>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                      Send guests intercom entrance codes and smart lock keypad pins that automatically show up the day of check-in.
                    </p>
                  </div>
                  <div className="h-36 sm:h-40 rounded-2xl overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80" alt="Loft" className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                  </div>
                </div>

                <div className={`p-5 sm:p-6 rounded-[26px] sm:rounded-[30px] border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between ${
                  isDark ? 'bg-[#13181B] border-stone-800 hover:border-[#859768]/50' : 'bg-white border-stone-200 hover:border-[#859768] shadow-xs'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full border ${
                        isDark ? 'bg-[#1E2B1C] text-[#CBE2C1] border-[#859768]/30' : 'bg-[#E5ECE0] text-[#192A17] border-[#CFDEC7]'
                      }`}>
                        Curated Neighborhood
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">02</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-serif font-bold mb-2">Favorite Hidden Gems</h4>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                      Pin your favorite bakery, natural wine bar, and late-night pharmacy so guests don’t end up at tourist traps.
                    </p>
                  </div>
                  <div className="h-36 sm:h-40 rounded-2xl overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80" alt="Cafe" className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                  </div>
                </div>

                <div className={`p-5 sm:p-6 rounded-[26px] sm:rounded-[30px] border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between sm:col-span-2 md:col-span-1 ${
                  isDark ? 'bg-[#13181B] border-stone-800 hover:border-[#92B1C9]/50' : 'bg-white border-stone-200 hover:border-[#92B1C9] shadow-xs'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full border ${
                        isDark ? 'bg-[#182733] text-[#B8D9EF] border-[#92B1C9]/30' : 'bg-[#E3EDF4] text-[#0F2230] border-[#C9DEED]'
                      }`}>
                        Appliances & Trash
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">03</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-serif font-bold mb-2">How Things Work</h4>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                      Clear instructions for AC heating modes, coffee pod machines, dishwasher cycles, and garbage disposal bins.
                    </p>
                  </div>
                  <div className="h-36 sm:h-40 rounded-2xl overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80" alt="Kitchen" className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                  </div>
                </div>
              </>
            )}

            {activePropertyType === 'villa' && (
              <>
                <div className={`p-5 sm:p-6 rounded-[26px] sm:rounded-[30px] border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between ${
                  isDark ? 'bg-[#13181B] border-stone-800 hover:border-amber-500/40' : 'bg-white border-stone-200 hover:border-amber-400 shadow-xs'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full border ${
                        isDark ? 'bg-[#282115] text-[#F9E2AF] border-amber-500/30' : 'bg-[#FDF0D5] text-[#2C1F0D] border-[#F6E0B3]'
                      }`}>
                        Mountain Chalets & Villas
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">01</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-serif font-bold mb-2">Hot Tub & Fireplace Rules</h4>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                      Give clear heating dial instructions, firewood storage locations, and pool/spa guidelines.
                    </p>
                  </div>
                  <div className="h-36 sm:h-40 rounded-2xl overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1542314831-c6a4d27f8842?auto=format&fit=crop&w=600&q=80" alt="Chalet" className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                  </div>
                </div>

                <div className={`p-5 sm:p-6 rounded-[26px] sm:rounded-[30px] border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between ${
                  isDark ? 'bg-[#13181B] border-stone-800 hover:border-[#859768]/50' : 'bg-white border-stone-200 hover:border-[#859768] shadow-xs'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full border ${
                        isDark ? 'bg-[#1E2B1C] text-[#CBE2C1] border-[#859768]/30' : 'bg-[#E5ECE0] text-[#192A17] border-[#CFDEC7]'
                      }`}>
                        Outdoor Activities
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">02</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-serif font-bold mb-2">Hiking Trails & Ski Shuttle</h4>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                      Curate local mountain trail maps, trusted ski instructors, and local 4x4 drivers.
                    </p>
                  </div>
                  <div className="h-36 sm:h-40 rounded-2xl overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80" alt="Mountain" className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                  </div>
                </div>

                <div className={`p-5 sm:p-6 rounded-[26px] sm:rounded-[30px] border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between sm:col-span-2 md:col-span-1 ${
                  isDark ? 'bg-[#13181B] border-stone-800 hover:border-[#92B1C9]/50' : 'bg-white border-stone-200 hover:border-[#92B1C9] shadow-xs'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full border ${
                        isDark ? 'bg-[#182733] text-[#B8D9EF] border-[#92B1C9]/30' : 'bg-[#E3EDF4] text-[#0F2230] border-[#C9DEED]'
                      }`}>
                        Rural Arrival
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">03</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-serif font-bold mb-2">Detailed GPS & Gate Access</h4>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                      Photo guides showing turn-offs, parking gate codes, and driveway instructions.
                    </p>
                  </div>
                  <div className="h-36 sm:h-40 rounded-2xl overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80" alt="Villa" className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                  </div>
                </div>
              </>
            )}

            {activePropertyType === 'hotel' && (
              <>
                <div className={`p-5 sm:p-6 rounded-[26px] sm:rounded-[30px] border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between ${
                  isDark ? 'bg-[#13181B] border-stone-800 hover:border-[#E4E98E]/50' : 'bg-white border-stone-200 hover:border-[#B6BD4B] shadow-xs'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full border ${
                        isDark ? 'bg-[#252A17] text-[#E4E98E] border-[#E4E98E]/30' : 'bg-[#F6F9D6] text-[#1D260D] border-[#E9F0B2]'
                      }`}>
                        Boutique Hotels
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">01</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-serif font-bold mb-2">Digital Concierge Desk</h4>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                      Breakfast dining hours, room service menu QR, luggage storage desk, and late checkout requests.
                    </p>
                  </div>
                  <div className="h-36 sm:h-40 rounded-2xl overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" alt="Hotel" className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                  </div>
                </div>

                <div className={`p-5 sm:p-6 rounded-[26px] sm:rounded-[30px] border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between ${
                  isDark ? 'bg-[#13181B] border-stone-800 hover:border-emerald-500/50' : 'bg-white border-stone-200 hover:border-emerald-400 shadow-xs'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full border ${
                        isDark ? 'bg-[#132A23] text-emerald-300 border-emerald-500/30' : 'bg-[#D7EFE7] text-[#0A2D22] border-[#B8E4D5]'
                      }`}>
                        Multi-Room Fleet
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">02</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-serif font-bold mb-2">Unique Room QR Placards</h4>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                      Deploy distinct QR codes per room number that automatically reflect specific floor keypad codes.
                    </p>
                  </div>
                  <div className="h-36 sm:h-40 rounded-2xl overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80" alt="Room" className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                  </div>
                </div>

                <div className={`p-5 sm:p-6 rounded-[26px] sm:rounded-[30px] border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between sm:col-span-2 md:col-span-1 ${
                  isDark ? 'bg-[#13181B] border-stone-800 hover:border-[#92B1C9]/50' : 'bg-white border-stone-200 hover:border-[#92B1C9] shadow-xs'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full border ${
                        isDark ? 'bg-[#182733] text-[#B8D9EF] border-[#92B1C9]/30' : 'bg-[#E3EDF4] text-[#0F2230] border-[#C9DEED]'
                      }`}>
                        Amenities
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">03</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-serif font-bold mb-2">Spa, Gym & Airport Taxi</h4>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                      Empower guests to book morning shuttles or browse hotel amenities right on their mobile device.
                    </p>
                  </div>
                  <div className="h-36 sm:h-40 rounded-2xl overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80" alt="Spa" className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                  </div>
                </div>
              </>
            )}

            {activePropertyType === 'guesthouse' && (
              <>
                <div className={`p-5 sm:p-6 rounded-[26px] sm:rounded-[30px] border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between ${
                  isDark ? 'bg-[#13181B] border-stone-800 hover:border-[#859768]/50' : 'bg-white border-stone-200 hover:border-[#859768] shadow-xs'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full border ${
                        isDark ? 'bg-[#1E2B1C] text-[#CBE2C1] border-[#859768]/30' : 'bg-[#E5ECE0] text-[#192A17] border-[#CFDEC7]'
                      }`}>
                        Family Guesthouses
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">01</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-serif font-bold mb-2">Warm Host Hospitality</h4>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                      Personalized greetings, homemade breakfast timing, and shared courtyard etiquette.
                    </p>
                  </div>
                  <div className="h-36 sm:h-40 rounded-2xl overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=600&q=80" alt="Guesthouse" className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                  </div>
                </div>

                <div className={`p-5 sm:p-6 rounded-[26px] sm:rounded-[30px] border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between ${
                  isDark ? 'bg-[#13181B] border-stone-800 hover:border-emerald-500/50' : 'bg-white border-stone-200 hover:border-emerald-400 shadow-xs'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full border ${
                        isDark ? 'bg-[#132A23] text-emerald-300 border-emerald-500/30' : 'bg-[#D7EFE7] text-[#0A2D22] border-[#B8E4D5]'
                      }`}>
                        Local Culture
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">02</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-serif font-bold mb-2">Artisan Wine & Bread</h4>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                      Introduce guests to traditional pottery makers, local cheese vendors, and organic winemakers.
                    </p>
                  </div>
                  <div className="h-36 sm:h-40 rounded-2xl overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80" alt="Wine" className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                  </div>
                </div>

                <div className={`p-5 sm:p-6 rounded-[26px] sm:rounded-[30px] border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex flex-col justify-between sm:col-span-2 md:col-span-1 ${
                  isDark ? 'bg-[#13181B] border-stone-800 hover:border-[#E4E98E]/50' : 'bg-white border-stone-200 hover:border-[#B6BD4B] shadow-xs'
                }`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full border ${
                        isDark ? 'bg-[#252A17] text-[#E4E98E] border-[#E4E98E]/30' : 'bg-[#F6F9D6] text-[#1D260D] border-[#E9F0B2]'
                      }`}>
                        Multilingual
                      </span>
                      <span className="text-[10px] font-mono text-stone-400">03</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-serif font-bold mb-2">Instant Translation</h4>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                      Guests can read house instructions in English, German, Georgian, or Russian without language barriers.
                    </p>
                  </div>
                  <div className="h-36 sm:h-40 rounded-2xl overflow-hidden shadow-xs">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80" alt="Language" className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                  </div>
                </div>
              </>
            )}
          </div>

        </div>
      </section>

      {/* 4. 3-STEP ONBOARDING PROCESS BENTO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-1 rounded-full ${
            isDark ? 'bg-stone-800 text-[#E4E98E]' : 'bg-stone-100 text-stone-800'
          }`}>
            Effortless Setup
          </span>
          <h2 className={`text-3xl sm:text-4xl font-serif font-bold mt-2 ${isDark ? 'text-white' : 'text-stone-950'}`}>
            Ready in 5 minutes
          </h2>
          <p className={`text-xs sm:text-sm mt-1.5 ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
            No technical knowledge required. Fill our intuitive wizard and print your welcome flyer immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Step 01 - Sage Green */}
          <div className={`p-6 sm:p-7 rounded-[28px] sm:rounded-[32px] border relative overflow-hidden flex flex-col justify-between transition-all ${
            isDark ? 'bg-[#0C1013] border-stone-800 text-stone-100' : 'bg-white border-stone-200 text-stone-900 shadow-md'
          }`}>
            <div>
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm mb-4 bg-[#859768] text-[#0C1510] shadow-xs">
                01
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold mb-2">Fill the Quick Wizard</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                Enter your property title, Wi-Fi password, keypad code, and 3-4 neighborhood spots you love.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-stone-200 dark:border-stone-800/80 text-[11px] font-mono text-stone-500">
              Avg. time: 3.5 minutes
            </div>
          </div>

          {/* Step 02 - Soft Slate Blue */}
          <div className={`p-6 sm:p-7 rounded-[28px] sm:rounded-[32px] border relative overflow-hidden flex flex-col justify-between transition-all ${
            isDark ? 'bg-[#0C1013] border-stone-800 text-stone-100' : 'bg-white border-stone-200 text-stone-900 shadow-md'
          }`}>
            <div>
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm mb-4 bg-[#92B1C9] text-[#0A1A26] shadow-xs">
                02
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold mb-2">Download QR or Tag NFC</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                Download our high-res print flyer or order custom acrylic stands with your property's QR code.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-stone-200 dark:border-stone-800/80 text-[11px] font-mono text-stone-500">
              Instant 300 DPI vector PDF
            </div>
          </div>

          {/* Step 03 - Buttery Lime */}
          <div className={`p-6 sm:p-7 rounded-[28px] sm:rounded-[32px] border relative overflow-hidden flex flex-col justify-between transition-all ${
            isDark ? 'bg-[#0C1013] border-stone-800 text-stone-100' : 'bg-white border-stone-200 text-stone-900 shadow-md'
          }`}>
            <div>
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm mb-4 bg-[#E4E98E] text-[#0C1510] shadow-xs">
                03
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold mb-2">Guests Tap & Enjoy</h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                Guests scan upon arrival and get instant Wi-Fi and door keys. You enjoy peaceful 5-star hosting.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-stone-200 dark:border-stone-800/80 text-[11px] font-mono text-stone-500">
              Zero guest app downloads
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION FOOTER BANNER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className={`p-8 sm:p-12 rounded-[40px] border shadow-2xl relative overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-br from-[#161D20] via-[#0C1013] to-[#12181A] border-stone-800' 
            : 'bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 text-white border-stone-800'
        }`}>
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E4E98E]">
              START FREE TODAY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Give your guests an unforgettable 5-star welcome
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Join hosts who eliminate repetitive messages, save 45 minutes every stay, and delight travelers worldwide.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setCurrentRoute('/onboarding')}
                className="px-8 py-3.5 rounded-full bg-[#E4E98E] hover:bg-[#d9de7d] text-[#0C1510] font-bold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Create your Stumari now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentRoute('/pricing')}
                className="px-6 py-3.5 rounded-full bg-stone-800/80 hover:bg-stone-750 text-stone-200 border border-stone-700 font-semibold text-sm transition-all"
              >
                View Plans & Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
