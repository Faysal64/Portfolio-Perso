import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>Me contacter</h2>

        <p className="contact-mail">fdriouach10@gmail.com</p>

        <form className="contact-form">
          <label>Email</label>
          <input type="email" placeholder="john@doe.fr" required />

          <label>Message</label>
          <textarea placeholder="Que souhaitez-vous dire ?" required></textarea>

          <button type="submit">ENVOYER</button>
        </form>

        <p className="footer-text">
          Ce site a été réalisé à la main et ne collecte aucune donnée.
          Vous pouvez trouver le code source sur <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>.
          Merci de votre visite, passez une bonne journée ! 👋
        </p>
      </div>
    </footer>
  );
}

export default Footer;
