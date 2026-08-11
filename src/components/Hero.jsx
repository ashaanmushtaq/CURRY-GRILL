import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import doorImg from '../assets/door.avif';
import kababImg from '../assets/kabab.avif';

const dynamicHeadings = [
  { line1: "L'Art de La", highlight: "Cuisine", line3: "Authentique" },
  { line1: "L'Excellence des", highlight: "Saveurs", line3: "Ancestrales" },
  { line1: "Une Expérience", highlight: "Gastronomique", line3: "Unique" }
];

const Hero = ({ onMenuClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [headingIndex, setHeadingIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [counters, setCounters] = useState({ years: 0, dishes: 0, customers: 0 });
  const [motionEnabled, setMotionEnabled] = useState(true);
  
  // Dynamic Scroll In-View Tracking for every re-trigger
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const heroRef = useRef(null);

  // ===== AUTO HEADING ROTATION =====
  useEffect(() => {
    const headingInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setHeadingIndex((prev) => (prev + 1) % dynamicHeadings.length);
        setFade(true);
      }, 280);
    }, 3600);

    return () => clearInterval(headingInterval);
  }, []);

  // ===== 3D MOUSE PARALLAX =====
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = navigator.maxTouchPoints > 0 || 'ontouchstart' in window;
    const isSmallViewport = window.innerWidth < 900;

    if (prefersReducedMotion || isTouchDevice || isSmallViewport) {
      setMotionEnabled(false);
      return;
    }

    let frameId = null;
    const handleMouseMove = (e) => {
      if (!motionEnabled || frameId) return;
      frameId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 30;
        const y = (e.clientY / innerHeight - 0.5) * 30;
        setMousePos({ x, y });
        frameId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [motionEnabled]);

  // ===== EVERY-TIME SCROLL RE-TRIGGER OBSERVER =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true);
        } else {
          // Screen se baahar jaate hi reset kardo taaki har baar scroll par animate ho
          setIsHeroVisible(false);
          setCounters({ years: 0, dishes: 0, customers: 0 });
        }
      },
      { threshold: 0.2 } // 20% visible hotay hi triggering shuru
    );

    const currentRef = heroRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // ===== 3D NUMERIC COUNTER ANIMATION =====
  useEffect(() => {
    if (!isHeroVisible) return;
    
    const duration = 2200;
    const steps = 60;
    const interval = duration / steps;
    const targets = { years: 15, dishes: 50, customers: 1000 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const ease = 1 - Math.pow(1 - progress, 4);

      setCounters({
        years: Math.round(ease * targets.years),
        dishes: Math.round(ease * targets.dishes),
        customers: Math.round(ease * targets.customers)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isHeroVisible]);

  const currentHeading = dynamicHeadings[headingIndex];

  return (
    <section 
      ref={heroRef} 
      className={`lux-hero-section ${isHeroVisible ? 'in-view' : 'out-of-view'}`}
    >
      {/* 3D ATMOSPHERE & CYBER GRID */}
      <div className="lux-bg-container">
        <div className="cyber-3d-grid-floor"></div>
        <div 
          className="lux-bg-image"
          style={{
            transform: `scale(1.1) translate3d(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px, 0)`
          }}
        ></div>
        <div className="lux-bg-vignette"></div>
        <div className="lux-bg-glow glow-1"></div>
        <div className="lux-bg-glow glow-2"></div>
      </div>

      {/* KINETIC SCROLL WATERMARK */}
      <div className="lux-watermark-text anim-element delay-1">
        <span style={{ transform: `translateX(${mousePos.x * 2.5}px)` }}>
          CURRY GRILL • FINE DINING • PAKISTANI & INDIAN GASTRONOMY •
        </span>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="lux-hero-wrapper">
        
        {/* LEFT SIDE: TEXT CONTENT WITH STAGGERED SCROLL ANIMATIONS */}
        <div className="lux-col-left">
          
          {/* BADGE */}
          <div className="lux-badge cyber-glass-badge anim-element delay-1">
            <span className="badge-pulse-dot"></span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
            </svg>
            <span>Haute Gastronomie Indienne & Pakistanaise</span>
          </div>

          {/* HEADING */}
          <h1 className={`lux-main-heading anim-element delay-2 ${fade ? 'fade-in' : 'fade-out'}`}>
            <span className="line-1">{currentHeading.line1}</span>
            <span className="line-2 highlight-amber">{currentHeading.highlight}</span>
            <span className="line-3">{currentHeading.line3}</span>
          </h1>

          {/* DESCRIPTION */}
          <div className="lux-desc-box anim-element delay-3">
            <div className="desc-accent-bar"></div>
            <p className="lux-description">
              Plongez au cœur d'une expérience culinaire d'exception. 
              <strong> Curry Grill</strong> réunit la richesse des épices pakistanaises 
              et le raffinement des traditions indiennes dans un cadre prestigieux.
            </p>
          </div>

          {/* BUTTON & RATING */}
          <div className="lux-action-group anim-element delay-4">
            <button className="btn-amber-glow" onClick={onMenuClick}>
              <span>Voir le menu</span>
              <div className="btn-icon-circle">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </button>

            <div className="lux-rating-pill">
              <div className="stars">
                {"★★★★★".split("").map((star, idx) => (
                  <span key={idx}>{star}</span>
                ))}
              </div>
              <span className="rating-text">4.9 / 5.0 (500+ Avis)</span>
            </div>
          </div>

          {/* 3D COUNTERS */}
          <div className="lux-stats-container">
            <div className="stat-block-3d anim-element delay-5">
              <div className="stat-glow-bg"></div>
              <div className="stat-card-inner">
                <span className="stat-num-3d">{counters.years}<em className="glow-plus">+</em></span>
                <span className="stat-lbl">Ans d'Excellence</span>
              </div>
            </div>

            <div className="stat-block-3d anim-element delay-6">
              <div className="stat-glow-bg"></div>
              <div className="stat-card-inner">
                <span className="stat-num-3d">{counters.dishes}<em className="glow-plus">+</em></span>
                <span className="stat-lbl">Plats Signature</span>
              </div>
            </div>

            <div className="stat-block-3d anim-element delay-7">
              <div className="stat-glow-bg"></div>
              <div className="stat-card-inner">
                <span className="stat-num-3d">{counters.customers.toLocaleString()}<em className="glow-plus">+</em></span>
                <span className="stat-lbl">Clients Satisfaits</span>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE: 3D STAGE STAGGERED SCROLL ANIMATION */}
        <div className="lux-col-right anim-element delay-3">
          
          <div className="cyber-holo-ring ring-1"></div>
          <div className="cyber-holo-ring ring-2"></div>
          <div className="cyber-laser-beam"></div>

          <div 
            className="image-composition-frame-3d"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 0.8}deg) rotateX(${-mousePos.y * 0.8}deg)`
            }}
          >
            {/* MAIN DISH CARD */}
            <div className="main-dish-card-3d">
              <div className="card-scanline"></div>
              <img 
                src={doorImg} 
                alt="Restaurant indoor seating and ambiance" 
                className="dish-img"
                decoding="async"
                loading="lazy"
              />
              <div className="card-glass-overlay-3d">
                <div className="dish-info">
                  <span className="dish-tag">ESPACES INTERNES</span>
                  <h3>Ambiance chaleureuse du restaurant</h3>
                  <p>Découvrez une atmosphère élégante idéale pour savourer votre repas.</p>
                </div>
              </div>
              <div className="hud-corner hud-tl"></div>
              <div className="hud-corner hud-tr"></div>
              <div className="hud-corner hud-bl"></div>
              <div className="hud-corner hud-br"></div>
            </div>

            {/* FLOATING CARD 1 */}
            <div 
              className="floating-accent-card-3d anim-element delay-5"
              style={{
                transform: `translate3d(${mousePos.x * -1}px, ${mousePos.y * -1}px, 80px)`
              }}
            >
              <img 
                src={kababImg} 
                alt="Kabab special" 
                loading="lazy"
                decoding="async"
              />
              <div className="accent-card-details">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#F5A623">
                  <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.46 3.91 3.45 4.38L6 22h2l.55-8.62C10.54 12.91 12 11.12 12 9V2h-1v7zm7-7v20h2V2h-2z"/>
                </svg>
                <div>
                  <strong>Grillades au Tandoor</strong>
                  <span>Cuisiné au feu de bois</span>
                </div>
              </div>
            </div>

            {/* FLOATING BADGE 2 */}
            <div 
              className="floating-time-badge-3d anim-element delay-6"
              style={{
                transform: `translate3d(${mousePos.x * 0.7}px, ${mousePos.y * 0.7}px, 50px)`
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div>
                <strong>12:00 - 14:30</strong>
                <span>18:00 - 22:30</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* FOOTER BAR */}
      <div className="lux-bottom-bar anim-element delay-8">
        <div className="bar-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#F5A623">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span>Une ambiance raffinée et chaleureuse</span>
        </div>
        <div className="bar-line"></div>
        <div className="bar-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#F5A623">
            <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99z"/>
          </svg>
          <span>Produits Frais & Épices Sélectionnées</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
