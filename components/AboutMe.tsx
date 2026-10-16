import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { GraduationCap, MapPin, Briefcase, Award, Sparkles, Terminal, Code } from 'lucide-react';

interface AboutMeProps {
  onOpenResumeModal: () => void;
  soundEnabled: boolean;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="about" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-zinc-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              SECTION 05 • BACKGROUND &amp; CORE PRINCIPLES
            </span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-wide">
            ABOUT ME &amp; EDUCATION
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
            Engineering philosophy: building robust distributed software, latency-optimized architectures, and observable AI systems.
          </p>
        </div>
      </div>

      <div className="bg-[#181818] border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Portrait Monogram Card */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-gradient-to-tr from-red-600 via-rose-800 to-zinc-900 p-1 netflix-box-glow shadow-2xl mb-4">
              <div className="w-full h-full bg-[#1c1c1c] rounded-xl flex flex-col items-center justify-center p-4 border border-white/10 relative overflow-hidden">
                <span className="font-bebas text-7xl sm:text-8xl text-white">P</span>
                <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest mt-1">
                  PRADEEP P
                </span>
                <span className="text-[10px] text-zinc-400">Senior Software Engineer</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                Coimbatore, India
              </span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 text-red-500" />
                Responsive
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & Education */}
          <div className="lg:col-span-8 flex flex-col">
            <blockquote className="text-base sm:text-lg font-medium text-zinc-200 leading-relaxed mb-6 italic border-l-4 border-red-600 pl-4">
              "{RESUME_DATA.summary}"
            </blockquote>

            {/* Education Box */}
            <div className="bg-black/40 border border-zinc-800 rounded-2xl p-5 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {RESUME_DATA.education.institution}
                    </h4>
                    <span className="text-xs font-mono text-red-400 font-bold">
                      {RESUME_DATA.education.period}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-300 mb-2">
                    {RESUME_DATA.education.degree} • {RESUME_DATA.education.location}
                  </div>
                  <ul className="space-y-1">
                    {RESUME_DATA.education.details.map((d, i) => (
                      <li key={i} className="text-xs text-zinc-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Engineering Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Sub-Second Latency</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Relentless focus on query optimization, caching architectures, and eliminating database bottlenecks.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Grounded AI &amp; Observability</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Zero-hallucination tolerance: line-level citation RAG pipelines and end-to-end OpenTelemetry tracing.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5" />
                  <span>Clean Distributed Code</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Modular Spring Boot &amp; React designs maintaining high test coverage with JUnit, Mockito, and Playwright.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
