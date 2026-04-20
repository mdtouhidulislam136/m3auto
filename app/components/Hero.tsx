'use client';
import { useLanguage } from './LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="hero-bg" style={{ backgroundImage: 'url(/images/hero-workshop.png)' }} />
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-badge">{t('hero.badge')}</span>
        <h1 className="hero-title">
          {t('hero.title1')}<br />
          <span className="red">{t('hero.title2')}</span>
        </h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">{t('hero.cta1')}</a>
          <a href="#services" className="btn-outline">{t('hero.cta2')}</a>
        </div>
      </div>
    </section>
  );
}
