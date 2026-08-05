import React from 'react';
import { Terminal, ArrowUpRight, Github, Twitter, Linkedin, ShieldCheck, Cpu, Code, Activity, Sparkles } from 'lucide-react';
import { AccentTheme } from '../types';

interface HeroProps {
  accentTheme: AccentTheme;
  onOpenTerminal: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  accentTheme,
  onOpenTerminal,
  onOpenContact
}) => {
  const accentClasses = {
    cyan: 'from-cyan-400 via-emerald-400 to-violet-500 text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    emerald: 'from-emerald-400 via-teal-400 to-cyan-500 text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
    violet: 'from-purple-400 via-pink-400 to-violet-500 text-purple-400 border-purple-500/30 bg-purple-500/10',
    amber: 'from-amber-400 via-orange-400 to-amber-500 text-amber-400 border-amber-500/30 bg-amber-500/10',
    pink: 'from-pink-400 via-rose-400 to-purple-500 text-pink-400 border-pink-500/30 bg-pink-500/10'
  };

  const primaryBtnStyle = {
    cyan: 'bg-cyan-500/10 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(0,240,255,0.6)]',
    emerald: 'bg-emerald-500/10 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(0,255,136,0.6)]',
    violet: 'bg-purple-500/10 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]',
    amber: 'bg-amber-500/10 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(245,158,11,0.6)]',
    pink: 'bg-pink-500/10 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(255,0,127,0.6)]'
  };

  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center py-12 lg:py-20">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="grid lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column: Bio & Call to Action */}
        <div className="lg:col-span-7 space-y-8">
          {/* Status Badge */}
          <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-mono tracking-wide ${accentClasses[accentTheme]}`}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>SYSTEM STATUS: AVAILABLE FOR LEAD ROLES & CONTRACTS</span>
          </div>

          {/* Glitch Display Title */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
              ARCHITECTING <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${accentClasses[accentTheme]}`}>
                DARK FUTURISTIC
              </span> <br />
              SYSTEMS & APPS
            </h1>
            <p className="font-mono text-cyan-400/80 text-sm sm:text-base">
              // Senior Full Stack Engineer • AI Pipelines • WebGL • Cloud Infra
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Engineering high-throughput web applications, tokenized dark developer themes, distributed micro-frontends, and real-time neural AI processing pipelines.
          </p>

          {/* Stats Matrix */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            <div className="space-y-1">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-slate-100">7+ YRS</div>
              <div className="text-xs font-mono text-slate-400">ENGINEERING</div>
            </div>
            <div className="space-y-1 border-x border-slate-800/80 px-4">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-cyan-400">42+</div>
              <div className="text-xs font-mono text-slate-400">SYSTEMS BUILT</div>
            </div>
            <div className="space-y-1 pl-2">
              <div className="font-mono text-2xl sm:text-3xl font-bold text-emerald-400">99.99%</div>
              <div className="text-xs font-mono text-slate-400">UPTIME RECORD</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-sm">
            <button
              onClick={onOpenTerminal}
              className={`px-6 py-3 rounded-lg border font-bold transition-all cursor-pointer flex items-center gap-2 ${primaryBtnStyle[accentTheme]}`}
            >
              <Terminal className="w-4 h-4" />
              <span>[ OPEN TERMINAL ]</span>
            </button>
            <button
              onClick={onOpenContact}
              className="px-6 py-3 rounded-lg bg-slate-900/80 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-slate-100 transition-all cursor-pointer flex items-center gap-2 hover:shadow-lg"
            >
              <span>[ TRANSMIT MESSAGE ]</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-2 font-mono text-xs text-slate-400">
            <span className="text-slate-600">// CONNECT:</span>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
              <Github className="w-4 h-4" /> GITHUB
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
              <Twitter className="w-4 h-4" /> TWITTER
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-4 h-4" /> LINKEDIN
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Profile Card / HUD */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-sm">
            {/* Animated Cyber Glow Ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-40 group-hover:opacity-75 blur-lg transition duration-500"></div>

            <div className="relative rounded-2xl bg-[#0b101d] p-6 border border-cyan-500/30 space-y-5 shadow-2xl backdrop-blur-xl">
              {/* Header Info */}
              <div className="flex items-center justify-between font-mono text-xs text-cyan-400 pb-3 border-b border-slate-800">
                <span className="flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  VERIFIED DEVPASS
                </span>
                <span>ID: #99042-X</span>
              </div>

              {/* Avatar Container */}
              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-square group/img">
                <img
                  src="/src/assets/images/cyber_avatar_1785962304735.jpg"
                  alt="Cyber Developer Avatar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b101d] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end font-mono text-xs">
                  <div>
                    <div className="text-slate-100 font-bold">DEVX MATRIX</div>
                    <div className="text-cyan-400 text-[11px]">FULL STACK ARCHITECT</div>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold">
                    ONLINE
                  </div>
                </div>
              </div>

              {/* Micro Specs */}
              <div className="space-y-2 font-mono text-xs text-slate-300">
                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-1"><Cpu className="w-3.5 h-3.5 text-cyan-400" /> STACK:</span>
                  <span className="text-slate-100 font-bold">REACT / TS / GO / RUST</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-1"><Code className="w-3.5 h-3.5 text-emerald-400" /> THEME:</span>
                  <span className="text-emerald-400 font-bold">DARK FUTURISTIC</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 flex items-center gap-1"><Activity className="w-3.5 h-3.5 text-purple-400" /> LATENCY:</span>
                  <span className="text-purple-400 font-bold">12ms (EDGE)</span>
                </div>
              </div>

              {/* Quick Prompt */}
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200">Cmd+K</kbd> to execute commands</span>
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
