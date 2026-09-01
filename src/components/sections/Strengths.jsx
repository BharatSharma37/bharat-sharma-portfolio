import React from 'react';
import { Shield, Users, Clock, Lightbulb, MessageSquare, Compass, CheckCircle2 } from 'lucide-react';
import { professionalStrengths } from '../../data/extra';

export default function Strengths() {
  const strengthIcons = [
    Lightbulb,
    Users,
    MessageSquare,
    Clock,
    Compass,
    Shield
  ];

  return (
    <section className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald text-xs font-mono">
            <Shield className="w-3.5 h-3.5" />
            <span>INTERPERSONAL & PROFESSIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Strengths</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Character traits, communication habits, and collaboration values that support reliable software engineering.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionalStrengths.map((str, idx) => {
            const Icon = strengthIcons[idx] || CheckCircle2;

            return (
              <div
                key={str.title}
                className="p-6 rounded-3xl bg-dark-900/60 border border-white/10 hover:border-accent-emerald/40 transition-all duration-300 backdrop-blur-md shadow-2xl space-y-3 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-accent-emerald/15 border border-accent-emerald/30 text-accent-emerald group-hover:bg-accent-emerald group-hover:text-dark-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-accent-emerald transition-colors">
                      {str.title}
                    </h3>
                    <span className="text-[10px] font-mono text-accent-cyan block">
                      {str.tagline}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {str.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
