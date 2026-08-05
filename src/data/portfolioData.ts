import { Project, SkillCategory, DesignToken, ExperienceItem, CodeSnippet } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'neural-cluster',
    title: 'NEURAL CLUSTER AI',
    category: 'AI & ML',
    shortDesc: 'Distributed multi-agent pipeline orchestrator with GPU acceleration and real-time streaming inference.',
    fullDesc: 'A high-performance orchestration framework for deploying multi-modal neural network agents across hybrid Kubernetes clusters. Features automated prompt routing, WebGL vector state visualization, and zero-copy IPC streaming.',
    tags: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'Redis', 'TypeScript'],
    stars: 1420,
    forks: 312,
    featured: true,
    metrics: [
      { label: 'Latency', value: '< 18ms' },
      { label: 'Throughput', value: '45k req/s' },
      { label: 'Accuracy', value: '99.4%' }
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com'
  },
  {
    id: 'cyber-vault',
    title: 'CYBER VAULT DEFI',
    category: 'Web3 & Security',
    shortDesc: 'Zero-knowledge encryption protocol for decentralised asset vaults with hardware security module integration.',
    fullDesc: 'Zero-knowledge proof-backed privacy protocol ensuring enterprise transaction confidentiality on public EVM networks. Implements zk-SNARK circuit compilation and automated formal verification audit trails.',
    tags: ['Rust', 'Solidity', 'TypeScript', 'Ethers.js', 'WebAssembly'],
    stars: 890,
    forks: 145,
    featured: true,
    metrics: [
      { label: 'TVL Locked', value: '$42.5M' },
      { label: 'Audits Passed', value: '3/3' },
      { label: 'Gas Saver', value: '38%' }
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com'
  },
  {
    id: 'quantum-monitor',
    title: 'QUANTUM MONITOR HUD',
    category: 'Dashboards & UI',
    shortDesc: 'High-frequency telemetry dashboard rendering 60fps WebGL matrix graphs and microsecond analytics.',
    fullDesc: 'Ultra-low latency real-time browser dashboard capable of visualizing 100,000 active telemetry data streams in real time via custom WebGL shaders and WebAudio feedback loops.',
    tags: ['React 19', 'Three.js', 'Tailwind CSS', 'WebSockets', 'Chart.js'],
    stars: 2150,
    forks: 480,
    featured: true,
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Data Nodes', value: '100k' },
      { label: 'Memory', value: '< 45MB' }
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com'
  },
  {
    id: 'hyper-edge',
    title: 'HYPER-EDGE PROXY',
    category: 'Cloud & Systems',
    shortDesc: 'Sub-millisecond API proxy engine written in Go with dynamic eBPF packet routing and DDoS shielding.',
    fullDesc: 'Cloud-native reverse proxy engineered for ultra-dense edge networks. Supports hot-reloading WASM plugins, automated SSL lifecycle management, and predictive traffic shaping.',
    tags: ['Go', 'eBPF', 'gRPC', 'Kubernetes', 'Prometheus'],
    stars: 1780,
    forks: 260,
    featured: false,
    metrics: [
      { label: 'P99 Overhead', value: '0.4ms' },
      { label: 'Edge Nodes', value: '1,200+' },
      { label: 'Uptime', value: '99.999%' }
    ],
    demoUrl: '#',
    githubUrl: 'https://github.com'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'CORE & SYSTEMS',
    color: 'cyan',
    skills: [
      { name: 'TypeScript / JavaScript', level: 98, experienceYears: 7, status: 'PRODUCTION' },
      { name: 'Go (Golang)', level: 90, experienceYears: 5, status: 'PRODUCTION' },
      { name: 'Rust', level: 82, experienceYears: 3, status: 'STABLE' },
      { name: 'Python (AI / Data)', level: 88, experienceYears: 5, status: 'PRODUCTION' },
      { name: 'C++ / WebAssembly', level: 75, experienceYears: 2, status: 'EXPERIMENTAL' }
    ]
  },
  {
    title: 'FRONTEND & HUD ARCHITECTURE',
    color: 'emerald',
    skills: [
      { name: 'React 19 & Next.js', level: 96, experienceYears: 6, status: 'PRODUCTION' },
      { name: 'Tailwind CSS (V4)', level: 98, experienceYears: 5, status: 'PRODUCTION' },
      { name: 'Three.js / WebGL / Canvas', level: 85, experienceYears: 4, status: 'STABLE' },
      { name: 'Framer Motion / Animations', level: 92, experienceYears: 4, status: 'PRODUCTION' },
      { name: 'Design Tokens & Systems', level: 95, experienceYears: 6, status: 'PRODUCTION' }
    ]
  },
  {
    title: 'BACKEND & CLOUD INFRA',
    color: 'violet',
    skills: [
      { name: 'Node.js & Express', level: 95, experienceYears: 7, status: 'PRODUCTION' },
      { name: 'Docker & Kubernetes', level: 88, experienceYears: 4, status: 'PRODUCTION' },
      { name: 'PostgreSQL & Redis', level: 92, experienceYears: 6, status: 'PRODUCTION' },
      { name: 'gRPC & GraphQL', level: 86, experienceYears: 4, status: 'STABLE' },
      { name: 'AWS & Cloud Run', level: 90, experienceYears: 5, status: 'PRODUCTION' }
    ]
  }
];

export const DESIGN_TOKENS_DATA: DesignToken[] = [
  { name: 'Dark Canvas', cssVar: '--color-bg-primary', value: '#06080e', type: 'color', description: 'Deep space canvas background color.' },
  { name: 'Subtle Panel', cssVar: '--color-bg-secondary', value: '#0b101d', type: 'color', description: 'Secondary panel and container background.' },
  { name: 'Glass Panel', cssVar: '--color-panel-glass', value: 'rgba(14, 22, 38, 0.75)', type: 'color', description: 'Translucent glassmorphism surface backdrop.' },
  { name: 'Cyber Cyan', cssVar: '--color-neon-cyan', value: '#00f0ff', type: 'color', description: 'Primary glowing accent for links, buttons, and HUD.' },
  { name: 'Matrix Emerald', cssVar: '--color-neon-emerald', value: '#00ff88', type: 'color', description: 'System health, online status, and success badges.' },
  { name: 'Synth Violet', cssVar: '--color-neon-violet', value: '#a855f7', type: 'color', description: 'Secondary glowing accent for headers & tags.' },
  { name: 'Solar Amber', cssVar: '--color-neon-amber', value: '#f59e0b', type: 'color', description: 'Warning states, terminal prompt indicators, and highlights.' },
  { name: 'Header Font', cssVar: '--font-heading', value: 'Space Grotesk, sans-serif', type: 'font', description: 'Futuristic geometric display font.' },
  { name: 'Monospace Font', cssVar: '--font-mono', value: 'JetBrains Mono, monospace', type: 'font', description: 'High-legibility code & terminal font.' }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Lead Full Stack & Systems Architect',
    company: 'CYBERSPACE LABS INC.',
    period: '2023 - PRESENT',
    location: 'SAN FRANCISCO / REMOTE',
    description: 'Directing the architecture of cloud-native AI developer platforms, designing micro-frontend design systems, and scaling real-time WebSocket pipelines.',
    highlights: [
      'Architected multi-region micro-service infrastructure handling over 500M daily API events.',
      'Created standardized dark futuristic design token library used across 14 internal micro-applications.',
      'Reduced average p99 latency by 42% through Go gRPC proxy optimization.'
    ],
    skills: ['TypeScript', 'React 19', 'Go', 'Docker', 'Design Tokens', 'PostgreSQL']
  },
  {
    id: 'exp-2',
    role: 'Senior Frontend & HUD Engineer',
    company: 'NEXUS SOFTWARE SYSTEMS',
    period: '2021 - 2023',
    location: 'NEW YORK / REMOTE',
    description: 'Spearheaded frontend developer experience and high-frequency real-time dashboard visualization suites for fintech & cloud security customers.',
    highlights: [
      'Engineered WebGL telemetry graphics engine capable of rendering 100k concurrent datapoints at 60 FPS.',
      'Mentored 8 junior developers in modern React patterns and design system maintenance.',
      'Built automated end-to-end Cypress & Playwright visual regression test suites.'
    ],
    skills: ['React', 'Three.js', 'Tailwind CSS', 'TypeScript', 'WebSockets', 'Jest']
  }
];

export const CODE_SNIPPETS_DATA: CodeSnippet[] = [
  {
    id: 'theme-engine',
    title: 'Cyber Theme Design Tokens Generator',
    language: 'TypeScript',
    description: 'Utility for dynamically applying glowing CSS variables to the document root element.',
    code: `// Cyberpunk Design Token Injector
export function applyCyberTokens(accentColor: 'cyan' | 'emerald' | 'violet') {
  const root = document.documentElement;
  const colorMap = {
    cyan: { neon: '#00f0ff', glow: 'rgba(0, 240, 255, 0.4)' },
    emerald: { neon: '#00ff88', glow: 'rgba(0, 255, 136, 0.4)' },
    violet: { neon: '#a855f7', glow: 'rgba(168, 85, 247, 0.4)' }
  };

  const active = colorMap[accentColor] || colorMap.cyan;
  root.style.setProperty('--color-neon-accent', active.neon);
  root.style.setProperty('--border-glow-accent', active.glow);

  console.log(\`[DEVX_SYS] Applied token preset: \${accentColor.toUpperCase()}\`);
}
// Run execution test
applyCyberTokens('cyan');`
  },
  {
    id: 'matrix-stream',
    title: 'WebGL Shader Particle Pipeline',
    language: 'TypeScript',
    description: 'High-frequency telemetry particle loop calculator with 60FPS boundary check.',
    code: `// High-speed telemetry buffer renderer
class TelemetryStream {
  private buffer: Float32Array;
  constructor(size: number = 1024) {
    this.buffer = new Float32Array(size);
  }

  public tick(delta: number): number {
    let checksum = 0;
    for (let i = 0; i < this.buffer.length; i++) {
      this.buffer[i] = Math.sin(i * 0.1 + delta) * 100;
      checksum += this.buffer[i];
    }
    return Math.floor(checksum);
  }
}

const stream = new TelemetryStream(128);
console.log("[DEVX_HUD] Frame Checksum:", stream.tick(Date.now() / 1000));`
  }
];
