type Item = { q: string; a: string };

export default function FAQ({
  items,
  eyebrow = 'FAQ',
  title = 'Common questions',
}: {
  items: Item[];
  eyebrow?: string;
  title?: string;
}) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <section className="section" aria-labelledby="faq-heading">
      <div className="wrap">
        <div className="two-col">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 id="faq-heading" className="h-section" style={{ marginTop: 14 }}>{title}</h2>
            <p className="muted" style={{ marginTop: 14, maxWidth: 320, lineHeight: 1.65 }}>
              Bahut log aksar yahi sawaal poochte hain. Agar aapka jawab yahan na mile, hamein <a href="/contact" style={{ color: '#b91c2c', textDecoration: 'underline', textUnderlineOffset: 4 }}>direct contact</a> kar sakte ho.
            </p>
          </div>
          <div>
            {items.map((item, i) => (
              <details key={i} className="faq-row">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
