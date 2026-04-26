import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <img src="/in7-game-logo.jpg" alt="IN7 Gaming logo, IN7 game app" title="IN7 Game" width={44} height={44} loading="lazy" style={{ borderRadius: 12 }} />
              <div>
                <div className="serif" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff8f3' }}>IN7 Gaming</div>
              </div>
            </div>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'rgba(255,248,243,0.62)', maxWidth: 320 }}>
              IN7 is a skill-based real-money gaming platform for Indian players. Fast UPI cashouts, fair tables, and a community that keeps coming back.
            </p>
          </div>

          <div>
            <h4>The Game</h4>
            <ul>
              <li><Link href="/in7-gaming">IN7 Gaming hub</Link></li>
              <li><Link href="/in7-game-app">The IN7 App</Link></li>
              <li><Link href="/in7-game-apk-download">Download APK</Link></li>
              <li><Link href="/how-to-play-in7">How to play IN7</Link></li>
              <li><Link href="/in7-game-tips">Tips &amp; tricks</Link></li>
              <li><Link href="/in7-game-review">Honest review</Link></li>
            </ul>
          </div>

          <div>
            <h4>Money</h4>
            <ul>
              <li><Link href="/in7-game-deposit">Deposit guide</Link></li>
              <li><Link href="/in7-game-withdrawal">Withdrawal guide</Link></li>
              <li><Link href="/in7-game-bonus">Bonus &amp; rewards</Link></li>
              <li><Link href="/in7-game-refer-and-earn">Refer &amp; earn</Link></li>
              <li><Link href="/paise-kamane-wala-game">Paise kamane wala game</Link></li>
            </ul>
          </div>

          <div>
            <h4>Account</h4>
            <ul>
              <li><Link href="/in7-game-register">Register</Link></li>
              <li><Link href="/in7-game-login">Login help</Link></li>
              <li><Link href="/contact">Contact us</Link></li>
              <li><Link href="/about">About IN7</Link></li>
            </ul>
            <h4 style={{ marginTop: 24 }}>Fine print</h4>
            <ul>
              <li><Link href="/privacy-policy">Privacy policy</Link></li>
              <li><Link href="/terms">Terms of use</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} IN7 Gaming. All rights reserved.</span>
          <span>For users 18+ in permitted Indian states. Play responsibly.</span>
        </div>
      </div>
    </footer>
  );
}
