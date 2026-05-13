export interface ProjectLink {
  label: string;
  href: string;
  disabled?: boolean;
}

export interface ProjectPreview {
  eyebrow: string;
  metric: string;
  detail: string;
  rows: string[];
}

export interface Project {
  title: string;
  tagline: string;
  problem: string;
  highlights: string[];
  impact: string;
  techStack: string[];
  status: 'Shipped' | 'Case study' | 'Building now';
  links: ProjectLink[];
  preview: ProjectPreview;
}

export const projects: Project[] = [
  {
    title: 'Executive Insights',
    tagline: 'A high-signal dashboard experience for leaders who need decisions, not data dumps.',
    problem: 'Executive reporting needed faster render paths, cleaner access control, and data stories that business users could trust at a glance.',
    highlights: [
      'Architected frontend data-fetching flows that reduced dashboard render latency by 70%.',
      'Built role-aware admin experiences for 10+ access profiles.',
      'Integrated chart surfaces with SQL-backed pipelines and export-ready reporting.',
    ],
    impact: '70% faster dashboard loads',
    techStack: ['React', 'TypeScript', 'Charts', 'SQL', 'RBAC'],
    status: 'Case study',
    links: [
      { label: 'Private work', href: '#', disabled: true },
    ],
    preview: {
      eyebrow: 'ANZ dashboard',
      metric: '70%',
      detail: 'render latency reduction',
      rows: ['Revenue pulse', 'Access controls', 'Export queue'],
    },
  },
  {
    title: 'Discord Contribution Platform',
    tagline: 'A community dashboard concept for tracking collaboration, contribution, and moderation signals.',
    problem: 'Developer communities need better visibility into contribution health without turning community work into noisy admin chores.',
    highlights: [
      'Designed dashboard flows for member activity, contribution signals, and role-based views.',
      'Planned event-driven data capture for messages, tasks, and contribution milestones.',
      'Modeled scalable surfaces for moderators, contributors, and project owners.',
    ],
    impact: 'Community intelligence layer',
    techStack: ['Next.js', 'Node.js', 'Discord APIs', 'PostgreSQL', 'Queues'],
    status: 'Building now',
    links: [
      { label: 'Building now', href: '#', disabled: true },
    ],
    preview: {
      eyebrow: 'community ops',
      metric: '24h',
      detail: 'activity signal window',
      rows: ['Contributor graph', 'Role insights', 'Moderation feed'],
    },
  },
  {
    title: 'Yapper',
    tagline: 'A realtime chat app with room-based messaging, private conversations, and responsive UI polish.',
    problem: 'Realtime interfaces need to feel instant while keeping message flow, room state, and private channels understandable.',
    highlights: [
      'Built room-based and private messaging with WebSocket-driven updates.',
      'Designed responsive chat surfaces that keep conversation context visible.',
      'Handled realtime event flow across active sessions and message states.',
    ],
    impact: 'Realtime messaging product',
    techStack: ['React', 'JavaScript', 'WebSockets', 'Tailwind CSS'],
    status: 'Shipped',
    links: [
      { label: 'Live demo', href: 'https://yapperr.netlify.app/' },
    ],
    preview: {
      eyebrow: 'live room',
      metric: '12ms',
      detail: 'optimistic message feel',
      rows: ['Room #build', 'Private DM', 'Typing state'],
    },
  },
  {
    title: 'AlgoPilot',
    tagline: 'A local-first Chrome extension that turns LeetCode practice into a guided DSA review cockpit.',
    problem: 'Interview prep gets scattered across tabs, notes, weak topics, and forgotten follow-ups; AlgoPilot brings the learning loop directly onto problem pages.',
    highlights: [
      'Built a Manifest V3 extension with a React side panel that detects LeetCode problems and handles SPA route changes.',
      'Added local notes, mastery state, spaced repetition scheduling, and dashboard analytics through chrome.storage.local.',
      'Implemented a rule-based complexity analyzer plus runtime visualizers for two pointers, sliding window, stack, and binary search.',
    ],
    impact: 'Local-first DSA practice assistant',
    techStack: ['React', 'TypeScript', 'Vite', 'Chrome MV3', 'Tailwind CSS'],
    status: 'Building now',
    links: [
      { label: 'GitHub repo', href: 'https://github.com/tarun2000/dsa-companion' },
    ],
    preview: {
      eyebrow: 'leetcode copilot',
      metric: '30+',
      detail: 'problem patterns tracked locally',
      rows: ['Review queue', 'Complexity analyzer', 'Pattern visualizer'],
    },
  },
];
