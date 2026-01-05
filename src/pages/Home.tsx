import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import SecurityCompliance from '../components/SecurityCompliance';
import Services from '../components/Services';
import SupportedModels from '../components/SupportedModels';
import Features from '../components/Features';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollToId?: string } | null;
    if (location.pathname !== '/' || !state?.scrollToId) {
      return;
    }

    const section = document.getElementById(state.scrollToId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <SecurityCompliance />
      <Services />
      <SupportedModels />
      <Features />
      <Contact />
    </>
  );
};

export default Home;
