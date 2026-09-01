import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Sparkles, Home, Bot, Play, Music, Film, Layers } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { projectsData } from '../../data/projects';
import CaseStudyModal from './CaseStudyModal';
import AIChatbotPreview from './AIChatbotPreview';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [isAISimulatorOpen, setIsAISimulatorOpen] = useState(false);

  const handleOpenCaseStudy = (project) => {
    setSelectedProject(project);
    setIsCaseStudyOpen(true);
  };

  return (
    <section id="projects" aria-label="Selected Projects Showcase" className="relative py-24 bg-[#0D0D0D] overflow-hidden">
      {/* Dark green ambient radial light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#0B2112]/45 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C7FF2F] block mb-3">
              04 — SELECTED WORK
            </span>
            <h2 className="font-heading font-light text-3xl sm:text-5xl lg:text-6xl text-[#F5F5F5] tracking-tight">
              Things I&apos;ve <br className="hidden sm:inline" />
              <span className="text-white font-normal">built.</span>
            </h2>
          </div>

          <div className="text-xs font-mono text-[#6B6B6B] max-w-xs">
            Asymmetric case studies featuring full-stack architectures, generative AI, and UI engineering.
          </div>
        </div>

        {/* Asymmetric Project Cards Showcase */}
        <div className="space-y-12">
          {projectsData.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-[#111111]/90 border border-white/10 hover:border-[#C7FF2F]/50 transition-all duration-500 shadow-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(199,255,47,0.15)]"
              >
                {/* Asymmetric 12-Column Grid */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
                  
                  {/* Text Details Column (5 or 6 Cols) */}
                  <div className={`space-y-6 ${isReversed ? 'lg:col-span-5 lg:col-start-8' : 'lg:col-span-6'}`}>
                    
                    {/* Number & Category */}
                    <div className="flex items-center gap-4">
                      <span className="font-heading font-light text-4xl sm:text-5xl text-[#6B6B6B] group-hover:text-[#C7FF2F] transition-colors duration-300">
                        {project.number}
                      </span>
                      <div className="h-4 w-px bg-white/10" />
                      <span className="text-xs font-mono tracking-widest text-[#C7FF2F] uppercase">
                        {project.category}
                      </span>
                    </div>

                    {/* Title & Short Description */}
                    <div>
                      <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F5F5F5] group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#A5A5A5] mt-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#F5F5F5] group-hover:border-[#C7FF2F]/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Card Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-3">
                      {/* Deep-Dive Case Study Trigger */}
                      <button
                        onClick={() => handleOpenCaseStudy(project)}
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C7FF2F] hover:bg-[#A8FF00] text-[#0D0D0D] font-heading font-bold text-xs tracking-wide transition-all shadow-[0_0_15px_rgba(199,255,47,0.3)] hover:scale-105"
                      >
                        <span>Inspect Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform group-hover/btn:translate-x-1" />
                      </button>

                      {/* Interactive AI Preview Shortcut for Project 02 */}
                      {project.hasInteractivePreview && (
                        <button
                          onClick={() => setIsAISimulatorOpen(true)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0B2112] hover:bg-[#0e2b17] border border-[#C7FF2F]/40 text-[#C7FF2F] font-heading font-semibold text-xs transition-all hover:scale-105"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Live AI Simulator</span>
                        </button>
                      )}

                      {/* GitHub Repository Link */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="p-2.5 rounded-full bg-[#111111] hover:bg-white/10 border border-white/10 text-[#A5A5A5] hover:text-[#F5F5F5] transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>

                  </div>

                  {/* Visual Interface Mockup Column (6 or 7 Cols) */}
                  <div className={`${isReversed ? 'lg:col-span-7 lg:col-start-1' : 'lg:col-span-6'}`}>
                    <div className="relative rounded-2xl bg-[#0D0D0D] border border-white/10 overflow-hidden group-hover:border-[#C7FF2F]/40 transition-all duration-500 p-5 shadow-xl">
                      
                      {/* Dark Luxury Property Mockup (Project 01: Airbnb Clone) */}
                      {project.visualType === 'property-interface' && (
                        <div className="space-y-4 font-sans">
                          {/* Mockup Topbar */}
                          <div className="flex items-center justify-between pb-3 border-b border-white/5">
                            <div className="flex items-center gap-2">
                              <div className="p-1 rounded-lg bg-[#C7FF2F]/10 text-[#C7FF2F]">
                                <Home className="w-4 h-4" />
                              </div>
                              <span className="text-xs font-mono text-[#F5F5F5] font-semibold">Airbnb MERN Engine</span>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#A5A5A5]">REST / CRUD</span>
                          </div>

                          {/* Property Visual Card Simulation */}
                          <div className="relative h-44 rounded-xl bg-gradient-to-tr from-[#0B2112] via-[#161616] to-[#07140B] p-4 flex flex-col justify-between overflow-hidden border border-white/5">
                            <div className="flex items-center justify-between">
                              <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#C7FF2F] border border-[#C7FF2F]/30">
                                {project.previewDetails.rating}
                              </span>
                              <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white">
                                {project.previewDetails.price}
                              </span>
                            </div>

                            <div>
                              <div className="font-heading font-bold text-sm text-white">
                                {project.previewDetails.location}
                              </div>
                              <div className="text-[11px] text-[#A5A5A5]">
                                Model-View-Controller · EJS Templates · Mongoose ODM
                              </div>
                            </div>
                          </div>

                          {/* Mockup Features Pill Grid */}
                          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#A5A5A5]">
                            {project.previewDetails.features.map((f, fIdx) => (
                              <div key={fIdx} className="p-2 rounded-lg bg-white/5 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C7FF2F]" />
                                <span className="truncate">{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Futuristic AI Interface Mockup (Project 02: AI Chatbot) */}
                      {project.visualType === 'ai-interface' && (
                        <div className="space-y-4 font-mono text-xs">
                          {/* AI Topbar */}
                          <div className="flex items-center justify-between pb-3 border-b border-white/5">
                            <div className="flex items-center gap-2">
                              <div className="p-1 rounded-lg bg-[#0B2112] text-[#C7FF2F]">
                                <Bot className="w-4 h-4" />
                              </div>
                              <span className="text-xs text-[#F5F5F5] font-semibold">Gemini LLM Stream</span>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-[#0B2112] text-[10px] text-[#C7FF2F] border border-[#C7FF2F]/30">
                              ACTIVE
                            </span>
                          </div>

                          {/* AI Chat Thread Simulation */}
                          <div className="h-44 rounded-xl bg-gradient-to-b from-[#07140B] to-[#111111] p-3.5 space-y-2.5 overflow-hidden border border-white/5">
                            <div className="flex justify-end">
                              <div className="px-3 py-1.5 rounded-xl bg-[#C7FF2F] text-[#0D0D0D] font-medium text-[11px] max-w-[85%]">
                                Explain how React Hooks manage asynchronous API state.
                              </div>
                            </div>

                            <div className="flex items-start gap-2">
                              <div className="w-5 h-5 rounded bg-[#0B2112] text-[#C7FF2F] flex items-center justify-center text-[10px]">
                                <Sparkles className="w-3 h-3" />
                              </div>
                              <div className="p-2.5 rounded-xl bg-[#161616] border border-white/5 text-[11px] text-[#A5A5A5] leading-relaxed">
                                <span className="text-[#C7FF2F] font-bold">Gemini Response:</span> `useState` holds response tokens while `useEffect` coordinates lifecycle triggers...
                              </div>
                            </div>
                          </div>

                          {/* Trigger Banner */}
                          <button
                            onClick={() => setIsAISimulatorOpen(true)}
                            className="w-full py-2 rounded-lg bg-[#0B2112] hover:bg-[#0e2b17] border border-[#C7FF2F]/30 text-xs text-[#C7FF2F] font-bold flex items-center justify-center gap-2 transition-colors"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Click to Test Live AI Conversation</span>
                          </button>
                        </div>
                      )}

                      {/* Cinematic Media Interface Mockup (Project 03: Spotify & Netflix) */}
                      {project.visualType === 'media-interface' && (
                        <div className="space-y-4 font-sans">
                          {/* Media Topbar */}
                          <div className="flex items-center justify-between pb-3 border-b border-white/5">
                            <div className="flex items-center gap-2">
                              <div className="p-1 rounded-lg bg-red-500/10 text-red-400">
                                <Film className="w-4 h-4" />
                              </div>
                              <span className="text-xs font-mono text-[#F5F5F5] font-semibold">Streaming UI Systems</span>
                            </div>
                            <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-[#A5A5A5]">Bootstrap + CSS3</span>
                          </div>

                          {/* Dual Interface Preview Grid */}
                          <div className="grid grid-cols-2 gap-3 h-44">
                            {/* Spotify Dark Tile */}
                            <div className="rounded-xl bg-gradient-to-b from-[#0B2112] to-[#121212] p-3 flex flex-col justify-between border border-white/5">
                              <div className="flex items-center gap-1.5 text-xs text-[#C7FF2F] font-mono">
                                <Music className="w-3.5 h-3.5" />
                                <span>Spotify Web</span>
                              </div>
                              <div className="space-y-1">
                                <div className="text-[11px] font-bold text-white">Audio Controller</div>
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                  <div className="w-2/3 h-full bg-[#C7FF2F]" />
                                </div>
                              </div>
                            </div>

                            {/* Netflix Cinematic Tile */}
                            <div className="rounded-xl bg-gradient-to-b from-[#1a0808] to-[#121212] p-3 flex flex-col justify-between border border-white/5">
                              <div className="flex items-center gap-1.5 text-xs text-red-400 font-mono">
                                <Film className="w-3.5 h-3.5" />
                                <span>Netflix Clone</span>
                              </div>
                              <div className="space-y-1">
                                <div className="text-[11px] font-bold text-white">Billboard Hero</div>
                                <div className="text-[9px] text-[#A5A5A5]">Vignette Backdrop &amp; FAQ Accordion</div>
                              </div>
                            </div>
                          </div>

                          {/* Responsiveness Indicator */}
                          <div className="p-2 rounded-lg bg-white/5 flex items-center justify-between text-[11px] font-mono text-[#A5A5A5]">
                            <span>Responsive Layout: Mobile &amp; Desktop</span>
                            <span className="text-[#C7FF2F]">100% Tested</span>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
        onLaunchAISimulator={() => setIsAISimulatorOpen(true)}
      />

      {/* Live AI Chatbot Simulator Modal */}
      <AIChatbotPreview
        isOpen={isAISimulatorOpen}
        onClose={() => setIsAISimulatorOpen(false)}
      />
    </section>
  );
}
