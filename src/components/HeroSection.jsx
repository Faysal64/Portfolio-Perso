import React from 'react';
import Profil from '../assets/images/Picture.png';
import '../styles/HeroSection.css';
import content from '../data/content.json';

function HeroSection() {
  const { hero, labels } = content;

  return (
    <section id='acceuil' className="hero-section">
      <div className="main-content">
        <div className="text-content">
          <h1>
            <span className="intro">{hero.intro}</span><br />
            <span className="first-name">{hero.firstName}</span> <span className="last-name">{hero.name}</span>
          </h1>
          <h2>{hero.role}</h2>
          <p>{hero.description}</p>
          <div className="buttons">
            <a href="#contact" className="btn primary">{labels.contactButton}</a>
            <a href={hero.github} target="_blank" rel="noopener noreferrer" className="btn secondary">{labels.githubButton}</a>
            <a href={hero.cv} target="_blank" rel="noopener noreferrer" className="btn download">
              <span className="icon">⬇</span> {labels.downloadCV}
            </a>
          </div>
        </div>
        <div className="image-content">
          <img src={Profil} alt={hero.name} />
        </div>
      </div>
    </section>        
  );
}

export default HeroSection;
