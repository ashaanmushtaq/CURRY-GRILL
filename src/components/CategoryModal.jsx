import React, { useState } from 'react';
import './CategoryModal.css';
import { imageMap } from '../data/menuData';

const CategoryModal = ({ category, items, icon, onClose }) => {
  const [imageError, setImageError] = useState(false);
  const categoryImage = imageMap[category];

  return (
    <div className="category-overlay" onClick={onClose}>
      <div className="category-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>✕</button>
        <div className="category-modal-header">
          <div className="category-modal-image-wrap">
            {!imageError && categoryImage ? (
              <img
                src={categoryImage}
                alt={category}
                className="category-modal-image"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="category-modal-icon-fallback">
                <i className={icon}></i>
              </div>
            )}
          </div>
          <h2><i className={icon} style={{marginRight:12}}></i>{category}</h2>
        </div>
        {items && items.map((item, idx) => (
          <div key={idx} className="menu-item">
            <span>
              <span className="item-name">{item.name}</span>
              <span className="item-desc">{item.desc}</span>
            </span>
            <span className="item-price">{item.price}</span>
          </div>
        ))}
        {!items && <p style={{color:'#b3a498'}}>Aucun élément trouvé.</p>}
      </div>
    </div>
  );
};

export default CategoryModal;