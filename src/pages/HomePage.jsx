
import React from 'react';
import Hero from '@/components/Hero';
import FeaturedCakes from '@/components/FeaturedCakes';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import { motion } from 'framer-motion';

const HomePage = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div>
      <Hero />
      <motion.section
        className="section"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <FeaturedCakes />
      </motion.section>
      
    </div>
  );
};

export default HomePage;
