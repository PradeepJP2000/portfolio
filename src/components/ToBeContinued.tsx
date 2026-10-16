import React, { useState } from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { Mail, Phone, Linkedin, Github, ArrowUp, Users, Check, Sparkles, Send } from 'lucide-react';
import { playTaDumSound, playClickSound } from '../utils/audio';

interface ToBeContinuedProps {
  onWatchAgain: () => void;
  onSwitchProfile: () => void;
  soundEnabled: boolean;
}

export const ToBeContinued: React.FC<ToBeContinuedProps> = ({
  onWatchAgain,
  onSwitchProfile,
  soundEnabled,
}) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    if (soundEnabled) playClickSound();
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <footer id="contact" className="relative py-24 bg-gradient-to-b from-[#141414] via-black to-[#0a0a0a] text-center border-t border-zinc-800/80 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial from-red-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10 flex flex-col items-center">
        {/* Professional badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 border border-red-500/30 mb-4 text-[10px] font-mono uppercase tracking-widest text-red-500 font-bold">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
          <span>Open to Opportunities</span>
        </div>

        {/* Professional Heading */}
        <h2 className="font-bebas text-5xl sm:text-7xl md:text-8xl text-white tracking-wider netflix-glow mb-2">
          LET'S CONNECT &amp; COLLABORATE
        </h2>

        {/* Candidate title */}
        <div className="text-red-500 font-bebas text-xl sm:text-2xl tracking-[0.2em] font-semibold mb-2">
          {RESUME_DATA.name.toUpperCase()}
        </div>

        <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-zinc-300 mb-8 max-w-md">
          Senior Software Engineer • AI Systems &amp; Distributed Backend
        </p>

        {/* Action Buttons row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 w-full max-w-2xl">
          {/* Email button */}
          <a
            href={`mailto:${RESUME_DATA.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wide transition-all shadow-xl hover:shadow-red-900/50 cursor-pointer active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>EMAIL DIRECTLY</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href={RESUME_DATA.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg netflix-glass text-white font-semibold text-sm hover:bg-white/20 transition-all cursor-pointer"
          >
            <Linkedin className="w-4 h-4 text-blue-400" />
            <span>LINKEDIN</span>
          </a>

          {/* GitHub Button */}
          <a
            href={RESUME_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg netflix-glass text-white font-semibold text-sm hover:bg-white/20 transition-all cursor-pointer"
          >
            <Github className="w-4 h-4 text-zinc-200" />
            <span>GITHUB</span>
          </a>

          {/* Copy Phone button */}
          <button
            onClick={() => copyToClipboard(RESUME_DATA.phone, 'phone')}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium text-xs sm:text-sm transition-all cursor-pointer"
          >
            {copiedItem === 'phone' ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Phone Copied!</span>
              </>
            ) : (
              <>
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{RESUME_DATA.phone}</span>
              </>
            )}
          </button>
        </div>

        {/* Back to top & change perspective */}
        <div className="flex items-center gap-6 text-xs text-zinc-400 pt-6 border-t border-zinc-800/80 w-full justify-center">
          <button
            onClick={() => {
              if (soundEnabled) playClickSound();
              onWatchAgain();
            }}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5 text-red-500" />
            <span className="uppercase tracking-wider font-semibold">Back to Top</span>
          </button>

          <span className="text-zinc-700">•</span>

          <button
            onClick={() => {
              if (soundEnabled) playClickSound();
              onSwitchProfile();
            }}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <Users className="w-3.5 h-3.5 text-blue-400" />
            <span className="uppercase tracking-wider font-semibold">Change Perspective</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="mt-12 text-[11px] text-zinc-600 space-y-1">
          <p>© {new Date().getFullYear()} {RESUME_DATA.name}. Senior Software Engineer Portfolio.</p>
          <p>Configured for Free GitHub Pages deployment • Responsive on desktop, tablet, and mobile devices.</p>
        </div>
      </div>
    </footer>
  );
};
