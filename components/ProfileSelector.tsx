import React from 'react';
import { PROFILES, Profile } from '../data/resumeData';
import { playTaDumSound, playClickSound } from '../utils/audio';
import { Volume2, VolumeX, ArrowRight, Layers, UserCheck } from 'lucide-react';

interface ProfileSelectorProps {
  onSelectProfile: (profile: Profile) => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  onSkip?: () => void;
}

export const ProfileSelector: React.FC<ProfileSelectorProps> = ({
  onSelectProfile,
  soundEnabled,
  setSoundEnabled,
  onSkip,
}) => {
  const handleSelect = (profile: Profile) => {
    if (soundEnabled) {
      playTaDumSound(0.35);
    } else {
      playClickSound();
    }
    onSelectProfile(profile);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#141414] flex flex-col items-center justify-center p-4 sm:p-6 select-none overflow-y-auto">
      {/* Background subtle radial gradient */}
      <div className="absolute inset-0 bg-radial from-zinc-900/40 via-[#141414] to-black pointer-events-none" />

      {/* Top right sound toggle & skip */}
      <div className="absolute top-6 right-6 flex items-center gap-3">
        <button
          onClick={() => {
            const next = !soundEnabled;
            setSoundEnabled(next);
            if (next) playClickSound();
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full netflix-glass text-xs text-zinc-300 hover:text-white transition-colors cursor-pointer"
          title="Toggle audio feedback"
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-4 h-4 text-red-500" />
              <span>Audio On</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-zinc-500" />
              <span>Audio Off</span>
            </>
          )}
        </button>

        {onSkip && (
          <button
            onClick={() => {
              playClickSound();
              onSkip();
            }}
            className="text-xs text-zinc-400 hover:text-white px-2.5 py-1.5 rounded netflix-glass cursor-pointer flex items-center gap-1"
          >
            <span>Skip</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <div className="relative max-w-4xl w-full mx-auto text-center my-auto py-8">
        {/* Title Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs font-medium mb-3">
          <UserCheck className="w-3.5 h-3.5 text-red-500" />
          <span>Interactive Perspective Selector</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white mb-3 tracking-tight">
          Select Your Evaluation Perspective
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mb-10 max-w-lg mx-auto">
          Tailor the presentation order to your technical evaluation or hiring objectives.
        </p>

        {/* 4 Profiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto mb-10">
          {PROFILES.map((profile) => (
            <div
              key={profile.id}
              onClick={() => handleSelect(profile)}
              className="group flex flex-col items-center cursor-pointer focus:outline-none"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleSelect(profile);
              }}
            >
              {/* Profile Box */}
              <div
                className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl bg-gradient-to-br ${profile.avatarBg} p-1 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl border-2 border-transparent group-hover:border-white shadow-lg flex items-center justify-center overflow-hidden`}
              >
                <div className="w-full h-full bg-[#181818]/60 backdrop-blur-xs rounded-lg flex flex-col items-center justify-center text-white">
                  {profile.id === 'pradeep' ? (
                    <div className="flex flex-col items-center">
                      <span className="font-bebas text-4xl sm:text-5xl tracking-widest text-white group-hover:text-red-500 transition-colors">
                        P
                      </span>
                      <span className="text-[9px] font-bold text-red-400 tracking-wider uppercase">
                        All Sections
                      </span>
                    </div>
                  ) : profile.id === 'recruiter' ? (
                    <div className="flex flex-col items-center">
                      <span className="font-bebas text-4xl sm:text-5xl tracking-widest text-blue-400">
                        HR
                      </span>
                      <span className="text-[9px] font-bold text-blue-300 tracking-wider uppercase">
                        Hiring / Talent
                      </span>
                    </div>
                  ) : profile.id === 'developer' ? (
                    <div className="flex flex-col items-center">
                      <span className="font-mono text-2xl sm:text-3xl font-bold text-emerald-400">
                        &lt;/&gt;
                      </span>
                      <span className="text-[9px] font-bold text-emerald-300 tracking-wider uppercase">
                        Systems / Code
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl sm:text-4xl">🏛️</span>
                      <span className="text-[9px] font-bold text-amber-300 tracking-wider uppercase mt-1">
                        Architecture
                      </span>
                    </div>
                  )}
                </div>

                {profile.id === 'pradeep' && (
                  <span className="absolute top-1.5 right-1.5 px-1 py-0.2 bg-red-600 text-[8px] font-bold uppercase rounded text-white tracking-widest">
                    DEFAULT
                  </span>
                )}
              </div>

              {/* Name */}
              <h3 className="mt-3 text-base sm:text-lg font-semibold text-zinc-300 group-hover:text-white transition-colors">
                {profile.name}
              </h3>

              {/* Tagline */}
              <p className="mt-1 text-[11px] sm:text-xs text-zinc-400 max-w-[150px] leading-snug group-hover:text-zinc-200 transition-colors">
                {profile.tagline}
              </p>
            </div>
          ))}
        </div>

        {/* Professional Subtitle Caption */}
        <div className="netflix-glass inline-block px-5 py-3 rounded-full text-xs sm:text-sm text-zinc-300 border border-white/10 max-w-xl mx-auto shadow-xl">
          Curated portfolio views tailored to your hiring or technical evaluation criteria.
        </div>

        {/* Direct Link */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => handleSelect(PROFILES[0])}
            className="px-5 py-2.5 border border-zinc-700 hover:border-zinc-400 text-zinc-300 hover:text-white text-xs sm:text-sm tracking-wide font-semibold transition-colors rounded-lg cursor-pointer"
          >
            Proceed to Full Overview
          </button>
        </div>
      </div>
    </div>
  );
};
