'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative h-10 w-[4.5rem] flex-shrink-0 rounded-full border border-[var(--border)] bg-[var(--surface-muted)] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      aria-label="Toggle theme"
      aria-pressed={theme === 'dark'}
    >
      <motion.span
        className="absolute left-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--text)] text-[var(--bg)] shadow-sm"
        animate={{ x: theme === 'dark' ? 32 : 0 }}
        transition={{ type: 'spring', stiffness: 520, damping: 32 }}
      >
        {theme === 'dark' ? (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20.25 14.1A7.45 7.45 0 0 1 9.9 3.75 8.5 8.5 0 1 0 20.25 14.1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.66-5.66 1.41-1.41M4.93 19.07l1.41-1.41m0-11.32L4.93 4.93m14.14 14.14-1.41-1.41M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </motion.span>
      <span className="flex h-full items-center justify-between px-3 text-[var(--soft)]">
        <span aria-hidden="true">☼</span>
        <span aria-hidden="true">☾</span>
      </span>
    </button>
  );
}
