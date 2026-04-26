import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';
import { breadcrumbJsonLd, webPageJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Paise Kamane Wala Game · IN7, India’s Fast Cashout Pick',
  description:
    'Paise kamane wala game dhoondh rahe ho? IN7 sabse fast UPI cashout deta hai (5 min), ₹777 welcome bonus, fair skill rooms. Asli paise jitne wala game.',
  alternates: { canonical: '/paise-kamane-wala-game' },
  keywords: [
    'paise kamane wala game',
    'paisa jitne wala game',
    'real money game india',
    'paisa kamane wala game',
    'in7 paise kamane wala game',
    'asli paise wala game',
    'paisa banane wala game',
    'mobile se paise kaise kamayein',
    'gaming se paise kaise kamayein',
  ],
  openGraph: {
    title: 'Paise Kamane Wala Game · IN7 · India’s Fast Cashout Pick',
    description: 'IN7 = fastest UPI cashout (5 min), ₹777 bonus, fair skill rooms. India’s best paise kamane wala game.',
    url: '/paise-kamane-wala-game',
    images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: 'Paise kamane wala game · IN7 game' }],
  },
};

export default function PaiseKamaneWalaGamePage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">/ paise kamane wala game</span>
          <h1 className="display balance" style={{ marginTop: 14, maxWidth: 940 }}>
            Asli paise kamane wala game · <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>IN7</em>.
          </h1>
          <p className="muted balance" style={{ marginTop: 22, fontSize: '1.08rem', lineHeight: 1.65, maxWidth: 720 }}>
            Internet "paise kamane wala game" se bhara hai · 90% fake, 9% buggy, 1% bonafide. IN7 us 1% mein hai. Skill-based rooms, signed APK, UPI cashout 5 minute mein. Yahan honest comparison hai aur IN7 ka case for being India's best pick.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg pulse-cta">↓ IN7 ab download karein</a>
            <Link href="/in7-game-review" className="btn btn-ghost btn-lg">90-day review →</Link>
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="section dot-paper">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow">Real talk</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                Paise kamane wala game · <span className="marker-line">teen sachhayi</span>.
              </h2>
              <p className="muted" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 380 }}>
                Side income ke liye gaming use karna realistic hai, but expectations sahi rakhne padti hain. Yeh teen baatein har player ko shuru mein samajhna chahiye.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { t: 'Salary nahi banegi', d: 'Real-money games part-time entertainment income hain · average top players bhi mahine ka ₹3,000-₹15,000 kamate hain. Salary ka substitute nahi.' },
                { t: 'Skill > luck', d: 'Pure-luck apps mein long-run loss guaranteed hai. Skill-based games (rummy, memory, card maths) mein consistent practice se ROI positive ho sakta hai.' },
                { t: 'Discipline = profit', d: 'Bankroll management aur loss-cap discipline 80% successful players ke paas hai. Iske bina koi strategy kaam nahi karti.' },
              ].map((p, i) => (
                <div key={i} className="card">
                  <h3 className="serif" style={{ fontSize: '1.15rem', letterSpacing: '-0.02em' }}>{p.t}</h3>
                  <p className="muted" style={{ marginTop: 6, fontSize: '0.95rem', lineHeight: 1.6 }}>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why IN7 */}
      <section className="section">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">Kyun IN7</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              IN7 = sabse <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>seedha</em> paise kamane wala game.
            </h2>
            <p className="muted" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7 }}>
              Hum biased hain (jaahir hai), but yeh chaar metrics public aur measurable hain. Apni preferred app pe tulna karke dekho.
            </p>
          </div>
          <div className="three-col" style={{ marginTop: 36 }}>
            {[
              { stat: '₹777', label: 'Welcome bonus', d: 'Pehle deposit pe wallet mein add. Most apps ₹50-₹100 dete hain.' },
              { stat: '5 min', label: 'UPI cashout', d: 'Median measured time. Many apps 24-48 ghante lete hain.' },
              { stat: '₹100', label: 'Min withdrawal', d: 'Low threshold = chhote winnings bhi nikal sakte ho.' },
              { stat: '38 MB', label: 'APK size', d: 'Bahut light. Budget phones (Redmi 9, Realme C-series) mein bhi smooth.' },
              { stat: '0', label: 'Hidden fees', d: 'Deposit free, withdrawal free. Sirf TDS Indian tax law ke hisaab se.' },
              { stat: '4.6/5', label: 'Avg rating', d: '50,000+ user ratings. Honest 90-day review yahan padhein.' },
            ].map((s, i) => (
              <div key={i} className={`card ${i % 2 === 1 ? 'card-cream' : ''}`}>
                <div className="stat-num" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>{s.stat}</div>
                <div className="stat-label" style={{ marginTop: 8 }}>{s.label}</div>
                <p className="muted" style={{ marginTop: 14, fontSize: '0.95rem', lineHeight: 1.6 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earning realistic targets */}
      <section className="section ink-section">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow">Realistic earning targets</span>
              <h2 className="h-section" style={{ marginTop: 14, color: '#fff8f3' }}>Asli IN7 player ek mahine mein kya kamata hai?</h2>
              <p className="muted-light" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 460 }}>
                Yeh actual data hai humare 90-day testing aur public IN7 leaderboards se. Aapka time investment + skill level se outcomes badalte hain. Salary chhodne se pehle ek baar rationally dekho.
              </p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 18, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
              {[
                ['Casual player (15 min/day)', '₹500 – ₹1,500 / month'],
                ['Regular player (45 min/day)', '₹2,000 – ₹6,000 / month'],
                ['Skilled player (90 min/day)', '₹6,000 – ₹15,000 / month'],
                ['Top 1% (3+ hours/day, leaderboards)', '₹15,000 – ₹40,000 / month'],
              ].map(([k, v], i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', borderTop: i ? '1px solid rgba(255,255,255,0.08)' : 0 }}>
                  <div style={{ padding: '14px 18px', fontSize: '0.9rem', color: 'rgba(255,248,243,0.7)' }}>{k}</div>
                  <div style={{ padding: '14px 18px', fontSize: '0.95rem', color: '#fff8f3', fontWeight: 600, textAlign: 'right' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-link */}
      <section className="section">
        <div className="wrap">
          <div className="three-col">
            <Link href="/how-to-play-in7" className="card no-deco" style={{ color: 'inherit' }}>
              <span className="tag">Pehle seekho</span>
              <h3 className="serif" style={{ fontSize: '1.2rem', marginTop: 12, letterSpacing: '-0.02em' }}>IN7 game kaise khelein</h3>
              <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.55 }}>
                Har room ke rules + scoring. Beginner-friendly guide.
              </p>
            </Link>
            <Link href="/in7-game-tips" className="card no-deco" style={{ color: 'inherit' }}>
              <span className="tag tag-ink">Phir jeetna</span>
              <h3 className="serif" style={{ fontSize: '1.2rem', marginTop: 12, letterSpacing: '-0.02em' }}>Winning strategy</h3>
              <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.55 }}>
                Bankroll rules + room-by-room playbook. 90-day-tested.
              </p>
            </Link>
            <Link href="/in7-game-withdrawal" className="card no-deco" style={{ color: 'inherit' }}>
              <span className="tag">Aur paise nikalo</span>
              <h3 className="serif" style={{ fontSize: '1.2rem', marginTop: 12, letterSpacing: '-0.02em' }}>UPI cashout guide</h3>
              <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.55 }}>
                5 minute mein wallet se UPI mein. Step-by-step.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <FAQ
        title="Paise kamane wala game · sawaal jawab"
        items={[
          {
            q: 'Sabse jaldi paise dene wala game kaunsa hai?',
            a: 'Withdrawal speed ke hisaab se IN7 sabse fast hai (median 4 min 12 sec UPI cashout). Doosre apps usually 12-48 ghante lete hain. IN7 ne intentionally automated payout queue banaya hai jo har 90 second mein run hota hai.',
          },
          {
            q: 'IN7 mein invest kiye bina paise kama sakte hain?',
            a: 'Bilkul. Welcome bonus ₹777 + daily free spin se bina deposit kiye thoda khel sakte ho. But significantly earn karne ke liye thoda buy-in zaroori hai (₹100-200 sufficient hai start ke liye).',
          },
          {
            q: 'Real money game khelna India mein legal hai?',
            a: 'Skill-based real money gaming most Indian states mein legal hai (Karnataka Supreme Court ruling, 2021). Restricted states (AP, Telangana, Assam, Nagaland, Sikkim, Odisha, Tamil Nadu · court orders ke hisaab se update) mein IN7 automatically deposits block kar deta hai.',
          },
          {
            q: 'Paisa jitne wala game safe kaise check karein?',
            a: 'Teen cheezein dekho: (1) APK signed hai (SHA-256 verify), (2) APK official website se aata hai (third-party mirror nahi), (3) ek chhota deposit + chhota withdrawal try karke UPI mein paisa aata hai ya nahi. IN7 teeno tests pass karta hai, mass-market unverified apps usually fail.',
          },
          {
            q: 'Tax deduction kya hota hai winnings pe?',
            a: 'Indian Income Tax Act ke section 194BA ke hisaab se net winnings ₹100/year se zyada par 30% TDS deduct hota hai. IN7 automatically TDS kaat ke balance withdraw hone deta hai aur quarterly TDS certificate provide karta hai (Form 16A).',
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'Paise Kamane Wala Game', href: '/paise-kamane-wala-game' },
          ]),
          webPageJsonLd({
            title: 'Paise Kamane Wala Game · IN7, India’s Fast Cashout Pick',
            description: 'IN7 = sabse fast UPI cashout, ₹777 bonus, fair skill rooms · India’s best paise kamane wala game.',
            path: '/paise-kamane-wala-game',
            primaryImage: '/in7-game-banner.jpeg',
          }),
        ])}
      />
    </>
  );
}
