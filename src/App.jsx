import React, { useState } from 'react';
import './App.css';
import { fullMenuData, iconMap } from './data/menuData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import Features from './components/Features';
import Footer from './components/Footer';
import CategoryModal from './components/CategoryModal';
import MenuPage from './components/MenuPage';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showMenuPage, setShowMenuPage] = useState(false);

  const openCategory = (cat) => setSelectedCategory(cat);
  const closeModal = () => setSelectedCategory(null);
  
  const openMenuPage = () => setShowMenuPage(true);
  const closeMenuPage = () => setShowMenuPage(false);

  return (
    <div className="app">
      <Navbar onMenuClick={openMenuPage} />
      
      <section id="home">
        <Hero onMenuClick={openMenuPage} />
      </section>
      
      <section id="menu">
        <MenuGrid 
          categories={Object.keys(iconMap)} 
          iconMap={iconMap} 
          onCategoryClick={openCategory} 
        />
      </section>
      
      <section id="menu-midi">
        <Features />
      </section>
      
      <section id="contact">
        <Footer />
      </section>
      
      {selectedCategory && (
        <CategoryModal 
          category={selectedCategory} 
          items={fullMenuData[selectedCategory]} 
          icon={iconMap[selectedCategory]}
          onClose={closeModal} 
        />
      )}
      
      {showMenuPage && (
        <MenuPage onClose={closeMenuPage} />
      )}
    </div>
  );
}

export default App;