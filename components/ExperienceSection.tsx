'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/experience';
import ExperienceCard from './ExperienceCard';

export default function ExperienceSection() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          My professional journey so far.
        </h2>
      </motion.div>

      <div className="relative">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
}
