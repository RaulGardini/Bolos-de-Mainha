import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import "../index.css"

const History = () => {
  return (
    <>
    <div className='history'>
        <h1 className='titulo'>Jornada de Mainha</h1>
        <p className='texto'>Sempre amei bolos. Encontrei nesse nicho uma oportunidade de me dedicar a algo feito com muito amor. Foi em 2021 que tudo começou, com o incentivo da minha família, amigos e irmãos da Comunidade Shalom. Quanto mais eu buscava aprender, mais me identificava com a confeitaria. Sou apaixonada por chocolate e percebi que poderia criar verdadeiras maravilhas com uma ganache deliciosa e resistente. Além disso, os conhecimentos adquiridos na engenharia me ajudam a balancear receitas incríveis e encontrar o sabor ideal.</p>
    </div>
    </>
  );
};

export default History;