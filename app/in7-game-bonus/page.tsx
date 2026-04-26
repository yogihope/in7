import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';
import { breadcrumbJsonLd, webPageJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'IN7 Game Bonus · ₹777 Welcome + Daily Spin Wheel',
  description:
    'IN7 game bonus full guide · ₹777 welcome credit, daily IN7 spin wheel, refer-and-earn ₹100, 7-day streak ₹1,400. Claim every IN7 bonus today.',
  alternates: { canonical: '/in7-game-bonus' },
  keywords: [
    'in7 game bonus',
    'in7 bonus',
    'in7 welcome bonus',
    'in7 spin wheel',
    'in7 referral bonus',
    'in7 ₹777 bonus',
    'in7 daily bonus',
    'in7 streak bonus',
    'in7 refer earn',
  ],
  openGraph: {
    title: 'IN7 Game Bonus · ₹777 Welcome + Daily Spin',
    description: 'Every IN7 bonus decoded · ₹777 welcome, daily spin, refer-earn, 7-day streak.',
    url: '/in7-game-bonus',
    images: [{ url: '/in7-game-bonus-offer.jpeg', width: 1200, height: 630, alt: 'IN7 Game ₹777 welcome bonus offer' }],
  },
};

export default function In7BonusPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow">/ in7 game bonus</span>
              <h1 className="display" style={{ marginTop: 14 }}>
                IN7 Game Bonus stack that <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>actually</em> pays.
              </h1>
              <p className="muted" style={{ marginTop: 20, fontSize: '1.05rem', lineHeight: 1.65, maxWidth: 520 }}>
                Most apps print ₹500 in giant text and bury the conditions in a wall of legalese. IN7 keeps it short: what you see is what unlocks. Here’s every bonus, plain English.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
                <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary pulse-cta">↓ Claim my ₹777</a>
                <Link href="/in7-game-register" className="btn btn-ghost">Register first</Link>
              </div>
            </div>
            <div className="frame">
              <img src="/in7-game-bonus-offer.jpeg" alt="IN7 Game ₹777 welcome bonus offer · IN7 gaming bonus" title="IN7 Game bonus" width={800} height={800} fetchPriority="high" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Bonus list */}
      <section className="section dot-paper">
        <div className="wrap">
          <span className="eyebrow">The full menu</span>
          <h2 className="h-section" style={{ marginTop: 14 }}>Four bonuses. Stackable.</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 18, marginTop: 30 }} className="bonus-grid">
            {[
              { tag: 'New player', amt: '₹777', t: 'Welcome credit', d: 'Drops into your IN7 wallet on first deposit. Usable on any cash room, including IN7 Rummy and Mind Match.' },
              { tag: 'Daily', amt: 'Up to ₹500', t: 'Lucky spin wheel', d: 'One free spin every 24 hours after your first cash game. Spin slots include ₹10–₹500 cash, vouchers, and table upgrades.' },
              { tag: 'Refer', amt: '₹100 + ₹100', t: 'Refer-and-earn', d: 'Both you and your friend get ₹100 each, credited the moment your friend makes their first deposit.' },
              { tag: 'Streak', amt: '₹1,400', t: '7-day login streak', d: 'Open IN7 once a day for 7 days. Each day adds ₹50–₹300, peaking on day 7. Misses reset the streak.' },
            ].map((b, i) => (
              <article key={i} className={`card ${i === 1 ? 'card-cream' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                  <span className="tag">{b.tag}</span>
                  <span className="serif" style={{ fontSize: '1.6rem', fontStyle: 'italic', color: '#b91c2c', fontWeight: 600 }}>{b.amt}</span>
                </div>
                <h3 className="serif" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em' }}>{b.t}</h3>
                <p className="muted" style={{ fontSize: '0.97rem', lineHeight: 1.65 }}>{b.d}</p>
              </article>
            ))}
          </div>
          <style>{`
            @media (min-width: 720px) { .bonus-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          `}</style>
        </div>
      </section>

      {/* Spin wheel callout */}
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div className="frame-rust">
              <img src="/in7-game-spin-wheel.jpeg" alt="IN7 Game daily spin wheel · IN7 lucky bonus spin" title="IN7 spin wheel" width={800} height={800} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div>
              <span className="eyebrow">Daily spin · IN7 wheel</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                One free spin every <span className="marker-line">24 hours</span>.
              </h2>
              <p className="muted" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 460 }}>
                The IN7 spin wheel sits on the home screen, visible the moment you open the app. After your first cash game, it unlocks for daily free spins. Pure ritual: 5 seconds a day, sometimes ₹10, sometimes ₹500.
              </p>
              <div style={{ marginTop: 22, padding: 18, background: '#fdf1e8', border: '1px solid #f4d6c3', borderRadius: 14, fontSize: '0.92rem', color: '#7a0e1c' }}>
                <strong>Tip:</strong> spin streaks add up. Spin 7 days in a row and the 8th spin gets a ×2 multiplier.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="section ink-section">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow">Read the small print</span>
              <h2 className="h-section" style={{ marginTop: 14, color: '#fff8f3' }}>The honest version of the T&amp;Cs.</h2>
              <p className="muted-light" style={{ marginTop: 18, fontSize: '0.97rem', lineHeight: 1.7, maxWidth: 380 }}>
                Bonuses are real money but with conditions. Same as every gaming platform. Here are the rules in plain English.
              </p>
            </div>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Welcome ₹777 has 1× playthrough: you must wager the full bonus once before withdrawal.',
                'Spin wheel cash is instantly withdrawable, no playthrough.',
                'Referral bonus credits only after your friend’s first deposit clears (not just after register).',
                'Streak bonus skips count as misses, VPNs and dual-SIM tricks don’t bypass the check.',
                'Bonuses can’t stack on the same wager. Only one bonus active per cash game.',
                'IN7 reserves the right to revoke bonuses on accounts flagged for collusion or abuse.',
              ].map((s, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', alignItems: 'baseline', paddingBottom: 14, borderBottom: '1px solid rgba(255,248,243,0.1)' }}>
                  <span style={{ color: '#ffb4b4', fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '1.15rem' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ color: '#fff8f3', fontSize: '0.97rem', lineHeight: 1.55 }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQ
        title="IN7 bonus ke common sawaal"
        items={[
          {
            q: 'Welcome ₹777 cash mein convert ho sakta hai?',
            a: 'Haan, but pehle 1× wagering complete karna padta hai. Yaani ₹777 ko ek baar cash games mein lagana hoga (jeet ya haar koi farak nahi padta). Phir winnings withdraw kar sakte ho.',
          },
          {
            q: 'Spin wheel ka paisa instantly nikal sakta hu?',
            a: 'Bilkul. Spin wheel se aaya cash directly withdrawable hota hai, koi playthrough nahi. UPI verified ho to 5 minute mein bank aa jaata hai.',
          },
          {
            q: 'Referral kaise verify hota hai?',
            a: 'Aap apna IN7 referral code dost ko bhejte ho. Wo register karte time wo code daalta hai. Jaise hi unka pehla deposit clear hota hai, dono ke wallets mein ₹100 credit ho jaata hai.',
          },
          {
            q: 'Streak miss ho gaya, kya restart hoga?',
            a: 'Haan, streak ek bhi din miss ho jaye to day 1 se restart hota hai. Notifications on rakhna helps, IN7 reminder bhejta hai daily.',
          },
          {
            q: 'Multiple accounts banakar zyada bonus le sakte hain?',
            a: 'Nahi. IN7 mobile number, device fingerprint, aur PAN se duplicate accounts detect karta hai. Pakda gaya to dono accounts ka bonus revoke + permanent ban risk hai.',
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'IN7 Game Bonus', href: '/in7-game-bonus' },
          ]),
          webPageJsonLd({
            title: 'IN7 Game Bonus · ₹777 Welcome + Daily Spin Wheel',
            description: 'Every IN7 bonus decoded · ₹777 welcome, daily spin, refer-earn, 7-day streak.',
            path: '/in7-game-bonus',
            primaryImage: '/in7-game-bonus-offer.jpeg',
          }),
        ])}
      />
    </>
  );
}
