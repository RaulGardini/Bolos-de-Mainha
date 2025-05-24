import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import "../index.css"

const Observacao = () => {
  return (
    <>
    <div className='observacao'>
        <h1 className='titulo'>Observação</h1>
        <p className='texto'>Todos os nossos bolos são feitos por encomenda. Pedimos que os pedidos sejam realizados com antecedência mínima de 3 dias para bolos recheados e 24 horas para bolos simples.Para confirmar o pedido, é necessário o pagamento de 50% no ato do pedido.</p>
    </div>
    </>
  );
};

export default Observacao;