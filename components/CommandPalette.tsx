'use client';

import { useEffect, useMemo, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionId } from '@/data/site';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (id: SectionId) => void;
}

type CommandAction =
  | { kind: 'section'; label: string; hint: string; section: SectionId; disabled?: false }
  | { kind: 'external'; label: string; hint: string; href: string; disabled?: false }
  | { kind: 'download'; label: string; hint: string; href: string; filename: string; disabled?: false }
  | { kind: 'disabled'; label: string; hint: string; disabled: true };

export default function CommandPalette({ isOpen, onClose, onNavigate }: CommandPaletteProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  const actions = useMemo<CommandAction[]>(
    () => [
      { kind: 'section', label: 'Home', hint: 'Hero and intro', section: 'home' },
      { kind: 'section', label: 'Projects', hint: 'Case studies and shipped work', section: 'projects' },
      { kind: 'section', label: 'Experience', hint: 'Professional timeline', section: 'experience' },
      { kind: 'section', label: 'Skills', hint: 'Engineering depth', section: 'skills' },
      { kind: 'section', label: 'Now', hint: 'Current focus', section: 'now' },
      { kind: 'download', label: 'Resume', hint: 'Download PDF', href: '/resume.pdf', filename: 'TarunDhimanResume.pdf' },
      { kind: 'external', label: 'GitHub', hint: 'github.com/tarun2000', href: 'https://github.com/tarun2000' },
      { kind: 'external', label: 'LinkedIn', hint: 'Professional profile', href: 'https://www.linkedin.com/in/tarun-dhiman-dev/' },
      { kind: 'section', label: 'Contact', hint: 'Email and links', section: 'contact' },
    ],
    []
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const firstButton = panelRef.current?.querySelector<HTMLButtonElement>('button:not(:disabled)');
    firstButton?.focus();
  }, [isOpen]);

  const runAction = (action: CommandAction) => {
    if (action.disabled) return;
    if (action.kind === 'section') {
      onNavigate(action.section);
      onClose();
      return;
    }
    if (action.kind === 'download') {
      const anchor = document.createElement('a');
      anchor.href = action.href;
      anchor.download = action.filename;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      onClose();
      return;
    }
    window.open(action.href, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-black/55 px-4 pt-24 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel w-full max-w-2xl overflow-hidden rounded-3xl"
          >
            <div className="border-b border-[var(--border)] p-4">
              <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-3">
                <span className="text-[var(--soft)]">⌘</span>
                <p className="text-sm font-semibold text-[var(--text)]">Quick navigate</p>
                <span className="font-mono ml-auto text-xs text-[var(--soft)]">Esc</span>
              </div>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {actions.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  disabled={action.disabled}
                  onClick={() => runAction(action)}
                  className="group flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-3 text-left transition hover:bg-[var(--surface-muted)] focus:bg-[var(--surface-muted)] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span>
                    <span className="block text-sm font-semibold text-[var(--text)]">{action.label}</span>
                    <span className="mt-0.5 block text-xs text-[var(--muted)]">{action.hint}</span>
                  </span>
                  <span className="text-sm text-[var(--soft)] transition group-hover:translate-x-0.5">
                    {action.disabled ? 'soon' : action.kind === 'external' ? '↗' : action.kind === 'download' ? '↓' : '↵'}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
