import React from 'react';
import Profil from '../assets/images/Picture.png';
import '../styles/HeroSection.css';
import content from '../data/content.json';

function HeroSection() {
  const { hero } = content;

  return (
    <section id='acceuil' className="hero-section">
      <div className="main-content">
        <div className="text-content">
          <h1 className="last-name">{hero.name}</h1> {/* Affiche seulement le nom */}
          <h2>{hero.role}</h2>
          <p>{hero.description}</p>
          <div className="buttons">
            <a href="#contact" className="btn primary" title="Contact">
              <img src={hero.icons.contact} alt="Contact" />
            </a>
            <a href={hero.github} target="_blank" rel="noopener noreferrer" className="btn secondary" title="GitHub">
              <img src={hero.icons.github} alt="GitHub" />
            </a>
            <a href={hero.cv} target="_blank" rel="noopener noreferrer" className="btn download" title="Télécharger le CV">
              <img src={hero.icons.download} alt="Télécharger" />
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
