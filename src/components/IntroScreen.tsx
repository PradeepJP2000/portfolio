import React, { useState } from 'react';
import { Volume2, VolumeX, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { playTaDumSound, playClickSound } from '../utils/audio';

interface IntroScreenProps {
  onEnter: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({
  onEnter,
  soundEnabled,
  setSoundEnabled,
}) => {
  const [animating, setAnimating] = useState(false);

  const handleEnter = () => {
    if (soundEnabled) {
      playTaDumSound(0.5);
    } else {
      playClickSound();
    }
    setAnimating(true);
    setTimeout(() => {
      onEnter();
    }, 450);
  };

  return (
    <div className={`fixed inset-0 z-50 bg-[#141414] flex flex-col items-center justify-center p-4 transition-all duration-500 ${animating ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-red-950/20 via-transparent to-black pointer-events-none" />

      {/* Top right sound toggle */}
      <button
        onClick={() => {
          const next = !soundEnabled;
          setSoundEnabled(next);
          if (next) playClickSound();
        }}
        aria-label="Toggle Audio Feedback"
        className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full netflix-glass text-xs font-medium text-zinc-300 hover:text-white hover:border-red-500/50 transition-all cursor-pointer"
      >
        {soundEnabled ? (
          <>
            <Volume2 className="w-4 h-4 text-red-500" />
            <span>Audio Feedback On</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-zinc-400" />
            <span>Audio Muted</span>
          </>
        )}
      </button>

      {/* Main Professional Title Card */}
      <div className="relative text-center max-w-2xl mx-auto flex flex-col items-center">
        {/* Professional badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 mb-5 tracking-widest text-[11px] font-mono font-bold text-red-400 uppercase">
          <Terminal className="w-3.5 h-3.5 text-red-500" />
          <span>Senior Software Engineer Portfolio</span>
        </div>

        {/* Name */}
        <h1 className="font-bebas text-6xl sm:text-8xl md:text-9xl text-white tracking-wider netflix-glow mb-2 select-none">
          PRADEEP P
        </h1>

        <div className="text-red-500 font-bebas text-lg sm:text-2xl tracking-[0.25em] font-semibold mb-6 uppercase">
          AI SYSTEMS • DISTRIBUTED BACKEND • FULL-STACK
        </div>

        {/* Monogram Box */}
        <div className="relative mb-6 group cursor-pointer" onClick={handleEnter}>
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-red-600 via-rose-700 to-zinc-900 p-1 netflix-box-glow transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#181818] rounded-xl flex flex-col items-center justify-center border border-white/10 relative overflow-hidden">
              <span className="font-bebas text-4xl sm:text-5xl text-white tracking-widest group-hover:text-red-500 transition-colors">
                P
              </span>
              <span className="text-[9px] uppercase font-bold text-zinc-400 tracking-wider">
                Senior SE
              </span>
            </div>
          </div>
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-red-600 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg whitespace-nowrap">
            4+ Yrs Experience
          </div>
        </div>

        {/* Professional Subtitle */}
        <p className="text-xs sm:text-sm font-medium tracking-wide text-zinc-400 mb-8 max-w-lg leading-relaxed">
          Specializing in Java, Spring Boot microservices, Agentic RAG pipelines, and Langfuse production observability.
        </p>

        {/* Clean Enter Button */}
        <button
          onClick={handleEnter}
          className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg bg-white text-black font-bold text-sm sm:text-base tracking-wide hover:bg-[#E50914] hover:text-white transition-all duration-300 shadow-xl cursor-pointer hover:shadow-red-900/50 hover:scale-105 active:scale-95"
        >
          <span>Enter Portfolio</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        <p className="text-[11px] text-zinc-500 mt-4 tracking-wide">
          Select role perspectives: Recruiter, Engineering Leader, or Peer Reviewer
        </p>
      </div>

      {/* Footer hint */}
      <div className="absolute bottom-6 text-center text-xs text-zinc-600">
        Responsive &amp; Mobile-Optimized • Ready for Free GitHub Pages Hosting
      </div>
    </div>
  );
};
