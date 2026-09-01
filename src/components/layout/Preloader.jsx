import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 200);
          return 100;
        }
        return prev + 20;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-950 text-white font-mono">
      <div className="relative flex flex-col items-center max-w-xs w-full px-6 space-y-6">
        {/* Monogram Badge */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-dark-900 border border-accent-cyan/30 shadow-[0_0_30px_rgba(6,182,212,0.25)]">
          <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-indigo-500 font-sans">
            BS
          </span>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-dark-950" />
        </div>

        <div className="text-center space-y-1 font-sans">
          <h2 className="text-base font-bold text-white tracking-wide">Bharat Sharma</h2>
          <p className="text-xs text-slate-400 font-mono flex items-center justify-center gap-1.5">
            <Terminal className="w-3 h-3 text-accent-cyan animate-pulse" />
            Initializing portfolio... {percent}%
          </p>
        </div>

        {/* Progress line */}
        <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-accent-cyan via-accent-indigo to-accent-emerald transition-all duration-200"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
