'use client';

import { motion } from 'framer-motion';
import PremiumButton from './PremiumButton';
import { heroBadges, SectionId } from '@/data/site';

interface HeroSectionProps {
  onNavigate: (id: SectionId) => void;
}

const stats = [
  { value: '70%', label: 'dashboard latency reduction' },
  { value: '10+', label: 'RBAC roles supported' },
  { value: '∞', label: 'curiosity budget' },
];

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section id="home" className="relative flex min-h-[calc(100vh-4rem)] scroll-mt-28 items-center py-28 sm:py-32">
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-20 blur-3xl"
        animate={{ scale: [1, 1.16, 1], opacity: [0.14, 0.24, 0.14] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="relative grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--muted)] shadow-sm backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_20px_var(--accent)]" />
            Open to SDE / full-stack roles
          </div>
          <p className="font-mono mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent-strong)]">
            Tarun Dhiman · full-stack engineer
          </p>
          <h1 className="text-balance max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-[var(--text)] sm:text-6xl md:text-7xl">
            Building developer tools, intelligent systems, and interfaces that feel alive.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
            I turn product ideas into polished full-stack systems with fast interfaces, reliable APIs, realtime behavior, and performance work that shows up in the numbers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PremiumButton onClick={() => onNavigate('projects')}>View projects</PremiumButton>
            <PremiumButton variant="secondary" onClick={() => onNavigate('contact')}>Contact me</PremiumButton>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="font-mono rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 py-1.5 text-xs font-medium text-[var(--muted)]"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel relative overflow-hidden rounded-3xl p-5 sm:p-6"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <div className="rounded-2xl border border-[var(--border)] bg-black/80 p-4 text-white shadow-2xl dark:bg-black/50">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="font-mono ml-2 text-xs text-white/45">~/portfolio</span>
            </div>
            <div className="font-mono space-y-3 text-sm leading-7">
              <p><span className="text-[var(--accent)]">tarun</span> build --focus product-systems</p>
              <p className="text-white/60">compiling taste, performance, and reliability...</p>
              <p className="text-white/80">I prompt, therefore I ship.</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-4">
                <p className="text-2xl font-semibold tracking-[-0.03em] text-[var(--text)]">{stat.value}</p>
                <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
