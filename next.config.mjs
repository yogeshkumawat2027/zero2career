/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.siasat.com' },
      { protocol: 'https', hostname: 'aerocadet.com' },
      { protocol: 'https', hostname: 'iikd.in' },
      { protocol: 'https', hostname: 'www.dice.com' },
      { protocol: 'https', hostname: 'www.healthathomes.com' },
      { protocol: 'https', hostname: 'i0.wp.com' },
      { protocol: 'https', hostname: 'indiancombat.com' },
      { protocol: 'https', hostname: 'www.theladders.com' },
      { protocol: 'https', hostname: 't4.ftcdn.net' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'www.watermillaccounting.co.uk' },
      { protocol: 'https', hostname: 'shop.ssbcrack.com' },
      { protocol: 'https', hostname: 'images.hindustantimes.com' },
    ],
  },
};

export default nextConfig;
