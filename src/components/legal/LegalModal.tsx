import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-stone-200 my-auto animate-in fade-in zoom-in-95">
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2">
            {type === 'terms' ? (
              <FileText className="w-5 h-5 text-amber-600" />
            ) : (
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            )}
            <h2 className="font-serif text-xl font-bold text-stone-900">
              {type === 'terms' ? 'Terms of Service' : 'Privacy Policy & Guest Data'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 text-xs text-stone-600 space-y-4 max-h-[60vh] overflow-y-auto pr-2 leading-relaxed">
          {type === 'terms' ? (
            <>
              <p>
                <strong>1. Acceptance of Terms:</strong> By creating an account or accessing Stumari ("Platform"), hosts and guests agree to these terms. Stumari provides software tools for short-term rental hosts to generate digital guidebooks and printable QR flyers.
              </p>
              <p>
                <strong>2. Host Responsibility:</strong> Hosts are solely responsible for the accuracy of check-in codes, Wi-Fi passwords, house manual instructions, and local recommendations published on their guidebooks.
              </p>
              <p>
                <strong>3. Intellectual Property:</strong> All trademarks, logos, and interface designs remain the property of Stumari. Content uploaded by hosts remains their property.
              </p>
              <p>
                <strong>4. Service Availability:</strong> Stumari aims for 99.9% uptime for guest guidebooks via globally distributed CDN edge servers.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Zero Guest Tracking & Privacy:</strong> Guests accessing a Stumari guidebook are never required to create an account, log in, or install an application. We do not sell guest data or track individual guests across the web.
              </p>
              <p>
                <strong>2. Search Engine Indexing Protection:</strong> All dynamic guest guidebooks (`/g/:property-slug`) strictly enforce <code>noindex, nofollow</code> robot meta tags. Sensitive host information such as lockbox codes and Wi-Fi credentials are never indexed by Google, Bing, or web scrapers.
              </p>
              <p>
                <strong>3. Host Account Data:</strong> We store minimal host information (name, email, property guide content, and payment identifiers via Stripe). All communications are encrypted in transit via HTTPS / TLS 1.3.
              </p>
              <p>
                <strong>4. Data Portability:</strong> Hosts can export their guidebooks and delete their accounts at any time.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
