'use client';
import { useLanguage } from './LanguageContext';

export default function Process() {
  const { t } = useLanguage();
  const steps = [1, 2, 3, 4];
  return (
    <section className="section section-darker" id="process">
      <div className="section-header animate-on-scroll">
        <span className="section-label">{t('process.label')}</span>
        <h2 className="section-title">{t('process.title')}</h2>
        <p className="section-subtitle">{t('process.subtitle')}</p>
      </div>
      <div className="process-grid">
        {steps.map(n => (
          <div className="process-step animate-on-scroll" key={n}>
            <div className="process-number">{n}</div>
            <h3>{t(`proc.${n}.title`)}</h3>
            <p>{t(`proc.${n}.desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
