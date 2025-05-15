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
        setShowHeader(false); // scroll vers le bas → cacher
      } else {
        setShowHeader(true); // scroll vers le haut → montrer
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
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
