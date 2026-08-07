'use client';

import Link from 'next/link';
import { useState } from 'react';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';

const QUICK_LINKS = [
  { label: 'How to download IN7?', href: '/in7-game-apk-download' },
  { label: 'How to withdraw?', href: '/in7-game-withdrawal' },
  { label: 'Signup bonus info', href: '/in7-game-bonus' },
  { label: 'Login not working?', href: '/in7-game-login' },
];

export default function SupportChat() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="support-chat-panel" role="dialog" aria-label="IN7 support">
          <div className="support-chat-head">
            <div>
              <div className="sc-title">IN7 Support</div>
              <div className="sc-status"><span className="dot" aria-hidden />Online now</div>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close support chat">×</button>
          </div>
          <div className="support-chat-body">
            <div className="sc-bubble">Hi! Welcome to IN7 Game. How can I help you?</div>
            <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="sc-bubble" style={{ display: 'block', textDecoration: 'none' }}>
              Download now &amp; get <strong style={{ color: '#ffb4b4' }}>₹777 free bonus</strong> →
            </a>
            <div className="sc-quick-label">Quick help</div>
            {QUICK_LINKS.map((q) => (
              <Link key={q.href} href={q.href} className="sc-quick-link" onClick={() => setOpen(false)}>
                {q.label} <span aria-hidden>›</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        className="support-chat-btn"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close support chat' : 'Open support chat'}
      >
        {!open && <span className="badge">1</span>}
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>
    </>
  );
}
