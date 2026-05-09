'use client';

import { experiences } from '@/data/experience';
import ExperienceCard from './ExperienceCard';
import SectionShell from './SectionShell';

export default function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Professional work with measurable product impact."
      description="The throughline: dashboards, data pipelines, secure admin surfaces, realtime thinking, and performance improvements that make software feel sharper."
    >
      <div className="relative">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`${experience.company}-${experience.period}`} experience={experience} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
