import React from 'react';
import { personalData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export default function Footer({ onOpenResume }) {
  return (
    <footer className="py-16 bg-[#F6F4EE] text-[#141413]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left identity */}
        <div className="space-y-1">
          <span className="font-serif text-2xl font-medium tracking-tight text-[#141413]">
            {personalData.name}
          </span>
          <p className="text-xs font-mono uppercase tracking-widest text-[#5C5A53]">
            {personalData.rolePrimary} • {personalData.roleSecondary}
          </p>
        </div>

        {/* Center links */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-widest text-[#5C5A53]">
          {personalData.socials.github && (
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#141413] transition-colors inline-flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}
          {personalData.socials.linkedin && (
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#141413] transition-colors inline-flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          )}
          <a
            href={`mailto:${personalData.email}`}
            className="hover:text-[#141413] transition-colors"
          >
            Email
          </a>
          <button
            onClick={onOpenResume}
            className="hover:text-[#141413] transition-colors underline underline-offset-4"
          >
            Resume
          </button>
        </div>

        {/* Right copyright / location */}
        <div className="text-[11px] font-mono text-[#8C8980]">
          © {new Date().getFullYear()} Priyanshi Rana • Dehradun, India
        </div>
      </div>
    </footer>
  );
}

