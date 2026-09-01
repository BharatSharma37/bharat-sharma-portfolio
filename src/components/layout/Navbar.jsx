import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalData } from '../../data/personal';

export default function Navbar({ activeSection, onNavigate, onOpenCommandPalette }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-[74px] transition-all duration-300 ${
          isScrolled ? 'glass-navbar scrolled shadow-2xl' : 'glass-navbar'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo / Monogram */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 group focus:outline-none text-left"
          >
            {/* Minimal BS Monogram with Neon Lime Dot */}
            <div className="relative w-10 h-10 rounded-xl bg-[#111111] border border-white/10 group-hover:border-[#C7FF2F]/50 flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-[0_0_15px_rgba(199,255,47,0.2)]">
              <span className="font-heading font-extrabold text-sm tracking-tighter text-[#F5F5F5]">
                BS
              </span>
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#C7FF2F] shadow-[0_0_8px_#C7FF2F]" />
            </div>

            {/* Name and Descriptor */}
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-wider text-[#F5F5F5] group-hover:text-white transition-colors">
                BHARAT SHARMA
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#6B6B6B] uppercase">
                FULL STACK DEVELOPER
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-[#111111]/70 border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-[#C7FF2F] bg-[#0B2112]/90 border border-[#C7FF2F]/30 shadow-[0_0_12px_rgba(199,255,47,0.15)] font-semibold'
                      : 'text-[#A5A5A5] hover:text-[#F5F5F5] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C7FF2F] hover:bg-[#A8FF00] text-[#0D0D0D] font-heading font-semibold text-xs tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(199,255,47,0.35)] hover:shadow-[0_0_25px_rgba(199,255,47,0.5)] hover:scale-[1.02]"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3 py-1.5 rounded-full bg-[#C7FF2F] text-[#0D0D0D] font-heading font-semibold text-xs"
            >
              Connect
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#111111] border border-white/10 text-[#F5F5F5] hover:text-[#C7FF2F] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0D0D0D]/98 backdrop-blur-2xl md:hidden flex flex-col justify-between pt-24 pb-8 px-6 animate-fade-in">
          {/* Ambient glow in mobile menu */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#0B2112] rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col space-y-4">
            <span className="text-[11px] font-mono text-[#6B6B6B] uppercase tracking-widest px-2">
              NAVIGATION
            </span>
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-lg font-heading transition-all ${
                    isActive
                      ? 'bg-[#0B2112] text-[#C7FF2F] border border-[#C7FF2F]/30 font-bold'
                      : 'text-[#F5F5F5] hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#6B6B6B]">0{idx + 1}</span>
                    <span>{link.label}</span>
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#C7FF2F]" />}
                </button>
              );
            })}
          </div>

          {/* Bottom Info & CTA */}
          <div className="relative z-10 space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3.5 rounded-xl bg-[#C7FF2F] hover:bg-[#A8FF00] text-[#0D0D0D] font-heading font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(199,255,47,0.3)]"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <div className="text-center text-xs text-[#6B6B6B] font-mono">
              Aligarh, Uttar Pradesh, India
            </div>
          </div>
        </div>
      )}
    </>
  );
}
