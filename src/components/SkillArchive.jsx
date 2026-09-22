import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';

export default function SkillArchive() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="space-y-6">
      {/* Editorial Index Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((group) => {
          const isAI = group.category.includes('AI');
          const isHovered = hoveredCategory === group.index;

          return (
            <div
              key={group.index}
              onMouseEnter={() => setHoveredCategory(group.index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`skill-archive-entry p-6 md:p-8 border transition-all duration-300 flex flex-col justify-between ${
                isAI
                  ? 'bg-[#EDE9DE] border-[#8C5338]/40 shadow-sm'
                  : 'bg-white/40 border-[#DDD8CB] hover:border-[#141413]'
              } ${isHovered ? 'skill-archive-entry-active' : ''}`}
            >
              <div>
                {/* Index Header */}
                <div className="flex items-center justify-between border-b border-[#DDD8CB] pb-3 mb-6">
                  <span className="font-mono text-xs font-semibold tracking-widest text-[#8C5338]">
                    {group.index}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#141413] font-medium">
                    {group.category}
                  </span>
                </div>
                <div className="skill-archive-rule" aria-hidden="true" />

                {/* Skills List */}
                <ul className="space-y-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <li
                      key={skill}
                      className="flex items-center justify-between text-xs sm:text-sm font-sans text-[#141413] hover:translate-x-1 transition-transform"
                    >
                      <span className="font-medium text-[#141413]">{skill}</span>
                      <span className="text-[10px] font-mono text-[#8C8980]">
                        .{String(sIdx + 1).padStart(2, '0')}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Group Footer Tag */}
              <div className="mt-8 pt-3 border-t border-[#DDD8CB] flex items-center justify-between text-[10px] font-mono text-[#5C5A53]">
                <span>{group.skills.length} Competencies</span>
                <span className={isAI ? 'text-[#8C5338] font-semibold' : 'text-[#8C8980]'}>
                  {isAI ? 'EXPANDING FOCUS' : 'FOUNDATIONAL'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

