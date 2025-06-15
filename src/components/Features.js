import React from 'react';

function Features() {
  const features = [
    {
      title: 'Fast Analysis',
      description: 'Get results in seconds, not days. Our AI processes your blood test data instantly.',
      icon: '⚡'
    },
    {
      title: 'Accurate Results',
      description: 'Our AI has been trained on millions of blood test results to provide highly accurate analyses.',
      icon: '✓'
    },
    {
      title: 'Easy to Understand',
      description: 'Complex medical terms translated into easy-to-understand language with actionable insights.',
      icon: '📊'
    },
    {
      title: 'Trend Analysis',
      description: 'Track changes in your blood test results over time to monitor your health progress.',
      icon: '📈'
    },
    {
      title: 'Secure & Private',
      description: 'Your health data is encrypted and never shared with third parties.',
      icon: '🔒'
    },
    {
      title: '24/7 Availability',
      description: 'Access your blood test analysis anytime, anywhere, from any device.',
      icon: '🌐'
    }
  ];

  return (
    <section className="features-section" id="features">
      <h2 className="section-title">Key Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features; 