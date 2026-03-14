import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Rocket, Shield, Smartphone, Zap } from 'lucide-react';

const products = [
  {
    icon: <Cpu size={32} />,
    name: "AI Products",
    desc: "Advanced neural networks and machine learning models for predictive analytics.",
    color: "#00D2FF"
  },
  {
    icon: <Globe size={32} />,
    name: "IoT Solutions",
    desc: "Connected ecosystem for smart infrastructure and industry 4.0 applications.",
    color: "#FF3366"
  },
  {
    icon: <Zap size={32} />,
    name: "Smart Automation",
    desc: "Intelligent workflow automation to eliminate repetitive business tasks.",
    color: "#FFD700"
  },
  {
    icon: <Rocket size={32} />,
    name: "Business Software",
    desc: "Custom ERP and CRM solutions tailored for high-growth enterprises.",
    color: "#A855F7"
  },
  {
    icon: <Smartphone size={32} />,
    name: "Mobile & Web Apps",
    desc: "High-performance cross-platform applications with premium UI/UX.",
    color: "#22C55E"
  },
  {
    icon: <Shield size={32} />,
    name: "Data Analytics",
    desc: "Visual business intelligence tools for data-driven decision making.",
    color: "#3B82F6"
  }
];

const Products = () => {
  return (
    <section id="products">
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Products & Demos</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          Explore our latest technology demonstrations and production-ready solutions built on the VoxInnov core.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {products.map((item, index) => (
          <motion.div
            key={index}
            className="glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ color: item.color, marginBottom: '20px' }}>{item.icon}</div>
            <h3 style={{ marginBottom: '12px' }}>{item.name}</h3>
            <p style={{ marginBottom: '25px', fontSize: '0.95rem' }}>{item.desc}</p>
            <button className="btn btn-outline" style={{ width: '100%', fontSize: '0.9rem' }}>
              Launch Demo
            </button>
            <div style={{ 
              position: 'absolute', 
              top: '-10px', 
              right: '-10px', 
              width: '60px', 
              height: '60px', 
              background: item.color, 
              opacity: 0.05, 
              borderRadius: '50%', 
              filter: 'blur(20px)' 
            }}></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
