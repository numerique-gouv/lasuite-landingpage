/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    /* uncomment other locales when at least the homepage is translated */
    locales: ['fr' /*, 'de', 'en'*/],
    defaultLocale: 'fr',
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    })
    return config
  },
  async redirects() {
    return [
      {
        source: '/grist-2024-qr',
        destination: '/grist-paris-summit-2024#agenda',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
