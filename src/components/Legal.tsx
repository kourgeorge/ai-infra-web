import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Legal.module.css';

const Legal: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="legal" className={`section ${styles.legal}`}>
      <div className="container">
        <div className="section-title">
          <h2>{t.legal.title}</h2>
          <p className="section-subtitle">{t.legal.subtitle}</p>
        </div>

        <div className={`grid grid-2 ${styles.legalGrid}`}>
          {t.legal.cards.map((card: any) => (
            <div key={card.id} id={card.id} className={`card ${styles.legalCard}`}>
              <div className={styles.cardHeader}>
                <span className={styles.tag}>{card.tag}</span>
                <h3>{card.title}</h3>
                <p className={styles.description}>{card.description}</p>
              </div>

              <ul className={styles.points}>
                {card.points.map((point: any, index: number) => (
                  <li key={index} className={styles.point}>
                    <h4>{point.title}</h4>
                    <p>{point.description}</p>
                  </li>
                ))}
              </ul>

              <p className={styles.note}>{card.note}</p>
            </div>
          ))}
        </div>

        <p className={styles.lastUpdated}>{t.legal.lastUpdated}</p>
      </div>
    </section>
  );
};

export default Legal;
