import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoImg from '../assets/Logo_1.png';

const Navbar = ({ onMenuClick }) => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (link, e) => {
    e.preventDefault();
    setActiveLink(link);
    setIsMobileMenuOpen(false);

    if (link === 'Menu') {
      onMenuClick('menu');
    // } else if (link === 'Menu Midi') {
    //   onMenuClick('midi');
    } else {
      const targetId = link.toLowerCase().replace(' ', '-');
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else if (link === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navItems = ['Home', 'Menu', 'Contact'];

  return (
    <header className={`lux-navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="lux-navbar">
        {/* LOGO BRANDING */}
        <a href="#" className="lux-brand" onClick={(e) => handleNavClick('Home', e)}>
          <div className="logo-img-wrapper">
            <img src={logoImg} alt="Curry Grill Logo" className="logo-image" />
          </div>
          <span className="brand-title">
            Curry <span className="highlight-amber">Grill</span>
          </span>
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="lux-nav-links">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`nav-item ${activeLink === item ? 'active' : ''}`}
              onClick={(e) => handleNavClick(item, e)}
            >
              <span>{item}</span>
              {activeLink === item && <span className="active-dot"></span>}
            </a>
          ))}
        </div>

        {/* ACTION / HAMBURGER TOGGLE */}
        <div className="lux-nav-actions">

          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      {/* CLEAN & MODERN MOBILE DRAWER */}
      <div className={`lux-mobile-drawer ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="drawer-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
        
        <div className="drawer-panel">
          {/* TOP HEADER WITH ABSOLUTE CLOSE BUTTON (ZERO OVERLAP) */}
          <div className="drawer-header">
            <div className="drawer-brand">
              <img src={logoImg} alt="Curry Grill" className="drawer-logo-img" />
              <span className="brand-title">Curry <span className="highlight-amber">Grill</span></span>
            </div>

            <button 
              className="drawer-close-btn" 
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* MINIMAL NAV LINKS */}
          <div className="drawer-body">
            <div className="drawer-links-container">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`drawer-link ${activeLink === item ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(item, e)}
                >
                  <span>{item}</span>
                  {activeLink === item && <span className="link-dot"></span>}
                </a>
              ))}
            </div>
          </div>

        
        </div>
      </div>
    </header>
  );
};

export default Navbar;