'use client';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>M3AUTO</h3>
          <p>{t('footer.desc')}</p>
        </div>
        <div>
          <h4>{t('footer.links')}</h4>
          <ul>
            <li><a href="#home">{t('nav.home')}</a></li>
            <li><a href="#services">{t('nav.services')}</a></li>
            <li><a href="#process">{t('nav.process')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
          </ul>
        </div>
        <div>
          <h4>{t('footer.services')}</h4>
          <ul>
            <li><a href="#services">{t('svc.oil.title')}</a></li>
            <li><a href="#services">{t('svc.tire.title')}</a></li>
            <li><a href="#services">{t('svc.ac.title')}</a></li>
            <li><a href="#services">{t('svc.diag.title')}</a></li>
          </ul>
        </div>
        <div>
          <h4>{t('footer.legal')}</h4>
          <ul>
            <li><a href="/privacy">{t('footer.privacy')}</a></li>
            <li><a href="/privacy">{t('footer.terms')}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t('footer.copyright')}</span>
        <span>Lastikankatu 3, 33730 Tampere</span>
      </div>
    </footer>
  );
}
