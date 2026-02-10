'use client';

import { useState, useEffect } from 'react';
import NavbarTabs from '@/components/NavbarTabs';
import ContentContainer from '@/components/ContentContainer';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';

export type TabType = 'about' | 'experience' | 'projects';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Bar - Fixed at top */}
      <NavbarTabs 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isScrolled={isScrolled}
      />
      
      <main className="min-h-screen flex flex-col items-center p-4 md:p-8 pt-20 md:pt-24">
        <div className="w-full max-w-5xl space-y-8">

        {/* Content Container - No background, no borders */}
        <div className="overflow-hidden">
          <ContentContainer activeTab={activeTab}>
            {activeTab === 'about' && <AboutSection />}
            {activeTab === 'experience' && <ExperienceSection />}
            {activeTab === 'projects' && <ProjectsSection />}
          </ContentContainer>
        </div>
      </div>
    </main>
    </>
  );
}
