import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Hero.module.css';
import ScrollLink from './ScrollLink';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            {t.hero.title}
          </h1>
          <p className={styles.subtitle}>{t.hero.subtitle}</p>
          <p className={styles.description}>{t.hero.description}</p>
          <div className={styles.ctaGroup}>
            <ScrollLink targetId="contact" className="btn btn-primary">
              {t.hero.cta}
            </ScrollLink>
            <ScrollLink targetId="security" className="btn btn-secondary">
              {t.hero.ctaSecondary}
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
