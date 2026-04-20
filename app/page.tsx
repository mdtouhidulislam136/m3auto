'use client';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStrip from './components/BrandStrip';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <BrandStrip />
      <Services />
      <Process />
      <Gallery />
      <Contact />
      <Footer />
      <CookieConsent />
    </>
  );
}
