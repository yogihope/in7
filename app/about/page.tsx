import type { Metadata } from 'next';
import Link from 'next/link';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About IN7 Gaming co. · India’s Skill-First Game App',
  description:
    'About IN7 Gaming co. · the small India-first team building the lightest, fairest skill-based real-money IN7 gaming app. Our story, mission and values.',
  alternates: { canonical: '/about' },
  keywords: [
    'about in7',
    'in7 gaming co',
    'in7 company',
    'in7 team',
    'about in7 game',
    'in7 mission',
    'in7 india',
  ],
  openGraph: {
    title: 'About IN7 Gaming co. · India’s Skill-First Game App',
    description: 'The small India-first team behind IN7 Gaming. Our story, mission and values.',
    url: '/about',
    images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: 'About IN7 Gaming co.' }],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">/ about</span>
          <h1 className="display balance" style={{ marginTop: 14, maxWidth: 880 }}>
            About IN7 Gaming · we built IN7 because <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>most</em> Indian gaming apps are noise.
          </h1>
        </div>
      </section>

      <section className="section dot-paper">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow">Our story</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>A small team. A focused product.</h2>
            </div>
            <div style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(20,7,10,0.8)', maxWidth: 640 }}>
              <p>
                IN7 started in 2024 as a side project. Three of us (two engineers and one designer) kept getting frustrated with the gaming apps already on our phones. They were heavy, they leaked battery, they made you wait 48 hours for a withdrawal, and they hid the rules behind a wall of text.
              </p>
              <p style={{ marginTop: 16 }}>
                We thought: <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>what if we just fixed the boring stuff first?</em> Make the app open in 6 seconds. Pay people in 5 minutes. Tell them the table edge upfront. Build for a Redmi 9, not a Pixel.
              </p>
              <p style={{ marginTop: 16 }}>
                Two years later, IN7 has 50+ lakh registered players, has paid out ₹40+ crore, and is still small enough to read every support ticket. We don’t plan to break that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">What we believe</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              Four <span className="marker-line">non-negotiables</span>.
            </h2>
          </div>
          <div className="three-col" style={{ marginTop: 36 }}>
            {[
              { t: 'Honesty over hype', d: 'No “unlimited cash” banners. We tell players the real odds, the real fees, and the real wait time.' },
              { t: 'Light by default', d: 'Every feature is judged by what it adds in MB and ms. If it doesn’t earn its weight, it doesn’t ship.' },
              { t: 'Player first, always', d: 'Our payout API is on a separate priority queue. Withdrawals never get throttled, even at peak load.' },
              { t: 'Built where people live', d: 'India-first. Hindi-first. Tested on the phones our players actually carry.' },
            ].map((v, i) => (
              <div key={i} className="card">
                <div className="index-num" style={{ fontSize: '2.4rem' }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 className="serif" style={{ fontSize: '1.2rem', marginTop: 12, letterSpacing: '-0.02em' }}>{v.t}</h3>
                <p className="muted" style={{ marginTop: 8, fontSize: '0.94rem', lineHeight: 1.6 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section ink-section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24, alignItems: 'end' }}>
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2 className="h-section balance" style={{ marginTop: 14, color: '#fff8f3' }}>
              Want to ask, suggest, or partner? We read every message.
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary btn-lg">Contact us</Link>
            <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#fff8f3', color: '#14070a' }}>↓ Download IN7</a>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'About IN7 Gaming', href: '/about' },
          ])
        )}
      />
    </>
  );
}
