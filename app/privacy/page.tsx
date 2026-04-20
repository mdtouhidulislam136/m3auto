'use client';
import { useLanguage } from '../components/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  const { lang } = useLanguage();

  if (lang === 'en') {
    return (
      <>
        <Navbar />
        <div className="privacy-page">
          <h1>Privacy Policy</h1>
          <p><strong>M3Auto Oy</strong> — Last updated: April 2025</p>

          <h2>1. Data Controller</h2>
          <p>M3Auto Oy<br />Lastikankatu 3, 33730 Tampere, Finland<br />Email: m3autooy@gmail.com<br />Phone: 040 0128831</p>

          <h2>2. Personal Data We Collect</h2>
          <p>We collect the following data when you use our contact form:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number (optional)</li>
            <li>Message content</li>
          </ul>

          <h2>3. Purpose of Data Processing</h2>
          <p>Your personal data is processed to:</p>
          <ul>
            <li>Respond to your inquiries</li>
            <li>Schedule service appointments</li>
            <li>Provide customer support</li>
          </ul>

          <h2>4. Legal Basis</h2>
          <p>Data processing is based on your explicit consent (GDPR Article 6(1)(a)) provided through the contact form checkbox.</p>

          <h2>5. Data Storage & Retention</h2>
          <p>Your data is stored securely and retained only for as long as necessary to fulfill the purpose of collection. Contact form data is deleted after 12 months unless an ongoing customer relationship exists.</p>

          <h2>6. Cookies</h2>
          <p>This website uses only essential cookies to remember your cookie consent preference. No third-party tracking cookies are used without your explicit consent.</p>

          <h2>7. Your Rights</h2>
          <p>Under GDPR, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Restrict processing</li>
            <li>Data portability</li>
            <li>Object to processing</li>
            <li>Lodge a complaint with the Finnish Data Protection Ombudsman (tietosuoja.fi)</li>
          </ul>

          <h2>8. Contact</h2>
          <p>For any questions regarding your personal data, please contact us at m3autooy@gmail.com.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="privacy-page">
        <h1>Tietosuojaseloste</h1>
        <p><strong>M3Auto Oy</strong> — Päivitetty: Huhtikuu 2025</p>

        <h2>1. Rekisterinpitäjä</h2>
        <p>M3Auto Oy<br />Lastikankatu 3, 33730 Tampere<br />Sähköposti: m3autooy@gmail.com<br />Puhelin: 040 0128831</p>

        <h2>2. Kerättävät henkilötiedot</h2>
        <p>Keräämme seuraavat tiedot yhteydenottolomakkeen kautta:</p>
        <ul>
          <li>Nimi</li>
          <li>Sähköpostiosoite</li>
          <li>Puhelinnumero (valinnainen)</li>
          <li>Viestin sisältö</li>
        </ul>

        <h2>3. Tietojen käsittelyn tarkoitus</h2>
        <p>Henkilötietojasi käsitellään seuraaviin tarkoituksiin:</p>
        <ul>
          <li>Yhteydenottoihisi vastaaminen</li>
          <li>Huoltoaikojen varaaminen</li>
          <li>Asiakastuen tarjoaminen</li>
        </ul>

        <h2>4. Oikeusperuste</h2>
        <p>Tietojen käsittely perustuu antamaasi suostumukseen (GDPR 6 artikla 1a), jonka annat yhteydenottolomakkeen valintaruudulla.</p>

        <h2>5. Tietojen säilytys</h2>
        <p>Tietosi säilytetään turvallisesti ja vain niin kauan kuin on tarpeen keräämisen tarkoituksen täyttämiseksi. Yhteydenottolomakkeen tiedot poistetaan 12 kuukauden kuluttua, ellei jatkuvaa asiakassuhdetta ole.</p>

        <h2>6. Evästeet</h2>
        <p>Tämä sivusto käyttää ainoastaan välttämättömiä evästeitä evästeasetustesi muistamiseen. Kolmannen osapuolen seurantaevästeitä ei käytetä ilman nimenomaista suostumustasi.</p>

        <h2>7. Oikeutesi</h2>
        <p>GDPR:n mukaan sinulla on oikeus:</p>
        <ul>
          <li>Saada pääsy henkilötietoihisi</li>
          <li>Oikaista virheelliset tiedot</li>
          <li>Pyytää tietojesi poistamista</li>
          <li>Rajoittaa käsittelyä</li>
          <li>Siirtää tiedot järjestelmästä toiseen</li>
          <li>Vastustaa käsittelyä</li>
          <li>Tehdä valitus tietosuojavaltuutetulle (tietosuoja.fi)</li>
        </ul>

        <h2>8. Yhteystiedot</h2>
        <p>Henkilötietojasi koskevissa kysymyksissä ota yhteyttä: m3autooy@gmail.com.</p>
      </div>
      <Footer />
    </>
  );
}
