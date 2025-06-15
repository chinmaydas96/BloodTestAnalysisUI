import React, { useState } from 'react';

function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <h2 className="section-title">Pricing Plans</h2>
        <p className="section-subtitle">Choose the plan that fits your health monitoring needs</p>
        
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
                Perfect for individuals seeking occasional blood test analysis.
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
                  <span className="feature-icon">•</span>
                  <span className="feature-text">All basic analysis features</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">•</span>
                  <span className="feature-text">Up to 5 blood tests per month</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">•</span>
                  <span className="feature-text">Standard report generation</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">•</span>
                  <span className="feature-text">Email support</span>
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
                Enhanced AI analysis with trend monitoring and personalized insights.
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
                  <span className="feature-icon">•</span>
                  <span className="feature-text">All analytics features</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">•</span>
                  <span className="feature-text">Up to 20 blood tests per month</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">•</span>
                  <span className="feature-text">Priority support</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">•</span>
                  <span className="feature-text">Health trend analysis</span>
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
                Complete health analytics platform with advanced AI insights and reporting.
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
                  <span className="feature-icon">•</span>
                  <span className="feature-text">Advanced AI analysis</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">•</span>
                  <span className="feature-text">Unlimited blood tests</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">•</span>
                  <span className="feature-text">24/7 dedicated support</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">•</span>
                  <span className="feature-text">Custom integration options</span>
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