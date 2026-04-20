'use client';
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type Lang = 'fi' | 'en';

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  'nav.home': { fi: 'Koti', en: 'Home' },
  'nav.services': { fi: 'Palvelut', en: 'Services' },
  'nav.process': { fi: 'Prosessi', en: 'Process' },
  'nav.gallery': { fi: 'Työmme', en: 'Our Work' },
  'nav.contact': { fi: 'Yhteystiedot', en: 'Contact' },
  'nav.book': { fi: 'Varaa Nyt', en: 'Book Now' },

  // Hero
  'hero.badge': { fi: 'Ammattitaitoista Autohuoltoa', en: 'Professional Auto Service' },
  'hero.title1': { fi: 'Tarkkuutta', en: 'Precision' },
  'hero.title2': { fi: 'Uudelleen Määriteltynä', en: 'Redefined' },
  'hero.subtitle': { fi: 'M3Auto Oy:ssä autohuolto on tarkkuuden taidetta. Ammattitaitoisesta huollosta rakenteelliseen kunnossapitoon — olemme vaativan kuljettajan valinta.', en: 'At M3Auto Oy, automotive care is a discipline of precision. From expert maintenance to structural repairs — we are the choice for the discerning driver.' },
  'hero.cta1': { fi: 'Varaa Huolto', en: 'Book a Service' },
  'hero.cta2': { fi: 'Palvelumme', en: 'Our Services' },

  // Services
  'services.label': { fi: 'Mitä Teemme', en: 'What We Do' },
  'services.title': { fi: 'Palvelumme', en: 'Our Services' },
  'services.subtitle': { fi: 'Laadukasta autohuoltoa kokeneiden ammattilaisten toimesta', en: 'Quality auto service by experienced professionals' },
  'svc.oil.title': { fi: 'Öljynvaihto & Huolto', en: 'Oil Change & Maintenance' },
  'svc.oil.desc': { fi: 'Pidä moottorisi käynnissä sujuvasti säännöllisellä öljynvaihdolla ja kattavalla huollolla.', en: 'Keep your engine running smoothly with regular oil changes and comprehensive maintenance.' },
  'svc.tire.title': { fi: 'Rengaspalvelut', en: 'Tire Services' },
  'svc.tire.desc': { fi: 'Laadukkaat renkaat, rengasvaihto, tasapainotus ja säilytys — kaikki yhdestä paikasta.', en: 'Quality tires, mounting, balancing, and storage — all from one place.' },
  'svc.ac.title': { fi: 'Ilmastointihuolto', en: 'AC Service' },
  'svc.ac.desc': { fi: 'Ilmastointijärjestelmän tarkastus, täyttö ja huolto kaikille automerkille.', en: 'Air conditioning inspection, refill, and service for all car brands.' },
  'svc.timing.title': { fi: 'Jakohihnan Vaihto', en: 'Timing Belt Replacement' },
  'svc.timing.desc': { fi: 'Jakohihnan ja vesipumpun vaihto ammattitaidolla — suojaa moottoriasi.', en: 'Expert timing belt and water pump replacement — protect your engine.' },
  'svc.chassis.title': { fi: 'Alustatyöt', en: 'Chassis Work' },
  'svc.chassis.desc': { fi: 'Jousitus, iskunvaimentimet, tukivarret ja muut alustakorjaukset.', en: 'Suspension, shock absorbers, control arms, and other chassis repairs.' },
  'svc.diag.title': { fi: 'Katsastus & Diagnostiikka', en: 'Inspection & Diagnostics' },
  'svc.diag.desc': { fi: 'Modernilla diagnostiikkalaitteistolla vianhaku ja katsastuskunnostus.', en: 'Modern diagnostic equipment for fault finding and inspection preparation.' },

  // Process
  'process.label': { fi: 'Näin Toimimme', en: 'How We Work' },
  'process.title': { fi: 'Prosessimme', en: 'Our Process' },
  'process.subtitle': { fi: 'Yksinkertainen ja tehokas tapa huoltaa autosi', en: 'A simple and efficient way to service your car' },
  'proc.1.title': { fi: 'Ajanvaraus', en: 'Book Appointment' },
  'proc.1.desc': { fi: 'Soita tai lähetä viesti', en: 'Call or send a message' },
  'proc.2.title': { fi: 'Diagnoosi', en: 'Diagnosis' },
  'proc.2.desc': { fi: 'Perusteellinen tarkastus', en: 'Thorough inspection' },
  'proc.3.title': { fi: 'Korjaus', en: 'Repair' },
  'proc.3.desc': { fi: 'Ammattitaitoinen työ', en: 'Expert workmanship' },
  'proc.4.title': { fi: 'Laaduntarkastus', en: 'Quality Check' },
  'proc.4.desc': { fi: 'Lopputarkistus ja luovutus', en: 'Final inspection & delivery' },

  // Gallery
  'gallery.label': { fi: 'Portfolio', en: 'Portfolio' },
  'gallery.title': { fi: 'Työmme', en: 'Our Work' },
  'gallery.subtitle': { fi: 'Näytteitä ammattitaitoisesta työstämme', en: 'Examples of our professional work' },

  // Contact
  'contact.label': { fi: 'Ota Yhteyttä', en: 'Get in Touch' },
  'contact.title': { fi: 'Yhteystiedot', en: 'Contact Us' },
  'contact.subtitle': { fi: 'Kysy lisätietoja tai varaa aika', en: 'Ask for more info or book an appointment' },
  'contact.name': { fi: 'Nimi', en: 'Name' },
  'contact.email': { fi: 'Sähköposti', en: 'Email' },
  'contact.phone': { fi: 'Puhelin', en: 'Phone' },
  'contact.message': { fi: 'Viesti', en: 'Message' },
  'contact.consent': { fi: 'Hyväksyn, että tietojani käsitellään', en: 'I consent to my data being processed per the' },
  'contact.privacy': { fi: 'tietosuojaselosteen', en: 'privacy policy' },
  'contact.send': { fi: 'Lähetä Viesti', en: 'Send Message' },
  'contact.info': { fi: 'Yhteystiedot', en: 'Contact Info' },
  'contact.address.label': { fi: 'Osoite', en: 'Address' },
  'contact.address': { fi: 'Lastikankatu 3, 33730 Tampere', en: 'Lastikankatu 3, 33730 Tampere, Finland' },
  'contact.phone.label': { fi: 'Puhelin', en: 'Phone' },
  'contact.phone.value': { fi: '040 0128831', en: '040 0128831' },
  'contact.email.label': { fi: 'Sähköposti', en: 'Email' },
  'contact.email.value': { fi: 'm3autooy@gmail.com', en: 'm3autooy@gmail.com' },
  'contact.hours.label': { fi: 'Aukioloajat', en: 'Opening Hours' },
  'contact.hours.value': { fi: 'Ma–Pe: 8:00–17:00\nLa–Su: Suljettu', en: 'Mon–Fri: 8:00–17:00\nSat–Sun: Closed' },

  // Footer
  'footer.desc': { fi: 'Luotettava autokorjaamo Tampereella. Ammattitaitoista huoltoa kaikkiin ajoneuvotarpeisiisi.', en: 'Trusted auto repair shop in Tampere. Professional service for all your vehicle needs.' },
  'footer.links': { fi: 'Linkit', en: 'Links' },
  'footer.services': { fi: 'Palvelut', en: 'Services' },
  'footer.legal': { fi: 'Laillinen', en: 'Legal' },
  'footer.privacy': { fi: 'Tietosuojaseloste', en: 'Privacy Policy' },
  'footer.terms': { fi: 'Käyttöehdot', en: 'Terms of Service' },
  'footer.copyright': { fi: '© 2025 M3Auto Oy. Kaikki oikeudet pidätetään.', en: '© 2025 M3Auto Oy. All rights reserved.' },

  // Cookie
  'cookie.text': { fi: 'Käytämme evästeitä parantaaksemme sivuston käyttökokemusta. Lisätietoja', en: 'We use cookies to improve your experience. Learn more in our' },
  'cookie.privacy': { fi: 'tietosuojaselosteessamme', en: 'privacy policy' },
  'cookie.accept': { fi: 'Hyväksy', en: 'Accept' },
  'cookie.reject': { fi: 'Hylkää', en: 'Reject' },
};

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LangContextType>({
  lang: 'fi',
  toggleLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fi');
  const toggleLang = useCallback(() => setLang(l => l === 'fi' ? 'en' : 'fi'), []);
  const t = useCallback((key: string) => translations[key]?.[lang] || key, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
