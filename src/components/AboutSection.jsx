
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <div className="container">
      <h2 className="section-title">Nossa História</h2>
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <img  
          alt="Mainha sorrindo" 
          className="about-image"
          style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1.5rem', boxShadow: '0 0 15px rgba(110, 52, 61, 0.2)'}}
         src="https://images.unsplash.com/photo-1580843243366-031d0472f2c8" />
        <p>
          "Bolos de Mainha" nasceu da paixão por criar momentos doces e memoráveis. Cada receita é um tesouro de família, passado de geração em geração, aperfeiçoado com carinho e os ingredientes mais frescos. 
        </p>
        <p>
          Acreditamos que um bolo é mais que uma sobremesa; é um gesto de amor, uma celebração da vida. Da nossa cozinha para a sua mesa, esperamos levar alegria e o sabor autêntico de um bolo feito por Mainha.
        </p>
        <Link to="/sobre">
          <Button variant="outline" className="button-outline" style={{ marginTop: '1rem' }}>Saiba Mais Sobre Nós</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutSection;
