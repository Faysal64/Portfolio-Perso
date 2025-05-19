// 📁 src/components/Header.jsx
import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/LogoF.png';
import '../styles/Header.css';
import content from '../data/content.json';

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { header } = content;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
      <div className="header-container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <nav className="nav-links">
          <a href="#acceuil">{header.home}</a>
          <a href="#services">{header.services}</a>
          <a href="#projets">{header.projects}</a>
          <a href="#competences">{header.skills}</a>
          <a href="#formations">{header.formations}</a>
          <a href="#contact" className="contact-button">{header.contact}</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
