import type { Metadata } from 'next';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Contact IN7 Gaming · Support, Help & Grievance Officer',
  description:
    'Contact IN7 Gaming · chat support, email and grievance officer details. Median first reply 3 min. Get help with IN7 login, deposits and IN7 game withdrawal.',
  alternates: { canonical: '/contact' },
  keywords: [
    'contact in7',
    'in7 support',
    'in7 customer care',
    'in7 grievance officer',
    'in7 help',
    'in7 contact number',
    'in7 email',
  ],
  openGraph: {
    title: 'Contact IN7 Gaming · Support, Help & Grievance',
    description: 'Reach IN7 · chat, email and grievance officer. Median reply 3 min.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">/ contact</span>
          <h1 className="display balance" style={{ marginTop: 14, maxWidth: 820 }}>
            Contact IN7 Gaming.<br /><em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>Bilkul</em> seriously.
          </h1>
          <p className="muted" style={{ marginTop: 20, fontSize: '1.05rem', lineHeight: 1.65, maxWidth: 620 }}>
            Whether it’s a bug, a payout issue, or just a question, we read every message. Pick the channel that fits you best.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 18 }} className="contact-grid">
            <div className="card">
              <span className="tag">Fastest</span>
              <h3 className="serif" style={{ fontSize: '1.3rem', marginTop: 12, letterSpacing: '-0.02em' }}>In-app chat</h3>
              <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.65 }}>
                Open the IN7 app → Settings → Help. Median first response: 3 minutes (9 am – 11 pm IST).
              </p>
            </div>
            <div className="card">
              <span className="tag tag-ink">General</span>
              <h3 className="serif" style={{ fontSize: '1.3rem', marginTop: 12, letterSpacing: '-0.02em' }}>Email</h3>
              <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.65 }}>
                <a href="mailto:hello@in7gaming.co" style={{ color: '#b91c2c', textDecoration: 'underline', textUnderlineOffset: 4 }}>hello@in7gaming.co</a>, replies within 24 hours.
              </p>
            </div>
            <div className="card">
              <span className="tag tag-ink">Press &amp; partnerships</span>
              <h3 className="serif" style={{ fontSize: '1.3rem', marginTop: 12, letterSpacing: '-0.02em' }}>Business</h3>
              <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.65 }}>
                <a href="mailto:partners@in7gaming.co" style={{ color: '#b91c2c', textDecoration: 'underline', textUnderlineOffset: 4 }}>partners@in7gaming.co</a> for collaborations, press, or affiliate enquiries.
              </p>
            </div>
            <div className="card card-cream">
              <span className="tag">Grievance officer</span>
              <h3 className="serif" style={{ fontSize: '1.3rem', marginTop: 12, letterSpacing: '-0.02em' }}>Compliance</h3>
              <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.65 }}>
                <a href="mailto:grievance@in7gaming.co" style={{ color: '#b91c2c', textDecoration: 'underline', textUnderlineOffset: 4 }}>grievance@in7gaming.co</a><br />
                Mandatory under IT Rules 2021. Acknowledged within 24 hours, resolved in 15 days.
              </p>
            </div>
          </div>

          <style>{`
            @media (min-width: 720px) { .contact-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          `}</style>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'Contact IN7', href: '/contact' },
          ])
        )}
      />
    </>
  );
}
