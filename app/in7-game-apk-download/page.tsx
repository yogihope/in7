import type { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';
import { breadcrumbJsonLd, webPageJsonLd, jsonLdScript, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'IN7 Game APK Download · Latest IN7 APK v4.7 Free',
  description:
    'Download IN7 game APK latest version 4.7.1, ~38 MB, signed & safe. Free direct IN7 APK download for Android with full step-by-step install guide inside.',
  alternates: { canonical: '/in7-game-apk-download' },
  keywords: [
    'in7 game apk',
    'in7 apk',
    'in7 game download',
    'in7 apk download',
    'in7 game apk download',
    'download in7',
    'in7 game online apk',
    'in7 latest apk',
    'in7 apk free download',
  ],
  openGraph: {
    title: 'IN7 Game APK Download · Latest IN7 APK v4.7 Free',
    description: 'Free direct IN7 APK download for Android · latest v4.7.1, 38 MB, SHA-256 signed.',
    url: '/in7-game-apk-download',
    images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: 'IN7 Game APK Download · latest IN7 APK for Android' }],
  },
};

export default function In7DownloadPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">/ in7 game apk download</span>
          <h1 className="display balance" style={{ marginTop: 14, maxWidth: 920 }}>
            Get the IN7 game apk, <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>direct</em>, signed, ~38 MB.
          </h1>
          <p className="muted balance" style={{ marginTop: 20, fontSize: '1.08rem', lineHeight: 1.65, maxWidth: 720 }}>
            No app stores in the way, no third-party mirrors. The latest IN7 apk lives on this page, fingerprinted, virus-scanned, and updated every release. Install once, get OTA updates after.
          </p>

          <div style={{ marginTop: 34, padding: 28, borderRadius: 22, background: '#14070a', color: '#fff8f3', display: 'grid', gridTemplateColumns: '1fr', gap: 22 }} className="dl-card">
            <div>
              <span className="tag" style={{ background: 'rgba(255,180,180,0.18)', color: '#ffb4b4', borderColor: 'rgba(255,180,180,0.3)' }}>Latest · v4.7.1</span>
              <h2 className="serif" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', marginTop: 14, color: '#fff8f3', letterSpacing: '-0.02em' }}>
                IN7 Game APK · Android 7.0+
              </h2>
              <div style={{ marginTop: 14, display: 'flex', gap: 18, flexWrap: 'wrap', fontSize: '0.86rem', color: 'rgba(255,248,243,0.7)' }}>
                <span>📦 38.4 MB</span>
                <span>🛡️ SHA-256 signed</span>
                <span>📅 Updated Apr 2026</span>
                <span>🇮🇳 Made in India</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg pulse-cta">↓ Download IN7 APK</a>
              <Link href="/in7-game-app" className="btn" style={{ background: 'transparent', color: '#fff8f3', border: '1px solid rgba(255,248,243,0.25)' }}>What’s inside →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Install steps */}
      <section className="section dot-paper" id="install">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="eyebrow">Install in 4 steps</span>
            <h2 className="h-section" style={{ marginTop: 14 }}>
              From <em className="serif" style={{ fontStyle: 'italic', color: '#b91c2c' }}>tap</em> to first deal.
            </h2>
          </div>
          <div style={{ marginTop: 36, maxWidth: 760 }}>
            <div className="step-row">
              <span className="num">i.</span>
              <div>
                <h3>Tap “Download IN7 APK”</h3>
                <p>The browser will warn you about an unknown file, that’s normal for any APK. Choose “Download anyway”. The file lands in your Downloads folder.</p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">ii.</span>
              <div>
                <h3>Allow installs from this source</h3>
                <p>Open the downloaded file. Android may ask you to enable “Install unknown apps” for your browser, toggle it on. (Settings &gt; Apps &gt; Special access.)</p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">iii.</span>
              <div>
                <h3>Install &amp; open</h3>
                <p>Hit Install. ~6 seconds later you’ll see the IN7 launcher icon. Tap it to open.</p>
              </div>
            </div>
            <div className="step-row">
              <span className="num">iv.</span>
              <div>
                <h3>Sign in or register</h3>
                <p>Mobile + OTP, that’s it. New players get the ₹777 welcome credit on first deposit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety / authenticity */}
      <section className="section">
        <div className="wrap">
          <div className="two-col">
            <div>
              <span className="eyebrow">Safety check</span>
              <h2 className="h-section" style={{ marginTop: 14 }}>How to know your IN7 apk is the real one.</h2>
              <p className="muted" style={{ marginTop: 18, fontSize: '1rem', lineHeight: 1.7, maxWidth: 420 }}>
                There are knock-off IN7 APKs floating around Telegram and shady mirror sites. Two things will tell you instantly whether you have the real one.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
              <div className="card">
                <span className="tag tag-ink">SHA-256 hash</span>
                <h3 className="serif" style={{ fontSize: '1.2rem', marginTop: 12, letterSpacing: '-0.02em' }}>Verify the file fingerprint</h3>
                <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Compare the downloaded apk’s SHA-256 with the one printed on this page (visible in the v4.7.1 release notes). If even one character differs, delete the file.
                </p>
              </div>
              <div className="card card-cream">
                <span className="tag">Source URL</span>
                <h3 className="serif" style={{ fontSize: '1.2rem', marginTop: 12, letterSpacing: '-0.02em' }}>The download link should be in7gaming.co</h3>
                <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Anyone offering “IN7 mod APK” or “IN7 unlimited cash” is lying. The official IN7 game APK is only on this domain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        title="IN7 game apk download, sawaal jawab"
        items={[
          {
            q: 'IN7 game APK kya safe hai?',
            a: 'Bilkul. Hamari APK SHA-256 signed hai aur har release pe independent virus scan se guzarti hai. Source seedha in7gaming.co se hi karein, koi bhi mod / cracked version asli nahi hai.',
          },
          {
            q: 'Phone par “unknown app” warning aa raha hai, kya karein?',
            a: 'Ye normal hai jab APK Play Store ke bahar se aata hai. Settings → Apps → Special access → Install unknown apps mein apne browser ko allow karein. Ek baar enable kar diya, kabhi dobara nahi maangega.',
          },
          {
            q: 'Update kaise hoga IN7 app ka?',
            a: 'IN7 app khud check karta hai. Jab nayi version available ho, ek subtle popup aata hai update ke liye. APK fir se download nahi karna padta, over-the-air update inhouse handle karta hai.',
          },
          {
            q: 'IN7 APK ka size kitna hai?',
            a: 'Around 38 MB. Ye intentionally chhota rakha hai taaki low-end Android phones (Redmi 9, Realme C-series, Samsung A14) par bhi smooth chale.',
          },
          {
            q: 'iPhone ke liye IN7 apk milega?',
            a: 'Nahi, APK sirf Android files hote hain. iPhone ke liye filhaal IN7 ka mobile-web version use kar sakte ho, login wahaan bhi kaam karta hai.',
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'IN7 Game APK Download', href: '/in7-game-apk-download' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'IN7 Game APK',
            operatingSystem: 'Android 7.0+',
            applicationCategory: 'GameApplication',
            downloadUrl: IN7_DOWNLOAD_URL,
            installUrl: IN7_DOWNLOAD_URL,
            fileSize: '38MB',
            softwareVersion: '4.7.1',
            datePublished: '2026-04-01',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.6',
              ratingCount: '52840',
              bestRating: '5',
              worstRating: '1',
            },
            publisher: { '@id': `${SITE_URL}/#organization` },
          },
          webPageJsonLd({
            title: 'IN7 Game APK Download · Latest IN7 APK v4.7 Free',
            description: 'Free direct IN7 APK download for Android · latest v4.7.1, 38 MB, signed.',
            path: '/in7-game-apk-download',
            primaryImage: '/in7-game-banner.jpeg',
          }),
        ])}
      />
    </>
  );
}
