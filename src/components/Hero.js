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
          opacity: 0.4,
          willChange: 'transform',
          animation: 'rotate1 25s linear infinite'
        }}>
          <div className="conic" style={{
            width: '600px',
            height: '600px',
            background: 'conic-gradient(from 0deg, rgba(255, 0, 255, 0.4), rgba(132, 0, 255, 0.4), rgba(0, 174, 255, 0.4), rgba(0, 255, 234, 0.4), rgba(255, 0, 255, 0.4))',
            borderRadius: '50%',
            transform: 'scale(1)',
            filter: 'blur(60px)'
          }}></div>
        </div>
        <div className="blur-rotate" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.35,
          willChange: 'transform',
          animation: 'rotate2 20s linear infinite'
        }}>
          <div className="conic" style={{
            width: '500px',
            height: '500px',
            background: 'conic-gradient(from 120deg, rgba(255, 0, 128, 0.4), rgba(128, 0, 255, 0.4), rgba(0, 128, 255, 0.4), rgba(0, 255, 128, 0.4), rgba(255, 0, 128, 0.4))',
            borderRadius: '50%',
            transform: 'scale(0.9)',
            filter: 'blur(55px)'
          }}></div>
        </div>
        <div className="blur-rotate-blend" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.3,
          willChange: 'transform',
          animation: 'rotate3 30s linear infinite reverse'
        }}>
          <div className="conic" style={{
            width: '650px',
            height: '650px',
            background: 'conic-gradient(from 240deg, rgba(72, 0, 255, 0.4), rgba(0, 183, 255, 0.4), rgba(0, 255, 183, 0.4), rgba(72, 0, 255, 0.4))',
            borderRadius: '50%',
            transform: 'scale(0.8)',
            filter: 'blur(65px)'
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
            background: transparent;
          }
          .background-animation {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            mix-blend-mode: normal;
            background: transparent;
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