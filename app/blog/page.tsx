import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog';
import { PARTNER_SITES } from '@/lib/partners';
import { breadcrumbJsonLd, webPageJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'IN7 Gaming Blog · Guides, Tips & Updates',
  description:
    'IN7 gaming blog · APK download guides, Teen Patti & Andar Bahar strategy, withdrawal tips, and safe-play advice for Indian players.',
  alternates: { canonical: '/blog' },
  keywords: ['in7 game blog', 'in7 gaming guides', 'in7 game tips', 'teen patti real money'],
  openGraph: {
    title: 'IN7 Gaming Blog · Guides, Tips & Updates',
    description: 'APK download guides, game strategy, withdrawal tips, and safe-play advice for IN7 players.',
    url: '/blog',
    images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: 'IN7 Gaming blog' }],
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">/ blog</span>
          <h1 className="display balance" style={{ marginTop: 14, maxWidth: 780, fontSize: 'clamp(2rem, 5.5vw, 3.6rem)' }}>
            Guides, strategy &amp; <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>updates</em> from IN7.
          </h1>
          <p className="muted" style={{ marginTop: 18, fontSize: '1.02rem', lineHeight: 1.65, maxWidth: 600 }}>
            Download walkthroughs, table strategy, withdrawal tips, and safe-play advice, written for Indian IN7 players.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 24 }} className="blog-grid">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card no-deco">
                <div className="bc-cover" aria-hidden>IN7</div>
                <div className="bc-body">
                  <span className="bc-cat">{post.category}</span>
                  <h2 className="bc-title">{post.title}</h2>
                  <p className="bc-excerpt">{post.excerpt}</p>
                  <div className="bc-meta">
                    <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span>Read more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          @media (min-width: 720px) { .blog-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (min-width: 1080px) { .blog-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        `}</style>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2 className="h-section" style={{ maxWidth: 720 }}>Recommended gaming sites</h2>
          <p className="muted" style={{ marginTop: 12, fontSize: '0.95rem', lineHeight: 1.6, maxWidth: 600 }}>
            Blog readers ye partner platforms bhi explore karte hain:
          </p>
          <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 24px', listStyle: 'none', padding: 0, marginTop: 18 }}>
            {PARTNER_SITES.map((site) => (
              <li key={site.url}>
                <a href={site.url} target="_blank" rel="noopener" title={site.tagline}>
                  {site.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'Blog', href: '/blog' },
          ]),
          webPageJsonLd({
            title: 'IN7 Gaming Blog · Guides, Tips & Updates',
            description: 'APK download guides, game strategy, withdrawal tips, and safe-play advice for IN7 players.',
            path: '/blog',
            primaryImage: '/in7-game-banner.jpeg',
          }),
        ])}
      />
    </>
  );
}
