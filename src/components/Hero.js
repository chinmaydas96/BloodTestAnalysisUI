import React from 'react';

function Hero() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">
        Unleash the Power of AI for Your Business
      </h1>
      <p className="hero-subtitle">
        Premium ML template that is crafted with dedication and passion for startups and businesses at the forefront of AI innovation.
      </p>
      <div className="hero-buttons">
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-image-container">
        <img 
          src="https://framerusercontent.com/images/Fk7GLT0OU5BymGt7h0mD9rbU8A.jpg" 
          alt="AI Visualization" 
          className="hero-image" 
        />
      </div>
    </section>
  );
}

export default Hero; 