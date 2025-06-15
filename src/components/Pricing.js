import React, { useState } from 'react';

function Pricing({ isArabic=false }) {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const t=(en,ar)=>isArabic?ar:en;

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <h2 className="section-title">{t('Pricing Plans','خطط الأسعار')}</h2>
        <p className="section-subtitle">{t('Choose the plan that fits your health monitoring needs','اختر الخطة التي تناسب احتياجات مراقبة صحتك')}</p>
        
        <div className="billing-toggle">
          <button 
            className={`toggle-button ${billingCycle === 'monthly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('monthly')}
          >
            {t('Monthly','شهري')}
          </button>
          <button 
            className={`toggle-button ${billingCycle === 'yearly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('yearly')}
          >
            {t('Yearly','سنوي')}
          </button>
        </div>
        
        <div className="pricing-cards">
          {/* Basic Plan */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="pricing-plan-category">{t('For individuals','للأفراد')}</h3>
              <h2 className="pricing-plan-name">{t('Basic','أساسي')}</h2>
              <p className="pricing-plan-description">
                Perfect for individuals seeking occasional blood test analysis.
              </p>
            </div>
            
            <div className="pricing-card-price">
              <span className="price-amount">${billingCycle === 'monthly' ? '110' : '1100'}</span>
              <span className="price-period">/{billingCycle === 'monthly' ? 'monthly' : 'yearly'}</span>
            </div>
            
            <div className="pricing-card-features">
              <h4 className="features-title">{t("What's included",'ما يتضمنه')}</h4>
              <ul className="features-list">
                <li className="feature-item">
                  <span className="feature-icon" />
                  <span className="feature-text">{t('All basic analysis features','جميع ميزات التحليل الأساسية')}</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon" />
                  <span className="feature-text">Up to 5 blood tests per month</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon" />
                  <span className="feature-text">Standard report generation</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon" />
                  <span className="feature-text">Email support</span>
                </li>
              </ul>
            </div>
            
            <div className="pricing-card-actions">
              <button className="get-started-button dark">{t('Get Started','ابدأ الآن')}</button>
              <a href="#" className="learn-more-link">{t('Learn More','تعرف أكثر')}</a>

            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="pricing-card featured">
            <div className="pricing-card-badge">{t('Popular','الأكثر شيوعًا')}</div>
            <div className="pricing-card-header">
              <h3 className="pricing-plan-category">{t('For startups','للشركات الناشئة')}</h3>
              <h2 className="pricing-plan-name">{t('Pro','المؤسسة')}</h2>
              <p className="pricing-plan-description">
                {t('Enhanced AI analysis with trend monitoring and personalized insights.',
                'تحليل ذكي متقدم مع مراقبة الاتجاه وتوصيات مخصصة.')}
              </p>
            </div>
            
            <div className="pricing-card-price">
              <span className="price-amount">${billingCycle === 'monthly' ? '210' : '2100'}</span>
              <span className="price-period">/{billingCycle === 'monthly' ? 'monthly' : 'yearly'}</span>
            </div>
            
            <div className="pricing-card-features">
              <h4 className="features-title">{t("What's included",'ما يتضمنه')}</h4>
              <ul className="features-list">
                <li className="feature-item">
                  <span className="feature-icon" />
                  <span className="feature-text">{t('All analytics features','جميع ميزات التحليل')}</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon" />
                  <span className="feature-text">{t('Up to 20 blood tests per month','حتى 20 فحص دم شهريًا')}</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon" />
                  <span className="feature-text">{t('Priority support','دعم أولوية')}</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon" />
                  <span className="feature-text">{t('Health trend analysis','تحليل اتجاهات الصحة')}</span>
                </li>
              </ul>
            </div>
            
            <div className="pricing-card-actions">
              <button className="get-started-button light">{t('Get Started','ابدأ الآن')}</button>
              <a href="#" className="learn-more-link">{t('Learn More','تعرف أكثر')}</a>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="pricing-plan-category">{t('For big companies','للشركات الكبرى')}</h3>
              <h2 className="pricing-plan-name">{t('Enterprise','المؤسسة')}</h2>
              <p className="pricing-plan-description">
                {t('Complete health analytics platform with advanced AI insights and reporting.',
                'منصة كاملة لتحليلات الصحة مع رؤى متقدمة مدعومة بالذكاء الاصطناعي وتقارير مفصلة.')}
              </p>
            </div>
            
            <div className="pricing-card-price">
              <span className="price-amount">${billingCycle === 'monthly' ? '410' : '4100'}</span>
              <span className="price-period">/{billingCycle === 'monthly' ? 'monthly' : 'yearly'}</span>
            </div>
            
            <div className="pricing-card-features">
              <h4 className="features-title">{t("What's included",'ما يتضمنه')}</h4>
              <ul className="features-list">
                <li className="feature-item">
                  <span className="feature-icon" />
                  <span className="feature-text">{t('Advanced AI analysis','تحليل ذكاء اصطناعي متقدم')}</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon" />
                  <span className="feature-text">{t('Unlimited blood tests','فحوصات دم غير محدودة')}</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon" />
                  <span className="feature-text">{t('24/7 dedicated support','دعم مخصص 24/7')}</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon" />
                  <span className="feature-text">{t('Custom integration options','خيارات تكامل مخصصة')}</span>
                </li>
              </ul>
            </div>
            
            <div className="pricing-card-actions">
              <button className="get-started-button dark">{t('Get Started','ابدأ الآن')}</button>
              <a href="#" className="learn-more-link">{t('Learn More','تعرف أكثر')}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing; 