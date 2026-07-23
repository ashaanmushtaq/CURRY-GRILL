import React, { useState, useEffect, useRef } from 'react';
import './MenuCard.css';
import { imageMap } from '../data/menuData';

const MenuCard = ({ category, icon, onClick }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  
  const categoryImage = imageMap[category];

  // ===== SCROLL REVEAL ANIMATION =====
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`menu-card ${isHovered ? 'hovered' : ''} ${isVisible ? 'visible' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glass Background with Gradient */}
      <div className="card-glass-bg"></div>
      
      {/* Neon Border Glow */}
      <div className="card-neon-border"></div>
      
      {/* Floating Particles */}
      <div className="particles">
        <span className="particle p1"></span>
        <span className="particle p2"></span>
        <span className="particle p3"></span>
        <span className="particle p4"></span>
        <span className="particle p5"></span>
      </div>
      
      {/* Card Content */}
      <div className="card-content-wrapper">
        {/* Image or Icon */}
        <div className="card-image-container">
          {!imageError && categoryImage ? (
            <img 
              src={categoryImage} 
              alt={category}
              className="card-image"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="card-icon-fallback">
              <i className={icon}></i>
            </div>
          )}
          {/* Image Glow Overlay */}
          <div className="image-glow-overlay"></div>
        </div>
        
        {/* Category Info */}
        <div className="card-info">
          <h3 className="category-name">{category}</h3>
          <span className="category-sub">Appuyez pour explorer</span>
        </div>
        
        {/* Arrow Indicator */}
        <div className="card-arrow">
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
      
      {/* Bottom Glow Line */}
      <div className="card-bottom-glow"></div>
    </div>
  );
};

export default MenuCard;