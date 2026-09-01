import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, Compass } from 'lucide-react';

export default function FloatingControls({ activeSection, onOpenCommandPalette, onNavigate }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <aside aria-label="Floating Controls" className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Active Section Label Pill (Desktop) */}
      <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141414]/90 border border-white/10 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-[#A5A5A5] shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF2F] animate-pulse" />
        <span>{activeSection}</span>
      </div>

      {/* Command Palette Trigger */}
      <button
        onClick={onOpenCommandPalette}
        aria-label="Open Command Palette"
        title="Open Command Palette (Ctrl+K)"
        className="w-11 h-11 rounded-full bg-[#111111]/90 hover:bg-[#0B2112] border border-white/10 hover:border-[#C7FF2F]/50 text-[#F5F5F5] hover:text-[#C7FF2F] flex items-center justify-center transition-all duration-300 shadow-xl group hover:scale-105"
      >
        <Terminal className="w-4 h-4 transition-transform group-hover:scale-110" />
      </button>

      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
          className="w-11 h-11 rounded-full bg-[#C7FF2F] text-[#0D0D0D] hover:bg-[#A8FF00] flex items-center justify-center font-bold transition-all duration-300 shadow-[0_0_20px_rgba(199,255,47,0.4)] hover:scale-110 animate-fade-in"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </aside>
  );
}
