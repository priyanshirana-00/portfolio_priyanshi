import React from 'react';
import SkillArchive from '../components/SkillArchive';

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-chapter py-24 md:py-36 border-b border-[#3B3934] bg-[#141413] text-[#F6F4EE]">
      <div data-reveal className="reveal-on-scroll max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C5338] font-medium">
            06 / TECHNICAL ARCHIVE
          </span>
          <div className="h-[1px] flex-1 bg-[#DDD8CB]" />
          <span className="text-[11px] font-mono text-[#8C8980]">
            INDEX 01 — 06
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-2xl mb-16 space-y-4">
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F6F4EE] font-normal leading-[1.15]">
            Engineering competencies, <br />
            <span className="italic text-[#DDD8CB]">cataloged with discipline.</span>
          </h3>
          <p className="font-sans text-sm sm:text-base text-[#C8C3B8] leading-relaxed">
            An honest index of the tools, frameworks, and languages I actively use and learn. No inflated checklists—only verified competencies.
          </p>
        </div>

        {/* The Skills Archive */}
        <SkillArchive />
      </div>
    </section>
  );
}

