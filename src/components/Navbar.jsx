import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onMenuClick }) => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleNavClick = (link, e) => {
    e.preventDefault();
    setActiveLink(link);
    
    if (link === 'Menu' || link === 'Menu Midi') {
      onMenuClick(); // Open menu page
    } else {
      const section = document.getElementById(link.toLowerCase().replace(' ', '-'));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">🍛 Curry Grill</div>
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