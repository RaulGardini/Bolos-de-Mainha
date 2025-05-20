
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Bolos de Mainha. Todos os direitos reservados.</p>
        <p>
          Feito com <span style={{ color: 'var(--mainha-light)' }}>❤</span> por Mainha e seus ajudantes.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
