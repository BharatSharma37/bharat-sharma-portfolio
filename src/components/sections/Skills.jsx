import React, { useState } from 'react';
import { Code2, Server, Database, Sparkles, Terminal, GitBranch, Cpu, CheckCircle } from 'lucide-react';
import { skillsCategories } from '../../data/skills';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categoryIcons = {
    frontend: Code2,
    backend: Server,
    database: Database,
    ai: Sparkles,
    programming: Terminal,
    tools: GitBranch,
    core: Cpu
  };

  return (
    <section id="skills" aria-label="Technical Skills and Technologies" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0B2112]/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C7FF2F] block mb-3">
              02 — TECHNOLOGY
            </span>
            <h2 className="font-heading font-light text-3xl sm:text-5xl lg:text-6xl text-[#F5F5F5] tracking-tight">
              Tools I use <br className="hidden sm:inline" />
              <span className="text-white font-normal">to build things.</span>
            </h2>
          </div>

          <div className="text-xs font-mono text-[#6B6B6B] max-w-xs">
            Hover over any skill chip to inspect architectural role and implementation focus.
          </div>
        </div>

        {/* Dynamic Interactive Tooltip / Info Bar if skill is hovered */}
        <div className="mb-8 min-h-[48px] p-3.5 rounded-xl bg-[#111111] border border-white/10 flex items-center justify-between transition-all duration-300">
          {hoveredSkill ? (
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C7FF2F] animate-pulse" />
              <span className="text-xs font-bold font-heading text-[#F5F5F5]">
                {hoveredSkill.name}:
              </span>
              <span className="text-xs text-[#A5A5A5] font-mono">
                {hoveredSkill.desc}
              </span>
            </div>
          ) : (
            <div className="text-xs text-[#6B6B6B] font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span>Explore categories below to view technical proficiencies</span>
            </div>
          )}
        </div>

        {/* Interactive Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Code2;
            return (
              <div
                key={category.id}
                className="p-6 rounded-2xl bg-[#111111]/80 border border-white/10 hover:border-[#C7FF2F]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                {/* Category Header */}
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#C7FF2F]/10 text-[#A5A5A5] group-hover:text-[#C7FF2F] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-base text-[#F5F5F5]">
                          {category.title}
                        </h3>
                        <p className="text-[11px] text-[#6B6B6B] font-mono">
                          {category.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => {
                      const isHovered = hoveredSkill?.name === skill.name;
                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer border ${
                            isHovered
                              ? 'bg-[#0B2112] text-[#C7FF2F] border-[#C7FF2F]/60 shadow-[0_0_15px_rgba(199,255,47,0.2)] -translate-y-0.5'
                              : skill.highlight
                              ? 'bg-white/5 text-[#F5F5F5] border-white/10 hover:border-[#C7FF2F]/40'
                              : 'bg-black/30 text-[#A5A5A5] border-white/5 hover:border-white/20'
                          }`}
                        >
                          {skill.name}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Micro Bottom Status */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#6B6B6B]">
                  <span>{category.skills.length} TECHNOLOGIES</span>
                  <span className="text-[#C7FF2F]/70">STANDARDIZED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
