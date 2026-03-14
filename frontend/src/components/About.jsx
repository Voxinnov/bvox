import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>What is BVOX?</h2>
          <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
            BVOX (Business Vox) is the commercial innovation platform of VoxInnov where advanced technologies, 
            products, and digital solutions are demonstrated and deployed for businesses.
          </p>
          <p style={{ marginBottom: '30px' }}>
            We bridge the gap between pure engineering and market-ready enterprise solutions. 
            By leveraging VoxInnov's core R&D, we deliver rapid prototyping and production-grade software 
            that solves real business challenges.
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Innovation-driven approach', 'Focus on enterprise solutions', 'Rapid prototyping', 'VoxInnov Engineering'].map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#fff' }}>
                <span style={{ color: '#00D2FF' }}>✓</span> {item}
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #00D2FF 0%, transparent 70%)',
              filter: 'blur(40px)',
              opacity: 0.3
            }}></div>
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
               <h3 style={{ fontSize: '3rem', color: '#FF3366' }}>VOX</h3>
               <p style={{ letterSpacing: '8px', marginLeft: '8px' }}>INNOV</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
