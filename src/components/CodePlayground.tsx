import React, { useState } from 'react';
import { CODE_SNIPPETS_DATA } from '../data/portfolioData';
import { Code2, Play, Terminal as TerminalIcon, RotateCcw, Copy, Check } from 'lucide-react';

export const CodePlayground: React.FC = () => {
  const [activeSnippet, setActiveSnippet] = useState(CODE_SNIPPETS_DATA[0]);
  const [code, setCode] = useState(CODE_SNIPPETS_DATA[0].code);
  const [outputLogs, setOutputLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSelectSnippet = (snip: typeof CODE_SNIPPETS_DATA[0]) => {
    setActiveSnippet(snip);
    setCode(snip.code);
    setOutputLogs([]);
  };

  const executeCode = () => {
    setIsRunning(true);
    const logs: string[] = [];

    // Safe console mock
    const customConsole = {
      log: (...args: unknown[]) => {
        logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' '));
      },
      error: (...args: unknown[]) => {
        logs.push(`[ERROR] ` + args.map(a => String(a)).join(' '));
      }
    };

    try {
      // Evaluate snippet safely in sandbox context
      const runFn = new Function('console', code);
      runFn(customConsole);
      if (logs.length === 0) {
        logs.push('[SYSTEM] Code executed successfully with zero output.');
      }
    } catch (err) {
      logs.push(`[RUNTIME EXCEPTION] ${(err as Error).message}`);
    }

    setTimeout(() => {
      setOutputLogs(logs);
      setIsRunning(false);
    }, 150);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="playground" className="space-y-8">
      <div className="border-l-2 border-amber-400 pl-4">
        <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">// 05. CODE SANDBOX</span>
        <h2 className="text-2xl sm:text-3xl font-bold">Interactive Code Runner</h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 rounded-xl bg-[#0b101d]/90 border border-amber-500/30 p-6 overflow-hidden">
        {/* Left Column: Selector & Editor */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-amber-400" />
              <span className="font-mono text-xs font-bold text-slate-200">SAMPLE SNIPPETS:</span>
            </div>
            <div className="flex gap-2">
              {CODE_SNIPPETS_DATA.map((snip) => (
                <button
                  key={snip.id}
                  onClick={() => handleSelectSnippet(snip)}
                  className={`px-3 py-1 rounded font-mono text-xs cursor-pointer transition-all ${
                    activeSnippet.id === snip.id
                      ? 'bg-amber-500/20 border border-amber-400 text-amber-300 font-bold'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {snip.title}
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs text-slate-400 font-mono">
            {activeSnippet.description}
          </p>

          <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
            <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between font-mono text-xs text-slate-400">
              <span>{activeSnippet.title}.ts</span>
              <button
                onClick={copyCode}
                className="hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 p-4 bg-slate-950 text-amber-300 font-mono text-xs sm:text-sm border-none outline-none resize-none leading-relaxed"
              spellCheck={false}
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={executeCode}
              disabled={isRunning}
              className="px-5 py-2.5 rounded-lg bg-amber-500/10 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-950 font-mono text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.2)] disabled:opacity-50"
            >
              <Play className="w-4 h-4 fill-amber-400" />
              <span>{isRunning ? 'EXECUTING...' : 'RUN CODE'}</span>
            </button>
            <button
              onClick={() => setCode(activeSnippet.code)}
              className="px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RESET</span>
            </button>
          </div>
        </div>

        {/* Right Column: Console Output */}
        <div className="lg:col-span-5 flex flex-col h-full space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-300 pb-3 border-b border-slate-800">
            <TerminalIcon className="w-4 h-4 text-emerald-400" />
            <span>CONSOLE EXECUTION OUTPUT</span>
          </div>

          <div className="flex-1 rounded-lg bg-slate-950 p-4 border border-slate-800 font-mono text-xs space-y-2 overflow-y-auto h-72 lg:h-auto">
            {outputLogs.length === 0 ? (
              <div className="text-slate-600 italic">
                Click "RUN CODE" to execute the snippet and inspect outputs...
              </div>
            ) : (
              outputLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded border font-mono whitespace-pre-wrap ${
                    log.startsWith('[ERROR]')
                      ? 'bg-red-950/40 border-red-500/30 text-red-300'
                      : log.startsWith('[SYSTEM]')
                      ? 'bg-cyan-950/40 border-cyan-500/30 text-cyan-300'
                      : 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300'
                  }`}
                >
                  {log}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
