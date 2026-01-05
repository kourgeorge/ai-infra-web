import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <h2>{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
          <p className={styles.description}>{t.contact.description}</p>
        </div>

        <div className={styles.formWrapper}>
          <ContactForm showTitle />
        </div>
      </div>
    </section>
  );
};

export default Contact;
