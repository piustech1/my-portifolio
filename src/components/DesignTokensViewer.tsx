import React, { useState } from 'react';
import { DESIGN_TOKENS_DATA } from '../data/portfolioData';
import { Sparkles, Copy, Check, Download, Palette } from 'lucide-react';

export const DesignTokensViewer: React.FC = () => {
  const [copiedVar, setCopiedVar] = useState<string | null>(null);

  const copyToken = (cssVar: string) => {
    navigator.clipboard.writeText(`var(${cssVar})`);
    setCopiedVar(cssVar);
    setTimeout(() => setCopiedVar(null), 1800);
  };

  const exportCssTokens = () => {
    const cssText = `:root {\n` + DESIGN_TOKENS_DATA.map(t => `  ${t.cssVar}: ${t.value};`).join('\n') + `\n}`;
    const blob = new Blob([cssText], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'design-tokens.css';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="tokens" className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-l-2 border-purple-400 pl-4">
        <div>
          <span className="font-mono text-xs text-purple-400 tracking-widest uppercase">// 04. DESIGN SYSTEM TOKENS</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Theme Design Tokens Palette</h2>
        </div>
        <button
          onClick={exportCssTokens}
          className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-slate-950 font-mono text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.2)]"
        >
          <Download className="w-4 h-4" />
          <span>EXPORT TOKENS.CSS</span>
        </button>
      </div>

      <div className="rounded-xl bg-[#0b101d]/90 border border-purple-500/30 p-6 sm:p-8 space-y-6 backdrop-blur-md">
        <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
          Standardized CSS custom properties powering the dark futuristic developer theme. Click any token card to copy its variable declaration.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DESIGN_TOKENS_DATA.map((token) => (
            <div
              key={token.cssVar}
              onClick={() => copyToken(token.cssVar)}
              className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-purple-400/60 transition-all cursor-pointer group space-y-3 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {token.type === 'color' && (
                    <div
                      className="w-6 h-6 rounded-md border border-slate-700 shadow-md"
                      style={{ backgroundColor: token.value }}
                    />
                  )}
                  <div>
                    <h4 className="font-mono text-xs font-bold text-slate-100 group-hover:text-purple-300 transition-colors">
                      {token.name}
                    </h4>
                    <span className="font-mono text-[10px] text-purple-400 font-bold">{token.cssVar}</span>
                  </div>
                </div>
                <button className="text-slate-500 group-hover:text-purple-300 transition-colors">
                  {copiedVar === token.cssVar ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="font-mono text-xs text-slate-400 bg-slate-900/90 p-2 rounded border border-slate-800/80 flex justify-between">
                <span>Value:</span>
                <span className="text-slate-200 font-bold">{token.value}</span>
              </div>

              <p className="text-[11px] text-slate-500 line-clamp-2">
                {token.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
