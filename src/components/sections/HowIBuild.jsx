import React, { useState } from 'react';
import { Layers, ArrowDown, ArrowRight, Bot, Database, Server, Monitor, CheckCircle, Info } from 'lucide-react';
import { architectureLayers } from '../../data/skills';

export default function HowIBuild() {
  const [activeLayerId, setActiveLayerId] = useState('frontend');

  const activeLayer = architectureLayers.find((l) => l.id === activeLayerId) || architectureLayers[0];

  const layerIcons = {
    frontend: Monitor,
    api: Server,
    database: Database,
    ai: Bot
  };

  return (
    <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-dark-900/60 border border-white/10 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan mb-1">
            <Layers className="w-3.5 h-3.5" />
            <span>INTERACTIVE ARCHITECTURE VISUALIZATION</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            How I Architect Web Applications
          </h3>
        </div>
        <p className="text-xs text-slate-400 max-w-md">
          Click any layer below to inspect request routing, state synchronization, and data lifecycle.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Stack Blocks */}
        <div className="lg:col-span-6 space-y-3">
          {architectureLayers.map((layer, index) => {
            const Icon = layerIcons[layer.id];
            const isActive = activeLayerId === layer.id;

            return (
              <div key={layer.id} className="relative">
                <button
                  onClick={() => setActiveLayerId(layer.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border flex items-center justify-between group ${
                    isActive
                      ? 'bg-dark-850 border-accent-cyan/60 shadow-lg shadow-accent-cyan/10 scale-[1.02]'
                      : 'bg-dark-950/60 border-white/5 hover:border-white/20 hover:bg-dark-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${
                      isActive 
                        ? 'bg-accent-cyan/20 border-accent-cyan text-accent-cyan' 
                        : 'bg-white/5 border-white/10 text-slate-400 group-hover:text-white'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-slate-400">
                        {layer.title}
                      </div>
                      <div className="text-sm font-bold text-white group-hover:text-accent-cyan transition-colors">
                        {layer.tech}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {layer.badge}
                    </span>
                    <ArrowRight className={`w-4 h-4 text-accent-cyan transition-transform ${isActive ? 'translate-x-1 opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                  </div>
                </button>

                {/* Connector arrow between blocks (except last) */}
                {index < architectureLayers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-3.5 h-3.5 text-slate-600 animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Layer Deep-Dive Inspection */}
        <div className="lg:col-span-6 p-6 rounded-2xl bg-dark-950/90 border border-accent-cyan/20 space-y-5">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono uppercase text-accent-cyan tracking-wider">
                Layer Inspection
              </span>
              <h4 className="text-lg font-bold text-white mt-0.5">{activeLayer.title}</h4>
              <p className="text-xs font-mono text-slate-400">{activeLayer.tech}</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
              {activeLayer.badge}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {activeLayer.description}
          </p>

          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono font-semibold text-slate-300 block">
              Architectural Highlights & Best Practices:
            </span>
            <div className="space-y-2">
              {activeLayer.points.map((pt, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] font-mono text-slate-400 flex items-center gap-2">
            <Info className="w-3.5 h-3.5 text-accent-cyan flex-shrink-0" />
            <span>Full end-to-end integration demonstrated in the Airbnb & AI Chatbot projects.</span>
          </div>
        </div>

      </div>
    </div>
  );
}
