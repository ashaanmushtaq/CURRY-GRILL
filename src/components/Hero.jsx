import React, { useState, useEffect } from 'react';
import './Hero.css';

// ===== FONT AWESOME IMPORTS =====
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faArrowRight, faStar, faPlay } from '@fortawesome/free-solid-svg-icons';

const Hero = ({ onMenuClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-3d">
      {/* ===== 3D ANIMATED BACKGROUND ===== */}
      <div className="hero-bg-3d">
        <div className="bg-layer layer-1"></div>
        <div className="bg-layer layer-2"></div>
        <div className="bg-layer layer-3"></div>
      </div>

      {/* ===== FLOATING PARTICLES ===== */}
      <div className="hero-particles">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`
            }}
          ></div>
        ))}
      </div>

      {/* ===== FLOATING FOOD ICONS ===== */}
      <div className="floating-icons">
        <span className="float-icon" style={{ top: '10%', left: '5%', animationDelay: '0s' }}>🍛</span>
        <span className="float-icon" style={{ top: '15%', right: '8%', animationDelay: '2s' }}>🥘</span>
        <span className="float-icon" style={{ bottom: '20%', left: '10%', animationDelay: '4s' }}>🍗</span>
        <span className="float-icon" style={{ bottom: '25%', right: '5%', animationDelay: '1s' }}>🍚</span>
        <span className="float-icon" style={{ top: '50%', left: '2%', animationDelay: '3s' }}>🌶️</span>
        <span className="float-icon" style={{ top: '45%', right: '2%', animationDelay: '5s' }}>🧄</span>
      </div>

      {/* ===== 3D GLOW ORBS ===== */}
      <div className="glow-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div 
        className="hero-content-3d"
        style={{
          transform: `rotateX(${mousePosition.y * 3}deg) rotateY(${mousePosition.x * 3}deg) translateZ(50px)`
        }}
      >
        {/* Badge */}
        <div className="hero-badge">
          <FontAwesomeIcon icon={faStar} />
          <span>Premium Indian & Pakistani Cuisine</span>
          <FontAwesomeIcon icon={faStar} />
        </div>

        {/* Main Title */}
        <h1 className="hero-title">
          <span className="title-line-left"></span>
          <span className="title-text">
            Welcome to <span className="highlight-3d">Curry Grill</span>
          </span>
          <span className="title-line-right"></span>
        </h1>

        {/* Subtitle */}
        <div className="hero-subtitle-wrapper">
          <div className="quote-mark quote-left">"</div>
          <p className="hero-description">
            <span className="accent-3d">La force de Curry Grill ?</span> 
            Un menu unique réunissant les saveurs authentiques 
            des cuisines pakistanaise et indienne en un seul endroit.
          </p>
          <div className="quote-mark quote-right">"</div>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years of Excellence</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Authentic Dishes</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="hero-actions">
          <button 
            className="hero-btn-3d primary" 
            onClick={onMenuClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FontAwesomeIcon icon={faUtensils} />
            View Menu
            <FontAwesomeIcon icon={faArrowRight} className={`btn-arrow ${isHovered ? 'active' : ''}`} />
          </button>
          
          {/* <button className="hero-btn-3d secondary">
            <FontAwesomeIcon icon={faPlay} />
            Watch Story
          </button> */}
        </div>

        {/* Scroll Indicator */}
        {/* <div className="scroll-indicator">
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-line">
            <span></span>
          </div>
        </div> */}
      </div>

      {/* ===== BOTTOM DECORATION ===== */}
      <div className="hero-bottom-decoration">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default Hero;