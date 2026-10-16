import React, { useState, useEffect } from 'react';
import { PROFILES, Profile, RESUME_DATA } from './data/resumeData';
import { IntroScreen } from './components/IntroScreen';
import { ProfileSelector } from './components/ProfileSelector';
import { Navbar } from './components/Navbar';
import { Billboard } from './components/Billboard';
import { ContinueExploringNav } from './components/ContinueExploringNav';
import { FullStoryEpisodes } from './components/FullStoryEpisodes';
import { TopMomentsAchievements } from './components/TopMomentsAchievements';
import { SkillUniverse } from './components/SkillUniverse';
import { FeaturedProjects } from './components/FeaturedProjects';
import { AboutMe } from './components/AboutMe';
import { TopPicksRow } from './components/TopPicksRow';
import { ToBeContinued } from './components/ToBeContinued';
import { DetailModal } from './components/DetailModal';
import { ResumeModal } from './components/ResumeModal';
import { GitHubPagesHelperModal } from './components/GitHubPagesHelperModal';
import { playTaDumSound } from './utils/audio';

export default function App() {
  const [stage, setStage] = useState<'intro' | 'profile-select' | 'browse'>('intro');
  const [currentProfile, setCurrentProfile] = useState<Profile>(PROFILES[0]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Modals state
  const [selectedDetailItem, setSelectedDetailItem] = useState<any | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState<boolean>(false);

  // Handle stage transitions
  const handleIntroComplete = () => {
    setStage('profile-select');
  };

  const handleSelectProfile = (profile: Profile) => {
    setCurrentProfile(profile);
    setStage('browse');

    // Scroll to the profile's prioritized section after a brief render delay
    setTimeout(() => {
      const targetId = profile.initialSection;
      if (targetId && targetId !== 'hero') {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 150);
  };

  // Scroll spy for active navbar section
  useEffect(() => {
    if (stage !== 'browse') return;

    const sectionIds = ['hero', 'experience', 'achievements', 'skills', 'projects', 'about', 'top10', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stage]);

  // Restart to top
  const handleWatchAgain = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('hero');
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white selection:bg-[#E50914] selection:text-white font-sans overflow-x-hidden">
      {/* 1. Intro Screen */}
      {stage === 'intro' && (
        <IntroScreen
          onEnter={handleIntroComplete}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
        />
      )}

      {/* 2. Evaluation Perspective Selector */}
      {stage === 'profile-select' && (
        <ProfileSelector
          onSelectProfile={handleSelectProfile}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          onSkip={() => handleSelectProfile(PROFILES[0])}
        />
      )}

      {/* 3. Main Portfolio Experience */}
      {stage === 'browse' && (
        <div className="relative animate-fade-in pb-12">
          {/* Navigation Bar */}
          <Navbar
            currentProfile={currentProfile}
            onSelectProfile={handleSelectProfile}
            onOpenProfileSelector={() => setStage('profile-select')}
            onOpenResumeModal={() => setIsResumeOpen(true)}
            onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
            soundEnabled={soundEnabled}
            setSoundEnabled={setSoundEnabled}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeSection={activeSection}
          />

          <main>
            {/* Search Filter Banner (if searching) */}
            {searchQuery.trim() && (
              <div className="pt-24 max-w-7xl mx-auto px-4 sm:px-6">
                <div className="p-4 rounded-xl netflix-glass border border-red-500/40 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-zinc-400">Filtering catalog for: </span>
                    <strong className="text-white text-sm">"{searchQuery}"</strong>
                  </div>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-red-400 hover:text-red-300 font-semibold cursor-pointer underline"
                  >
                    Clear Filter
                  </button>
                </div>
              </div>
            )}

            {/* Billboard Hero */}
            <Billboard
              onOpenResumeModal={() => setIsResumeOpen(true)}
              onOpenMoreInfo={() =>
                setSelectedDetailItem({
                  title: 'Pradeep P — Senior Software Engineer',
                  genre: 'AI / RAG / Full-Stack Microservices',
                  rating: '4+ Years Exp',
                  period: '2021 – Present',
                  fullOverview: RESUME_DATA.summary,
                  architectureDetails: [
                    'Multi-agent RAG pipelines with MongoDB Atlas Vector Search and Brave Search',
                    'Langfuse and OpenTelemetry production observability with end-to-end trace collection',
                    'High-scale Java 17 and Spring Boot microservices serving tier-1 enterprises',
                    'Sub-second query tuning reducing API response times from 19s to under 1s',
                  ],
                  outcomes: [
                    'Contributed to securing $1.5M enterprise client deal via Sequential Review feature',
                    'Cut Insights API latency by ~93%, winning direct praise from Microsoft',
                    'Spearheaded 140+ user story full-stack migration for Section Template & Catalog',
                  ],
                  techStack: [
                    'Java',
                    'Spring Boot',
                    'React.js',
                    'MongoDB',
                    'Langfuse',
                    'OpenTelemetry',
                    'Apache Solr',
                    'OpenAI',
                    'Docker',
                  ],
                  featuredBadge: 'EXECUTIVE PROFILE',
                  gradient: 'from-red-950 via-zinc-900 to-black',
                })
              }
              soundEnabled={soundEnabled}
            />

            {/* Section Quick Navigator */}
            <ContinueExploringNav
              activeSection={activeSection}
              onNavigate={(id) => setActiveSection(id)}
              soundEnabled={soundEnabled}
            />

            {/* Section 01: Career Journey & Milestones */}
            <FullStoryEpisodes
              onSelectEpisode={(milestone) => setSelectedDetailItem(milestone)}
              onOpenResumeModal={() => setIsResumeOpen(true)}
              soundEnabled={soundEnabled}
            />

            {/* Section 02: Key Achievements & Production Metrics */}
            <TopMomentsAchievements
              onSelectAchievement={(ach) => setSelectedDetailItem(ach)}
              soundEnabled={soundEnabled}
            />

            {/* Section 03: Technical Stack & Competencies */}
            <SkillUniverse soundEnabled={soundEnabled} />

            {/* Section 04: Featured Systems & Case Studies */}
            <FeaturedProjects
              onSelectProject={(proj) => setSelectedDetailItem(proj)}
              soundEnabled={soundEnabled}
            />

            {/* Section 05: About Me & Education */}
            <AboutMe
              onOpenResumeModal={() => setIsResumeOpen(true)}
              soundEnabled={soundEnabled}
            />

            {/* Section 06: Core Highlights & Architectural Patterns */}
            <TopPicksRow
              onSelectItem={(item) => setSelectedDetailItem(item)}
              soundEnabled={soundEnabled}
            />

            {/* Get In Touch / Contact */}
            <ToBeContinued
              onWatchAgain={handleWatchAgain}
              onSwitchProfile={() => setStage('profile-select')}
              soundEnabled={soundEnabled}
            />
          </main>

          {/* Detailed Specifications Modal */}
          <DetailModal
            item={selectedDetailItem}
            onClose={() => setSelectedDetailItem(null)}
            soundEnabled={soundEnabled}
          />

          {/* ATS Printable Resume Modal */}
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
            soundEnabled={soundEnabled}
          />

          {/* GitHub Pages 100% Free Hosting Modal */}
          <GitHubPagesHelperModal
            isOpen={isDeployGuideOpen}
            onClose={() => setIsDeployGuideOpen(false)}
            soundEnabled={soundEnabled}
          />
        </div>
      )}
    </div>
  );
}
