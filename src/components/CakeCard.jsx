
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

const CakeCard = ({ cake }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="card">
        <CardHeader>
          <img  className="card-image" alt={cake.name} src="https://images.unsplash.com/photo-1689957001836-2b76b99d1ea0" />
        </CardHeader>
        <CardContent className="card-content">
          <CardTitle className="card-title">{cake.name}</CardTitle>
          <CardDescription className="card-description">{cake.shortDescription}</CardDescription>
          <p className="card-price">R$ {cake.price.toFixed(2)}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CakeCard;
