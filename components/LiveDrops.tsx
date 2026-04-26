'use client';

import { useEffect, useState } from 'react';

const POOL = [
  { name: 'Rohit S.', city: 'Lucknow', amount: '₹4,820', when: 'just now' },
  { name: 'Aman K.', city: 'Patna', amount: '₹2,150', when: '2 min ago' },
  { name: 'Pooja M.', city: 'Indore', amount: '₹6,300', when: '4 min ago' },
  { name: 'Vikram J.', city: 'Jaipur', amount: '₹1,945', when: '6 min ago' },
  { name: 'Sneha R.', city: 'Pune', amount: '₹3,720', when: '9 min ago' },
  { name: 'Arjun T.', city: 'Bhopal', amount: '₹8,510', when: '12 min ago' },
  { name: 'Karan D.', city: 'Surat', amount: '₹2,800', when: '15 min ago' },
  { name: 'Neha V.', city: 'Delhi', amount: '₹5,140', when: '18 min ago' },
];

export default function LiveDrops() {
  const [idx, setIdx] = useState(-1);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => {
      setIdx(0);
      setVisible(true);
    }, 4500);
    return () => clearTimeout(start);
  }, []);

  useEffect(() => {
    if (idx < 0) return;
    const tick = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % POOL.length);
        setVisible(true);
      }, 350);
    }, 6500);
    return () => clearInterval(tick);
  }, [idx]);

  if (idx < 0 || !visible) return null;

  const drop = POOL[idx];

  return (
    <div className="toast" role="status" aria-live="polite">
      <span className="dot" aria-hidden />
      <div style={{ lineHeight: 1.35 }}>
        <strong style={{ fontWeight: 700 }}>{drop.name}</strong> <span style={{ color: 'rgba(20,7,10,0.55)' }}>from {drop.city}</span>
        <br />
        <span style={{ color: '#b91c2c', fontWeight: 700 }}>withdrew {drop.amount}</span>
        <span style={{ color: 'rgba(20,7,10,0.5)', fontSize: '0.78rem' }}> · {drop.when}</span>
      </div>
    </div>
  );
}
