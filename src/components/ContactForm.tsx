import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './Contact.module.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xqeaoklq';

interface ContactFormProps {
  className?: string;
  showTitle?: boolean;
  variant?: 'default' | 'hero';
}

const ContactForm: React.FC<ContactFormProps> = ({
  className,
  showTitle = false,
  variant = 'default',
}) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'submitting'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== 'idle') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const { name, email, company, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim() || !isValidEmail(email)) {
      setStatus('error');
      setStatusMessage(t.contact.form.error);
      return;
    }

    try {
      setStatus('submitting');
      setStatusMessage('');
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      setStatus('success');
      setStatusMessage(t.contact.form.success);
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Contact form submission failed', error);
      setStatus('error');
      setStatusMessage(t.contact.form.error);
    }
  };

  const formClassNames = [
    styles.form,
    variant === 'hero' ? styles.heroForm : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  const messageRows = variant === 'hero' ? 3 : 4;

  return (
    <form className={formClassNames} onSubmit={handleSubmit} noValidate>
      {showTitle && <h3 className={styles.formTitle}>{t.contact.title}</h3>}

      <div className={styles.formRow}>
        <label htmlFor="name">{t.contact.form.nameLabel}</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder={t.contact.form.namePlaceholder}
          required
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="email">{t.contact.form.emailLabel}</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t.contact.form.emailPlaceholder}
          required
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="company">{t.contact.form.companyLabel}</label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder={t.contact.form.companyPlaceholder}
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="message">{t.contact.form.messageLabel}</label>
        <textarea
          id="message"
          name="message"
          rows={messageRows}
          value={formData.message}
          onChange={handleChange}
          placeholder={t.contact.form.messagePlaceholder}
          required
        />
      </div>

      {status === 'success' && (
        <div className={styles.statusSuccess} role="status" aria-live="polite">
          {statusMessage}
        </div>
      )}
      {status === 'error' && (
        <div className={styles.statusError} role="alert">
          {statusMessage}
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-lg"
        disabled={status === 'submitting'}
      >
        {t.contact.form.submit}
      </button>
    </form>
  );
};

export default ContactForm;
