import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';
import { breadcrumbJsonLd, webPageJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'IN7 Refer and Earn · ₹100 Each Referral Code Bonus',
  description:
    'IN7 refer and earn · share your IN7 referral code, both you and your friend get ₹100. Full eligibility, tracking and instant payout rules. Earn unlimited.',
  alternates: { canonical: '/in7-game-refer-and-earn' },
  keywords: [
    'in7 referral code',
    'in7 refer and earn',
    'in7 invite code',
    'in7 refer earn',
    'in7 referral bonus',
    'in7 invite friends',
    'in7 referral program',
    'in7 ka referral code',
  ],
  openGraph: {
    title: 'IN7 Refer and Earn · ₹100 Each Referral Code Bonus',
    description: 'Share your IN7 referral code and earn ₹100 for every friend who deposits.',
    url: '/in7-game-refer-and-earn',
    images: [{ url: '/in7-game-bonus-offer.jpeg', width: 1200, height: 630, alt: 'IN7 refer and earn · ₹100 referral bonus' }],
  },
};

export default function In7ReferEarnPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow">/ in7 refer and earn</span>
              <h1 className="display" style={{ marginTop: 14 }}>
                IN7 refer and earn · <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>₹100</em> each, unlimited.
              </h1>
              <p className="muted" style={{ marginTop: 20, fontSize: '1.05rem', lineHeight: 1.65, maxWidth: 540 }}>
                Share your IN7 referral code. When your friend installs IN7, registers, and makes their first deposit, both of you get ₹100 in your wallet. No cap. No expiry. Withdrawable from minute one.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
                <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary pulse-cta">↓ Get my referral code</a>
                <Link href="/in7-game-bonus" className="btn btn-ghost">All bonuses</Link>
              </div>
            </div>
            <div className="frame">
              <img src="/in7-game-bonus-offer.jpeg" alt="IN7 refer and earn · ₹100 IN7 referral bonus" title="IN7 refer-earn" width={800} height={800} fetchPriority="high" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section dot-paper">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">How IN7 refer-and-earn works</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              Three taps. <span className="marker-line">₹100 each side</span>.
            </h2>
          </div>
          <div style={{ marginTop: 36, maxWidth: 760 }}>
            <div className="step-row">
              <span className="num">1.</span>
              <div>
                <h3>Find your IN7 referral code</h3>
                <p>Open the IN7 app → tap your profile → "Refer & Earn". Your unique code (like AA6JXC91) is right at the top. You can also copy a pre-filled WhatsApp message with the link baked in.</p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">2.</span>
              <div>
                <h3>Share with a friend</h3>
                <p>Send through WhatsApp, Telegram, Instagram or SMS. The IN7 deep link auto-fills your code in the install flow, so your friend doesn’t need to type it manually.</p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">3.</span>
              <div>
                <h3>Friend installs + deposits</h3>
                <p>Your friend installs IN7, registers, and makes their first deposit (any amount, even ₹10). The moment that deposit clears, both your wallets get ₹100.</p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">4.</span>
              <div>
                <h3>Withdraw or play</h3>
                <p>The ₹100 is real cash, not bonus credit. Withdraw it to UPI immediately or use it across any IN7 cash room.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow">Eligibility · simple rules</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>What counts as a valid referral.</h2>
              <p className="muted" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 380 }}>
                IN7’s referral program is generous, but we have anti-abuse rules so genuine sharers earn while bonus-farmers don’t. Five conditions, all clearly stated upfront.
              </p>
            </div>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Friend must be a brand-new IN7 user (mobile number not used before).',
                'Friend must register through your unique code or deep link (typed code or auto-filled both work).',
                'Friend must complete a minimum first deposit of ₹10.',
                'Friend must use a different device than yours (different device fingerprint).',
                'Both parties must be located in IN7-permitted Indian states.',
              ].map((s, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', alignItems: 'baseline', paddingBottom: 14, borderBottom: '1px solid rgba(20,7,10,0.08)' }}>
                  <span style={{ color: '#b91c2c', fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '1.15rem' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ color: '#14070a', fontSize: '0.97rem', lineHeight: 1.55 }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tracking */}
      <section className="section ink-section">
        <div className="wrap">
          <span className="eyebrow">Tracking your referrals</span>
          <h2 className="h-section" style={{ marginTop: 14, color: '#fff8f3' }}>See every invite, in real time.</h2>
          <div className="three-col" style={{ marginTop: 36 }}>
            {[
              { t: 'Pending', d: 'Friend installed + registered but hasn’t made the first deposit yet. Nudge them with a quick “try the spin wheel” message.' },
              { t: 'Active', d: 'Friend deposited. ₹100 dropped into both wallets. You will see a push notification + an in-app celebratory toast.' },
              { t: 'Total earned', d: 'Lifetime referral earnings, plus how many friends are still pending. Shows on the Refer & Earn dashboard.' },
            ].map((s, i) => (
              <div key={i} className="card-ink" style={{ borderColor: 'rgba(255,180,180,0.22)' }}>
                <span className="index-num" style={{ color: '#ffb4b4', fontSize: '2.4rem' }}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className="serif" style={{ fontSize: '1.2rem', marginTop: 12, letterSpacing: '-0.02em', color: '#fff8f3' }}>{s.t}</h3>
                <p className="muted-light" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.6 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link */}
      <section className="section">
        <div className="wrap">
          <div className="three-col">
            <Link href="/in7-game-bonus" className="card no-deco" style={{ color: 'inherit' }}>
              <span className="tag">Stack rewards</span>
              <h3 className="serif" style={{ fontSize: '1.2rem', marginTop: 12, letterSpacing: '-0.02em' }}>Other IN7 bonuses</h3>
              <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.55 }}>
                ₹777 welcome credit, daily spin wheel, 7-day login streak. Stack referral on top of all of them.
              </p>
            </Link>
            <Link href="/in7-game-withdrawal" className="card no-deco" style={{ color: 'inherit' }}>
              <span className="tag tag-ink">Cash out</span>
              <h3 className="serif" style={{ fontSize: '1.2rem', marginTop: 12, letterSpacing: '-0.02em' }}>Withdraw your ₹100</h3>
              <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.55 }}>
                Referral cash is fully withdrawable. Send to UPI in 5 minutes, no playthrough required.
              </p>
            </Link>
            <Link href="/in7-game-tips" className="card no-deco" style={{ color: 'inherit' }}>
              <span className="tag">Or play with it</span>
              <h3 className="serif" style={{ fontSize: '1.2rem', marginTop: 12, letterSpacing: '-0.02em' }}>Use it on a cash table</h3>
              <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.55 }}>
                ₹100 is enough for 5-10 cash rounds in the lower-stake rooms. Tips guide for what to play.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <FAQ
        title="IN7 refer-and-earn · sawaal jawab"
        items={[
          {
            q: 'IN7 ka referral code kaha milega?',
            a: 'IN7 app khole, profile pe tap karein, "Refer & Earn" choose karein. Aapka unique code (e.g. AA6JXC91) screen ke top par dikhega. Niche WhatsApp / Telegram / SMS ke direct share buttons hain.',
          },
          {
            q: 'Refer-and-earn ka maximum kya hai?',
            a: 'Koi maximum nahi! Jitne dost lao, utna ₹100 har dost ke deposit par milega. Lifetime mein humne 200+ referrals waale players bhi dekhe hain.',
          },
          {
            q: 'Friend ne deposit kar liya, paisa nahi aaya · kya karein?',
            a: 'Sometimes 5-10 minute lagte hain credit hone mein, especially weekend ke peak hours mein. Agar 30 minute baad bhi nahi aaya, IN7 in-app chat se contact karein · usually unka referral status check karke instantly resolve ho jaata hai.',
          },
          {
            q: 'Kya referral bonus withdrawable hai?',
            a: 'Bilkul. ₹100 referral bonus pure cash hai, bonus credit nahi. Koi 1× wagering nahi, koi expiry nahi. Wallet mein add hote hi UPI mein withdraw kar sakte ho.',
          },
          {
            q: 'Same WiFi pe refer kar sakte hain?',
            a: 'Same WiFi OK hai but same device nahi. Device fingerprint different hona chahiye (different phone). Same device se 2 accounts banakar khud ko refer karna detect ho jaata hai aur dono accounts ban ho jaate hain.',
          },
          {
            q: 'Friend ka deposit fail ho gaya · referral count hoga?',
            a: 'Nahi, sirf successful first deposit hi count hota hai. Friend ka deposit fail hua to refund 5-7 din mein aata hai. Friend ko phir se try karna padega · successful deposit ke baad referral activate hota hai.',
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'IN7 Refer & Earn', href: '/in7-game-refer-and-earn' },
          ]),
          webPageJsonLd({
            title: 'IN7 Refer and Earn · ₹100 Each Referral Code Bonus',
            description: 'Share IN7 referral code, earn ₹100 for every friend who deposits.',
            path: '/in7-game-refer-and-earn',
            primaryImage: '/in7-game-bonus-offer.jpeg',
          }),
        ])}
      />
    </>
  );
}
