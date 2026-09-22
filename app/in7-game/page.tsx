import type { Metadata } from 'next';
import { breadcrumbJsonLd, webPageJsonLd, jsonLdScript } from '@/lib/seo';

const META_TITLE = 'IN7 Game – Download the IN7 Gaming App & Start Playing';
const META_DESCRIPTION =
  'Discover the IN7 Game app and explore a smooth IN7 gaming experience. Learn more about the app, its features, and how to get started.';

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: '/in7-game' },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: '/in7-game',
    images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: 'IN7 Game' }],
  },
};

const FAQS = [
  {
    q: 'How much money can I earn from your gaming app?',
    a: 'There is no fixed amount. It depends on your skill, available tasks, and how much time you spend.',
  },
  {
    q: 'Can your gaming app replace a regular job?',
    a: 'No. Our gaming app is better viewed as entertainment with possible extra rewards, not a reliable source of income.',
  },
  {
    q: 'Is your gaming app suitable for beginners?',
    a: 'Yes, our app can be a good choice for beginners who want simple games and an easy-to-understand gaming experience.',
  },
  {
    q: 'I have a low-budget Android phone. Will the IN7 Gaming app work for me?',
    a: "Our lightweight gaming app can be suitable for users with budget Android phones. The actual experience depends on the phone's specifications and the app's requirements.",
  },
  {
    q: 'Do I need an internet connection to play?',
    a: 'Yes, an active internet connection is required to play games on the app and access its features.',
  },
];

const P = { marginTop: 16, fontSize: '1rem', lineHeight: 1.7, maxWidth: 760 } as const;
const H2 = { marginTop: 0 } as const;
const H3 = { fontSize: '1.2rem', letterSpacing: '-0.02em' } as const;
const UL = { marginTop: 16, paddingLeft: 22, lineHeight: 1.8, maxWidth: 760, listStyle: 'disc' } as const;

function Cards({ items }: { items: { t: string; d: string }[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16, marginTop: 28 }} className="doc-grid">
      {items.map((it) => (
        <div key={it.t} className="card">
          <h3 className="serif" style={H3}>{it.t}</h3>
          <p className="muted" style={{ marginTop: 8, fontSize: '0.95rem', lineHeight: 1.6 }}>{it.d}</p>
        </div>
      ))}
    </div>
  );
}

export default function In7GamePage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <h1 className="display balance" style={{ maxWidth: 920 }}>
            IN7 Game - Download the IN7 Gaming App for a Better Way to Play
          </h1>
          <p className="serif" style={{ marginTop: 22, fontSize: '1.4rem', fontStyle: 'italic', color: '#b91c2c' }}>
            Aapka apna desi gaming app
          </p>
          <p className="muted" style={P}>
            {"It's a very human tendency to want things that just work without a headache. You open a gaming app because you want to play. Then boom, pop-ups. Too many buttons. Confusing menus. Slow loading. Random stuff all over the screen. By the time you actually find the game you wanted, you are already thinking, \"Seriously, was all that necessary?\""}
          </p>
          <p style={{ ...P, fontWeight: 600 }}>{"That's exactly why the IN7 Gaming game app exists!"}</p>
          <p className="muted" style={P}>
            We built it for Indian players who want a simple and skill-focused experience on their everyday Android phones. With us, you get a lightweight app (around 48 MB), a simple home screen where games are easy to find, a visible wallet, and quick access to your previous rooms.
          </p>
        </div>
      </section>

      <section className="section dot-paper">
        <div className="wrap">
          <h2 className="h-section" style={H2}>What is IN7 Gaming Actually About</h2>
          <p className="muted" style={P}>
            IN7 Gaming started in 2024 as a side project by two engineers and a designer. The idea was very simple. We were frustrated with gaming apps that made basic things harder than they needed to be. So instead of trying to pack the app with endless features, our team wanted to fix the boring stuff first.
          </p>
          <p className="muted" style={P}>Our app is built with a few simple ideas:</p>
          <ul style={UL}>
            <li>A clean gaming experience for Indian users</li>
            <li>Games that are easy to find and access</li>
            <li>A lightweight Android app</li>
            <li>Simple account and login steps</li>
            <li>Easy wallet access</li>
            <li>Clear information around games and payments</li>
            <li>A focus on everyday Indian smartphones</li>
            <li>Support for familiar payment methods such as UPI</li>
          </ul>
          <p className="muted" style={P}>
            {"We weren't trying to build another app with 20 buttons nobody uses because we wanted the basics to work properly first."}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h-section" style={H2}>The Games You Can Jump Into</h2>
          <p className="muted" style={P}>Pick your game and get going. We focus on popular Indian favorites so you can start playing fast.</p>
          <p className="muted" style={P}>Popular games on our platform include:</p>
          <Cards
            items={[
              { t: 'Teen Patti', d: 'A classic Indian card game. Quick rounds, easy to learn, and great for short sessions. Beginners can start with practice before joining cash rooms.' },
              { t: 'Andar Bahar', d: 'A simple betting card game where you pick a side. Very fast gameplay and easy rules make it friendly for new players.' },
              { t: 'Dragon vs Tiger', d: 'Another quick card game where you bet on Dragon, Tiger, or Tie. Rounds are short and the flow is straightforward.' },
              { t: 'Rummy', d: 'A skill-based card game with clear rules. Good for players who enjoy strategy and pattern matching. Practice modes help you learn the ropes.' },
              { t: 'Lucky 7', d: 'A fast, number-based game with simple outcomes. Great for quick play when you have a few minutes.' },
            ]}
          />
          <p style={{ ...P, fontWeight: 600 }}>And many more!</p>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 32 }}>
        <div className="card-ink" style={{ padding: 28 }}>
          <h2 className="serif" style={{ fontSize: '1.5rem', color: '#fff8f3' }}>Important!</h2>
          <p className="muted-light" style={{ marginTop: 10, lineHeight: 1.65 }}>
            We do not promise guaranteed winnings. Play for fun, use practice rooms, and always stay within your budget.
          </p>
        </div>
      </section>

      <section className="section dot-paper">
        <div className="wrap">
          <h2 className="h-section" style={H2}>How IN7 Gaming works</h2>
          <p className="muted" style={P}>
            The IN7 online game app is easy to use so you don’t waste time. Let’s see how you can get started on our app:
          </p>
          <Cards
            items={[
              { t: 'Get the App', d: 'Android users can download the IN7 APK from our website. Our site guides you to the download section and the APK file. For iPhone users, you can currently use the IN7mobile web version.' },
              { t: 'Create Your Account', d: 'Register with your mobile number and complete OTP verification. This keeps your account secure and linked to you.' },
              { t: 'Choose Your Game', d: 'Browse available rooms. If you are new, start with practice options where available. Cash rooms also offer free practice versions on our app.' },
              { t: 'Play And Manage Your Wallet', d: 'Deposit, play, and track your balance from the wallet. Withdrawals are handled from the same place with clear steps.' },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h-section" style={H2}>Is IN7 Gaming Available on Play Store?</h2>
          <p className="muted" style={P}>
            If you searched for “IN7 game download” on the Play Store and could not find the app, you are not necessarily looking at the wrong thing. The current IN7 app page directs Android users to its website for the APK. So avoid random APK websites claiming to be the official source. If you see an unfamiliar app using the IN7 name, check the source before installing anything.
          </p>
        </div>
      </section>

      <section className="section dot-paper">
        <div className="wrap">
          <h2 className="h-section" style={H2}>Why We Care About Keeping Things Simple</h2>
          <p className="muted" style={P}>{"We keep it simple because that's what works for real life."}</p>
          <p className="muted" style={P}>Four things we refuse to mess up:</p>
          <Cards
            items={[
              { t: 'Be Straight with Players', d: 'Clear information, no unrealistic promises, transparent fees, and easy-to-read rules.' },
              { t: 'Keep the App Light', d: 'Smaller app size, everyday Android phones supported, less unnecessary loading, better usability.' },
              { t: 'Put Players Before Pointless Features', d: 'Helpful support, easy wallet access, smooth withdrawal flow, and listening to user feedback.' },
              { t: 'Build For Actual Indian Users', d: 'Hindi and English support, UPI and familiar payment methods, works on everyday smartphones, and local-friendly design.' },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h-section" style={H2}>{"Is IN7 Gaming Safe to Use? Here's What You Should Actually Know"}</h2>
          <p className="muted" style={P}>We are not being salesy here. But this is something you need to know to stay safe:</p>
          <Cards
            items={[
              { t: 'Account Security', d: 'We offer mobile number registration with OTP verification.' },
              { t: 'Encryption and Secure Communication', d: 'Our platform lists AES-256 encryption and TLS 1.3 for data protection, along with device binding for added safety.' },
              { t: 'KYC and Payment Security', d: 'KYC checks help keep accounts genuine. Payments are processed through secure channels.' },
            ]}
          />
        </div>
      </section>

      <section className="section dot-paper">
        <div className="wrap">
          <h2 className="h-section" style={H2}>Why Download Only from the Official Website</h2>
          <p className="muted" style={P}>
            Official APKs reduce the risk of fake or tampered apps. Always check that you are on the real IN7site before downloading.
          </p>
          <p style={{ ...P, fontWeight: 600 }}>Things to Remember Before You Play:</p>
          <ul style={UL}>
            <li>18+ only</li>
            <li>{"Availability depends on your state's rules in India"}</li>
            <li>Play responsibly. Do not play with money you cannot afford to lose</li>
            <li>Set a gaming budget, avoid chasing losses, and take breaks if gaming starts affecting your daily life</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h-section" style={H2}>Why Players Keep Coming Back</h2>
          <p className="muted" style={P}>
            People do not always need another complicated gaming platform. Sometimes they just want an app that gets out of the way.
          </p>
          <p className="muted" style={P}>Some of the practical things that can make our app easier to use include:</p>
          <ul style={UL}>
            <li>Quick access to games</li>
            <li>Lightweight Android app</li>
            <li>Simple interface</li>
            <li>Easy IN7 game login and download</li>
            <li>Visible wallet</li>
            <li>Multiple game options</li>
            <li>Practice options where available</li>
            <li>UPI support</li>
            <li>Regular app updates</li>
            <li>Reliable support when something goes wrong</li>
          </ul>
        </div>
      </section>

      <section className="section dot-paper">
        <div className="wrap">
          <h2 className="h-section" style={H2}>Why Choose Us?</h2>
          <p className="muted" style={P}>Here’s why we stand out:</p>
          <ul style={UL}>
            <li><strong>Quick Access:</strong> Find your favourite games without clicking through endless screens.</li>
            <li><strong>Easy Navigation:</strong> Games, wallet, account, and other important sections are easy to find.</li>
            <li><strong>Smooth Experience:</strong> The app is designed to load quickly and keep navigation simple.</li>
            <li><strong>A Growing Player Base:</strong> With 50+ lakh registered players and ₹40+ crore paid out, we have built a growing community of players.</li>
          </ul>
          <div className="card" style={{ marginTop: 32, maxWidth: 760 }}>
            <h3 className="serif" style={H3}>Say YES to a Hassle-free Gaming Experience</h3>
            <p className="muted" style={{ marginTop: 10, lineHeight: 1.65 }}>
              If you want a gaming app that keeps things simple, gives you quick access to your games, and does not make you dig through a pile of menus, IN7 Gaming is worth checking out.
            </p>
            <p style={{ marginTop: 12, lineHeight: 1.65, fontWeight: 600 }}>Download the IN7 game app now and make some good money!</p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-heading">
        <div className="wrap">
          <h2 id="faq-heading" className="h-section" style={H2}>FAQs</h2>
          <div style={{ marginTop: 24, maxWidth: 820 }}>
            {FAQS.map((item) => (
              <details key={item.q} className="faq-row">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 720px) { .doc-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          breadcrumbJsonLd([
            { name: 'Home', href: '/' },
            { name: 'IN7 Game', href: '/in7-game' },
          ]),
          webPageJsonLd({
            title: META_TITLE,
            description: META_DESCRIPTION,
            path: '/in7-game',
            primaryImage: '/in7-game-banner.jpeg',
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ])}
      />
    </>
  );
}
