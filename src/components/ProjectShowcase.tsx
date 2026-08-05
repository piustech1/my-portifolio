import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, AccentTheme } from '../types';
import { Star, GitFork, ExternalLink, Github, Sparkles, Filter, X } from 'lucide-react';

interface ProjectShowcaseProps {
  accentTheme: AccentTheme;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ accentTheme }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['ALL', 'AI & ML', 'Web3 & Security', 'Dashboards & UI', 'Cloud & Systems'];

  const filteredProjects = selectedCategory === 'ALL'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="space-y-8">
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-l-2 border-cyan-400 pl-4">
        <div>
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">// 02. SYSTEM MATRIX</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Featured Engineering Works</h2>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.2)] font-bold'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-xl bg-[#0b101d]/90 border border-slate-800/80 p-6 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] transition-all duration-300"
          >
            <div className="space-y-4">
              {/* Category & Stats */}
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-[10px]">
                  // {project.category}
                </span>
                <div className="flex items-center gap-3 text-slate-400">
                  <span className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400/20" /> {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" /> {project.forks}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mt-2 line-clamp-3 leading-relaxed">
                  {project.shortDesc}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-2 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-center font-mono">
                {project.metrics.map((m, idx) => (
                  <div key={idx}>
                    <div className="text-[10px] text-slate-500">{m.label}</div>
                    <div className="text-xs font-bold text-emerald-400">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tech Tags & Modal Trigger */}
            <div className="pt-6 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="px-1.5 py-0.5 rounded bg-slate-900 text-slate-500 font-mono text-[10px]">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 font-mono text-xs">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 cursor-pointer"
                >
                  [ VIEW SPECIFICATIONS ]
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-slate-200 flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" /> CODE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#0b101d] border border-cyan-500/40 p-6 sm:p-8 space-y-6 shadow-2xl animate-in fade-in zoom-in-95">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-slate-100 hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="font-mono text-xs text-cyan-400">// {activeModalProject.category}</span>
              <h3 className="text-2xl font-bold text-slate-100">{activeModalProject.title}</h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {activeModalProject.fullDesc}
            </p>

            {/* Performance Metrics */}
            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
              {activeModalProject.metrics.map((m, idx) => (
                <div key={idx} className="text-center font-mono space-y-1">
                  <div className="text-xs text-slate-400">{m.label}</div>
                  <div className="text-lg font-bold text-cyan-400">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Tech Stack List */}
            <div className="space-y-2 font-mono text-xs">
              <span className="text-slate-400">// INTEGRATED TECHNOLOGIES:</span>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded bg-slate-900 border border-slate-700 text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800 font-mono text-xs">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 font-bold flex items-center gap-2 transition-all"
              >
                <Github className="w-4 h-4" /> REPOSITORY
              </a>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:bg-slate-800"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
