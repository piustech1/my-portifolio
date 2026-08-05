import React, { useState, useEffect } from 'react';
import { Search, Command, X, Terminal, Code2, Sparkles, FolderTree, Cpu, Layers } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenTerminal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
  onOpenTerminal
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or custom state
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const commands = [
    { id: 'hero', label: 'Jump to Hero Overview', icon: Cpu, section: 'hero' },
    { id: 'projects', label: 'Explore Engineering Projects Matrix', icon: Layers, section: 'projects' },
    { id: 'skills', label: 'Inspect System Capabilities & Skills', icon: Sparkles, section: 'skills' },
    { id: 'tokens', label: 'View Design System Tokens Palette', icon: Sparkles, section: 'tokens' },
    { id: 'playground', label: 'Open Live Code Sandbox Runner', icon: Code2, section: 'playground' },
    { id: 'terminal', label: 'Launch Interactive Cyber Terminal', icon: Terminal, section: 'terminal' },
    { id: 'filetree', label: 'Inspect Portfolio Static Files Directory', icon: FolderTree, section: 'filetree' }
  ];

  const filteredCommands = query
    ? commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()))
    : commands;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#0b101d] border border-cyan-500/40 p-4 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4">
        <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800">
          <Search className="w-4 h-4 text-cyan-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type command or section name..."
            className="w-full bg-transparent border-none outline-none text-slate-100 font-mono text-xs sm:text-sm"
          />
          <button onClick={onClose} className="p-1 text-slate-500 hover:text-slate-300">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-72 overflow-y-auto space-y-1 font-mono text-xs">
          {filteredCommands.length === 0 ? (
            <div className="p-4 text-center text-slate-500">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd) => {
              const Icon = cmd.icon;
              return (
                <button
                  key={cmd.id}
                  onClick={() => {
                    if (cmd.section) {
                      onNavigateSection(cmd.section);
                    }
                    onClose();
                  }}
                  className="w-full p-3 rounded-lg flex items-center justify-between hover:bg-cyan-500/10 hover:text-cyan-300 text-slate-300 transition-colors cursor-pointer group text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <span>{cmd.label}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-bold group-hover:text-cyan-400">JUMP →</span>
                </button>
              );
            })
          )}
        </div>

        <div className="px-3 py-2 border-t border-slate-800 text-[10px] font-mono text-slate-500 flex justify-between">
          <span>Use <kbd className="px-1 rounded bg-slate-800 text-slate-300">↑↓</kbd> to navigate</span>
          <span>Press <kbd className="px-1 rounded bg-slate-800 text-slate-300">ESC</kbd> to exit</span>
        </div>
      </div>
    </div>
  );
};
