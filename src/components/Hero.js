import React from 'react';

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="whats-new-banner">
        <span className="whats-new-dot">•</span>
        <span className="whats-new-text">What's new</span>
        <span className="whats-new-feature">Streamline your ML workflow with v2.0</span>
        <span className="whats-new-arrow">›</span>
      </div>
      <h1 className="hero-title">
        Algorithm training infrastructure
      </h1>
      <p className="hero-subtitle">
        At BloodTestAI, we leverage the game-changing potency of Machine Learning to reshape understanding. 
        Our ground-breaking tech opens unlimited potential across a range of health sectors.
      </p>
      <div className="hero-buttons">
        <a href="#analysis" className="cta-button">Remix Template</a>
      </div>
    </section>
  );
}

export default Hero; 