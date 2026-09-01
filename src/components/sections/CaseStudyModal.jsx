import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export default function CaseStudyModal({ project, isOpen, onClose, onLaunchAISimulator }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#111111] border border-white/10 rounded-3xl shadow-2xl overflow-y-auto p-6 sm:p-10 text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#A5A5A5] hover:text-white transition-colors"
          aria-label="Close Case Study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-heading font-light text-3xl sm:text-4xl text-[#C7FF2F]">
              {project.number}
            </span>
            <span className="text-xs font-mono text-[#6B6B6B] uppercase tracking-widest">
              {project.category}
            </span>
          </div>

          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#F5F5F5]">
            {project.title}
          </h2>

          <p className="text-sm sm:text-base text-[#A5A5A5] max-w-2xl leading-relaxed">
            {caseStudy.overview}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-[#0B2112] border border-[#C7FF2F]/30 text-xs font-mono text-[#C7FF2F]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Body Sections */}
        <div className="py-8 space-y-8">
          
          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/5 space-y-2">
              <span className="text-xs font-mono text-[#C7FF2F] uppercase tracking-widest">
                01 — THE PROBLEM
              </span>
              <h3 className="font-heading font-semibold text-base text-[#F5F5F5]">
                Engineering Challenge
              </h3>
              <p className="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed">
                {caseStudy.coreProblem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/5 space-y-2">
              <span className="text-xs font-mono text-[#C7FF2F] uppercase tracking-widest">
                02 — THE ARCHITECTURE
              </span>
              <h3 className="font-heading font-semibold text-base text-[#F5F5F5]">
                Architectural Approach
              </h3>
              <p className="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline */}
          <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/5 space-y-4">
            <span className="text-xs font-mono text-[#6B6B6B] uppercase tracking-widest block">
              DATA FLOW &amp; PIPELINE
            </span>
            <div className="space-y-3">
              {caseStudy.architecture.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-mono text-[#F5F5F5]">
                  <span className="w-5 h-5 rounded-full bg-[#0B2112] border border-[#C7FF2F]/40 flex items-center justify-center text-[10px] text-[#C7FF2F] font-bold">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#6B6B6B] uppercase tracking-widest block">
              KEY DELIVERABLES &amp; CAPABILITIES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A5A5A5]">
                  <CheckCircle2 className="w-4 h-4 text-[#C7FF2F] flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Learnings */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <span className="text-xs font-mono text-[#6B6B6B] uppercase tracking-widest block">
              CORE TAKEAWAYS &amp; LESSONS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {caseStudy.technicalLearnings.map((learn, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 text-xs text-[#A5A5A5] leading-relaxed">
                  {learn}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.hasInteractivePreview && (
              <button
                onClick={() => {
                  onClose();
                  onLaunchAISimulator();
                }}
                className="px-5 py-2.5 rounded-full bg-[#C7FF2F] text-[#0D0D0D] font-heading font-bold text-xs flex items-center gap-2 hover:bg-[#A8FF00] shadow-[0_0_20px_rgba(199,255,47,0.3)] transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Launch Live AI Simulator</span>
              </button>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#F5F5F5] flex items-center gap-2 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Repository</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-[#A5A5A5] hover:text-white transition-colors"
          >
            Close Window [Esc]
          </button>
        </div>

      </div>
    </div>
  );
}
