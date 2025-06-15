import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BloodTestAnalysis from './components/BloodTestAnalysis';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => setIsArabic(prev => !prev);

  // Apply dir and body class based on language
  useEffect(() => {
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.body.classList.toggle('arabic', isArabic);
  }, [isArabic]);

  return (
    <div className="App">
      <Header isArabic={isArabic} toggleLanguage={toggleLanguage} />
      <main>
        <Hero isArabic={isArabic} />
        <BloodTestAnalysis isArabic={isArabic} />
        <Features isArabic={isArabic} />
        <Pricing isArabic={isArabic} />
        <Testimonials isArabic={isArabic} />
      </main>
      <Footer />
    </div>
  );
}

export default App; 