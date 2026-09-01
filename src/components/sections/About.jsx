import React, { useState } from 'react';
import { Layers, Sparkles, Database, Code, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { personalData } from '../../data/personal';

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" aria-label="About Bharat Sharma" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Dark green ambient radial background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#0B2112]/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C7FF2F] block mb-3">
            {personalData.about.eyebrow}
          </span>
          <h2 className="font-heading font-light text-3xl sm:text-5xl lg:text-6xl text-[#F5F5F5] tracking-tight">
            I build with <span className="text-white font-normal">code</span>, <br className="hidden sm:inline" />
            <span className="text-[#C7FF2F] font-normal">curiosity</span> and purpose.
          </h2>
        </div>

        {/* Two-Column Layout: Left Portrait Card (5 Cols) & Right Narrative/Info Grid (7 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Stylized Portrait Card with Dark/Green Tint (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-[#111111] border border-white/10 hover:border-[#C7FF2F]/40 p-3 sm:p-4 shadow-2xl transition-all duration-300 group">
              
              {/* Portrait container with grayscale & green tint treatment */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#0D0D0D]">
                {!imageError ? (
                  <img
                    src={personalData.photo}
                    alt={`${personalData.name} portrait`}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#161616] via-[#0B2112] to-[#07140B] p-6 text-center">
                    <span className="font-heading font-extrabold text-4xl text-[#C7FF2F]">BS</span>
                    <span className="font-heading font-bold text-sm text-white mt-2">{personalData.name}</span>
                  </div>
                )}

                {/* Dark Green Gradient Tint Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2112]/90 via-[#07140B]/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-[#0B2112]/20 mix-blend-color pointer-events-none" />

                {/* Floating Badge on Portrait */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between p-3 rounded-xl bg-[#0D0D0D]/90 backdrop-blur-md border border-[#C7FF2F]/30 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C7FF2F] animate-pulse" />
                    <span className="font-mono text-xs font-bold text-[#C7FF2F] tracking-wide">
                      {personalData.about.badge}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#A5A5A5]">AKTU · 2026</span>
                </div>
              </div>

              {/* Bottom Quick Feature Tag Bar */}
              <div className="pt-3 px-1 flex items-center justify-between text-[11px] font-mono text-[#6B6B6B]">
                <span>FULL-STACK SPECIALIST</span>
                <span className="text-[#C7FF2F]">AI &amp; MERN</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Visual Info Cards (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Story Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#A5A5A5] leading-relaxed">
              {personalData.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Visual Statistics & Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {personalData.about.infoCards.map((card, idx) => {
                const icons = [Layers, Sparkles, Database, Code];
                const Icon = icons[idx % icons.length];
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#111111]/90 border border-white/10 hover:border-[#C7FF2F]/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono text-[#6B6B6B] uppercase tracking-widest">
                        {card.label}
                      </span>
                      <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#C7FF2F]/10 text-[#A5A5A5] group-hover:text-[#C7FF2F] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="font-heading font-bold text-base sm:text-lg text-[#F5F5F5] tracking-tight group-hover:text-white transition-colors">
                      {card.value}
                    </div>

                    <div className="text-xs text-[#A5A5A5] mt-2 font-mono leading-relaxed">
                      {card.subtitle}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
