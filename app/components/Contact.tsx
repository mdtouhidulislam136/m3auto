'use client';
import { useState } from 'react';
import { useLanguage } from './LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [consent, setConsent] = useState(false);

  return (
    <section className="section section-darker" id="contact">
      <div className="section-header animate-on-scroll">
        <span className="section-label">{t('contact.label')}</span>
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="section-subtitle">{t('contact.subtitle')}</p>
      </div>
      <div className="contact-wrapper">
        <form className="contact-form animate-on-scroll" onSubmit={e => { e.preventDefault(); if (consent) alert('Viesti lähetetty! / Message sent!'); }}>
          <div className="form-group">
            <label htmlFor="name">{t('contact.name')}</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('contact.email')}</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">{t('contact.phone')}</label>
            <input type="tel" id="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t('contact.message')}</label>
            <textarea id="message" required />
          </div>
          <label className="form-consent">
            <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} required />
            <span>{t('contact.consent')} <a href="/privacy">{t('contact.privacy')}</a>.</span>
          </label>
          <button type="submit" className="btn-primary">{t('contact.send')}</button>
        </form>
        <div className="contact-info animate-on-scroll">
          <h3>{t('contact.info')}</h3>
          <div className="contact-detail">
            <div className="contact-detail-icon">📍</div>
            <div>
              <h4>{t('contact.address.label')}</h4>
              <p>{t('contact.address')}</p>
            </div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail-icon">📞</div>
            <div>
              <h4>{t('contact.phone.label')}</h4>
              <p><a href="tel:+358400128831">{t('contact.phone.value')}</a></p>
            </div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail-icon">✉️</div>
            <div>
              <h4>{t('contact.email.label')}</h4>
              <p><a href="mailto:m3autooy@gmail.com">{t('contact.email.value')}</a></p>
            </div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail-icon">🕐</div>
            <div>
              <h4>{t('contact.hours.label')}</h4>
              <p style={{ whiteSpace: 'pre-line' }}>{t('contact.hours.value')}</p>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1910.5!2d23.79!3d61.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLastikankatu+3%2C+Tampere!5e0!3m2!1sfi!2sfi!4v1"
              title="M3Auto Location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
