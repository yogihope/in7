import { IN7_DOWNLOAD_URL } from '@/lib/constants';

export default function DownloadCard({
  label = 'Last update · Aug 2026',
  title = 'IN7 Game APK download',
  reviewHref = '/in7-game-review',
}: {
  label?: string;
  title?: string;
  reviewHref?: string;
}) {
  return (
    <div className="download-card">
      <span className="dc-badge">Best</span>
      <img src="/in7-game-logo.jpg" alt="IN7 Game app icon" width={52} height={52} loading="lazy" className="dc-icon" />
      <div className="dc-mid">
        <div style={{ fontSize: '0.72rem', color: 'rgba(20,7,10,0.55)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{label}</div>
        <div className="dc-stars" aria-label="4.6 out of 5 stars">★★★★★</div>
        <div className="dc-title">{title}</div>
      </div>
      <div className="dc-actions">
        <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">↓ Download now</a>
        <a href={reviewHref} className="btn btn-ghost">Read review</a>
      </div>
    </div>
  );
}
