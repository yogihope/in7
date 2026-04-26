import type { Metadata } from 'next';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'IN7 Disclaimer · 18+ Risk Notice & Regional Rules',
  description:
    'IN7 disclaimer · 18+ requirement, financial risk, regional restrictions and responsible play guidance for every IN7 game player in India.',
  alternates: { canonical: '/disclaimer' },
  keywords: ['in7 disclaimer', 'in7 risk notice', 'in7 responsible play', 'in7 18+', 'in7 regional rules'],
  openGraph: {
    title: 'IN7 Disclaimer',
    description: 'IN7 disclaimer · 18+, regional restrictions, responsible play.',
    url: '/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">/ disclaimer</span>
          <h1 className="display" style={{ marginTop: 14 }}>IN7 Disclaimer</h1>
          <p className="muted" style={{ marginTop: 16, fontSize: '0.95rem' }}>Last updated: April 2026</p>
        </div>
      </section>

      <section style={{ paddingBottom: 96 }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2 className="serif" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em' }}>You are 18+ and you understand the risk.</h2>
          <p style={{ marginTop: 12, fontSize: '1rem', lineHeight: 1.75, color: 'rgba(20,7,10,0.78)' }}>
            IN7 is a real-money skill-based gaming platform. Real money is at stake in every cash room. Wins are possible. Losses are equally possible. Only deposit what you are comfortable losing.
          </p>

          <h2 className="serif" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em', marginTop: 36 }}>Regional restrictions.</h2>
          <p style={{ marginTop: 12, fontSize: '1rem', lineHeight: 1.75, color: 'rgba(20,7,10,0.78)' }}>
            IN7 is unavailable to users in Indian states where real-money skill gaming is restricted by law, including, at the time of writing, Andhra Pradesh, Telangana, Assam, Nagaland, Sikkim, Odisha, and Tamil Nadu (subject to current court orders). The list is reviewed and updated as regulations change.
          </p>

          <h2 className="serif" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em', marginTop: 36 }}>Skill not luck.</h2>
          <p style={{ marginTop: 12, fontSize: '1rem', lineHeight: 1.75, color: 'rgba(20,7,10,0.78)' }}>
            IN7 only offers games of skill, outcomes are determined predominantly by player decisions, not by chance. Even so, no skill-game guarantees a positive return on every session.
          </p>

          <h2 className="serif" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em', marginTop: 36 }}>Play responsibly.</h2>
          <p style={{ marginTop: 12, fontSize: '1rem', lineHeight: 1.75, color: 'rgba(20,7,10,0.78)' }}>
            We encourage every player to set personal deposit and time limits inside the app. Use the in-app self-exclusion tool if play is starting to feel compulsive. If you, or someone you know, needs help with gaming behaviour, contact iCall (a free Indian helpline): 9152987821.
          </p>

          <h2 className="serif" style={{ fontSize: '1.4rem', letterSpacing: '-0.02em', marginTop: 36 }}>Tax responsibility.</h2>
          <p style={{ marginTop: 12, fontSize: '1rem', lineHeight: 1.75, color: 'rgba(20,7,10,0.78)' }}>
            IN7 deducts TDS on net winnings as required under Indian tax law. Players are responsible for filing their own returns to reflect any additional tax liability. Annual TDS certificates are downloadable from in-app settings.
          </p>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'Disclaimer', href: '/disclaimer' },
          ])
        )}
      />
    </>
  );
}
