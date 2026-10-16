import React, { useState } from 'react';
import { ArrowDown, FileText, Bookmark, Check, Info, Sparkles, Terminal, CheckCircle } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { playTaDumSound, playClickSound } from '../utils/audio';

interface BillboardProps {
  onOpenResumeModal: () => void;
  onOpenMoreInfo: () => void;
  soundEnabled: boolean;
}

export const Billboard: React.FC<BillboardProps> = ({
  onOpenResumeModal,
  onOpenMoreInfo,
  soundEnabled,
}) => {
  const [isShortlisted, setIsShortlisted] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const handleExploreJourney = () => {
    if (soundEnabled) playTaDumSound(0.4);
    const element = document.querySelector('#experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleShortlist = () => {
    if (soundEnabled) playClickSound();
    setIsShortlisted(!isShortlisted);
    setNotification(isShortlisted ? 'Removed from candidate shortlist' : 'Saved Pradeep to your candidate shortlist! ⭐');
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <section id="hero" className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background dark cinematic gradients */}
      <div className="absolute inset-0 bg-radial from-red-950/20 via-[#141414]/90 to-[#141414] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Professional Header Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-[11px] font-mono font-bold tracking-wider text-red-400 uppercase mb-3">
            <Terminal className="w-3.5 h-3.5 text-red-500" />
            <span>Senior Software Engineer • Production Engineering</span>
          </div>

          {/* Name */}
          <h1 className="font-bebas text-5xl sm:text-7xl md:text-8xl text-white tracking-wide leading-none netflix-glow mb-2">
            {RESUME_DATA.name.toUpperCase()}
          </h1>

          <div className="text-red-500 font-bebas text-lg sm:text-2xl tracking-[0.2em] font-semibold mb-4 uppercase">
            AI SYSTEMS • DISTRIBUTED BACKEND • FULL-STACK ARCHITECTURE
          </div>

          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-5 text-xs">
            <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 font-semibold border border-zinc-700 text-[11px]">
              {RESUME_DATA.yearsExperience} Experience
            </span>
            <span className="px-2.5 py-1 rounded bg-red-600/20 border border-red-500/30 text-red-300 font-semibold text-[11px]">
              Responsive (formerly RFPIO)
            </span>
            <span className="px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-semibold text-[11px]">
              Sub-Second API Latency
            </span>
            <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-400 text-[11px] font-mono border border-zinc-700">
              Coimbatore, India
            </span>
          </div>

          {/* Synopsis */}
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 max-w-2xl">
            Senior Software Engineer with 4+ years of production experience designing and building scalable web applications,
            REST APIs, and microservices with Java, Spring Boot, React, MongoDB, and Apache Solr. Proven track record
            reducing API response times from 19s to under 1s, delivering a marquee feature that secured a <strong className="text-white">$1.5M deal</strong>,
            and pioneering production Langfuse AI observability with OpenTelemetry.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            {/* Explore Journey */}
            <button
              onClick={handleExploreJourney}
              className="group inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-lg bg-white text-black font-bold text-sm sm:text-base tracking-wide hover:bg-[#E50914] hover:text-white transition-all shadow-xl cursor-pointer active:scale-95"
            >
              <span>Explore Career Journey</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>

            {/* View ATS Resume */}
            <button
              onClick={() => {
                if (soundEnabled) playClickSound();
                onOpenResumeModal();
              }}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-lg netflix-glass text-white font-semibold text-sm sm:text-base hover:bg-white/20 transition-all cursor-pointer active:scale-95"
            >
              <FileText className="w-4 h-4 text-red-500" />
              <span>View ATS Resume</span>
            </button>

            {/* Bookmark / Shortlist */}
            <button
              onClick={handleToggleShortlist}
              className={`p-3 rounded-lg border transition-all cursor-pointer ${
                isShortlisted
                  ? 'bg-red-600 border-red-500 text-white'
                  : 'bg-black/40 border-zinc-700 text-zinc-300 hover:text-white hover:border-white'
              }`}
              title={isShortlisted ? 'Remove from Candidate Shortlist' : 'Add to Candidate Shortlist'}
              aria-label="Bookmark Candidate"
            >
              {isShortlisted ? <Check className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
            </button>

            {/* Technical Overview */}
            <button
              onClick={() => {
                if (soundEnabled) playClickSound();
                onOpenMoreInfo();
              }}
              className="p-3 rounded-lg bg-black/40 border border-zinc-700 text-zinc-300 hover:text-white hover:border-white transition-all cursor-pointer"
              title="View Technical Summary"
              aria-label="Technical Summary"
            >
              <Info className="w-5 h-5" />
            </button>
          </div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl border-t border-zinc-800 pt-4">
            {RESUME_DATA.keyStats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-bebas text-xl sm:text-2xl text-red-500 tracking-wider font-semibold">
                  {stat.value}
                </span>
                <span className="text-[11px] font-medium text-zinc-300 truncate">{stat.label}</span>
                <span className="text-[10px] text-zinc-500 truncate">{stat.detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Professional Profile Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm rounded-2xl bg-[#181818] p-5 sm:p-6 border border-white/10 netflix-box-glow shadow-2xl">
            {/* Top header */}
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-600/20 text-red-400 text-[10px] font-bold uppercase tracking-wider border border-red-500/30">
                <Sparkles className="w-3 h-3 text-red-500" />
                Engineering Profile
              </span>
              <span className="text-[11px] font-mono text-zinc-400">Coimbatore, India</span>
            </div>

            {/* Profile Monogram */}
            <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-gradient-to-tr from-red-950/60 via-zinc-900 to-black border border-white/5 flex flex-col items-center justify-center p-6 text-center group">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-red-600 to-zinc-900 p-0.5 mb-3 shadow-xl">
                <div className="w-full h-full rounded-lg bg-zinc-950 flex items-center justify-center">
                  <span className="font-bebas text-4xl text-white">P</span>
                </div>
              </div>
              <h3 className="font-bebas text-2xl text-white tracking-wider">PRADEEP P</h3>
              <p className="text-[11px] text-red-400 font-medium">Senior Software Engineer @ Responsive</p>

              {/* Core Skill Chips */}
              <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                <span className="px-2 py-0.5 bg-black/60 rounded text-[9px] font-mono text-zinc-300 border border-zinc-700">
                  Java 17 / Spring Boot
                </span>
                <span className="px-2 py-0.5 bg-black/60 rounded text-[9px] font-mono text-zinc-300 border border-zinc-700">
                  Langfuse AI Observability
                </span>
                <span className="px-2 py-0.5 bg-black/60 rounded text-[9px] font-mono text-zinc-300 border border-zinc-700">
                  React.js &amp; TypeScript
                </span>
              </div>
            </div>

            {/* Quick Summary rows */}
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center justify-between text-zinc-300 py-1.5 border-b border-zinc-800">
                <span className="text-zinc-500">Education</span>
                <span className="font-medium text-right truncate max-w-[200px]">
                  B.E. CSE • Sri Ramakrishna Eng. College
                </span>
              </div>
              <div className="flex items-center justify-between text-zinc-300 py-1.5 border-b border-zinc-800">
                <span className="text-zinc-500">Key Deliverable</span>
                <span className="font-bold text-amber-400">$1.5M Enterprise Deal</span>
              </div>
              <div className="flex items-center justify-between text-zinc-300 py-1.5">
                <span className="text-zinc-500">Specialization</span>
                <span className="font-medium text-zinc-200">Agentic RAG &amp; Microservices</span>
              </div>
            </div>

            {/* Direct Connect Link */}
            <a
              href={`mailto:${RESUME_DATA.email}`}
              className="mt-4 w-full py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>Contact via Email</span>
              <span className="text-[11px] text-zinc-400 font-mono">({RESUME_DATA.email})</span>
            </a>
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1c1c1c] border border-red-500/50 text-white px-4 py-2.5 rounded-lg shadow-2xl flex items-center gap-2 text-xs">
          <CheckCircle className="w-4 h-4 text-red-500" />
          <span>{notification}</span>
        </div>
      )}
    </section>
  );
};
