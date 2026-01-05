import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Footer.module.css';
import ScrollLink from './ScrollLink';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'he' ? 'en' : 'he');
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>AI Law Infrastructure</h3>
            <p>{t.footer.description}</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Links</h4>
            <ul>
              <li><ScrollLink targetId="services">{t.footer.links.services}</ScrollLink></li>
              <li><Link to="/pricing">{t.footer.links.pricing}</Link></li>
              <li><ScrollLink targetId="security">{t.footer.links.security}</ScrollLink></li>
              <li><ScrollLink targetId="contact">{t.footer.links.contact}</ScrollLink></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <ul>
              <li><Link to="/legal#privacy">{t.footer.links.privacy}</Link></li>
              <li><Link to="/legal#terms">{t.footer.links.terms}</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <button className={styles.languageButton} onClick={toggleLanguage}>
              {t.header.language}
            </button>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
