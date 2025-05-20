
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/toast'; 
import { motion } from 'framer-motion';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form data submitted:', formData);
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado por entrar em contato. Responderemos em breve.",
      variant: "default",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <h3 style={{ color: 'var(--mainha-dark)', fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Envie uma Mensagem</h3>
      <div className="form-group">
        <label htmlFor="name" className="form-label">Nome Completo</label>
        <Input 
          type="text" 
          name="name" 
          id="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Seu nome" 
          required 
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">Seu Melhor E-mail</label>
        <Input 
          type="email" 
          name="email" 
          id="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="seuemail@exemplo.com" 
          required 
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="subject" className="form-label">Assunto</label>
        <Input 
          type="text" 
          name="subject" 
          id="subject" 
          value={formData.subject} 
          onChange={handleChange} 
          placeholder="Sobre o que gostaria de falar?" 
          required 
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="form-label">Sua Mensagem</label>
        <Textarea 
          name="message" 
          id="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Escreva sua mensagem aqui..." 
          rows="5" 
          required 
          className="form-textarea"
        />
      </div>
      <Button 
        type="submit" 
        variant="primary" 
        disabled={isSubmitting} 
        className="button-primary"
        style={{ width: '100%', padding: '0.875rem' }}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </Button>
    </motion.form>
  );
};

export default ContactForm;
