import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BloodTestAnalysis from './components/BloodTestAnalysis';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <BloodTestAnalysis />
        <Features />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App; 