// src/components/Formations.jsx
import React from 'react';
import '../styles/Formations.css';

function Formations() {
  const data = [
    {
      year: '2024 - 2025',
      title: 'Développeur Intégrateur Web',
      subtitle: 'Formation OpenClassrooms'
    },
    {
      year: '2020 - 2022',
      title: 'BTS Commerce International',
      subtitle: 'Lycée Saint-John Perse à Pau'
    },
    {
      year: '2019 - 2020',
      title: 'Baccalauréat STMG',
      subtitle: 'Lycée Louis Barthou à Pau'
    }
  ];

  return (
    <section id='formations' className="formations-section">
      <h2>Mes Formations</h2>
      <div className="timeline">
        {data.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="content">
              <span className="year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
        <div className="line" />
      </div>
    </section>
  );
}

export default Formations;
