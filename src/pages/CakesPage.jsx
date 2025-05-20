
import React, { useState, useMemo } from 'react';
import { cakes as allCakes } from '@/data/cakes';
import CakeCard from '@/components/CakeCard';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Todos', ...new Set(allCakes.map(cake => cake.category))];

const CakesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredCakes = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return allCakes;
    }
    return allCakes.filter(cake => cake.category === selectedCategory);
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } }
  };

  return (
    <div className="section">
      <div className="container">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Nossos Bolos Deliciosos
        </motion.h1>

        <div className="cakes-filter">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'button-primary' : 'button-outline'}
              style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div 
          className="cakes-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredCakes.map(cake => (
              <motion.div
                key={cake.id}
                variants={itemVariants}
                exit="exit" 
                layout
              >
                <CakeCard cake={cake} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredCakes.length === 0 && (
          <p className="text-center" style={{ marginTop: '2rem' }}>
            Nenhum bolo encontrado para esta categoria.
          </p>
        )}
      </div>
    </div>
  );
};

export default CakesPage;
