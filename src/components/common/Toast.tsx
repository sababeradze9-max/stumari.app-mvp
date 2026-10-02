import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Toast: React.FC = () => {
  const { toast } = useApp();

  if (!toast) return null;

  return (
    <aside
      aria-label="Notifications"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-stone-900 text-stone-50 shadow-2xl border border-stone-800 animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      {toast.type === 'success' ? (
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      ) : (
        <Info className="w-5 h-5 text-amber-400 shrink-0" />
      )}
      <span className="text-sm font-medium text-stone-100">{toast.message}</span>
    </aside>
  );
};
