import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/LogoF.png';
import '../styles/Header.css';

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
          <a href="#acceuil">ACCEUIL</a>
          <a href="#services">SERVICES</a>
          <a href="#projets">PROJETS</a>
          <a href="#competences">COMPETENCES</a>
          <a href="#formations">FORMATIONS</a>
          <a href="#contact" className="contact-button">CONTACT</a>

        </nav>
      </div>
    </header>
  );
}

export default Header;
