import React from 'react';
import '../styles/ProjectsSection.css';
import projectsData from '../data/projects.json';

function ProjectsSection() {
  return (
    <section id='projets' className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
    {projectsData.map((project, index) => (
    <a
      key={index}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <img
        src={`${import.meta.env.BASE_URL}src/assets/images/${project.image}`}
        alt={project.title}
        className="project-image"
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </a>
  ))}
</div>

    </section>
  );
}

export default ProjectsSection;
