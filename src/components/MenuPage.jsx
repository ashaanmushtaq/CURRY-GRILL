import React, { useState } from 'react';
import './MenuPage.css';

// ===== FONT AWESOME IMPORTS =====
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faUtensils, 
  faChevronRight, 
  faChevronLeft,
  faCircle,
  faUtensilSpoon,
  faBowlFood,
  faEgg,
  faFire,
  faBreadSlice,
  faCow,
  faDrumstickBite,
  faFish,
  faLeaf,
  faSeedling,
  faMugSaucer,
  faCakeCandles,
  faCandyCane,
  faIceCream
} from '@fortawesome/free-solid-svg-icons';

// ========== ONLINE IMAGES ==========
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

// ========== ICON MAPPING ==========
const categoryIcons = {
  "Raitas": faBowlFood,
  "Samoussa": faEgg,
  "Grill": faFire,
  "Naan": faBreadSlice,
  "Shai Korma": faUtensils,
  "Boeuf": faCow,
  "Agneau": faDrumstickBite,
  "Fish": faFish,
  "Légumes": faLeaf,
  "Biryani": faUtensils,
  "Matar PillaO": faSeedling,
  "Lassi": faMugSaucer,
  "Kheer": faCakeCandles,
  "Halwa": faCandyCane,
  "Mango Mousse": faIceCream
};

// ========== FULL MENU DATA ==========
const fullMenuData = {
  "Raitas": [
    { name: "RAITA", desc: "Yogurt, tomate, concombre parfumés aux épices", price: "5,50 €" },
    { name: "RAITA CREVETTES", desc: "Yogurt, tomates, concombres, crevettes", price: "7,00 €" },
    { name: "RAITA AUBERGINES", desc: "Yogurt, aubergines grillées, tomate, concombre", price: "7,00 €" }
  ],
  "Samoussa": [
    { name: "SAMOUSSA LÉGUMES", desc: "Beignets fourrés aux légumes épicés", price: "6,00 €" },
    { name: "SAMOUSSA VIANDE", desc: "Beignets fourrés viande hachée de boeuf", price: "6,50 €" }
  ],
  "Grill": [
    { name: "POULET TANDOORI", desc: "Cuisse de poulet grillée au tandoor", price: "9,50 €" },
    { name: "TANDOORI KEBAB", desc: "Viande d'agneau hachée, oignons, piment vert", price: "12,00 €" }
  ],
  "Naan": [
    { name: "NAAN FROMAGE", desc: "Pain fourré au fromage fondant", price: "4,50 €" },
    { name: "NAAN NATURE", desc: "Pain à pâte levée farine de froment", price: "3,50 €" }
  ],
  "Shai Korma": [
    { name: "POULET SHAI KORMA", desc: "cajou, coco avec crème (doux)", price: "13,50 €" }
  ],
  "Boeuf": [
    { name: "BOEUF KORMA", desc: "sauce douce, amandes, coco, noix de cajou", price: "14,50 €" }
  ],
  "Agneau": [
    { name: "AGNEAU KORMA", desc: "amandes, coco, noix de cajou avec crème", price: "15,50 €" }
  ],
  "Fish": [
    { name: "FISH CURRY", desc: "saumon grillé sauce curry relevée", price: "18,00 €" }
  ],
  "Légumes": [
    { name: "DESI DAL", desc: "lentilles indiennes maison relevées", price: "8,00 €" }
  ],
  "Biryani": [
    { name: "BIRYANI POULET", desc: "riz basmati, blancs de poulet, amandes, safran", price: "17,00 €" }
  ],
  "Matar PillaO": [
    { name: "MATAR PILLAO", desc: "riz basmati aux petits pois", price: "5,50 €" }
  ],
  "Lassi": [
    { name: "LASSI NATURE", desc: "yaourt battu nature", price: "6,00 €" },
    { name: "LASSI SALÉ", desc: "yaourt salé, cumin", price: "6,00 €" },
    { name: "LASSI SUCRÉ", desc: "yaourt sucré", price: "6,00 €" },
    { name: "LASSI MANGUE", desc: "yaourt à la mangue", price: "6,00 €" },
    { name: "LASSI ROSE", desc: "yaourt parfumé à la rose", price: "6,00 €" },
    { name: "LASSI BANANE", desc: "yaourt à la banane", price: "6,00 €" }
  ],
  "Kheer": [
    { name: "KHEER", desc: "riz au lait, amandes, pistaches, noix de coco, raisins", price: "6,00 €" }
  ],
  "Halwa": [
    { name: "HALWA", desc: "gâteau de semoule aux raisins, coco, safran", price: "6,00 €" }
  ],
  "Mango Mousse": [
    { name: "MANGO MOUSSE", desc: "pulpe de mangue indienne, coco, amandes", price: "6,00 €" }
  ]
};

const MenuPage = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const allCategories = Object.keys(categoryImages);

  const handleImageError = (category) => {
    setImageErrors(prev => ({ ...prev, [category]: true }));
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsFlipped(true);
  };

  const handleBack = () => {
    setIsFlipped(false);
    setSelectedCategory(null);
  };

  return (
    <div className="menu-page-overlay">
      {/* Background Effects */}
      <div className="menu-bg-glow"></div>
      <div className="menu-bg-particles">
        {[...Array(15)].map((_, i) => (
          <span key={i} className="bg-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`
          }}></span>
        ))}
      </div>

      <div className="menu-page-container">
        {/* Close Button */}
        <button className="menu-close-btn" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h1 className="menu-page-title">
          <FontAwesomeIcon icon={faUtensils} />
          Our Premium Menu
        </h1>

        {!isFlipped ? (
          <div className="menu-vertical-list">
            {allCategories.map((category, index) => (
              <div
                key={category}
                className={`menu-vertical-card ${hoveredIndex === index ? 'hovered' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCategoryClick(category)}
              >
                {/* Glow Border */}
                <div className="card-glow-border"></div>
                
                <div className="card-content-wrapper">
                  {/* Image Section */}
                  <div className="card-image-section">
                    {!imageErrors[category] ? (
                      <img 
                        src={categoryImages[category]} 
                        alt={category}
                        className="card-image"
                        onError={() => handleImageError(category)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="card-icon-box">
                        <FontAwesomeIcon icon={categoryIcons[category] || faUtensils} />
                      </div>
                    )}
                    <div className="card-image-overlay"></div>
                  </div>
                  
                  {/* Info Section */}
                  <div className="card-info-section">
                    <h3 className="card-category-name">{category}</h3>
                    <span className="card-item-count">
                      <span className="count-number">{fullMenuData[category]?.length || 0}</span>
                      <span className="count-label">items</span>
                    </span>
                  </div>
                  
                  {/* Arrow */}
                  <div className="card-arrow-box">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                </div>

                {/* Bottom Progress */}
                <div className="card-progress-bar">
                  <span></span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Category Items View
          <div className="category-items-view">
            <button className="back-btn" onClick={handleBack}>
              <FontAwesomeIcon icon={faChevronLeft} />
              Back to Menu
            </button>
            
            <div className="category-header">
              <div className="category-icon-large">
                <FontAwesomeIcon icon={categoryIcons[selectedCategory] || faUtensils} />
              </div>
              <h2 className="category-title">{selectedCategory}</h2>
              <span className="category-total">{fullMenuData[selectedCategory]?.length} items</span>
            </div>

            <div className="items-grid">
              {fullMenuData[selectedCategory]?.map((item, index) => (
                <div 
                  key={index} 
                  className="item-card"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <div className="item-number">{index + 1}</div>
                  <div className="item-details">
                    <h4 className="item-name">{item.name}</h4>
                    <p className="item-desc">{item.desc}</p>
                  </div>
                  <div className="item-price-tag">
                    <span>{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;