import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';
import { breadcrumbJsonLd, webPageJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'IN7 Game Register · Sign Up & Get ₹777 Bonus',
  description:
    'IN7 game register kaise karein · mobile + OTP, 60 second mein IN7 account ready. Register on IN7 free and claim the ₹777 IN7 welcome bonus on first deposit.',
  alternates: { canonical: '/in7-game-register' },
  keywords: [
    'in7 game register',
    'in7 register',
    'in7 sign up',
    'in7 account create',
    'in7 game signup',
    'in7 registration',
    'in7 new account',
    'in7 game register kaise karein',
  ],
  openGraph: {
    title: 'IN7 Game Register · Sign Up & Get ₹777 Welcome Bonus',
    description: 'Register on IN7 game free · mobile + OTP, 60 sec, ₹777 welcome bonus on first deposit.',
    url: '/in7-game-register',
    images: [{ url: '/in7-game-bonus-offer.jpeg', width: 1200, height: 630, alt: 'IN7 Game Register · ₹777 IN7 welcome bonus' }],
  },
};

export default function In7RegisterPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">/ in7 game register</span>
          <h1 className="display balance" style={{ marginTop: 14, maxWidth: 880 }}>
            IN7 Game register, in <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>60 seconds</em>.
          </h1>
          <p className="muted" style={{ marginTop: 20, fontSize: '1.05rem', lineHeight: 1.65, maxWidth: 640 }}>
            One mobile number. One OTP. That’s it. KYC happens later, only when you choose to withdraw, so you can play immediately and verify when you’re ready.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
            <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg pulse-cta">↓ Download &amp; register</a>
            <Link href="/in7-game-login" className="btn btn-ghost btn-lg">Already have an account?</Link>
          </div>
        </div>
      </section>

      <section className="section dot-paper">
        <div className="wrap">
          <div className="two-col" style={{ alignItems: 'start' }}>
            <div>
              <span className="eyebrow">Sign-up flow</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>Five small screens, that’s the whole register process.</h2>
              <p className="muted" style={{ marginTop: 18, lineHeight: 1.65, maxWidth: 380 }}>
                We strip the boring out. No lengthy forms, no “verify email” email-chasing, no “tell us your gender” drop-downs.
              </p>
            </div>
            <div>
              <div className="step-row">
                <span className="num">1.</span>
                <div>
                  <h3>Open IN7 → tap “New player”</h3>
                  <p>If you’ve installed the app, the home screen has a clear “New player? Register” button right at the bottom.</p>
                </div>
              </div>
              <div className="step-row">
                <span className="num">2.</span>
                <div>
                  <h3>Enter your mobile number</h3>
                  <p>Use the number that owns your UPI, payouts will go to UPI IDs linked to this number, so keep it primary.</p>
                </div>
              </div>
              <div className="step-row">
                <span className="num">3.</span>
                <div>
                  <h3>Verify the OTP</h3>
                  <p>You’ll get a 4-digit OTP via SMS. Auto-fill works on most Android phones.</p>
                </div>
              </div>
              <div className="step-row">
                <span className="num">4.</span>
                <div>
                  <h3>Pick your username</h3>
                  <p>Optional, most players just use their first name. You can change it later from settings.</p>
                </div>
              </div>
              <div className="step-row">
                <span className="num">5.</span>
                <div>
                  <h3>Done, your wallet is ready</h3>
                  <p>You’re in. The ₹777 welcome credit unlocks the moment you make your first deposit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">When KYC kicks in</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              You don’t need <span className="marker-line">KYC to play</span>.
            </h2>
            <p className="muted" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 560 }}>
              IN7 only asks for ID verification when you initiate your first withdrawal. That’s it, pure play stays friction-free. When KYC time comes, the whole thing is in-app and takes about 90 seconds.
            </p>
          </div>

          <div className="three-col" style={{ marginTop: 30 }}>
            {[
              { t: 'PAN card', d: 'Photo of front side. Auto-OCR fills the form. Required by Indian gaming laws.' },
              { t: 'UPI ID', d: 'The UPI ID where your winnings will land. Must be on a number you own.' },
              { t: 'Selfie + liveness', d: 'A short blink-check selfie to confirm you’re a real person. ~10 seconds.' },
            ].map((k, i) => (
              <div key={i} className="card">
                <h3 className="serif" style={{ fontSize: '1.2rem', letterSpacing: '-0.02em' }}>{k.t}</h3>
                <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.6 }}>{k.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        title="IN7 register karne ke baad ke common doubts"
        items={[
          {
            q: 'IN7 register ke liye PAN ya Aadhaar zaroori hai?',
            a: 'Nahi, sirf register karne ke liye sirf mobile number kaafi hai. PAN sirf tab maanga jaata hai jab aap pehli baar withdrawal karte ho. Tab tak aap free aur cash dono khel sakte ho.',
          },
          {
            q: 'OTP nahi aa raha, kya karein?',
            a: 'Pehle 60 second wait karein, "Resend OTP" tap karein. Agar fir bhi nahi aata to network coverage check karein, ya phone reboot karein. Most cases mein 2 minute mein resolved ho jaata hai.',
          },
          {
            q: 'Ek mobile number pe ek se zyada IN7 account ban sakta hai?',
            a: 'Nahi. Ek mobile number = ek IN7 account. Ye misuse rokne ke liye aur bonus farming prevent karne ke liye hai.',
          },
          {
            q: 'Welcome bonus kab activate hota hai?',
            a: 'Pehle deposit karte hi ₹777 ka credit aapke IN7 wallet mein add ho jaata hai. Iska use cash games mein hota hai. Detailed terms /in7-game-bonus pe hain.',
          },
          {
            q: 'Username badal sakte hain register ke baad?',
            a: 'Haan, settings → profile → username. Sirf 30 din mein ek baar change ho sakta hai.',
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'IN7 Game Register', href: '/in7-game-register' },
          ]),
          webPageJsonLd({
            title: 'IN7 Game Register · Sign Up & Get ₹777 Bonus',
            description: 'Register on IN7 game free · mobile + OTP, ₹777 welcome bonus on first deposit.',
            path: '/in7-game-register',
            primaryImage: '/in7-game-bonus-offer.jpeg',
          }),
        ])}
      />
    </>
  );
}
