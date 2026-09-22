import React, { useState } from 'react';
import { selectedProjects } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="work" className="py-24 md:py-36 border-b border-[#DDD8CB] bg-[#F6F4EE]">
      <div data-reveal className="reveal-on-scroll max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C5338] font-medium">
            04 / SELECTED WORK
          </span>
          <div className="h-[1px] flex-1 bg-[#DDD8CB]" />
          <span className="text-[11px] font-mono text-[#8C8980]">
            2 FEATURED SYSTEMS
          </span>
        </div>

        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141413] font-normal leading-[1.12]">
              Recent engineering, <br />
              <span className="italic">from MERN systems to AI endpoints.</span>
            </h3>
            <p className="font-sans text-sm sm:text-base text-[#5C5A53] leading-relaxed">
              Two substantial builds, each with its own architecture story. Hover or tap to reveal the work, then open the full case study.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8C8980] block">
              Interaction Cue
            </span>
            <span className="font-serif italic text-sm text-[#141413]">
              Editorial reveal active
            </span>
          </div>
        </div>

        {/* Asymmetric Composition Inspired by Reference */}
        <div className="space-y-16">
          <div className="border-b border-[#DDD8CB] pb-16">
            <ProjectCard
              project={selectedProjects[0]}
              onOpenDetails={(proj) => setActiveProject(proj)}
            />
          </div>

          <div className="border-b border-[#DDD8CB] pb-16">
            <ProjectCard
              project={selectedProjects[1]}
              onOpenDetails={(proj) => setActiveProject(proj)}
            />
          </div>
        </div>
      </div>

      {/* Full Case Study Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}

