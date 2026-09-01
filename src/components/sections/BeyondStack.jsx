import React from 'react';
import { Terminal, Binary, Cpu, Layers, CheckCircle2, Shield } from 'lucide-react';
import { beyondTheStackData } from '../../data/extra';

export default function BeyondStack() {
  const pillarIcons = {
    Binary: Binary,
    Cpu: Cpu,
    Terminal: Terminal,
    Layers: Layers
  };

  return (
    <section id="beyond" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo text-xs font-mono">
            <Binary className="w-3.5 h-3.5" />
            <span>08 — CORE ENGINEERING FUNDAMENTALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {beyondTheStackData.headline}
          </h2>
          <p className="text-sm sm:text-base text-accent-cyan font-mono max-w-2xl">
            "{beyondTheStackData.tagline}"
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {beyondTheStackData.pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.icon] || Terminal;

            return (
              <div
                key={pillar.title}
                className="p-6 sm:p-7 rounded-3xl bg-dark-900/60 border border-white/10 hover:border-accent-indigo/40 transition-all duration-300 backdrop-blur-md shadow-2xl space-y-4 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-accent-indigo/15 border border-accent-indigo/30 text-accent-indigo group-hover:bg-accent-indigo group-hover:text-dark-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-accent-indigo transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Topics Pills */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold block mb-2">
                    Key Topics & Implementation:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.topics.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-dark-950/80 border border-white/5 text-[11px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
