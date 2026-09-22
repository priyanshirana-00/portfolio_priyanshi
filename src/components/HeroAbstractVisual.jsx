import React from 'react';

/**
 * HeroAbstractVisual — editorial abstract compositions for Hero states 2, 3, 4.
 * NO photo. NO graph. NO chart. NO fake data visualization.
 * All visuals are purely typographic / geometric / editorial.
 */
export default function HeroAbstractVisual({ variant }) {
  /* ─────────────────────────────────────────────────────────
     STATE 02 / "computational" — Python learning terminal
     Subtle code fragments + Python-inspired typography
  ───────────────────────────────────────────────────────── */
  if (variant === 'computational') {
    return (
      <div className="hero-abstract hero-abstract-learning" aria-label="Abstract Python and AI learning visual">
        <div className="hero-terminal-bar">
          <span>python_learning.py</span>
          <span className="hero-terminal-dot-row" aria-hidden="true">
            <span className="hero-terminal-dot" />
            <span className="hero-terminal-dot" />
            <span className="hero-terminal-dot hero-terminal-dot-active" />
          </span>
        </div>
        <div className="hero-terminal-code" aria-hidden="true">
          <span><i>def</i> keep_learning():</span>
          <span className="hero-code-indent"><i>return</i> curiosity + practice</span>
          <span className="hero-code-spacer" />
          <span><i>tools</i> = [<em>"numpy"</em>, <em>"pandas"</em>, <em>"ml"</em>]</span>
          <span className="hero-code-indent hero-code-muted"># one careful step at a time</span>
          <span className="hero-code-spacer" />
          <span className="hero-code-muted"><i>while</i> learning:</span>
          <span className="hero-code-indent hero-code-muted">practice.iterate()</span>
        </div>
        <div className="hero-learning-mark" aria-hidden="true">
          <span>PY</span>
        </div>
        <div className="hero-abstract-caption">Learning the language behind the next layer</div>
      </div>
    );
  }

  /* ─────────────────────────────────────────────────────────
     STATE 03 / "technical" — MERN → AI/ML progression
     Editorial typographic composition — text hierarchy only
  ───────────────────────────────────────────────────────── */
  if (variant === 'technical') {
    return (
      <div className="hero-abstract hero-abstract-progression" aria-label="Editorial progression from MERN to AI/ML">
        <div className="hero-abstract-kicker">A developing direction</div>
        <div className="hero-progression-list">
          {['React', 'Node', 'Python', 'AI'].map((label, index) => (
            <React.Fragment key={label}>
              <span className="hero-progression-word">{label}</span>
              {index < 3 && <span className="hero-progression-line" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </div>
        <div className="hero-abstract-caption">From interface to intelligence</div>
      </div>
    );
  }

  /* ─────────────────────────────────────────────────────────
     STATE 04 / "direction" — Abstract orbital editorial
     Rotating concentric forms + typographic label
  ───────────────────────────────────────────────────────── */
  if (variant === 'direction') {
    return (
      <div className="hero-abstract hero-abstract-direction" aria-label="Abstract form representing a direction toward intelligent applications">
        <div className="hero-direction-orbit hero-direction-orbit-one" />
        <div className="hero-direction-orbit hero-direction-orbit-two" />
        <div className="hero-direction-core" />
        <span className="hero-direction-label hero-direction-label-top">curiosity</span>
        <span className="hero-direction-label hero-direction-label-bottom">practice / patience / purpose</span>
        <div className="hero-abstract-caption">Building toward intelligent applications</div>
      </div>
    );
  }

  /* Fallback — same as learning */
  return (
    <div className="hero-abstract hero-abstract-learning" aria-label="Abstract learning visual">
      <div className="hero-terminal-bar">
        <span>python_learning.py</span>
        <span>01</span>
        <span>exploring.py</span>
        <span>—</span>
      </div>
      <div className="hero-terminal-code" aria-hidden="true">
        <span><i>def</i> keep_learning():</span>
        <span className="hero-code-indent"><i>return</i> curiosity + practice</span>
        <span><i>import</i> curiosity</span>
        <span><i>import</i> persistence</span>
        <span className="hero-code-spacer" />
        <span><i>tools</i> = ["numpy", "pandas", "ml"]</span>
        <span className="hero-code-indent hero-code-muted"># one careful step at a time</span>
        <span className="hero-code-muted"># keep going</span>
      </div>
      <div className="hero-learning-mark" aria-hidden="true">
        <span>PY</span>
      </div>
      <div className="hero-abstract-caption">Learning the language behind the next layer</div>
      <div className="hero-abstract-caption">One layer at a time</div>
    </div>
  );
}