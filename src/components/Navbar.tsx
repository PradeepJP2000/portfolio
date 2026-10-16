import React, { useState, useEffect } from 'react';
import { Search, Volume2, VolumeX, Menu, X, FileText, ChevronDown, Sparkles, HelpCircle, Briefcase } from 'lucide-react';
import { Profile, PROFILES } from '../data/resumeData';
import { playTaDumSound, playClickSound } from '../utils/audio';

interface NavbarProps {
  currentProfile: Profile;
  onSelectProfile: (profile: Profile) => void;
  onOpenProfileSelector: () => void;
  onOpenResumeModal: () => void;
  onOpenDeployGuide: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentProfile,
  onSelectProfile,
  onOpenProfileSelector,
  onOpenResumeModal,
  onOpenDeployGuide,
  soundEnabled,
  setSoundEnabled,
  searchQuery,
  setSearchQuery,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Highlights', href: '#top10' },
  ];

  const handleLinkClick = (href: string) => {
    if (soundEnabled) playClickSound();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#141414]/95 backdrop-blur-md shadow-2xl border-b border-white/5 py-3'
          : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Professional Brand Logo */}
        <div className="flex items-center gap-6 sm:gap-8">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center shadow-lg shadow-red-950/60 group-hover:scale-105 transition-transform">
              <span className="font-bebas text-xl font-bold text-white leading-none">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bebas text-xl sm:text-2xl tracking-wider text-white group-hover:text-red-400 transition-colors leading-none">
                PRADEEP P
              </span>
              <span className="text-[9px] uppercase font-bold text-zinc-400 tracking-wider leading-tight">
                Senior Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-5 text-xs lg:text-sm font-medium text-zinc-300">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className={`transition-colors hover:text-white cursor-pointer ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-white font-bold border-b-2 border-red-600 pb-0.5'
                    : 'text-zinc-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right side utilities */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Live Search bar */}
          <div className="relative flex items-center">
            {searchOpen ? (
              <div className="flex items-center bg-black/80 border border-zinc-700 rounded-full px-3 py-1.5 transition-all w-44 sm:w-64">
                <Search className="w-4 h-4 text-zinc-400 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search skills, projects, stack..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="bg-transparent text-xs text-white placeholder-zinc-500 focus:outline-none w-full"
                />
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSearchOpen(false);
                  }}
                  className="text-zinc-400 hover:text-white ml-1 cursor-pointer"
                  title="Close search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                title="Search portfolio"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sound Toggle Button */}
          <button
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              if (next) playTaDumSound(0.25);
            }}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              soundEnabled ? 'text-red-500 hover:bg-red-500/10' : 'text-zinc-500 hover:text-white hover:bg-white/10'
            }`}
            title={soundEnabled ? 'Audio feedback enabled' : 'Audio muted'}
            aria-label="Toggle audio feedback"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* GitHub Pages Host Guide */}
          <button
            onClick={onOpenDeployGuide}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-[11px] font-medium text-zinc-300 border border-zinc-700 cursor-pointer transition-colors"
            title="Free GitHub Pages Hosting Guide"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>GitHub Pages</span>
          </button>

          {/* View Resume Button */}
          <button
            onClick={() => {
              if (soundEnabled) playClickSound();
              onOpenResumeModal();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-semibold cursor-pointer shadow-md transition-all active:scale-95"
            title="Open ATS Printable Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
          </button>

          {/* Perspective Switcher dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center gap-1.5 p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer focus:outline-none"
              title={`View Mode: ${currentProfile.name}`}
            >
              <div
                className={`w-7 h-7 rounded bg-gradient-to-br ${currentProfile.avatarBg} flex items-center justify-center font-bold text-xs text-white shadow`}
              >
                {currentProfile.avatarIcon}
              </div>
              <ChevronDown className="w-3 h-3 text-zinc-400 hidden sm:block" />
            </button>

            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-xl bg-[#181818] border border-zinc-700 shadow-2xl py-2 z-50">
                <div className="px-3 py-1.5 border-b border-zinc-800 text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">
                  Evaluation Perspective
                </div>
                {PROFILES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onSelectProfile(p);
                      setProfileDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs text-left hover:bg-white/10 transition-colors cursor-pointer ${
                      currentProfile.id === p.id ? 'text-red-500 font-bold bg-white/5' : 'text-zinc-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded bg-gradient-to-br ${p.avatarBg} flex items-center justify-center text-[10px] text-white font-bold`}
                    >
                      {p.avatarIcon}
                    </div>
                    <div className="flex flex-col">
                      <span>{p.name}</span>
                      <span className="text-[10px] text-zinc-500 truncate max-w-[170px]">
                        {p.tagline}
                      </span>
                    </div>
                  </button>
                ))}
                <div className="border-t border-zinc-800 mt-1 pt-1">
                  <button
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      onOpenProfileSelector();
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-zinc-400 hover:text-white hover:bg-white/10 cursor-pointer"
                  >
                    Perspective Selector Overview
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-md cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141414] border-b border-zinc-800 px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
              className="block px-3 py-2 rounded text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full py-2 bg-red-600 text-white rounded text-center text-xs font-bold"
            >
              View Full ATS Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="w-full py-2 bg-zinc-800 text-zinc-300 rounded text-center text-xs font-medium"
            >
              GitHub Pages Free Hosting Instructions
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
