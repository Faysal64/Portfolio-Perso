import React from 'react';
import '../styles/Footer.css';
import content from '../data/content.json';

function Footer() {
  const { footer, labels } = content;

  return (
    <footer id='contact' className="footer">
      <div className="footer-container">
        <h2>{labels.contactTitle}</h2>

        <p className="contact-mail">{footer.email}</p>

        <form 
        className="contact-form" 
        method="POST" 
        action="https://formspree.io/f/xyzwvkyj"
        >
        <label>{labels.emailLabel}</label>
        <input 
        type="email" 
        name="email"               
        placeholder="john@doe.fr" 
        required 
        />

        <label>{labels.messageLabel}</label>
        <textarea 
         name="message"             
        placeholder={labels.messagePlaceholder} 
        required
        ></textarea>

        <button type="submit">{labels.sendButton}</button>
      </form>

        <p className="footer-text">{footer.text}</p>
      </div>
    </footer>
  );
}

export default Footer;