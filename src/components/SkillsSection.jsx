import React from 'react';
import '../styles/SkillsSection.css';
import content from '../data/content.json';

function SkillsSection() {
  const { skills, labels } = content;

  return (
    <section id='competences' className="skills-section">
      <h2>{labels.skillsTitle}</h2>
      <div className="skills-grid">
        {skills.map(([name, label]) => (
          <div key={name} className="skill-card">
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`}
              alt={label}
            />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;