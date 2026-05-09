export type SectionId = 'home' | 'projects' | 'skills' | 'experience' | 'now' | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface EngineeringCard {
  title: string;
  description: string;
  concepts: string[];
}

export interface FocusItem {
  title: string;
  description: string;
  signal: string;
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'now', label: 'Now' },
  { id: 'contact', label: 'Contact' },
];

export const socialLinks: LinkItem[] = [
  { label: 'Email', href: 'mailto:tarundhiman.workmail@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/tarun2000', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tarun-dhiman-dev/', external: true },
  { label: 'X', href: 'https://x.com/tarun_dhiman13', external: true },
];

export const heroBadges = [
  'Next.js',
  'React',
  'Node.js',
  'WebSockets',
  'DevOps',
  'AI tools',
  'System design',
];

export const engineeringCards: EngineeringCard[] = [
  {
    title: 'Frontend systems',
    description: 'I build responsive, accessible interfaces with reliable state, thoughtful data-fetching, and crisp interaction detail.',
    concepts: ['React', 'Next.js', 'caching', 'accessibility'],
  },
  {
    title: 'Backend APIs',
    description: 'I design service boundaries, authorization flows, and data contracts that make product features safer to ship.',
    concepts: ['Node.js', 'RBAC', 'SQL', 'API design'],
  },
  {
    title: 'Realtime systems',
    description: 'I enjoy the moving parts behind live product surfaces, from WebSocket channels to optimistic UI and room state.',
    concepts: ['WebSockets', 'events', 'latency', 'presence'],
  },
  {
    title: 'Cloud / DevOps',
    description: 'I am sharpening the deployment side: CI/CD, observability, runtime configuration, and operational confidence.',
    concepts: ['CI/CD', 'cloud', 'observability', 'containers'],
  },
  {
    title: 'Performance',
    description: 'I care about render paths, request waterfalls, bundle weight, and turning “feels slow” into measurable wins.',
    concepts: ['profiling', 'memoization', '70% faster', 'Core Web Vitals'],
  },
  {
    title: 'DSA fundamentals',
    description: 'I practice complexity analysis and implementation discipline for SDE interviews and stronger day-to-day engineering.',
    concepts: ['runtime complexity', 'graphs', 'DP', 'system thinking'],
  },
];

export const focusItems: FocusItem[] = [
  {
    title: 'DSA for SDE interviews',
    description: 'Practicing runtime complexity, patterns, and implementation speed with visual learning tools.',
    signal: 'daily reps',
  },
  {
    title: 'DevOps and cloud engineering',
    description: 'Building stronger intuition around CI/CD, deployments, observability, and scalable infrastructure.',
    signal: 'leveling up',
  },
  {
    title: 'AI-powered developer tools',
    description: 'Exploring interfaces that make debugging, learning, and shipping feel faster and more humane.',
    signal: 'building now',
  },
  {
    title: 'Scalable full-stack systems',
    description: 'Designing projects around real data flow, auth, realtime behavior, and measurable performance.',
    signal: 'portfolio-grade',
  },
];
