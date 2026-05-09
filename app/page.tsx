'use client';

import { useCallback, useEffect, useState } from 'react';
import NavbarTabs from '@/components/NavbarTabs';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import EngineeringDepthSection from '@/components/EngineeringDepthSection';
import ExperienceSection from '@/components/ExperienceSection';
import NowSection from '@/components/NowSection';
import ContactSection from '@/components/ContactSection';
import CommandPalette from '@/components/CommandPalette';
import { navItems, SectionId } from '@/data/site';

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  const scrollToSection = useCallback((section: SectionId) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(section);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id as SectionId);
        }
      },
      { rootMargin: '-25% 0px -55% 0px', threshold: [0.12, 0.24, 0.4] }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isCommandShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';
      if (!isCommandShortcut) return;

      event.preventDefault();
      setIsCommandOpen((value) => !value);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <NavbarTabs
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenCommandPalette={() => setIsCommandOpen(true)}
        isScrolled={isScrolled}
      />
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onNavigate={scrollToSection}
      />

      <main className="mx-auto min-h-screen w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeroSection onNavigate={scrollToSection} />
        <ProjectsSection />
        <EngineeringDepthSection />
        <ExperienceSection />
        <NowSection />
        <ContactSection />
      </main>
    </>
  );
}
