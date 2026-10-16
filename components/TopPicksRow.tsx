import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { ChevronRight, ArrowRight, TrendingUp } from 'lucide-react';
import { playTaDumSound, playClickSound } from '../utils/audio';

interface TopPicksRowProps {
  onSelectItem: (item: any) => void;
  soundEnabled: boolean;
}

export const TopPicksRow: React.FC<TopPicksRowProps> = ({ onSelectItem, soundEnabled }) => {
  const handleClick = (item: any) => {
    if (soundEnabled) playTaDumSound(0.3);
    onSelectItem({
      title: item.title,
      genre: item.category,
      rating: `Rank #${item.rank} Capability`,
      period: '2025',
      shortDescription: item.description,
      fullOverview: `${item.title}: ${item.subtitle}. Key Metric: ${item.stat}. ${item.description}`,
      architectureDetails: [
        'Ranked among Pradeep’s highest impact engineering achievements and core capabilities',
        `Domain: ${item.category} • Enterprise production verified`,
      ],
      outcomes: [item.stat, item.description],
      techStack: item.tags,
      featuredBadge: `HIGHLIGHT #${item.rank}`,
      gradient: 'from-red-600 to-rose-950',
    });
  };

  return (
    <section id="top10" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              SECTION 06 • KEY CAPABILITIES LEADERBOARD
            </span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-wide">
            CORE HIGHLIGHTS &amp; ARCHITECTURAL PATTERNS
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            The marquee achievements, architectural patterns, and core capabilities ranked 1 through 10.
          </p>
        </div>
      </div>

      {/* Horizontal Carousel with Outlined Rank Numbers */}
      <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-6 pt-4 scroll-snap-x">
        {RESUME_DATA.topCapabilities.map((pick) => (
          <div
            key={pick.rank}
            onClick={() => handleClick(pick)}
            className="group flex-shrink-0 flex items-end cursor-pointer scroll-snap-align-start relative select-none"
          >
            {/* Outlined Rank Number */}
            <div
              className="font-bebas text-7xl sm:text-8xl md:text-9xl font-black text-transparent leading-none -mr-4 sm:-mr-6 z-0 select-none transition-transform group-hover:scale-105"
              style={{
                WebkitTextStroke: '2px #383838',
              }}
            >
              {pick.rank}
            </div>

            {/* Capability Card */}
            <div className="w-56 sm:w-64 h-72 sm:h-80 rounded-xl bg-gradient-to-b from-[#222] via-[#1a1a1a] to-[#121212] border border-white/10 group-hover:border-red-500/80 p-4 flex flex-col justify-between z-10 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-red-950/50 overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-800/40">
                    {pick.category}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 bg-black/60 px-1.5 py-0.5 rounded">
                    RANK #{pick.rank}
                  </span>
                </div>

                <h3 className="font-bebas text-xl sm:text-2xl text-white tracking-wide group-hover:text-red-400 transition-colors leading-tight mb-1">
                  {pick.title}
                </h3>

                <p className="text-[11px] font-semibold text-amber-400 mb-2">
                  {pick.stat}
                </p>

                <p className="text-[11px] text-zinc-300 leading-snug line-clamp-3">
                  {pick.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {pick.tags.slice(0, 2).map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-mono bg-black/60 text-zinc-400 px-1.5 py-0.5 rounded border border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-400 group-hover:text-white pt-2 border-t border-zinc-800">
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 text-red-500" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
