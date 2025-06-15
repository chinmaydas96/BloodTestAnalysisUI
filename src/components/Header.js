import React, { useState } from 'react';

function Header({ isArabic, toggleLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const t = (en, ar) => (isArabic ? ar : en);

  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo-text">bloodtest.AI</h1>
      </div>

      <button 
        className="menu-button" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {t('Menu','القائمة')}
      </button>

      {/* Language Switch */}
      <div className="lang-switch" onClick={toggleLanguage}>
        <input type="checkbox" checked={isArabic} readOnly />
        <span className="slider">
          <span className="lang en">EN</span>
          <span className="lang ar">ع</span>
        </span>
      </div>
      
      {menuOpen && (
        <nav className="nav-menu">
          <a href="#home" className="nav-link">{t('Home','الرئيسية')}</a>
          <a href="#analysis" className="nav-link">{t('Analysis','تحليل')}</a>
          <a href="#features" className="nav-link">{t('Features','المزايا')}</a>
          <a href="#testimonials" className="nav-link">{t('Testimonials','اراء')}</a>
          <a href="#contact" className="nav-link">{t('Contact','الاتصال')}</a>
        </nav>
      )}
    </header>
  );
}

export default Header; 