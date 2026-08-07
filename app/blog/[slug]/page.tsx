import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getPostBySlug } from '@/lib/blog';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';
import { breadcrumbJsonLd, jsonLdScript, SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: 'article',
      images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'IN7 Gaming co.' },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}/in7-game-banner.jpeg`,
  };

  return (
    <>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <span className="eyebrow">/ blog / {post.category.toLowerCase()}</span>
          <h1 className="display balance" style={{ marginTop: 14, maxWidth: 840, fontSize: 'clamp(1.9rem, 5vw, 3.2rem)' }}>
            {post.title}
          </h1>
          <p className="muted" style={{ marginTop: 16, fontSize: '0.9rem' }}>
            {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} · IN7 Gaming co.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ maxWidth: 680 }}>
            {post.body.map((para, i) => (
              <p key={i} className="muted" style={{ fontSize: '1.02rem', lineHeight: 1.75, marginTop: i === 0 ? 0 : 20, color: 'rgba(20,7,10,0.8)' }}>
                {para}
              </p>
            ))}

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
              <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary pulse-cta">↓ Download IN7 APK</a>
              <Link href={post.relatedHref} className="btn btn-ghost">{post.relatedLabel}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section dot-paper" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <span className="eyebrow">Keep reading</span>
          <h2 className="h-section" style={{ marginTop: 14, fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>More from the IN7 blog</h2>
          <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr', gap: 20 }} className="more-grid">
            {more.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card no-deco">
                <span className="bc-cat">{p.category}</span>
                <h3 className="serif" style={{ fontSize: '1.1rem', marginTop: 8, letterSpacing: '-0.01em' }}>{p.title}</h3>
                <p className="muted" style={{ marginTop: 8, fontSize: '0.88rem', lineHeight: 1.6 }}>{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
        <style>{`
          @media (min-width: 900px) { .more-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        `}</style>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'Blog', href: '/blog' },
            { name: post.title, href: `/blog/${post.slug}` },
          ]),
          articleJsonLd,
        ])}
      />
    </>
  );
}
