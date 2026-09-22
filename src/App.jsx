import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import JourneySection from './sections/JourneySection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import AfterWorkTransition from './sections/AfterWorkTransition';
import SkillsSection from './sections/SkillsSection';
import ResumeSection from './sections/ResumeSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import ResumeModal from './components/ResumeModal';
import AmbientCursorShadow from './components/AmbientCursorShadow';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const revealTargets = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealTargets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#141413] flex flex-col selection:bg-[#141413] selection:text-[#F6F4EE]">
      <AmbientCursorShadow />
      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Narrative Flow */}
      <main className="flex-1">
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />
        <JourneySection />
        <ProjectsSection />
        <ExperienceSection />
        <AfterWorkTransition />
        <SkillsSection />
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* In-Browser Scrollable Resume Viewer Modal */}
      {isResumeOpen && (
        <ResumeModal onClose={() => setIsResumeOpen(false)} />
      )}
    </div>
  );
}

