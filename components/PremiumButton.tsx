import { ReactNode } from 'react';

interface PremiumButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  download?: boolean | string;
  className?: string;
}

export default function PremiumButton({
  children,
  href,
  onClick,
  variant = 'primary',
  disabled = false,
  download,
  className = '',
}: PremiumButtonProps) {
  const baseClass =
    'group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]';
  const variantClass =
    variant === 'primary'
      ? 'bg-[var(--text)] text-[var(--bg)] shadow-[0_0_40px_rgba(var(--accent-rgb),0.18)] hover:-translate-y-0.5 hover:shadow-[0_0_55px_rgba(var(--accent-rgb),0.28)]'
      : 'border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]';
  const disabledClass = disabled ? 'pointer-events-none opacity-55' : '';

  const content = (
    <>
      {children}
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        download={download}
        className={`${baseClass} ${variantClass} ${disabledClass} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variantClass} ${disabledClass} ${className}`}
    >
      {content}
    </button>
  );
}
