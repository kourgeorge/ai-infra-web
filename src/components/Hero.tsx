import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Hero.module.css';
import ScrollLink from './ScrollLink';
import ContactForm from './ContactForm';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const isHebrew = language === 'he';

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={`${styles.content} ${styles.heroText} ${isHebrew ? styles.rtlAlign : ''}`}>
            <h1 className={`${styles.title} ${isHebrew ? styles.rtlTitle : ''}`}>
              {t.hero.title}
            </h1>
            <p className={styles.subtitle}>{t.hero.subtitle}</p>
            <p className={styles.description}>{t.hero.description}</p>
            <div className={styles.ctaGroup}>
              {t.hero.cta && (
                <ScrollLink targetId="contact" className="btn btn-primary">
                  {t.hero.cta}
                </ScrollLink>
              )}
              {t.hero.ctaSecondary && (
                <ScrollLink targetId="security" className="btn btn-secondary">
                  {t.hero.ctaSecondary}
                </ScrollLink>
              )}
            </div>
          </div>

          <div id="contact" className={styles.formContainer}>
            <ContactForm showTitle variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
