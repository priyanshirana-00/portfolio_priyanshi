import React from 'react';
import priyaPortrait from '../assets/priya-profile.jpg';

/**
 * EditorialPortrait Component
 * Treats Priyanshi's authentic photograph as a high-end editorial publication portrait.
 * Preserves natural facial proportions with safe headroom (object-position: 50% 20%).
 * Zero external calls, zero facial alteration, zero filters.
 */
export default function EditorialPortrait({ variant = "standard", className = "" }) {
  return (
    <div
      className={`hero-portrait-frame relative w-full aspect-[4/5] md:aspect-[3/4] bg-[#EDE9DE] overflow-hidden border border-[#DDD8CB] rounded-none group ${className}`}
    >
      <div className="hero-portrait-paper" aria-hidden="true" />
      <div className="hero-portrait-tape hero-portrait-tape-top" aria-hidden="true" />
      <div className="hero-portrait-tape hero-portrait-tape-bottom" aria-hidden="true" />
      {/* Authentic Local Photograph */}
      <img
        src={priyaPortrait}
        alt="Priyanshi Rana — Full-Stack Developer expanding into AI/ML"
        className="relative z-[1] w-full h-full object-cover object-[50%_22%] transition-transform duration-1000 ease-out group-hover:scale-[1.01]"
        loading="eager"
        draggable={false}
      />

      {/* Subtle Editorial Caption Strip (State 1 - Clean & Prominent) */}
      {variant === "standard" && (
        <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 bg-[#F6F4EE]/90 backdrop-blur-sm border border-[#DDD8CB] text-[10px] uppercase font-mono tracking-widest text-[#141413] flex items-center justify-between pointer-events-none">
          <span className="font-semibold">Priyanshi Rana</span>
          <span className="text-[#8C5338]">Full-Stack MERN</span>
        </div>
      )}

      {/* Subtle Technical / Data Overlay (State 3 - Trajectory) */}
      {variant === "portrait-data" && (
        <>
          {/* Minimal hairline coordinate crosshairs in corners */}
          <div className="absolute top-3 left-3 text-[9px] font-mono text-white/80 bg-[#141413]/70 px-2 py-0.5 tracking-wider">
            [SYS // MERN → AI/ML]
          </div>
          <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 bg-[#141413]/85 backdrop-blur-sm border border-white/15 text-[10px] uppercase font-mono tracking-widest text-white flex items-center justify-between">
            <span className="text-[#F6F4EE]">Data & Model Pipeline</span>
            <span className="text-[#D4A373]">Python • NumPy • ML</span>
          </div>
        </>
      )}

      {/* Editorial Frame Marking (State 4 - Intelligent Applications) */}
      {variant === "portrait-frame" && (
        <>
          <div className="absolute inset-3 border border-white/40 pointer-events-none" />
          <div className="absolute bottom-5 left-5 right-5 py-1.5 px-3 bg-[#F6F4EE]/90 backdrop-blur-sm border border-[#DDD8CB] text-[10px] uppercase font-mono tracking-widest text-[#141413] flex items-center justify-between pointer-events-none">
            <span>Intelligent Applications</span>
            <span className="text-[#8C5338]">Future Focus</span>
          </div>
        </>
      )}
    </div>
  );
}

