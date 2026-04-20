import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from './components/LanguageContext';

export const metadata: Metadata = {
  title: 'M3Auto Oy - Luotettava Autokorjaamo Tampereella',
  description: 'M3Auto Oy on ammattitaitoinen autokorjaamo Tampereella. Öljynvaihto, rengaspalvelut, ilmastointihuolto, jakohihnan vaihto, alustatyöt ja diagnostiikka. Soita 040 0128831.',
  keywords: 'autokorjaamo, tampere, öljynvaihto, rengaspalvelut, autohuolto, M3Auto, korjaamo',
  openGraph: {
    title: 'M3Auto Oy - Luotettava Autokorjaamo Tampereella',
    description: 'Ammattitaitoista autokorjausta Tampereella. Öljynvaihto, rengaspalvelut, diagnostiikka ja paljon muuta.',
    url: 'https://m3auto.fi',
    siteName: 'M3Auto Oy',
    locale: 'fi_FI',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://m3auto.fi' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <head>
        <meta name="geo.region" content="FI-11" />
        <meta name="geo.placename" content="Tampere" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoRepair',
              name: 'M3Auto Oy',
              description: 'Luotettava autokorjaamo Tampereella',
              url: 'https://m3auto.fi',
              telephone: '+358400128831',
              email: 'm3autooy@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Lastikankatu 3',
                addressLocality: 'Tampere',
                postalCode: '33730',
                addressCountry: 'FI',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '17:00',
                },
              ],
              areaServed: { '@type': 'City', name: 'Tampere' },
            }),
          }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
