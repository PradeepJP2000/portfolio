import React, { useEffect } from 'react';
import { X, Layers, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface DetailModalProps {
  item: any | null;
  onClose: () => void;
  soundEnabled: boolean;
}

export const DetailModal: React.FC<DetailModalProps> = ({ item, onClose, soundEnabled }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-[#181818] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            if (soundEnabled) playClickSound();
            onClose();
          }}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center cursor-pointer transition-colors border border-white/20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner */}
        <div className={`relative h-56 sm:h-64 w-full bg-gradient-to-br ${item.gradient || 'from-red-950 via-zinc-900 to-black'} p-6 sm:p-8 flex flex-col justify-end overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/40 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-red-600 text-white font-mono text-[10px] font-bold uppercase tracking-widest">
                {item.featuredBadge || 'TECHNICAL SPECIFICATION'}
              </span>
              <span className="text-xs text-zinc-300 font-mono">
                {item.period || item.duration || 'Enterprise Production'}
              </span>
            </div>

            <h2 className="font-bebas text-3xl sm:text-5xl text-white tracking-wide leading-tight drop-shadow mb-2">
              {item.title || item.role}
            </h2>

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="text-emerald-400 font-bold">Production Verified</span>
              <span className="px-2 py-0.5 rounded border border-zinc-600 text-zinc-300 text-[10px]">
                {item.rating || 'ENTERPRISE SCALE'}
              </span>
              <span className="text-zinc-400">{item.genre || item.company}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto no-scrollbar">
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Executive Overview
            </h4>
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
              {item.fullOverview || item.description || item.synopsis}
            </p>
          </div>

          {/* Architecture Details */}
          {item.architectureDetails && item.architectureDetails.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                <span>Architecture &amp; System Design Breakdown</span>
              </h4>
              <ul className="space-y-2">
                {item.architectureDetails.map((arch: string, i: number) => (
                  <li key={i} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Highlights */}
          {item.highlights && item.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Key Deliverables</span>
              </h4>
              <ul className="space-y-2">
                {item.highlights.map((h: string, i: number) => (
                  <li key={i} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-2" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {item.outcomes && item.outcomes.length > 0 && (
            <div className="p-4 rounded-xl bg-black/40 border border-zinc-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Business &amp; Engineering Outcomes</span>
              </h4>
              <ul className="space-y-1.5">
                {item.outcomes.map((out: string, i: number) => (
                  <li key={i} className="text-xs sm:text-sm text-zinc-200 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          {(item.techStack || item.tech) && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Technologies &amp; Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {(item.techStack || item.tech).map((t: string, i: number) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-black/70 text-zinc-300 text-xs font-mono border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-black/60 border-t border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-zinc-500">Pradeep P • Engineering Technical Specification</span>
          <button
            onClick={() => {
              if (soundEnabled) playClickSound();
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold cursor-pointer transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
