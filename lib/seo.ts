// Tiny SEO helpers for per-page schema (BreadcrumbList + WebPage).
// Keeps page files clean and ensures every IN7 page has valid rich-result data.

export const SITE_URL = 'https://in7gaming.co';

type Crumb = { name: string; href: string };

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href}`,
    })),
  };
}

export function webPageJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  primaryImage?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${opts.path}#webpage`,
    url: `${SITE_URL}${opts.path}`,
    name: opts.title,
    description: opts.description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    primaryImageOfPage: opts.primaryImage
      ? { '@type': 'ImageObject', url: `${SITE_URL}${opts.primaryImage}` }
      : undefined,
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data),
  };
}
