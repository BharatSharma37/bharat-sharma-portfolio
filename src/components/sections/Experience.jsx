import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { experienceData } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" aria-label="Work Experience & Training" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Dark green background ambient glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#0B2112]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C7FF2F] block mb-3">
            03 — EXPERIENCE
          </span>
          <h2 className="font-heading font-light text-3xl sm:text-5xl lg:text-6xl text-[#F5F5F5] tracking-tight">
            Where I&apos;ve been <br className="hidden sm:inline" />
            <span className="text-white font-normal">building.</span>
          </h2>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-[#C7FF2F]/20 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 md:pl-14 space-y-16">
          
          {experienceData.map((exp, idx) => (
            <div
              key={exp.number}
              className="relative group transition-all duration-300"
            >
              {/* Timeline Node Point (Glows on Hover) */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[63px] top-1.5 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#0D0D0D] border-2 border-[#C7FF2F] group-hover:bg-[#C7FF2F] group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(199,255,47,0.4)]" />
              </div>

              {/* Timeline Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 rounded-3xl bg-[#111111]/90 border border-white/10 group-hover:border-[#C7FF2F]/40 transition-all duration-300 shadow-xl">
                
                {/* Left Side: Large Number & Period Metadata (4 Cols) */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4">
                  <div>
                    {/* Big Agency Number */}
                    <span className="font-heading font-light text-5xl sm:text-6xl text-[#6B6B6B] group-hover:text-[#C7FF2F] transition-colors">
                      {exp.number}
                    </span>

                    <div className="mt-4 space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2112] border border-[#C7FF2F]/30 text-xs font-mono text-[#C7FF2F]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-[#A5A5A5]">
                        <MapPin className="w-3.5 h-3.5 text-[#6B6B6B]" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Company / Arena */}
                  <div className="pt-4 border-t border-white/5">
                    <span className="text-xs font-mono text-[#6B6B6B] uppercase tracking-widest block">
                      ORGANIZATION
                    </span>
                    <span className="font-heading font-bold text-lg text-white">
                      {exp.company}
                    </span>
                  </div>
                </div>

                {/* Right Side: Role & Detailed Responsibilities (8 Cols) */}
                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#F5F5F5] group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[#A5A5A5] mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Bullet Responsibilities from Resume */}
                  <div className="space-y-3 pt-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#A5A5A5] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#C7FF2F] flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Tags */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-[#F5F5F5]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
