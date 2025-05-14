import '../styles/ProjectsSection.css';

function ProjectsSection() {
  return (
    <section className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        <div className="project-column">
          <div className="project-card">
            <h3>eSponsors</h3>
            <p>Projet de formation (HTML/CSS/PHP/BdD/CodeIgniter)</p>
          </div>
          <div className="project-card">
            <h3>Mon Portefolio Vite/React</h3>
            <p>Développé en React avec Vite, CSS custom et responsive design</p>
          </div>
        </div>
        <div className="project-column">
          <div className="project-card">
            <h3>Emmaüs Cernay</h3>
            <p>Site WordPress réalisé durant mon stage chez Annei</p>
          </div>
          <div className="project-card">
            <h3>App Gestion Bancaire</h3>
            <p>Application React front avec backend Node/Express + MongoDB</p>
          </div>
        </div>
        <div className="project-column">
          <div className="project-card">
            <h3>Respawn</h3>
            <p>Projet de bar e-sport : HTML + CSS uniquement</p>
          </div>
          <div className="project-card">
            <h3>Convertisseur d’unités</h3>
            <p>Mini projet JavaScript avec calculs dynamiques d’unités</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;