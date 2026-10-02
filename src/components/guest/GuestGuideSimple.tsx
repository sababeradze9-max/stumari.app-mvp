import React, { useState } from 'react';
import { 
  Wifi, 
  KeyRound, 
  Sparkles, 
  BookOpen, 
  Compass, 
  Bus, 
  CheckSquare, 
  Phone, 
  MessageCircle, 
  X, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  ShieldAlert, 
  ExternalLink,
  Car,
  AlertCircle,
  Coffee,
  Tv,
  Thermometer,
  Shirt,
  Flame,
  Utensils,
  Zap,
  ArrowLeft,
  Square,
  Globe
} from 'lucide-react';
import { Property, ApplianceGuide, Recommendation } from '../../types';
import { useApp } from '../../context/AppContext';
import { LanguageSelector, GuestLanguageToggle } from '../common/LanguageSelector';
import { OfflineGuestMap } from './OfflineGuestMap';

interface GuestGuideSimpleProps {
  propertyOverride?: Property;
  isEmbed?: boolean;
}

type ModalType = 
  | null 
  | 'welcome' 
  | 'checkin' 
  | 'wifi' 
  | 'how-things-work' 
  | 'rules' 
  | 'explore' 
  | 'transport' 
  | 'checkout' 
  | 'contact';

export const GuestGuideSimple: React.FC<GuestGuideSimpleProps> = ({ 
  propertyOverride, 
  isEmbed = false 
}) => {
  const { currentProperty, showToast, setCurrentRoute, theme, t, language, getLocalizedProperty } = useApp();
  const rawProperty = propertyOverride || currentProperty;
  const property = getLocalizedProperty(rawProperty);
  const isDark = theme === 'dark';

  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [exploreViewMode, setExploreViewMode] = useState<'map' | 'list'>('map');
  const [wifiCopied, setWifiCopied] = useState(false);
  const [doorCopied, setDoorCopied] = useState(false);
  const [recFilter, setRecFilter] = useState<string>('all');
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [guestCategory, setGuestCategory] = useState<'all' | 'access' | 'house' | 'local'>('all');

  const handleCopy = (text: string, type: 'wifi' | 'door') => {
    navigator.clipboard.writeText(text);
    if (type === 'wifi') {
      setWifiCopied(true);
      setTimeout(() => setWifiCopied(false), 2000);
      showToast(t.guestGuide.cards.passwordCopied);
    } else {
      setDoorCopied(true);
      setTimeout(() => setDoorCopied(false), 2000);
      showToast(t.guestGuide.cards.codeCopied);
    }
  };

  const toggleCheck = (idx: number) => {
    setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const getApplianceIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'thermometer': return <Thermometer className="w-5 h-5 text-blue-600" />;
      case 'coffee': return <Coffee className="w-5 h-5 text-amber-700" />;
      case 'shirt': return <Shirt className="w-5 h-5 text-teal-600" />;
      case 'tv': return <Tv className="w-5 h-5 text-purple-600" />;
      case 'flame': return <Flame className="w-5 h-5 text-orange-600" />;
      case 'utensils': return <Utensils className="w-5 h-5 text-stone-700" />;
      default: return <Zap className="w-5 h-5 text-amber-600" />;
    }
  };

  const filteredRecs = property.recommendations.filter(r => {
    if (recFilter === 'all') return true;
    return r.category === recFilter;
  });

  return (
    <div className={`w-full ${isDark ? 'bg-[#080B0D] text-stone-100' : 'bg-stone-100 text-stone-900'} ${isEmbed ? 'min-h-full' : 'min-h-screen py-0 sm:py-8'} flex flex-col items-center font-sans transition-colors duration-200`}>
      
      {/* Smartphone-width container */}
      <div className={`w-full max-w-md ${isDark ? 'bg-[#0C1013] border-stone-800 text-stone-100' : 'bg-stone-50 border-stone-200 text-stone-900'} min-h-screen sm:min-h-[820px] sm:rounded-[36px] shadow-2xl border-x sm:border overflow-hidden flex flex-col relative`}>
        
        {/* Host mode preview escape bar */}
        {!isEmbed && (
          <div className="bg-stone-900 text-stone-300 text-xs px-4 py-2 flex items-center justify-between no-print z-20 border-b border-stone-800">
            <button
              onClick={() => setCurrentRoute('/app')}
              className="flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#E4E98E]" />
              <span>{t.guestGuide.backToHost}</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#E4E98E] font-semibold">
                {t.guestGuide.liveView}
              </span>
              <LanguageSelector variant="compact" />
            </div>
          </div>
        )}

        {/* HERO COVER */}
        <div className="relative h-56 sm:h-64 w-full bg-stone-900 overflow-hidden">
          <img
            src={property.coverImage}
            alt={property.title}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1013] via-[#0C1013]/40 to-transparent" />

          {/* Top-right Language Selector inside hero for instant guest access */}
          <div className="absolute top-3 right-3 z-10">
            <LanguageSelector variant="compact" />
          </div>

          {/* Location & Title */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#E4E98E] mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{property.city}, {property.country}</span>
            </div>
            <h1 className="font-serif text-2xl font-bold tracking-tight text-white leading-tight">
              {property.title}
            </h1>
            <p className="text-xs text-stone-300 mt-1 line-clamp-1">
              {property.subtitle}
            </p>
          </div>
        </div>

        {/* HOST WELCOME BAR */}
        <div className={`px-4 py-3 border-b flex items-center justify-between shadow-xs transition-colors ${
          isDark ? 'bg-[#14191C] border-stone-800' : 'bg-white border-stone-200/90'
        }`}>
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src={property.hostAvatar}
              alt={property.hostName}
              className="w-9 h-9 rounded-full object-cover border border-stone-700 shrink-0"
            />
            <div className="min-w-0">
              <span className={`text-xs font-bold truncate block ${isDark ? 'text-white' : 'text-stone-900'}`}>
                {property.hostName}
              </span>
              <span className={`text-[10px] truncate block ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                {property.hostRole || t.guestGuide.superhost} · Stumari
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${property.hostWhatsApp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-all active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* PROMINENT GUEST LANGUAGE TOGGLE (1-Tap switch for Georgian, Russian, English) */}
        <div className={`px-4 py-2.5 border-b transition-colors ${
          isDark ? 'bg-[#0E1316] border-stone-800' : 'bg-stone-100/70 border-stone-200'
        }`}>
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-1.5 font-bold">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#E4E98E]" />
              <span>{t.common.selectLanguage}</span>
            </span>
            <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
              isDark ? 'bg-stone-800 text-stone-400' : 'bg-stone-200 text-stone-600'
            }`}>
              {t.guestGuide.oneTapSwitch}
            </span>
          </div>
          <GuestLanguageToggle />
        </div>

        {/* 9 MAIN ACTION TILES (DIVERSE BENTO GRID) */}
        <div className="p-4 sm:p-5 space-y-3.5 flex-1 pb-24">
          
          {/* Guest Category Quick Jump Strip (Avoids endless scroll on phone) */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {[
              { id: 'all', label: `⭐ ${t.guestGuide.categories.all}` },
              { id: 'access', label: `🔑 ${t.guestGuide.categories.access}` },
              { id: 'house', label: `📖 ${t.guestGuide.categories.house}` },
              { id: 'local', label: `📍 ${t.guestGuide.categories.local}` }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setGuestCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
                  guestCategory === cat.id
                    ? isDark ? 'bg-[#E4E98E] text-[#0C1510] shadow-xs' : 'bg-stone-900 text-white shadow-xs'
                    : isDark ? 'bg-stone-900 text-stone-400 border border-stone-800' : 'bg-stone-100 text-stone-600 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Wi-Fi Banner */}
          {(guestCategory === 'all' || guestCategory === 'access') && (
            <div 
              onClick={() => setActiveModal('wifi')}
              className={`p-4 rounded-[22px] shadow-md border flex items-center justify-between cursor-pointer transition-all group ${
                isDark 
                  ? 'bg-gradient-to-r from-[#14191C] to-[#182024] text-white border-stone-800 hover:border-stone-700' 
                  : 'bg-stone-900 text-white border-stone-800 hover:bg-stone-850'
              }`}
            >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-stone-800 text-emerald-400 border border-stone-700/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Wifi className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 font-semibold block">
                    {t.guestGuide.cards.wifiTitle}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <div className="text-xs sm:text-sm font-bold truncate text-white tracking-tight">
                  {property.wifiNetwork}
                </div>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopy(property.wifiPassword, 'wifi');
              }}
              className="px-3.5 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs flex items-center gap-1.5 shrink-0 shadow-sm active:scale-95 transition-all"
            >
              {wifiCopied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5 text-white" />}
              <span>{wifiCopied ? t.common.copied : t.common.copy}</span>
            </button>
          </div>
        )}

          {/* DIVERSE BENTO GRID */}
          <div className="grid grid-cols-2 gap-3">
            
            {/* 1. CHECK-IN (WIDE HERO BENTO CARD) */}
            {(guestCategory === 'all' || guestCategory === 'access') && (
              <div
                onClick={() => setActiveModal('checkin')}
                className={`col-span-2 p-4 rounded-[24px] border shadow-sm cursor-pointer transition-all duration-200 hover:-translate-y-0.5 group relative overflow-hidden ${
                  isDark 
                    ? 'bg-gradient-to-br from-[#14191C] via-[#161D20] to-[#12181A] border-stone-800 hover:border-emerald-500/50' 
                    : 'bg-white border-stone-200/90 hover:border-emerald-400'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <KeyRound className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <span className={`text-[13px] sm:text-sm font-bold block leading-tight ${isDark ? 'text-white' : 'text-stone-900'}`}>
                        {t.guestGuide.cards.checkinTitle}
                      </span>
                      <span className={`text-[10px] block ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                        {t.guestGuide.cards.checkinTime} {property.checkInTime}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-stone-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all">↗</span>
                </div>

                {/* Code Banner inside Card */}
                <div className={`p-3 rounded-2xl flex items-center justify-between ${
                  isDark ? 'bg-[#0B0F12] border border-stone-800' : 'bg-stone-50 border border-stone-200/80'
                }`}>
                  <div>
                    <span className={`text-[9px] uppercase font-mono block ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                      {t.guestGuide.cards.doorCodeTitle}
                    </span>
                    <span className="font-mono text-base font-bold text-emerald-500 tracking-wider">
                      {property.doorKeypadCode}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(property.doorKeypadCode, 'door');
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all active:scale-95 flex items-center gap-1 ${
                      isDark ? 'bg-stone-800 hover:bg-stone-750 text-white' : 'bg-stone-200 hover:bg-stone-300 text-stone-900'
                    }`}
                  >
                    {doorCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{doorCopied ? t.common.copied : t.common.copy}</span>
                  </button>
                </div>
              </div>
            )}

            {/* 2. Welcome (Medium Bento Card) */}
            {(guestCategory === 'all' || guestCategory === 'house') && (
              <button
                onClick={() => setActiveModal('welcome')}
                className={`p-4 rounded-[22px] border shadow-xs text-left hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex flex-col justify-between h-[126px] group relative overflow-hidden ${
                  isDark 
                    ? 'bg-[#151A1D] border-stone-800 text-white hover:border-amber-400/50' 
                    : 'bg-white border-stone-200/90 text-stone-900 hover:border-amber-400'
                }`}
              >
                <div className="flex items-start justify-between w-full">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 group-hover:text-amber-500 group-hover:translate-x-0.5 transition-all">↗</span>
                </div>
                <div>
                  <span className={`text-[13px] font-bold block leading-tight ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    {t.propertyHub.guideSections.welcome}
                  </span>
                  <span className={`text-[10px] block truncate mt-0.5 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                    {property.welcomeGreeting ? property.welcomeGreeting.slice(0, 32) + '...' : t.guestGuide.welcomeGreetingFallback}
                  </span>
                </div>
              </button>
            )}

            {/* 3. How Things Work (Medium Bento Card) */}
            {(guestCategory === 'all' || guestCategory === 'house') && (
              <button
                onClick={() => setActiveModal('how-things-work')}
                className={`p-4 rounded-[22px] border shadow-xs text-left hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex flex-col justify-between h-[126px] group relative overflow-hidden ${
                  isDark 
                    ? 'bg-[#151A1D] border-stone-800 text-white hover:border-sky-400/50' 
                    : 'bg-white border-stone-200/90 text-stone-900 hover:border-sky-400'
                }`}
              >
                <div className="flex items-start justify-between w-full">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-500 border border-sky-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-4 h-4 text-sky-500" />
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-all">↗</span>
                </div>
                <div>
                  <span className={`text-[13px] font-bold block leading-tight ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    {t.guestGuide.cards.howThingsWork}
                  </span>
                  <span className={`text-[10px] block truncate mt-0.5 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                    {property.appliances.length} {t.guestGuide.cards.appliancesCount}
                  </span>
                </div>
              </button>
            )}

            {/* 4. EXPLORE & OFFLINE MAP (WIDE FEATURED BENTO CARD) */}
            {(guestCategory === 'all' || guestCategory === 'local') && (
              <div
                onClick={() => {
                  setExploreViewMode('map');
                  setActiveModal('explore');
                }}
                className={`col-span-2 p-4 rounded-[24px] border shadow-sm cursor-pointer transition-all duration-200 hover:-translate-y-0.5 group relative overflow-hidden ${
                  isDark 
                    ? 'bg-gradient-to-br from-[#14191C] to-[#1A181C] border-stone-800 hover:border-rose-500/50' 
                    : 'bg-white border-stone-200/90 hover:border-rose-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-500 border border-rose-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Compass className="w-4 h-4 text-rose-500" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[13px] sm:text-sm font-bold block leading-tight ${isDark ? 'text-white' : 'text-stone-900'}`}>
                          {t.guestGuide.cards.recommendations}
                        </span>
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full text-[9px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Map</span>
                        </span>
                      </div>
                      <span className={`text-[10px] block ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                        {property.recommendations.length} {property.city} · {t.guestGuide.map.cardSub}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#E4E98E] text-[#0C1510] shadow-2xs">
                      🗺️ {t.guestGuide.map.interactiveMap}
                    </span>
                    <span className="text-xs font-mono text-stone-400 group-hover:text-rose-400 group-hover:translate-x-0.5 transition-all">↗</span>
                  </div>
                </div>

                {/* Spots Pills Preview */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar pt-1">
                  {property.recommendations.slice(0, 3).map((r, i) => (
                    <span
                      key={i}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-medium shrink-0 flex items-center gap-1 ${
                        isDark ? 'bg-stone-900 text-stone-300 border border-stone-800' : 'bg-stone-100 text-stone-800'
                      }`}
                    >
                      <span>{r.name}</span>
                      <span className="opacity-50 font-mono text-[9px]">{r.distance}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 5. House Rules */}
            {(guestCategory === 'all' || guestCategory === 'house') && (
              <button
                onClick={() => setActiveModal('rules')}
                className={`p-4 rounded-[22px] border shadow-xs text-left hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex flex-col justify-between h-[122px] group relative overflow-hidden ${
                  isDark 
                    ? 'bg-[#151A1D] border-stone-800 text-white hover:border-purple-400/50' 
                    : 'bg-white border-stone-200/90 text-stone-900 hover:border-purple-400'
                }`}
              >
                <div className="flex items-start justify-between w-full">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BookOpen className="w-4 h-4 text-purple-500" />
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 group-hover:text-purple-500 group-hover:translate-x-0.5 transition-all">↗</span>
                </div>
                <div>
                  <span className={`text-[13px] font-bold block leading-tight ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    {t.guestGuide.cards.houseRules}
                  </span>
                  <span className={`text-[10px] block truncate mt-0.5 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                    {property.quietHours}
                  </span>
                </div>
              </button>
            )}

            {/* 6. Transport */}
            {(guestCategory === 'all' || guestCategory === 'house' || guestCategory === 'local') && (
              <button
                onClick={() => setActiveModal('transport')}
                className={`p-4 rounded-[22px] border shadow-xs text-left hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex flex-col justify-between h-[122px] group relative overflow-hidden ${
                  isDark 
                    ? 'bg-[#151A1D] border-stone-800 text-white hover:border-teal-400/50' 
                    : 'bg-white border-stone-200/90 text-stone-900 hover:border-teal-400'
                }`}
              >
                <div className="flex items-start justify-between w-full">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-500 border border-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Bus className="w-4 h-4 text-teal-500" />
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 group-hover:text-teal-500 group-hover:translate-x-0.5 transition-all">↗</span>
                </div>
                <div>
                  <span className={`text-[13px] font-bold block leading-tight ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    {t.guestGuide.cards.transport}
                  </span>
                  <span className={`text-[10px] block truncate mt-0.5 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                    {t.guestGuide.cards.transitSubtitle}
                  </span>
                </div>
              </button>
            )}

            {/* 7. Check-out */}
            {(guestCategory === 'all' || guestCategory === 'access' || guestCategory === 'house') && (
              <button
                onClick={() => setActiveModal('checkout')}
                className={`p-4 rounded-[22px] border shadow-xs text-left hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex flex-col justify-between h-[122px] group relative overflow-hidden ${
                  isDark 
                    ? 'bg-[#151A1D] border-stone-800 text-white hover:border-slate-400/50' 
                    : 'bg-white border-stone-200/90 text-stone-900 hover:border-slate-400'
                }`}
              >
                <div className="flex items-start justify-between w-full">
                  <div className="w-9 h-9 rounded-xl bg-slate-500/10 text-slate-400 border border-slate-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CheckSquare className="w-4 h-4 text-slate-400" />
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all">↗</span>
                </div>
                <div>
                  <span className={`text-[13px] font-bold block leading-tight ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    {t.guestGuide.cards.checkoutChecklist}
                  </span>
                  <span className={`text-[10px] block truncate mt-0.5 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                    {t.guestGuide.cards.checkoutTime} {property.checkOutTime}
                  </span>
                </div>
              </button>
            )}

            {/* 8. Contact & Emergency */}
            {(guestCategory === 'all' || guestCategory === 'access' || guestCategory === 'house') && (
              <button
                onClick={() => setActiveModal('contact')}
                className={`p-4 rounded-[22px] border shadow-xs text-left hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex flex-col justify-between h-[122px] group relative overflow-hidden ${
                  isDark 
                    ? 'bg-[#151A1D] border-stone-800 text-white hover:border-red-400/50' 
                    : 'bg-white border-stone-200/90 text-stone-900 hover:border-red-400'
                }`}
              >
                <div className="flex items-start justify-between w-full">
                  <div className="w-9 h-9 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldAlert className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 group-hover:text-red-500 group-hover:translate-x-0.5 transition-all">↗</span>
                </div>
                <div>
                  <span className={`text-[13px] font-bold block leading-tight ${isDark ? 'text-white' : 'text-stone-900'}`}>
                    {t.guestGuide.cards.contactHost}
                  </span>
                  <span className={`text-[10px] block truncate mt-0.5 ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
                    WhatsApp & 112
                  </span>
                </div>
              </button>
            )}

          </div>

          {/* Offline & Service Worker Notice */}
          <div className="text-center pt-2">
            <span className="text-[10px] text-stone-400 flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>{t.guestGuide.offlineBadge} · Stumari</span>
            </span>
          </div>
        </div>

        {/* STICKY BOTTOM BAR: NEED HELP? CONTACT HOST */}
        <div className={`sticky bottom-0 z-30 backdrop-blur-md px-4 py-3 border-t flex items-center justify-between shadow-lg ${
          isDark ? 'bg-[#0E1317]/95 border-stone-800 text-white' : 'bg-white/95 border-stone-200 text-stone-900'
        }`}>
          <div>
            <span className={`text-[10px] uppercase font-mono tracking-wider block ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>
              {t.guestGuide.cards.contactHost}
            </span>
            <span className="text-xs font-bold">
              {property.hostName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${property.hostPhone}`}
              className={`p-2 rounded-xl transition-colors ${
                isDark ? 'bg-stone-800 hover:bg-stone-750 text-white' : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
              }`}
              title={t.guestGuide.callHost}
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${property.hostWhatsApp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* INTERNAL MODAL PANELS (Slides up on mobile) */}
        {activeModal && (
          <div className="absolute inset-0 z-40 bg-black/60 backdrop-blur-xs flex flex-col justify-end animate-in fade-in">
            <div className={`rounded-t-3xl max-h-[85%] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom-6 ${
              isDark ? 'bg-[#0F1418] text-stone-100 border-t border-stone-800' : 'bg-white text-stone-900'
            }`}>
              
              {/* Modal Header */}
              <div className={`px-5 py-3.5 border-b flex items-center justify-between shrink-0 gap-2 ${
                isDark ? 'border-stone-800' : 'border-stone-100'
              }`}>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="font-serif font-bold text-base sm:text-lg capitalize truncate">
                    {activeModal === 'welcome' && t.propertyHub.guideSections.welcome}
                    {activeModal === 'checkin' && t.guestGuide.cards.checkinTitle}
                    {activeModal === 'wifi' && t.guestGuide.cards.wifiTitle}
                    {activeModal === 'how-things-work' && t.guestGuide.cards.howThingsWork}
                    {activeModal === 'rules' && t.guestGuide.cards.houseRules}
                    {activeModal === 'explore' && t.guestGuide.cards.recommendations}
                    {activeModal === 'transport' && t.guestGuide.cards.transport}
                    {activeModal === 'checkout' && t.guestGuide.cards.checkoutChecklist}
                    {activeModal === 'contact' && t.guestGuide.cards.contactHost}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Segmented View Switcher: Interactive Map vs List View */}
                  {activeModal === 'explore' && (
                    <div className={`flex items-center p-0.5 rounded-xl border text-xs font-semibold ${
                      isDark ? 'bg-stone-900 border-stone-800' : 'bg-stone-100 border-stone-200'
                    }`}>
                      <button
                        onClick={() => setExploreViewMode('map')}
                        className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                          exploreViewMode === 'map'
                            ? isDark ? 'bg-[#E4E98E] text-[#0C1510] font-bold shadow-xs' : 'bg-white text-stone-900 font-bold shadow-xs'
                            : isDark ? 'text-stone-400 hover:text-white' : 'text-stone-600 hover:text-stone-950'
                        }`}
                      >
                        <MapPin className="w-3 h-3" />
                        <span>{t.guestGuide.map.interactiveMap}</span>
                      </button>
                      <button
                        onClick={() => setExploreViewMode('list')}
                        className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1 ${
                          exploreViewMode === 'list'
                            ? isDark ? 'bg-[#E4E98E] text-[#0C1510] font-bold shadow-xs' : 'bg-white text-stone-900 font-bold shadow-xs'
                            : isDark ? 'text-stone-400 hover:text-white' : 'text-stone-600 hover:text-stone-950'
                        }`}
                      >
                        <span>{t.guestGuide.map.listView}</span>
                      </button>
                    </div>
                  )}

                  <button
                    onClick={() => setActiveModal(null)}
                    className={`p-1.5 rounded-full ${
                      isDark ? 'bg-stone-800 text-stone-300 hover:bg-stone-700' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className={`${activeModal === 'explore' && exploreViewMode === 'map' ? 'p-0 flex flex-col h-[520px] overflow-hidden' : 'p-5 overflow-y-auto space-y-4'} text-xs`}>
                
                {/* 1. Welcome */}
                {activeModal === 'welcome' && (
                  <div className="space-y-4">
                    <div className={`p-4 rounded-2xl border ${
                      isDark ? 'bg-amber-950/30 border-amber-800/60 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-950'
                    }`}>
                      <p className="font-serif italic text-sm leading-relaxed">
                        "{property.welcomeGreeting || property.tagline}"
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className={`p-3 rounded-xl border ${
                        isDark ? 'bg-stone-900 border-stone-800' : 'bg-stone-50 border-stone-200'
                      }`}>
                        <span className="text-[10px] text-stone-400 block uppercase font-mono">{t.guestGuide.cards.checkinTime}</span>
                        <span className="font-bold text-sm">{property.checkInTime}</span>
                      </div>
                      <div className={`p-3 rounded-xl border ${
                        isDark ? 'bg-stone-900 border-stone-800' : 'bg-stone-50 border-stone-200'
                      }`}>
                        <span className="text-[10px] text-stone-400 block uppercase font-mono">{t.guestGuide.cards.checkoutTime}</span>
                        <span className="font-bold text-sm">{property.checkOutTime}</span>
                      </div>
                    </div>

                    <div className={`p-3 rounded-xl border flex items-center gap-3 ${
                      isDark ? 'bg-stone-900 border-stone-800' : 'bg-stone-50 border-stone-200'
                    }`}>
                      <img src={property.hostAvatar} alt={property.hostName} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <span className="font-bold block">{property.hostName}</span>
                        <span className={`text-[11px] ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>{property.city}, {property.country}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Check-in */}
                {activeModal === 'checkin' && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-stone-900 text-white flex items-center justify-between border border-stone-800">
                      <div>
                        <span className="text-[10px] text-stone-400 uppercase font-mono block">{t.guestGuide.cards.doorCodeTitle}</span>
                        <span className="text-xl font-mono font-bold tracking-widest text-[#E4E98E]">{property.doorKeypadCode}</span>
                        {property.lockboxCode && (
                          <span className="text-[11px] text-stone-400 block mt-0.5">{t.guestGuide.lockboxLabel}: {property.lockboxCode}</span>
                        )}
                      </div>
                      <button
                        onClick={() => handleCopy(property.doorKeypadCode, 'door')}
                        className="px-3 py-1.5 rounded-xl bg-[#E4E98E] hover:bg-[#d8dd80] text-stone-950 font-bold text-xs flex items-center gap-1 active:scale-95"
                      >
                        {doorCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{doorCopied ? t.common.copied : t.common.copy}</span>
                      </button>
                    </div>

                    <div>
                      <h4 className="font-bold mb-1">{t.guestGuide.cards.directionsTitle}</h4>
                      <p className={`p-3 rounded-xl border leading-relaxed ${
                        isDark ? 'bg-stone-900 border-stone-800 text-stone-200' : 'bg-stone-50 border-stone-200 text-stone-700'
                      }`}>
                        {property.arrivalDirections}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-1">{t.guestGuide.cards.parkingTitle}</h4>
                      <p className={`p-3 rounded-xl border leading-relaxed ${
                        isDark ? 'bg-stone-900 border-stone-800 text-stone-200' : 'bg-stone-50 border-stone-200 text-stone-700'
                      }`}>
                        {property.parkingInstructions}
                      </p>
                    </div>

                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(property.address + ', ' + property.city)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium flex items-center justify-center gap-2 transition-colors border border-stone-800"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#E4E98E]" />
                      <span>{t.guestGuide.cards.viewOnMaps}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                {/* 3. Wi-Fi */}
                {activeModal === 'wifi' && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-stone-900 text-white text-center space-y-2 border border-stone-800">
                      <span className="text-[10px] text-stone-400 uppercase font-mono block">{t.propertyHub.forms.networkName}</span>
                      <div className="text-base font-bold text-white font-mono">{property.wifiNetwork}</div>
                      <div className="pt-2">
                        <span className="text-[10px] text-stone-400 uppercase font-mono block">{t.guestGuide.cards.wifiPassword}</span>
                        <div className="text-xl font-mono font-extrabold text-[#E4E98E] tracking-wider my-1">{property.wifiPassword}</div>
                      </div>
                      <button
                        onClick={() => handleCopy(property.wifiPassword, 'wifi')}
                        className="w-full py-2.5 rounded-xl bg-[#E4E98E] hover:bg-[#d8dd80] text-stone-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                      >
                        {wifiCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        <span>{wifiCopied ? t.guestGuide.cards.passwordCopied : t.guestGuide.cards.copyPassword}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 4. How Things Work */}
                {activeModal === 'how-things-work' && (
                  <div className="space-y-3">
                    {property.appliances.map(app => (
                      <div key={app.id} className={`p-3.5 rounded-xl border space-y-1.5 ${
                        isDark ? 'bg-stone-900 border-stone-800' : 'bg-stone-50 border-stone-200'
                      }`}>
                        <div className="flex items-center gap-2 font-bold">
                          {getApplianceIcon(app.icon)}
                          <span>{app.title}</span>
                        </div>
                        <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>
                          {app.instructions}
                        </p>
                        {app.troubleshooting && (
                          <div className={`mt-1.5 pt-1.5 border-t text-[11px] flex items-start gap-1.5 ${
                            isDark ? 'border-stone-800 text-stone-400' : 'border-stone-200/80 text-stone-500'
                          }`}>
                            <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span>{t.guestGuide.cards.troubleshootingTip} {app.troubleshooting}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* 5. House Rules */}
                {activeModal === 'rules' && (
                  <div className="space-y-4">
                    <div className={`p-3 rounded-xl border ${
                      isDark ? 'bg-stone-900 border-stone-800' : 'bg-stone-50 border-stone-200'
                    }`}>
                      <span className="font-bold block mb-0.5">{t.guestGuide.cards.quietHoursLabel}</span>
                      <p className={isDark ? 'text-stone-300' : 'text-stone-600'}>{property.quietHours}</p>
                    </div>

                    <div className={`p-3 rounded-xl border ${
                      isDark ? 'bg-stone-900 border-stone-800' : 'bg-stone-50 border-stone-200'
                    }`}>
                      <span className="font-bold block mb-0.5">{t.guestGuide.cards.trashScheduleLabel}</span>
                      <p className={isDark ? 'text-stone-300' : 'text-stone-600'}>{property.trashSchedule}</p>
                    </div>

                    <div className={`p-3.5 rounded-xl border space-y-2 ${
                      isDark ? 'bg-amber-950/30 border-amber-800/60 text-amber-100' : 'bg-amber-50/70 border-amber-200/80 text-stone-800'
                    }`}>
                      <span className="font-bold block">{t.guestGuide.cards.houseRules}</span>
                      <ul className="space-y-1.5">
                        {property.houseRules.map((rule, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-500 font-bold">•</span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* 6. Explore: Interactive Offline Map vs List View */}
                {activeModal === 'explore' && exploreViewMode === 'map' && (
                  <OfflineGuestMap property={property} onClose={() => setActiveModal(null)} />
                )}

                {activeModal === 'explore' && exploreViewMode === 'list' && (
                  <div className="space-y-3 p-5">
                    {/* Category Tabs */}
                    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                      {[
                        { id: 'all', label: t.propertyHub.forms.categories.all },
                        { id: 'coffee', label: `☕ ${t.propertyHub.forms.categories.coffee}` },
                        { id: 'food', label: `🍽️ ${t.propertyHub.forms.categories.food}` },
                        { id: 'nightlife', label: `🍷 ${t.propertyHub.forms.categories.nightlife}` },
                        { id: 'groceries', label: `🛒 ${t.propertyHub.forms.categories.groceries}` }
                      ].map(tab => (
                        <button
                          key={tab.id}
                          onClick={() => setRecFilter(tab.id)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                            recFilter === tab.id
                              ? isDark ? 'bg-[#E4E98E] text-[#0C1510] font-bold' : 'bg-stone-900 text-white'
                              : isDark ? 'bg-stone-900 text-stone-300' : 'bg-stone-100 text-stone-600 hover:text-stone-900'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {/* Rec Cards */}
                    <div className="space-y-2.5">
                      {filteredRecs.map(rec => (
                        <div key={rec.id} className={`p-3 rounded-xl border space-y-1.5 ${
                          isDark ? 'bg-stone-900 border-stone-800' : 'bg-stone-50 border-stone-200'
                        }`}>
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h5 className="font-bold text-xs">{rec.name}</h5>
                              <span className={`text-[11px] ${isDark ? 'text-stone-400' : 'text-stone-500'}`}>{rec.distance} · {rec.address}</span>
                            </div>
                            <a
                              href={rec.mapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`px-2 py-1 rounded-lg text-[10px] font-semibold flex items-center gap-1 shrink-0 ${
                                isDark ? 'bg-stone-800 text-stone-200 hover:bg-stone-750' : 'bg-stone-200 text-stone-800 hover:bg-stone-300'
                              }`}
                            >
                              <span>{t.guestGuide.cards.viewOnMaps}</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          </div>
                          <p className={`text-xs ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>{rec.description}</p>
                          {rec.hostTip && (
                            <div className={`p-1.5 rounded-lg text-[11px] ${
                              isDark ? 'bg-amber-950/40 text-amber-200 border border-amber-900/50' : 'bg-amber-100/70 text-amber-950'
                            }`}>
                              <strong>{t.guestGuide.cards.ourTip} </strong>{rec.hostTip}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 7. Transport */}
                {activeModal === 'transport' && (
                  <div className="space-y-3">
                    <div className={`p-3.5 rounded-xl border space-y-1 ${
                      isDark ? 'bg-stone-900 border-stone-800' : 'bg-stone-50 border-stone-200'
                    }`}>
                      <span className="font-bold block">{t.guestGuide.cards.taxiApp}</span>
                      <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>{property.taxiInfo}</p>
                    </div>

                    <div className={`p-3.5 rounded-xl border space-y-1 ${
                      isDark ? 'bg-stone-900 border-stone-800' : 'bg-stone-50 border-stone-200'
                    }`}>
                      <span className="font-bold block">{t.guestGuide.cards.publicTransit}</span>
                      <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>{property.transitInfo}</p>
                    </div>

                    <div className={`p-3.5 rounded-xl border space-y-1 ${
                      isDark ? 'bg-stone-900 border-stone-800' : 'bg-stone-50 border-stone-200'
                    }`}>
                      <span className="font-bold block">{t.guestGuide.cards.airportGuide}</span>
                      <p className={`text-xs leading-relaxed ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>{property.airportTransit}</p>
                    </div>
                  </div>
                )}

                {/* 8. Check-out */}
                {activeModal === 'checkout' && (
                  <div className="space-y-4">
                    <div className={`p-3 rounded-xl border text-center ${
                      isDark ? 'bg-amber-950/30 border-amber-800/60 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-950'
                    }`}>
                      <span className="text-[10px] uppercase font-mono block">{t.guestGuide.cards.checkoutTime}</span>
                      <span className="text-lg font-bold">{property.checkOutTime}</span>
                    </div>

                    <div className="space-y-2">
                      <span className="font-bold block text-xs">{t.guestGuide.cards.departureTasks}</span>
                      {property.departureChecklist.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => toggleCheck(idx)}
                          className={`w-full p-2.5 rounded-xl border text-left flex items-start gap-2.5 transition-colors ${
                            checkedItems[idx]
                              ? isDark ? 'bg-emerald-950/30 text-stone-500 line-through border-emerald-800/50' : 'bg-emerald-50 text-stone-400 line-through border-emerald-200'
                              : isDark ? 'bg-stone-900 text-stone-200 border-stone-800' : 'bg-stone-50 text-stone-800 border-stone-200'
                          }`}
                        >
                          {checkedItems[idx] ? (
                            <CheckSquare className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <Square className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                          )}
                          <span className="text-xs">{item}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 9. Contact / Emergency */}
                {activeModal === 'contact' && (
                  <div className="space-y-3">
                    <div className={`p-3.5 rounded-xl border space-y-2 ${
                      isDark ? 'bg-stone-900 border-stone-800' : 'bg-stone-50 border-stone-200'
                    }`}>
                      <span className="font-bold block">{t.guestGuide.cards.contactHost}</span>
                      <div className={`text-xs space-y-1 ${isDark ? 'text-stone-300' : 'text-stone-700'}`}>
                        <div>{t.propertyHub.forms.hostName}: <strong>{property.hostName}</strong></div>
                        <div>{t.propertyHub.forms.hostPhone}: <strong>{property.hostPhone}</strong></div>
                        <div>{t.propertyHub.forms.emergencyContactName}: <strong>{property.emergencyContact}</strong></div>
                      </div>
                      <div className="flex gap-2 pt-1">
                        <a
                          href={`tel:${property.hostPhone}`}
                          className={`flex-1 py-2 rounded-lg font-medium text-center transition-colors ${
                            isDark ? 'bg-stone-800 hover:bg-stone-750 text-white' : 'bg-stone-900 hover:bg-stone-850 text-white'
                          }`}
                        >
                          {t.guestGuide.callHost}
                        </a>
                        <a
                          href={`https://wa.me/${property.hostWhatsApp.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-center transition-colors"
                        >
                          {t.guestGuide.chatWhatsApp}
                        </a>
                      </div>
                    </div>

                    <div className={`p-3.5 rounded-xl border space-y-1.5 ${
                      isDark ? 'bg-red-950/30 border-red-900/60 text-red-200' : 'bg-red-50 border-red-200 text-red-950'
                    }`}>
                      <span className="font-bold block flex items-center gap-1.5">
                        <ShieldAlert className="w-4 h-4 text-red-500" />
                        <span>{t.guestGuide.cards.emergency112}</span>
                      </span>
                      <p className={`text-xs ${isDark ? 'text-red-300' : 'text-red-900'}`}>
                        {property.emergencyServicesNumber || '112'}
                      </p>
                      <a
                        href={`tel:${property.emergencyServicesNumber || '112'}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold mt-1"
                      >
                        <Phone className="w-3 h-3" />
                        <span>{t.guestGuide.cards.emergencyCall}</span>
                      </a>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
