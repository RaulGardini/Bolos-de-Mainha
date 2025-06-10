import React from 'react';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5585998097777"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: 'fixed',
      right: '20px', // alterado de left para right
      bottom: '20px',
      zIndex: 1000,
      background: '#25D366',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
    }}
    aria-label="Fale conosco no WhatsApp"
  >
    <img
      src="/images/outros/whatsapp.png"
      alt="WhatsApp"
      style={{ width: '32px', height: '32px' }}
    />
  </a>
);

export default WhatsAppButton;