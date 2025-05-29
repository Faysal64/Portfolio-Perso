import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import Formations from './components/Formations';
import SkillsSection from './components/SkillsSection';

function Home() {
  return (
    <>
      <div
        className="hero-background-wrapper"
        style={{
          backgroundImage: `url(/images/Fond.png)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Header />
        <HeroSection />
      </div>

      <main>
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <Formations />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
