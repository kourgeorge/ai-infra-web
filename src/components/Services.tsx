import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  FaBrain, 
  FaGraduationCap,
  FaChartLine, 
  FaSearch, 
  FaRobot,
  FaFileAlt,
  FaGavel,
  FaTools, 
  FaBalanceScale,
  FaArrowRight,
  FaCloud
} from 'react-icons/fa';
import styles from './Services.module.css';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    FaBrain,           // Private LLM Access
    FaGraduationCap,   // Custom Model Training
    FaChartLine,       // Observability & Governance
    FaSearch,          // Private RAG System
    FaRobot,           // Custom Agent Development
    FaFileAlt,         // Deep Document Research
    FaGavel,           // Litigation Recommendations
    FaTools,           // Proprietary Tools
    FaBalanceScale,    // Local Law Integration
    FaCloud            // Data Connectors
  ];

  const serviceSlugs = [
    'private-llm',
    'custom-model-training',
    'observability',
    'private-rag',
    'custom-agents',
    'deep-research',
    'litigation',
    'proprietary-tools',
    'local-law',
    'data-connectors',
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-title">
          <h2>{t.services.title}</h2>
          <p className="section-subtitle">{t.services.subtitle}</p>
        </div>

        <div className={`grid grid-3 ${styles.servicesGrid}`}>
          {t.services.items.map((service: any, index: number) => {
            const Icon = icons[index];
            const slug = serviceSlugs[index];
            return (
              <Link 
                key={index} 
                to={`/service/${slug}`}
                className={`card ${styles.serviceCard} ${styles.serviceCardLink}`}
              >
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className={styles.readMore}>
                  Learn More <FaArrowRight />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
