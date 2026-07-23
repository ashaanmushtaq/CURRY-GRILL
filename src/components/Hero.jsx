import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

// ===== FONT AWESOME IMPORTS =====
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';

const Hero = ({ onMenuClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [counters, setCounters] = useState({ years: 0, dishes: 0, customers: 0 });
  const [showStats, setShowStats] = useState(false);
  const heroRef = useRef(null);
  
  const fullText = "Bienvenue au Curry Grill";
  const typingSpeed = 50;

  // ===== TYPEWRITER EFFECT FOR TITLE =====
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsTypingComplete(true);
        setTimeout(() => setShowContent(true), 200);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);

  // ===== COUNTER ANIMATION FOR NUMBERS =====
  useEffect(() => {
    if (showStats) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      const targets = { years: 15, dishes: 50, customers: 1000 };
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const eased = 1 - Math.pow(1 - progress, 3);
        
        setCounters({
          years: Math.round(eased * targets.years),
          dishes: Math.round(eased * targets.dishes),
          customers: Math.round(eased * targets.customers)
        });

        if (currentStep >= steps) {
          setCounters({
            years: targets.years,
            dishes: targets.dishes,
            customers: targets.customers
          });
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [showStats]);

  // ===== SCROLL OBSERVER FOR STATS =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowStats(true);
        } else {
          setShowStats(false);
          setCounters({ years: 0, dishes: 0, customers: 0 });
        }
      },
      { threshold: 0.3 }
    );

    const currentHero = heroRef.current;
    if (currentHero) {
      observer.observe(currentHero);
    }

    return () => {
      if (currentHero) {
        observer.unobserve(currentHero);
      }
    };
  }, []);

  // ===== 3D MOUSE TRACKING =====
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
    <section className="hero-3d" ref={heroRef}>
      {/* ===== 3D ANIMATED BACKGROUND ===== */}
      <div className="hero-bg-3d">
        <div className="bg-layer layer-1"></div>
        <div className="bg-layer layer-2"></div>
        <div className="bg-layer layer-3"></div>
      </div>

      {/* ===== FLOATING PARTICLES ===== */}
      <div className="hero-particles">
        {[...Array(40)].map((_, i) => (
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
          transform: `rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg) translateZ(30px)`
        }}
      >
        {/* Badge */}
        <div className="hero-badge">
          <FontAwesomeIcon icon={faStar} />
          <span>Cuisine Indienne & Pakistanaise</span>
          <FontAwesomeIcon icon={faStar} />
        </div>

        {/* Main Title with Typewriter */}
        <h1 className="hero-title">
          <span className="title-line-left"></span>
          <span className="title-text">
            {displayText}
            <span className={`cursor ${isTypingComplete ? 'blink' : ''}`}>|</span>
          </span>
          <span className="title-line-right"></span>
        </h1>

        {/* Subtitle */}
        <div className="hero-subtitle-wrapper">
          <div className="quote-mark quote-left">"</div>
          <p className={`hero-description ${showContent ? 'visible' : ''}`}>
            <span className="accent-3d">"La force de Curry Grill ?"</span> 
            Un menu unique réunissant les saveurs authentiques 
            des cuisines pakistanaise et indienne en un seul endroit.
          </p>
          <div className="quote-mark quote-right">"</div>
        </div>

        {/* Stats with Counter Animation */}
        <div className={`hero-stats ${showContent ? 'visible' : ''}`}>
          <div className="stat-item">
            <span className="stat-number">{counters.years}+</span>
            <span className="stat-label">Ans d'excellence</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">{counters.dishes}+</span>
            <span className="stat-label">Plats authentiques</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">{counters.customers}+</span>
            <span className="stat-label">Clients satisfaits</span>
          </div>
        </div>

        {/* Buttons */}
        <div className={`hero-actions ${showContent ? 'visible' : ''}`}>
          <button 
            className="hero-btn-3d" 
            onClick={onMenuClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <FontAwesomeIcon icon={faUtensils} />
            Voir le Menu
            <FontAwesomeIcon icon={faArrowRight} className={`btn-arrow ${isHovered ? 'active' : ''}`} />
          </button>
        </div>
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