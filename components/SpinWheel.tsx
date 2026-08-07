'use client';

import { useState } from 'react';
import { IN7_DOWNLOAD_URL } from '@/lib/constants';

const PRIZES = ['₹100', '₹777', '₹50', '₹500', '₹250', 'Free Spin'];
const SEGMENT = 360 / PRIZES.length;
const SPINS = 5;

export default function SpinWheel() {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  function spin() {
    if (spinning) return;
    setResult(null);
    setSpinning(true);

    const targetIndex = Math.floor(Math.random() * PRIZES.length);
    const targetTop = targetIndex * SEGMENT + SEGMENT / 2;
    const desiredMod = (360 - targetTop) % 360;
    const currentMod = ((rotation % 360) + 360) % 360;
    const diff = (desiredMod - currentMod + 360) % 360;
    const next = rotation + diff + SPINS * 360;

    setRotation(next);
    window.setTimeout(() => {
      setSpinning(false);
      setResult(PRIZES[targetIndex]);
    }, 4300);
  }

  return (
    <div className="spin-wrap">
      <div className="spin-wheel-outer">
        <div className="spin-wheel-pointer" aria-hidden />
        <div className="spin-wheel" style={{ transform: `rotate(${rotation}deg)` }}>
          {PRIZES.map((p, i) => (
            <span
              key={p}
              className="spin-wheel-label"
              aria-hidden
              style={{ transform: `rotate(${i * SEGMENT + SEGMENT / 2 - 90}deg)` }}
            >
              {p}
            </span>
          ))}
        </div>
        <div className="spin-wheel-hub" aria-hidden>🎰</div>
      </div>

      <div className="spin-result" role="status" aria-live="polite">
        {spinning ? 'Spinning…' : result ? `You won ${result}!` : ' '}
      </div>

      {!result ? (
        <button type="button" className="btn btn-primary btn-lg pulse-cta" onClick={spin} disabled={spinning}>
          {spinning ? 'Spinning…' : '🎡 Spin & Win'}
        </button>
      ) : (
        <a href={IN7_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg pulse-cta">
          ↓ Claim on IN7 App
        </a>
      )}
      <p className="muted" style={{ fontSize: '0.8rem', textAlign: 'center', maxWidth: 280 }}>
        One free spin per day. Download the IN7 app to claim your prize in-wallet.
      </p>
    </div>
  );
}
