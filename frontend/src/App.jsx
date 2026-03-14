import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import TechStack from './components/TechStack';
import WhyBvox from './components/WhyBvox';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <div className="grid-overlay"></div>
      <div className="glow-spot glow-top-right"></div>
      <div className="glow-spot glow-bottom-left"></div>
      
      <Navbar />
      <Hero />
      <About />
      <Products />
      <TechStack />
      <WhyBvox />
      <Contact />
      <Footer />
      
      <style>{`
        .app-container {
          position: relative;
          z-index: 1;
        }
      `}</style>
    </div>
  );
}

export default App;
