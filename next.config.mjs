/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    ]
  },
  // Support widget appends trailing slashes (`config/`, `deliver/`).
  // Rewrite instead of redirect so cross-origin CORS headers stay intact.
  async rewrites() {
    return [
      {
        source: '/api/support/config/',
        destination: '/api/support/config',
      },
      {
        source: '/api/support/deliver/',
        destination: '/api/support/deliver',
      },
    ]
  },
}

export default nextConfig
