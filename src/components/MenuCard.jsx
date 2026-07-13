import React, { useState } from 'react';
import './MenuCard.css';

// Online images for each category
const categoryImages = {
  "Raitas": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop",
  "Samoussa": "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=300&fit=crop",
  "Grill": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=300&fit=crop",
  "Naan": "https://images.unsplash.com/photo-1565557623262-b5c3c3f7a9d3?w=300&h=300&fit=crop",
  "Shai Korma": "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=300&h=300&fit=crop",
  "Boeuf": "https://images.unsplash.com/photo-1558030006-450675393462?w=300&h=300&fit=crop",
  "Agneau": "https://images.unsplash.com/photo-1603048297172-c9244455b9c9?w=300&h=300&fit=crop",
  "Fish": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300&h=300&fit=crop",
  "Légumes": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop",
  "Biryani": "https://images.unsplash.com/photo-1563379091339-03b21bb4c89e?w=300&h=300&fit=crop",
  "Matar PillaO": "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=300&h=300&fit=crop",
  "Lassi": "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=300&fit=crop",
  "Kheer": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop",
  "Halwa": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&h=300&fit=crop",
  "Mango Mousse": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop"
};

const MenuCard = ({ category, icon, onClick }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`menu-card ${isHovered ? 'hovered' : ''}`}
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
          {!imageError ? (
            <img 
              src={categoryImages[category]} 
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
          <span className="category-sub">tap to explore</span>
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