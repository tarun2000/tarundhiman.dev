'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="glass-panel group grid overflow-hidden rounded-3xl lg:grid-cols-[1fr_0.82fr]"
    >
      <div className="p-6 sm:p-8">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="font-mono rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">
            {project.status}
          </span>
          <span className="text-sm text-[var(--soft)]">{project.impact}</span>
        </div>
        <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 text-base leading-8 text-[var(--muted)]">
          {project.tagline}
        </p>
        <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-4">
          <p className="font-mono mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--soft)]">
            Problem solved
          </p>
          <p className="text-sm leading-7 text-[var(--muted)]">{project.problem}</p>
        </div>
        <ul className="mt-6 space-y-3">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-7 text-[var(--muted)]">
              <span className="mt-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--accent)] shadow-[0_0_14px_var(--accent)]" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          {project.links.map((link) => (
            link.disabled ? (
              <span
                key={link.label}
                className="inline-flex min-h-10 items-center rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-4 text-sm font-semibold text-[var(--soft)]"
              >
                {link.label}
              </span>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--border-strong)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                {link.label}
                <span aria-hidden="true" className="ml-2">↗</span>
              </a>
            )
          ))}
        </div>
      </div>

      <div className="relative min-h-[22rem] border-t border-[var(--border)] bg-[radial-gradient(circle_at_top,rgba(var(--accent-rgb),0.16),transparent_50%),var(--surface-muted)] p-6 lg:border-l lg:border-t-0">
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(127,127,127,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,127,127,0.12)_1px,transparent_1px)] [background-size:36px_36px]" />
        <div className="relative mx-auto flex h-full max-w-sm flex-col justify-center">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-strong)] p-4 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--soft)]">
                {project.preview.eyebrow}
              </p>
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_var(--accent)]" />
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-5">
              <p className="text-4xl font-semibold tracking-[-0.06em] text-[var(--text)]">
                {project.preview.metric}
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">{project.preview.detail}</p>
            </div>
            <div className="mt-4 space-y-2">
              {project.preview.rows.map((row) => (
                <div key={row} className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-2">
                  <span className="text-sm text-[var(--muted)]">{row}</span>
                  <span className="h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--accent)] to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
