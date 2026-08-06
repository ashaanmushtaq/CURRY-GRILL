import React, { useEffect, useRef } from 'react';
import './Features.css';

const Features = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  // ===== ULTRA-FAST INTERSECTION OBSERVER =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ===== 120 FPS HARDWARE ACCELERATED TILT (NO REACT STATE) =====
  const applyTilt = (card, clientX, clientY) => {
    if (!card) return;

    // Use requestAnimationFrame for hardware-synced smooth movement
    window.requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Calculate percentage coordinates (-1 to 1)
      const percentX = (x / rect.width - 0.5) * 2;
      const percentY = (y / rect.height - 0.5) * 2;

      // Direct CSS Variables update (Bypasses React Re-renders completely)
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.setProperty('--rot-x', `${-percentY * 12}deg`);
      card.style.setProperty('--rot-y', `${percentX * 12}deg`);
      card.style.setProperty('--card-scale', `1.03`);
    });
  };

  const handleMouseMove = (e, index) => {
    applyTilt(cardRefs.current[index], e.clientX, e.clientY);
  };

  const handleTouchMove = (e, index) => {
    if (e.touches && e.touches[0]) {
      applyTilt(cardRefs.current[index], e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleReset = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    window.requestAnimationFrame(() => {
      card.style.setProperty('--rot-x', `0deg`);
      card.style.setProperty('--rot-y', `0deg`);
      card.style.setProperty('--card-scale', `1`);
    });
  };

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 14c4-8 10-11 16-12-1 6-4 12-13 16 0 0-1 1-3 0s0-4 0-4Z" />
          <path d="M5 18c2-1 4-2 6-4" />
        </svg>
      ),
      title: "Haute Qualité",
      desc: "Aliments frais, sains, naturels et durables.",
      color: "#4CAF50",
      gradient: "linear-gradient(135deg, #4CAF50, #8BC34A)"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 15h14l-1.5-5a4 4 0 0 0-4-3h-3a4 4 0 0 0-4 3L5 15Z" />
          <path d="M8 15v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2" />
        </svg>
      ),
      title: "Grands Chefs",
      desc: "Cuisiniers professionnels de classe mondiale",
      color: "#FF9800",
      gradient: "linear-gradient(135deg, #FF9800, #FFC107)"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 15c1-3 3-5 5-7 2 2 4 4 6 7-3 1-6 1-11 0Z" />
          <path d="M7 14c1 1 2 2 3 3" />
          <path d="M12 12c1 1 2 2 3 3" />
          <path d="M10 10c1 1 2 2 3 3" />
        </svg>
      ),
      title: "Meilleure Viande",
      desc: "Viande fraîche, tendre, saine et savoureuse",
      color: "#E91E63",
      gradient: "linear-gradient(135deg, #E91E63, #FF5722)"
    }
  ];

  return (
    <div className="features-section" ref={sectionRef}>
      <div className="features-bg-glow"></div>
      
      <h2 className="features-title reveal-item">
        <span className="title-line left"></span>
        Pourquoi Nous Choisir
        <span className="title-line right"></span>
      </h2>
      
      <p className="features-subtitle reveal-item">
        <i className="fa-solid fa-sparkles"></i>
        Découvrez la différence avec notre qualité premium
        <i className="fa-solid fa-sparkles"></i>
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="feature-box-3d reveal-item"
            style={{
              '--feature-color': feature.color,
              '--feature-gradient': feature.gradient,
              '--delay': `${index * 0.12}s`
            }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleReset(index)}
            onTouchMove={(e) => handleTouchMove(e, index)}
            onTouchEnd={() => handleReset(index)}
          >
            {/* Dynamic GPU-accelerated spotlight */}
            <div className="feature-spotlight"></div>
            <div className="feature-glass-bg"></div>
            <div className="feature-neon-border"></div>
            
            <div className="feature-particles">
              <span className="fp1"></span>
              <span className="fp2"></span>
              <span className="fp3"></span>
              <span className="fp4"></span>
              <span className="fp5"></span>
            </div>

            <div className="feature-icon-wrapper">
              <div className="feature-icon-ring">
                <div className="feature-icon-glow"></div>
                {feature.icon}
              </div>
            </div>

            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>

            <div className="feature-progress">
              <div className="feature-progress-bar"></div>
            </div>

            <div className="feature-corner corner-tl"></div>
            <div className="feature-corner corner-tr"></div>
            <div className="feature-corner corner-bl"></div>
            <div className="feature-corner corner-br"></div>
          </div>
        ))}
      </div>

      <div className="features-bottom-line">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Features;