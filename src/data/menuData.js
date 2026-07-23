// ========== IMAGE IMPORTS ==========
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

// ========== FULL MENU DATA - FRENCH ==========
export const fullMenuData = {
  "Entrées Froides": [
    { name: "RAITA", desc: "Yaourt, tomate, concombre parfumés aux épices", price: "5,50 €" },
    { name: "RAITA CREVETTES", desc: "Yaourt, tomates, concombres, crevettes", price: "7,00 €" },
    { name: "RAITA AUBERGINES", desc: "Yaourt, aubergines grillées, tomate, concombre", price: "7,00 €" }
  ],
  "Samossas & Pakora": [
    { name: "SAMOUSSA LÉGUMES", desc: "Beignets fourrés aux légumes épicés", price: "6,00 €" },
    { name: "SAMOUSSA VIANDE", desc: "Beignets fourrés à la viande hachée de bœuf", price: "6,50 €" },
    { name: "OIGNON BHAJA", desc: "Beignets d'oignons aux épices", price: "6,00 €" },
    { name: "CHICKEN PAKORA", desc: "Beignets de poulet marinés aux épices", price: "6,00 €" },
    { name: "AUBERGINE PAKORA", desc: "Beignets d'aubergines et pomme de terre", price: "5,50 €" },
    { name: "CHEESE PAKORA", desc: "Beignets de fromage aux épices", price: "6,50 €" }
  ],
  "Grillades Tandoori": [
    { name: "POULET TANDOORI", desc: "Cuisse de poulet grillée au tandoor", price: "9,50 €" },
    { name: "TANDOORI KEBAB", desc: "Viande d'agneau hachée, oignons, piment vert", price: "12,00 €" },
    { name: "POULET TIKKA", desc: "Blanc de poulet mariné, doré au tandoor", price: "10,50 €" },
    { name: "FISH TIKKA", desc: "Brochette de saumon grillée au tandoor", price: "11,50 €" },
    { name: "GAMBAS GÉANTES TANDOORI", desc: "2 pièces de gambas grillées", price: "25,00 €" },
    { name: "AGNEAU TIKKA", desc: "Filet d'agneau mariné et grillé au tandoor", price: "13,00 €" },
    { name: "GRILL MIXTE TANDOORI", desc: "Assortiment d'agneau, poulet, poisson, kebab et gambas", price: "26,00 €" }
  ],
  "Pains Indiens": [
    { name: "NAAN FROMAGE", desc: "Pain fourré au fromage fondant (non piquant)", price: "4,50 €" },
    { name: "NAAN NATURE", desc: "Pain à pâte levée farine de froment", price: "3,50 €" },
    { name: "CHAPPATI", desc: "Pain à farine complète", price: "3,50 €" },
    { name: "NAAN BEURRE", desc: "Pain fourré au beurre", price: "3,50 €" },
    { name: "NAAN AIL CORIANDRE", desc: "Pain à l'ail et à la coriandre", price: "4,50 €" },
    { name: "NAAN AIL FROMAGE", desc: "Pain à l'ail et au fromage fondant", price: "5,00 €" },
    { name: "NAAN KEEMA", desc: "Pain fourré à la viande hachée de bœuf", price: "6,50 €" }
  ],
  "Plats de Poulet": [
    { name: "POULET TIKKA PALAK", desc: "Suprême de poulet mariné et grillé, épinards frais", price: "16,50 €" },
    { name: "POULET BUTTER", desc: "Poulet mariné, sauce douce aux noix de cajou et coco", price: "14,50 €" },
    { name: "POULET SHAHI KORMA", desc: "Poulet sauce douce aux noix de cajou, coco et crème", price: "13,50 €" },
    { name: "POULET JALFREZI", desc: "Poulet sauce épicée aux poivrons (fort)", price: "13,50 €" },
    { name: "POULET VINDALOO", desc: "Blanc de poulet sauce épicée (très fort)", price: "13,50 €" },
    { name: "POULET TIKKA MASSALA", desc: "Blancs de poulet grillés aux oignons, tomate, gingembre", price: "13,50 €" },
    { name: "POULET CURRY", desc: "Blancs de poulet cuisinés sauce curry (doux)", price: "13,50 €" },
    { name: "POULET MADRAS", desc: "Plat du sud de l'Inde assez relevé", price: "13,50 €" },
    { name: "POULET PALAK", desc: "Suprême de poulet aux épinards et coriandre fraîche", price: "14,50 €" }
  ],
  "Plats de Bœuf": [
    { name: "BŒUF KORMA", desc: "Bœuf sauce douce aux amandes, coco et noix de cajou", price: "14,50 €" },
    { name: "BŒUF KRAI", desc: "Bœuf préparé avec tomate, gingembre, citron (moyen)", price: "14,00 €" },
    { name: "BŒUF CURRY", desc: "Bœuf préparé avec une sauce douce au curry", price: "14,50 €" },
    { name: "BŒUF MADRAS", desc: "Plat du sud de l'Inde assez relevé", price: "14,50 €" },
    { name: "BŒUF VINDALOO", desc: "Bœuf sauce épicée (fort)", price: "15,00 €" },
    { name: "BŒUF JALFRÉZI", desc: "Bœuf aux poivrons et épices", price: "15,00 €" },
    { name: "BŒUF MASSALA", desc: "Sauce tomate, oignon, poivrons, gingembre, coriandre", price: "14,50 €" }
  ],
  "Plats d'Agneau": [
    { name: "AGNEAU KORMA", desc: "Agneau aux amandes, coco et noix de cajou (doux)", price: "15,50 €" },
    { name: "AGNEAU JALFRÉZI", desc: "Agneau aux poivrons et épices", price: "16,00 €" },
    { name: "AGNEAU PALAK", desc: "Agneau aux épinards et sauce épicée (moyen)", price: "16,00 €" },
    { name: "AGNEAU CURRY", desc: "Plat du Penjab aux épices douces", price: "15,00 €" },
    { name: "AGNEAU TIKKA MASSALA", desc: "Agneau grillé au tandoor avec sauces épicées", price: "16,00 €" },
    { name: "AGNEAU MADRAS", desc: "Plat du sud de l'Inde assez relevé", price: "15,50 €" }
  ],
  "Poissons & Crevettes": [
    { name: "FISH CURRY", desc: "Saumon grillé sauce curry relevée", price: "18,00 €" },
    { name: "GAMBAS MASSALA", desc: "Gambas marinées aux épices douces grillées", price: "28,00 €" },
    { name: "CREVETTES JALFRÉZI", desc: "Crevettes aux poivrons et épices (fort)", price: "18,00 €" },
    { name: "FISH TIKKA MASSALA", desc: "Saumon grillé sauce tomates, poivrons, gingembre", price: "18,00 €" },
    { name: "FISH KORMA", desc: "Saumon grillé aux noix de cajou, coco et crème", price: "18,00 €" },
    { name: "CREVETTES CURRY", desc: "Crevettes marinées oignon, tomate, gingembre, citron", price: "15,00 €" },
    { name: "CREVETTES KORMA", desc: "Crevettes aux amandes, noix de cajou, coco (doux)", price: "16,50 €" }
  ],
  "Légumes": [
    { name: "DESI DAL", desc: "Lentilles indiennes maison relevées", price: "8,00 €" },
    { name: "MIX LÉGUMES", desc: "Mélange de légumes et pois chiches épicé", price: "8,00 €" },
    { name: "ALOU PALAK", desc: "Épinards, pommes de terre, épices douces", price: "8,50 €" },
    { name: "PALAK PANEER", desc: "Curry d'épinards et fromage aux épices variées", price: "12,50 €" },
    { name: "BHARTA", desc: "Caviar d'aubergines passées au tandoor, épices et crème", price: "9,00 €" },
    { name: "SOUPE DAL", desc: "Lentilles indiennes, oignons verts, coriandre", price: "8,50 €" }
  ],
  "Biryani": [
    { name: "BIRYANI POULET", desc: "Riz basmati aux blancs de poulet, amandes, safran", price: "17,00 €" },
    { name: "BIRYANI AGNEAU", desc: "Riz basmati à l'agneau, amandes, citron, safran", price: "18,50 €" },
    { name: "BIRYANI CREVETTES", desc: "Riz basmati aux crevettes, amandes, safran", price: "18,50 €" },
    { name: "BIRYANI BŒUF", desc: "Riz basmati au bœuf, amandes, citron, safran", price: "17,50 €" },
    { name: "BIRYANI POISSON", desc: "Riz basmati au poisson grillé, amandes, safran", price: "19,50 €" }
  ],
  "Plats de Riz": [
    { name: "MATAR PILLAO", desc: "Riz basmati aux petits pois", price: "5,50 €" },
    { name: "CHANA PILLAO", desc: "Riz basmati aux pois chiches", price: "5,50 €" },
    { name: "RIZ KASHMIRI", desc: "Riz basmati aux raisins, fruits secs et safran", price: "6,50 €" },
    { name: "RIZ BASMATI NATURE", desc: "Riz basmati nature, léger et parfumé au safran", price: "4,50 €" },
    { name: "RIZ FRIT AUX ŒUFS", desc: "Riz frit aux œufs, carottes, chou et poivre blanc", price: "8,00 €" }
  ],
  "Boissons": [
    { name: "LASSI NATURE", desc: "Yaourt battu nature, onctueux et rafraîchissant", price: "6,00 €" },
    { name: "LASSI SALÉ", desc: "Yaourt salé légèrement épicé au cumin", price: "6,00 €" },
    { name: "LASSI SUCRÉ", desc: "Yaourt sucré à la douceur délicate", price: "6,00 €" },
    { name: "LASSI MANGUE", desc: "Yaourt à la pulpe de mangue exotique", price: "6,00 €" },
    { name: "LASSI ROSE", desc: "Yaourt parfumé à la rose, délicat et subtil", price: "6,00 €" },
    { name: "LASSI BANANE", desc: "Yaourt crémeux à la banane, doux et nourrissant", price: "6,00 €" },
    { name: "LEMO PANI", desc: "Limonade indienne au citron vert, épices douces et rose", price: "6,50 €" }
  ],
  "Desserts": [
    { name: "KHEER", desc: "Riz au lait aux amandes, pistaches, noix de coco, raisins secs", price: "6,00 €" },
    { name: "HALWA", desc: "Gâteau de semoule aux raisins, coco, safran, servi tiède", price: "6,00 €" },
    { name: "MOUSSE À LA MANGUE", desc: "Pulpe de mangue indienne, coco, amandes, façon mousse", price: "6,00 €" }
  ]
};

// ========== ICON MAP ==========
export const iconMap = {
  "Entrées Froides": "fa-solid fa-bowl-food",
  "Samossas & Pakora": "fa-solid fa-egg",
  "Grillades Tandoori": "fa-solid fa-fire",
  "Pains Indiens": "fa-solid fa-bread-slice",
  "Plats de Poulet": "fa-solid fa-drumstick-bite",
  "Plats de Bœuf": "fa-solid fa-cow",
  "Plats d'Agneau": "fa-solid fa-drumstick-bite",
  "Poissons & Crevettes": "fa-solid fa-fish",
  "Légumes": "fa-solid fa-leaf",
  "Biryani": "fa-solid fa-utensil-spoon",
  "Plats de Riz": "fa-solid fa-seedling",
  "Boissons": "fa-solid fa-mug-saucer",
  "Desserts": "fa-solid fa-cake-candles"
};

// ========== IMAGE MAP ==========
export const imageMap = {
  "Entrées Froides": raitasImg,
  "Samossas & Pakora": samoussaImg,
  "Grillades Tandoori": chickenImg,
  "Pains Indiens": naanImg,
  "Plats de Poulet": chickenImg,
  "Plats de Bœuf": beefImg,
  "Plats d'Agneau": lambImg,
  "Poissons & Crevettes": fishImg,
  "Légumes": vegetablesImg,
  "Biryani": biryaniImg,
  "Plats de Riz": riceImg,
  "Boissons": lassiImg,
  "Desserts": kheerImg,
  "Lunch": lunchImg
};