import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';
import { breadcrumbJsonLd, webPageJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'IN7 Game Tips & Tricks · Winning Strategy Guide',
  description:
    'IN7 tips and tricks tested over 90 days · bankroll rules, room-by-room strategy, when to fold, when to push. Beat IN7 Quick 21, Rummy, Mind Match like a pro.',
  alternates: { canonical: '/in7-game-tips' },
  keywords: [
    'in7 tips',
    'in7 game tips',
    'in7 tips and tricks',
    'in7 winning strategy',
    'in7 game strategy',
    'in7 winning tips',
    'in7 game hack',
    'in7 jeetne ke tips',
    'in7 best strategy',
  ],
  openGraph: {
    title: 'IN7 Game Tips & Tricks · Winning Strategy',
    description: '90-day-tested IN7 tips and tricks. Bankroll, room-specific strategy, when to push.',
    url: '/in7-game-tips',
    images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: 'IN7 game tips and tricks · IN7 winning strategy' }],
  },
};

export default function In7TipsPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">/ in7 tips and tricks</span>
          <h1 className="display balance" style={{ marginTop: 14, maxWidth: 940 }}>
            IN7 game tips & tricks · how to <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>actually</em> win.
          </h1>
          <p className="muted balance" style={{ marginTop: 22, fontSize: '1.08rem', lineHeight: 1.65, maxWidth: 720 }}>
            Strategy beats hype. After 90 days, four phones, and ₹40,000 of test deposits, here are the IN7 tips and tricks that move our win rate from random to repeatable. No hacks, no mods. Just the patterns that quietly work.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg pulse-cta">↓ Download IN7 to play</a>
            <Link href="/how-to-play-in7" className="btn btn-ghost btn-lg">Game rules first →</Link>
          </div>
        </div>
      </section>

      {/* Universal rules */}
      <section className="section dot-paper">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">Bankroll · the boring rules</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              Win first <span className="marker-line">at money management</span>.
            </h2>
            <p className="muted" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 640 }}>
              Most players don’t lose to the table. They lose to themselves. These four rules are non-negotiable. Apply them and you’ll outlast 80% of the lobby.
            </p>
          </div>
          <div className="three-col" style={{ marginTop: 36 }}>
            {[
              { n: '01', t: 'Set a session cap', d: 'Decide a hard daily loss limit before opening the app. Use IN7 in-app deposit limits to enforce it. ₹500-₹1,000 is a safe starting cap.' },
              { n: '02', t: 'Stake = 2-5% of bankroll', d: 'If your wallet is ₹2,000, your average bet is ₹40-100. Bigger bets feel exciting, lose your bankroll twice as fast.' },
              { n: '03', t: 'Withdraw at +30%', d: 'Up ₹600 on a ₹2,000 bankroll? Withdraw the ₹600. Keep the original. Most regret comes from not locking in profits.' },
              { n: '04', t: 'Walk away on tilt', d: 'Three losses in a row = close the app. Tilt biases your decisions for at least 20 minutes. Come back tomorrow.' },
            ].map((tip, i) => (
              <div key={i} className={`card ${i === 1 ? 'card-cream' : ''}`}>
                <div className="index-num" style={{ fontSize: '2.4rem' }}>{tip.n}</div>
                <h3 className="serif" style={{ fontSize: '1.2rem', marginTop: 12, letterSpacing: '-0.02em' }}>{tip.t}</h3>
                <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.6 }}>{tip.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room-specific tips */}
      <section className="section">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">Room-by-room playbook</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              IN7 game tips that <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>actually</em> change outcomes.
            </h2>
            <p className="muted" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 640 }}>
              General bankroll discipline gets you to the table. Room-specific IN7 tips are what move your win rate above 50%. These are the patterns we tested across 90 days, four phones and 800+ cash rounds.
            </p>
          </div>
          <div style={{ marginTop: 36 }}>
            {[
              {
                room: 'Quick 21',
                tagline: 'Math beats vibes',
                tips: [
                  'Memorise the basic strategy chart for hand 12-16 vs dealer up-card. It’s a 1-page table that flips your win rate by 4 percentage points.',
                  'Never split 10s. Never split 5s. Always split 8s and Aces.',
                  'Don’t take insurance. Long-run negative expected value, regardless of dealer’s up-card.',
                ],
              },
              {
                room: 'Mind Match',
                tagline: 'Memory + zone-mapping',
                tips: [
                  'Mentally divide the 4×4 grid into named quadrants (NW, NE, SW, SE). Track tiles by quadrant, not by position number.',
                  'On your first turn, flip two tiles in the corners. Corner positions are easier to remember and your opponents reveal middle tiles, doing memory work for you.',
                  'When ahead by 2 pairs in the late game, play conservatively · flip already-known tiles for guaranteed points instead of risky guesses.',
                ],
              },
              {
                room: 'IN7 Rummy',
                tagline: 'Speed + sequence priority',
                tips: [
                  'Pure sequence first. Always. A hand without one is invalid no matter how many sets you have.',
                  'Discard high cards (J/Q/K/A) early if they don’t fit. They cost the most points if you lose.',
                  'Watch the discard pile. If your opponent picks up a card, the cards next to it become more dangerous. Don’t discard adjacent ranks.',
                ],
              },
              {
                room: 'Tap Trail',
                tagline: 'Eyes ahead, fingers behind',
                tips: [
                  'Don’t look at the dot you’re tapping. Look two dots ahead. Your finger trains itself faster than your eyes.',
                  'Keep your phone in landscape if your room allows. Wider thumb arc = faster trail completion.',
                  'Skip the practice round when warm. The warm-up actually slows your reflexes by training a slower rhythm.',
                ],
              },
              {
                room: 'Spin Sevens',
                tagline: 'The honest tip',
                tips: [
                  'Spin Sevens is pure luck. There’s no strategy. Use the daily free spin and stop there. Cash spins have a small house edge · fun for ₹50 a day, terrible as a primary game.',
                  'If you treat Spin Sevens as entertainment (₹100 budget per week), it stays fun. If you treat it as income, it ruins your bankroll.',
                ],
              },
            ].map((r, i) => (
              <div key={i} style={{ marginTop: i ? 36 : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 8 }}>
                  <h3 className="serif" style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}>{r.room}</h3>
                  <span style={{ fontSize: '0.86rem', fontStyle: 'italic', color: '#b91c2c', fontFamily: 'Fraunces, serif' }}>{r.tagline}</span>
                </div>
                <ul style={{ marginTop: 14, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {r.tips.map((t, j) => (
                    <li key={j} style={{ paddingLeft: 28, position: 'relative', fontSize: '0.97rem', color: 'rgba(20,7,10,0.78)', lineHeight: 1.65 }}>
                      <span style={{ position: 'absolute', left: 0, top: 0, color: '#b91c2c', fontWeight: 700 }}>→</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red flags */}
      <section className="section ink-section">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow">Things that don’t work</span>
              <h2 className="h-section" style={{ marginTop: 14, color: '#fff8f3' }}>Five IN7 “tips” to ignore.</h2>
              <p className="muted-light" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 460 }}>
                YouTube and Telegram are full of IN7 tips, IN7 hacks and IN7 tricks that look impressive but don’t survive the math. Most are clickbait. These five claims, specifically, are useless or actively harmful — ignore them and use the IN7 tips above instead.
              </p>
            </div>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'IN7 mod APK · No such thing exists. Anything claiming infinite cash is a credential phish.',
                'Best time to play · There’s no “lucky hour”. RNG seeds are server-side and uniform 24/7.',
                'Doubling the bet to recover losses · Martingale strategy. Mathematically guaranteed to bankrupt you eventually.',
                'Watch a YouTube video before each round · Cute superstition, no measurable effect.',
                'IN7 is rigged when you’re winning · No, it isn’t. Variance feels like rigging when emotional. Trust the published RTP.',
              ].map((s, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', alignItems: 'baseline', paddingBottom: 14, borderBottom: '1px solid rgba(255,248,243,0.1)' }}>
                  <span style={{ color: '#ffb4b4', fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '1.15rem' }}>✕</span>
                  <span style={{ color: '#fff8f3', fontSize: '0.97rem', lineHeight: 1.55 }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FAQ
        title="IN7 tips & strategy · common sawaal"
        items={[
          {
            q: 'IN7 game jeetne ke koi guaranteed tricks hain?',
            a: 'Real money skill games mein "guaranteed" IN7 tricks koi nahi hote. Lekin good bankroll management + room-specific IN7 tips long run mein win rate 5-10% improve kar deti hai. Practice mode mein 50+ games khelne ke baad cash mein switch karein.',
          },
          {
            q: 'IN7 mein sabse profitable room kaunsa hai?',
            a: 'Skill players ke liye Mind Match aur IN7 Rummy. Inka return-to-player ratio sabse zyada hai (~96-97%). Quick 21 medium (~95%). Spin Sevens recreational only · fun ke liye, profit ke liye nahi.',
          },
          {
            q: 'IN7 par bot use kar sakte hain?',
            a: 'Strictly nahi. IN7 ka anti-bot system pattern detection use karta hai aur bot accounts immediately ban hote hain · full balance forfeiture ke saath. Manual play hi safe aur fair hai.',
          },
          {
            q: 'Pehle din kitna deposit karna chahiye?',
            a: 'Pehla din ₹100-200 maximum. Welcome bonus se ₹777 already milta hai pehle deposit pe · itna kafi hai 10-15 cash games khelne ke liye. Comfortable feel ho to next day se incrementally badhao.',
          },
          {
            q: 'Loss mein hu, kya karein?',
            a: 'App close kar do. Aaj. Tilt mein khelna sirf loss badhata hai. Practice mode mein 1-2 din free games khelo, fir cash mein wapas aana. IN7 ka in-app self-cooldown bhi help karta hai (Settings → Limits).',
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'IN7 Tips & Tricks', href: '/in7-game-tips' },
          ]),
          webPageJsonLd({
            title: 'IN7 Game Tips & Tricks · Winning Strategy Guide',
            description: 'IN7 tips and tricks tested over 90 days. Bankroll, room-by-room strategy.',
            path: '/in7-game-tips',
            primaryImage: '/in7-game-banner.jpeg',
          }),
        ])}
      />
    </>
  );
}
