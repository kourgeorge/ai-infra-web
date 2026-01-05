import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import styles from './ServiceDetail.module.css';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { t } = useLanguage();

  const serviceKeys: Record<string, keyof typeof t.services.details> = {
    'private-llm': 'privateLLM',
    'observability': 'observability',
    'private-rag': 'privateRAG',
    'custom-agents': 'customAgents',
    'deep-research': 'deepResearch',
    'litigation': 'litigation',
    'proprietary-tools': 'proprietaryTools',
    'local-law': 'localLaw',
    'data-connectors': 'dataConnectors',
  };

  const detailKey = serviceId ? serviceKeys[serviceId] : null;
  const serviceDetail = detailKey ? t.services.details[detailKey] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [serviceId]);

  if (!serviceDetail) {
    return (
      <div className={styles.container}>
        <div className="container">
          <h1>Service not found</h1>
          <Link to="/" className="btn btn-primary">Go Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.serviceDetail}>
      <div className="container">
        <Link to="/" className={styles.backLink}>
          <FaArrowLeft /> {t.services.detailPage.backToServices}
        </Link>
        
        <div className={styles.header}>
          <h1>{serviceDetail.title}</h1>
          <p className={styles.subtitle}>{serviceDetail.subtitle}</p>
          <p className={styles.overview}>{serviceDetail.overview}</p>
          {serviceDetail.detailedDescription && (
            <p className={styles.detailedDescription}>{serviceDetail.detailedDescription}</p>
          )}
        </div>

        <section className={styles.useCases}>
          <h2>{t.services.detailPage.useCases}</h2>
          <div className={styles.useCasesGrid}>
            {serviceDetail.useCases.map((useCase: any, index: number) => (
              <div key={index} className={styles.useCaseCard}>
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.benefits}>
          <h2>{t.services.detailPage.keyBenefits}</h2>
          <div className={styles.benefitsList}>
            {serviceDetail.benefits.map((benefit: any, index: number) => (
              <div key={index} className={styles.benefitItem}>
                <FaCheckCircle className={styles.checkIcon} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {serviceDetail.howItWorks && (
          <section className={styles.howItWorks}>
            <h2>{t.services.detailPage.howItWorks}</h2>
            <p className={styles.howItWorksText}>{serviceDetail.howItWorks}</p>
          </section>
        )}

        <section className={styles.cta}>
          <h2>{t.services.detailPage.readyToStart}</h2>
          <p>{t.services.detailPage.contactDescription}</p>
          <a href="/#contact" className="btn btn-primary btn-lg">
            {t.contact.button}
          </a>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetail;
