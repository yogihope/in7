import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getPostBySlug, type BlogBlock } from '@/lib/blog';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';
import { breadcrumbJsonLd, jsonLdScript, SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

const LINK_STYLE = { color: '#b91c2c', textDecoration: 'underline', textUnderlineOffset: 4 } as const;

// Renders inline [label](url) links and **bold** runs.
// Internal paths use <Link>, external urls become dofollow anchors.
function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      return href.startsWith('/') ? (
        <Link key={i} href={href} style={LINK_STYLE}>{label}</Link>
      ) : (
        <a key={i} href={href} target="_blank" rel="noopener" style={LINK_STYLE}>{label}</a>
      );
    }
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i} style={{ color: '#14070a' }}>{bold[1]}</strong>;
    return part;
  });
}

const TEXT = { fontSize: '1.02rem', lineHeight: 1.75, color: 'rgba(20,7,10,0.8)' } as const;

function Block({ block }: { block: BlogBlock }) {
  if ('h2' in block) {
    return <h2 className="serif" style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', letterSpacing: '-0.02em', marginTop: 44 }}>{block.h2}</h2>;
  }
  if ('h3' in block) {
    return <h3 className="serif" style={{ fontSize: '1.2rem', letterSpacing: '-0.01em', marginTop: 28 }}>{block.h3}</h3>;
  }
  if ('ul' in block) {
    return (
      <ul style={{ ...TEXT, marginTop: 14, paddingLeft: 22, listStyle: 'disc' }}>
        {block.ul.map((item, i) => (
          <li key={i} style={{ marginTop: 6 }}>{renderInline(item)}</li>
        ))}
      </ul>
    );
  }
  if ('table' in block) {
    return (
      <div style={{ marginTop: 20, overflowX: 'auto', border: '1px solid rgba(20,7,10,0.1)', borderRadius: 16, background: '#fff' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
          <thead>
            <tr>
              {block.table.head.map((h) => (
                <th key={h} style={{ textAlign: 'left', padding: '12px 16px', background: 'rgba(20,7,10,0.04)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((row, r) => (
              <tr key={r} style={{ borderTop: '1px solid rgba(20,7,10,0.07)' }}>
                {row.map((cell, c) => (
                  <td key={c} style={{ padding: '12px 16px', lineHeight: 1.5, fontWeight: c === 0 ? 600 : 400 }}>{renderInline(cell)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return <p style={{ ...TEXT, marginTop: 16 }}>{renderInline(block.p)}</p>;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
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

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <span className="eyebrow">/ blog</span>
          <h1 className="display balance" style={{ marginTop: 14, maxWidth: 840, fontSize: 'clamp(1.9rem, 5vw, 3.2rem)' }}>
            {post.title}
          </h1>
          <p className="muted" style={{ marginTop: 16, fontSize: '0.9rem' }}>
            {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} · IN7 Gaming co.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="wrap">
          <article style={{ maxWidth: 720 }}>
            {post.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}

            {post.faqs.length > 0 && (
              <>
                <h2 className="serif" style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', letterSpacing: '-0.02em', marginTop: 44 }}>FAQs</h2>
                <div style={{ marginTop: 12 }}>
                  {post.faqs.map((f) => (
                    <details key={f.q} className="faq-row" open>
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              </>
            )}

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36 }}>
              <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary pulse-cta">↓ Download IN7 APK</a>
            </div>
          </article>
        </div>
      </section>

      {more.length > 0 && (
        <section className="section dot-paper" style={{ paddingTop: 48 }}>
          <div className="wrap">
            <span className="eyebrow">Keep reading</span>
            <h2 className="h-section" style={{ marginTop: 14, fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>More from the IN7 blog</h2>
            <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr', gap: 20 }} className="more-grid">
              {more.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="card no-deco">
                  <h3 className="serif" style={{ fontSize: '1.1rem', letterSpacing: '-0.01em' }}>{p.title}</h3>
                  <p className="muted" style={{ marginTop: 8, fontSize: '0.88rem', lineHeight: 1.6 }}>{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
          <style>{`
            @media (min-width: 900px) { .more-grid { grid-template-columns: repeat(3, 1fr) !important; } }
          `}</style>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'Blog', href: '/blog' },
            { name: post.title, href: `/blog/${post.slug}` },
          ]),
          articleJsonLd,
          ...(post.faqs.length > 0 ? [faqJsonLd] : []),
        ])}
      />
    </>
  );
}
