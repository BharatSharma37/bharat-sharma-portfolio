import React from 'react';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { educationData } from '../../data/education';

export default function Education() {
  return (
    <section id="education" aria-label="Academic Education and Foundation" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#0B2112]/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C7FF2F] block mb-3">
            06 — EDUCATION
          </span>
          <h2 className="font-heading font-light text-3xl sm:text-5xl lg:text-6xl text-[#F5F5F5] tracking-tight">
            The <span className="text-white font-normal">foundation.</span>
          </h2>
        </div>

        {/* Compact Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu) => (
            <div
              key={edu.number}
              className="p-8 rounded-3xl bg-[#111111]/80 border border-white/10 hover:border-[#C7FF2F]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                  <span className="font-heading font-light text-3xl sm:text-4xl text-[#6B6B6B] group-hover:text-[#C7FF2F] transition-colors">
                    {edu.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#0B2112] border border-[#C7FF2F]/30 text-xs font-mono text-[#C7FF2F]">
                    {edu.status || edu.period}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#F5F5F5] group-hover:text-white transition-colors">
                  {edu.degree}
                </h3>

                {edu.board && (
                  <div className="text-xs font-mono text-[#A5A5A5] mt-1">
                    {edu.board} · {edu.period}
                  </div>
                )}

                <p className="text-xs sm:text-sm text-[#A5A5A5] mt-3 leading-relaxed">
                  {edu.description}
                </p>

                {/* Core focus areas */}
                <div className="space-y-2 pt-4 mt-4 border-t border-white/5">
                  {edu.coreAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#A5A5A5]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF2F]" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#6B6B6B]">
                <span>{edu.badge}</span>
                <GraduationCap className="w-4 h-4 text-[#A5A5A5]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
