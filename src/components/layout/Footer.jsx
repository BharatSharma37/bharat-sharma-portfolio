import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../common/Icons';
import { personalData } from '../../data/personal';

export default function Footer({ onNavigate }) {
  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-[#0D0D0D] border-t border-white/5 pt-16 pb-12 overflow-hidden">
      {/* Subtle bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#0B2112]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start pb-12 border-b border-white/5">
          {/* Left Column: Branding */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#111111] border border-white/10 flex items-center justify-center relative">
                <span className="font-heading font-extrabold text-xs text-[#F5F5F5]">BS</span>
                <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-[#C7FF2F]" />
              </div>
              <span className="font-heading font-bold text-base tracking-wider text-[#F5F5F5]">
                BHARAT SHARMA
              </span>
            </div>
            <span className="text-xs font-mono tracking-widest text-[#6B6B6B] uppercase">
              FULL STACK DEVELOPER
            </span>
            <p className="text-xs text-[#A5A5A5] pt-2 max-w-xs leading-relaxed">
              Crafting modern, responsive web experiences, robust REST APIs, and AI-powered interfaces.
            </p>
          </div>

          {/* Center Column: Navigation */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="text-xs text-[#A5A5A5] hover:text-[#C7FF2F] transition-colors py-1 font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Column: Social Links */}
          <div className="flex flex-col md:items-end space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#6B6B6B]">
              CONNECT
            </span>
            <div className="flex items-center gap-3">
              <a
                href={personalData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-[#111111] border border-white/5 hover:border-[#C7FF2F]/40 text-[#A5A5A5] hover:text-[#C7FF2F] transition-all hover:scale-105"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.contact.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-[#111111] border border-white/5 hover:border-[#C7FF2F]/40 text-[#A5A5A5] hover:text-[#C7FF2F] transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              {personalData.contact.github && (
                <a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-xl bg-[#111111] border border-white/5 hover:border-[#C7FF2F]/40 text-[#A5A5A5] hover:text-[#C7FF2F] transition-all hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}
            </div>
            <a
              href={`mailto:${personalData.contact.email}`}
              className="text-xs font-mono text-[#6B6B6B] hover:text-[#C7FF2F] transition-colors inline-flex items-center gap-1"
            >
              <span>{personalData.contact.email}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6B6B] font-mono">
          <div>
            &copy; 2026 Bharat Sharma. Built with code &amp; curiosity.
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C7FF2F] animate-pulse" />
              <span>Available for opportunities</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
