import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: scrolled ? '15px 40px' : '25px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      transition: 'all 0.4s ease'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src="/bvox.png" alt="BVOX Logo" style={{ height: '40px', width: 'auto' }} />
      </div>
      
      <div style={{ display: 'none', gap: '30px', fontWeight: '500' }} className="md-flex">
        <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
        <a href="#products" style={{ color: 'inherit', textDecoration: 'none' }}>Solutions</a>
        <a href="#tech" style={{ color: 'inherit', textDecoration: 'none' }}>Tech</a>
        <a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
      </div>

      <a href="#contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
        Get Started
      </a>

      <style>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
