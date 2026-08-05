import React, { useState } from 'react';
import { Send, Key, Check, X, Shield, Lock, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'success'>('idle');
  const [copiedKey, setCopiedKey] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setStatus('transmitting');
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  const copyPgpKey = () => {
    navigator.clipboard.writeText('-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: DevX Cyber 3.0\nmQENBF7x818BCADG2x938...\n-----END PGP PUBLIC KEY BLOCK-----');
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#0b101d] border border-cyan-500/40 p-6 sm:p-8 space-y-6 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-slate-100 hover:bg-slate-800 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>ENCRYPTED TRANSMISSION PROTOCOL</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-100">Send Direct Cyber Transmission</h3>
        </div>

        {status === 'success' ? (
          <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/50 space-y-4 text-center font-mono">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto text-xl">
              ✓
            </div>
            <h4 className="text-lg font-bold text-emerald-300">TRANSMISSION CONFIRMED</h4>
            <p className="text-xs text-slate-300">
              Your message has been encrypted and dispatched to DEVX ARCHITECTURE NODE. Response expected within 12 hours.
            </p>
            <button
              onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', message: '' }); onClose(); }}
              className="px-6 py-2 rounded-lg bg-emerald-400 text-slate-950 font-bold text-xs cursor-pointer hover:bg-emerald-300"
            >
              CLOSE TERMINAL
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="space-y-1">
              <label className="text-slate-400">// SENDER IDENTITY / NAME:</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:border-cyan-400 outline-none"
                placeholder="e.g. Satoshi Nakamoto"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-400">// SENDER COMM ADDRESS (EMAIL):</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:border-cyan-400 outline-none"
                placeholder="e.g. dev@domain.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-400">// TRANSMISSION PAYLOAD (MESSAGE):</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 focus:border-cyan-400 outline-none resize-none"
                placeholder="Describe project requirements or collaboration opportunity..."
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={copyPgpKey}
                className="text-slate-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer text-[11px]"
              >
                <Key className="w-3.5 h-3.5 text-cyan-400" />
                <span>{copiedKey ? 'PGP KEY COPIED!' : 'COPY PGP KEY'}</span>
              </button>

              <button
                type="submit"
                disabled={status === 'transmitting'}
                className="px-6 py-3 rounded-lg bg-cyan-500/10 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 font-bold flex items-center gap-2 cursor-pointer transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'transmitting' ? 'ENCRYPTING...' : 'DISPATCH TRANSMISSION'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
