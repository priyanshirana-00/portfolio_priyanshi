import React, { useEffect, useRef, useState } from 'react';
import { journeyNotes } from '../data/portfolioData';
import { ArrowRight, RotateCcw } from 'lucide-react';

export default function JourneyTimeline() {
  const [topIndex, setTopIndex] = useState(0);
  const [isPeeling, setIsPeeling] = useState(false);
  const peelTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (peelTimerRef.current) window.clearTimeout(peelTimerRef.current);
    };
  }, []);

  const activeNote = journeyNotes[topIndex];
  const orderedNotes = journeyNotes.map((_, depth) => journeyNotes[(topIndex + depth) % journeyNotes.length]);

  const peelNote = () => {
    if (isPeeling || !activeNote) return;

    setIsPeeling(true);
    peelTimerRef.current = window.setTimeout(() => {
      setTopIndex((index) => (index + 1) % journeyNotes.length);
      setIsPeeling(false);
    }, 620);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
      <div className="lg:col-span-7">
        <div className="flex items-center justify-between border-b border-[#DDD8CB] pb-4 mb-8">
          <span className="text-[11px] uppercase tracking-widest font-mono text-[#8C5338]">
            06 layers / one direction
          </span>
          <span className="text-[11px] font-mono text-[#8C8980]">
            {activeNote ? `${activeNote.step} / 06` : 'COMPLETE'}
          </span>
        </div>

        <div className="relative min-h-[390px] sm:min-h-[350px] [perspective:1200px]">
          {orderedNotes.map((note, depth) => {
            const isTop = depth === 0;
            const rotation = isTop ? 0 : depth % 2 === 0 ? 1.5 : -1.5;

            return (
              <button
                key={note.step}
                type="button"
                onClick={isTop ? peelNote : undefined}
                disabled={!isTop || isPeeling}
                aria-label={isTop ? `Peel back ${note.label}` : `${note.label} is underneath`}
                className={`journey-note absolute inset-x-0 top-0 min-h-[310px] sm:min-h-[280px] text-left border border-[#CFC8B8] bg-[#F1EBDD] p-6 sm:p-8 shadow-[8px_10px_0_rgba(20,20,19,0.04)] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isTop ? 'journey-note-top cursor-pointer hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C5338]' : 'journey-note-under pointer-events-none'
                } ${isTop && isPeeling ? 'journey-note-peeling' : ''}`}
                style={{
                  zIndex: journeyNotes.length - depth,
                  transform: `translate(${depth * 5}px, ${depth * 20}px) rotate(${rotation}deg) scale(${1 - depth * 0.018})`,
                }}
              >
                <span className="absolute right-7 top-5 h-3 w-3 rounded-full border border-[#8C5338] bg-[#D4A373] shadow-[0_1px_2px_rgba(20,20,19,0.25)]" />
                <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-[#8C5338]">
                  {note.step} / {note.label}
                </span>
                {!isTop && (
                  <span className="journey-note-peek absolute bottom-3 left-5 right-5 truncate text-[9px] font-mono uppercase tracking-[0.16em] text-[#8C8980]">
                    {note.step} / {note.label}
                  </span>
                )}
                {isTop && (
                  <>
                    <span className="mt-14 block max-w-lg font-serif text-3xl sm:text-4xl leading-tight text-[#141413]">
                      {note.title}
                    </span>
                    <span className="mt-5 block max-w-xl text-sm sm:text-base leading-relaxed text-[#5C5A53]">
                      {note.description}
                    </span>
                    <span className="mt-8 flex flex-wrap gap-2 border-t border-[#DDD8CB] pt-4">
                      {note.tools.map((tool) => (
                        <span key={tool} className="text-[10px] font-mono uppercase tracking-wider text-[#8C8980]">
                          {tool}
                        </span>
                      ))}
                    </span>
                  </>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#DDD8CB] pt-4">
          <span className="text-xs uppercase tracking-widest font-mono text-[#5C5A53]">
            Peel back the layers <ArrowRight className="ml-1 inline-block h-3.5 w-3.5" />
          </span>
          {topIndex === journeyNotes.length - 1 && (
            <button
              type="button"
              onClick={() => setTopIndex(0)}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-mono text-[#8C5338] hover:text-[#141413]"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Replay journey
            </button>
          )}
        </div>
      </div>

      <aside className="lg:col-span-5 lg:pt-14">
        <div className="border-t-2 border-[#141413] pt-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#8C5338]">
            Current stage
          </span>
            <h4 key={activeNote?.step} className="journey-stage-change mt-5 font-serif text-4xl sm:text-5xl leading-[1.05] text-[#141413]">
            {activeNote?.label}
          </h4>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[#5C5A53]">
            {activeNote?.description}
          </p>
          <div className="mt-8 border-t border-[#DDD8CB] pt-4 text-xs font-mono uppercase tracking-widest text-[#8C8980]">
            Building deliberately, one layer at a time.
          </div>
        </div>
      </aside>
    </div>
  );
}
