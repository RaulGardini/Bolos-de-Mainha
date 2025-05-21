import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="logo-container">
          <motion.div
            className="logo-wrapper"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src="/images/cakes/logo.png"
              alt="Logo Confeitaria"
              className="logo-image"
            />
          </motion.div>
        </div>
        
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          O sabor caseiro que esquenta o coração, feito com os melhores ingredientes e muito amor!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <Link to="/bolos">
            <Button variant="primary" size="lg" className="button-primary">
              Veja Nossos Bolos <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;