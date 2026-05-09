'use client';

import { motion } from 'framer-motion';
import { focusItems } from '@/data/site';
import SectionShell from './SectionShell';

export default function NowSection() {
  return (
    <SectionShell
      id="now"
      eyebrow="Now"
      title="Current focus."
      description="A small window into what I am actively sharpening and building toward."
    >
      <div className="glass-panel overflow-hidden rounded-3xl">
        {focusItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: index * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 border-b border-[var(--border)] p-5 last:border-b-0 sm:grid-cols-[12rem_1fr] sm:p-6"
          >
            <div>
              <span className="font-mono rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                {item.signal}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--text)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
