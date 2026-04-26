import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';
import { breadcrumbJsonLd, webPageJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'IN7 Gaming Online · India’s Skill Real-Money Game',
  description:
    'IN7 Gaming is India’s skill-first real-money game platform. Play IN7 game online, download IN7 APK, claim ₹777 welcome bonus and withdraw to UPI in 5 minutes.',
  alternates: { canonical: '/in7-gaming' },
  keywords: [
    'in7 gaming',
    'in7',
    'in7 game',
    'in7 game online',
    'in7 real money game',
    'in7 skill game',
    'in7 gaming india',
    'in7 gaming app',
    'in7 gaming co',
  ],
  openGraph: {
    title: 'IN7 Gaming Online · India’s Skill Real-Money Game',
    description:
      'IN7 Gaming, India’s skill-first real-money platform. Download IN7 APK, claim ₹777 bonus and cashout to UPI fast.',
    url: '/in7-gaming',
    images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: 'IN7 Gaming · IN7 game online for India' }],
  },
};

export default function In7GamingPage() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">/ in7 gaming</span>
          <h1 className="display balance" style={{ marginTop: 14, maxWidth: 920 }}>
            IN7 Gaming. Built where the players actually <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>are</em>.
          </h1>
          <p className="muted balance" style={{ marginTop: 22, fontSize: '1.1rem', lineHeight: 1.65, maxWidth: 720 }}>
            Most “gaming apps” copied a Western template and called it a day. IN7 Gaming was designed from scratch for the Indian phone, the Indian network, and the Indian player who wants their wins in UPI before the over ends.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg pulse-cta">↓ Download IN7 APK</a>
            <Link href="/in7-game-review" className="btn btn-ghost btn-lg">See full review</Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section dot-paper">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow">The four pillars</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                What makes IN7 <span className="marker-line">work</span>.
              </h2>
              <p className="muted" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 360 }}>
                We boil “great gaming” down to four things. If even one of these breaks, you stop playing. So we made them non-negotiable.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
              {[
                { n: '01', t: 'Fair tables', d: 'Every IN7 game uses certified RNG seeds and a published table-fairness report. No silent house edge tweaks.' },
                { n: '02', t: 'Fast money', d: 'Withdrawals are paid out in batches every 90 seconds. Verified players see UPI deposits in under 5 minutes.' },
                { n: '03', t: 'Light app', d: 'IN7 game apk weighs under 40 MB. Cold-start under 6 seconds even on a Redmi 9.' },
                { n: '04', t: 'Real support', d: 'Hindi-English chat support that actually replies, average first response under 4 minutes between 9am–11pm IST.' },
              ].map((p, i) => (
                <div key={i} className="card" style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 16, alignItems: 'start' }}>
                  <div className="index-num" style={{ fontSize: '2.4rem' }}>{p.n}</div>
                  <div>
                    <h3 className="serif" style={{ fontSize: '1.2rem', letterSpacing: '-0.02em' }}>{p.t}</h3>
                    <p className="muted" style={{ marginTop: 6, fontSize: '0.95rem', lineHeight: 1.6 }}>{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Game library teaser */}
      <section className="section">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">The library</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              Five rooms. <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>Different</em> rhythms.
            </h2>
            <p className="muted" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7 }}>
              IN7 Gaming intentionally keeps the menu short. Five rooms, all skill-based, each playable in under 8 minutes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16, marginTop: 36 }} className="rooms-grid">
            {[
              { tag: 'Card', title: 'Quick 21', body: 'Two-card snap rounds. Sharpen reading the dealer, win in 90 seconds.', stake: '₹10–₹500' },
              { tag: 'Strategy', title: 'Mind Match', body: 'Pattern-based memory rounds. Pure skill, zero RNG. Top earners come from here.', stake: '₹20–₹2000' },
              { tag: 'Speed', title: 'Tap Trail', body: 'Reaction-time rounds against three other players. 60 seconds per match.', stake: '₹5–₹300' },
              { tag: 'Classic', title: 'IN7 Rummy', body: 'A clean, ad-free 13-card rummy variant. Tournaments every evening.', stake: '₹25–₹5000' },
              { tag: 'Casual', title: 'Spin Sevens', body: 'A daily lucky-spin format. Free to play once a day, optional cash spins after.', stake: 'Free–₹100' },
            ].map((r, i) => (
              <article key={i} className="card" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="tag">{r.tag}</span>
                  <span className="muted" style={{ fontSize: '0.78rem', fontWeight: 600 }}>{r.stake}</span>
                </div>
                <h3 className="serif" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em', marginTop: 10 }}>{r.title}</h3>
                <p className="muted" style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{r.body}</p>
              </article>
            ))}
          </div>

          <style>{`
            @media (min-width: 720px) {
              .rooms-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (min-width: 1080px) {
              .rooms-grid { grid-template-columns: repeat(3, 1fr) !important; }
            }
          `}</style>
        </div>
      </section>

      {/* The community section */}
      <section className="section ink-section">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow">By the numbers</span>
              <h2 className="h-section" style={{ marginTop: 14, color: '#fff8f3' }}>
                IN7 in 2025, briefly.
              </h2>
              <p className="muted-light" style={{ marginTop: 18, lineHeight: 1.65, maxWidth: 380 }}>
                We don’t love vanity metrics, but a few numbers tell the story better than copy. Audited September 2025.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 36 }}>
              <div>
                <div className="stat-num" style={{ color: '#fff8f3' }}>50<em>L+</em></div>
                <div className="stat-label" style={{ color: 'rgba(255,248,243,0.55)' }}>Total players</div>
              </div>
              <div>
                <div className="stat-num" style={{ color: '#fff8f3' }}>92<em>%</em></div>
                <div className="stat-label" style={{ color: 'rgba(255,248,243,0.55)' }}>D7 retention</div>
              </div>
              <div>
                <div className="stat-num" style={{ color: '#fff8f3' }}>4<em>min</em></div>
                <div className="stat-label" style={{ color: 'rgba(255,248,243,0.55)' }}>Avg cashout</div>
              </div>
              <div>
                <div className="stat-num" style={{ color: '#fff8f3' }}>₹40<em>cr</em></div>
                <div className="stat-label" style={{ color: 'rgba(255,248,243,0.55)' }}>Paid out (2025)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        title="IN7 gaming ke baare mein common doubts"
        items={[
          {
            q: 'IN7 gaming aur baaki real money gaming apps mein kya farak hai?',
            a: 'IN7 sirf skill-based rooms par focus karta hai, yaani RNG-only games avoid karte hain. Iska matlab har round mein aapke decisions hi outcome decide karte hain. Plus UPI cashout 5 minute ke andar, most other apps ke comparison mein bahut tez hai.',
          },
          {
            q: 'IN7 gaming kahaan available hai?',
            a: 'IN7 unhi states mein available hai jahaan skill-based real money gaming legal hai. Restricted states ke users automatically detect ho jaate hain, woh sirf practice rooms khel sakte hain.',
          },
          {
            q: 'Kya IN7 ka apna app store hai?',
            a: 'Nahi, IN7 game apk seedha hamari website se download hota hai. Hum Google Play par nahi hain (real money games ki policy ki wajah se), but APK fully signed aur SHA-256 verified hai.',
          },
          {
            q: 'IN7 gaming free khel sakte ho?',
            a: 'Haan, har room mein practice mode available hai, jaha aap demo coins se khel sakte ho. Cash rooms tabhi unlock hote hain jab aap pehla deposit karte ho.',
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'IN7 Gaming', href: '/in7-gaming' },
          ]),
          webPageJsonLd({
            title: 'IN7 Gaming Online · India’s Skill Real-Money Game',
            description: 'IN7 Gaming is India’s skill-first real-money game platform.',
            path: '/in7-gaming',
            primaryImage: '/in7-game-banner.jpeg',
          }),
        ])}
      />
    </>
  );
}
