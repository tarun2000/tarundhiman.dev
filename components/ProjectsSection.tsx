'use client';

import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import SectionShell from './SectionShell';

export default function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Selected work"
      title="Projects shaped like products, not bullet points."
      description="A mix of shipped work, private case studies, and portfolio-grade builds focused on dashboards, realtime systems, developer tools, and interview-grade fundamentals."
    >
      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
