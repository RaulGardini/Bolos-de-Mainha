
import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="section cake-pattern-bg">
      <div className="container">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Sobre Bolos de Mainha
        </motion.h1>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{ backgroundColor: 'var(--white)', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)' }}
        >
          <img  
            alt="Mainha preparando um bolo"
            style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1rem', display: 'block', border: '5px solid var(--mainha-light)' }}
           src="/images/cakes/titia.jpeg" />
          <h2 style={{ color: 'var(--mainha-dark)', fontSize: '1.25rem', marginBottom: '3rem', textAlign: 'center' }}>Confeiteira: Rosiane Macedo</h2>
          <h2 style={{ color: 'var(--mainha-dark)', fontSize: '1.75rem', marginBottom: '1rem', textAlign: 'center' }}>Nossa Doce Jornada</h2>
          <p>
            Sempre amei bolos. Encontrei nesse nicho uma oportunidade de me dedicar a algo feito com muito amor. Foi em 2021 que tudo começou, com o incentivo da minha família, amigos e irmãos da Comunidade Shalom. Quanto mais eu buscava aprender, mais me identificava com a confeitaria. Sou apaixonada por chocolate e percebi que poderia criar verdadeiras maravilhas com uma ganache deliciosa e resistente. Além disso, os conhecimentos adquiridos na engenharia me ajudam a balancear receitas incríveis e encontrar o sabor ideal.
          </p>
          <p>
            Obrigado por fazer parte da nossa família "Bolos de Mainha". Esperamos que você aprecie nossos bolos tanto quanto nós amamos fazê-los!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
