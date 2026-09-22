import React from 'react';
import { personalData } from '../data/portfolioData';
import { ArrowUpRightIcon } from '../components/Icons';

export default function AboutSection({ onOpenResume }) {
  return (
    <section id="about" className="py-24 md:py-36 border-b border-[#DDD8CB] bg-[#F6F4EE]">
      <div data-reveal className="reveal-on-scroll max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label & Editorial Divider */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C5338] font-medium">
            02 / ABOUT ME
          </span>
          <div className="h-[1px] flex-1 bg-[#DDD8CB]" />
          <span className="text-[11px] font-mono text-[#8C8980]">
            EST. 2024 — PRESENT
          </span>
        </div>

        {/* Editorial Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Big Editorial Statement inspired by Alex Tepito reference */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-block border-b border-[#141413] pb-1">
              <span className="font-serif italic text-xl md:text-2xl text-[#141413]">
                {personalData.statement.lead}
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141413] font-normal leading-[1.18] tracking-tight">
              I began with web development and the <span className="italic font-normal">MERN stack</span>, building responsive full-stack applications. Today, I am expanding into <span className="italic font-normal">Python</span> and <span className="italic font-normal">Machine Learning</span> to build intelligent software.
            </h3>

            {/* Pull Quote Box */}
            <div className="p-6 md:p-8 bg-[#EDE9DE] border-l-2 border-[#8C5338] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C5338] font-semibold">
                Guiding Principle
              </span>
              <p className="font-serif italic text-lg md:text-xl text-[#141413] leading-snug">
                "Not an exaggeration of senior machine learning tenure, but an earnest, disciplined bridge from full-stack software architecture to data-driven intelligence."
              </p>
            </div>
          </div>

          {/* Right Column: Grounded Story & Background Pillars */}
          <div className="lg:col-span-6 space-y-8 lg:pt-8 text-[#5C5A53] text-base sm:text-lg leading-relaxed font-sans">
            <p>
              My coding journey started in the trenches of the modern web. I spent countless hours understanding how browsers render DOM trees, mastering <span className="text-[#141413] font-medium">React.js component lifecycles</span>, managing complex states with hooks, and developing RESTful APIs with <span className="text-[#141413] font-medium">Node.js, Express, and MongoDB</span>.
            </p>

            <p>
              During my 3-month frontend internship at <span className="text-[#141413] font-medium">MISO-Creations</span>, I translated design specifications into reusable UI components, integrated live REST APIs, and refined cross-browser performance within a collaborative Git version-controlled environment.
            </p>

            <p>
              Now, as I complete my <span className="text-[#141413] font-medium">Bachelor of Computer Applications (8.66 GPA)</span> at Eternal University, I am actively expanding into <span className="text-[#141413] font-medium">Python, NumPy, Pandas, and Machine Learning fundamentals</span>. I believe the most impactful future software lives at the intersection of dependable full-stack engineering and machine intelligence.
            </p>

            {/* Quick Fact Points */}
            <div className="pt-6 border-t border-[#DDD8CB] grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8C8980]">Academic GPA</span>
                <div className="font-serif text-2xl text-[#141413] mt-1">8.66 / 10</div>
                <span className="text-[11px] text-[#5C5A53]">Eternal University</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8C8980]">Primary Focus</span>
                <div className="font-serif text-2xl text-[#141413] mt-1">MERN + AI</div>
                <span className="text-[11px] text-[#5C5A53]">Full-Stack & ML</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8C8980]">Location</span>
                <div className="font-serif text-2xl text-[#141413] mt-1">Dehradun</div>
                <span className="text-[11px] text-[#5C5A53]">Uttarakhand, IN</span>
              </div>
            </div>

            {/* Recruiter button */}
            <div className="pt-4">
              <button
                onClick={onOpenResume}
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#141413] border-b border-[#141413] pb-1 hover:text-[#8C5338] hover:border-[#8C5338] transition-colors"
              >
                <span>Read Full Verified Background in Resume</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

