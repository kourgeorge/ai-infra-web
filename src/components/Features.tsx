import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaFlag, FaShieldAlt, FaChartBar } from 'react-icons/fa';
import styles from './Features.module.css';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const icons = [FaFlag, FaShieldAlt, FaChartBar];

  return (
    <section id="features" className={`section ${styles.features}`}>
      <div className="container">
        <div className="section-title">
          <h2>{t.features.title}</h2>
        </div>

        <div className={`grid grid-2 ${styles.featuresGrid}`}>
          {t.features.items.map((feature: any, index: number) => {
            const Icon = icons[index];
            return (
              <div key={index} className={`card ${styles.featureCard}`}>
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
