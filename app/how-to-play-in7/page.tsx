import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';
import { breadcrumbJsonLd, webPageJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'How to Play IN7 · Game Rules for Every IN7 Room',
  description:
    'How to play IN7 game step-by-step. Rules, scoring & basic strategy for Quick 21, Mind Match, IN7 Rummy, Tap Trail and Spin Sevens. Beginner-friendly guide.',
  alternates: { canonical: '/how-to-play-in7' },
  keywords: [
    'how to play in7',
    'in7 game rules',
    'in7 game kaise khelein',
    'in7 gameplay',
    'in7 game tutorial',
    'in7 teen patti rules',
    'in7 andar bahar rules',
    'in7 dragon vs tiger',
    'in7 rummy rules',
    'in7 lucky 7',
    'in7 mind match',
    'in7 spin sevens',
  ],
  openGraph: {
    title: 'How to Play IN7 · Game Rules for Every IN7 Room',
    description: 'Step-by-step rules and strategy for every IN7 game room. Beginner-friendly.',
    url: '/how-to-play-in7',
    images: [{ url: '/in7-game-app-screenshot.jpeg', width: 1200, height: 630, alt: 'How to play IN7 game · IN7 gameplay rules' }],
  },
};

const ROOMS = [
  {
    n: '01',
    name: 'Teen Patti',
    tag: 'Card · 90 sec',
    rules:
      'India’s favourite 3-card poker variant on IN7. You and 2-5 opponents are dealt 3 cards each. Place the boot, then play "blind" (without looking) or "chaal" (after looking). Pack to fold, show to win. Hand strength: Trail (3 of a kind) > Pure Sequence > Sequence > Colour > Pair > High Card.',
    scoring:
      'Winner takes the full pot. A "show" stake equals 2× the current chaal amount. Side bets on opening 3 cards (Trail / Pair Plus) pay 5×-150× depending on combination.',
    tip: 'Going blind early feels bold but statistically loses ~15% more bankroll over a long Teen Patti session. Look at your cards by round 3 if you haven’t already.',
  },
  {
    n: '02',
    name: 'Andar Bahar',
    tag: 'Card · 30 sec',
    rules:
      'Classic Andar Bahar on IN7. Dealer flips a single "joker" card face-up in the centre. Cards are dealt alternately to Andar (left) and Bahar (right). First side to receive a card matching the joker rank wins. Bet on Andar or Bahar before the deal.',
    scoring:
      'Andar bet pays 0.9× stake. Bahar bet pays 1× stake (Bahar is slightly less likely to land first, so it pays a touch more). Side bets on first-card position pay 11×.',
    tip: 'Andar gets dealt the first card in IN7 standard rules, giving it a small statistical edge. Stick with Andar bets when uncertain — long-run RTP is higher.',
  },
  {
    n: '03',
    name: 'Dragon vs Tiger',
    tag: 'Casino · 15 sec',
    rules:
      'Dragon vs Tiger on IN7 is the fastest casino room in the app. Two cards drawn from a single deck — one for "Dragon", one for "Tiger". Bet on which side gets the higher card (Ace counts low, King highest). Tie and suit side bets available.',
    scoring:
      'Straight Dragon or Tiger bet pays 0.95× stake. Tie bet pays 8× stake (rare outcome). Suit-specific side bets pay 3×-50×.',
    tip: 'Skip the tie bet. House edge on tie is ~32%. Stick with straight Dragon or Tiger bets where the edge is under 4%.',
  },
  {
    n: '04',
    name: 'IN7 Rummy',
    tag: 'Classic · 6-8 min',
    rules:
      'Standard 13-card Indian Rummy on IN7. Each player is dealt 13 cards. Form sets (3+ of same rank) and sequences (3+ consecutive of same suit). At least one pure sequence (no joker) is mandatory before you can declare.',
    scoring:
      'First to declare a valid hand wins the pot. Other players pay points based on un-melded card values, capped at 80. Drop early to limit losses to 20 points.',
    tip: 'Lock in your pure sequence first. Discard high cards (J/Q/K) early if they don’t fit your sets — they cost the most points if you lose.',
  },
  {
    n: '05',
    name: 'Lucky 7',
    tag: 'Dice · 10 sec',
    rules:
      'Lucky 7 is IN7’s signature dice room. Two dice rolled together. Bet on whether the sum is "Under 7" (sum 2-6), "Exactly 7", or "Over 7" (sum 8-12). The dice roll, sum settles, payouts pay instantly.',
    scoring:
      'Under 7 or Over 7 = stake × 1.95. Exactly 7 = stake × 4 (rarer outcome). Pair bet (both dice same) = stake × 5. Specific-pair (e.g. 6-6) = stake × 30.',
    tip: 'Under 7 and Over 7 each have 15 winning outcomes — statistically tied. The "Exactly 7" payout looks attractive but the mathematical edge favours Under/Over for long-run play.',
  },
  {
    n: '06',
    name: 'Mind Match',
    tag: 'Memory · 4 min',
    rules:
      'IN7 exclusive memory room. A 4×4 grid of paired symbols flashes for 3 seconds, then flips face-down. You and three opponents take turns flipping two tiles, trying to match pairs. Each correct match keeps the tiles flipped and gives you another turn.',
    scoring:
      'Each pair = 100 points. Fastest match in a round earns a 50 point speed bonus. Highest total at the end of the grid takes the pot, second place gets 30% back.',
    tip: 'Mentally divide the grid into quadrants (NW, NE, SW, SE) and memorise positions, not just colours. Your opponents are tracking the same tiles you reveal.',
  },
  {
    n: '07',
    name: 'Spin Sevens',
    tag: 'Casual · 5 sec',
    rules:
      'IN7 Spin Sevens is the lightest game in the app. Tap to spin. Three reels stop with symbols. Three matching symbols pay out. The "7" symbol multiplies wins by 7 when it lands on any reel.',
    scoring:
      'Cherries = stake × 1.5. Bells = stake × 3. Sevens-anywhere multiplier = stake × 7 on top of base payout. Three sevens (jackpot) = stake × 77.',
    tip: 'Use the daily free Spin Sevens first. Only put cash in if you’ve had a quiet evening at the skill rooms — it’s entertainment, not income.',
  },
];

export default function HowToPlayIn7Page() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">/ how to play in7</span>
          <h1 className="display balance" style={{ marginTop: 14, maxWidth: 940 }}>
            How to play IN7 · seven rooms, <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>seven rhythms</em>.
          </h1>
          <p className="muted balance" style={{ marginTop: 22, fontSize: '1.08rem', lineHeight: 1.65, maxWidth: 720 }}>
            IN7 game rules are short on purpose. Each room takes a couple minutes to learn and a lifetime to push. This guide walks you through every IN7 room: rules, scoring, and one tip we learned the hard way.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg pulse-cta">↓ Download IN7 APK</a>
            <Link href="/in7-game-tips" className="btn btn-ghost btn-lg">Strategy guide →</Link>
          </div>
        </div>
      </section>

      {ROOMS.map((r, i) => (
        <section key={r.n} className={`section ${i % 2 === 1 ? 'dot-paper' : ''}`}>
          <div className="wrap">
            <div className="two-col" style={{ alignItems: 'start' }}>
              <div>
                <div className="index-num" style={{ fontSize: '4rem' }}>{r.n}</div>
                <span className="tag" style={{ marginTop: 8 }}>{r.tag}</span>
                <h2 className="h-section" style={{ marginTop: 14 }}>{r.name}</h2>
              </div>
              <div style={{ maxWidth: 640 }}>
                <h3 className="serif" style={{ fontSize: '1.1rem', letterSpacing: '-0.01em', color: '#b91c2c' }}>Rules</h3>
                <p style={{ marginTop: 8, fontSize: '1rem', lineHeight: 1.7, color: 'rgba(20,7,10,0.78)' }}>{r.rules}</p>
                <h3 className="serif" style={{ fontSize: '1.1rem', letterSpacing: '-0.01em', color: '#b91c2c', marginTop: 22 }}>Scoring</h3>
                <p style={{ marginTop: 8, fontSize: '1rem', lineHeight: 1.7, color: 'rgba(20,7,10,0.78)' }}>{r.scoring}</p>
                <div style={{ marginTop: 22, padding: 16, background: '#fdf1e8', borderLeft: '3px solid #b91c2c', borderRadius: '0 14px 14px 0', fontSize: '0.95rem', color: '#7a0e1c', lineHeight: 1.6 }}>
                  <strong style={{ display: 'block', marginBottom: 4 }}>Pro tip</strong>
                  {r.tip}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* General play loop */}
      <section className="section ink-section">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow">The IN7 play loop</span>
              <h2 className="h-section" style={{ marginTop: 14, color: '#fff8f3' }}>Same flow, every room.</h2>
              <p className="muted-light" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 380 }}>
                Once you know one room, the rest follow the same loop. Practice mode → cash room → cashout. No menu mazes.
              </p>
            </div>
            <ol style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                ['Pick a room from the home grid', 'Scroll the room cards. Tap the one you want.'],
                ['Choose practice or cash', 'Practice = demo coins, free. Cash = real ₹ stakes from ₹5–₹5000.'],
                ['Wait for opponents', 'Most rooms fill in under 8 seconds. Solo rooms (Spin Sevens, Quick 21) start instantly.'],
                ['Play the round', 'Each round is 60 seconds to 8 minutes depending on room.'],
                ['Collect winnings', 'Wins drop to your IN7 wallet automatically. No manual claim.'],
              ].map((step, i) => (
                <li key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 14, paddingBottom: 14, borderBottom: '1px solid rgba(255,248,243,0.1)' }}>
                  <span style={{ color: '#ffb4b4', fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '1.4rem', lineHeight: 1 }}>{i + 1}.</span>
                  <div>
                    <strong style={{ color: '#fff8f3', fontSize: '1.02rem' }}>{step[0]}</strong>
                    <p style={{ marginTop: 4, color: 'rgba(255,248,243,0.7)', fontSize: '0.94rem', lineHeight: 1.55 }}>{step[1]}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Cross-link */}
      <section className="section">
        <div className="wrap">
          <div className="three-col">
            <Link href="/in7-game-tips" className="card no-deco" style={{ color: 'inherit' }}>
              <span className="tag">Next step</span>
              <h3 className="serif" style={{ fontSize: '1.2rem', marginTop: 12, letterSpacing: '-0.02em' }}>Get the strategy</h3>
              <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.55 }}>
                Rules done. Now learn how to actually win · bankroll, table-reading, and decision frameworks.
              </p>
            </Link>
            <Link href="/in7-game-deposit" className="card no-deco" style={{ color: 'inherit' }}>
              <span className="tag tag-ink">Get ready</span>
              <h3 className="serif" style={{ fontSize: '1.2rem', marginTop: 12, letterSpacing: '-0.02em' }}>Add money to IN7</h3>
              <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.55 }}>
                Deposit guide · UPI, debit card, net banking. Minimum ₹10, instant credit.
              </p>
            </Link>
            <Link href="/in7-game-bonus" className="card no-deco" style={{ color: 'inherit' }}>
              <span className="tag">Boost your wallet</span>
              <h3 className="serif" style={{ fontSize: '1.2rem', marginTop: 12, letterSpacing: '-0.02em' }}>₹777 welcome bonus</h3>
              <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.55 }}>
                Claim the IN7 welcome credit on your first deposit. Stack with daily spin and streak.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <FAQ
        title="IN7 gameplay ke common sawaal"
        items={[
          {
            q: 'IN7 game pehli baar khelne ke liye sabse aasan room kaunsa hai?',
            a: 'Tap Trail ya Spin Sevens. Tap Trail mein sirf reaction speed chahiye, koi rules nahi. Spin Sevens lottery-style hai, tap karo aur dekhne ka. Real rules waale rooms (Quick 21, Rummy, Mind Match) ko free practice mode mein 5-6 round khelne ke baad cash mein switch karein.',
          },
          {
            q: 'IN7 ke games skill-based hain ya luck-based?',
            a: 'Mostly skill. Quick 21, Mind Match, IN7 Rummy, Tap Trail · sab decisions par run karte hain. Spin Sevens hi pure-luck hai (lottery format). IN7 ki sari rooms ki return-to-player rate publicly published hai.',
          },
          {
            q: 'IN7 game ka time per round kitna hai?',
            a: 'Spin Sevens 5 second. Tap Trail 60 second. Quick 21 90 second. Mind Match 4 minute. IN7 Rummy 6-8 minute. Sab rooms ek average gameplay session 30 minute mein 4-8 round khelne ka chance dete hain.',
          },
          {
            q: 'Practice mode mein jeeti hui coins cash mein convert hoti hain?',
            a: 'Nahi. Practice coins demo currency hain · sirf gameplay seekhne ke liye. Real ₹ jeetne ke liye cash room mein khelna padta hai (entry fee ₹5 se shuru).',
          },
          {
            q: 'Multiple rooms ek saath khel sakte hain?',
            a: 'Nahi, ek time pe ek hi room. IN7 jaan-bujh kar parallel sessions allow nahi karta · focus aur fair play ke liye. Jab current round khatam, doosre room mein switch kar sakte ho.',
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'How to Play IN7', href: '/how-to-play-in7' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to play IN7 game',
            description: 'Step-by-step guide to playing every IN7 game room · rules, scoring and beginner tips.',
            step: ROOMS.map((r, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: `Play ${r.name}`,
              text: r.rules,
            })),
          },
          webPageJsonLd({
            title: 'How to Play IN7 · Game Rules for Every IN7 Room',
            description: 'Step-by-step rules and strategy for every IN7 game room.',
            path: '/how-to-play-in7',
            primaryImage: '/in7-game-app-screenshot.jpeg',
          }),
        ])}
      />
    </>
  );
}
