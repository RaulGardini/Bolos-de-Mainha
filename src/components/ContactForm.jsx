
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const WhatsAppContact = () => {
  const whatsappLink = "https://web.whatsapp.com/send/?phone=5585998097777&amp;text&amp;type=phone_number&amp;app_absent=0"; // Substitua pelo seu número

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        gap: '2rem'
      }}
    >
      <h3 style={{ 
        color: 'var(--mainha-dark)', 
        fontSize: '1.5rem', 
        marginBottom: '1rem' 
      }}>
        Entre em Contato Conosco
      </h3>
      
      {/* Imagem do WhatsApp */}
      <div style={{
        width: '200px',
        height: '200px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <img 
          src="/images/outros/WhatsApp.svg.webp" 
          alt="WhatsApp" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Botão do WhatsApp */}
      <Button
        onClick={() => window.open(whatsappLink, '_blank')}
        style={{
          backgroundColor: '#25D366',
          color: 'white',
          padding: '0.875rem 2rem',
          fontSize: '1.1rem',
          fontWeight: '600',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
          minWidth: '200px'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#128C7E';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 16px rgba(37, 211, 102, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#25D366';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.3)';
        }}
      >
        Fale Conosco
      </Button>

      <p style={{
        color: 'var(--gray-600)',
        fontSize: '0.9rem',
        maxWidth: '400px',
        lineHeight: '1.5'
      }}>
        Clique no botão acima para falar diretamente conosco pelo WhatsApp. 
        Estamos prontos para atender você!
      </p>
    </motion.div>
  );
};

export default WhatsAppContact;