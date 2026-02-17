'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const links = [
    { key: 'email', href: 'mailto:tarundhiman.workmail@gmail.com', label: 'Email' },
    { key: 'linkedin', href: 'https://www.linkedin.com/in/tarun-dhiman-dev/', label: 'LinkedIn' },
    { key: 'github', href: 'https://github.com/tarun2000', label: 'GitHub' },
    { key: 'x', href: 'https://x.com/tarun_dhiman13', label: 'X' },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
          Hi, I'm Tarun
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400">
          Full-stack developer building products that look great and scale well.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-xl py-6 pl-0 pr-2"
      >
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <motion.a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group inline-flex items-center justify-center w-10 h-10 rounded-md bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">{link.label}</span>
              {link.key === 'email' && (
                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect width="24" height="24" rx="4" fill="#000000" />
                  <path d="M6 8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6zm11.4 2L12 13.2 6.6 10h10.8z" fill="#FFFFFF" />
                </svg>
              )}
              {link.key === 'linkedin' && (
                <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 17.34H6.14V10.5h2.2v6.84zM7.24 9.36c-.7 0-1.14-.48-1.14-1.08 0-.62.46-1.08 1.18-1.08.72 0 1.14.46 1.14 1.08 0 .6-.42 1.08-1.18 1.08zM18 17.34h-2.2v-3.34c0-.86-.31-1.44-1.08-1.44-.59 0-.94.4-1.1.79-.06.14-.08.33-.08.52v3.47H11.3s.03-5.63 0-6.22h2.2v.88c.29-.45.81-1.08 1.98-1.08 1.45 0 2.54.95 2.54 2.99v3.43z" />
                </svg>
              )}
              {link.key === 'github' && (
                <svg className="w-5 h-5 text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.24c0 4.5 2.87 8.33 6.84 9.68.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.38-3.37-1.38-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.9.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.4 9.4 0 0 1 12 6.85c.85.004 1.71.12 2.51.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .26.18.58.69.48A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2z" clipRule="evenodd" />
                </svg>
              )}
              {link.key === 'x' && (
                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect width="24" height="24" rx="4" fill="#000000" />
                  <path fill="#FFFFFF" d="M17.78 6.22a1 1 0 0 0-1.41 0L12 10.59 7.63 6.22a1 1 0 0 0-1.41 1.41L10.59 12l-4.37 4.37a1 1 0 0 0 1.41 1.41L12 13.41l4.37 4.37a1 1 0 0 0 1.41-1.41L13.41 12l4.37-4.37a1 1 0 0 0 0-1.41z" />
                </svg>
              )}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed"
      >
        <p>
          I'm a full-stack developer focused on crafting elegant user experiences and reliable backend systems. With expertise in Next.js, React, Javascript, and backend services, I ship end-to-end features from idea to production.
        </p>
        <p>
          I enjoy solving complex problems across UI, APIs, and infrastructure, and I care deeply about performance, DX, and product polish. and I'm currently growing my expertise in cloud infrastructure and DevOps-focused engineering.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="pt-4 border-t border-neutral-200 dark:border-neutral-700"
      >
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Want to build something together? Hit me up on{' '}
          <a
            href="mailto:tarundhiman.workmail@gmail.com"
            className="text-neutral-900 dark:text-neutral-100 underline decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-neutral-600 dark:hover:decoration-neutral-400 transition-colors"
          >
            Email
          </a>{' '}
          or{' '}
          <a
            href="https://x.com/tarun_dhiman13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 dark:text-neutral-100 underline decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-neutral-600 dark:hover:decoration-neutral-400 transition-colors"
          >
            X
          </a>
          . Let's create something that doesn't end up in the GitHub graveyard.
        </p>
      </motion.div>
    </div>
  );
}
