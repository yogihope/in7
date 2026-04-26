import Link from 'next/link';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';

export const metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}>
      <div className="wrap" style={{ textAlign: 'center', maxWidth: 580 }}>
        <span className="eyebrow">404 · Off the table</span>
        <h1 className="display" style={{ marginTop: 14 }}>
          Yeh page bahar <em className="serif" style={{ color: '#b91c2c', fontStyle: 'italic' }}>chala gaya</em>.
        </h1>
        <p className="muted" style={{ marginTop: 18, maxWidth: 520, marginInline: 'auto', fontSize: '1.05rem', lineHeight: 1.65 }}>
          Kabhi link badal jaata hai, kabhi typo ho jata hai. Niche se shuru karo, IN7 ka asli mazaa to ab bhi waha hi hai.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary">Back to home</Link>
          <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">↓ Get the APK</a>
        </div>
      </div>
    </section>
  );
}
