import React from 'react';

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="background-animation">
        <div className="blur-rotate" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 1,
          willChange: 'transform',
          animation: 'rotate1 8s linear infinite'
        }}>
          <div className="conic" style={{
            width: '500px',
            height: '500px',
            background: 'conic-gradient(from 0deg, #007bff, #00bfff, #87ceeb, #007bff)',
            borderRadius: '50%',
            transform: 'scale(0.819533)',
            opacity: 0.8,
            filter: 'blur(40px)'
          }}></div>
        </div>
        <div className="blur-rotate" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 1,
          willChange: 'transform',
          animation: 'rotate2 10s linear infinite reverse'
        }}>
          <div className="conic" style={{
            width: '500px',
            height: '500px',
            background: 'conic-gradient(from 120deg, #007bff, #00bfff, #87ceeb, #007bff)',
            borderRadius: '50%',
            transform: 'scale(0.819467)',
            opacity: 1,
            filter: 'blur(40px)'
          }}></div>
        </div>
        <div className="blur-rotate-blend" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 1,
          willChange: 'transform',
          animation: 'rotate3 12s linear infinite'
        }}>
          <div className="conic" style={{
            width: '500px',
            height: '500px',
            background: 'conic-gradient(from 240deg, #007bff, #00bfff, #87ceeb, #007bff)',
            borderRadius: '50%',
            transform: 'scale(0.8194)',
            opacity: 1,
            filter: 'blur(40px)'
          }}></div>
        </div>
      </div>
      <style>
        {`
          .hero-section {
            position: relative;
            overflow: hidden;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .background-animation {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
          }
          @keyframes rotate1 {
            0% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
          @keyframes rotate2 {
            0% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
          @keyframes rotate3 {
            0% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `}
      </style>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="hero-title">
          Blood Test Analysis
        </h1>
        <p className="hero-subtitle">
          Upload your blood test results and get instant, accurate analysis powered by our advanced AI technology. Understand your health metrics with personalized insights and recommendations.
        </p>
        <div className="hero-buttons">
          <a href="#analysis" className="cta-button">Try it Now</a>
        </div>
      </div>
    </section>
  );
}

export default Hero; 