export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: 'ANZ',
    role: 'Software Engineer',
    period: 'Oct 2022 - Present',
    location: 'Bangalore, India',
    bullets: [
      'Architected a React-based executive dashboard and optimized frontend data-fetching flows to reduce dashboard render latency by 70%.',
      'Designed and implemented a role-based access control admin portal supporting 10+ roles, improving security and compliance workflows.',
      'Integrated interactive data visualizations with SQL-backed data pipelines connecting backend services to executive-facing UI surfaces.',
      'Implemented report printing and export functionality, making critical business data easier for teams to share and act on.'
    ],
  },
  {
    company: 'uTrade Solutions',
    role: 'SWE Intern',
    period: 'Jun 2021 - Feb 2022',
    location: 'Mohali, India',
    bullets: [
      'Developed a C++ desktop application with SQLite to manage employee records, reducing query execution time by 40%.',
      'Built and optimized gRPC-based data pipelines, replacing legacy systems and reducing processing time by 50%.',
      'Designed data lineage documentation and data asset summaries, improving governance and reducing defects by 20%.'
    ],
  },
  
];
