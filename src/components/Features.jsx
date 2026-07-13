import React, { useState, useEffect, useRef } from 'react';
import './Features.css';

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
      
      <h2 className="features-title">
        <span className="title-line"></span>
        Why Choose Us
        <span className="title-line"></span>
      </h2>
      
      <p className="features-subtitle">
        <i className="fa-solid fa-sparkles"></i>
        Experience the difference with our premium quality
        <i className="fa-solid fa-sparkles"></i>
      </p>

      <div className={`features-grid ${isVisible ? 'visible' : ''}`}>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-box-3d ${hoveredIndex === index ? 'hovered' : ''}`}
            style={{
              animationDelay: `${index * 0.15}s`,
              '--feature-color': feature.color,
              '--feature-gradient': feature.gradient
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="feature-glass-bg"></div>
            
            {/* NEON BORDER */}
            <div className="feature-neon-border"></div>
            
            <div className="feature-particles">
              <span className="fp1"></span>
              <span className="fp2"></span>
              <span className="fp3"></span>
              <span className="fp4"></span>
              <span className="fp5"></span>
            </div>

            {/* ===== ICON IN CIRCLE ===== */}
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