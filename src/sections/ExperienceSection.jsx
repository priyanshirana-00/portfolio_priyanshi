import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ExternalLink } from 'lucide-react';
import { internshipExperience } from '../data/portfolioData';

export default function ExperienceSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="experience" className="py-24 md:py-36 border-b border-[#DDD8CB] bg-[#EDE9DE]">
      <div data-reveal className="reveal-on-scroll max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C5338] font-medium">
            05 / EXPERIENCE
          </span>
          <div className="h-[1px] flex-1 bg-[#DDD8CB]" />
          <span className="text-[11px] font-mono text-[#8C8980]">PRODUCTION PRACTICE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4 space-y-5">
            <p className="font-serif italic text-xl text-[#141413]">Work that happened with a team.</p>
            <h3 className="font-serif text-4xl md:text-5xl leading-[1.08] text-[#141413]">
              Frontend engineering in a real production setting.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#5C5A53]">
              An honest record of the internship where interface work met APIs, debugging, deployment, and collaboration.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className={`experience-entry border-y border-[#BEB6A5] ${isExpanded ? 'is-expanded' : ''}`}>
              <button
                type="button"
                onClick={() => setIsExpanded((expanded) => !expanded)}
                aria-expanded={isExpanded}
                className="w-full text-left py-7 md:py-9 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C5338] focus-visible:ring-inset"
              >
                <span className="flex items-start justify-between gap-6">
                  <span className="flex items-start gap-5 md:gap-8">
                    <span className="font-mono text-xs text-[#8C5338] pt-2">{internshipExperience.number}</span>
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.2em] font-mono text-[#8C8980]">
                        {internshipExperience.duration}
                      </span>
                      <span className="mt-2 block font-serif text-3xl md:text-5xl text-[#141413] group-hover:italic transition-all">
                        {internshipExperience.company}
                      </span>
                      <span className="mt-2 block text-sm md:text-base text-[#5C5A53]">
                        {internshipExperience.role}
                      </span>
                    </span>
                  </span>
                  <span className="mt-2 flex h-9 w-9 shrink-0 items-center justify-center border border-[#141413] transition-colors group-hover:bg-[#141413] group-hover:text-[#F6F4EE]">
                    <ChevronDown className={`h-4 w-4 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
                  </span>
                </span>
              </button>

              <div className={`experience-details grid transition-[grid-template-rows,opacity] duration-500 ease-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="ml-10 border-l border-[#BEB6A5] pl-5 md:ml-16 md:pl-8 pb-9">
                    <p className="max-w-2xl text-base leading-relaxed text-[#5C5A53]">
                      {internshipExperience.introduction}
                    </p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-mono text-[#8C5338]">What I worked on</span>
                        <ul className="mt-4 space-y-3">
                          {internshipExperience.responsibilities.map((item) => (
                            <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#141413]">
                              <span className="text-[#8C5338]">—</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-mono text-[#8C5338]">Technologies & workflow</span>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {internshipExperience.technologies.map((technology) => (
                            <span key={technology} className="border border-[#D2C9B8] bg-[#F6F4EE]/70 px-2.5 py-1 text-[10px] font-mono text-[#5C5A53]">
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {internshipExperience.certificate && (
                      <a
                        href={internshipExperience.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#141413] hover:text-[#8C5338]"
                      >
                        View internship certificate
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-widest font-mono text-[#8C8980]">
              <span>{isExpanded ? 'Details revealed' : 'Expand experience'}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
