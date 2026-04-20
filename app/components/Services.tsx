'use client';
import { useLanguage } from './LanguageContext';

const serviceIcons = ['🔧', '🛞', '❄️', '⚙️', '🔩', '📊'];
const serviceKeys = ['oil', 'tire', 'ac', 'timing', 'chassis', 'diag'];

export default function Services() {
  const { t } = useLanguage();
  return (
    <section className="section section-dark" id="services">
      <div className="section-header animate-on-scroll">
        <span className="section-label">{t('services.label')}</span>
        <h2 className="section-title">{t('services.title')}</h2>
        <p className="section-subtitle">{t('services.subtitle')}</p>
      </div>
      <div className="services-grid">
        {serviceKeys.map((key, i) => (
          <div className="service-card animate-on-scroll" key={key}>
            <div className="service-icon">{serviceIcons[i]}</div>
            <h3>{t(`svc.${key}.title`)}</h3>
            <p>{t(`svc.${key}.desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
