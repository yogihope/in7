import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';
import { breadcrumbJsonLd, webPageJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'IN7 Withdrawal · UPI Cashout Guide & Time',
  description:
    'IN7 withdrawal kaise karein · UPI cashout in 5 minutes, KYC required, minimum ₹100, daily limit ₹2 lakh. Full IN7 paise nikalne ka guide with troubleshooting.',
  alternates: { canonical: '/in7-game-withdrawal' },
  keywords: [
    'in7 withdrawal',
    'in7 paise kaise nikalein',
    'in7 upi withdrawal',
    'in7 cashout',
    'in7 game withdrawal time',
    'in7 withdrawal limit',
    'in7 withdrawal pending',
    'in7 paisa withdraw',
    'in7 bank transfer',
  ],
  openGraph: {
    title: 'IN7 Withdrawal · UPI Cashout in 5 Minutes',
    description: 'How IN7 withdrawal works · UPI in 5 min, KYC, limits, troubleshooting.',
    url: '/in7-game-withdrawal',
    images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: 'IN7 withdrawal · UPI cashout from IN7 game wallet' }],
  },
};

export default function In7WithdrawalPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">/ in7 game withdrawal</span>
          <h1 className="display balance" style={{ marginTop: 14, maxWidth: 940 }}>
            IN7 withdrawal · paisa <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>5 minute</em> mein UPI mein.
          </h1>
          <p className="muted balance" style={{ marginTop: 22, fontSize: '1.08rem', lineHeight: 1.65, maxWidth: 720 }}>
            IN7 withdrawal is the fastest in Indian gaming. Verified accounts see UPI deposits in under 5 minutes, median measured across 14 testing payouts. This guide walks you through every step, plus what to do when things slow down.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg pulse-cta">↓ Download IN7 to withdraw</a>
            <Link href="/in7-game-deposit" className="btn btn-ghost btn-lg">Deposit guide →</Link>
          </div>
        </div>
      </section>

      {/* At-a-glance card */}
      <section className="section dot-paper">
        <div className="wrap">
          <div style={{ background: '#fff', borderRadius: 22, padding: 28, border: '1px solid rgba(20,7,10,0.08)' }}>
            <span className="tag">At a glance</span>
            <h2 className="serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', letterSpacing: '-0.02em', marginTop: 12 }}>
              IN7 withdrawal · the numbers.
            </h2>
            <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr', gap: 10 }} className="wd-grid">
              {[
                ['Median UPI time', '4 min 12 sec'],
                ['Minimum withdrawal', '₹100'],
                ['Maximum per day', '₹2,00,000'],
                ['Maximum per month', '₹15,00,000'],
                ['Processing batches', 'Every 90 sec'],
                ['KYC required', 'PAN + UPI + selfie'],
                ['Withdrawal fees', 'Zero (₹0)'],
                ['TDS deduction', 'Per Indian tax law (only on net winnings above ₹100/year)'],
              ].map(([k, v], i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: i ? '1px solid rgba(20,7,10,0.07)' : 0 }}>
                  <div style={{ padding: '12px 16px', fontSize: '0.85rem', color: 'rgba(20,7,10,0.55)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{k}</div>
                  <div style={{ padding: '12px 16px', fontSize: '0.95rem', color: '#14070a', fontWeight: 500, textAlign: 'right' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">Step-by-step</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              IN7 withdrawal · <span className="marker-line">5 taps</span>.
            </h2>
          </div>
          <div style={{ marginTop: 36, maxWidth: 760 }}>
            <div className="step-row">
              <span className="num">1.</span>
              <div>
                <h3>Open Wallet → Withdraw</h3>
                <p>From the IN7 home screen, tap your balance pill at the top. The wallet opens. Tap “Withdraw”.</p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">2.</span>
              <div>
                <h3>Enter the amount</h3>
                <p>Minimum ₹100, maximum ₹2,00,000 per day. The number pad has presets (₹500 / ₹1,000 / ₹5,000) for one-tap entry.</p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">3.</span>
              <div>
                <h3>Pick UPI ID or bank account</h3>
                <p>Use the UPI ID you registered during KYC. To add a second UPI ID, go to Settings → Payout methods. New UPI IDs need a 24-hour cooling-off before first withdrawal.</p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">4.</span>
              <div>
                <h3>Confirm with OTP</h3>
                <p>An SMS OTP comes to your registered mobile. Enter it. The withdrawal is locked in.</p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">5.</span>
              <div>
                <h3>Wait for the SMS / UPI ping</h3>
                <p>Median time: 4 minutes. You will get an in-app push, an SMS from your bank, AND a UPI app notification when the funds settle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why fast */}
      <section className="section ink-section">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow">Why IN7 withdrawal is fast</span>
              <h2 className="h-section" style={{ marginTop: 14, color: '#fff8f3' }}>The boring engineering bit.</h2>
              <p className="muted-light" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 460 }}>
                Most apps run withdrawal as a manual review queue. IN7 runs an automated payout API on a separate priority lane, hitting the bank’s settlement window every 90 seconds. Manual review only kicks in when fraud signals fire.
              </p>
            </div>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Withdrawals are batched and dispatched every 90 seconds',
                'The payout queue is on a separate priority lane from deposit traffic',
                'Verified accounts skip manual review unless flagged',
                'UPI settles within 30 seconds of dispatch (NPCI median)',
                'IN7 covers the per-transaction UPI fee · player pays nothing',
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

      {/* When it slows down */}
      <section className="section">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">When it slows down</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              IN7 withdrawal pending · <span className="marker-line">three reasons</span>.
            </h2>
          </div>
          <div className="three-col" style={{ marginTop: 36 }}>
            {[
              {
                t: 'KYC mismatch',
                d: 'PAN name doesn’t match the UPI / bank name. Triggers manual check (24-48 h). Fix: re-upload PAN with the same name as your bank account.',
              },
              {
                t: 'Bank-side delay',
                d: 'NPCI settlement gets backed up around midnight and during festivals. IN7 has dispatched, but bank is queued. No action needed; funds usually clear within 30-60 minutes.',
              },
              {
                t: 'Risk review',
                d: 'Large or unusual pattern triggers risk review. You’ll get an in-app message asking for a 30-second video confirmation. Once cleared, withdrawal completes in next batch.',
              },
            ].map((c, i) => (
              <div key={i} className="card">
                <span className="tag">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="serif" style={{ fontSize: '1.2rem', marginTop: 12, letterSpacing: '-0.02em' }}>{c.t}</h3>
                <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.6 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        title="IN7 withdrawal ke sawaal jawab"
        items={[
          {
            q: 'IN7 withdrawal kitne time mein aata hai?',
            a: 'Verified accounts ke liye median 4 minute 12 second. Maximum cases mein 30 minute ke andar UPI mein paisa aa jaata hai. Pehli baar withdraw karne pe KYC verification thoda extra time leta hai (24-48 ghante).',
          },
          {
            q: 'IN7 withdrawal ka minimum kya hai?',
            a: 'Minimum ₹100. Daily maximum ₹2,00,000 aur monthly maximum ₹15,00,000. Ye limits Indian gaming regulations ke hisaab se hain.',
          },
          {
            q: 'IN7 withdrawal mein fees lagti hai?',
            a: 'Bilkul nahi. IN7 zero withdrawal fees charge karta hai · UPI ka per-transaction charge IN7 khud bhejta hai. Aapke wallet ka pura amount aapke bank mein aata hai.',
          },
          {
            q: 'TDS kab katega?',
            a: 'Indian Income Tax Act ke hisaab se net winnings ₹100 saalana se zyada par TDS automatically deduct hota hai. IN7 quarterly TDS certificate in-app dega · IT return file karte time use karein.',
          },
          {
            q: 'IN7 withdrawal failed ho gaya, paisa wapas wallet mein kab aayega?',
            a: 'Failed UPI withdrawal automatic 30 minute mein wallet mein wapas aa jaata hai. Agar 2 ghante baad bhi nahi aaya, support se contact karein · refund 24 ghante ke andar process hota hai.',
          },
          {
            q: 'Bonus money withdraw kar sakte hain?',
            a: 'Welcome bonus (₹777) ko ek baar wager karna hota hai (1× playthrough). Spin wheel ka cash directly withdrawable hai. Streak bonus aur referral bonus dono direct withdrawable hain. Detailed terms /in7-game-bonus pe likhe hain.',
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'IN7 Withdrawal', href: '/in7-game-withdrawal' },
          ]),
          webPageJsonLd({
            title: 'IN7 Withdrawal · UPI Cashout Guide & Time',
            description: 'IN7 withdrawal works · UPI in 5 min, KYC, limits, troubleshooting.',
            path: '/in7-game-withdrawal',
            primaryImage: '/in7-game-banner.jpeg',
          }),
        ])}
      />

      <style>{`
        @media (min-width: 720px) { .wd-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
