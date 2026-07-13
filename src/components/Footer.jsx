import React, { useState } from 'react';
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
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: faFacebookF, color: "#1877F2", label: "Facebook", link: "https://facebook.com/currygrill" },
    { icon: faInstagram, color: "#E4405F", label: "Instagram", link: "https://instagram.com/currygrill" },
    { icon: faTwitter, color: "#1DA1F2", label: "Twitter", link: "https://twitter.com/currygrill" },
    { icon: faLinkedinIn, color: "#0A66C2", label: "LinkedIn", link: "https://linkedin.com/company/currygrill" },
    { icon: faYoutube, color: "#FF0000", label: "YouTube", link: "https://youtube.com/@currygrill" }
  ];

  const quickLinks = [
    { name: "Home", link: "#" },
    { name: "Menu Midi", link: "#" },
    { name: "Full Menu", link: "#" },
    { name: "Contact", link: "#" }
  ];

  const contactInfo = [
    { icon: faLocationDot, text: "28 Place Charles De Gaulle, 59270 Bailleul, France" },
    { icon: faPhone, text: "03 10 44 15 52" },
    { icon: faEnvelope, text: "currygrill18@gmail.com" }
  ];

  return (
    <footer className="footer-3d">
      {/* 3D Shapes */}
      <div className="shape-3d"></div>
      <div className="shape-3d"></div>
      <div className="shape-3d"></div>
      
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
        <div className="footer-col-3d brand-col">
          <div className="footer-logo">
            <span className="logo-icon">🍛</span>
            <h2>Curry Grill</h2>
          </div>
          <p className="brand-desc">
            Authentic Pakistani & Indian cuisine served with passion and tradition since 2020.
          </p>
          <div className="brand-badge">
            <FontAwesomeIcon icon={faStar} />
            <span>Premium Quality</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col-3d">
          <h4>
            <FontAwesomeIcon icon={faLink} />
            Quick Links
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
        <div className="footer-col-3d">
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
        <div className="footer-col-3d">
          <h4>
            <FontAwesomeIcon icon={faClock} />
            Hours
          </h4>
          <div className="hours-container">
            <div className="hour-item">
              <span className="day">Mon - Sun</span>
              <div className="time-slots">
                <span className="time">12:00 - 14:30</span>
                <span className="time">18:00 - 22:30</span>
              </div>
            </div>
          </div>

          {/* Social Section */}
          <div className="social-section">
            <h5>Follow Us</h5>
            <div className="social-icons-3d">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon-3d ${hoveredSocial === index ? 'hovered' : ''}`}
                  style={{
                    '--social-color': social.color,
                    animationDelay: `${index * 0.1}s`
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
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            <FontAwesomeIcon icon={faCopyright} />
            {currentYear} Curry Grill. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#">Terms of Service</a>
            <span className="divider">|</span>
            <a href="#">Cookies</a>
          </div>
          <p className="credit">
            Made with <FontAwesomeIcon icon={faHeart} /> by Bellanix Tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;