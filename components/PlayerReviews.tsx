type Review = { name: string; city: string; rating: number; text: string };

const REVIEWS: Review[] = [
  {
    name: 'Ajay',
    city: 'Delhi',
    rating: 5,
    text: 'Playing on IN7 has been a fantastic journey. The platform offers a rich variety of tables with smooth gameplay. Customer service is top-notch, always quick to resolve issues. Highly recommended for serious players.',
  },
  {
    name: 'Amit',
    city: 'Mumbai',
    rating: 5,
    text: 'IN7 delivers an exceptional gaming experience. The room selection is impressive and everything runs smoothly without lag. Withdrawals are processed incredibly fast, I got my winnings within minutes.',
  },
  {
    name: 'Ananya',
    city: 'Bengaluru',
    rating: 4,
    text: 'I have tried many platforms, but IN7 stands out for its reliability and user-friendly interface. Games are engaging and I appreciate the detailed activity log. Support is responsive and helpful.',
  },
];

export default function PlayerReviews() {
  return (
    <section className="section ink-section">
      <div className="wrap">
        <span className="eyebrow">Player reviews</span>
        <h2 className="h-section" style={{ marginTop: 14, color: '#fff8f3' }}>
          What IN7 players are saying.
        </h2>
        <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: '1fr', gap: 18 }} className="review-grid">
          {REVIEWS.map((r) => (
            <div key={r.name} className="review-card">
              <div className="rc-head">
                <span className="rc-avatar" aria-hidden>{r.name[0]}</span>
                <div>
                  <div className="rc-name">{r.name} <span style={{ fontWeight: 400, color: 'rgba(255,248,243,0.5)', fontSize: '0.82rem' }}>· {r.city}</span></div>
                  <div className="rc-stars" aria-label={`${r.rating} out of 5 stars`}>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
                </div>
              </div>
              <p className="rc-text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (min-width: 900px) { .review-grid { grid-template-columns: repeat(3, 1fr) !important; } }
      `}</style>
    </section>
  );
}
