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
          opacity: 0.8,
          willChange: 'transform',
          animation: 'rotate1 25s linear infinite'
        }}>
          <div className="conic" style={{
            width: '800px',
            height: '800px',
            background: 'conic-gradient(from 0deg, rgba(255, 0, 255, 0.7), rgba(132, 0, 255, 0.7), rgba(0, 174, 255, 0.7), rgba(0, 255, 234, 0.7), rgba(255, 0, 255, 0.7))',
            borderRadius: '50%',
            transform: 'scale(1.2)',
            filter: 'blur(80px)'
          }}></div>
        </div>
        <div className="blur-rotate" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.7,
          willChange: 'transform',
          animation: 'rotate2 20s linear infinite'
        }}>
          <div className="conic" style={{
            width: '700px',
            height: '700px',
            background: 'conic-gradient(from 120deg, rgba(255, 0, 128, 0.7), rgba(128, 0, 255, 0.7), rgba(0, 128, 255, 0.7), rgba(0, 255, 128, 0.7), rgba(255, 0, 128, 0.7))',
            borderRadius: '50%',
            transform: 'scale(1.1)',
            filter: 'blur(70px)'
          }}></div>
        </div>
        <div className="blur-rotate-blend" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.6,
          willChange: 'transform',
          animation: 'rotate3 30s linear infinite reverse'
        }}>
          <div className="conic" style={{
            width: '900px',
            height: '900px',
            background: 'conic-gradient(from 240deg, rgba(72, 0, 255, 0.7), rgba(0, 183, 255, 0.7), rgba(0, 255, 183, 0.7), rgba(72, 0, 255, 0.7))',
            borderRadius: '50%',
            transform: 'scale(1)',
            filter: 'blur(90px)'
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
            mix-blend-mode: normal;
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