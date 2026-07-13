import React from 'react';
import './CategoryModal.css';

const CategoryModal = ({ category, items, icon, onClose }) => {
  return (
    <div className="category-overlay" onClick={onClose}>
      <div className="category-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose}>✕</button>
        <h2><i className={icon} style={{marginRight:12}}></i>{category}</h2>
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