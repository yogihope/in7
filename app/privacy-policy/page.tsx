import type { Metadata } from 'next';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'IN7 Privacy Policy · Data Use & Player Rights',
  description:
    'IN7 Gaming privacy policy · what data IN7 collects, why, how we store and protect it, and your rights as an IN7 player. Last updated April 2026.',
  alternates: { canonical: '/privacy-policy' },
  keywords: ['in7 privacy policy', 'in7 data protection', 'in7 privacy', 'in7 gaming privacy'],
  openGraph: {
    title: 'IN7 Privacy Policy',
    description: 'IN7 privacy policy · data use, retention and player rights.',
    url: '/privacy-policy',
  },
};

const SECTIONS: { h: string; body: string[] }[] = [
  {
    h: '1. Who we are',
    body: [
      'IN7 Gaming co. (“IN7”, “we”, “us”) operates the IN7 game application and the website at in7gaming.co. This privacy policy explains how we handle the information you share with us when you register, play, deposit, or withdraw on IN7.',
    ],
  },
  {
    h: '2. What we collect',
    body: [
      'Account information: mobile number, username, device identifier.',
      'KYC information (collected only when you initiate a withdrawal): PAN card image, UPI ID, selfie / liveness check.',
      'Gameplay information: rounds played, stakes, wins, losses, time-of-day patterns. We use this to detect collusion and to size table difficulty.',
      'Technical information: app version, OS version, network type, crash logs. Anonymised before storage.',
    ],
  },
  {
    h: '3. Why we collect it',
    body: [
      'To create and operate your IN7 account.',
      'To process deposits and withdrawals through RBI-aligned UPI / banking partners.',
      'To meet our regulatory obligations under Indian gaming and IT rules.',
      'To keep tables fair, anti-collusion, anti-bot, anti-multi-account checks.',
      'To improve the app, performance, stability, and feature quality.',
    ],
  },
  {
    h: '4. Who we share it with',
    body: [
      'Payment processors and banks, only with the data necessary to process your transaction.',
      'KYC verification partners, for the limited purpose of confirming your identity.',
      'Law-enforcement authorities, only on a valid written request.',
      'We never sell your information. We never share it with advertisers.',
    ],
  },
  {
    h: '5. How long we keep it',
    body: [
      'Account and KYC data: as long as your IN7 account is active, plus 5 years (mandated by Indian financial regulations).',
      'Gameplay logs: 24 months on hot storage, archived for 5 years.',
      'Crash logs: 90 days.',
    ],
  },
  {
    h: '6. Your rights',
    body: [
      'You can request a copy of all data we hold about you.',
      'You can request correction of inaccurate data.',
      'You can request deletion of your account, note that some KYC/financial data must legally be retained for the windows above.',
      'Email grievance@in7gaming.co for any of the above. Responses within 7 working days.',
    ],
  },
  {
    h: '7. Security',
    body: [
      'TLS 1.3 in transit. AES-256 at rest. OTP + device-binding for login. Quarterly third-party security audits. Critical incidents are disclosed within 72 hours of detection.',
    ],
  },
  {
    h: '8. Children',
    body: [
      'IN7 is not for users under 18. We block sign-ups when the KYC indicates minor age. Parents who believe their child has registered can email grievance@in7gaming.co for immediate account removal.',
    ],
  },
  {
    h: '9. Changes',
    body: [
      'We update this policy when laws or features change. Material changes are pushed as an in-app notice. The “last updated” date below reflects the most recent revision.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">/ privacy policy</span>
          <h1 className="display" style={{ marginTop: 14 }}>IN7 Privacy Policy</h1>
          <p className="muted" style={{ marginTop: 16, fontSize: '0.95rem' }}>Last updated: April 2026</p>
        </div>
      </section>

      <section style={{ paddingBottom: 96 }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          {SECTIONS.map((s, i) => (
            <div key={i} style={{ marginTop: i ? 36 : 0 }}>
              <h2 className="serif" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em', color: '#14070a' }}>{s.h}</h2>
              {s.body.map((p, j) => (
                <p key={j} style={{ marginTop: 12, fontSize: '1rem', lineHeight: 1.75, color: 'rgba(20,7,10,0.78)' }}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'Privacy Policy', href: '/privacy-policy' },
          ])
        )}
      />
    </>
  );
}
