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
      'Architected and developed a React-based executive dashboard, optimizing frontend data-fetching and API integration to achieve a 70% reduction in load times',
      'Designed and implemented a role-based access control (RBAC) admin portal supporting 10+ roles, improving application security and compliance',
      'Integrated interactive data visualizations using React chart libraries and built SQL-backed data pipelines connecting backend services to frontend components',
      'Designed and implemented a role-based access control (RBAC) admin portal supporting 10+ roles, improving application security and compliance',
      'Implemented report printing and export functionality in React, improving data accessibility for business users'
    ],
  },
  {
    company: 'uTrade Solutions',
    role: 'SWE Intern',
    period: 'Jun 2021 - Feb 2022',
    location: 'Mohali, India',
    bullets: [
      'Developed a C++ desktop application with SQLite to manage employee records, reducing query execution time by 40%',
      'Built and optimized gRPC-based data pipelines, replacing legacy systems and reducing data processing time by 50%',
      'Designed data lineage documentation and data asset summaries, improving data governance and reducing defects by 20%'
    ],
  },
  
];
