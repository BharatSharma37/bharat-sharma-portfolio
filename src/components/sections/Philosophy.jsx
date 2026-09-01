import React from 'react';
import { philosophyData } from '../../data/philosophy';

export default function Philosophy() {
  return (
    <section id="philosophy" aria-label="Development Approach & Philosophy" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Dark green ambient radial background */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#0B2112]/35 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C7FF2F] block mb-3">
            05 — APPROACH
          </span>
          <h2 className="font-heading font-light text-3xl sm:text-5xl lg:text-6xl text-[#F5F5F5] tracking-tight">
            I don&apos;t just write code. <br className="hidden sm:inline" />
            <span className="text-white font-normal">I solve problems.</span>
          </h2>
        </div>

        {/* 4 Large Minimal Approach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {philosophyData.map((item) => (
            <div
              key={item.number}
              className="p-8 sm:p-10 rounded-3xl bg-[#111111]/80 border border-white/10 hover:border-[#C7FF2F]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
                  <span className="font-heading font-light text-4xl sm:text-5xl text-[#6B6B6B] group-hover:text-[#C7FF2F] transition-colors">
                    {item.number}
                  </span>
                  <span className="text-xs font-mono text-[#6B6B6B] uppercase tracking-widest">
                    {item.tagline}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#F5F5F5] group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[#A5A5A5] mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#6B6B6B]">CORE PRINCIPLE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF2F]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
