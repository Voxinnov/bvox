import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '80px 20px 40px', 
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      marginTop: '100px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px' }}>
        <div style={{ gridColumn: 'span 2' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <div style={{ 
              width: '32px', 
              height: '32px', 
              background: 'linear-gradient(135deg, #FF3366, #ff6b95)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '900',
              color: 'white'
            }}>V</div>
            <span style={{ fontWeight: '800', fontSize: '1.4rem' }}>BVOX</span>
          </div>
          <p style={{ maxWidth: '300px', marginBottom: '30px', fontSize: '0.9rem' }}>
            BVOX – Business Innovation by VoxInnov. 
            Empowering the next generation of digital-first enterprises through AI and automation.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a key={i} href="#" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = '#00D2FF'} onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
           <h4 style={{ marginBottom: '25px', fontSize: '1rem' }}>Sitemap</h4>
           <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
             <li><a href="#hero" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Home</a></li>
             <li><a href="#about" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>About</a></li>
             <li><a href="#products" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Products</a></li>
             <li><a href="#contact" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Contact</a></li>
           </ul>
        </div>

        <div>
           <h4 style={{ marginBottom: '25px', fontSize: '1rem' }}>Corporate</h4>
           <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
             <li><a href="https://voxinnov.com" target="_blank" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>VoxInnov Website</a></li>
             <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Privacy Policy</a></li>
             <li><a href="#" style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}>Terms of Service</a></li>
           </ul>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '60px auto 0', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
        © 2026 BVOX (VoxInnov Business Division). All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
