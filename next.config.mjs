/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow a writable dist dir when `.next` is root-owned (local docker/sudo runs).
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
  // Keep `/api/support/.../` reachable for the support widget (no CORS-breaking 308).
  skipTrailingSlashRedirect: true,
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
    return [
      // Site On fait Suite exporté en statique dans public/onfaitsuite/
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
      // Support widget appends trailing slashes (`config/`, `deliver/`).
      // Rewrite instead of redirect so cross-origin CORS headers stay intact.
      {
        source: '/api/support/config/',
        destination: '/api/support/config',
      },
      {
        source: '/api/support/deliver/',
        destination: '/api/support/deliver',
      },
      {
        source: '/api/support/challenge/',
        destination: '/api/support/challenge',
      },
    ]
  },
  async headers() {
    return [
      {
        // Allow embedders to fetch the SCRYPT worker (blob fallback path).
        source: '/altcha/workers/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET, OPTIONS' },
        ],
      },
    ]
  },
}

export default nextConfig
