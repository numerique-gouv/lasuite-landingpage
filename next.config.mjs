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
    ]
  },
}

export default nextConfig
