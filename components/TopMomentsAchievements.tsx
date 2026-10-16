import React from 'react';
import { RESUME_DATA, AchievementItem } from '../data/resumeData';
import { Trophy, TrendingUp, Zap, Sparkles, Star, ChevronRight, Award } from 'lucide-react';
import { playTaDumSound, playClickSound } from '../utils/audio';

interface TopMomentsAchievementsProps {
  onSelectAchievement: (achievement: AchievementItem) => void;
  soundEnabled: boolean;
}

export const TopMomentsAchievements: React.FC<TopMomentsAchievementsProps> = ({
  onSelectAchievement,
  soundEnabled,
}) => {
  const handleSelect = (item: AchievementItem) => {
    if (soundEnabled) playTaDumSound(0.35);
    onSelectAchievement(item);
  };

  return (
    <section id="achievements" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-zinc-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-amber-500 uppercase">
              SECTION 02 • PROVEN PRODUCTION IMPACT
            </span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-wide">
            KEY ACHIEVEMENTS &amp; METRICS
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
            Critical milestones that drove direct enterprise revenue, earned Microsoft commendation, and established production AI observability standards.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold flex items-center gap-1.5">
            <Trophy className="w-4 h-4" />
            <span>5 Key High-Impact Milestones</span>
          </div>
        </div>
      </div>

      {/* Grid of Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESUME_DATA.achievements.map((item) => (
          <div
            key={item.id}
            onClick={() => handleSelect(item)}
            className="group relative rounded-2xl bg-[#181818] border border-white/10 hover:border-amber-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-950/30 cursor-pointer overflow-hidden"
          >
            {/* Background subtle glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${item.coverImageGrad} opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none`}
            />

            <div className="relative z-10">
              {/* Top meta row */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {item.badge}
                </span>
                <span className="text-xs font-bold text-zinc-400 group-hover:text-amber-400 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                  {item.category}
                </span>
              </div>

              {/* Marquee Metric Display */}
              <div className="mb-3">
                <span className="font-bebas text-4xl sm:text-5xl text-white tracking-wider group-hover:text-amber-400 transition-colors drop-shadow">
                  {item.metric}
                </span>
              </div>

              {/* Title & Category */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-amber-200 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-amber-200/80 font-medium mb-3">
                {item.highlightText}
              </p>

              <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3 mb-4">
                {item.description}
              </p>
            </div>

            {/* Bottom Tech Pills and Action */}
            <div className="relative z-10 pt-4 border-t border-zinc-800/80">
              <div className="flex flex-wrap gap-1 mb-3">
                {item.tech.slice(0, 3).map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-black/60 text-zinc-400 text-[10px] font-mono border border-zinc-800"
                  >
                    {t}
                  </span>
                ))}
                {item.tech.length > 3 && (
                  <span className="text-[10px] text-zinc-500 self-center">
                    +{item.tech.length - 3} more
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-white">
                <span>View Technical Case Study</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-amber-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
