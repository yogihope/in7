import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import LiveDrops from '@/components/LiveDrops';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';

const SITE_URL = 'https://www.in7gaming.co';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'IN7 Game · Download IN7 APK Free & Win Real Cash Online',
    template: '%s | IN7 Gaming',
  },
  description:
    'Play IN7 game online · download the IN7 APK, register in 60 sec, claim ₹777 welcome bonus and withdraw winnings to UPI in 5 minutes. India’s #1 IN7 gaming app.',
  applicationName: 'IN7 Gaming',
  keywords: [
    'in7',
    'in7 game',
    'in7 gaming',
    'in7 game apk',
    'in7 apk',
    'in7 app',
    'in7 game app',
    'in7 game download',
    'in7 game online',
    'in7 game online apk',
    'in7 apk download',
    'in7 game register',
    'in7 game login',
    'in7 game bonus',
    'in7 game review',
    'in7 real or fake',
    'in7 withdrawal',
    'in7 spin wheel',
    'in7 ₹777 bonus',
    'in7 gaming co',
    'in7 teen patti',
    'in7 andar bahar',
    'in7 dragon vs tiger',
    'in7 rummy',
    'in7 lucky 7',
    'teen patti real money',
    'andar bahar online',
    'dragon vs tiger app',
    'rummy real money',
  ],
  authors: [{ name: 'IN7 Gaming co.', url: SITE_URL }],
  creator: 'IN7 Gaming co.',
  publisher: 'IN7 Gaming co.',
  category: 'Games',
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
      'hi-IN': '/',
    },
  },
  openGraph: {
    siteName: 'IN7 Gaming',
    locale: 'en_IN',
    type: 'website',
    title: 'IN7 Game · Download IN7 APK & Win Real Cash Online',
    description:
      'Download IN7 game APK, register free, claim ₹777 welcome bonus and withdraw winnings to UPI in minutes. India’s favourite skill-based IN7 gaming app.',
    url: SITE_URL,
    images: [
      {
        url: '/in7-game-banner.jpeg',
        width: 1200,
        height: 630,
        alt: 'IN7 Game · Download IN7 APK & Play IN7 Online',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IN7 Game · Download IN7 APK & Win Cash',
    description: 'Download IN7 game APK free, claim ₹777 bonus, withdraw to UPI fast.',
    images: ['/in7-game-banner.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.jpg', type: 'image/jpeg' },
    ],
    apple: '/icon.jpg',
  },
  verification: { google: 'H0_1-1ApyMPxCVQQICx51FXmozHXG5YjnmUI3p7mFkY' },
  formatDetection: { telephone: false, email: false, address: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Fraunces:opsz,wght,SOFT@9..144,400..700,30&display=swap"
        />
        <meta name="theme-color" content="#b91c2c" />
        <meta name="apple-mobile-web-app-title" content="IN7 Gaming" />
        <link rel="alternate" hrefLang="en-in" href={SITE_URL} />
        <link rel="alternate" hrefLang="hi-in" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
      </head>
      <body style={{ paddingTop: 64 }}>
        <Navbar />
        <main>{children}</main>
        <LiveDrops />
        <MobileCTA />
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                '@id': `${SITE_URL}/#website`,
                name: 'IN7 Gaming',
                alternateName: ['IN7', 'IN7 Game', 'IN7 Gaming co.', 'in 7 gaming', 'in7 apk', 'in7 game online', 'in7 game app'],
                url: SITE_URL,
                inLanguage: ['en-IN', 'hi-IN'],
                publisher: { '@id': `${SITE_URL}/#organization` },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Organization',
                '@id': `${SITE_URL}/#organization`,
                name: 'IN7 Gaming co.',
                alternateName: 'IN7',
                url: SITE_URL,
                logo: {
                  '@type': 'ImageObject',
                  url: `${SITE_URL}/in7-game-logo.jpg`,
                  width: 512,
                  height: 512,
                  caption: 'IN7 Game logo · IN7 Gaming co.',
                },
                contactPoint: [
                  {
                    '@type': 'ContactPoint',
                    contactType: 'customer support',
                    email: 'hello@in7gaming.co',
                    availableLanguage: ['English', 'Hindi'],
                    areaServed: 'IN',
                  },
                  {
                    '@type': 'ContactPoint',
                    contactType: 'grievance officer',
                    email: 'grievance@in7gaming.co',
                    availableLanguage: ['English', 'Hindi'],
                    areaServed: 'IN',
                  },
                ],
                sameAs: [SITE_URL],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'MobileApplication',
                '@id': `${SITE_URL}/#in7-app`,
                name: 'IN7 Game',
                operatingSystem: 'Android 6.0+',
                applicationCategory: 'GameApplication',
                applicationSubCategory: 'Skill-based real-money gaming',
                downloadUrl: IN7_DOWNLOAD_URL,
                installUrl: IN7_DOWNLOAD_URL,
                fileSize: '48MB',
                softwareVersion: '4.7.1',
                inLanguage: ['en-IN', 'hi-IN'],
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'INR',
                  availability: 'https://schema.org/InStock',
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.6',
                  bestRating: '5',
                  worstRating: '1',
                  ratingCount: '52840',
                  reviewCount: '8420',
                },
                publisher: { '@id': `${SITE_URL}/#organization` },
                image: `${SITE_URL}/in7-game-app-screenshot.jpeg`,
                screenshot: `${SITE_URL}/in7-game-app-screenshot.jpeg`,
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}
