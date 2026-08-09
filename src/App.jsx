import React, { useState, useEffect } from 'react';
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
  const [activeMenuView, setActiveMenuView] = useState('menu');

  const openCategory = (cat) => setSelectedCategory(cat);
  const closeModal = () => setSelectedCategory(null);
  
  const openMenuPage = (view = 'menu') => {
    setActiveMenuView(view);
    setShowMenuPage(true);
  };
  const closeMenuPage = () => setShowMenuPage(false);

  useEffect(() => {
    // Handle direct deep links like /menu and /contact so client-side views open correctly
    try {
      const path = window.location && window.location.pathname ? window.location.pathname : '/';
      if (path === '/menu' || path.startsWith('/menu')) {
        setActiveMenuView('menu');
        setShowMenuPage(true);
      } else if (path === '/contact' || path.startsWith('/contact')) {
        // scroll to the contact section which contains the Footer
        const el = document.getElementById('contact');
        if (el && typeof el.scrollIntoView === 'function') {
          // use a small timeout to ensure layout is ready
          setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
        }
      }
    } catch (e) {
      // ignore in non-browser environments
    }
  }, []);

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
        <MenuPage onClose={closeMenuPage} view={activeMenuView} />
      )}
    </div>
  );
}

export default App;