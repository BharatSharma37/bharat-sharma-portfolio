import React from 'react';
import { Award, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { certificationsData } from '../../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" aria-label="Certifications & Training" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#0B2112]/30 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C7FF2F] block mb-3">
            07 — CERTIFICATIONS
          </span>
          <h2 className="font-heading font-light text-3xl sm:text-5xl lg:text-6xl text-[#F5F5F5] tracking-tight">
            Certifications &amp; <br className="hidden sm:inline" />
            <span className="text-white font-normal">training.</span>
          </h2>
        </div>

        {/* Certifications List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.number}
              className="p-8 rounded-3xl bg-[#111111]/80 border border-white/10 hover:border-[#C7FF2F]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                  <span className="font-heading font-light text-3xl sm:text-4xl text-[#6B6B6B] group-hover:text-[#C7FF2F] transition-colors">
                    {cert.number}
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#C7FF2F]/10 text-[#A5A5A5] group-hover:text-[#C7FF2F] transition-colors">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded bg-[#0B2112] text-[10px] font-mono text-[#C7FF2F] border border-[#C7FF2F]/30 mb-2">
                  {cert.tag}
                </div>

                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#F5F5F5] group-hover:text-white transition-colors">
                  {cert.title}
                </h3>

                <div className="text-xs font-mono text-[#A5A5A5] mt-1">
                  {cert.batch} · {cert.issuer} · {cert.year}
                </div>

                <p className="text-xs text-[#A5A5A5] mt-3 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#A5A5A5]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#6B6B6B]">
                <span>VERIFIED TRAINING</span>
                <ShieldCheck className="w-4 h-4 text-[#C7FF2F]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
