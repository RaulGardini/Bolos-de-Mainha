
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Bolos', path: '/bolos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          Bolos de Mainha
        </Link>
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? <X className="navbar-toggle-icon" /> : <Menu className="navbar-toggle-icon" />}
        </button>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              className="navbar-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
