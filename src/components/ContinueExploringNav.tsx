import React from 'react';
import { ChevronRight, Compass } from 'lucide-react';
import { playClickSound } from '../utils/audio';

interface ContinueExploringNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  soundEnabled: boolean;
}

export const ContinueExploringNav: React.FC<ContinueExploringNavProps> = ({
  activeSection,
  onNavigate,
  soundEnabled,
}) => {
  const sections = [
    {
      id: 'experience',
      sectionNum: 'SECTION 01',
      title: 'CAREER JOURNEY',
      subtitle: 'Experience & Milestones at Responsive',
      color: 'from-red-600/30 to-rose-950/60',
      activeBorder: 'border-red-500 shadow-red-950/40',
      badge: '4 PHASES',
    },
    {
      id: 'achievements',
      sectionNum: 'SECTION 02',
      title: 'KEY ACHIEVEMENTS',
      subtitle: '$1.5M Deal & High-Impact Metrics',
      color: 'from-amber-600/30 to-orange-950/60',
      activeBorder: 'border-amber-500 shadow-amber-950/40',
      badge: '5 MILESTONES',
    },
    {
      id: 'skills',
      sectionNum: 'SECTION 03',
      title: 'TECHNICAL SKILLS',
      subtitle: 'AI, Microservices, Observability & DBs',
      color: 'from-purple-600/30 to-indigo-950/60',
      activeBorder: 'border-purple-500 shadow-purple-950/40',
      badge: '40+ TECHNOLOGIES',
    },
    {
      id: 'projects',
      sectionNum: 'SECTION 04',
      title: 'FEATURED SYSTEMS',
      subtitle: 'Smart Search, RAG & Architecture',
      color: 'from-blue-600/30 to-cyan-950/60',
      activeBorder: 'border-blue-500 shadow-blue-950/40',
      badge: '6 SYSTEMS',
    },
    {
      id: 'about',
      sectionNum: 'SECTION 05',
      title: 'ABOUT & EDUCATION',
      subtitle: 'Sri Ramakrishna Eng. College & Values',
      color: 'from-emerald-600/30 to-teal-950/60',
      activeBorder: 'border-emerald-500 shadow-emerald-950/40',
      badge: 'B.E. CSE',
    },
    {
      id: 'top10',
      sectionNum: 'SECTION 06',
      title: 'CORE HIGHLIGHTS',
      subtitle: 'Top 10 Technical Strengths',
      color: 'from-rose-600/30 to-red-950/60',
      activeBorder: 'border-rose-500 shadow-rose-950/40',
      badge: 'RANKED TOP 10',
    },
  ];

  const handleClick = (id: string) => {
    if (soundEnabled) playClickSound();
    onNavigate(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Title Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base sm:text-lg font-bold text-white tracking-wide flex items-center gap-2">
          <Compass className="w-4 h-4 text-red-500" />
          <span>Quick Section Navigator</span>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </h2>
        <span className="text-xs text-zinc-400 hidden sm:inline">
          Click any section to jump directly
        </span>
      </div>

      {/* Horizontal Carousel Row */}
      <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-3 pt-1 scroll-snap-x">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => handleClick(sec.id)}
              className={`group flex-shrink-0 w-60 sm:w-64 p-3.5 rounded-xl bg-[#1a1a1a] border text-left transition-all duration-300 cursor-pointer scroll-snap-align-start relative overflow-hidden ${
                isActive ? sec.activeBorder + ' shadow-xl' : 'border-white/10 hover:border-white/30'
              }`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${sec.color} opacity-30 group-hover:opacity-60 transition-opacity`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono tracking-wider font-bold text-red-400 uppercase">
                    {sec.sectionNum}
                  </span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-black/60 text-zinc-300 border border-white/10">
                    {sec.badge}
                  </span>
                </div>
                <h3 className="font-bebas text-lg sm:text-xl text-white tracking-wide group-hover:text-red-400 transition-colors">
                  {sec.title}
                </h3>
                <p className="text-[11px] text-zinc-400 truncate mt-0.5">{sec.subtitle}</p>
              </div>

              {/* Red indicator when active */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 shadow-sm" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
