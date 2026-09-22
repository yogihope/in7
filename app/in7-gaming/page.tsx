import type { Metadata } from 'next';
import { breadcrumbJsonLd, webPageJsonLd, jsonLdScript } from '@/lib/seo';

const META_TITLE = 'IN7 Gaming - Explore the IN7 Game App & Gaming Experience';
const META_DESCRIPTION =
  'Explore IN7 Gaming and learn more about the IN7 Game app, its features, and the overall gaming experience. Find useful information to get started.';

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  alternates: { canonical: '/in7-gaming' },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: '/in7-gaming',
    images: [{ url: '/in7-game-banner.jpeg', width: 1200, height: 630, alt: 'IN7 Gaming' }],
  },
};

const FAQS = [
  {
    q: 'Can I enjoy gaming without a PC or console?',
    a: 'Yes, our app lets you enjoy mobile gaming on your Android phone without needing a PC or gaming console.',
  },
  {
    q: 'Why choose your mobile gaming app for entertainment?',
    a: 'You can enjoy fun games directly on your Android phone, whether you have a few minutes or more free time.',
  },
  {
    q: 'Is this gaming app suitable for short gaming sessions?',
    a: 'Yes, you can enjoy the available games during your free time. The length of each session depends on the game.',
  },
  {
    q: 'Are the games easy to play?',
    a: 'Our app aims to offer simple and enjoyable games. Controls and rules depend on the game.',
  },
  {
    q: 'Can I play games whenever I want?',
    a: 'Yes, you can enjoy available games whenever you have internet access and meet the game requirements.',
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

function LabeledList({ items }: { items: [string, string][] }) {
  return (
    <ul style={UL}>
      {items.map(([label, text]) => (
        <li key={label} style={{ marginTop: 6 }}>
          <strong>{label}:</strong> {text}
        </li>
      ))}
    </ul>
  );
}

export default function In7GamingPage() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <h1 className="display balance" style={{ maxWidth: 920 }}>
            Enjoy a Smooth Gaming Experience with Our IN7 Game App
          </h1>
          <p className="muted" style={{ ...P, marginTop: 22 }}>
            {"It's a Sunday afternoon; you finally have some free time. Grab your phone and think, \"Chalo, thoda game khelte hain.\" You open one gaming app, but the screen feels cluttered. You try another, and now you're searching everywhere just to find the game you want. Then comes the APK confusion, random download links, and that small doubt in your head: \"Kahin galat app toh nahi?\""}
          </p>
          <p className="muted" style={P}>
            {"IN7 Gaming is here to make all your free time worthwhile with our reliable game app. We started our journey in 2024 with one simple thought: gaming shouldn't be this frustrating. Three of us- two engineers and one designer- started IN7 as a side project to fix the things players were tired of dealing with."}
          </p>
        </div>
      </section>

      <section className="section dot-paper">
        <div className="wrap">
          <h2 className="h-section" style={H2}>{"First Things First: Here's Where You Actually Start"}</h2>
          <p className="muted" style={P}>Stop scrolling. Pick what matches your situation right now:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16, marginTop: 28 }} className="doc-grid">
            {[
              ['Using an Android phone?', "Go for our IN7 APK download route. That's the official way to get our app on Android devices."],
              ['Using an iPhone?', "You'll play through your mobile browser. There's no iOS app, but the web version works smoothly."],
              ['Just want to play online?', 'Skip the download entirely and use the browser experience on any device.'],
              ['Already have an account?', 'Head straight to the IN7 game login page and get back to playing.'],
            ].map(([q, a]) => (
              <div key={q} className="card">
                <p style={{ lineHeight: 1.6 }}>
                  <strong>{q}</strong> <span className="muted">{a}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h-section" style={H2}>The Download Part Nobody Should Have to Overthink</h2>
          <p className="muted" style={P}>
            {"Let's talk about the actual download journey. Not some robotic \"step one, step two\" list. We offer a straightforward guide when you're trying to get the IN7 APK download for Android."}
          </p>
          <ul style={UL}>
            <li>You need the official APK file from a trusted source</li>
            <li>Your phone might ask for permission to install from outside the Play Store</li>
            <li>The file size is around 48 MB based on recent versions</li>
            <li>You need Android 7.0 or higher</li>
            <li>Make sure you have enough storage space before starting</li>
          </ul>
        </div>
      </section>

      <section className="section dot-paper">
        <div className="wrap">
          <h2 className="h-section" style={H2}>Few Things to Keep in Mind Before Downloading IN7</h2>
          <p className="muted" style={P}>To avoid any hassle, keep the below points in mind:</p>
          <Cards
            items={[
              { t: 'Downloading the Android Version', d: "Here's how it actually goes down. You hit the download button on the official site. The IN7 APK file starts downloading. Once it's done, you tap the file. Your phone might say \"This type of file can harm your device\" (that's normal for any APK). Then it asks if you want to allow installation from your browser or file manager. Say yes. Then install. That's it." },
              { t: 'Why the App Comes as an APK', d: "Simple answer: the IN7 game isn't on the Google Play Store in most regions. So the only way to get it on Android is through the APK file. APK is just the Standard Android Package format. It's how Android works when apps aren't on the Play Store." },
              { t: 'What Android Might Ask You to Allow', d: 'Your phone will probably say something like "Allow installation from unknown sources" or "Allow this app to install other apps." This is Android being cautious. You need to allow it for the IN7 game APK to install. Go to Settings, find Security or Privacy, and enable installation from your browser or file manager.' },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h-section" style={H2}>What If the File Refuses to Install</h2>
          <p className="muted" style={P}>{"Don't panic. Check these things:"}</p>
          <LabeledList
            items={[
              ['Storage', 'Do you actually have enough space? The app needs around 48 MB plus space to work.'],
              ['Android Compatibility', "Is your phone running Android 7.0 or newer? Older versions won't work."],
              ['Previous Version', 'Already have an old IN7 app? Uninstall it first, then install the fresh one.'],
              ['Download Interruption', "Did the download finish completely? A half-downloaded file won't install."],
              ['Permission Settings', 'Did you actually allow installation from unknown sources? Double-check.'],
            ]}
          />
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 32 }}>
        <div className="card-ink" style={{ padding: 28 }}>
          <h2 className="serif" style={{ fontSize: '1.5rem', color: '#fff8f3' }}>Where You Should NOT Download It From</h2>
          <p className="muted-light" style={{ marginTop: 10, lineHeight: 1.65 }}>
            {"This matters. Do not download IN7 from random APK sites. Do not trust modified versions claiming \"unlimited coins\" or \"free money hacks.\" Do not click links from Telegram groups or WhatsApp forwards promising special versions. Only use our official website. Anything else could be fake, could steal your data, or could just not work at all."}
          </p>
        </div>
      </section>

      <section className="section dot-paper">
        <div className="wrap">
          <h2 className="h-section" style={H2}>What Happens Once You Tap Install</h2>
          <p className="muted" style={P}>{"Okay, you downloaded it. Now what? Let's talk about it like a friend showing you:"}</p>
          <Cards
            items={[
              { t: 'Open the App', d: "The first screen loads up. Clean, simple. You'll see options to log in or create a new account. No confusion, no ten-page tutorial forcing itself on you." },
              { t: 'Create or Access Your Account', d: "New here? You'll register with your phone number. Get an OTP. Enter it. Done. Already have an account? Just put in your details and hit the IN7 game login button." },
              { t: 'Land Inside the Platform', d: "Now you're in. You'll see the lobby, game options, your wallet, profile section, and support. Everything's right there on the home screen." },
              { t: 'Choose How You Want to Play', d: "Browse through available games. Some need practice first. Some can jump straight into it. Take your time. Try practice modes if they're available. No rush." },
              { t: 'Manage Your Account', d: 'The wallet section shows your balance. Profile has your details. Verification keeps your account safe. Support is there if something goes wrong.' },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h-section" style={H2}>{"Already Downloaded It? Here's What You Might Be Looking For"}</h2>
          <p className="muted" style={P}>{"You got the app, but something's not clicking. Check these common issues:"}</p>
          <LabeledList
            items={[
              ["Can't Find the App After Downloading", "Check your app drawer or home screen. Sometimes it installs but doesn't show a shortcut. Search \"IN7\" in your phone's app search."],
              ["APK Downloaded But Won't Install", 'Could be storage, could be permissions, could be a corrupted file. Redownload from the official site and try again.'],
              ["App Opens, But Login Isn't Working", 'Check your internet. Make sure you\'re using the right credentials. Try the "forgot password" option if needed.'],
              ["OTP isn't Arriving", "Check if your number is correct. Make sure you have a network signal. Wait a minute and request again. Don't spam the button."],
              ['You Downloaded an Old Version', 'Old versions stop working. Get the latest IN7 APK download from our official website.'],
              ["Something Doesn't Look Right", "If the app looks weird, asks for strange permissions, or feels not right, don't enter any sensitive info. Contact official support immediately."],
            ]}
          />
        </div>
      </section>

      <section className="section dot-paper">
        <div className="wrap">
          <h2 className="h-section" style={H2}>{"We'd Rather Tell You This Than Pretend Everything Is Perfect"}</h2>
          <ul style={UL}>
            <li>No app can guarantee wins. Anyone saying otherwise is lying.</li>
            <li>{"Don't download modified APKs promising free coins or hacks."}</li>
            <li>{"Don't share OTPs with anyone."}</li>
            <li>{"Don't chase losses. That's how people get in trouble."}</li>
            <li>Bonuses have conditions. Read them.</li>
            <li>Gaming should stay within a budget you can afford to lose.</li>
            <li>{"If you're unsure about something, ask for support before proceeding."}</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h-section" style={H2}>Why Choose Us Over Other Gaming Apps?</h2>
          <p className="muted" style={P}>
            {"We aren't just being salesy. Instead, we offer genuine support and straightforward steps to help you make a good side income."}
          </p>
          <p className="muted" style={P}>Let’s see why we stand out:</p>
          <LabeledList
            items={[
              ['Quick Access', 'Built for smooth use on everyday Android phones.'],
              ['Easy Wallet', 'Check your balance, deposits, and withdrawals in one place.'],
              ['100% Safe APK', 'The IN7 APK is SHA-256 signed, and each release goes through an independent virus scan.'],
              ['Regular Updates', 'Get the latest app version without hunting for random APK files.'],
            ]}
          />
          <div className="card" style={{ marginTop: 32, maxWidth: 760 }}>
            <h3 className="serif" style={H3}>Why Wait to Get Started?</h3>
            <p className="muted" style={{ marginTop: 10, lineHeight: 1.65 }}>
              {"Now, you don't have to jump from one random website to another just to find the right app. Download the IN7 game app and get started with a simple and smooth gaming experience."}
            </p>
          </div>
        </div>
      </section>

      <section className="section dot-paper" aria-labelledby="faq-heading">
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
            { name: 'IN7 Gaming', href: '/in7-gaming' },
          ]),
          webPageJsonLd({
            title: META_TITLE,
            description: META_DESCRIPTION,
            path: '/in7-gaming',
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
