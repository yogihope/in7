import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Retired blog posts → blog index
      {
        source:
          '/blog/:slug(in7-apk-download-guide|teen-patti-winning-tips|in7-withdrawal-fast-guide|andar-bahar-vs-dragon-tiger|in7-refer-and-earn-income|responsible-gaming-in7|online-casino-india-live-tables-guide|top-real-money-game-apps-2026|fastest-upi-withdrawal-gaming-apps|teen-patti-vs-rummy-skill-comparison|in7-official-portals-mirror-links|slots-games-beginners-guide-india|game-apk-download-safety-checklist|ghar-baithe-paise-kamane-wale-games|welcome-bonus-maximize-guide|naye-gaming-platforms-2026|card-game-strategy-beginner-to-pro|android-phone-gaming-setup-tips|apk-stores-vs-play-store-gaming|verified-game-apk-kaise-pehchane|india-first-gaming-apps-rise|lightweight-game-apps-kam-storage|bankroll-management-jeet-ka-formula)',
        destination: '/blog',
        permanent: true,
      },
      // Old WordPress / legacy paths → relevant new pages
      {
        source: '/hello-world',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hello-world/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/feed',
        destination: '/',
        permanent: true,
      },
      {
        source: '/feed/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-json/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-admin/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-includes/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
