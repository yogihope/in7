// Partner gaming sites — every link to these domains is intentionally dofollow
// (no rel="nofollow"). Each domain gets 4 placements across the site:
// Footer (sitewide), /partners page, homepage section, and blog index widget.

export type PartnerSite = {
  name: string;
  url: string;
  tagline: string;
};

export const PARTNER_SITES: PartnerSite[] = [
  { name: '555 Casino', url: 'https://555casino.in/', tagline: 'Casino games & live tables for Indian players' },
  { name: '112 Game Apps', url: 'https://112gameapps.com/', tagline: 'Curated real-money game app downloads' },
  { name: 'X89 App', url: 'https://x89app.in/', tagline: 'X89 gaming app — fast rounds, instant UPI' },
  { name: 'S1 Games', url: 'https://s1games.in/', tagline: 'S1 Games — Teen Patti, Rummy & more' },
  { name: 'IN7 Co', url: 'https://in7co.in/', tagline: 'Official IN7 companion & mirror portal' },
  { name: 'IE777s', url: 'https://ie777s.com/', tagline: 'IE777 slots & card game collection' },
  { name: 'XX7 Game', url: 'https://xx7game.com/', tagline: 'XX7 game APK downloads & guides' },
  { name: '360 INR', url: 'https://360-inr.com/', tagline: 'Earn & play — 360 INR gaming hub' },
  { name: 'Mast79 Game', url: 'https://mast79game.com/', tagline: 'Mast79 real-cash gaming platform' },
  { name: 'Mast179 Games', url: 'https://mast179games.com/', tagline: 'Mast179 games — bonus offers & app links' },
  { name: 'FN7 Game NG', url: 'https://fn7gameng.com/', tagline: 'FN7 gaming — next-gen card tables' },
  { name: 'IND9 Game', url: 'https://ind9game.com/', tagline: 'IND9 game downloads for Android' },
  { name: 'IW7 Apps', url: 'https://iw7apps.com/', tagline: 'IW7 app store — trusted gaming APKs' },
  { name: 'IS7 Game APKs', url: 'https://is7gameapks.com/', tagline: 'IS7 verified game APK library' },
  { name: 'MG7 App', url: 'https://mg7app.co.in/', tagline: 'MG7 gaming app — India-first tables' },
  { name: 'MMY Download', url: 'https://mmydownload.com/', tagline: 'MMY — quick game app downloads' },
  { name: 'IND9 Win', url: 'https://ind9win.com/', tagline: 'IND9 Win — play, win, withdraw' },
];
