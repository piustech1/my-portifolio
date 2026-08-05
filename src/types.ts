export type AccentTheme = 'cyan' | 'emerald' | 'violet' | 'amber' | 'pink';

export interface Project {
  id: string;
  title: string;
  category: 'AI & ML' | 'Web3 & Security' | 'Dashboards & UI' | 'Cloud & Systems';
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  stars: number;
  forks: number;
  featured: boolean;
  metrics: { label: string; value: string }[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  color: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    experienceYears: number;
    status: 'PRODUCTION' | 'STABLE' | 'EXPERIMENTAL';
  }[];
}

export interface DesignToken {
  name: string;
  cssVar: string;
  value: string;
  type: 'color' | 'font' | 'spacing' | 'shadow' | 'border';
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface CodeSnippet {
  id: string;
  title: string;
  language: string;
  description: string;
  code: string;
}
