import React, { useState, useEffect } from 'react';
import { personalData } from '../data/portfolioData';
import { Menu, X, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F6F4EE]/90 backdrop-blur-md border-b border-[#DDD8CB]/70 py-4 shadow-[0_2px_12px_rgba(20,20,19,0.03)]'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#"
          className="group flex flex-col focus:outline-none"
          aria-label="Priyanshi Rana Portfolio Home"
        >
          <span className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-[#141413] transition-colors group-hover:text-[#8C5338]">
            {personalData.name}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#5C5A53] font-sans font-medium mt-0.5">
            {personalData.rolePrimary}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-9" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-medium text-[#5C5A53] hover:text-[#141413] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#141413] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Socials & Resume CTA */}
        <div className="hidden lg:flex items-center space-x-5">
          {personalData.socials.github && (
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5C5A53] hover:text-[#141413] transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {personalData.socials.linkedin && (
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5C5A53] hover:text-[#141413] transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}

          <div className="h-4 w-[1px] bg-[#DDD8CB]" />

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase border border-[#141413] rounded-full hover:bg-[#141413] hover:text-[#F6F4EE] transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center space-x-3">
          <button
            onClick={onOpenResume}
            className="px-3 py-1 text-[11px] font-medium tracking-wider uppercase border border-[#141413] rounded-full hover:bg-[#141413] hover:text-[#F6F4EE] transition-colors"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#141413] focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden fixed inset-x-0 top-[73px] bottom-0 bg-[#F6F4EE] border-t border-[#DDD8CB] p-8 flex flex-col justify-between z-50 animate-fadeIn">
          <div className="flex flex-col space-y-6 pt-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl font-normal text-[#141413] hover:italic hover:translate-x-2 transition-all flex items-baseline justify-between border-b border-[#DDD8CB]/50 pb-3"
              >
                <span>{link.name}</span>
                <span className="text-xs font-sans text-[#8C8980]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#DDD8CB] flex items-center justify-between">
            <div className="flex items-center space-x-5">
              {personalData.socials.github && (
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#141413] flex items-center gap-2 text-xs uppercase tracking-wider"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
              )}
              {personalData.socials.linkedin && (
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#141413] flex items-center gap-2 text-xs uppercase tracking-wider"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
              )}
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-xs uppercase tracking-wider font-semibold underline underline-offset-4"
            >
              View Resume →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
