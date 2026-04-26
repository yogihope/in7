import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';
import { breadcrumbJsonLd, webPageJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'IN7 Game App · Download Light IN7 App for Android',
  description:
    'IN7 Game App is the lightweight 48 MB Android app for IN7 gaming. Download IN7 app, claim ₹777 welcome bonus and withdraw winnings to UPI in 5 minutes.',
  alternates: { canonical: '/in7-game-app' },
  keywords: [
    'in7 game app',
    'in7 app',
    'in7 game',
    'in7 application',
    'in7 gaming app',
    'in7 android app',
    'in7 game download',
    'download in7 app',
  ],
  openGraph: {
    title: 'IN7 Game App · Download Light IN7 App for Android',
    description: 'IN7 game app · 48 MB, fast, signed. Download IN7 app for Android and start playing in 6 seconds.',
    url: '/in7-game-app',
    images: [{ url: '/in7-game-app-screenshot.jpeg', width: 1200, height: 630, alt: 'IN7 Game App screenshot · IN7 gaming home screen' }],
  },
};

export default function In7AppPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow">/ in7 game app</span>
              <h1 className="display" style={{ marginTop: 14 }}>
                The IN7 Game App, <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>opened up</em>.
              </h1>
              <p className="muted" style={{ marginTop: 20, fontSize: '1.05rem', lineHeight: 1.65, maxWidth: 520 }}>
                Most gaming apps in India hit you with five popups before the home screen even loads. The IN7 game app skips that. One screen, one tap to play, one tap to withdraw. Here’s what’s under the hood.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
                <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary pulse-cta">↓ Get the APK</a>
                <Link href="/in7-game-register" className="btn btn-ghost">Create account</Link>
              </div>
            </div>
            <div className="frame">
              <img src="/in7-game-app-screenshot.jpeg" alt="IN7 Game app screenshot · IN7 gaming home screen on Android" title="IN7 Game app" width={1080} height={1920} fetchPriority="high" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Specs table */}
      <section className="section dot-paper">
        <div className="wrap">
          <span className="eyebrow">Specs that matter</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>What you’re actually installing.</h2>

          <div style={{ marginTop: 30, background: '#fff', border: '1px solid rgba(20,7,10,0.08)', borderRadius: 22, overflow: 'hidden' }}>
            {[
              ['App name', 'IN7 Game'],
              ['Package', 'in.in7co.gaming'],
              ['Latest version', '4.7.1, Mar 2026'],
              ['File size', '~48 MB'],
              ['Android required', '6.0 (Marshmallow) and above'],
              ['Permissions', 'Storage (write APK), Internet, Notifications'],
              ['Install source', 'Direct APK · in7gaming.co'],
              ['Signing', 'SHA-256 · v3 signature scheme'],
              ['Data center', 'Mumbai · Hyderabad'],
              ['Languages', 'Hindi, English'],
            ].map(([k, v], i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', borderTop: i ? '1px solid rgba(20,7,10,0.07)' : 0 }}>
                <div style={{ padding: '14px 18px', fontSize: '0.85rem', color: 'rgba(20,7,10,0.55)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{k}</div>
                <div style={{ padding: '14px 18px', fontSize: '0.95rem', color: '#14070a', fontWeight: 500 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="section">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">Inside the app</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              Six things you’ll <span className="marker-line">notice</span> on day one.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16, marginTop: 36 }} className="features-grid">
            {[
              { t: 'One-tap rejoin', d: 'Your last room is one tap away from the home screen. No menu hunting.' },
              { t: 'Wallet front-and-centre', d: 'Balance, deposits, and withdrawals are visible from every screen. No hidden flows.' },
              { t: 'In-app KYC', d: 'PAN + bank account get verified inside the app, in under 90 seconds, before your first cashout.' },
              { t: 'Practice mode', d: 'Every cash room has a free version. Switch in or out anytime, no deposit required.' },
              { t: 'Battery-light', d: 'Average drain in a 30-min session: ~3%. Tested on Redmi 9, Realme C35, Samsung A14.' },
              { t: 'Update over-the-air', d: 'New features ship every 2 weeks. Updates are background, no Play-Store dependency.' },
            ].map((f, i) => (
              <article key={i} className="card">
                <h3 className="serif" style={{ fontSize: '1.2rem', letterSpacing: '-0.02em' }}>{f.t}</h3>
                <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.6 }}>{f.d}</p>
              </article>
            ))}
          </div>
          <style>{`
            @media (min-width: 720px) { .features-grid { grid-template-columns: repeat(2, 1fr) !important; } }
            @media (min-width: 1080px) { .features-grid { grid-template-columns: repeat(3, 1fr) !important; } }
          `}</style>
        </div>
      </section>

      {/* Security */}
      <section className="section ink-section">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow">Security</span>
              <h2 className="h-section" style={{ marginTop: 14, color: '#fff8f3' }}>
                Money apps need to be paranoid. We are.
              </h2>
              <p className="muted-light" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 460 }}>
                IN7 game app stack is RBI-aligned for payouts, AES-256 for stored balances, and TLS 1.3 for all traffic. Every release is hash-checked before it goes live. If a build fails any of these, it doesn’t ship.
              </p>
            </div>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'AES-256 encryption for in-app wallet',
                'TLS 1.3 for all client-server traffic',
                'OTP + device-binding for login',
                'Per-session token rotation (15-min)',
                'Independent security audit (quarterly)',
                'No third-party trackers',
              ].map((s, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', alignItems: 'baseline', gap: 12, paddingBottom: 14, borderBottom: '1px solid rgba(255,248,243,0.1)' }}>
                  <span style={{ color: '#ffb4b4', fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '1.1rem' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ color: '#fff8f3', fontSize: '1rem' }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQ
        title="IN7 game app ke common questions"
        items={[
          {
            q: 'IN7 game app Play Store par kyun nahi hai?',
            a: 'Google Play apni policy ki wajah se real-money skill games ko India mein restrict karta hai. Isliye IN7 ka app seedha website se APK ke roop mein download hota hai. Ye industry standard hai, Dream11, MPL jaise apps ke liye bhi same case hai.',
          },
          {
            q: 'Kya IN7 app iPhone par milega?',
            a: 'Filhaal IN7 game app sirf Android par hai. iOS version hamari roadmap par hai but timeline confirm nahi kar sakte. iOS users ke liye web-based version par kaam chal raha hai.',
          },
          {
            q: 'Mera phone purana hai, app chalega kya?',
            a: 'Agar Android 7.0 ya upar hai, to chalega. IN7 app intentionally light banaya gaya hai (48 MB) taaki budget phones par bhi smooth chale.',
          },
          {
            q: 'Update kaise milega?',
            a: 'IN7 app khud-ba-khud check karta hai naye versions ke liye. Update ka popup aata hai jab nayi version available ho, usually 2 hafton mein ek update.',
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'IN7 Game App', href: '/in7-game-app' },
          ]),
          webPageJsonLd({
            title: 'IN7 Game App · Download Light IN7 App for Android',
            description: 'IN7 Game App is the lightweight 48 MB Android app for IN7 gaming.',
            path: '/in7-game-app',
            primaryImage: '/in7-game-app-screenshot.jpeg',
          }),
        ])}
      />
    </>
  );
}
