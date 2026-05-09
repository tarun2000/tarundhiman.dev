'use client';

import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { navItems, SectionId } from '@/data/site';

interface NavbarTabsProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  onOpenCommandPalette: () => void;
  isScrolled: boolean;
}

export default function NavbarTabs({
  activeSection,
  onNavigate,
  onOpenCommandPalette,
  isScrolled,
}: NavbarTabsProps) {
  return (
    <div className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 pointer-events-none sm:top-4">
      <motion.nav
        initial={false}
        animate={{ y: isScrolled ? -1 : 0, scale: isScrolled ? 0.985 : 1 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel pointer-events-auto flex w-full max-w-6xl items-center gap-2 rounded-full px-2 py-2"
        aria-label="Primary navigation"
      >
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="hidden min-w-0 items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--surface-muted)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] md:flex"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_20px_var(--accent)]" />
          <span className="truncate">tarundhiman.dev</span>
        </button>

        <div className="no-scrollbar flex flex-1 items-center gap-1 overflow-x-auto rounded-full bg-[var(--surface-muted)] p-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className="relative whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:text-sm"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSectionPill"
                    className="absolute inset-0 rounded-full bg-[var(--text)] shadow-[0_10px_30px_rgba(var(--accent-rgb),0.16)]"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? 'text-[var(--bg)]' : 'text-[var(--muted)] hover:text-[var(--text)]'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={onOpenCommandPalette}
          className="font-mono hidden h-10 items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-muted)] px-3 text-xs font-semibold text-[var(--muted)] transition hover:border-[var(--border-strong)] hover:text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] sm:flex"
          aria-label="Open command palette"
        >
          <span>⌘K</span>
        </button>
        <ThemeToggle />
      </motion.nav>
    </div>
  );
}
