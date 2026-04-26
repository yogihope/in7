import type { MetadataRoute } from 'next';

const BASE = 'https://in7gaming.co';

// Tiered priority for SEO · homepage > APK download > other in7-game keyword pages > brand pages > legal
type Tier = { path: string; priority: number; cf: 'daily' | 'weekly' | 'monthly' | 'yearly' };

const ROUTES: Tier[] = [
  { path: '',                          priority: 1.0,  cf: 'daily' },
  { path: '/in7-game-apk-download',    priority: 0.95, cf: 'weekly' },
  { path: '/in7-gaming',               priority: 0.92, cf: 'weekly' },
  { path: '/in7-game-app',             priority: 0.92, cf: 'weekly' },
  { path: '/paise-kamane-wala-game',   priority: 0.90, cf: 'weekly' },
  { path: '/in7-game-bonus',           priority: 0.88, cf: 'weekly' },
  { path: '/in7-game-review',          priority: 0.86, cf: 'weekly' },
  { path: '/in7-game-withdrawal',      priority: 0.86, cf: 'weekly' },
  { path: '/in7-game-deposit',         priority: 0.84, cf: 'weekly' },
  { path: '/in7-game-register',        priority: 0.82, cf: 'monthly' },
  { path: '/in7-game-login',           priority: 0.80, cf: 'monthly' },
  { path: '/in7-game-tips',            priority: 0.80, cf: 'weekly' },
  { path: '/how-to-play-in7',          priority: 0.78, cf: 'monthly' },
  { path: '/in7-game-refer-and-earn',  priority: 0.76, cf: 'monthly' },
  { path: '/about',                    priority: 0.55, cf: 'monthly' },
  { path: '/contact',                  priority: 0.50, cf: 'monthly' },
  { path: '/privacy-policy',           priority: 0.30, cf: 'yearly' },
  { path: '/terms',                    priority: 0.30, cf: 'yearly' },
  { path: '/disclaimer',               priority: 0.30, cf: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.cf,
    priority: r.priority,
  }));
}
