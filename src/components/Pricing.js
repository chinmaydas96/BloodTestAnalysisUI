import React, { useState } from 'react';

function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <h2 className="section-title">Pricing Plans</h2>
        <p className="section-subtitle">Choose the plan that works best for you</p>
        
        <div className="billing-toggle">
          <button 
            className={`toggle-button ${billingCycle === 'monthly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`toggle-button ${billingCycle === 'yearly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly
          </button>
        </div>
        
        <div className="pricing-cards">
          {/* Basic Plan */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="pricing-plan-category">For individuals</h3>
              <h2 className="pricing-plan-name">Basic</h2>
              <p className="pricing-plan-description">
                Perfect for individuals and small projects.
              </p>
            </div>
            
            <div className="pricing-card-price">
              <span className="price-amount">${billingCycle === 'monthly' ? '110' : '1100'}</span>
              <span className="price-period">/{billingCycle === 'monthly' ? 'monthly' : 'yearly'}</span>
            </div>
            
            <div className="pricing-card-features">
              <h4 className="features-title">What's included</h4>
              <ul className="features-list">
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">All analytics features</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Up to 250,000 tracked visits</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Normal support</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Up to 3 team members</span>
                </li>
              </ul>
            </div>
            
            <div className="pricing-card-actions">
              <button className="get-started-button dark">Get Started</button>
              <a href="#" className="learn-more-link">Learn More</a>
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="pricing-card featured">
            <div className="pricing-card-badge">Popular</div>
            <div className="pricing-card-header">
              <h3 className="pricing-plan-category">For startups</h3>
              <h2 className="pricing-plan-name">Pro</h2>
              <p className="pricing-plan-description">
                Unlock enhanced AI capabilities, priority support, and weekly updates.
              </p>
            </div>
            
            <div className="pricing-card-price">
              <span className="price-amount">${billingCycle === 'monthly' ? '210' : '2100'}</span>
              <span className="price-period">/{billingCycle === 'monthly' ? 'monthly' : 'yearly'}</span>
            </div>
            
            <div className="pricing-card-features">
              <h4 className="features-title">What's included</h4>
              <ul className="features-list">
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">All analytics features</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Up to 1,000,000 tracked visits</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Premium support</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Up to 10 team members</span>
                </li>
              </ul>
            </div>
            
            <div className="pricing-card-actions">
              <button className="get-started-button light">Get Started</button>
              <a href="#" className="learn-more-link">Learn More</a>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="pricing-plan-category">For big companies</h3>
              <h2 className="pricing-plan-name">Enterprise</h2>
              <p className="pricing-plan-description">
                Access the full suite of AI features, 24/7 dedicated support.
              </p>
            </div>
            
            <div className="pricing-card-price">
              <span className="price-amount">${billingCycle === 'monthly' ? '410' : '4100'}</span>
              <span className="price-period">/{billingCycle === 'monthly' ? 'monthly' : 'yearly'}</span>
            </div>
            
            <div className="pricing-card-features">
              <h4 className="features-title">What's included</h4>
              <ul className="features-list">
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">All analytics features</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Up to 5,000,000 tracked visits</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Dedicated support</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✓</span>
                  <span className="feature-text">Up to 50 team members</span>
                </li>
              </ul>
            </div>
            
            <div className="pricing-card-actions">
              <button className="get-started-button dark">Get Started</button>
              <a href="#" className="learn-more-link">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing; 