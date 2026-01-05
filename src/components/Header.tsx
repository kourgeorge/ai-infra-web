import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Header.module.css';
import ScrollLink from './ScrollLink';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'he' ? 'en' : 'he');
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <h2>Tikanify</h2>
          </div>
          <ul className={styles.navList}>
            <li><ScrollLink targetId="services">{t.header.nav.services}</ScrollLink></li>
            <li><ScrollLink targetId="security">{t.header.nav.security}</ScrollLink></li>
            <li><ScrollLink targetId="features">{t.header.nav.features}</ScrollLink></li>
            <li><ScrollLink targetId="contact">{t.header.nav.contact}</ScrollLink></li>
          </ul>
          <button className={styles.languageButton} onClick={toggleLanguage}>
            {t.header.language}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
