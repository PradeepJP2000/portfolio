import React, { useState } from 'react';
import { RESUME_DATA, SkillCategory } from '../data/resumeData';
import { Sparkles, Flame, Check, Terminal, Cpu } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface SkillUniverseProps {
  soundEnabled: boolean;
}

export const SkillUniverse: React.FC<SkillUniverseProps> = ({ soundEnabled }) => {
  const [selectedCategoryIdx, setSelectedCategoryIdx] = useState<number>(0);

  const currentCategory = RESUME_DATA.skillCategories[selectedCategoryIdx];

  const handleSelectCategory = (idx: number) => {
    if (soundEnabled) playClickSound();
    setSelectedCategoryIdx(idx);
  };

  return (
    <section id="skills" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-zinc-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              SECTION 03 • PRODUCTION COMPETENCIES
            </span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-wide">
            TECHNICAL EXPERTISE &amp; STACK
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
            Battle-tested technologies in enterprise production: Java &amp; Spring Boot microservices,
            Agentic AI pipelines, Langfuse observability, and reactive UI architectures.
          </p>
        </div>

        <div className="text-right hidden sm:block">
          <span className="text-xs font-mono text-zinc-500">DOMAIN {selectedCategoryIdx + 1} OF {RESUME_DATA.skillCategories.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Category selector column */}
        <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
          {RESUME_DATA.skillCategories.map((cat, idx) => {
            const isSelected = selectedCategoryIdx === idx;
            return (
              <button
                key={cat.category}
                onClick={() => handleSelectCategory(idx)}
                className={`flex-shrink-0 lg:w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl text-left transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#1e1e1e] border-red-500 text-white shadow-lg shadow-red-950/30'
                    : 'bg-[#141414] border-white/5 text-zinc-400 hover:text-white hover:bg-[#1a1a1a]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl">{cat.icon}</span>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold leading-tight">{cat.category}</h3>
                    <p className="text-[10px] text-zinc-500 mt-0.5 hidden sm:block truncate max-w-[200px]">
                      {cat.skills.length} core competencies
                    </p>
                  </div>
                </div>

                {isSelected && (
                  <span className="hidden lg:block w-2 h-2 rounded-full bg-red-600 animate-ping" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Side: Skill Cards Grid */}
        <div className="lg:col-span-8 bg-[#181818] border border-white/10 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{currentCategory.icon}</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{currentCategory.category}</h3>
                <p className="text-xs text-zinc-400">{currentCategory.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-red-600/20 text-red-400 rounded text-[10px] font-bold border border-red-500/30">
                Production Verified
              </span>
            </div>
          </div>

          {/* Grid of skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {currentCategory.skills.map((skill, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-black/40 border border-zinc-800 hover:border-zinc-600 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-red-500 group-hover:scale-125 transition-transform" />
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono">Enterprise Grade</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {skill.hot && (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[9px] font-bold">
                      <Flame className="w-2.5 h-2.5" />
                      <span>KEY</span>
                    </span>
                  )}
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      skill.level === 'Expert'
                        ? 'bg-red-950/80 text-red-300 border border-red-700/50'
                        : skill.level === 'Advanced'
                        ? 'bg-blue-950/80 text-blue-300 border border-blue-700/50'
                        : 'bg-zinc-800 text-zinc-300'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom quick banner */}
          <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
            <span>Production Proven at Responsive (formerly RFPIO)</span>
            <span className="text-red-500 font-mono">Strict SLA &amp; Zero-Regression Track</span>
          </div>
        </div>
      </div>
    </section>
  );
};
