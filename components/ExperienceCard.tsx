'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/data/experience';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [start, end] = experience.period.split(' - ');

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border-l border-[var(--border)] pb-8 pl-6 last:border-l-transparent last:pb-0 sm:pl-9"
    >
      <div className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-[var(--bg)] bg-[var(--accent)] shadow-[0_0_24px_var(--accent)]" />
      <div className="glass-panel rounded-3xl p-5 transition duration-300 group-hover:-translate-y-1 group-hover:border-[var(--border-strong)] sm:p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--text)]">{experience.company}</h3>
            <p className="mt-1 text-sm font-semibold text-[var(--muted)]">{experience.role}</p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            <span className="font-mono rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1 text-xs text-[var(--muted)]">
              {start}
            </span>
            <span className="font-mono rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1 text-xs text-[var(--muted)]">
              {end}
            </span>
            <span className="font-mono rounded-full border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
              {experience.location}
            </span>
          </div>
        </div>
        <ul className="mt-6 grid gap-3">
          {experience.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm leading-7 text-[var(--muted)]">
              <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
