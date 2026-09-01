import React, { useState, useEffect } from 'react';
import CustomCursor from './components/common/CustomCursor';
import FloatingControls from './components/common/FloatingControls';
import CommandPalette from './components/common/CommandPalette';
import Toast from './components/common/Toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Philosophy from './components/sections/Philosophy';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import { personalData } from './data/personal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Global keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Section observer to update active section in navbar and floating controls
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'philosophy', 'education', 'certifications', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.contact.email);
    showToast(`Copied ${personalData.contact.email} to clipboard!`);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalData.contact.resumeUrl;
    link.download = 'Bharat_Sharma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Downloading Bharat Sharma Resume (PDF)...');
  };

  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-[#F5F5F5] font-sans selection:bg-[#C7FF2F]/20 selection:text-[#C7FF2F] overflow-x-hidden">
      
      {/* Desktop Subtle Neon Cursor */}
      <CustomCursor />

      {/* Floating Right-Side Controls */}
      <FloatingControls
        activeSection={activeSection}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Fixed Sticky Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Sections Hierarchy */}
      <main className="relative z-10">
        <Hero
          onNavigate={handleNavigate}
          onDownloadResume={handleDownloadResume}
        />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Philosophy />

        <Education />

        <Certifications />

        <Contact
          onCopyEmail={handleCopyEmail}
        />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onNavigate={handleNavigate}
        onCopyEmail={handleCopyEmail}
      />

      {/* Action Toast */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />

    </div>
  );
}
