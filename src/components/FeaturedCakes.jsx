
import React from 'react';
import { cakes as allCakes } from '@/data/cakes';
import CakeCard from '@/components/CakeCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FeaturedCakes = () => {
  const featuredCakes = allCakes.filter(cake => cake.isFeatured).slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="container">
      <h2 className="section-title">Bolos em Destaque</h2>
      {featuredCakes.length > 0 ? (
        <motion.div 
          className="featured-cakes-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredCakes.map((cake) => (
            <motion.div key={cake.id} variants={itemVariants}>
              <CakeCard cake={cake} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center">Nenhum bolo em destaque no momento. Volte em breve!</p>
      )}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link to="/bolos">
          <Button variant="secondary" className="button-secondary">Ver Todos os Bolos</Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCakes;
