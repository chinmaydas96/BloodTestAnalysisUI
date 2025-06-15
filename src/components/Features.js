import React from 'react';

function Features() {
  const featuresData = [
    {
      id: 1,
      icon: "🤖",
      title: "AI-Powered Analytics",
      description: "Leverage advanced machine learning algorithms to gain insights from your data and make informed decisions."
    },
    {
      id: 2,
      icon: "📊",
      title: "Real-time Monitoring",
      description: "Track and analyze your business metrics in real-time with our powerful dashboard and visualization tools."
    },
    {
      id: 3,
      icon: "🔒",
      title: "Enterprise Security",
      description: "Keep your data safe with our enterprise-grade security features and compliance with industry standards."
    },
    {
      id: 4,
      icon: "⚡",
      title: "High Performance",
      description: "Experience lightning-fast processing and analysis with our optimized infrastructure."
    },
    {
      id: 5,
      icon: "🔄",
      title: "Seamless Integration",
      description: "Connect with your existing tools and platforms through our comprehensive API and integration options."
    },
    {
      id: 6,
      icon: "📱",
      title: "Mobile Accessibility",
      description: "Access your data and insights on the go with our responsive mobile interface and native applications."
    }
  ];

  return (
    <section className="features-section" id="features">
      <h2 className="section-title">Powerful Features</h2>
      <div className="features-grid">
        {featuresData.map(feature => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">
              <span style={{ fontSize: '32px' }}>{feature.icon}</span>
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features; 