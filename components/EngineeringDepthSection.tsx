'use client';

import { motion } from 'framer-motion';
import { engineeringCards } from '@/data/site';
import SectionShell from './SectionShell';

export default function EngineeringDepthSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Engineering depth"
      title="The systems muscle behind the UI polish."
      description="I want the portfolio to show taste, but also the engineering judgment underneath: performance, APIs, realtime behavior, infrastructure, and fundamentals."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {engineeringCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: index * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] sm:p-6"
          >
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--text)]">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {card.concepts.map((concept) => (
                <span
                  key={concept}
                  className="font-mono rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-2.5 py-1 text-[11px] font-medium text-[var(--muted)]"
                >
                  {concept}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
