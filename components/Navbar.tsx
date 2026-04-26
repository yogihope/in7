'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';

const NAV = [
  { href: '/in7-gaming', label: 'IN7 Gaming' },
  { href: '/in7-game-app', label: 'The App' },
  { href: '/in7-game-apk-download', label: 'Download' },
  { href: '/in7-game-bonus', label: 'Bonus' },
  { href: '/in7-game-review', label: 'Review' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="nav-shell">
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'inherit' }}>
            <img src="/in7-game-logo.jpg" alt="IN7 Gaming logo, IN7 game app icon" title="IN7 Game" width={36} height={36} fetchPriority="high" style={{ borderRadius: 10, objectFit: 'cover' }} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span className="serif" style={{ fontWeight: 700, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>IN7</span>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(20,7,10,0.6)' }}>Gaming co.</span>
            </div>
          </Link>

          <nav className="nav-desktop-links">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="nav-link">{n.label}</Link>
            ))}
          </nav>

          <div className="nav-desktop-cta">
            <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary pulse-cta">↓ Download IN7 APK</a>
          </div>

          <button
            className="nav-burger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="13" x2="20" y2="13" />
              <line x1="4" y1="19" x2="14" y2="19" />
            </svg>
          </button>
        </div>
      </header>

      <div className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', borderBottom: '1px solid rgba(20,7,10,0.08)' }}>
          <Link href="/" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'inherit', textDecoration: 'none' }}>
            <img src="/in7-game-logo.jpg" alt="IN7 Gaming logo" title="IN7 Game" width={36} height={36} style={{ borderRadius: 10 }} />
            <span className="serif" style={{ fontWeight: 700, fontSize: '1.15rem' }}>IN7</span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{ background: 'transparent', border: 0, fontSize: '1.6rem', cursor: 'pointer', color: '#14070a' }}
          >×</button>
        </div>

        <nav style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
          {NAV.map((n, i) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="serif"
              style={{
                fontSize: '1.5rem', fontWeight: 500, color: '#14070a',
                textDecoration: 'none', padding: '14px 0',
                borderBottom: '1px solid rgba(20,7,10,0.07)',
                letterSpacing: '-0.02em',
                animation: open ? `riseIn 0.4s ${i * 0.04 + 0.1}s both cubic-bezier(0.2,0.8,0.2,1)` : 'none',
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div style={{ padding: 20, borderTop: '1px solid rgba(20,7,10,0.08)' }}>
          <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn btn-primary btn-lg" style={{ width: '100%' }}>
            ↓ Download IN7 APK
          </a>
          <p style={{ fontSize: '0.78rem', color: 'rgba(20,7,10,0.55)', marginTop: 14, textAlign: 'center' }}>
            For 18+ players in India · Play responsibly
          </p>
        </div>
      </div>
    </>
  );
}
