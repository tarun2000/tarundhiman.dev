'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface ContentContainerProps {
  activeTab: string;
  children: ReactNode;
}

export default function ContentContainer({ activeTab, children }: ContentContainerProps) {
  return (
    <div className="relative min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 md:p-12"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
