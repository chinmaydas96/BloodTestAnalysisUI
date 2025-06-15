import React, { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo-text">bloodtest.AI</h1>
      </div>
      <button 
        className="menu-button" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Menu
      </button>
      
      {menuOpen && (
        <nav className="nav-menu">
          <a href="#home" className="nav-link">Home</a>
          <a href="#analysis" className="nav-link">Analysis</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      )}
    </header>
  );
}

export default Header; 