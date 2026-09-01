import React, { useEffect } from 'react';
import { Terminal, X, Mail, CheckCircle, Sparkles } from 'lucide-react';

export default function EasterEggModal({ isOpen, onClose, onCopyEmail }) {
  useEffect(() => {
    if (isOpen) {
      // Fire confetti if available
      try {
        import('canvas-confetti').then((confettiModule) => {
          const confetti = confettiModule.default || confettiModule;
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        }).catch(() => {});
      } catch (err) {
        // graceful fallback
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl rounded-2xl bg-dark-900 border border-accent-emerald/40 shadow-2xl shadow-accent-emerald/20 overflow-hidden font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-dark-950/90 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs text-slate-400 font-medium">terminal@bharat-sharma ~ root</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Content */}
        <div className="p-6 space-y-4 text-sm">
          <div className="flex items-center gap-2 text-emerald-400 font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>$ sudo hire bharat</span>
          </div>

          <div className="p-4 rounded-xl bg-dark-950/70 border border-white/5 space-y-2 text-xs text-slate-300">
            <p className="text-slate-400">[AUTHENTICATING ROOT PRIVILEGES...]</p>
            <p className="text-emerald-400">✓ Candidate verified: <span className="text-white font-bold">Bharat Sharma</span></p>
            <p className="text-emerald-400">✓ Primary Stack: <span className="text-slate-200">MongoDB, Express.js, React.js, Node.js</span></p>
            <p className="text-emerald-400">✓ Engineering Mindset: <span className="text-slate-200">Learn by building real-world software</span></p>
            <p className="text-emerald-400">✓ Foundations: <span className="text-slate-200">DSA, System Design Basics, REST APIs</span></p>
            <p className="text-emerald-400">✓ Trainee Credential: <span className="text-slate-200">QSpiders Noida (Jul 2026 - Present)</span></p>
            <div className="pt-2 border-t border-white/10 text-cyan-400 font-bold">
              [ACCESS GRANTED: HIRING FAST-TRACK UNLOCKED]
            </div>
          </div>

          <div className="text-slate-200 font-sans leading-relaxed text-sm">
            <p className="font-semibold text-white">Outstanding decision!</p>
            <p className="text-slate-300 text-xs mt-1">
              Bharat is actively open to meaningful full-stack / MERN developer roles, internships, and engineering opportunities. Let's start the conversation!
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2 font-sans">
            <a
              href="mailto:bharatsharmabarauth@gmail.com?subject=Opportunity%20Discussion%20for%20Bharat%20Sharma"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent-emerald text-dark-950 font-bold text-xs hover:bg-emerald-400 transition-colors shadow-lg shadow-accent-emerald/20"
            >
              <Mail className="w-4 h-4" />
              Email Bharat Directly
            </a>
            <button
              onClick={() => {
                onCopyEmail();
                onClose();
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs border border-white/10 transition-colors"
            >
              <CheckCircle className="w-4 h-4 text-accent-cyan" />
              Copy Email Address
            </button>
            <button
              onClick={onClose}
              className="px-3 py-2 text-xs text-slate-400 hover:text-white transition-colors"
            >
              Close [Esc]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
