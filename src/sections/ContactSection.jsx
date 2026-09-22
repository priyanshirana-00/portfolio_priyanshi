import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, ArrowUpRightIcon } from '../components/Icons';
import { Mail, FileText, Check, Copy } from 'lucide-react';

export default function ContactSection({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 border-b border-[#DDD8CB] bg-[#F6F4EE]">
      <div data-reveal className="reveal-on-scroll max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C5338] font-medium">
            08 / INITIATE CONTACT
          </span>
          <div className="h-[1px] flex-1 bg-[#DDD8CB]" />
          <span className="text-[11px] font-mono text-[#8C8980]">
            COLLABORATION & ROLES
          </span>
        </div>

        <div className="max-w-4xl space-y-12">
          {/* Main Statement */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#141413] font-normal leading-[1.08] tracking-tight">
              Let's build <br />
              <span className="italic">something intelligent.</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#5C5A53] mt-6 max-w-2xl leading-relaxed">
              Whether you are looking for a dedicated full-stack developer with MERN experience, or a builder moving into Python and AI-driven applications, I am open to developer roles and collaborations.
            </p>
          </div>

          {/* Contact Direct Actions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#DDD8CB]">
            {/* Direct Email Card */}
            <div className="p-6 bg-[#EDE9DE] border border-[#DDD8CB] flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C5338] block mb-2">
                  Direct Email
                </span>
                <a
                  href={`mailto:${personalData.email}`}
                  className="font-serif text-xl sm:text-2xl text-[#141413] hover:text-[#8C5338] transition-colors break-all"
                >
                  {personalData.email}
                </a>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#DDD8CB]">
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5C5A53] hover:text-[#141413] transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#8C5338]" />
                      <span className="text-[#8C5338]">Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy email address</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-xs font-mono uppercase tracking-widest text-[#141413] font-semibold"
                >
                  Compose →
                </a>
              </div>
            </div>

            {/* Profiles & Resume Card */}
            <div className="p-6 bg-[#EDE9DE] border border-[#DDD8CB] flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C5338] block mb-2">
                  Verified Channels
                </span>
                <div className="space-y-2">
                  {personalData.socials.github && (
                    <a
                      href={personalData.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-sm font-sans text-[#141413] hover:text-[#8C5338] py-1 border-b border-[#DDD8CB]/60 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <GithubIcon className="w-4 h-4" /> GitHub Profile
                      </span>
                      <ArrowUpRightIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {personalData.socials.linkedin && (
                    <a
                      href={personalData.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-sm font-sans text-[#141413] hover:text-[#8C5338] py-1 border-b border-[#DDD8CB]/60 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <LinkedinIcon className="w-4 h-4" /> LinkedIn Network
                      </span>
                      <ArrowUpRightIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <div className="pt-2 border-t border-[#DDD8CB] flex items-center justify-between">
                <button
                  onClick={onOpenResume}
                  className="text-xs font-mono uppercase tracking-widest text-[#141413] hover:text-[#8C5338] font-semibold inline-flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Curriculum Vitae</span>
                </button>
                <span className="text-[10px] font-mono text-[#8C8980]">
                  PDF Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

