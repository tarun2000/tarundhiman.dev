'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/data/experience';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 pb-8 border-l-2 border-neutral-200 dark:border-neutral-700 last:border-l-0 last:pb-0 group"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-neutral-900 border-2 border-[#39ff14] shadow-[0_0_8px_rgba(57,255,20,0.6)] group-hover:scale-125 transition-transform duration-200" />
      
      <motion.div
        whileHover={{ x: 0 }}
        className="bg-neutral-50 dark:bg-black rounded-xl p-6  transition-all duration-200"
      >
        <div className="flex flex-col mb-3">
          <div className="mb-3">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
              {experience.company}
            </h3>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
              {experience.role}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-neutral-500 dark:text-neutral-400">
              {experience.period.split(' - ')[0]}
            </span>
            {experience.period.includes('Present') && (
              <span className="px-2 py-0.5 text-xs font-semibold text-[#39ff14] bg-[#39ff14]/10 dark:bg-[#39ff14]/20 rounded-md border border-[#39ff14]/30 shadow-[0_0_4px_rgba(57,255,20,0.3)]">
                Present
              </span>
            )}
            {!experience.period.includes('Present') && (
              <span className="text-neutral-500 dark:text-neutral-400">
                - {experience.period.split(' - ')[1]}
              </span>
            )}
            {experience.location.includes('Remote') && (
              <>
                {experience.location.includes(',') ? (
                  <>
                    <span className="text-neutral-500 dark:text-neutral-400">
                      {experience.location.split(',')[1].trim()}
                    </span>
                    <span className="px-2 py-0.5 text-xs font-semibold text-[#39ff14] bg-[#39ff14]/10 dark:bg-[#39ff14]/20 rounded-md border border-[#39ff14]/30 shadow-[0_0_4px_rgba(57,255,20,0.3)]">
                      Remote
                    </span>
                  </>
                ) : (
                  <span className="px-2 py-0.5 text-xs font-semibold text-[#39ff14] bg-[#39ff14]/10 dark:bg-[#39ff14]/20 rounded-md border border-[#39ff14]/30 shadow-[0_0_4px_rgba(57,255,20,0.3)]">
                    Remote
                  </span>
                )}
              </>
            )}
            {!experience.location.includes('Remote') && (
              <span className="text-neutral-500 dark:text-neutral-400">
                {experience.location}
              </span>
            )}
          </div>
        </div>
        
        <ul className="space-y-2 mt-4">
          {experience.bullets.map((bullet, idx) => (
            <li key={idx} className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex items-start">
              <span className="mr-2 text-neutral-400 dark:text-neutral-500">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
