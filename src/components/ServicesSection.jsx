import React from 'react';
import '../styles/ServicesSection.css';
import content from '../data/content.json';

function ServicesSection() {
  const { services, labels } = content;

  return (
    <section id='services' className="services-section">
      <h2>{labels.servicesTitle}</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={`/src/assets/images/${service.image}`} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;