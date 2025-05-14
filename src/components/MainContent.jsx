import React from 'react';
import '../styles/MainContent.css';
import Profil from '../assets/images/profil.png';
import Applications from '../assets/images/Applications.png';
import UXphoto from '../assets/images/UXphoto.png';
import SEO from '../assets/images/SEO.png';

function MainContent() {
  return (
    <main>

      {/* --------- HERO --------- */}
      <section className="hero-section">  {/* PAS de style ici */}
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

      {/* --------- SERVICES --------- */}
      <section className="services-section">
        <h2>Mes services</h2>
        <div className="services-grid">

          <div className="service-card">
            <img
              src={Applications}
              alt="Applications"
            />
            <h3>Applications</h3>
            <p>Développe des sites vitrines, e-commerce, applications web, mobile ou de bureau.</p>
          </div>

          <div className="service-card">
            <img
              src={UXphoto}
              alt="UX & Design"
            />
            <h3>Expérience utilisateur & Design</h3>
            <p>Une expérience fluide et intuitive pour vos utilisateurs, du wireframe au produit fini.</p>
          </div>

          <div className="service-card">
            <img
              src={SEO}
              alt="SEO"
            />
            <h3>Accessibilité</h3>
            <p>HTML sémantique, ARIA, navigation clavier : un web ouvert à tous, sans barrière.</p>
          </div>

        </div>
      </section>

      {/* --------- PROJETS --------- */}
      <section className="projects-section">
        <h2>Mes Projets</h2>
        <div className="projects-grid">

          {/* Colonne 1 */}
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

          {/* Colonne 2 */}
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

          {/* Colonne 3 */}
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

      <section className="skills-section">
  <h2>Mes Compétences</h2>
  <div className="skills-grid">
    <div className="skill-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
      <span>HTML5</span>
    </div>
    <div className="skill-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
      <span>CSS3</span>
    </div>
    <div className="skill-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
      <span>JavaScript</span>
    </div>
    <div className="skill-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
      <span>React</span>
    </div>
    <div className="skill-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" />
      <span>Redux</span>
    </div>
    <div className="skill-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" />
      <span>Sass</span>
    </div>
    <div className="skill-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" />
      <span>VS Code</span>
    </div>
    <div className="skill-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
      <span>Git</span>
    </div>
    <div className="skill-card">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
      <span>GitHub</span>
    </div>
  </div>
</section>


    </main>
  );
}

export default MainContent;
