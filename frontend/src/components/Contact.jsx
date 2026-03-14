import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });
    
    try {
      await axios.post('http://localhost:5001/api/contact', formData);
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <section id="contact">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Get In Touch</h2>
          <p>Ready to power your next big idea? Our team is standing by.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '50px' }} className="contact-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div className="glass-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div style={{ background: 'rgba(0, 210, 255, 0.1)', color: '#00D2FF', padding: '10px', borderRadius: '8px' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem' }}>Email</h4>
                  <p style={{ color: '#fff', fontSize: '0.9rem' }}>hello@bvox.in</p>
                </div>
              </div>
            </div>
            <div className="glass-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div style={{ background: 'rgba(255, 51, 102, 0.1)', color: '#FF3366', padding: '10px', borderRadius: '8px' }}>
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem' }}>WhatsApp</h4>
                  <p style={{ color: '#fff', fontSize: '0.9rem' }}>+91 999 000 0000</p>
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>
              Looking for support? Visit our help center or reach out to our technical team at VoxInnov.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                style={inputStyle}
              />
            </div>
            <textarea
              placeholder="Your Message..."
              rows="6"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              style={{ ...inputStyle, resize: 'none' }}
            ></textarea>
            
            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={status.loading}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
            >
              {status.loading ? 'Sending...' : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
            
            {status.success && <p style={{ color: '#22c55e', textAlign: 'center' }}>Message sent successfully!</p>}
            {status.error && <p style={{ color: '#ef4444', textAlign: 'center' }}>{status.error}</p>}
          </form>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

const inputStyle = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '8px',
  padding: '14px 18px',
  color: '#fff',
  fontSize: '1rem',
  outline: 'none',
  width: '100%',
  transition: 'all 0.3s ease',
  focus: {
    borderColor: '#00D2FF',
    background: 'rgba(255, 255, 255, 0.05)'
  }
};

export default Contact;
