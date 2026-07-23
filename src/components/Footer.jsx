import React, { useState, useEffect, useRef } from 'react';
import './Footer.css';

// ===== FONT AWESOME IMPORTS =====
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faLink, 
  faChevronRight, 
  faLocationDot, 
  faPhone, 
  faCopyright,
  faClock
} from '@fortawesome/free-solid-svg-icons';

import {
  faEnvelope,
  faAddressCard,
  faHeart
} from '@fortawesome/free-regular-svg-icons';

import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  // ===== SCROLL REVEAL =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { icon: faFacebookF, color: "#1877F2", label: "Facebook", link: "https://facebook.com/currygrill" },
    { icon: faInstagram, color: "#E4405F", label: "Instagram", link: "https://instagram.com/currygrill" },
    { icon: faTwitter, color: "#1DA1F2", label: "Twitter", link: "https://twitter.com/currygrill" },
    { icon: faLinkedinIn, color: "#0A66C2", label: "LinkedIn", link: "https://linkedin.com/company/currygrill" },
    { icon: faYoutube, color: "#FF0000", label: "YouTube", link: "https://youtube.com/@currygrill" }
  ];

  const quickLinks = [
    { name: "Accueil", link: "#home" },
    { name: "Menu Midi", link: "#menu-midi" },
    { name: "Menu Complet", link: "#menu" },
    { name: "Contact", link: "#contact" }
  ];

  const contactInfo = [
    { icon: faLocationDot, text: "28 Place Charles De Gaulle, 59270 Bailleul, France" },
    { icon: faPhone, text: "03 10 44 15 52" },
    { icon: faEnvelope, text: "currygrill18@gmail.com" }
  ];

  return (
    <footer className="footer-3d" ref={footerRef}>
      {/* Background Glow */}
      <div className="footer-glow"></div>
      
      {/* Top Line */}
      <div className="footer-top-line">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="footer-content">
        {/* Brand Column */}
        <div className={`footer-col-3d brand-col ${isVisible ? 'visible' : ''}`}>
          <div className="footer-logo">
            <span className="logo-icon">🍛</span>
            <h2>Curry Grill</h2>
          </div>
          <p className="brand-desc">
            Cuisine pakistanaise et indienne authentique, servie avec passion et tradition depuis 2020.
          </p>
          <div className="brand-badge">
            <FontAwesomeIcon icon={faStar} />
            <span>Qualité Premium</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className={`footer-col-3d ${isVisible ? 'visible' : ''}`}>
          <h4>
            <FontAwesomeIcon icon={faLink} />
            Liens Rapides
          </h4>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.link}>
                  <FontAwesomeIcon icon={faChevronRight} />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className={`footer-col-3d ${isVisible ? 'visible' : ''}`}>
          <h4>
            <FontAwesomeIcon icon={faAddressCard} />
            Contact
          </h4>
          <ul className="contact-list">
            {contactInfo.map((item, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours & Social */}
        <div className={`footer-col-3d ${isVisible ? 'visible' : ''}`}>
          <h4>
            <FontAwesomeIcon icon={faClock} />
            Horaires
          </h4>
          <div className="hours-container">
            <div className="hour-item">
              <span className="day">Lun - Dim</span>
              <div className="time-slots">
                <span className="time">12:00 - 14:30</span>
                <span className="time">18:00 - 22:30</span>
              </div>
            </div>
          </div>

          <div className="social-section">
            <h5>Suivez-nous</h5>
            <div className="social-icons-3d">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon-3d ${hoveredSocial === index ? 'hovered' : ''}`}
                  style={{
                    '--social-color': social.color
                  }}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                  <span className="social-tooltip">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`footer-bottom ${isVisible ? 'visible' : ''}`}>
        <div className="footer-bottom-content">
          <p className="copyright">
            <FontAwesomeIcon icon={faCopyright} />
            {currentYear} Curry Grill. Tous droits réservés.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Politique de confidentialité</a>
            <span className="divider">|</span>
            <a href="#">Conditions d'utilisation</a>
            <span className="divider">|</span>
            <a href="#">Cookies</a>
          </div>
          <p className="credit">
            Fait avec <FontAwesomeIcon icon={faHeart} /> par Bellanix Tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;