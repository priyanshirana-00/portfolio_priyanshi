import React, { useEffect, useRef } from 'react';

const interactiveSelector = 'a, button, img, svg, input, textarea, [role="dialog"], [data-cursor-content]';
const textSelector = 'h1, h2, h3, h4, h5, p, li';

export default function AmbientCursorShadow() {
  const shadowRef = useRef(null);

  useEffect(() => {
    const shadow = shadowRef.current;
    if (!shadow) return undefined;

    const moveShadow = (event) => {
      const isOverInteractive = event.target.closest?.(interactiveSelector);
      const isOverText = event.target.closest?.(textSelector);
      shadow.style.setProperty('--cursor-x', `${event.clientX}px`);
      shadow.style.setProperty('--cursor-y', `${event.clientY}px`);
      shadow.classList.toggle('is-hidden', Boolean(isOverInteractive));
      shadow.classList.toggle('is-text', Boolean(isOverText) && !isOverInteractive);
    };

    const hideShadow = () => shadow.classList.add('is-hidden');

    window.addEventListener('pointermove', moveShadow, { passive: true });
    window.addEventListener('blur', hideShadow);
    document.addEventListener('mouseleave', hideShadow);

    return () => {
      window.removeEventListener('pointermove', moveShadow);
      window.removeEventListener('blur', hideShadow);
      document.removeEventListener('mouseleave', hideShadow);
    };
  }, []);

  return <div ref={shadowRef} className="ambient-cursor-shadow is-hidden" aria-hidden="true" />;
}