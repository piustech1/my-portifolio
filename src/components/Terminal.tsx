import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Play, RefreshCw, Copy, Check, Minimize2, Maximize2 } from 'lucide-react';
import { AccentTheme } from '../types';

interface TerminalProps {
  accentTheme: AccentTheme;
  setAccentTheme: (theme: AccentTheme) => void;
  onOpenContact: () => void;
}

interface TerminalLog {
  id: string;
  type: 'input' | 'output' | 'error' | 'success' | 'matrix';
  text: string;
}

export const Terminal: React.FC<TerminalProps> = ({
  accentTheme,
  setAccentTheme,
  onOpenContact
}) => {
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [logs, setLogs] = useState<TerminalLog[]>([
    { id: '1', type: 'output', text: 'DEVX CYBER SHELL v3.0 [Initialized]' },
    { id: '2', type: 'output', text: 'Type "help" to list available system commands or "skills" for stack matrix.' }
  ]);

  const outputEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    const newLogs: TerminalLog[] = [
      ...logs,
      { id: Date.now().toString(), type: 'input', text: cmd }
    ];

    const lower = cmd.toLowerCase();

    if (lower === 'help') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `AVAILABLE SYSTEM COMMANDS:
  • help           - Show command manual
  • skills         - Print full tech stack matrix
  • projects       - List featured engineering builds
  • theme <name>   - Change accent theme (cyan, emerald, violet, amber, pink)
  • tokens         - Inspect design system tokens
  • whoami         - System architect profile
  • contact        - Launch cyber transmission modal
  • matrix         - Trigger digital rain stream
  • cat README.md  - View portfolio markdown documentation
  • clear          - Clear terminal logs`
      });
    } else if (lower === 'skills') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `CORE CAPABILITIES:
[TS/JS]       [98%]  Senior Architecture
[React/Next]  [96%]  Design Tokens & Component Libraries
[Node/Go]     [92%]  Microservices & gRPC Pipelines
[Docker/K8s]  [88%]  Containerization & CI/CD
[Rust/WASM]   [82%]  High-Performance IPC Engine`
      });
    } else if (lower === 'projects') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `FEATURED BUILDS:
1. NEURAL CLUSTER AI (PyTorch, FastAPI, Docker) -> 1.4k Stars
2. CYBER VAULT DEFI (Rust, Solidity, ZK) -> 890 Stars
3. QUANTUM MONITOR HUD (React 19, Three.js, WebGL) -> 2.1k Stars
4. HYPER-EDGE PROXY (Go, eBPF, gRPC) -> 1.7k Stars`
      });
    } else if (lower.startsWith('theme')) {
      const parts = lower.split(' ');
      if (parts[1] && ['cyan', 'emerald', 'violet', 'amber', 'pink'].includes(parts[1])) {
        const selected = parts[1] as AccentTheme;
        setAccentTheme(selected);
        newLogs.push({
          id: (Date.now() + 1).toString(),
          type: 'success',
          text: `[SYSTEM] Theme accent updated to preset: ${selected.toUpperCase()}`
        });
      } else {
        newLogs.push({
          id: (Date.now() + 1).toString(),
          type: 'error',
          text: `Usage: theme <cyan|emerald|violet|amber|pink>`
        });
      }
    } else if (lower === 'tokens') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `DESIGN SYSTEM TOKENS:
--color-bg-primary: #06080e (Canvas)
--color-bg-secondary: #0b101d (Subtle Panel)
--color-panel-glass: rgba(14, 22, 38, 0.75) (Glass surface)
--color-neon-cyan: #00f0ff (Cyber Glow)
--color-neon-emerald: #00ff88 (Matrix Green)`
      });
    } else if (lower === 'whoami') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `DEVX SYSTEM ARCHITECT:
Name: Senior Developer & Systems Architect
Focus: Scalable Web Apps, AI Agent Pipelines, Dark Futuristic Design Systems
Location: Global / Remote`
      });
    } else if (lower === 'contact') {
      onOpenContact();
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'success',
        text: `[SYSTEM] Launched Cyber Transmission Contact Drawer.`
      });
    } else if (lower === 'cat readme.md') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        text: `# DevX Cyber Developer Portfolio
Clean HTML/CSS/JS project structure with dark futuristic developer design tokens.
Folder: /portfolio (index.html, css/style.css, js/script.js, README.md)`
      });
    } else if (lower === 'matrix') {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'matrix',
        text: `01000100 01000101 01010110 01011000 00100000 01010011 01011001 01010011
01101001 01101110 01101001 01110100 01101001 01100001 01101100 01101001 01111010 01100101 01100100
>>>> MATRIX DATA STREAM CONNECTED :: 100% DISRUPTIVE ACCELERATION <<<<`
      });
    } else if (lower === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    } else {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        type: 'error',
        text: `Command not recognized: '${cmd}'. Type 'help' for command manual.`
      });
    }

    setLogs(newLogs);
    setInputVal('');
  };

  const copyTerminalHistory = () => {
    const fullText = logs.map(l => `${l.type === 'input' ? '$ ' : ''}${l.text}`).join('\n');
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-2 border-cyan-400 pl-4">
        <div>
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">// 06. INTERACTIVE SHELL</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Cyber Terminal Interface</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={copyTerminalHistory}
            className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
            <span>{copied ? 'COPIED' : 'COPY LOGS'}</span>
          </button>
          <button
            onClick={() => setLogs([])}
            className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
            <span>RESET</span>
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      <div className={`rounded-xl bg-[#090d16] border border-cyan-500/30 overflow-hidden font-mono text-xs sm:text-sm shadow-2xl transition-all ${isExpanded ? 'h-[500px]' : 'h-80'}`}>
        {/* Terminal Header */}
        <div className="bg-slate-950 px-4 py-3 border-b border-cyan-500/20 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="ml-2 font-bold text-slate-300 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              bash - devx@cyber-node:~
            </span>
          </div>
          <span className="text-[11px] text-cyan-400/70 hidden sm:inline">TYPE 'help' FOR MANUAL</span>
        </div>

        {/* Terminal Output */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-2.5 h-[calc(100%-80px)] bg-slate-950/95 scrollbar-thin">
          {logs.map((log) => {
            if (log.type === 'input') {
              return (
                <div key={log.id} className="flex items-start gap-2 text-cyan-300">
                  <span className="text-cyan-500 font-bold">$</span>
                  <span className="font-semibold">{log.text}</span>
                </div>
              );
            }
            if (log.type === 'error') {
              return (
                <div key={log.id} className="text-red-400 pl-4 border-l-2 border-red-500/50">
                  {log.text}
                </div>
              );
            }
            if (log.type === 'success') {
              return (
                <div key={log.id} className="text-emerald-400 pl-4 border-l-2 border-emerald-500/50">
                  {log.text}
                </div>
              );
            }
            if (log.type === 'matrix') {
              return (
                <div key={log.id} className="text-emerald-400 font-mono text-xs whitespace-pre-wrap animate-pulse">
                  {log.text}
                </div>
              );
            }
            return (
              <pre key={log.id} className="text-slate-300 font-mono whitespace-pre-wrap leading-relaxed text-xs">
                {log.text}
              </pre>
            );
          })}
          <div ref={outputEndRef} />
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCommandSubmit} className="px-4 py-3 bg-slate-950 border-t border-cyan-500/20 flex items-center gap-2">
          <span className="text-cyan-400 font-bold flex items-center gap-1">
            devx@cyber-node:~$
          </span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-slate-100 font-mono text-xs sm:text-sm placeholder:text-slate-600"
            placeholder="type command here... (try 'help' or 'skills')"
          />
          <button type="submit" className="text-slate-500 hover:text-cyan-400 transition-colors p-1 cursor-pointer">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};
