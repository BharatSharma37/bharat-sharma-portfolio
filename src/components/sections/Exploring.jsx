import React from 'react';
import { Compass, Sparkles, BookOpen, ArrowUpRight } from 'lucide-react';
import { currentlyExploringData } from '../../data/extra';

export default function Exploring() {
  return (
    <section className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>LEARNING HORIZON</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Currently <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Exploring</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Concepts and architectures under continuous active study to advance beyond typical entry-level boundaries.
          </p>
        </div>

        {/* 3 Exploration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentlyExploringData.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-3xl bg-dark-900/60 border border-white/10 hover:border-accent-cyan/40 transition-all duration-300 backdrop-blur-md shadow-2xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-accent-cyan/15 border border-accent-cyan/30 text-accent-cyan font-bold">
                    {item.status}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">{item.category}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Topics list */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block">
                    Exploration Focus Areas:
                  </span>
                  <div className="grid grid-cols-1 gap-1">
                    {item.topics.map((top, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="text-accent-cyan font-mono text-[10px]">➜</span>
                        <span>{top}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500">
                <span>Ongoing Practice & Deepening</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
