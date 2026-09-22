import React from 'react';
import { personalData } from '../data/portfolioData';
import { FileText, Download, Eye, GraduationCap, Briefcase, Award } from 'lucide-react';

export default function ResumeSection({ onOpenResume }) {
  return (
    <section id="resume" className="py-24 md:py-36 border-b border-[#DDD8CB] bg-[#EDE9DE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C5338] font-medium">
            07 / VERIFIED CREDENTIALS
          </span>
          <div className="h-[1px] flex-1 bg-[#DDD8CB]" />
          <span className="text-[11px] font-mono text-[#8C8980]">
            RESUME & QUALIFICATIONS
          </span>
        </div>

        {/* Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Recruiter Summary */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141413] font-normal leading-tight">
              Review my verified qualifications, <br />
              <span className="italic">academics, and work history.</span>
            </h3>

            <p className="font-sans text-base text-[#5C5A53] leading-relaxed max-w-xl">
              Inspect my full background directly on this website without downloading, or save an offline copy for your hiring team.
            </p>

            {/* Credential Highlights */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 bg-white/60 border border-[#DDD8CB]">
                <GraduationCap className="w-5 h-5 text-[#8C5338] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg text-[#141413] font-medium">
                    {personalData.education.degree} ({personalData.education.gpa})
                  </h4>
                  <p className="text-xs text-[#5C5A53] mt-0.5">
                    {personalData.education.institution} • {personalData.education.duration}
                  </p>
                  <span className="text-[11px] font-mono text-[#8C5338] mt-1 block">
                    Coursework: {personalData.education.coursework}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white/60 border border-[#DDD8CB]">
                <Briefcase className="w-5 h-5 text-[#8C5338] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg text-[#141413] font-medium">
                    Frontend Developer Intern — MISO-Creations
                  </h4>
                  <p className="text-xs text-[#5C5A53] mt-0.5">
                    3 Months • React.js, REST API Integration, Cross-Browser Responsive Architecture
                  </p>
                </div>
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#141413] text-[#F6F4EE] hover:bg-[#8C5338] transition-colors text-xs font-mono uppercase tracking-widest"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume On-Site</span>
              </button>

              <a
                href={personalData.resumeUrl}
                download="Priyanshi_Rana_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#141413] text-[#141413] hover:bg-[#141413] hover:text-[#F6F4EE] transition-colors text-xs font-mono uppercase tracking-widest"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Document Preview Card */}
          <div className="lg:col-span-5">
            <div 
              onClick={onOpenResume}
              className="relative p-6 sm:p-8 bg-white border border-[#DDD8CB] shadow-lg cursor-pointer group hover:border-[#141413] transition-all"
            >
              {/* Top document strip */}
              <div className="flex items-center justify-between border-b border-[#DDD8CB] pb-4 mb-6">
                <span className="font-serif italic text-lg text-[#141413]">Curriculum Vitae</span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C5338]">
                  Verified PDF
                </span>
              </div>

              {/* Minimal preview lines simulating the document */}
              <div className="space-y-4 font-mono text-[11px] text-[#5C5A53]">
                <div className="border-b border-[#DDD8CB]/60 pb-3">
                  <div className="font-serif text-xl text-[#141413] font-medium tracking-wide">
                    {personalData.name.toUpperCase()}
                  </div>
                  <div className="text-[10px] text-[#8C5338] mt-0.5">
                    {personalData.rolePrimary} & {personalData.roleSecondary}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="h-2 w-full bg-[#141413]/10" />
                  <div className="h-2 w-5/6 bg-[#141413]/10" />
                  <div className="h-2 w-3/4 bg-[#141413]/10" />
                </div>

                <div className="pt-2 border-t border-[#DDD8CB]/60 flex justify-between text-[10px]">
                  <span>EVENTIFY • AI-CHATBOT</span>
                  <span>MISO-CREATIONS</span>
                </div>
              </div>

              {/* Hover overlay hint */}
              <div className="mt-8 pt-4 border-t border-[#DDD8CB] flex items-center justify-between text-xs font-mono text-[#141413] group-hover:text-[#8C5338] transition-colors">
                <span className="uppercase tracking-widest">Click to view full PDF</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

