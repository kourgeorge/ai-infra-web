import React, { useEffect } from 'react';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return <Contact />;
};

export default ContactPage;
