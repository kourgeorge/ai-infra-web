import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Legal from '../components/Legal';

const LegalPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const hashId = location.hash ? location.hash.replace('#', '') : undefined;
    if (!hashId) return;

    // Scroll after paint so the target element exists
    requestAnimationFrame(() => {
      const section = document.getElementById(hashId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }, [location.hash]);

  return <Legal />;
};

export default LegalPage;
