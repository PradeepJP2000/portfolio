import React, { useState } from 'react';
import { RESUME_DATA, ProjectItem } from '../data/resumeData';
import { ArrowRight, Sparkles, Layers, Shield, Cpu, Database, Zap } from 'lucide-react';
import { playTaDumSound, playClickSound } from '../utils/audio';

interface FeaturedProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
  soundEnabled: boolean;
  filterCategory?: string;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onSelectProject,
  soundEnabled,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'ai' | 'backend' | 'performance'>('all');

  const filteredProjects = RESUME_DATA.projects.filter((p) => {
    if (selectedFilter === 'all') return true;
    return p.category === selectedFilter;
  });

  const handleSelect = (project: ProjectItem) => {
    if (soundEnabled) playTaDumSound(0.35);
    onSelectProject(project);
  };

  return (
    <section id="projects" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-zinc-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              SECTION 04 • ARCHITECTURE &amp; CASE STUDIES
            </span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-wide">
            FEATURED SYSTEMS &amp; PROJECTS
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
            Real production systems built and deployed at enterprise scale: Autonomous RAG agents, full-stack microservices, and observability platforms.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {[
            { id: 'all', label: 'All Systems' },
            { id: 'ai', label: 'AI & RAG' },
            { id: 'backend', label: 'Backend & Scaling' },
            { id: 'performance', label: 'Observability & Tuning' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                if (soundEnabled) playClickSound();
                setSelectedFilter(tab.id as any);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer shrink-0 ${
                selectedFilter === tab.id
                  ? 'bg-red-600 text-white font-bold'
                  : 'bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of System Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleSelect(project)}
            className="group relative rounded-2xl bg-[#181818] border border-white/10 hover:border-red-500/50 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-950/40 cursor-pointer overflow-hidden"
          >
            {/* Visual Header Banner */}
            <div className={`relative h-44 w-full bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between overflow-hidden`}>
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-black/70 text-white font-mono text-[10px] font-bold uppercase border border-white/20">
                  {project.featuredBadge || 'SYSTEM'}
                </span>
                <span className="text-[11px] font-mono text-zinc-300 bg-black/50 px-2 py-0.5 rounded">
                  {project.period}
                </span>
              </div>

              <div className="relative z-10">
                <div className="text-[10px] uppercase font-bold tracking-widest text-red-300 mb-1">
                  {project.genre}
                </div>
                <h3 className="font-bebas text-2xl text-white tracking-wide group-hover:text-red-300 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Inspect overlay icon */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                <div className="px-4 py-2 rounded-lg bg-white text-black font-bold text-xs flex items-center gap-1.5 shadow-2xl transform group-hover:scale-105 transition-transform">
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3 mb-4">
                  {project.shortDescription}
                </p>

                {/* Architecture Highlights preview */}
                <div className="space-y-1.5 mb-4">
                  {project.architectureDetails.slice(0, 2).map((arch, i) => (
                    <div key={i} className="text-[11px] text-zinc-400 flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1" />
                      <span className="line-clamp-1">{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800">
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-black/50 text-zinc-400 text-[10px] font-mono border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] text-zinc-500 self-center">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-white">
                  <span>Inspect System Architecture</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-red-500" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
