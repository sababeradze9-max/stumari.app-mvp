import React, { useRef } from 'react';
import { Printer, Download, ArrowLeft, Wifi, Sparkles } from 'lucide-react';
import { Property } from '../../types';
import { QrCodeView } from '../common/QrCodeView';
import { useApp } from '../../context/AppContext';

interface PrintFlyerProps {
  property: Property;
  onBack?: () => void;
}

export const PrintFlyer: React.FC<PrintFlyerProps> = ({ property, onBack }) => {
  const { showToast } = useApp();
  const flyerUrl = `${window.location.origin}/#guest-${property.slug}`;

  const handlePrint = () => {
    window.print();
    showToast('Sent to printer dialog');
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-6 px-4">
      {/* Action Bar (hidden in print) */}
      <div className="no-print mb-6 p-4 bg-white rounded-2xl border border-stone-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div>
            <h2 className="font-semibold text-stone-900 text-sm">
              Printable Guest Welcome Flyer
            </h2>
            <p className="text-xs text-stone-500">
              Formatted for standard 5x7, 8x10, or A4 frames on kitchen counters & nightstands.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold flex items-center gap-2 shadow-sm transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>Print Flyer Now</span>
          </button>
        </div>
      </div>

      {/* Actual Printable Flyer (Clean, luxury minimalist hospitality aesthetic) */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl border-2 border-stone-200/90 shadow-lg text-center flex flex-col items-center justify-between min-h-[600px] text-stone-900 relative overflow-hidden">
        {/* Subtle decorative border corner accents */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-stone-300 pointer-events-none" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-stone-300 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-stone-300 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-stone-300 pointer-events-none" />

        {/* Header */}
        <div className="space-y-2 max-w-md">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-mono uppercase tracking-widest font-medium">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Guest Welcome Guide</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-950 pt-2">
            Welcome to {property.title}
          </h1>

          <p className="text-xs sm:text-sm text-stone-600 italic font-serif">
            "{property.tagline}"
          </p>
        </div>

        {/* Central High-Resolution QR Code */}
        <div className="my-6 p-6 rounded-3xl bg-stone-50 border border-stone-200/80 flex flex-col items-center shadow-inner">
          <QrCodeView 
            url={flyerUrl} 
            size={220} 
            showActions={false} 
            propertyName={property.title}
          />
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-stone-800">
            Scan with phone camera to open guide
          </p>
          <p className="text-[11px] text-stone-500 mt-0.5">
            Instant access · No app download or sign-in needed
          </p>
        </div>

        {/* Wi-Fi & Quick Info Box */}
        <div className="w-full max-w-md p-4 rounded-2xl bg-stone-100/80 border border-stone-200/90 text-left space-y-2">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200">
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-stone-700" />
              <span className="text-xs font-semibold text-stone-900">High-Speed Wi-Fi</span>
            </div>
            <span className="text-[11px] text-stone-500 font-mono">5 GHz</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="text-[10px] uppercase font-mono text-stone-500 block">Network (SSID)</span>
              <span className="font-semibold text-stone-900 font-mono text-xs">{property.wifiNetwork}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono text-stone-500 block">Password</span>
              <span className="font-semibold text-stone-900 font-mono text-xs">{property.wifiPassword}</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-stone-100 w-full flex items-center justify-between text-xs text-stone-500">
          <div>
            Host: <strong className="text-stone-800">{property.hostName}</strong> ({property.hostPhone})
          </div>
          <div className="font-mono text-[10px] text-stone-400">
            Powered by Stumari
          </div>
        </div>
      </div>
    </div>
  );
};
