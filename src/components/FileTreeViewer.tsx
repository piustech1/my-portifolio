import React, { useState } from 'react';
import { FolderTree, FileCode, Copy, Check, Download, ExternalLink, FileText } from 'lucide-react';

interface FileNode {
  path: string;
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
  content?: string;
  language?: string;
}

export const FileTreeViewer: React.FC = () => {
  const fileTree: FileNode[] = [
    {
      path: 'portfolio',
      name: 'portfolio/',
      type: 'folder',
      children: [
        {
          path: 'portfolio/index.html',
          name: 'index.html',
          type: 'file',
          language: 'html',
          content: `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevX // Dark Futuristic Developer Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="bg-dark-primary text-slate-100 font-sans">
    <header class="glass-header border-b border-cyan-500/20">
        <div class="logo">DEVX_SYSTEM // v3.0</div>
    </header>
    <main>
        <section id="hero">...</section>
        <section id="projects">...</section>
        <section id="skills">...</section>
    </main>
    <script src="js/script.js"></script>
</body>
</html>`
        },
        {
          path: 'portfolio/css',
          name: 'css/',
          type: 'folder',
          children: [
            {
              path: 'portfolio/css/style.css',
              name: 'style.css',
              type: 'file',
              language: 'css',
              content: `:root {
  --bg-primary: #06080e;
  --bg-secondary: #0b101d;
  --neon-cyan: #00f0ff;
  --neon-emerald: #00ff88;
  --neon-violet: #a855f7;
  --font-sans: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

body {
  background-color: var(--bg-primary);
  color: #f1f5f9;
  font-family: var(--font-sans);
}

.glass-card {
  background: rgba(14, 22, 38, 0.75);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}`
            }
          ]
        },
        {
          path: 'portfolio/js',
          name: 'js/',
          type: 'folder',
          children: [
            {
              path: 'portfolio/js/script.js',
              name: 'script.js',
              type: 'file',
              language: 'javascript',
              content: `// DevX Interactive Script
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupTerminal();
});

function setupTerminal() {
  const input = document.getElementById("terminalInput");
  // Interactive commands execution...
}`
            }
          ]
        },
        {
          path: 'portfolio/assets',
          name: 'assets/',
          type: 'folder',
          children: [
            { path: 'portfolio/assets/images', name: 'images/', type: 'folder' },
            { path: 'portfolio/assets/icons', name: 'icons/', type: 'folder' }
          ]
        },
        {
          path: 'portfolio/README.md',
          name: 'README.md',
          type: 'file',
          language: 'markdown',
          content: `# DevX Cyber // Dark Futuristic Developer Portfolio & Design System

A sleek, modern, dark futuristic developer portfolio with tokenized CSS design tokens, interactive terminal shell, and project showcase.

## Folder Structure
- index.html
- css/style.css
- js/script.js
- assets/ (images, icons)
- README.md`
        }
      ]
    }
  ];

  const [selectedFile, setSelectedFile] = useState<FileNode>(fileTree[0].children![0]);
  const [copied, setCopied] = useState(false);

  const copyContent = () => {
    if (selectedFile.content) {
      navigator.clipboard.writeText(selectedFile.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <section id="filetree" className="space-y-8">
      <div className="border-l-2 border-cyan-400 pl-4">
        <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">// 07. PROJECT STRUCTURE</span>
        <h2 className="text-2xl sm:text-3xl font-bold">Static Portfolio Files Inspector</h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 rounded-xl bg-[#0b101d]/90 border border-cyan-500/30 p-6">
        {/* Left Tree Navigator */}
        <div className="lg:col-span-4 space-y-4 border-r border-slate-800/80 pr-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-300 pb-3 border-b border-slate-800">
            <FolderTree className="w-4 h-4 text-cyan-400" />
            <span>PORTFOLIO DIRECTORY</span>
          </div>

          <div className="font-mono text-xs space-y-2">
            {fileTree[0].children?.map((node) => {
              if (node.type === 'folder') {
                return (
                  <div key={node.path} className="space-y-1">
                    <div className="text-slate-400 font-bold flex items-center gap-1.5 pl-2">
                      <span className="text-cyan-400">📁</span> {node.name}
                    </div>
                    {node.children?.map((child) => (
                      <button
                        key={child.path}
                        onClick={() => child.type === 'file' && setSelectedFile(child)}
                        className={`w-full text-left pl-6 py-1 rounded transition-all cursor-pointer flex items-center gap-1.5 ${
                          selectedFile.path === child.path
                            ? 'bg-cyan-500/20 text-cyan-300 font-bold border-l-2 border-cyan-400'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <FileCode className="w-3.5 h-3.5 text-slate-500" />
                        <span>{child.name}</span>
                      </button>
                    ))}
                  </div>
                );
              }
              return (
                <button
                  key={node.path}
                  onClick={() => setSelectedFile(node)}
                  className={`w-full text-left pl-2 py-1 rounded transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedFile.path === node.path
                      ? 'bg-cyan-500/20 text-cyan-300 font-bold border-l-2 border-cyan-400'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{node.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Code Viewer */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 font-mono text-xs">
            <div className="flex items-center gap-2 text-cyan-300 font-bold">
              <FileCode className="w-4 h-4 text-cyan-400" />
              <span>{selectedFile.path}</span>
            </div>
            <button
              onClick={copyContent}
              className="px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'COPIED' : 'COPY FILE'}</span>
            </button>
          </div>

          <div className="rounded-lg bg-slate-950 p-4 border border-slate-800 overflow-x-auto h-80">
            <pre className="font-mono text-xs text-slate-300 whitespace-pre leading-relaxed">
              {selectedFile.content || `// Empty folder node: ${selectedFile.path}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
