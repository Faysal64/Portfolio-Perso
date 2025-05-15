import React from 'react';
import Header from './components/Header';
import Footer from './components/footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import Fond from './assets/images/Fond.png'; // ← import de ton image de fond


function App() {
  return (
    <div>
      {/* ✅ Ce bloc aura le fond */}
      <div
        className="hero-background-wrapper"
        style={{
          backgroundImage: `url(${Fond})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Header />
        <HeroSection />
      </div>

      {/* ✅ Le reste sans fond */}
      <main>
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
