
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: 'Ana Silva',
    avatarText: 'Cliente Satisfeita Ana Silva',
    text: 'O bolo de cenoura com chocolate é simplesmente divino! O melhor que já comi. Sabor de infância!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Pereira',
    avatarText: 'Cliente Satisfeito Carlos Pereira',
    text: 'Encomendei um bolo para o aniversário da minha filha e todos amaram. Super fofinho e delicioso.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mariana Costa',
    avatarText: 'Cliente Satisfeita Mariana Costa',
    text: 'Atendimento excelente e bolos maravilhosos. O de fubá com goiabada é meu favorito!',
    rating: 5,
  },
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="container">
      <h2 className="section-title">O que Nossos Clientes Dizem</h2>
      <motion.div 
        className="testimonials-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonialsData.map((testimonial) => (
          <motion.div key={testimonial.id} className="testimonial-card" variants={itemVariants}>
            <div className="testimonial-avatar">
              <img  
                alt={testimonial.avatarText}
                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1rem' }}
               src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              {Array(testimonial.rating).fill(0).map((_, i) => (
                <Star key={i} size={20} style={{ color: '#FFD700', fill: '#FFD700', marginRight: '2px' }} />
              ))}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">- {testimonial.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
