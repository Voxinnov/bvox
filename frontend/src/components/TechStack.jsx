import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  "AI / Machine Learning", "Cloud Computing", "IoT Ecosystem", 
  "Mobile Development", "Web Infrastructure", "Data Analytics",
  "Cyber Security", "Blockchain", "Edge Computing"
];

const TechStack = () => {
  return (
    <section id="tech" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '2rem' }}>Our Technology Stack</h2>
          <p>Expertise that powers your business innovation</p>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
          {techs.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, borderColor: '#00D2FF' }}
              viewport={{ once: true }}
              style={{
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '500',
                cursor: 'default',
                transition: 'all 0.3s ease'
              }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
