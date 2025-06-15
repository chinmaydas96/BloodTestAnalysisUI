import React from 'react';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <h2 className="footer-title">Contact Us</h2>
        <p className="footer-description">
          Have questions about BloodTest.ai? We're here to help.
        </p>
        <div className="contact-info">
          <p>Email: support@bloodtest.ai</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      <div className="footer-links">
        <a href="#home" className="footer-link">Home</a>
        <a href="#analysis" className="footer-link">Analysis</a>
        <a href="#features" className="footer-link">Features</a>
        <a href="#testimonials" className="footer-link">Testimonials</a>
        <a href="#contact" className="footer-link">Contact</a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} BloodTest.ai. All rights reserved.</p>
    </footer>
  );
}

export default Footer; 