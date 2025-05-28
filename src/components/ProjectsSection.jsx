import React from 'react';
import '../styles/ProjectsSection.css';
import projectsData from '../data/projects.json';
import content from '../data/content.json';

function ProjectsSection() {
  const { labels } = content;

  return (
    <section id="projets" className="projects-section">
      <h2>{labels.projectsTitle}</h2>
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
              src={`/images/${project.image}`} 
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
