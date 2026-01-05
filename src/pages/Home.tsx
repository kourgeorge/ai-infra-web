import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import SecurityCompliance from '../components/SecurityCompliance';
import Services from '../components/Services';
import SupportedModels from '../components/SupportedModels';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollToId?: string } | null;
    const hashId = location.hash ? location.hash.replace('#', '') : undefined;

    const targetId = state?.scrollToId || hashId;
    if (location.pathname !== '/' || !targetId) {
      return;
    }

    // Scroll after paint to ensure the section exists in the DOM
    requestAnimationFrame(() => {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }, [location]);

  return (
    <>
      <Hero />
      <SecurityCompliance />
      <Services />
      <SupportedModels />
    </>
  );
};

export default Home;
