/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'youtu.be',
        port: '',
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    turbo: true,
  },
  async rewrites() {
    return [
      {
        source: '/how-it-works',
        destination: '/publish/how-it-works',
      },
      {
        source: '/plan-your-book',
        destination: '/publish/plan-your-book',
      },
      {
        source: '/how-to-self-publish',
        destination: '/publish/how-to-self-publish',
      },
      {
        source: '/how-to-design-book',
        destination: '/publish/how-to-design-book',
      },
      {
        source: '/book-building-tool',
        destination: '/publish/book-building-tool',
      },
      {
        source: '/plan-your-book/book-options',
        destination: '/publish/plan-your-book/book-options',
      },
      {
        source: '/plan-your-book/ebooks',
        destination: '/publish/plan-your-book/ebooks',
      },
      {
        source: '/promote-my-book',
        destination: '/promote/promote-my-book',
      },
      {
        source: '/how-to-market-book',
        destination: '/promote/how-to-market-book',
      },
      {
        source: '/distribution',
        destination: '/sell/distribution',
      },
      {
        source: '/share-and-sell',
        destination: '/sell/share-and-sell',
      },
    ];
  },
};

export default nextConfig;
