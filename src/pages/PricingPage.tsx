import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollLink from '../components/ScrollLink';
import styles from './PricingPage.module.css';

const PricingPage: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className={styles.pricingPage}>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <span className={styles.tag}>{t.pricing.title}</span>
          <h1>{t.pricing.title}</h1>
          <p className={styles.subtitle}>{t.pricing.subtitle}</p>
          <p className={styles.highlight}>{t.pricing.highlight}</p>

          <div className={styles.ctaRow}>
            <ScrollLink targetId="contact" className="btn btn-primary">
              {t.pricing.ctaPrimary}
            </ScrollLink>
            <ScrollLink targetId="security" className="btn btn-secondary">
              {t.pricing.ctaSecondary}
            </ScrollLink>
          </div>
        </div>
      </section>

      <section className={`section ${styles.tiersSection}`}>
        <div className="container">
          <div className={`grid grid-3 ${styles.tiersGrid}`}>
            {t.pricing.tiers.map((tier: any) => (
              <div key={tier.name} className={`card ${styles.tierCard}`}>
                <div className={styles.tierHeader}>
                  <h3>{tier.name}</h3>
                  <p className={styles.price}>{tier.price}</p>
                  <p className={styles.detail}>{tier.detail}</p>
                </div>

                <ul className={styles.features}>
                  {tier.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <p className={styles.note}>{tier.note}</p>
              </div>
            ))}
          </div>

          <p className={styles.footerNote}>{t.pricing.footerNote}</p>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
