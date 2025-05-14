import React from 'react';
import Applications from '../assets/images/Applications.png';
import UXphoto from '../assets/images/UXphoto.png';
import SEO from '../assets/images/SEO.png';
import '../styles/ServicesSection.css';

function ServicesSection() {
  return (
    <section className="services-section">
      <h2>Mes services</h2>
      <div className="services-grid">
        <div className="service-card">
          <img src={Applications} alt="Applications" />
          <h3>Applications</h3>
          <p>Développe des sites vitrines, e-commerce, applications web, mobile ou de bureau.</p>
        </div>
        <div className="service-card">
          <img src={UXphoto} alt="UX & Design" />
          <h3>Expérience utilisateur & Design</h3>
          <p>Une expérience fluide et intuitive pour vos utilisateurs, du wireframe au produit fini.</p>
        </div>
        <div className="service-card">
          <img src={SEO} alt="SEO" />
          <h3>Accessibilité</h3>
          <p>HTML sémantique, ARIA, navigation clavier : un web ouvert à tous, sans barrière.</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;