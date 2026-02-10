'use client';

import { TabType } from '@/app/page';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface NavbarTabsProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  isScrolled: boolean;
}

const tabs: { id: TabType; label: string }[] = [
  { id: 'about', label: 'Tarun.me' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

export default function NavbarTabs({ activeTab, setActiveTab, isScrolled }: NavbarTabsProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCurrentSectionLabel = () => {
    return tabs.find(tab => tab.id === activeTab)?.label || 'About';
  };

  return (
    <div className="fixed top-4 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <motion.nav
        initial={false}
        animate={{
          scale: isScrolled ? 0.9 : 1,
        }}
        transition={{ duration: 0.2 }}
        className={`flex items-center justify-center gap-1 bg-black-100 dark:bg-neutral rounded-full px-1 py-1.5 border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm shadow-lg pointer-events-auto ${
          isScrolled ? 'px-3' : 'px-1.5'
        }`}
      >
      {!isScrolled ? (
        <>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative px-2.5 py-1.5 text-sm font-normal transition-colors focus:outline-none rounded-full"
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-black dark:bg-white rounded-full shadow-sm"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  activeTab === tab.id
                    ? 'text-neutral-100 dark:text-black font-bold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                }`}
              >
                {tab.label}
              </span>
            </button>
          ))}
          <div className="ml-2 pl-2 pr-1 border-l border-neutral-200 dark:border-neutral-700 flex-shrink-0">
            <ThemeToggle />
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setActiveTab('about');
              scrollToTop();
            }}
            className="px-3 py-1.5 text-normal font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors rounded-full"
          >
            Tarun.me
          </button>
          <button
            onClick={scrollToTop}
            className="px-3 py-1.5 text-normal font-bold text-white dark:text-black rounded-full bg-black dark:bg-white transition-colors"
          >
            {getCurrentSectionLabel()}
          </button>
          <div className="px-2 flex-shrink-0">
            <ThemeToggle />
          </div>
          <span className="text-neutral-300 dark:text-neutral-600 mx-1">|</span>
          <button
            onClick={scrollToTop}
            className="px-2 py-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors rounded-full flex-shrink-0"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </>
      )}
      </motion.nav>
    </div>
  );
}
