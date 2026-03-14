import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: '80px'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span style={{ 
          background: 'rgba(255, 51, 102, 0.1)', 
          color: '#FF3366', 
          padding: '6px 16px', 
          borderRadius: '50px', 
          fontSize: '0.85rem', 
          fontWeight: '700',
          border: '1px solid rgba(255, 51, 102, 0.2)',
          marginBottom: '20px',
          display: 'inline-block'
        }}>
          BUSINESS INNOVATION DIVISION
        </span>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
          lineHeight: '1.1',
          marginBottom: '25px',
          background: 'linear-gradient(to bottom, #ffffff 50%, #94a3b8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Business Solutions <br />
          <span style={{ color: '#00D2FF' }}>Powered by VoxInnov</span>
        </h1>
        <p style={{ 
          maxWidth: '700px', 
          fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
          marginBottom: '40px',
          marginInline: 'auto'
        }}>
          BVOX is the business innovation division of VoxInnov delivering smart digital solutions, 
          AI technologies, and product demonstrations for the enterprise of tomorrow.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#products" className="btn btn-primary" style={{ padding: '15px 35px' }}>
            View Solutions
          </a>
          <a href="#contact" className="btn btn-outline" style={{ padding: '15px 35px' }}>
            Contact Us
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="glow-spot glow-top-right" 
      />
    </section>
  );
};

export default Hero;
