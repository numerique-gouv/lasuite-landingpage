/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    /* uncomment other locales when at least the homepage is translated */
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    localeDetection: false,
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
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'resana-en-2027.numerique.gouv.fr',
          },
        ],
        destination: 'https://lasuite.numerique.gouv.fr/resana-en-2027',
        permanent: true,
        locale: false,
        basePath: false,
      },
      // Ancien domaine → URL canonique sur lasuite
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'onfaitsuite.numerique.gouv.fr',
          },
        ],
        destination: 'https://lasuite.numerique.gouv.fr/onfaitsuite',
        permanent: true,
        locale: false,
        basePath: false,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'onfaitsuite.numerique.gouv.fr',
          },
        ],
        destination: 'https://lasuite.numerique.gouv.fr/onfaitsuite/:path*',
        permanent: true,
        locale: false,
        basePath: false,
      },
    ]
  },
  async rewrites() {
    // Site On fait Suite exporté en statique dans public/onfaitsuite/
    return [
      {
        source: '/onfaitsuite',
        destination: '/onfaitsuite/index.html',
      },
      {
        source: '/onfaitsuite/',
        destination: '/onfaitsuite/index.html',
      },
      {
        source: '/onfaitsuite/simulation',
        destination: '/onfaitsuite/simulation.html',
      },
      {
        source: '/onfaitsuite/mentions-legales',
        destination: '/onfaitsuite/mentions-legales.html',
      },
    ]
  },
}

export default nextConfig
