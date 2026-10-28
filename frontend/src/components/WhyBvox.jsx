import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: "Innovation-driven", desc: "Built on VOXINNOV's cutting-edge R&D foundation." },
  { title: "Enterprise-ready", desc: "Production-grade platforms designed for scale." },
  { title: "Rapid Prototyping", desc: "Move from concept to MVP in record time." },
  { title: "Smart Automation", desc: "Efficiency-first systems that work for you." }
];

const WhyBvox = () => {
  return (
    <section id="why">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="responsive-grid">
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '25px' }}>Why Choose <img src="/bvox.png" alt="BVOX" style={{ height: '1.2em', verticalAlign: 'middle', marginBottom: '4px' }} />?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '40px' }}>
            We don't just build software; we engineer business transformation. 
            By merging deep technical research with commercial viability, <img src="/bvox.png" alt="BVOX" style={{ height: '1.1em', verticalAlign: 'middle' }} /> provides 
            a unique competitive edge.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {features.map((f, i) => (
              <div key={i}>
                <h4 style={{ color: '#00D2FF', marginBottom: '8px' }}>{f.title}</h4>
                <p style={{ fontSize: '0.85rem' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ 
            aspectRatio: '1', 
            background: 'linear-gradient(45deg, #0a0a0a, #1a1a1a)', 
            borderRadius: '24px',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ width: '60%', height: '60%', border: '2px dashed #00D2FF', borderRadius: '50%', opacity: 0.3 }}
            />
            <div style={{ position: 'absolute', textAlign: 'center' }}>
               <h3 style={{ fontSize: '1.5rem' }}>VOXINNOV</h3>
               <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '4px' }}>Engineering</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .responsive-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default WhyBvox;
