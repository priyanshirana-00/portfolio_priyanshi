import React from 'react';
import JourneyTimeline from '../components/JourneyTimeline';

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 md:py-36 border-b border-[#DDD8CB] bg-[#F6F4EE]">
      <div data-reveal className="reveal-on-scroll max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C5338] font-medium">
            03 / TECHNICAL TRAJECTORY
          </span>
          <div className="h-[1px] flex-1 bg-[#DDD8CB]" />
          <span className="text-[11px] font-mono text-[#8C8980]">
            ACTIVE LEARNING
          </span>
        </div>

        {/* Section Title & Philosophy */}
        <div className="max-w-3xl mb-14 space-y-4">
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141413] font-normal leading-[1.15]">
            From web foundations to <span className="italic">data science</span> & <span className="italic">intelligent applications</span>.
          </h3>
          <p className="font-sans text-base sm:text-lg text-[#5C5A53] leading-relaxed">
            I believe software engineering should be transparent about growth. Here is my verified path: solidifying full-stack engineering first, then deliberately expanding into Python, NumPy, Pandas, and Machine Learning.
          </p>
        </div>

        {/* Journey Timeline Component */}
        <JourneyTimeline />
      </div>
    </section>
  );
}

