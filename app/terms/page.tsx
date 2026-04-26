import type { Metadata } from 'next';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'IN7 Terms of Use · Account, Deposits & Fair Play',
  description:
    'IN7 Gaming terms of use · eligibility, account rules, deposits, withdrawals, fair play, bonuses and dispute resolution. Read before you play IN7.',
  alternates: { canonical: '/terms' },
  keywords: ['in7 terms of use', 'in7 terms', 'in7 gaming terms', 'in7 rules', 'in7 fair play'],
  openGraph: {
    title: 'IN7 Terms of Use',
    description: 'IN7 Gaming terms · eligibility, account, deposits, withdrawals, fair play.',
    url: '/terms',
  },
};

const SECTIONS: { h: string; body: string[] }[] = [
  {
    h: '1. Eligibility',
    body: [
      'You must be 18 years or older to register for or play on IN7.',
      'You must be located in an Indian state where skill-based real money gaming is legally permitted. IN7 automatically restricts access from prohibited states.',
      'You must register with information that is true, current, and complete.',
    ],
  },
  {
    h: '2. Your account',
    body: [
      'One IN7 account per person. Duplicate accounts are detected via mobile number, device fingerprint, and PAN, and result in suspension of all linked accounts.',
      'You are responsible for maintaining access to the mobile number associated with your account. Lost-phone account recovery requires a fresh KYC step.',
      'Your account is non-transferable.',
    ],
  },
  {
    h: '3. Deposits & withdrawals',
    body: [
      'Deposits are processed through licensed payment partners. Minimum deposit varies by room.',
      'Withdrawals require a verified KYC. Minimum withdrawal: ₹100. Withdrawal-to-UPI median time: 5 minutes (verified accounts).',
      'IN7 may delay or hold a withdrawal pending review when fraud, collusion, or suspicious activity is flagged.',
    ],
  },
  {
    h: '4. Fair play',
    body: [
      'Use of bots, scripts, or unauthorised third-party software is prohibited.',
      'Collusion (table coordination between accounts) is prohibited and detected via automated and manual review.',
      'Match-fixing, intentional dumping, and abuse of bonus mechanics result in immediate suspension and forfeiture of balance.',
    ],
  },
  {
    h: '5. Bonuses',
    body: [
      'Bonuses are subject to the conditions printed on /in7-game-bonus.',
      'Bonuses cannot be transferred between accounts.',
      'IN7 reserves the right to revoke a bonus when the issuing condition is breached.',
    ],
  },
  {
    h: '6. Refunds',
    body: [
      'Real-money games are non-refundable once a hand or round begins.',
      'Failed deposits are auto-refunded by the payment partner within 5–7 working days.',
      'Disputed transactions can be raised at grievance@in7gaming.co with supporting evidence.',
    ],
  },
  {
    h: '7. Termination',
    body: [
      'You may close your IN7 account at any time from in-app settings. Withdrawal of any remaining balance is processed as part of the closure flow.',
      'IN7 may suspend or terminate accounts that breach these terms, with reasonable notice unless the breach is severe.',
    ],
  },
  {
    h: '8. Disputes',
    body: [
      'Email grievance@in7gaming.co. Acknowledged in 24 hours, resolved within 15 days.',
      'Unresolved disputes are subject to the courts of Bengaluru, Karnataka.',
    ],
  },
  {
    h: '9. Changes',
    body: [
      'We may update these terms. Material changes are surfaced inside the app on next launch. Continued use of IN7 after the change constitutes acceptance of the revised terms.',
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">/ terms of use</span>
          <h1 className="display" style={{ marginTop: 14 }}>IN7 Terms of Use</h1>
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
            { name: 'Terms of Use', href: '/terms' },
          ])
        )}
      />
    </>
  );
}
