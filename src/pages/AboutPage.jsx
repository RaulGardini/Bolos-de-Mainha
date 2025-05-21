
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
            style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 2rem', display: 'block', border: '5px solid var(--mainha-light)' }}
           src="/images/cakes/titia.jpeg" />
          
          <h2 style={{ color: 'var(--mainha-dark)', fontSize: '1.75rem', marginBottom: '1rem', textAlign: 'center' }}>Nossa Doce Jornada</h2>
          <p>
            Bem-vindo ao universo de "Bolos de Mainha", um lugar onde cada fatia conta uma história de amor, tradição e sabor inigualável. Nossa jornada começou na cozinha de Mainha, um espaço mágico onde aromas de baunilha, chocolate e frutas frescas se misturavam com risadas e carinho.
          </p>
          <p>
            Desde pequena, Mainha aprendeu com sua avó os segredos da confeitaria caseira. Eram receitas simples, mas repletas de afeto, que transformavam ingredientes comuns em verdadeiras obras de arte comestíveis. Com o tempo, essa paixão cresceu e se tornou um sonho: compartilhar essas delícias com o mundo.
          </p>

          <h3 style={{ color: 'var(--mainha-medium)', fontSize: '1.5rem', marginTop: '2rem', marginBottom: '0.5rem', textAlign: 'center' }}>Conheça Mainha</h3>
          <p>
            Mainha é o coração e a alma da nossa confeitaria. Com mãos talentosas e um sorriso que ilumina qualquer ambiente, ela dedica seus dias a criar bolos que encantam os olhos e o paladar. Para ela, cozinhar é uma forma de expressar amor e carinho, e cada bolo que sai do seu forno carrega um pedacinho da sua história.
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
