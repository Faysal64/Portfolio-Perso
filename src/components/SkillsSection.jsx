import React from 'react';
import '../styles/SkillsSection.css';

function SkillsSection() {
  return (
    <section className="skills-section">
      <h2>Mes Compétences</h2>
      <div className="skills-grid">
        {[
          ['html5', 'HTML5'],
          ['css3', 'CSS3'],
          ['javascript', 'JavaScript'],
          ['react', 'React'],
          ['redux', 'Redux'],
          ['sass', 'Sass'],
          ['vscode', 'VS Code'],
          ['git', 'Git'],
          ['github', 'GitHub']
        ].map(([name, label]) => (
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