import React, { useState, useEffect, useRef } from 'react';
import { heroStates } from '../data/portfolioData';
import EditorialPortrait from '../components/EditorialPortrait';
import HeroAbstractVisual from '../components/HeroAbstractVisual';
import { ArrowDown } from 'lucide-react';

export default function HeroSection({ onOpenResume }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState(0);
  const [isWiping, setIsWiping] = useState(false);
  const transitionRef = useRef(null);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % heroStates.length;
    const dwellTimer = setTimeout(() => {
      setIncomingIndex(nextIndex);
      setIsWiping(true);

      transitionRef.current = setTimeout(() => {
        setCurrentIndex(nextIndex);
        setIsWiping(false);
      }, 950);
    }, 3000);

    return () => {
      clearTimeout(dwellTimer);
      if (transitionRef.current) clearTimeout(transitionRef.current);
    };
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      if (transitionRef.current) clearTimeout(transitionRef.current);
    };
  }, []);

  /* Keep the active state visible for three seconds before each wipe. */
  const currentState = heroStates[currentIndex];
  const nextState = heroStates[incomingIndex];

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-28 md:pt-36 pb-16 md:pb-24 flex flex-col justify-between border-b border-[#DDD8CB]"
      aria-live="polite"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Top Editorial Eyebrow & Rule */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <span className="font-serif italic text-lg md:text-xl text-[#141413]">
            Editorial Introduction
          </span>
          <div className="h-[1px] flex-1 bg-[#DDD8CB]" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#5C5A53]">
            Priyanshi Rana • Dehradun, India
          </span>
        </div>

        {/* Unified Hero Stage with automatic curved wipe */}
        <div className="relative w-full overflow-hidden min-h-[560px] md:min-h-[500px]">
          <div className="w-full h-full">
            <HeroStageContent state={currentState} onOpenResume={onOpenResume} layer="current" />
          </div>

          {isWiping && (
            <div 
              className="absolute inset-0 w-full h-full bg-[#F6F4EE] hero-wipe-enter pointer-events-none"
              style={{ zIndex: 10 }}
            >
              <HeroStageContent state={nextState} onOpenResume={onOpenResume} layer="incoming" />
            </div>
          )}
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-10 md:pt-14 flex items-center justify-between">
        <a
          href="#about"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#5C5A53] hover:text-[#141413] transition-colors"
        >
          <span>Scroll Down</span>
          <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1" />
        </a>
        
        <div className="text-[11px] font-mono text-[#8C8980]">
          2024 — 2027 • ETERNAL UNIVERSITY (8.66 GPA)
        </div>
      </div>
    </section>
  );
}

/**
 * Renders the 2-Column Editorial Stage Content for each State
 */
function HeroStageContent({ state, onOpenResume, layer = 'current' }) {
  return (
    <div className={`hero-stage-content hero-stage-${layer} grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}>
      {/* Visual / Portrait Column (Left on Desktop, Top on Mobile) */}
      <div className="lg:col-span-5 order-1 lg:order-1 max-w-sm sm:max-w-md lg:max-w-none mx-auto lg:mx-0 w-full">
        {state.visualType === "portrait" ? (
          <EditorialPortrait />
        ) : (
          <HeroAbstractVisual variant={state.visualType} />
        )}
        
        {/* Caption below visual */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-[#5C5A53]">
          <span className="font-mono">{state.tag}</span>
          <span className="italic font-serif">{state.meta}</span>
        </div>
      </div>

      {/* Typography Column (Right on Desktop, Bottom on Mobile) */}
      <div className="lg:col-span-7 order-2 lg:order-2 flex flex-col justify-center space-y-6 pt-2">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest font-mono text-[#8C5338] font-semibold">
            {state.tag}
          </span>
          <div className="h-[1px] w-12 bg-[#DDD8CB]" />
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#141413] leading-[1.08]">
          {state.headlinePrimary}{' '}
          <span className="italic font-normal text-[#141413]">
            {state.headlineItalic}
          </span>
        </h1>

        <div className="space-y-2 max-w-xl pt-2">
          <p className="font-serif text-xl sm:text-2xl text-[#141413] font-normal leading-snug">
            {state.supportPrimary}
          </p>
          <p className="font-sans text-sm sm:text-base text-[#5C5A53] leading-relaxed">
            {state.supportSecondary}
          </p>
        </div>

        {/* Meta tags */}
        <div className="pt-2 flex items-center gap-3 text-xs uppercase tracking-widest font-mono text-[#8C8980]">
          <span>{state.meta}</span>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 flex flex-wrap items-center gap-5">
          <a
            href="#work"
            className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-widest font-medium bg-[#141413] text-[#F6F4EE] hover:bg-[#8C5338] transition-colors rounded-none"
          >
            Explore Selected Work
          </a>
          <button
            onClick={onOpenResume}
            className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-widest font-medium border border-[#141413] text-[#141413] hover:bg-[#141413] hover:text-[#F6F4EE] transition-colors"
          >
            View Full Resume
          </button>
        </div>
      </div>
    </div>
  );
}
