import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ background: '#fff8f3', position: 'relative', overflow: 'hidden' }}>
        <div className="wrap" style={{ paddingTop: 56, paddingBottom: 64 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }} className="hero-grid">
            <div>
              <span className="eyebrow rise">Made in India · Skill-first gaming</span>
              <h1 className="display rise rise-delay-1" style={{ marginTop: 18 }}>
                IN7 Game · a new kind of <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>gaming</em>.<br />
                Download the APK. <span className="marker-line">Win real cash</span>.
              </h1>
              <p className="rise rise-delay-2" style={{ marginTop: 22, fontSize: '1.08rem', lineHeight: 1.65, color: 'rgba(20,7,10,0.72)', maxWidth: 540 }}>
                IN7 is the gaming platform Indian players have been quietly switching to. Quick rounds, real-money tables, and a withdrawal flow that lands in your UPI before chai gets cold.
              </p>

              <div className="rise rise-delay-3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 30 }}>
                <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg pulse-cta">↓ Download IN7 APK</a>
                <Link href="/in7-game-review" className="btn btn-ghost btn-lg">Read the review</Link>
              </div>

              <div className="rise rise-delay-4" style={{ display: 'flex', gap: 28, marginTop: 36, flexWrap: 'wrap' }}>
                <div>
                  <div className="stat-num"><em>50L+</em></div>
                  <div className="stat-label">Players onboard</div>
                </div>
                <div>
                  <div className="stat-num">₹40<em>cr</em></div>
                  <div className="stat-label">Paid in 2025</div>
                </div>
                <div>
                  <div className="stat-num">4.6<em>★</em></div>
                  <div className="stat-label">User rating</div>
                </div>
              </div>
            </div>

            <div className="rise rise-delay-2" style={{ position: 'relative' }}>
              <div className="frame" style={{ maxWidth: 520, marginLeft: 'auto' }}>
                <img src="/in7-game-banner.jpeg" alt="IN7 Game online banner · download IN7 APK & play IN7 gaming" title="IN7 Game online" width={1200} height={800} fetchPriority="high" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div
                style={{
                  position: 'absolute', top: -18, left: -10, transform: 'rotate(-6deg)',
                  background: '#14070a', color: '#fff8f3', padding: '10px 16px',
                  borderRadius: 12, fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em',
                }}
                className="hide-mobile"
              >
                ★ Featured · in7 game apk
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} style={{ display: 'flex', gap: 56 }}>
              <span className="marquee-item">in7 game apk</span>
              <span className="marquee-item">instant UPI cashout</span>
              <span className="marquee-item">in7 gaming</span>
              <span className="marquee-item">skill rooms only</span>
              <span className="marquee-item">in7 game online</span>
              <span className="marquee-item">made for India</span>
              <span className="marquee-item">in7 game app</span>
              <span className="marquee-item">₹777 welcome bonus</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── EDITORIAL: WHY IN7 ─── */}
      <section className="section">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow">Why people stay</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                Most apps are noise.<br />IN7 is just <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>play</em>.
              </h2>
              <p className="muted" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 380 }}>
                We built IN7 around three boring promises: fast loading, clean tables, and money in your account when you ask for it. The rest is just gameplay you actually want to log back into.
              </p>
            </div>
            <div className="three-col">
              <article className="card">
                <div className="index-num">01</div>
                <h3 className="serif" style={{ fontSize: '1.35rem', marginTop: 18, letterSpacing: '-0.02em' }}>Skill, not luck</h3>
                <p className="muted" style={{ marginTop: 10, fontSize: '0.95rem', lineHeight: 1.65 }}>
                  Every IN7 room is built on decision-making. The more you read the table, the more you win. No mystery boxes.
                </p>
              </article>
              <article className="card card-cream">
                <div className="index-num">02</div>
                <h3 className="serif" style={{ fontSize: '1.35rem', marginTop: 18, letterSpacing: '-0.02em' }}>UPI in minutes</h3>
                <p className="muted" style={{ marginTop: 10, fontSize: '0.95rem', lineHeight: 1.65 }}>
                  Withdrawals start at ₹100. Funds reach your bank or UPI app inside 5 minutes for verified accounts.
                </p>
              </article>
              <article className="card-ink">
                <div className="index-num" style={{ color: '#ffb4b4' }}>03</div>
                <h3 className="serif" style={{ fontSize: '1.35rem', marginTop: 18, letterSpacing: '-0.02em', color: '#fff8f3' }}>Built for India</h3>
                <p className="muted-light" style={{ marginTop: 10, fontSize: '0.95rem', lineHeight: 1.65 }}>
                  Hindi support, low data mode, and tables that load on a 3G connection. IN7 runs where you actually live.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap"><div className="divider-rule" /></div>

      {/* ─── PRODUCT SHOWCASE ─── */}
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{ alignItems: 'center' }}>
            <div className="frame-rust" style={{ maxWidth: 460 }}>
              <img src="/in7-game-app-screenshot.jpeg" alt="IN7 Game app screenshot · IN7 gaming home screen" title="IN7 Game app" width={1080} height={1920} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div>
              <span className="eyebrow">The IN7 app</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                A 38 MB download. <br />A whole gaming room in your <span className="marker-line">pocket</span>.
              </h2>
              <p className="muted" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 460 }}>
                The IN7 game APK is light, signed, and updates over-the-air. Open the app, pick your room, and you’re seated in 6 seconds, even on a budget Android. No app-store gatekeepers, no junk SDKs.
              </p>
              <div className="pill-list" style={{ marginTop: 22 }}>
                <span className="pill">Android 7+</span>
                <span className="pill">~38 MB</span>
                <span className="pill">No ads</span>
                <span className="pill">RBI-compliant payouts</span>
                <span className="pill">SHA-256 signed</span>
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
                <Link href="/in7-game-app" className="btn btn-ink">Inside the app →</Link>
                <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary pulse-cta">↓ Download APK</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BIG QUOTE ─── */}
      <section className="section ink-section">
        <div className="wrap">
          <span className="eyebrow">Word on the table</span>
          <p className="pull-quote balance" style={{ marginTop: 18, color: '#fff8f3', maxWidth: 880 }}>
            Maine bahut sare gaming apps try kiye, <span style={{ color: '#ffb4b4' }}>IN7 only one hai jisne pehle hi din UPI mein paise bhej diye.</span> Ab roz 30 minute IN7 zaroor.
          </p>
          <div style={{ marginTop: 22, fontSize: '0.92rem', color: 'rgba(255,248,243,0.6)' }}>
           , Kunal P., Bengaluru · IN7 player since March 2025
          </div>
        </div>
      </section>

      {/* ─── BONUS / SPIN ─── */}
      <section className="section">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow">Welcome stack</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>
                ₹777 credit, daily spins,<br />and a streak that pays.
              </h2>
              <ul style={{ marginTop: 22, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <li style={{ paddingLeft: 28, position: 'relative', fontSize: '1rem', color: 'rgba(20,7,10,0.78)' }}>
                  <span style={{ position: 'absolute', left: 0, top: 2, color: '#b91c2c', fontWeight: 700 }}>✓</span>
                  ₹777 sign-up credit added to your IN7 wallet on first deposit.
                </li>
                <li style={{ paddingLeft: 28, position: 'relative', fontSize: '1rem', color: 'rgba(20,7,10,0.78)' }}>
                  <span style={{ position: 'absolute', left: 0, top: 2, color: '#b91c2c', fontWeight: 700 }}>✓</span>
                  Daily lucky spin, unlock cash, vouchers, or table upgrades.
                </li>
                <li style={{ paddingLeft: 28, position: 'relative', fontSize: '1rem', color: 'rgba(20,7,10,0.78)' }}>
                  <span style={{ position: 'absolute', left: 0, top: 2, color: '#b91c2c', fontWeight: 700 }}>✓</span>
                  Refer a friend, both of you get ₹100 instantly.
                </li>
                <li style={{ paddingLeft: 28, position: 'relative', fontSize: '1rem', color: 'rgba(20,7,10,0.78)' }}>
                  <span style={{ position: 'absolute', left: 0, top: 2, color: '#b91c2c', fontWeight: 700 }}>✓</span>
                  7-day streak bonus stacks up to ₹1,400.
                </li>
              </ul>
              <Link href="/in7-game-bonus" className="btn btn-primary" style={{ marginTop: 28 }}>See all rewards →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="frame" style={{ marginTop: 20 }}>
                <img src="/in7-game-bonus-offer.jpeg" alt="IN7 Game ₹777 welcome bonus offer · IN7 gaming bonus" title="IN7 Game bonus" width={800} height={800} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div className="frame-rust">
                <img src="/in7-game-spin-wheel.jpeg" alt="IN7 Game daily spin wheel · IN7 lucky bonus spin" title="IN7 spin wheel" width={800} height={800} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW TO PLAY ─── */}
      <section className="section dot-paper">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">From zero to your first ₹</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              Four steps. <span className="marker-line">No fluff</span>.
            </h2>
          </div>
          <div style={{ marginTop: 36, maxWidth: 760 }}>
            <div className="step-row">
              <span className="num">i.</span>
              <div>
                <h3>Download the IN7 APK</h3>
                <p>Tap the Download button. The IN7 game apk file is around 38 MB, install it from your downloads folder. First-time installs need “unknown sources” enabled.</p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">ii.</span>
              <div>
                <h3>Register with your phone number</h3>
                <p>Open IN7, enter mobile number, verify the OTP. KYC happens later, before your first withdrawal.</p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">iii.</span>
              <div>
                <h3>Pick a room and play</h3>
                <p>Try the free-practice tables first. When you’re comfortable, switch to a cash room, entries from ₹10.</p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">iv.</span>
              <div>
                <h3>Withdraw to UPI</h3>
                <p>Go to wallet → withdraw → enter UPI ID. Most payouts land in under 5 minutes for verified players.</p>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 30 }}>
            <Link href="/in7-game-register" className="btn btn-primary">Register free →</Link>
            <Link href="/in7-game-login" className="btn btn-ghost">Login help</Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQ
        eyebrow="FAQ"
        title="Sawaal jo har naye player ke man mein aate hain"
        items={[
          {
            q: 'IN7 game APK kaise download karein?',
            a: 'Bahut simple, IN7 ki download page pe jaao, “Download IN7 APK” button click karo. File 38 MB ke around hai, downloads folder mein save hogi. Ek baar “Unknown sources” enable kar do phone settings mein, install ho jaayega.',
          },
          {
            q: 'Kya IN7 game real money deta hai?',
            a: 'Haan, IN7 ek skill-based real money platform hai. Aap apne IN7 wallet se UPI ya bank account mein withdraw kar sakte ho, usually 5 minute ke andar paisa aa jaata hai (verified accounts ke liye).',
          },
          {
            q: 'IN7 gaming legal hai India mein?',
            a: 'IN7 sirf un states ke liye available hai jahan skill-based real money games allowed hain. Restricted states mein deposits aur withdrawals automatically block ho jaate hain. Sign-up ke time apna location verify zaroor karein.',
          },
          {
            q: 'Welcome bonus kaise milega?',
            a: 'Pehla deposit karte hi aapke wallet mein ₹777 credit aa jaata hai. Iska istemaal cash games mein hota hai, playthrough requirement aur full terms /in7-game-bonus page pe likhe hain.',
          },
          {
            q: 'Agar mera IN7 login nahi ho raha to kya karein?',
            a: 'Sabse pehle latest version pe app update karein. OTP nahi aa raha to 60 second ka wait karke “Resend OTP” try karein. Phir bhi nahi ho raha to /in7-game-login page pe full troubleshooting steps hain.',
          },
        ]}
      />

      {/* ─── FINAL CTA ─── */}
      <section className="section ink-section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24, alignItems: 'end' }}>
          <div>
            <span className="eyebrow">One last thing</span>
            <h2 className="h-section balance" style={{ marginTop: 14, color: '#fff8f3', maxWidth: 760 }}>
              Aaj IN7 download karo, abhi se khelna shuru karo, pehla bonus aapka wait kar raha hai.
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg pulse-cta">↓ Download IN7 APK</a>
            <Link href="/in7-game-register" className="btn" style={{ background: '#fff8f3', color: '#14070a' }}>Create account</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1.1fr 1fr !important; gap: 72px !important; }
        }
      `}</style>
    </>
  );
}
