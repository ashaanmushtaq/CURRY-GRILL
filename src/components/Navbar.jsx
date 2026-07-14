import React, { useState } from 'react';
import './Navbar.css';
import logoImg from '../assets/Logo_1.png';

const Navbar = ({ onMenuClick }) => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleNavClick = (link, e) => {
    e.preventDefault();
    setActiveLink(link);
    
    if (link === 'Menu') {
      onMenuClick('menu');
    } else if (link === 'Menu Midi') {
      onMenuClick('midi');
    } else {
      const section = document.getElementById(link.toLowerCase().replace(' ', '-'));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImg} alt="Curry Grill Logo" className="logo-image" />
        <span>Curry Grill</span>
      </div>
      <div className="nav-links">
        {['Home', 'Menu Midi', 'Menu', 'Contact'].map((link) => (
          <a
            key={link}
            href="#"
            className={activeLink === link ? 'active' : ''}
            onClick={(e) => handleNavClick(link, e)}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;