import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/*?*'],
      },
    ],
    sitemap: 'https://www.in7gaming.co/sitemap.xml',
    host: 'https://www.in7gaming.co',
  };
}
