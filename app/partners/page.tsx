import type { Metadata } from 'next';
import { PARTNER_SITES } from '@/lib/partners';
import { breadcrumbJsonLd, webPageJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'More Games & Partner Sites · IN7 Gaming',
  description:
    'More games and app portals IN7 recommends — casino platforms, real-money game APK libraries, and download hubs trusted by Indian players.',
  alternates: { canonical: '/partners' },
  keywords: ['more games', 'gaming partner sites', 'real money game apps', 'game apk download sites', 'in7 gaming partners'],
  openGraph: {
    title: 'More Games & Partner Sites · IN7 Gaming',
    description: 'Casino platforms, real-money game APK libraries, and download hubs recommended by IN7.',
    url: '/partners',
    images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: 'IN7 Gaming partners' }],
  },
};

export default function PartnersPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">/ more games &amp; partners</span>
          <h1 className="display balance" style={{ marginTop: 14, maxWidth: 780, fontSize: 'clamp(2rem, 5.5vw, 3.6rem)' }}>
            More games &amp; sites we <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>recommend</em>.
          </h1>
          <p className="muted" style={{ marginTop: 18, fontSize: '1.02rem', lineHeight: 1.65, maxWidth: 620 }}>
            IN7 ke alawa bhi kuch platforms hain jo Indian players ke beech popular hain — casino tables, game APK
            libraries, aur download hubs. Ye rahi hamari partner list.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }} className="partners-grid">
            {PARTNER_SITES.map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener"
                className="no-deco"
                style={{
                  display: 'block',
                  padding: '22px 24px',
                  border: '1px solid rgba(20,7,10,0.12)',
                  borderRadius: 16,
                  background: '#fff',
                }}
              >
                <div className="serif" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#14070a' }}>
                  {site.name} →
                </div>
                <p className="muted" style={{ marginTop: 8, fontSize: '0.92rem', lineHeight: 1.6 }}>{site.tagline}</p>
                <span style={{ display: 'inline-block', marginTop: 10, fontSize: '0.82rem', color: '#b91c2c' }}>
                  {new URL(site.url).hostname}
                </span>
              </a>
            ))}
          </div>
        </div>
        <style>{`
          @media (min-width: 720px) { .partners-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (min-width: 1080px) { .partners-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        `}</style>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'More Games & Partners', href: '/partners' },
          ]),
          webPageJsonLd({
            title: 'More Games & Partner Sites · IN7 Gaming',
            description: 'Casino platforms, real-money game APK libraries, and download hubs recommended by IN7.',
            path: '/partners',
            primaryImage: '/in7-game-banner.jpeg',
          }),
        ])}
      />
    </>
  );
}
