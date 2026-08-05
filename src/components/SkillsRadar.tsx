import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Shield, Cpu, Code, CheckCircle2 } from 'lucide-react';

export const SkillsRadar: React.FC = () => {
  return (
    <section id="skills" className="space-y-8">
      <div className="border-l-2 border-emerald-400 pl-4">
        <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase">// 03. CAPABILITIES MATRIX</span>
        <h2 className="text-2xl sm:text-3xl font-bold">Tech Stack & Architecture</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat, catIdx) => (
          <div
            key={catIdx}
            className="rounded-xl bg-[#0b101d]/90 border border-slate-800 p-6 space-y-6 hover:border-emerald-500/40 transition-all shadow-lg"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="font-mono text-xs font-bold text-emerald-400 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                // {cat.title}
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                ACTIVE
              </span>
            </div>

            <div className="space-y-4">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5 font-mono">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-200 font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {skill.name}
                    </span>
                    <span className="text-emerald-400 font-bold">{skill.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full shadow-[0_0_8px_#00ff88]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>{skill.experienceYears} YRS EXP</span>
                    <span className="text-cyan-400/80">{skill.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
