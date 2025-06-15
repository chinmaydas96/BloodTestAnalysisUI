import React from 'react';

function Hero() {
  return (
    <section className="hero-section" id="home">
      <h1 className="hero-title">
        AI-Powered Blood Test Analysis
      </h1>
      <p className="hero-subtitle">
        Our advanced AI technology analyzes your blood test results to provide clear, actionable insights about your health in seconds.
      </p>
      <div className="hero-buttons">
        <a href="#analysis" className="cta-button">Try It Now</a>
      </div>
      <div className="hero-image-container">
        <img 
          src="https://framerusercontent.com/images/Fk7GLT0OU5BymGt7h0mD9rbU8A.jpg" 
          alt="Blood Test Analysis Visualization" 
          className="hero-image" 
        />
      </div>
    </section>
  );
}

export default Hero; 