import React from 'react';

/**
 * Editorial Computational Visual
 * Combines high-contrast monochromatic abstract neural graphs,
 * mathematical curves, and matrix geometry inspired by editorial publications.
 * Includes clear placeholder structure for swapping in an actual photo if desired.
 */
export default function ComputationalVisual({ type = "hero", className = "" }) {
  if (["hero", "computational", "technical", "direction"].includes(type)) {
    return (
      <div className={`relative w-full aspect-[4/5] md:aspect-[3/4] bg-[#EDE9DE] overflow-hidden border border-[#DDD8CB] rounded-sm group ${className}`}>
        {/* Subtle grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `radial-gradient(#141413 0.75px, transparent 0.75px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Abstract Neural & Algorithmic SVG Composition */}
        <svg
          className="absolute inset-0 w-full h-full p-8 md:p-12 text-[#141413]"
          viewBox="0 0 500 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#141413" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#8C5338" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="curveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#141413" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#141413" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Mathematical activation curves (Sigmoid / Gaussian curves) */}
          <path
            d="M 50 480 C 150 480, 200 320, 250 250 C 300 180, 360 120, 450 120"
            stroke="#141413"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.4"
          />
          <path
            d="M 50 540 C 180 540, 220 380, 270 290 C 320 200, 380 150, 450 145"
            stroke="#141413"
            strokeWidth="1"
            opacity="0.25"
          />

          {/* Connected Topology Layers */}
          {/* Layer 1: Input / MERN nodes */}
          <circle cx="90" cy="180" r="4.5" fill="#141413" />
          <circle cx="90" cy="270" r="4.5" fill="#141413" />
          <circle cx="90" cy="360" r="4.5" fill="#141413" />
          <circle cx="90" cy="450" r="4.5" fill="#141413" />

          {/* Layer 2: Hidden / Python / Data Wrangling */}
          <circle cx="210" cy="140" r="5" fill="#141413" />
          <circle cx="210" cy="225" r="5" fill="#141413" />
          <circle cx="210" cy="315" r="5" fill="#141413" />
          <circle cx="210" cy="405" r="5" fill="#141413" />
          <circle cx="210" cy="495" r="5" fill="#141413" />

          {/* Layer 3: Feature Space / ML */}
          <circle cx="330" cy="190" r="6" fill="#8C5338" />
          <circle cx="330" cy="290" r="6" fill="#141413" />
          <circle cx="330" cy="390" r="6" fill="#141413" />
          <circle cx="330" cy="470" r="6" fill="#8C5338" />

          {/* Layer 4: Output / Intelligent Applications */}
          <circle cx="430" cy="260" r="8" stroke="#141413" strokeWidth="2" fill="#F6F4EE" />
          <circle cx="430" cy="380" r="8" stroke="#141413" strokeWidth="2" fill="#F6F4EE" />
          <circle cx="430" cy="260" r="3.5" fill="#8C5338" />
          <circle cx="430" cy="380" r="3.5" fill="#141413" />

          {/* Connecting Synaptic Lines */}
          <line x1="90" y1="180" x2="210" y2="140" stroke="#141413" strokeWidth="0.8" opacity="0.3" />
          <line x1="90" y1="180" x2="210" y2="225" stroke="#141413" strokeWidth="0.8" opacity="0.3" />
          <line x1="90" y1="270" x2="210" y2="225" stroke="#141413" strokeWidth="1.2" opacity="0.4" />
          <line x1="90" y1="270" x2="210" y2="315" stroke="#141413" strokeWidth="0.8" opacity="0.3" />
          <line x1="90" y1="360" x2="210" y2="315" stroke="#141413" strokeWidth="1.2" opacity="0.4" />
          <line x1="90" y1="360" x2="210" y2="405" stroke="#141413" strokeWidth="0.8" opacity="0.3" />
          <line x1="90" y1="450" x2="210" y2="405" stroke="#141413" strokeWidth="0.8" opacity="0.3" />
          <line x1="90" y1="450" x2="210" y2="495" stroke="#141413" strokeWidth="0.8" opacity="0.3" />

          <line x1="210" y1="140" x2="330" y2="190" stroke="#141413" strokeWidth="1" opacity="0.35" />
          <line x1="210" y1="225" x2="330" y2="190" stroke="#141413" strokeWidth="1.2" opacity="0.45" />
          <line x1="210" y1="225" x2="330" y2="290" stroke="#8C5338" strokeWidth="1.5" opacity="0.5" />
          <line x1="210" y1="315" x2="330" y2="290" stroke="#141413" strokeWidth="1.2" opacity="0.45" />
          <line x1="210" y1="315" x2="330" y2="390" stroke="#141413" strokeWidth="1" opacity="0.35" />
          <line x1="210" y1="405" x2="330" y2="390" stroke="#141413" strokeWidth="1.2" opacity="0.45" />
          <line x1="210" y1="495" x2="330" y2="470" stroke="#141413" strokeWidth="0.8" opacity="0.35" />

          <line x1="330" y1="190" x2="430" y2="260" stroke="#141413" strokeWidth="1.5" opacity="0.5" />
          <line x1="330" y1="290" x2="430" y2="260" stroke="#8C5338" strokeWidth="1.8" opacity="0.65" />
          <line x1="330" y1="290" x2="430" y2="380" stroke="#141413" strokeWidth="1.2" opacity="0.4" />
          <line x1="330" y1="390" x2="430" y2="380" stroke="#141413" strokeWidth="1.5" opacity="0.5" />
          <line x1="330" y1="470" x2="430" y2="380" stroke="#141413" strokeWidth="1" opacity="0.3" />

          {/* Geometric Accent Elements */}
          <rect x="70" y="80" width="360" height="490" stroke="#141413" strokeWidth="0.75" opacity="0.2" />
          <line x1="70" y1="105" x2="430" y2="105" stroke="#141413" strokeWidth="0.5" opacity="0.2" />
          <line x1="70" y1="545" x2="430" y2="545" stroke="#141413" strokeWidth="0.5" opacity="0.2" />

          {/* Editorial Technical Typography inside Visual */}
          <text x="85" y="98" fill="#141413" opacity="0.5" fontSize="9" fontFamily="sans-serif" letterSpacing="2">
            FIG 01.0 — NEURAL FLOW & MATRIX PIPELINE
          </text>
          <text x="85" y="562" fill="#141413" opacity="0.5" fontSize="8" fontFamily="sans-serif" letterSpacing="1.5">
            PRIYANSHI RANA • DEHRADUN, UT • 2024–2027
          </text>
          <text x="360" y="562" fill="#8C5338" opacity="0.7" fontSize="8" fontFamily="sans-serif" letterSpacing="1.5">
            AI/ML FOCUS
          </text>
        </svg>

        {/* Editorial Photo Placeholder Overlay Note */}
        <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 bg-[#F6F4EE]/90 backdrop-blur-sm border border-[#DDD8CB] text-[10px] uppercase tracking-widest text-[#5C5A53] flex items-center justify-between">
          <span>Abstract Computational Topology</span>
          <span className="text-[#8C5338]">Configurable Visual</span>
        </div>
      </div>
    );
  }

  // Project visual variants
  if (type === "eventify") {
    return (
      <div className="w-full h-full bg-[#EAE6DF] relative overflow-hidden flex flex-col justify-between p-6">
        <div className="flex justify-between items-start border-b border-[#141413]/10 pb-4">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-mono text-[#5C5A53]">Full-Stack System</span>
            <h4 className="font-serif text-2xl text-[#141413] mt-0.5">Event Management Architecture</h4>
          </div>
          <span className="font-serif italic text-lg text-[#141413]/40">MERN</span>
        </div>

        {/* Visual Diagram Representation */}
        <div className="grid grid-cols-3 gap-3 my-auto py-4">
          <div className="border border-[#141413]/15 p-3 bg-white/40">
            <div className="text-[9px] uppercase tracking-wider text-[#5C5A53]">Client (React)</div>
            <div className="text-xs font-serif mt-1 font-semibold">User Authentication</div>
            <div className="text-[10px] text-[#5C5A53] mt-1">State & Routing</div>
          </div>
          <div className="border border-[#141413]/25 p-3 bg-white/70 shadow-sm relative">
            <div className="text-[9px] uppercase tracking-wider text-[#8C5338]">Express & Node</div>
            <div className="text-xs font-serif mt-1 font-semibold">REST API Engine</div>
            <div className="text-[10px] text-[#5C5A53] mt-1">CRUD Endpoints</div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-xs text-[#141413]/40">→</div>
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 text-xs text-[#141413]/40">←</div>
          </div>
          <div className="border border-[#141413]/15 p-3 bg-white/40">
            <div className="text-[9px] uppercase tracking-wider text-[#5C5A53]">Database</div>
            <div className="text-xs font-serif mt-1 font-semibold">MongoDB Atlas</div>
            <div className="text-[10px] text-[#5C5A53] mt-1">Event Documents</div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-[#5C5A53] border-t border-[#141413]/10 pt-3">
          <span>EVENTIFY / CORE ARCHITECTURE</span>
          <span>EST. 2024</span>
        </div>
      </div>
    );
  }

  if (type === "chatbot") {
    return (
      <div className="w-full h-full bg-[#E6E3DB] relative overflow-hidden flex flex-col justify-between p-6">
        <div className="flex justify-between items-start border-b border-[#141413]/10 pb-4">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-mono text-[#8C5338]">AI Pipeline</span>
            <h4 className="font-serif text-2xl text-[#141413] mt-0.5">Real-Time Intelligence</h4>
          </div>
          <span className="font-serif italic text-lg text-[#141413]/40">FastAPI</span>
        </div>

        {/* Conversational Stream Representation */}
        <div className="space-y-2.5 my-auto py-3">
          <div className="max-w-[78%] bg-[#141413]/5 border border-[#141413]/10 p-2.5 text-xs rounded-sm">
            <div className="text-[8px] uppercase tracking-widest text-[#5C5A53] mb-1">User Query</div>
            <span className="font-serif italic text-[#141413]">"How can we integrate machine learning models into React?"</span>
          </div>
          <div className="max-w-[85%] ml-auto bg-[#141413] text-[#F6F4EE] p-2.5 text-xs rounded-sm shadow-sm">
            <div className="text-[8px] uppercase tracking-widest text-[#8C5338] mb-1">AI Assistant Response</div>
            <span className="font-sans text-[11px] leading-relaxed">
              Expose inference via Python / FastAPI endpoints, stream tokens back to client-side hooks, and render reactive UI state.
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-[#5C5A53] border-t border-[#141413]/10 pt-3">
          <span>STREAMING TOKEN PIPELINE</span>
          <span>LATENCY &lt; 200MS</span>
        </div>
      </div>
    );
  }

  // Frontend Components / MISO-Creations
  return (
    <div className="w-full h-full bg-[#ECE8E0] relative overflow-hidden flex flex-col justify-between p-6">
      <div className="flex justify-between items-start border-b border-[#141413]/10 pb-4">
        <div>
          <span className="text-[10px] uppercase tracking-widest font-mono text-[#5C5A53]">UI Systems</span>
          <h4 className="font-serif text-2xl text-[#141413] mt-0.5">Component Engineering</h4>
        </div>
        <span className="font-serif italic text-lg text-[#141413]/40">MISO</span>
      </div>

      <div className="grid grid-cols-2 gap-3 my-auto py-2">
        <div className="border border-[#141413]/15 p-3 bg-white/50 space-y-2">
          <div className="h-1.5 w-12 bg-[#8C5338]" />
          <div className="h-2 w-full bg-[#141413]/20" />
          <div className="h-2 w-3/4 bg-[#141413]/10" />
          <div className="text-[9px] uppercase tracking-wider text-[#5C5A53] pt-2">Reusable UI Primitives</div>
        </div>
        <div className="border border-[#141413]/15 p-3 bg-white/50 space-y-2">
          <div className="flex gap-1.5">
            <div className="h-2 w-4 bg-[#141413]/30" />
            <div className="h-2 w-8 bg-[#141413]/15" />
          </div>
          <div className="h-2 w-full bg-[#141413]/20" />
          <div className="h-2 w-1/2 bg-[#141413]/10" />
          <div className="text-[9px] uppercase tracking-wider text-[#5C5A53] pt-2">Cross-Browser Resiliency</div>
        </div>
      </div>

      <div className="flex justify-between items-center text-[10px] font-mono text-[#5C5A53] border-t border-[#141413]/10 pt-3">
        <span>MISO-CREATIONS INTERNSHIP</span>
        <span>PRODUCTION DEPLOYED</span>
      </div>
    </div>
  );
}

