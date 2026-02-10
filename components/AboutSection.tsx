'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const links = [
    { label: 'Email', href: 'mailto:tarundhiman.workmail@gmail.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tarun-dhiman-dev/' },
    { label: 'GitHub', href: 'https://github.com/tarun2000' },
    { label: 'X', href: 'https://x.com/tarun_dhiman13' },
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
        className="rounded-xl p-6"
      >
        <div className="flex flex-wrap gap-3">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors underline decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-neutral-600 dark:hover:decoration-neutral-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
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
          I enjoy solving complex problems across UI, APIs, and infrastructure, and I care deeply about performance, DX, and product polish. and I'm currently growing my expertise in cloud infrastructure and DevOps-focused engineering..
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
