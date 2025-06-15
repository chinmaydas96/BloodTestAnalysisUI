import React from 'react';

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="background-animation">
        <div className="blur-rotate blur-rotate-1">
          <div className="conic conic-1"></div>
        </div>
        <div className="blur-rotate blur-rotate-2">
          <div className="conic conic-2"></div>
        </div>
        <div className="blur-rotate blur-rotate-3">
          <div className="conic conic-3"></div>
        </div>
        <div className="blur-rotate blur-rotate-4">
          <div className="conic conic-4"></div>
        </div>
        <div className="gradient-overlay"></div>
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
            background: transparent;
            overflow: hidden;
          }
          
          .blur-rotate {
            position: absolute;
            top: 50%;
            left: 50%;
            will-change: transform;
            transform: translate(-50%, -50%) perspective(1200px);
          }
          
          .blur-rotate-1 {
            animation: appear1 0.6s ease-out forwards, rotate1 10s linear infinite;
          }
          
          .blur-rotate-2 {
            animation: appear2 0.6s ease-out forwards, rotate2 10s linear infinite;
          }
          
          .blur-rotate-3 {
            animation: appear3 0.6s ease-out forwards, rotate3 8s linear infinite reverse;
          }
          
          .blur-rotate-4 {
            animation: appear4 0.6s ease-out forwards, rotate4 5s linear infinite;
          }
          
          .conic {
            will-change: transform;
            border-radius: 50%;
            transform: none;
          }
          
          .conic-1 {
            width: 500px;
            height: 500px;
            background: conic-gradient(from 0deg, rgba(255, 0, 255, 0.5), rgba(132, 0, 255, 0.5), rgba(0, 174, 255, 0.5), rgba(0, 255, 234, 0.5), rgba(255, 0, 255, 0.5));
            filter: blur(50px);
            opacity: 0.8;
          }
          
          .conic-2 {
            width: 450px;
            height: 450px;
            background: conic-gradient(from 120deg, rgba(255, 0, 128, 0.5), rgba(128, 0, 255, 0.5), rgba(0, 128, 255, 0.5), rgba(0, 255, 128, 0.5), rgba(255, 0, 128, 0.5));
            filter: blur(45px);
            opacity: 1;
          }
          
          .conic-3 {
            width: 350px;
            height: 350px;
            background: conic-gradient(from 240deg, rgba(72, 0, 255, 0.6), rgba(0, 183, 255, 0.6), rgba(255, 105, 180, 0.6), rgba(72, 0, 255, 0.6));
            filter: blur(35px);
            opacity: 1;
          }
          
          .conic-4 {
            width: 200px;
            height: 200px;
            background: conic-gradient(from 180deg, rgba(0, 191, 255, 0.7), rgba(138, 43, 226, 0.7), rgba(255, 20, 147, 0.7), rgba(0, 191, 255, 0.7));
            filter: blur(25px);
            opacity: 1;
          }
          
          .gradient-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
            opacity: 0;
            transform: rotate(180deg);
          }
          
          @keyframes appear1 {
            0% { opacity: 0; }
            100% { opacity: 0.5; }
          }
          
          @keyframes appear2 {
            0% { opacity: 0; }
            100% { opacity: 0.45; }
          }
          
          @keyframes appear3 {
            0% { opacity: 0; }
            100% { opacity: 0.4; }
          }
          
          @keyframes appear4 {
            0% { opacity: 0; }
            100% { opacity: 0.7; }
          }
          
          @keyframes rotate1 {
            0% { transform: translate(-50%, -50%) perspective(1200px) rotate(0deg); }
            100% { transform: translate(-50%, -50%) perspective(1200px) rotate(360deg); }
          }
          
          @keyframes rotate2 {
            0% { transform: translate(-50%, -50%) perspective(1200px) rotate(0deg); }
            100% { transform: translate(-50%, -50%) perspective(1200px) rotate(360deg); }
          }
          
          @keyframes rotate3 {
            0% { transform: translate(-50%, -50%) perspective(1200px) rotate(0deg); }
            100% { transform: translate(-50%, -50%) perspective(1200px) rotate(360deg); }
          }
          
          @keyframes rotate4 {
            0% { transform: translate(-50%, -50%) perspective(1200px) rotate(0deg); }
            100% { transform: translate(-50%, -50%) perspective(1200px) rotate(360deg); }
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