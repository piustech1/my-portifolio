import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="space-y-8">
      <div className="border-l-2 border-cyan-400 pl-4">
        <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">// CAREER MILESTONES</span>
        <h2 className="text-2xl sm:text-3xl font-bold">Engineering Experience Timeline</h2>
      </div>

      <div className="relative border-l border-slate-800 ml-4 space-y-8 pl-6 sm:pl-8">
        {EXPERIENCE_DATA.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Node Pulsing Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_12px_#00f0ff] transition-all" />

            <div className="rounded-xl bg-[#0b101d]/90 border border-slate-800 p-6 space-y-4 hover:border-cyan-500/40 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    {exp.role}
                  </h3>
                  <div className="text-sm font-mono text-cyan-400 font-bold">{exp.company}</div>
                </div>
                <div className="font-mono text-xs text-slate-400 space-y-0.5 sm:text-right">
                  <div className="flex items-center gap-1 sm:justify-end text-emerald-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:justify-end text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2">
                <span className="font-mono text-xs text-slate-400">// KEY ACCOMPLISHMENTS:</span>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.skills.map((skill) => (
                  <span key={skill} className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
