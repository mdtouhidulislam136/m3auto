'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <a href="#home" className="nav-logo">
        <span className="nav-logo-icon">M3</span>
        M3AUTO
      </a>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>{t('nav.home')}</a></li>
        <li><a href="#services" onClick={() => setMenuOpen(false)}>{t('nav.services')}</a></li>
        <li><a href="#process" onClick={() => setMenuOpen(false)}>{t('nav.process')}</a></li>
        <li><a href="#gallery" onClick={() => setMenuOpen(false)}>{t('nav.gallery')}</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>{t('nav.contact')}</a></li>
      </ul>
      <div className="nav-right">
        <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
          {lang === 'fi' ? 'EN' : 'FI'}
        </button>
        <a href="#contact" className="btn-book">{t('nav.book')}</a>
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
