
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastProvider } from '@/components/ui/toast';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import CakesPage from '@/pages/CakesPage';
import ContactPage from '@/pages/ContactPage';
import Layout from '@/components/Layout';
import { initGA, logPageView } from "./analytics";

function App() {

  useEffect(() => {
    initGA();
    logPageView();
  }, []);
  
  return (
    <Router>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="sobre" element={<AboutPage />} />
            <Route path="bolos" element={<CakesPage />} />
            <Route path="contato" element={<ContactPage />} />
          </Route>
        </Routes>
      </ToastProvider>
    </Router>
  );
}

export default App;
