import React, { useEffect, useRef } from 'react';
import ComputationalVisual from './ComputationalVisual';
import { X } from 'lucide-react';
import { GithubIcon, ExternalLinkIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    // Lock body scroll while modal is open
    const originalOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = 'hidden';

    const focusableSelector = 'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements = () => dialogRef.current?.querySelectorAll(focusableSelector) || [];
    window.requestAnimationFrame(() => focusableElements()[0]?.focus());

    // Escape key listener
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        const elements = Array.from(focusableElements());
        if (!elements.length) return;
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-[#141413]/75 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 md:p-10 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div 
        ref={dialogRef}
        className="bg-[#F6F4EE] max-w-4xl w-full border border-[#DDD8CB] shadow-2xl my-auto relative text-[#141413] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Bar */}
        <div className="sticky top-0 bg-[#F6F4EE]/95 backdrop-blur-md border-b border-[#DDD8CB] px-6 md:px-10 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8C5338] font-semibold">
              CASE STUDY {project.number}
            </span>
            <span className="text-[#8C8980]">•</span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#5C5A53]">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#141413] hover:text-[#8C5338] hover:bg-[#EDE9DE] transition-colors focus:outline-none"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 md:p-12 space-y-12">
          {/* Main Title & Subtitle */}
          <div className="space-y-3">
            <h2 id="case-study-title" className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141413] font-normal leading-tight">
              {project.title}
            </h2>
            <p className="font-serif italic text-xl md:text-2xl text-[#5C5A53]">
              {project.subtitle}
            </p>
          </div>

          {/* Large Editorial Visual Showcase */}
          <div className="w-full aspect-[16/9] border border-[#DDD8CB] overflow-hidden shadow-inner bg-[#EDE9DE]">
            <ComputationalVisual type={project.visualType} />
          </div>

          {/* Core Case Study Sections */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Left Column: Problem & What Was Built */}
            <div className="md:col-span-8 space-y-8">
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#8C5338] font-bold">
                  Overview
                </h4>
                <p className="font-sans text-base text-[#5C5A53] leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Problem Solved */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#8C5338] font-bold">
                  01. The Problem & Context
                </h4>
                <p className="font-sans text-base text-[#5C5A53] leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>

              {/* What I Built */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#8C5338] font-bold">
                  02. What I Engineered & Built
                </h4>
                <ul className="space-y-3">
                  {project.whatIBuilt.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#141413]">
                      <span className="text-[#8C5338] font-mono text-xs mt-1">
                        0{idx + 1}.
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 border-t border-[#DDD8CB] pt-6">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#8C5338] font-bold">
                  How It Works
                </h4>
                <p className="font-sans text-sm sm:text-base text-[#5C5A53] leading-relaxed">
                  {project.howItWorks || project.problemSolved}
                </p>
              </div>

              {/* Key Learnings */}
              <div className="space-y-3 border-t border-[#DDD8CB] pt-6">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#8C5338] font-bold">
                  03. Technical Growth & Learnings
                </h4>
                <p className="font-sans text-sm sm:text-base text-[#5C5A53] leading-relaxed italic">
                  "{project.keyLearnings}"
                </p>
              </div>
            </div>

            {/* Right Column: Tech Stack & Action Links */}
            <div className="md:col-span-4 space-y-6 md:border-l md:border-[#DDD8CB] md:pl-8">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#8C8980] block mb-3">
                  Technologies Used
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#EDE9DE] border border-[#DDD8CB] text-xs font-mono text-[#141413]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#DDD8CB] space-y-3">
                <span className="text-xs uppercase font-mono tracking-widest text-[#8C8980] block mb-2">
                  Project Links
                </span>
                
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-3 bg-[#141413] text-[#F6F4EE] hover:bg-[#8C5338] transition-colors text-xs font-mono uppercase tracking-wider"
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4" /> Source Code
                    </span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-3 border border-[#141413] text-[#141413] hover:bg-[#141413] hover:text-[#F6F4EE] transition-colors text-xs font-mono uppercase tracking-wider"
                  >
                    <span>Live Demonstration</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.links.backend && (
                  <a
                    href={project.links.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-3 border border-[#8C5338] text-[#8C5338] hover:bg-[#8C5338] hover:text-[#F6F4EE] transition-colors text-xs font-mono uppercase tracking-wider"
                  >
                    <span>Backend API</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.links.certificate && (
                  <a
                    href={project.links.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-3 border border-[#8C5338] text-[#8C5338] hover:bg-[#8C5338] hover:text-[#F6F4EE] transition-colors text-xs font-mono uppercase tracking-wider"
                  >
                    <span>View Internship Certificate</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#EDE9DE] border-t border-[#DDD8CB] px-6 md:px-10 py-4 flex items-center justify-between text-xs font-mono text-[#5C5A53]">
          <span>PRIYANSHI RANA • ARCHIVE</span>
          <button
            onClick={onClose}
            className="hover:text-[#141413] uppercase tracking-wider font-semibold"
          >
            Close Presentation [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
