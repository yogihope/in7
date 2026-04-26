import Link from 'next/link';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';

export default function MobileCTA() {
  return (
    <div className="mobile-cta">
      <Link href="/in7-game-login" className="btn btn-ghost" style={{ flex: 1 }}>
        Login
      </Link>
      <a
        href={IN7_DOWNLOAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary pulse-cta"
        style={{ flex: 1.6 }}
      >
        ↓ Download APK
      </a>
    </div>
  );
}
