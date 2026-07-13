import React from 'react';
import MenuCard from './MenuCard';
import './MenuGrid.css';

const MenuGrid = ({ categories, iconMap, onCategoryClick }) => {
  return (
    <>
      <h2 className="section-title">Nos plats au curry grillés</h2>
      <div className="menu-grid">
        {categories.map((cat) => (
          <MenuCard 
            key={cat}
            category={cat}
            icon={iconMap[cat]}
            onClick={() => onCategoryClick(cat)}
          />
        ))}
      </div>
    </>
  );
};

export default MenuGrid;