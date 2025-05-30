import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import content from '../data/content.json';

const  Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { header } = content;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowHeader(currentY < lastScrollY);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
      <div className="header-container">
        <div className="logo">
          <img src="/images/LogoF.png" alt="Logo" /> 
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <span className="close">&#10005;</span> 
          ) : (
            <>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </>
          )}
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#acceuil" onClick={toggleMenu}>{header.home}</a>
          <a href="#services" onClick={toggleMenu}>{header.services}</a>
          <a href="#projets" onClick={toggleMenu}>{header.projects}</a>
          <a href="#competences" onClick={toggleMenu}>{header.skills}</a>
          <a href="#formations" onClick={toggleMenu}>{header.formations}</a>
          <a href="#contact" onClick={toggleMenu}>{header.contact}</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
