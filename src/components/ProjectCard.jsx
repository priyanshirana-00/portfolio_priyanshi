import React, { useState } from 'react';
import ComputationalVisual from './ComputationalVisual';
import { ArrowUpRightIcon, GithubIcon } from './Icons';
import { Eye, RotateCw } from 'lucide-react';

/**
 * ProjectCard Component
 * Implements a 3D physical card flip / turn on hover or touch.
 * Stable aspect ratio prevents layout shifts.
 * Includes accessible HTML structure with meaningful alt text on the visual layer.
 */
export default function ProjectCard({ project, onOpenDetails }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Toggle flip on mobile touch or tap button
  const toggleFlip = (e) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="group/card flex flex-col">
      {/* 3D Container with fixed aspect ratio to prevent ANY layout shift */}
      <div
        className="relative w-full aspect-[16/8.5] sm:aspect-[16/9] perspective-1200 cursor-pointer"
        onClick={(e) => {
          if (e.target.closest('a, button')) return;
          onOpenDetails(project);
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenDetails(project);
          }
        }}
        aria-label={`View case study for ${project.title}`}
      >
        {/* Card Inner with 3D transform */}
        <div className="relative w-full h-full">
          {/* ========================================================
              FRONT FACE (Visual Layer with accessible alt text)
             ======================================================== */}
          <div
            className="absolute inset-0 w-full h-full border border-[#DDD8CB] bg-[#EDE9DE] overflow-hidden flex flex-col justify-between"
            aria-hidden={isFlipped ? "true" : "false"}
          >
            <div className="project-card-index" aria-hidden="true">
              <span>ARCHIVE / {project.number}</span>
              <span className="project-card-index-line" />
            </div>
            {/* Visual representation */}
            <div className="w-full h-full relative">
              <ComputationalVisual type={project.visualType} />
              {/* Invisible accessible text for screen readers */}
              <span className="sr-only">{project.alt}</span>
            </div>

            {/* Bottom Front Pill Indicator */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="px-2.5 py-1 bg-[#141413]/80 backdrop-blur-sm text-[#F6F4EE] text-[10px] font-mono uppercase tracking-widest">
                {project.number} / {project.title}
              </span>
              <span className="px-2 py-1 bg-[#F6F4EE]/90 backdrop-blur-sm text-[#141413] text-[9px] font-mono uppercase tracking-widest hidden sm:inline">
                Hover to reveal details ↺
              </span>
            </div>
          </div>

          {/* ========================================================
              BACK FACE (Accessible Information DIV revealed on turn)
             ======================================================== */}
          <div
            className={`project-card-back project-card-reveal-panel pointer-events-none absolute inset-x-0 bottom-0 h-[82%] translate-y-full text-[#F6F4EE] p-6 sm:p-8 flex flex-col border shadow-xl overflow-y-auto opacity-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:pointer-events-auto group-hover/card:translate-y-0 group-hover/card:opacity-100 group-focus-within/card:pointer-events-auto group-focus-within/card:translate-y-0 group-focus-within/card:opacity-100 ${isFlipped ? 'pointer-events-auto translate-y-0 opacity-100' : ''}`}
            aria-hidden="false"
          >
            <span className="project-card-panel-mark" aria-hidden="true">↗</span>
            {/* Top header */}
            <div className="shrink-0">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C5338] font-semibold">
                  PROJECT {project.number} • {project.category}
                </span>
                <span className="text-xs font-mono text-white/40">
                  {project.year}
                </span>
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl text-[#F6F4EE] font-normal leading-tight">
                {project.title}
              </h4>
              <p className="text-xs sm:text-sm text-white/60 font-sans mt-1 italic">
                {project.subtitle}
              </p>

            </div>

            <div className="project-card-summary flex flex-1 flex-col justify-center py-5 sm:py-6">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#D4A373] block mb-2">
                What I built
              </span>
              <p className="max-w-2xl text-sm sm:text-base text-white/85 font-sans leading-relaxed">
                {project.whatIBuilt[0]}
              </p>
              <div className="mt-5 h-px w-16 bg-[#8C5338]" />
              <p className="mt-4 max-w-2xl text-xs sm:text-sm text-white/55 font-sans leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Tech Stack & Action Links */}
            <div className="pt-4 border-t border-white/15 shrink-0">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-white/10 text-[10px] font-mono text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenDetails(project);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#F6F4EE] hover:text-[#8C5338] transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </button>

                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-white/60 hover:text-[#F6F4EE] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}

                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-white/60 hover:text-[#F6F4EE] transition-colors"
                  >
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Meta Information (Visible below card for editorial flow and mobile readability) */}
      <div className="pt-4 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#8C8980]">{project.number}</span>
            <h4 
              onClick={() => onOpenDetails(project)}
              className="font-serif text-xl sm:text-2xl text-[#141413] hover:text-[#8C5338] cursor-pointer transition-colors"
            >
              {project.title}
            </h4>
          </div>
          <p className="text-xs text-[#5C5A53] mt-1 line-clamp-2 max-w-md">
            {project.shortDescription}
          </p>
        </div>

        {/* Mobile Flip Toggle Button (explicit touch affordance) */}
        <button
          onClick={toggleFlip}
          className="sm:hidden p-2 text-[#5C5A53] hover:text-[#141413] border border-[#DDD8CB] rounded-none text-xs flex items-center gap-1"
          aria-label="Toggle card side"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span className="text-[10px] font-mono uppercase">{isFlipped ? "Visual" : "Details"}</span>
        </button>
      </div>
    </div>
  );
}

