import React from 'react';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';

function MainContent() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
}

export default MainContent;