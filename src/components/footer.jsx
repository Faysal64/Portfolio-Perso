import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer id='contact' className="footer">
      <div className="footer-container">
        <h2>Me contacter</h2>

        <p className="contact-mail">faysaldriouach.64@gmail.com</p>

        <form 
        className="contact-form" 
        method="POST" 
        action="https://formspree.io/f/xyzwvkyj"
        >
        <label>Email</label>
        <input 
        type="email" 
        name="email"               
        placeholder="john@doe.fr" 
        required 
        />

        <label>Message</label>
        <textarea 
         name="message"             
        placeholder="Que souhaitez-vous dire ?" 
        required
        ></textarea>

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
