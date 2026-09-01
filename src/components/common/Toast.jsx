import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div className="fixed bottom-20 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-[#111111]/95 border border-[#C7FF2F]/40 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(199,255,47,0.2)] text-[#F5F5F5] backdrop-blur-lg animate-bounce-subtle">
      {isSuccess ? (
        <CheckCircle2 className="w-5 h-5 text-[#C7FF2F] flex-shrink-0" />
      ) : (
        <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
      )}
      <span className="text-xs sm:text-sm font-medium tracking-wide">{toast.message}</span>
      <button
        onClick={onClose}
        className="p-1 rounded-full hover:bg-white/10 text-[#A5A5A5] hover:text-[#F5F5F5] transition-colors ml-1"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
