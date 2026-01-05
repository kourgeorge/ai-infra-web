import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaShieldAlt, FaLock, FaEye, FaUserShield, FaCheckCircle, FaServer } from 'react-icons/fa';
import styles from './SecurityCompliance.module.css';

const SecurityCompliance: React.FC = () => {
  const { t } = useLanguage();

  const icons = [FaShieldAlt, FaLock, FaEye, FaUserShield, FaCheckCircle, FaServer];

  return (
    <section id="security" className={`section ${styles.security}`}>
      <div className="container">
        <div className="section-title">
          <h2>{t.security.title}</h2>
          <p className="section-subtitle">{t.security.subtitle}</p>
        </div>
        
        <div className={styles.warningBox}>
          <p className={styles.warningText}>{t.security.description}</p>
        </div>

        <div className={`grid grid-2 ${styles.guaranteesGrid}`}>
          {t.security.guarantees.map((guarantee: any, index: number) => {
            const Icon = icons[index];
            return (
              <div key={index} className={`card ${styles.guaranteeCard}`}>
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <h3>{guarantee.title}</h3>
                <p>{guarantee.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
