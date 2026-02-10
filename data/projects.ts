export interface Project {
  name: string;
  description: string;
  techStack: string[];
  link: string;
}

export const projects: Project[] = [
  {
    name: 'Yapper - Chat App',
    description: 'Built a real-time chat application supporting room-based and private messaging using WebSockets.',
    techStack: ['React.js', 'Javascript', 'WebSockets', 'Tailwind CSS' ],
    link: 'https://yapperr.netlify.app/',
  },
  {
    name: 'My CLI',
    description: 'A custom command-line interface (CLI) tool to automate repetitive development tasks.',
    techStack: ['Node.js', 'Commander.js', 'Javascript'],
    link: 'https://github.com/tarun2000/MyCLI',
  },
  {
    name: 'Customer Insights',
    description: 'An intiutive dashboard for Customers, Managers and RMs showing customer and product data.',
    techStack: ['React.js', 'Node.js', 'Javascript', 'Tailwind CSS'],
    link: 'https://github.com/tarun2000/jwtAuth',
  },
  {
    name: 'Markets Insights',
    description: 'A dashboard for customers showing markets data like daily P&L, Revenue and much more.',
    techStack: ['React.js', 'Node.js', 'Javascript', 'Tailwind CSS'],
    link: 'https://github.com/tarun2000/abnormal-file-vault',
  },
  
];
