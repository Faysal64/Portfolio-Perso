import React, { useState } from 'react';
import '../styles/Footer.css';
import content from '../data/content.json';
import MentionsLegalesModal from './MentionsLegalesModal';

function Footer() {
  const { footer, labels } = content;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <h2>{labels.contactTitle}</h2>

        <form 
          className="contact-form" 
          method="POST" 
          action="https://formspree.io/f/xyzwvkyj"
        >
          <label>{labels.firstNameLabel}</label>
          <input type="text" name="prenom" placeholder="Jean" required />

          <label>{labels.lastNameLabel}</label>
          <input type="text" name="nom" placeholder="Dupont" required />

          <label>{labels.emailLabel}</label>
          <input type="email" name="email" placeholder="john@doe.fr" required />

          <label>{labels.subjectLabel}</label>
          <input type="text" name="objet" placeholder={labels.subjectPlaceholder} required />

          <label>{labels.messageLabel}</label>
          <textarea name="message" placeholder={labels.messagePlaceholder} required></textarea>

          <button type="submit">{labels.sendButton}</button>

          <p className="email-footer-note">
            {footer.note} <strong>{footer.email}</strong>
          </p>
        </form>

        <p className="footer-legal">
          © {new Date().getFullYear()} {footer.author}. {footer.rights} <br />
          <button 
            className="legal-link" 
            onClick={() => setIsModalOpen(true)}
          >
            {footer.mentions}
          </button>
        </p>

        <MentionsLegalesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </footer>
  );
}

export default Footer;
