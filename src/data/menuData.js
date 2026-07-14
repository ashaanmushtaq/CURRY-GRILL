import raitasImg from '../assets/Raita.png';
import samoussaImg from '../assets/Samosa.png';
import chickenImg from '../assets/chiken.png';
import naanImg from '../assets//naan.png';
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

export const fullMenuData = {
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

export const iconMap = {
  "Raitas": "fa-solid fa-bowl-food",
  "Samoussa": "fa-solid fa-egg",
  "Grill": "fa-solid fa-fire",
  "Naan": "fa-solid fa-bread-slice",
  "Shai Korma": "fa-solid fa-utensils",
  "Boeuf": "fa-solid fa-cow",
  "Agneau": "fa-solid fa-drumstick-bite",
  "Fish": "fa-solid fa-fish",
  "Légumes": "fa-solid fa-leaf",
  "Biryani": "fa-solid fa-utensil-spoon",
  "Matar PillaO": "fa-solid fa-seedling",
  "Lunch": "fa-solid fa-bowl-food",
  "Lassi": "fa-solid fa-mug-saucer",
  "Kheer": "fa-solid fa-cake-candles",
  "Halwa": "fa-solid fa-candy-cane",
  "Mango Mousse": "fa-solid fa-ice-cream"
};

export const imageMap = {
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
  "Lunch": lunchImg,
  "Lassi": lassiImg,
  "Kheer": kheerImg,
  "Halwa": halwaImg,
  "Mango Mousse": mangoImg
};