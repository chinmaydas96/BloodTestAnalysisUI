import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img 
          src="https://framerusercontent.com/images/YSdobC45mkoLCNuWcMVS8P7xoXg.png" 
          alt="Valaam Logo" 
          className="logo" 
        />
      </div>
      <div className="footer-links">
        <a href="#features" className="footer-link">Features</a>
        <a href="#testimonials" className="footer-link">Testimonials</a>
        <a href="#pricing" className="footer-link">Pricing</a>
        <a href="#contact" className="footer-link">Contact</a>
        <a href="#privacy" className="footer-link">Privacy Policy</a>
        <a href="#terms" className="footer-link">Terms of Service</a>
      </div>
      <div className="copyright">
        &copy; {new Date().getFullYear()} Valaam. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer; 