'use client';
import { useLanguage } from './LanguageContext';
import Image from 'next/image';

const items = [
  { src: '/images/hero-workshop.png', label: { fi: 'Korjaamomme', en: 'Our Workshop' } },
  { src: '/images/service-oil.png', label: { fi: 'Öljynvaihto', en: 'Oil Change' } },
  { src: '/images/service-tires.png', label: { fi: 'Rengastyöt', en: 'Tire Work' } },
  { src: '/images/gallery-engine.png', label: { fi: 'Moottorityöt', en: 'Engine Work' } },
  { src: '/images/gallery-brake.png', label: { fi: 'Jarruhuolto', en: 'Brake Service' } },
  { src: '/images/gallery-diagnostic.png', label: { fi: 'Diagnostiikka', en: 'Diagnostics' } },
];

export default function Gallery() {
  const { lang, t } = useLanguage();
  return (
    <section className="section section-dark" id="gallery">
      <div className="section-header animate-on-scroll">
        <span className="section-label">{t('gallery.label')}</span>
        <h2 className="section-title">{t('gallery.title')}</h2>
        <p className="section-subtitle">{t('gallery.subtitle')}</p>
      </div>
      <div className="gallery-grid">
        {items.map((item, i) => (
          <div className="gallery-item animate-on-scroll" key={i}>
            <Image src={item.src} alt={item.label[lang]} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
            <div className="gallery-overlay">
              <span>{item.label[lang]}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
