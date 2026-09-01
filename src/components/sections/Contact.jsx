import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, ArrowUpRight, Copy } from 'lucide-react';
import { LinkedinIcon } from '../common/Icons';
import { personalData } from '../../data/personal';

export default function Contact({ onCopyEmail }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending / opening mailto client
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto compose mailto trigger
      const mailtoUrl = `mailto:${personalData.contact.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Bharat,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;
      
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section
      id="contact"
      aria-label="Contact & Collaboration"
      className="relative py-28 bg-gradient-to-b from-[#0D0D0D] via-[#0B2112] to-[#07140B] overflow-hidden"
    >
      {/* Huge Atmospheric Neon Lime & Dark Green Radial Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C7FF2F]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-[600px] h-[400px] bg-[#07140B] rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle Digital Grid Overlay */}
      <div className="absolute inset-0 bg-grid-agency opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C7FF2F] block mb-3">
            08 — CONTACT
          </span>
          <h2 className="font-heading font-light text-4xl sm:text-6xl lg:text-7xl text-[#F5F5F5] tracking-tight">
            Have an idea? <br />
            <span className="font-medium text-[#C7FF2F] glow-text-lime">Let&apos;s build it.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A5A5A5] max-w-2xl mt-4 leading-relaxed font-normal">
            I&apos;m interested in building modern web applications, solving interesting problems and collaborating on meaningful digital products.
          </p>
        </div>

        {/* Two-Column Grid: Contact Information & Modern Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Quick Links (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with Copy Trigger */}
            <div className="p-6 rounded-2xl bg-[#111111]/90 border border-white/10 hover:border-[#C7FF2F]/40 transition-all duration-300 shadow-xl group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#0B2112] text-[#C7FF2F] border border-[#C7FF2F]/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#6B6B6B] uppercase tracking-widest block">
                      DIRECT EMAIL
                    </span>
                    <a
                      href={`mailto:${personalData.contact.email}`}
                      className="font-heading font-bold text-sm sm:text-base text-[#F5F5F5] hover:text-[#C7FF2F] transition-colors"
                    >
                      {personalData.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={onCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#A5A5A5] hover:text-[#C7FF2F] transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-[#111111]/90 border border-white/10 hover:border-[#C7FF2F]/40 transition-all duration-300 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#0B2112] text-[#C7FF2F] border border-[#C7FF2F]/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#6B6B6B] uppercase tracking-widest block">
                    TELEPHONE
                  </span>
                  <a
                    href={`tel:${personalData.contact.phone}`}
                    className="font-heading font-bold text-sm sm:text-base text-[#F5F5F5] hover:text-[#C7FF2F] transition-colors"
                  >
                    {personalData.contact.displayPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-[#111111]/90 border border-white/10 hover:border-[#C7FF2F]/40 transition-all duration-300 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#0B2112] text-[#C7FF2F] border border-[#C7FF2F]/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#6B6B6B] uppercase tracking-widest block">
                    LOCATION
                  </span>
                  <div className="font-heading font-bold text-sm sm:text-base text-[#F5F5F5]">
                    {personalData.contact.location}
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn Quick Action Card */}
            <div className="p-6 rounded-2xl bg-[#111111]/90 border border-white/10 hover:border-[#C7FF2F]/40 transition-all duration-300 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#0B2112] text-[#C7FF2F] border border-[#C7FF2F]/30">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#6B6B6B] uppercase tracking-widest block">
                      LINKEDIN NETWORK
                    </span>
                    <a
                      href={personalData.contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="font-heading font-bold text-sm sm:text-base text-[#F5F5F5] hover:text-[#C7FF2F] transition-colors"
                    >
                      {personalData.contact.linkedinDisplay}
                    </a>
                  </div>
                </div>

                <a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open LinkedIn"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#A5A5A5] hover:text-[#C7FF2F] transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Validated Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111111]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              
              {isSuccess ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#0B2112] border border-[#C7FF2F]/50 flex items-center justify-center mx-auto text-[#C7FF2F] shadow-[0_0_25px_rgba(199,255,47,0.3)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-[#F5F5F5]">
                    Message Prepared!
                  </h3>
                  <p className="text-sm text-[#A5A5A5] max-w-md mx-auto leading-relaxed">
                    Opening your default email client to dispatch the message to <strong className="text-[#C7FF2F]">{personalData.contact.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-[#F5F5F5] transition-colors mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono text-[#A5A5A5] uppercase tracking-wider block">
                        Your Name <span className="text-[#C7FF2F]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border text-xs sm:text-sm text-[#F5F5F5] placeholder-[#6B6B6B] focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#C7FF2F]/60'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-red-400 font-mono">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono text-[#A5A5A5] uppercase tracking-wider block">
                        Your Email <span className="text-[#C7FF2F]">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. sarah@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border text-xs sm:text-sm text-[#F5F5F5] placeholder-[#6B6B6B] focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#C7FF2F]/60'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400 font-mono">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono text-[#A5A5A5] uppercase tracking-wider block">
                      Subject <span className="text-[#C7FF2F]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Full-Stack / MERN Developer Role Opportunity"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border text-xs sm:text-sm text-[#F5F5F5] placeholder-[#6B6B6B] focus:outline-none transition-colors ${
                        errors.subject ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#C7FF2F]/60'
                      }`}
                    />
                    {errors.subject && <p className="text-[11px] text-red-400 font-mono">{errors.subject}</p>}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono text-[#A5A5A5] uppercase tracking-wider block">
                      Message <span className="text-[#C7FF2F]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell Bharat about the project, role, or collaboration..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border text-xs sm:text-sm text-[#F5F5F5] placeholder-[#6B6B6B] focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#C7FF2F]/60'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-red-400 font-mono">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#C7FF2F] hover:bg-[#A8FF00] text-[#0D0D0D] font-heading font-bold text-sm tracking-wide transition-all duration-300 shadow-[0_0_25px_rgba(199,255,47,0.35)] hover:shadow-[0_0_35px_rgba(199,255,47,0.55)] flex items-center justify-center gap-2 group hover:scale-[1.01]"
                  >
                    <span>{isSubmitting ? 'Preparing Dispatch...' : 'Send Message'}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="text-center text-[11px] text-[#6B6B6B] font-mono">
                    Direct dispatch to bharatsharmabarauth@gmail.com · Response typically within 24h
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
