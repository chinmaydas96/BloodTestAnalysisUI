import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img 
          src="https://framerusercontent.com/images/YSdobC45mkoLCNuWcMVS8P7xoXg.png" 
          alt="Valaam Logo" 
          className="logo" 
        />
      </div>
      <nav className="nav-links">
        <a href="#features" className="nav-link">Features</a>
        <a href="#testimonials" className="nav-link">Testimonials</a>
        <a href="#pricing" className="nav-link">Pricing</a>
        <a href="#contact" className="nav-link">Contact</a>
        <button className="cta-button">Get Started</button>
      </nav>
    </header>
  );
}

export default Header; 