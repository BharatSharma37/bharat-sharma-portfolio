import React, { useState } from 'react';
import { Compass, Calendar, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { journeyData } from '../../data/journey';

export default function Journey() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  return (
    <section id="journey" className="py-20 md:py-28 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-indigo/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>02 — MY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Evolution of a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Software Developer</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            From discovering basic programming syntax to architecting full-stack systems and integrating generative AI.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/15 ml-4 sm:ml-32 md:ml-40 space-y-12 pb-6">
          {journeyData.map((item, idx) => {
            const isLast = idx === journeyData.length - 1;
            const isSelected = selectedIdx === idx;

            return (
              <div 
                key={idx} 
                className="relative pl-6 sm:pl-10 group cursor-pointer"
                onClick={() => setSelectedIdx(isSelected ? null : idx)}
              >
                {/* Year Label in left column on larger screens */}
                <div className="hidden sm:block absolute -left-32 md:-left-40 top-1 text-right w-24 md:w-32">
                  <span className="text-xs font-bold font-mono text-accent-cyan block">
                    {item.year}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono uppercase block">
                    {item.phase}
                  </span>
                </div>

                {/* Node Dot on the timeline */}
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  isLast 
                    ? 'border-accent-emerald bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.7)] animate-pulse'
                    : 'border-accent-cyan bg-dark-950 group-hover:bg-accent-cyan group-hover:scale-125'
                }`} />

                {/* Timeline Card */}
                <div className={`p-5 sm:p-6 rounded-2xl transition-all duration-300 border ${
                  isSelected || isLast
                    ? 'bg-dark-900/90 border-accent-cyan/40 shadow-xl shadow-accent-cyan/5'
                    : 'bg-dark-900/50 border-white/10 group-hover:border-white/20 group-hover:bg-dark-900/70'
                }`}>
                  {/* Mobile-only Year Badge */}
                  <div className="sm:hidden flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-accent-cyan">{item.year}</span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">{item.phase}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-accent-cyan transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      {item.institution}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlight pill */}
                  <div className="p-2.5 rounded-xl bg-dark-950/60 border border-white/5 text-xs text-slate-300 mb-4 flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0 mt-0.5" />
                    <span>{item.highlight}</span>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Ending statement */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-accent-cyan/10 via-dark-900 to-accent-indigo/10 border border-white/10 text-center space-y-2">
          <p className="text-base font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            "The journey is still being built."
          </p>
          <p className="text-xs text-slate-400 max-w-lg mx-auto">
            Continuously pushing code, refining system architectures, solving algorithms, and preparing to make an immediate impact on real-world engineering teams.
          </p>
        </div>

      </div>
    </section>
  );
}
