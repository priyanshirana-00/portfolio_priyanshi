import React, { useEffect, useRef } from 'react';

const START_DOT_RADIUS = 5;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export default function AfterWorkTransition() {
  const wrapperRef = useRef(null);
  const revealRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const updateTransition = () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;

        const wrapper = wrapperRef.current;
        const reveal = revealRef.current;

        if (!wrapper || !reveal) return;

        const sectionTop = wrapper.offsetTop;
        const scrollDistance = Math.max(1, wrapper.offsetHeight - window.innerHeight);
        const progress = clamp((window.scrollY - sectionTop) / scrollDistance, 0, 1);

        const originX = window.innerWidth * 0.5;
        const originY = window.innerHeight * 0.5;
        const maxRadius = Math.hypot(
          Math.max(originX, window.innerWidth - originX),
          Math.max(originY, window.innerHeight - originY)
        );
        const radius = START_DOT_RADIUS + (maxRadius - START_DOT_RADIUS) * progress;

        reveal.style.clipPath = `circle(${radius}px at ${originX}px ${originY}px)`;
      });
    };

    updateTransition();
    window.addEventListener('scroll', updateTransition, { passive: true });
    window.addEventListener('resize', updateTransition);

    return () => {
      window.removeEventListener('scroll', updateTransition);
      window.removeEventListener('resize', updateTransition);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="after-work-transition relative h-[220vh] bg-[#F6F4EE]"
      aria-label="Scroll transition from professional experience to technical archive"
    >
      <div className="after-work-transition-sticky sticky top-0 h-screen overflow-hidden bg-[#F6F4EE]">
        <div className="absolute inset-0 bg-[#F6F4EE]" aria-hidden="true" />
        <div
          ref={revealRef}
          className="after-work-transition-reveal absolute inset-0 bg-[#141413]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
