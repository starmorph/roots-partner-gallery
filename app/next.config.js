/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['starmorph.com', 'media.discordapp.net'],
  },
  async redirects() {
    return [
      {
        permanent: false,
        source: '/',
        destination: '/partners/integrations',
      },
      // Have integrations as the default partners page
      {
        permanent: false,
        source: '/partners',
        destination: '/partners/integrations',
      },
    ]
  },
}
