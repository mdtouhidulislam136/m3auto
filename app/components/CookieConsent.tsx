'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

export default function CookieConsent() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem('m3auto-cookie-consent');
    if (!choice) setVisible(true);
  }, []);

  const handle = (accepted: boolean) => {
    localStorage.setItem('m3auto-cookie-consent', accepted ? 'accepted' : 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p>
        {t('cookie.text')} <a href="/privacy">{t('cookie.privacy')}</a>.
      </p>
      <div className="cookie-buttons">
        <button className="cookie-accept" onClick={() => handle(true)}>{t('cookie.accept')}</button>
        <button className="cookie-reject" onClick={() => handle(false)}>{t('cookie.reject')}</button>
      </div>
    </div>
  );
}
