import React, { useState } from 'react';
import { RESUME_DATA, ExperienceMilestone } from '../data/resumeData';
import { Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Layers, Sparkles, FileText, ArrowRight } from 'lucide-react';
import { playTaDumSound, playClickSound } from '../utils/audio';

interface FullStoryEpisodesProps {
  onSelectEpisode: (episode: ExperienceMilestone) => void;
  onOpenResumeModal: () => void;
  soundEnabled: boolean;
}

export const FullStoryEpisodes: React.FC<FullStoryEpisodesProps> = ({
  onSelectEpisode,
  onOpenResumeModal,
  soundEnabled,
}) => {
  const [expandedMilestone, setExpandedMilestone] = useState<string>('phase-4');

  const toggleMilestone = (id: string) => {
    if (soundEnabled) playClickSound();
    setExpandedMilestone(expandedMilestone === id ? '' : id);
  };

  const handleInspectMilestone = (milestone: ExperienceMilestone, e: React.MouseEvent) => {
    e.stopPropagation();
    if (soundEnabled) playTaDumSound(0.35);
    onSelectEpisode(milestone);
  };

  return (
    <section id="experience" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      {/* Professional Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-zinc-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-red-500 uppercase">
              PROFESSIONAL EXPERIENCE • CAREER PROGRESSION
            </span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-wide">
            CAREER JOURNEY &amp; MILESTONES
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
            Promoted from Engineering Intern to Senior Software Engineer at Responsive (formerly RFPIO).
            4+ years delivering high-scale microservices, revenue-critical features, and autonomous AI systems.
          </p>
        </div>

        {/* Quick action resume box */}
        <div className="netflix-glass p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center gap-4 bg-zinc-900/50">
          <div className="text-left">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Complete Career History</div>
            <div className="text-[11px] text-zinc-400">View ATS-formatted resume or contact Pradeep directly</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (soundEnabled) playClickSound();
                onOpenResumeModal();
              }}
              className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold cursor-pointer transition-colors shadow"
            >
              Resume PDF
            </button>
            <a
              href={`mailto:${RESUME_DATA.email}`}
              className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Career Milestones List */}
      <div className="space-y-4">
        {RESUME_DATA.milestones.map((milestone) => {
          const isExpanded = expandedMilestone === milestone.id;

          return (
            <div
              key={milestone.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? 'bg-[#181818] border-red-500/50 shadow-2xl'
                  : 'bg-[#141414] hover:bg-[#181818] border-white/10 hover:border-white/20'
              }`}
            >
              {/* Header Bar */}
              <div
                onClick={() => toggleMilestone(milestone.id)}
                className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 cursor-pointer select-none"
              >
                <div className="flex items-start sm:items-center gap-4">
                  {/* Phase number badge */}
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/30 to-black border border-red-500/30 flex flex-col items-center justify-center text-center">
                    <span className="text-[9px] font-mono text-red-400 font-bold leading-none">PHASE</span>
                    <span className="font-bebas text-lg text-white font-bold leading-none mt-0.5">0{milestone.phaseNumber}</span>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-wider">
                        {milestone.phaseTitle}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-red-600/20 text-red-400 border border-red-500/30">
                        {milestone.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {milestone.role}{' '}
                      <span className="text-zinc-400 font-normal">@ {milestone.company}</span>
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-red-500" />
                        {milestone.period} ({milestone.duration})
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {milestone.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-3 self-end lg:self-center">
                  <button
                    onClick={(e) => handleInspectMilestone(milestone, e)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-red-600 text-zinc-200 hover:text-white text-xs font-bold transition-all cursor-pointer shadow active:scale-95 border border-zinc-700 hover:border-red-500"
                    title="View Technical Details"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="p-2 text-zinc-400 hover:text-white">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-red-500" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              {isExpanded && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-zinc-800/80 bg-black/40">
                  {/* Synopsis */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-5 italic border-l-2 border-red-600 pl-3">
                    "{milestone.synopsis}"
                  </p>

                  {/* Highlights Deliverables List */}
                  <div className="mb-5">
                    <h4 className="text-xs font-bold tracking-wider uppercase text-zinc-400 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-red-500" />
                      Key Deliverables &amp; Architectural Milestones
                    </h4>
                    <ul className="space-y-2.5">
                      {milestone.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics and Tech Stack */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                        Key Impact &amp; Metrics
                      </h4>
                      <ul className="space-y-1">
                        {milestone.metrics.map((m, i) => (
                          <li key={i} className="text-xs text-amber-300 font-medium flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                        Technologies Featured In Phase
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {milestone.techStack.map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-zinc-800/90 text-zinc-300 text-[10px] font-mono border border-zinc-700/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
