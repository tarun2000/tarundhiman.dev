'use client';

import PremiumButton from './PremiumButton';
import SectionShell from './SectionShell';
import { socialLinks } from '@/data/site';

export default function ContactSection() {
  return (
    <SectionShell id="contact" className="pb-24">
      <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-10">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[var(--accent)] opacity-10 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="font-mono mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              Contact
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-[var(--text)] sm:text-5xl">
              Looking for a full-stack engineer who can ship polished product surfaces and sturdy systems?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              I am open to SDE and full-stack opportunities where frontend craft, backend thinking, and product ownership all matter. Recruiters, hiring teams, and builders are welcome.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PremiumButton href="mailto:tarundhiman.workmail@gmail.com">Email me</PremiumButton>
              <PremiumButton variant="secondary" href="https://github.com/tarun2000">GitHub</PremiumButton>
              <PremiumButton variant="secondary" href="/resume.pdf" download="TarunDhimanResume.pdf">Download resume</PremiumButton>
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)] p-5">
            <p className="font-mono mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--soft)]">
              Quick links
            </p>
            <div className="grid gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--border-strong)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
