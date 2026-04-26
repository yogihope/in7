import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';
import { breadcrumbJsonLd, webPageJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'IN7 Deposit · Add Money to IN7 Wallet (UPI, Card)',
  description:
    'IN7 deposit kaise karein · UPI, debit card, net banking. Minimum ₹10, instant credit. Full IN7 add money guide with failed deposit troubleshooting.',
  alternates: { canonical: '/in7-game-deposit' },
  keywords: [
    'in7 deposit',
    'in7 paise kaise daalein',
    'in7 add money',
    'in7 wallet recharge',
    'in7 upi deposit',
    'in7 game deposit',
    'in7 deposit failed',
    'in7 minimum deposit',
    'in7 deposit card',
  ],
  openGraph: {
    title: 'IN7 Deposit · Add Money to IN7 Wallet',
    description: 'IN7 deposit guide · UPI, card, net banking. Min ₹10, instant credit.',
    url: '/in7-game-deposit',
    images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: 'IN7 deposit · add money to IN7 game wallet' }],
  },
};

const METHODS = [
  {
    n: '01',
    name: 'UPI',
    tag: 'Most popular',
    fee: '₹0',
    speed: 'Instant',
    body: 'Pay from any UPI app · Google Pay, PhonePe, Paytm, Amazon Pay, BHIM. Tap Deposit → UPI → enter UPI ID or scan QR. Funds credit before the loading spinner closes.',
    note: 'Used by 89% of IN7 players.',
  },
  {
    n: '02',
    name: 'Debit card',
    tag: 'For non-UPI users',
    fee: '₹0',
    speed: '< 30 seconds',
    body: 'Visa, Mastercard, RuPay debit cards accepted. CVV + OTP flow. IN7 doesn’t store card details · every deposit goes through PCI-DSS-compliant payment partner.',
    note: 'Credit cards are intentionally not supported.',
  },
  {
    n: '03',
    name: 'Net banking',
    tag: 'Big deposits',
    fee: '₹0',
    speed: '1–2 minutes',
    body: 'All major Indian banks supported (SBI, HDFC, ICICI, Axis, Kotak, BoB, PNB and 60+ others). Slower than UPI but better for large deposits (₹50,000+).',
    note: 'Limit per transaction: ₹2,00,000.',
  },
];

export default function In7DepositPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">/ in7 game deposit</span>
          <h1 className="display balance" style={{ marginTop: 14, maxWidth: 940 }}>
            IN7 deposit · paisa <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>instant</em> wallet mein.
          </h1>
          <p className="muted balance" style={{ marginTop: 22, fontSize: '1.08rem', lineHeight: 1.65, maxWidth: 720 }}>
            IN7 wallet recharge takes about 8 seconds end-to-end. Three methods, zero fees, minimum ₹10. This page explains every IN7 deposit option, what to do when one fails, and which method to use when.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg pulse-cta">↓ Download IN7 to deposit</a>
            <Link href="/in7-game-withdrawal" className="btn btn-ghost btn-lg">Withdrawal guide →</Link>
          </div>
        </div>
      </section>

      {/* Methods cards */}
      <section className="section dot-paper">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">Three ways to deposit</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              Pick what you <span className="marker-line">already use</span>.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 18, marginTop: 36 }} className="dep-grid">
            {METHODS.map((m) => (
              <article key={m.n} className="card" style={{ display: 'grid', gap: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="index-num" style={{ fontSize: '2.6rem' }}>{m.n}</span>
                  <span className="tag">{m.tag}</span>
                </div>
                <h3 className="serif" style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}>{m.name}</h3>
                <p className="muted" style={{ fontSize: '0.97rem', lineHeight: 1.65 }}>{m.body}</p>
                <div style={{ display: 'flex', gap: 18, fontSize: '0.85rem', color: 'rgba(20,7,10,0.6)', borderTop: '1px solid rgba(20,7,10,0.07)', paddingTop: 14 }}>
                  <span><strong style={{ color: '#14070a' }}>Fee:</strong> {m.fee}</span>
                  <span><strong style={{ color: '#14070a' }}>Speed:</strong> {m.speed}</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#b91c2c', fontStyle: 'italic', margin: 0 }}>{m.note}</p>
              </article>
            ))}
          </div>
          <style>{`
            @media (min-width: 720px) { .dep-grid { grid-template-columns: repeat(3, 1fr) !important; } }
          `}</style>
        </div>
      </section>

      {/* Limits */}
      <section className="section">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow">IN7 deposit limits</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>Sensible limits, no surprises.</h2>
              <p className="muted" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 380 }}>
                Limits exist for fraud control and responsible play. They reset automatically. You can request a higher limit after 30 days of verified play.
              </p>
            </div>
            <div style={{ background: '#fff', border: '1px solid rgba(20,7,10,0.08)', borderRadius: 22, overflow: 'hidden' }}>
              {[
                ['Minimum deposit', '₹10'],
                ['Maximum per transaction', '₹2,00,000'],
                ['Maximum per day', '₹3,00,000'],
                ['Maximum per month', '₹20,00,000'],
                ['Cooling period for new payment method', '24 hours'],
                ['Failed deposit auto-refund', '15 minutes'],
              ].map(([k, v], i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: i ? '1px solid rgba(20,7,10,0.07)' : 0 }}>
                  <div style={{ padding: '14px 18px', fontSize: '0.85rem', color: 'rgba(20,7,10,0.55)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{k}</div>
                  <div style={{ padding: '14px 18px', fontSize: '0.95rem', color: '#14070a', fontWeight: 500, textAlign: 'right' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Failed */}
      <section className="section ink-section">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow">When deposit fails</span>
              <h2 className="h-section" style={{ marginTop: 14, color: '#fff8f3' }}>Don’t panic. Here’s what to do.</h2>
              <p className="muted-light" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 460 }}>
                Failed deposits where the bank deducted but IN7 wallet didn’t credit are very rare (under 0.4% of all deposits). When they happen, IN7 auto-detects and refunds within 15 minutes.
              </p>
            </div>
            <ol style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                ['Don’t retry yet', 'Wait 5 minutes. Many “failed” payments actually settle late, especially on UPI during peak load (10pm-1am).'],
                ['Check the IN7 transaction list', 'Wallet → History. If status is “Pending”, give it 15 more minutes.'],
                ['Auto-refund timer', 'If genuinely failed, IN7 detects within 15 min and starts the refund. Money returns to source UPI / bank within 5–7 working days (RBI mandate).'],
                ['Still stuck?', 'Email grievance@in7gaming.co with the UPI reference number (UTR). Resolved in 24 hours.'],
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

      <FAQ
        title="IN7 deposit ke sawaal jawab"
        items={[
          {
            q: 'IN7 deposit ka minimum kya hai?',
            a: 'Sirf ₹10. Beginners ko encourage karne ke liye low minimum rakha hai. Ek baar comfortable ho gaye to ₹100, ₹500 ya zyada ka deposit kabhi bhi kar sakte ho.',
          },
          {
            q: 'IN7 mein paisa kaise daalein?',
            a: 'IN7 app khole, balance pill par tap karein, "Deposit" choose karein, amount enter karein, payment method (UPI / debit card / net banking) chunein, aur authenticate karein. UPI deposit 8 second mein wallet mein add ho jaata hai.',
          },
          {
            q: 'IN7 deposit pe charge lagta hai?',
            a: 'Bilkul nahi. IN7 saari deposit methods par zero charges leta hai. Aapke bank ka full amount IN7 wallet mein aata hai.',
          },
          {
            q: 'Credit card se deposit kar sakte hain?',
            a: 'Nahi, IN7 intentionally credit cards support nahi karta. Sirf debit card, UPI aur net banking. Ye responsible gaming policy ka part hai · credit cards par gambling karne se loan trap ka risk hota hai.',
          },
          {
            q: 'Deposit fail ho gaya, paisa kab wapas aayega?',
            a: 'Failed deposit auto-detect 15 minute mein hota hai. Phir refund process start hota hai aur 5-7 working days mein source bank/UPI mein wapas aata hai (RBI mandate). Agar 7 din baad bhi nahi aaya to UTR number ke saath grievance@in7gaming.co par email karein.',
          },
          {
            q: 'Pehli baar deposit pe bonus milega?',
            a: 'Haan · first deposit pe ₹777 welcome credit aapke wallet mein add hota hai. Plus 5-step KYC complete karne ke 24 ghante ke andar deposit karne pe extra ₹50 ka KYC bonus.',
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'IN7 Deposit', href: '/in7-game-deposit' },
          ]),
          webPageJsonLd({
            title: 'IN7 Deposit · Add Money to IN7 Wallet (UPI, Card)',
            description: 'IN7 deposit guide · UPI, debit card, net banking. Min ₹10, instant credit.',
            path: '/in7-game-deposit',
            primaryImage: '/in7-game-banner.jpeg',
          }),
        ])}
      />
    </>
  );
}
