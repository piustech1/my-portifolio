import React from 'react';
import { Terminal as TerminalIcon, Sparkles, Command, Volume2, VolumeX, Shield, Code2, Layers, Cpu, FolderTree } from 'lucide-react';
import { AccentTheme } from '../types';

interface HeaderProps {
  accentTheme: AccentTheme;
  setAccentTheme: (theme: AccentTheme) => void;
  audioEnabled: boolean;
  setAudioEnabled: (enabled: boolean) => void;
  onOpenCommandPalette: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  accentTheme,
  setAccentTheme,
  audioEnabled,
  setAudioEnabled,
  onOpenCommandPalette,
  activeSection,
  setActiveSection
}) => {
  const themes: { id: AccentTheme; name: string; bg: string; border: string }[] = [
    { id: 'cyan', name: 'Cyber Cyan', bg: 'bg-cyan-400', border: 'border-cyan-400' },
    { id: 'emerald', name: 'Matrix Emerald', bg: 'bg-emerald-400', border: 'border-emerald-400' },
    { id: 'violet', name: 'Synth Violet', bg: 'bg-purple-400', border: 'border-purple-400' },
    { id: 'amber', name: 'Solar Amber', bg: 'bg-amber-400', border: 'border-amber-400' },
    { id: 'pink', name: 'Neon Pink', bg: 'bg-pink-400', border: 'border-pink-400' }
  ];

  const navItems = [
    { id: 'hero', label: '01. HERO', icon: Cpu },
    { id: 'projects', label: '02. PROJECTS', icon: Layers },
    { id: 'skills', label: '03. SKILLS', icon: Shield },
    { id: 'tokens', label: '04. TOKENS', icon: Sparkles },
    { id: 'playground', label: '05. SANDBOX', icon: Code2 },
    { id: 'terminal', label: '06. TERMINAL', icon: TerminalIcon },
    { id: 'filetree', label: '07. FILES', icon: FolderTree }
  ];

  const playClickSound = () => {
    if (!audioEnabled) return;
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch {
      // ignore web audio restrictions
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#06080e]/90 backdrop-blur-xl border-b border-cyan-500/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* System Identifier */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#00ff88] animate-pulse"></span>
            <span className="absolute w-4 h-4 rounded-full border border-emerald-400/40 animate-ping"></span>
          </div>
          <div className="font-mono text-xs sm:text-sm font-bold tracking-wider text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">DEVX_SYSTEM</span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/80 text-[10px] text-cyan-300">
              v3.0.42
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  playClickSound();
                  setActiveSection(item.id);
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`flex items-center gap-1.5 transition-all cursor-pointer py-1 border-b-2 ${
                  isActive
                    ? 'border-cyan-400 text-cyan-400 font-bold text-glow-cyan'
                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              playClickSound();
              onOpenCommandPalette();
            }}
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-cyan-500/40 text-xs font-mono transition-all cursor-pointer hover:shadow-[0_0_12px_rgba(0,240,255,0.15)]"
            title="Open Command Palette (Cmd+K)"
          >
            <Command className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">CMD+K</span>
          </button>

          {/* Audio Synthesizer Toggle */}
          <button
            onClick={() => {
              setAudioEnabled(!audioEnabled);
              if (!audioEnabled) playClickSound();
            }}
            className={`p-2 rounded-lg border transition-all cursor-pointer ${
              audioEnabled
                ? 'bg-cyan-950/50 border-cyan-500/50 text-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'
            }`}
            title={audioEnabled ? 'Mute Cyber Audio' : 'Enable Cyber Audio SFX'}
          >
            {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Theme Selector Dropdown / Dots */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-900/90 border border-slate-800">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  playClickSound();
                  setAccentTheme(t.id);
                }}
                className={`w-3.5 h-3.5 rounded-full ${t.bg} transition-all cursor-pointer ${
                  accentTheme === t.id
                    ? 'scale-125 ring-2 ring-slate-100 shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                    : 'opacity-50 hover:opacity-100'
                }`}
                title={t.name}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
