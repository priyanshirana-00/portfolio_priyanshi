import React, { useEffect, useRef } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { personalData } from '../data/portfolioData';

/**
 * ResumeModal Component
 * Embeds the actual uploaded PDF (/resume.pdf) in an interactive scrollable viewer.
 * Recruiters can scroll through the entire document directly on the website.
 */
export default function ResumeModal({ onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = 'hidden';

    const focusableSelector = 'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements = () => dialogRef.current?.querySelectorAll(focusableSelector) || [];
    window.requestAnimationFrame(() => focusableElements()[0]?.focus());

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

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#141413]/80 backdrop-blur-md flex justify-center items-center p-3 sm:p-6 md:p-10 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        ref={dialogRef}
        className="bg-[#F6F4EE] max-w-5xl w-full h-[90vh] border border-[#DDD8CB] shadow-2xl flex flex-col relative text-[#141413]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="bg-[#F6F4EE] border-b border-[#DDD8CB] px-6 py-4 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-[#8C5338]" />
            <div>
              <h3 id="resume-modal-title" className="font-serif text-xl text-[#141413] font-normal leading-tight">
                {personalData.name} — Curriculum Vitae
              </h3>
              <p className="text-[11px] font-mono text-[#5C5A53]">
                Verified PDF Document • Scrollable In-Browser
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Download Link */}
            <a
              href={personalData.resumeUrl}
              download="Priyanshi_Rana_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#141413] text-[#F6F4EE] hover:bg-[#8C5338] transition-colors text-xs font-mono uppercase tracking-wider"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            {/* Open Raw in New Tab */}
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-[#DDD8CB] text-[#141413] hover:bg-[#EDE9DE] transition-colors"
              aria-label="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-[#141413] hover:text-[#8C5338] hover:bg-[#EDE9DE] transition-colors"
              aria-label="Close Resume Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Scrollable PDF Object */}
        <div className="flex-1 w-full h-full bg-[#EDE9DE] p-2 sm:p-4 overflow-hidden">
          <object
            data={personalData.resumeUrl}
            type="application/pdf"
            className="w-full h-full border border-[#DDD8CB] shadow-sm bg-white"
          >
            {/* Fallback iframe if object isn't supported */}
            <iframe
              src={`${personalData.resumeUrl}#toolbar=1&navpanes=0`}
              className="w-full h-full border-none"
              title="Priyanshi Rana Resume"
            >
              <div className="p-8 text-center space-y-4">
                <p className="font-serif text-xl text-[#141413]">
                  Your browser does not support embedded PDF rendering.
                </p>
                <a
                  href={personalData.resumeUrl}
                  download="Priyanshi_Rana_Resume.pdf"
                  className="inline-block px-6 py-3 bg-[#141413] text-[#F6F4EE] text-xs font-mono uppercase tracking-widest"
                >
                  Download Resume PDF Directly
                </a>
              </div>
            </iframe>
          </object>
        </div>

        {/* Bottom Helper Bar */}
        <div className="bg-[#EDE9DE] border-t border-[#DDD8CB] px-6 py-2.5 flex items-center justify-between text-[11px] font-mono text-[#5C5A53] shrink-0">
          <span>ETERNAL UNIVERSITY (BCA, 8.66 GPA) • DEHRADUN</span>
          <span className="hidden sm:inline">Press ESC to exit viewer</span>
        </div>
      </div>
    </div>
  );
}

