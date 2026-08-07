type Feature = { title: string; body: string };

const DEFAULT_FEATURES: Feature[] = [
  { title: 'Fast one-tap login', body: 'No passwords, no long forms. Enter your number, verify the OTP, and you’re seated at a table in seconds.' },
  { title: 'Multiple gaming options', body: 'Teen Patti, Andar Bahar, Dragon vs Tiger, Rummy, Lucky 7, more rooms roll out every month.' },
  { title: 'Daily bonus & rewards', body: '₹777 welcome credit, daily lucky spins, and a 7-day streak bonus that stacks up to ₹1,400.' },
  { title: 'Instant deposit & withdrawal', body: 'UPI deposits land instantly. Verified withdrawals are usually paid out inside 5 minutes.' },
  { title: 'Smooth & secure gameplay', body: 'Lightweight ~48 MB app, high-speed servers, SHA-256 signed builds, and RBI-compliant payouts. Runs clean even on a budget Android over 3G.' },
];

export default function KeyFeatures({
  title = 'Key Features of IN7 Game',
  features = DEFAULT_FEATURES,
}: {
  title?: string;
  features?: Feature[];
}) {
  return (
    <div className="features-box">
      <div className="features-box-header">{title}</div>
      <div>
        {features.map((f, i) => (
          <details key={f.title} className="feature-row" open={i === features.length - 1}>
            <summary>{f.title}</summary>
            <p>{f.body}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
