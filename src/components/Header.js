import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo-text">BloodTest<span className="logo-accent">AI</span></h1>
      </div>
      <nav className="nav-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#analysis" className="nav-link">Analysis</a>
        <a href="#features" className="nav-link">Features</a>
        <a href="#testimonials" className="nav-link">Testimonials</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}

export default Header; 