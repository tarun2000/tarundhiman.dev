'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '@/data/site';

interface SectionShellProps {
  id: SectionId;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = '',
}: SectionShellProps) {
  return (
    <section id={id} className={`scroll-mt-28 py-14 sm:py-20 ${className}`}>
      {(eyebrow || title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 max-w-3xl"
        >
          {eyebrow && (
            <p className="font-mono mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-4xl md:text-5xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-base leading-8 text-[var(--muted)] sm:text-lg">
              {description}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
