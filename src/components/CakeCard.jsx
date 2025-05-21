import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

const CakeCard = ({ cake }) => {
  const [showSizes, setShowSizes] = useState(false);

  const formatDescription = (description) => {
    const parts = description.split('•');
    
    return parts.map((part, index) => {
      if (index === 0 && part.trim() === '') return null;
      
      return (
        <div key={index} className="description-item">
          {index > 0 && <span className="bullet">•</span>} {part.trim()}
        </div>
      );
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="card">
        <CardHeader className="card-header p-0">
          <div className="cake-image-container">
            <img 
              src={cake.image} 
              alt={cake.name} 
              className="cake-image"
            />
          </div>
        </CardHeader>
        <CardContent className="card-content">
          <CardTitle className="card-title">{cake.name}</CardTitle>
          <div className="card-description">
            {formatDescription(cake.shortDescription)}
          </div>
          
          <div className="cake-sizes-table">
            <table className="sizes-table">
              <thead>
                <tr>
                  <th>Tamanho</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                {cake.sizes.map((sizeOption, index) => (
                  <tr key={index}>
                    <td>{sizeOption.size}</td>
                    <td>R$ {sizeOption.price.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <style jsx>{`
        .description-item {
          margin-bottom: 4px;
        }
        .bullet {
          display: inline-block;
          margin-right: 4px;
        }
      `}</style>
    </motion.div>
  );
};

export default CakeCard;
