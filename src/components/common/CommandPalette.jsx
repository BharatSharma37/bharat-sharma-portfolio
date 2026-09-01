import React, { useState, useEffect, useRef } from 'react';
import { Search, Code2, User, Briefcase, Sparkles, Send, Mail, FileText, ArrowRight, X } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalData } from '../../data/personal';

export default function CommandPalette({ isOpen, onClose, onNavigate, onCopyEmail, onTriggerAIChatbot }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const commandItems = [
    { id: 'hero', title: 'Home / Hero', category: 'Navigation', icon: User, action: () => { onNavigate('hero'); onClose(); } },
    { id: 'about', title: '01 — About Bharat Sharma', category: 'Navigation', icon: User, action: () => { onNavigate('about'); onClose(); } },
    { id: 'skills', title: '02 — Technology & Skills', category: 'Navigation', icon: Code2, action: () => { onNavigate('skills'); onClose(); } },
    { id: 'experience', title: '03 — Experience Timeline', category: 'Navigation', icon: Briefcase, action: () => { onNavigate('experience'); onClose(); } },
    { id: 'projects', title: '04 — Selected Projects', category: 'Navigation', icon: Sparkles, action: () => { onNavigate('projects'); onClose(); } },
    { id: 'philosophy', title: '05 — Approach & Philosophy', category: 'Navigation', icon: Sparkles, action: () => { onNavigate('philosophy'); onClose(); } },
    { id: 'education', title: '06 — Education & Foundation', category: 'Navigation', icon: FileText, action: () => { onNavigate('education'); onClose(); } },
    { id: 'certifications', title: '07 — Certifications & Training', category: 'Navigation', icon: FileText, action: () => { onNavigate('certifications'); onClose(); } },
    { id: 'contact', title: '08 — Contact & Let\'s Build', category: 'Navigation', icon: Send, action: () => { onNavigate('contact'); onClose(); } },
    { id: 'copy-email', title: `Copy Email (${personalData.contact.email})`, category: 'Actions', icon: Mail, action: () => { onCopyEmail(); onClose(); } },
    { id: 'linkedin', title: 'Open LinkedIn Profile', category: 'External Links', icon: LinkedinIcon, action: () => { window.open(personalData.contact.linkedin, '_blank'); onClose(); } },
  ];

  const filteredItems = commandItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#111111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-scale-up">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-[#C7FF2F]" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search portfolio sections, actions, links..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-[#F5F5F5] placeholder-[#6B6B6B] text-sm focus:outline-none font-sans"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/5 text-[#A5A5A5] hover:text-[#F5F5F5] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/5">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-[#6B6B6B]">
              No commands matching &ldquo;{query}&rdquo;
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#0B2112] text-[#F5F5F5] border border-[#C7FF2F]/30 pl-4'
                      : 'text-[#A5A5A5] hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-[#C7FF2F]/10 text-[#C7FF2F]' : 'bg-white/5 text-[#A5A5A5]'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${isSelected ? 'text-[#F5F5F5]' : 'text-[#A5A5A5]'}`}>
                        {item.title}
                      </div>
                      <div className="text-[10px] text-[#6B6B6B] uppercase tracking-wider font-mono">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#C7FF2F] translate-x-1' : 'opacity-0'}`} />
                </div>
              );
            })
          )}
        </div>

        {/* Keyboard hints footer */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#0D0D0D] border-t border-white/5 text-[11px] text-[#6B6B6B] font-mono">
          <div className="flex items-center gap-2">
            <span>Use</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[#A5A5A5]">↑</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[#A5A5A5]">↓</kbd>
            <span>to navigate</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[#A5A5A5]">Enter</kbd>
            <span>to select</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[#A5A5A5]">Esc</kbd>
            <span>to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
