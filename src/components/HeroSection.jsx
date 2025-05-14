import React from 'react';
import Profil from '../assets/images/profil.png';
import '../styles/HeroSection.css';


function HeroSection() {
  return (
    <section className="hero-section">
      <div className="main-content">
        <div className="text-content">
          <h1>
            <span className="intro">Hello !</span><br />
            <span className="first-name">Moi c’est</span> <span className="last-name">Faysal.</span>
          </h1>
          <h2>Développeur Front-end</h2>
          <p>
            Ensemble, réalisons des projets innovants. <br />
            À distance ou sur site, je suis prêt à relever de nouveaux défis.
          </p>
          <div className="buttons">
            <a href="#contact" className="btn primary">Contactez-moi</a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn secondary">Voir sur GitHub</a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn download">
              <span className="icon">⬇</span> Télécharger mon CV
            </a>
          </div>
        </div>
        <div className="image-content">
          <img src={Profil} alt="Faysal Driouach" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;