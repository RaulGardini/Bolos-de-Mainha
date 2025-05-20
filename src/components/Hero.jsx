
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Bolos de Mainha
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          O sabor caseiro que abraça a alma, feito com amor e os melhores ingredientes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <Link to="/bolos">
            <Button variant="primary" size="lg" className="button-primary">
              Veja Nossos Bolos <ArrowRight style={{ marginLeft: '8px', width: '20px', height: '20px' }} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
