import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';
import { breadcrumbJsonLd, webPageJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'IN7 Game Login · Quick OTP Sign-In Help & Fixes',
  description:
    'IN7 game login is one OTP, no password. Full IN7 login troubleshooting guide · OTP issues, multi-device, account recovery. Sign in to IN7 in seconds.',
  alternates: { canonical: '/in7-game-login' },
  keywords: [
    'in7 game login',
    'in7 login',
    'in7 game sign in',
    'in7 login otp',
    'in7 login problem',
    'in7 login not working',
    'in7 otp not coming',
    'in7 sign in',
  ],
  openGraph: {
    title: 'IN7 Game Login · Quick OTP Sign-In Help',
    description: 'IN7 login one OTP, no password. Full troubleshooting for IN7 game login.',
    url: '/in7-game-login',
    images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: 'IN7 Game Login · OTP sign in to IN7 app' }],
  },
};

export default function In7LoginPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">/ in7 game login</span>
          <h1 className="display balance" style={{ marginTop: 14, maxWidth: 880 }}>
            IN7 Game Login is one OTP. <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>Always.</em>
          </h1>
          <p className="muted" style={{ marginTop: 20, fontSize: '1.05rem', lineHeight: 1.65, maxWidth: 620 }}>
            We don’t ask for passwords. Your phone number is your account. One OTP and you’re back at the table, usually in under 8 seconds.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
            <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg pulse-cta">↓ Open / Download IN7</a>
            <Link href="/in7-game-register" className="btn btn-ghost btn-lg">Register a new account</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">How login works</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              Three taps, <span className="marker-line">no password</span>.
            </h2>
          </div>
          <div style={{ marginTop: 36, maxWidth: 760 }}>
            <div className="step-row">
              <span className="num">i.</span>
              <div>
                <h3>Open the IN7 game app</h3>
                <p>Login screen comes up automatically if you’re signed out. If you’re still on the splash screen, tap “Sign in”.</p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">ii.</span>
              <div>
                <h3>Enter your registered mobile number</h3>
                <p>Same number you used at register. Country code +91 is auto-selected.</p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">iii.</span>
              <div>
                <h3>Auto-fill the OTP</h3>
                <p>SMS auto-fill works on most Android phones. If your phone doesn’t support it, just type the 4-digit code in.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="section ink-section">
        <div className="wrap">
          <span className="eyebrow">Troubleshooting</span>
          <h2 className="h-section" style={{ marginTop: 14, color: '#fff8f3' }}>If IN7 login is not working today.</h2>
          <p className="muted-light" style={{ marginTop: 16, lineHeight: 1.7, maxWidth: 640 }}>
            99% of login problems fall into one of these four buckets. Try them in order.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16, marginTop: 32 }} className="trb-grid">
            {[
              { t: 'OTP not arriving', d: 'Wait 60 seconds, hit Resend. Still nothing? Toggle airplane mode for 5 sec, retry. Carrier delays are the #1 cause.' },
              { t: '"Account on another device"', d: 'IN7 only allows one active session per number. Tap “Continue here” to take over the session, the old device is logged out automatically.' },
              { t: 'Old app version', d: 'Update IN7 to the latest build. Older builds sometimes hit deprecated login endpoints. The update prompt should appear on cold start.' },
              { t: 'IN7 servers down', d: 'Rare, but it happens. Check our status page (link in app footer). All login issues clear once green.' },
            ].map((b, i) => (
              <div key={i} className="card-ink" style={{ borderColor: 'rgba(255,180,180,0.22)' }}>
                <span className="index-num" style={{ color: '#ffb4b4', fontSize: '2.4rem' }}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className="serif" style={{ fontSize: '1.25rem', marginTop: 12, letterSpacing: '-0.02em', color: '#fff8f3' }}>{b.t}</h3>
                <p className="muted-light" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.6 }}>{b.d}</p>
              </div>
            ))}
          </div>
          <style>{`
            @media (min-width: 720px) { .trb-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          `}</style>
        </div>
      </section>

      <FAQ
        title="Login se related sawaal"
        items={[
          {
            q: 'Mera phone kho gaya, IN7 account kaise wapas mile?',
            a: 'Naye phone par IN7 install karein, wahi mobile number daalein, OTP verify karein, account auto-restore ho jaata hai. Wallet balance, transaction history, sab safe hota hai cloud par.',
          },
          {
            q: 'IN7 login multiple devices par chal sakta hai?',
            a: 'Ek time pe sirf ek active session allow hai. Doosre device pe login karte hi pehla device automatically logout ho jaata hai, security ke liye.',
          },
          {
            q: 'Mobile number badal gaya hai, IN7 account ka kya hoga?',
            a: 'Hamari support team se contact karein. Original number ka OTP + KYC documents required honge transfer ke liye. Process usually 24-48 ghante leta hai.',
          },
          {
            q: 'Login mein password kahin nahi maangta?',
            a: 'Bilkul nahi maangega. IN7 password-less login pe chalta hai, sirf OTP. Ye intentional hai, kyunki passwords zyada hack hote hain SMS OTP ke compared mein.',
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'IN7 Game Login', href: '/in7-game-login' },
          ]),
          webPageJsonLd({
            title: 'IN7 Game Login · Quick OTP Sign-In Help & Fixes',
            description: 'IN7 game login one OTP, no password. Full IN7 login troubleshooting.',
            path: '/in7-game-login',
            primaryImage: '/in7-game-banner.jpeg',
          }),
        ])}
      />
    </>
  );
}
