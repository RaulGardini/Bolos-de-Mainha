
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="section cake-pattern-bg">
      <div className="container">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Entre em Contato
        </motion.h1>

        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ backgroundColor: 'var(--white)', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)' }}
          >
            <h2 style={{ color: 'var(--mainha-dark)', fontSize: '1.75rem', marginBottom: '1.5rem' }}>Fale Conosco</h2>
            <p style={{ marginBottom: '1.5rem', color: 'var(--gray-700)' }}>
              Tem alguma dúvida, quer fazer um pedido ou conversar com a vendedora? É só chamar no WhatsApp! Estamos disponíveis para te atender com carinho e agilidade.
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <Phone size={24} style={{ color: 'var(--mainha-medium)', marginRight: '0.75rem' }} />
              <span style={{ color: 'var(--gray-700)' }}>(85) 99809-7777</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <Clock size={24} style={{ color: 'var(--mainha-medium)', marginRight: '0.75rem' }} />
              <span style={{ color: 'var(--gray-700)' }}>Aberta 24h</span>
            </div>
            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--gray-600)'}}>
              Pedidos especiais podem precisar de antecedência. Consulte-nos!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ backgroundColor: 'var(--white)', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)' }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
