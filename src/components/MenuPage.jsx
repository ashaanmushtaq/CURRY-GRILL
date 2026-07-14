import React, { useState } from 'react';
import './MenuPage.css';

// ===== LUNCH IMAGES =====
import lunchBowlImg from '../assets/Lunch/big Bowl.png';
import smallBowlImg from '../assets/Lunch/small Bowl.png';
import naanSimpleImg from '../assets/Lunch/NAAN FROMAGE Simple.png';
import naanTenderImg from '../assets/Lunch/NAAN FROMAGE Tender.png';
import naanSikhKebabImg from '../assets/Lunch/NAAN FROMAGE Sikh Kabab.png';
import naanSteakImg from '../assets/Lunch/NAAN FROMAGE Steak.png';
import naanPayazImg from '../assets/Lunch/NAAN FROMAGE Payaz.png';
import naanCheeseImg from '../assets/Lunch/NAAN FROMAGE.png';

// ===== FONT AWESOME IMPORTS =====
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faUtensils, 
  faChevronRight, 
  faChevronLeft,
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

// ========== MAIN MENU IMAGES ==========
import raitasImg from '../assets/Raita.png';
import samoussaImg from '../assets/Samosa.png';
import chickenImg from '../assets/chiken.png';
import naanImg from '../assets/naan.png';
import beefImg from '../assets/beef.png';
import lambImg from '../assets/lamb.png';
import fishImg from '../assets/fish.png';
import vegetablesImg from '../assets/vigitables.png';
import biryaniImg from '../assets/baryani.png';
import riceImg from '../assets/riz.png';
import lassiImg from '../assets/lissi.png';
import kheerImg from '../assets/kheer.png';
import halwaImg from '../assets/halva.png';
import mangoImg from '../assets/ango mouse.png';
import lunchImg from '../assets/Lunch/big Bowl.png';

// ========== IMAGE MAPPING ==========
const categoryImages = {
  "Raitas": raitasImg,
  "Samoussa": samoussaImg,
  "Grill": chickenImg,
  "Naan": naanImg,
  "Shai Korma": chickenImg,
  "Boeuf": beefImg,
  "Agneau": lambImg,
  "Fish": fishImg,
  "Légumes": vegetablesImg,
  "Biryani": biryaniImg,
  "Matar PillaO": riceImg,
  "Lassi": lassiImg,
  "Kheer": kheerImg,
  "Halwa": halwaImg,
  "Mango Mousse": mangoImg,
  "Lunch": lunchImg
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
  "Mango Mousse": faIceCream,
  "Lunch": faBowlFood
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
    { name: "SAMOUSSA VIANDE", desc: "Beignets fourrés viande hachée de boeuf", price: "6,50 €" },
    { name: "OIGNON BHAJA", desc: "Beignets d'oignons aux épices", price: "6,00 €" },
    { name: "CHICKEN PAKORA", desc: "Beignets de poulet marinés aux épices", price: "6,00 €" },
    { name: "AUBERGINE PAKORA", desc: "Beignets d'aubergines et pomme de terre aux épices", price: "5,50 €" },
    { name: "CHEESE PAKORA", desc: "Beignets de fromage aux épices", price: "6,50 €" }
  ],
  "Grill": [
    { name: "POULET TANDOORI", desc: "Cuisse de poulet grillée au tandoor", price: "9,50 €" },
    { name: "TANDOORI KEBAB", desc: "Viande d'agneau hachée, oignons, piment vert", price: "12,00 €" },
    { name: "POULET TIKKA", desc: "Blanc de poulet mariné, doré au tandoor", price: "10,50 €" },
    { name: "FISH TIKKA", desc: "Brochette de saumon grillée au tandoor", price: "11,50 €" },
    { name: "GAMBAS GEANTES TANDOORI", desc: "2 pièces grillées", price: "25,00 €" },
    { name: "AGNEAU TIKKA", desc: "Filet d'agneau mariné et grillé", price: "13,00 €" },
    { name: "TANDOORI MIXED GRILL", desc: "1 pièce agneau, poulet, poisson, kebab et gambas", price: "26,00 €" }
  ],
  "Naan": [
    { name: "NAAN FROMAGE", desc: "Pain fourré au fromage fondant", price: "4,50 €" },
    { name: "NAAN NATURE", desc: "Pain à pâte levée farine de froment", price: "3,50 €" },
    { name: "CHAPPATI", desc: "Pain à farine complète", price: "3,50 €" },
    { name: "NAAN BUTTER", desc: "Pain à pâte levée, fourré au beurre", price: "3,50 €" },
    { name: "NAAN AIL CORIANDRE", desc: "Pain à pâte levée à l'ail et coriandre", price: "4,50 €" },
    { name: "NAAN AIL FROMAGE", desc: "Pain à pâte levée, fourré à l'ail et fromage fondant", price: "5,00 €" },
    { name: "NAAN KEEMA", desc: "Pain à pâte levée fourré viande hachée de boeuf", price: "6,50 €" }
  ],
  "Shai Korma": [
    { name: "POULET SHAI KORMA", desc: "Cajou, coco avec crème, saveur douce", price: "13,50 €" },
    { name: "POULET BUTTER", desc: "Poulet mariné, grillé dans une sauce douce aux noix de cajou et coco", price: "14,50 €" },
    { name: "POULET JALFREZI", desc: "Sauce épicée avec poivrons et légumes", price: "13,50 €" },
    { name: "POULET VINDALOO", desc: "Blanc de poulet sauce épicée forte", price: "13,50 €" },
    { name: "POULET TIKKA MASSALA", desc: "Blancs de poulet grillés, oignons, tomate, gingembre", price: "13,50 €" },
    { name: "POULET CURRY", desc: "Blancs de poulet cuisinés sauce curry doux", price: "13,50 €" },
    { name: "POULET MADRAS", desc: "Plat du sud de l'Inde assez relevé", price: "13,50 €" },
    { name: "POULET PALAK", desc: "Suprême de poulet aux épinards, épices et coriandre", price: "14,50 €" },
    { name: "POULET TIKKA PALAK", desc: "Suprême de poulet mariné, grillé et cuit avec épinards frais", price: "16,50 €" }
  ],
  "Boeuf": [
    { name: "BOEUF KORMA", desc: "Boeuf dans une sauce douce, amandes, coco, noix de cajou", price: "14,50 €" },
    { name: "BOEUF KRAI", desc: "Préparé avec tomate, gingembre, citron", price: "14,00 €" },
    { name: "BOEUF CURRY", desc: "Boeuf préparé avec une sauce douce au curry", price: "14,50 €" },
    { name: "BOEUF MADRAS", desc: "Plat du sud de l'Inde assez relevé", price: "14,50 €" },
    { name: "BOEUF VINDALOO", desc: "Boeuf sauce épicée forte", price: "15,00 €" },
    { name: "BOEUF JALFRÉZI", desc: "Boeuf, poivrons, épices", price: "15,00 €" },
    { name: "BOEUF MASSALA", desc: "Sauce tomate, oignon, poivrons, gingembre, coriandre", price: "14,50 €" }
  ],
  "Agneau": [
    { name: "AGNEAU KORMA", desc: "Agneau aux amandes, coco, noix de cajou avec crème", price: "15,50 €" },
    { name: "AGNEAU JALFRÉZI", desc: "Agneau, poivrons, épices", price: "16,00 €" },
    { name: "AGNEAU PALAK", desc: "Agneau aux épinards et sauce épicée", price: "16,00 €" },
    { name: "AGNEAU CURRY", desc: "Plat du Panjab aux épices douces", price: "15,00 €" },
    { name: "AGNEAU TIKKA MASSALA", desc: "Agneau grillé tandoor avec sauces épicées", price: "16,00 €" },
    { name: "AGNEAU MADRAS", desc: "Plat du sud de l'Inde assez relevé", price: "15,50 €" }
  ],
  "Fish": [
    { name: "FISH CURRY", desc: "Saumon grillé sauce curry relevée", price: "18,00 €" },
    { name: "GAMBAS MASSALA", desc: "Gambas marinées, épices douces et grillées", price: "28,00 €" },
    { name: "CREVETTES JALFRÉZI", desc: "Crevettes cuisinées avec poivrons, épices fortes", price: "18,00 €" },
    { name: "FISH TIKKA MASSALA", desc: "Saumon grillé et sauce tomate, poivrons, gingembre", price: "18,00 €" },
    { name: "FISH KORMA", desc: "Saumon grillé au tandoor aux noix de cajou, coco et crème", price: "18,00 €" },
    { name: "CREVETTES CURRY", desc: "Crevettes marinées oignon, tomate, gingembre, citron, poivrons", price: "15,00 €" },
    { name: "CREVETTES KORMA", desc: "Crevettes aux amandes, noix de cajou, coco avec crème", price: "16,50 €" }
  ],
  "Légumes": [
    { name: "DESI DAL", desc: "Lentilles indiennes maison relevées", price: "8,00 €" },
    { name: "MIX LÉGUMES", desc: "Mélange de légumes et pois chiches épicé", price: "8,00 €" },
    { name: "ALOU PALAK", desc: "Épinards, pommes de terre, épices douces", price: "8,50 €" },
    { name: "PALAK PANEER", desc: "Curry d'épinard et fromage aux épices variées", price: "12,50 €" },
    { name: "BHARTA", desc: "Caviar d'aubergines passées au tandoor et cuisinées avec épices et crème", price: "9,00 €" },
    { name: "SOUPE DAL", desc: "Préparation avec lentilles indiennes, oignons verts, coriandre", price: "8,50 €" }
  ],
  "Biryani": [
    { name: "BIRYANI POULET", desc: "Riz basmati avec blancs de poulet, amandes, citron, safran", price: "17,00 €" },
    { name: "BIRYANI AGNEAU", desc: "Riz basmati avec agneau, amandes, citron, safran", price: "18,50 €" },
    { name: "BIRYANI CREVETTES", desc: "Riz basmati avec crevettes, amandes, citron, safran", price: "18,50 €" },
    { name: "BIRYANI BOEUF", desc: "Riz basmati avec morceaux de boeuf, amandes, citron, safran", price: "17,50 €" },
    { name: "BIRYANI POISSON", desc: "Riz basmati avec poisson grillé, amandes, citron, safran", price: "19,50 €" }
  ],
  "Matar PillaO": [
    { name: "MATAR PILLAO", desc: "Riz basmati aux petits pois", price: "5,50 €" },
    { name: "CHANA PILLAO", desc: "Riz basmati aux pois chiches", price: "5,50 €" },
    { name: "RIZ KASHMIRI", desc: "Riz basmati aux raisins, fruits secs et safran", price: "6,50 €" },
    { name: "RIZ BASMATI NATURE", desc: "Riz basmati nature, léger et parfumé au safran", price: "4,50 €" },
    { name: "EGG FRIED RICE", desc: "Riz frit aux œufs, carottes, chou, haricots et poivre blanc", price: "8,00 €" }
  ],
  "Lunch": [
    { name: "LUNCH BOWL", desc: "Bowl de riz, curry maison et naan chaud", price: "12,50 €" },
    { name: "NAAN LUNCH", desc: "Naan au poulet grillé, sauce tomate et salade", price: "10,50 €" },
    { name: "SPECIAL LUNCH", desc: "Assiette spéciale avec tikka, riz et légumes", price: "13,50 €" }
  ],
  "Lunch": [
    { name: "LUNCH BOWL", desc: "Bowl de riz, curry maison et naan chaud", price: "12,50 €" },
    { name: "NAAN LUNCH", desc: "Naan au poulet grillé, sauce tomate et salade", price: "10,50 €" },
    { name: "SPECIAL LUNCH", desc: "Assiette spéciale avec tikka, riz et légumes", price: "13,50 €" }
  ],
  "Lassi": [
    { name: "LASSI NATURE", desc: "Yaourt battu nature, onctueux et rafraîchissant", price: "6,00 €" },
    { name: "LASSI SALÉ", desc: "Yaourt salé légèrement épicé avec cumin", price: "6,00 €" },
    { name: "LASSI SUCRÉ", desc: "Yaourt sucré à la douceur délicate", price: "6,00 €" },
    { name: "LASSI MANGUE", desc: "Yaourt onctueux mélangé à la pulpe de mangue", price: "6,00 €" },
    { name: "LASSI ROSE", desc: "Yaourt parfumé à la rose", price: "6,00 €" },
    { name: "LASSI BANANE", desc: "Yaourt crémeux à la banane", price: "6,00 €" },
    { name: "LEMO PANI", desc: "Limonade indienne rafraîchissante au citron vert et épices", price: "6,50 €" }
  ],
  "Kheer": [
    { name: "KHEER", desc: "Riz au lait avec amandes, pistaches, noix de coco et raisins", price: "6,00 €" }
  ],
  "Halwa": [
    { name: "HALWA", desc: "Gâteau de semoule aux raisins, coco et safran", price: "6,00 €" }
  ],
  "Mango Mousse": [
    { name: "MANGO MOUSSE", desc: "Pulpe de mangue indienne, coco, amandes, servi frais", price: "7,00 €" }
  ]
};

// ========== MENU MIDI DATA ==========
const menuMidiData = [
  {
    title: 'SANDWICH',
    subtitle: 'Frites + Boisson + Sauce incluse au choix',
    items: [
      { name: 'NAAN FROMAGE POULET TIKKA', price: '9,90 €', image: naanSimpleImg },
      { name: 'NAAN FROMAGE POULET CURRY', price: '9,90 €', image: naanTenderImg },
      { name: 'NAAN FROMAGE TENDER', price: '9,90 €', image: naanTenderImg },
      { name: 'NAAN FROMAGE SEEKH KEBAB', price: '9,90 €', image: naanSikhKebabImg },
      { name: 'NAAN FROMAGE FISH (STEAK POISSON)', price: '9,90 €', image: naanSteakImg }
    ],
    note: 'Sans Boisson Et Frites : 8,00 € Par Sandwich'
  },
  {
    title: 'NOS BOWL',
    items: [
      { name: 'BOWL PLEIN', price: '8,90 €', image: lunchBowlImg },
      { name: 'DEMI BOWL', price: '6,90 €', image: smallBowlImg }
    ]
    
  },
  {
    title: 'MENU MIDI BOWL AVEC BOISSON (Includes Drink)',
    // ===== SIRF TITLES - NO IMAGES, NO PRICE =====
    items: [
      { name: 'BOWL RIZ BASMATI SAFRAN (POULET CURRY)' },
      { name: 'BOWL RIZ BASMATI SAFRAN (POULET TIKKA MASALA)' },
      { name: 'BOWL RIZ BASMATI SAFRAN (POULET SHAHI KORMA)' },
      { name: 'BOWL RIZ BASMATI SAFRAN (BUTTER CHICKEN)' }
    ]
  }
];

const MenuPage = ({ onClose, view = 'menu' }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const isMidiView = view === 'midi';

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
        <button className="menu-close-btn" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h1 className="menu-page-title">
          <FontAwesomeIcon icon={faUtensils} />
          {isMidiView ? 'Menu Midi' : 'Our Premium Menu'}
        </h1>

        {isMidiView ? (
          <div className="midi-view">
            <div className="midi-header">
              <p className="midi-subtitle">Frites + Boisson + Sauce incluse au choix</p>
            </div>

            <div className="midi-sections">
              {menuMidiData.map((section, index) => {
                // Check if section has images (first 2 sections have images)
                const hasImages = section.items.some(item => item.image);
                
                return (
                  <section key={index} className="midi-section-card">
                    <h3 className="midi-section-title">{section.title}</h3>
                    {section.subtitle && <p className="midi-section-subtitle">{section.subtitle}</p>}
                    
                    {hasImages ? (
                      // ===== FULL SIZE CARDS (With Images) =====
                      <div className="midi-items-grid-full">
                        {section.items.map((item, itemIndex) => (
                          <div key={`${section.title}-${itemIndex}`} className="midi-item-card-full">
                            <div className="midi-item-image-wrapper">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="midi-item-image-full" 
                                loading="lazy" 
                              />
                              <div className="midi-image-overlay"></div>
                            </div>
                            <div className="midi-item-details-full">
                              <h4 className="midi-item-name-full">{item.name}</h4>
                              <div className="midi-item-bottom">
                                <span className="midi-item-price-full">{item.price}</span>
                                <span className="midi-item-number">#{itemIndex + 1}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // ===== SIRF TITLES - CENTER ALIGNED (No Images, No Price) =====
                      <div className="midi-items-list-center">
                        {section.items.map((item, itemIndex) => (
                          <div key={`${section.title}-${itemIndex}`} className="midi-item-center">
                            <span className="midi-item-name-center">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {section.note && <p className="midi-note">{section.note}</p>}
                  </section>
                );
              })}
            </div>
          </div>
        ) : !isFlipped ? (
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
                <div className="card-glow-border"></div>
                
                <div className="card-content-wrapper">
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
                  
                  <div className="card-info-section">
                    <h3 className="card-category-name">{category}</h3>
                    <span className="card-item-count">
                      <span className="count-number">{fullMenuData[category]?.length || 0}</span>
                      <span className="count-label">items</span>
                    </span>
                  </div>
                  
                  <div className="card-arrow-box">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                </div>

                <div className="card-progress-bar">
                  <span></span>
                </div>
              </div>
            ))}
          </div>
        ) : (
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