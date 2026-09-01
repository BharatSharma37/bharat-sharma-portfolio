import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Mail, Sparkles, MapPin, Code2, Cpu } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../common/Icons';
import { personalData } from '../../data/personal';

export default function Hero({ onNavigate, onDownloadResume }) {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      aria-label="Introduction & Hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Cinematic Dark Green & Radial Atmospheric Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[480px] bg-[#0B2112]/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-[#07140B]/90 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[500px] h-[350px] bg-[#0B2112]/40 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle digital background grid */}
      <div className="absolute inset-0 bg-grid-agency opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons (7 Cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111111]/80 border border-white/10 w-fit backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#C7FF2F] shadow-[0_0_8px_#C7FF2F] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono tracking-widest text-[#F5F5F5] uppercase">
                {personalData.hero.eyebrow}
              </span>
            </div>

            {/* Large Lightweight Elegant Heading */}
            <h1 className="font-heading font-light text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#F5F5F5] leading-[1.08]">
              {personalData.hero.headingLine1} <br />
              <span className="font-normal text-white">
                {personalData.hero.headingLine2}
              </span> <br />
              <span className="font-medium text-[#C7FF2F] glow-text-lime inline-block">
                {personalData.hero.headingLine3}
              </span>
            </h1>

            {/* Concise Summary Description */}
            <p className="text-base sm:text-lg text-[#A5A5A5] max-w-xl font-normal leading-relaxed">
              {personalData.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary View Work CTA */}
              <button
                onClick={() => onNavigate('projects')}
                className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#C7FF2F] hover:bg-[#A8FF00] text-[#0D0D0D] font-heading font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(199,255,47,0.35)] hover:shadow-[0_0_40px_rgba(199,255,47,0.55)] hover:scale-[1.02]"
              >
                <span>{personalData.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
              </button>

              {/* Secondary Let's Connect Button */}
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111111]/80 hover:bg-[#161616] border border-white/10 hover:border-[#C7FF2F]/40 text-[#F5F5F5] font-heading font-medium text-sm tracking-wide transition-all duration-300 backdrop-blur-md"
              >
                <span>{personalData.hero.secondaryCta}</span>
                <ArrowUpRight className="w-4 h-4 text-[#A5A5A5]" />
              </button>
            </div>

            {/* Hero Micro Information */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A5A5A5]">
                <span className="text-[#6B6B6B]">AVAILABLE FOR:</span>
                <span className="text-[#F5F5F5] font-medium tracking-wide">
                  INTERNSHIPS · FULL-TIME · COLLABORATIONS
                </span>
              </div>

              <div className="text-xs font-mono text-[#6B6B6B]">
                Based in <span className="text-[#A5A5A5]">Aligarh, India</span>
              </div>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Bharat Sharma LinkedIn"
                className="p-2.5 rounded-xl bg-[#111111] border border-white/5 hover:border-[#C7FF2F]/50 text-[#A5A5A5] hover:text-[#C7FF2F] transition-all hover:scale-105"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.contact.email}`}
                aria-label="Send email to Bharat Sharma"
                className="p-2.5 rounded-xl bg-[#111111] border border-white/5 hover:border-[#C7FF2F]/50 text-[#A5A5A5] hover:text-[#C7FF2F] transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
              </a>
              {personalData.contact.github && (
                <a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Bharat Sharma GitHub"
                  className="p-2.5 rounded-xl bg-[#111111] border border-white/5 hover:border-[#C7FF2F]/50 text-[#A5A5A5] hover:text-[#C7FF2F] transition-all hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
            </div>

          </div>

          {/* Right Column: Professional Personal Portrait in Futuristic Frame (5 Cols on desktop, 35–45% visual area) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Background Radial Glow behind photo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2112] via-[#07140B]/80 to-[#C7FF2F]/10 rounded-[32px] blur-3xl pointer-events-none opacity-80" />

            {/* Floating Portrait Container with Barely Noticeable Subtle Float Animation */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] rounded-[28px] sm:rounded-[32px] bg-[#111111]/90 border border-white/10 hover:border-[#C7FF2F]/50 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:shadow-[0_0_40px_rgba(199,255,47,0.25)] overflow-hidden group animate-float">
              
              {/* Photo / Portrait Media */}
              {!imageError ? (
                <img
                  src={personalData.photo}
                  alt={personalData.name}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 contrast-[1.05] brightness-95"
                />
              ) : (
                /* High-End Creative Fallback Portrait */
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#161616] via-[#0B2112] to-[#07140B] p-8 text-center">
                  <div className="w-24 h-24 rounded-2xl bg-[#0D0D0D] border border-[#C7FF2F]/40 flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(199,255,47,0.2)]">
                    <span className="font-heading font-extrabold text-3xl text-[#F5F5F5]">BS</span>
                  </div>
                  <span className="font-heading font-bold text-lg text-white">{personalData.name}</span>
                  <span className="text-xs font-mono text-[#C7FF2F] mt-1 uppercase tracking-wider">{personalData.role}</span>
                </div>
              )}

              {/* Cinematic Dark Gradient & Rim-Light Overlays (seamlessly blending photo into background) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/30 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B2112]/60 pointer-events-none" />
              <div className="absolute inset-0 border border-white/5 rounded-[28px] sm:rounded-[32px] pointer-events-none group-hover:border-[#C7FF2F]/30 transition-colors duration-500" />

              {/* Top-Right Decorative Monogram & Online Dot */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF2F] shadow-[0_0_8px_#C7FF2F] animate-pulse" />
                <span className="font-heading font-bold text-[10px] tracking-wider text-[#F5F5F5]">BS · DEV</span>
              </div>

              {/* Bottom-Left Floating Badge: FULL STACK DEVELOPER */}
              <div className="absolute bottom-16 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0D0D0D]/85 backdrop-blur-md border border-[#C7FF2F]/30 shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                <Code2 className="w-3.5 h-3.5 text-[#C7FF2F]" />
                <span className="font-mono text-[11px] font-bold text-[#F5F5F5] tracking-wide">
                  FULL STACK DEVELOPER
                </span>
              </div>

              {/* Bottom-Right Floating Badge: ALIGARH · INDIA */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between px-3.5 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 shadow-lg text-[10px] font-mono text-[#A5A5A5]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#C7FF2F]" />
                  <span>ALIGARH, INDIA</span>
                </div>
                <span className="text-[#C7FF2F] font-bold">2026</span>
              </div>

              {/* Subtle neon rim light effect */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#C7FF2F]/40 to-transparent pointer-events-none" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
