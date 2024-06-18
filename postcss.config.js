/*
  using syntax supporting both nextjs and usual postcss tools
  (see bottom part of https://nextjs.org/docs/pages/building-your-application/configuring/post-css)
*/
module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    /**
     * prefixing all DSFR base styles to prevent CSS conflicts with parts of the website
     * that do not use the DSFR.
     *
     * This is done because I couldn't manage to load the DSFR global styles only for a specific page.
     * If you go on a LandingPage (that has the DSFR), then on the homepage (that doesn't have the DSFR),
     * the DSFR global styles are still loaded and conflict with homepage styles without a prefix.
     */
    'postcss-prefix-selector': {
      prefix: ':where(.enable-dsfr)',
      transform(prefix, selector, prefixedSelector, filePath) {
        if (filePath.includes('/dsfr/')) {
          if (selector === 'body' || selector === ':root') {
            return prefix
          }
          /* for some reason, `selector` and `prefixedSelector` sometimes contain the prefix multiples
          times (like 7 or 8) and I can't get why. We make sure it's there only once */
          return `${prefix} ${selector.replaceAll(prefix, '')}`
        }
        return selector.replaceAll(prefix, '')
      },
    },
    autoprefixer: {},
  },
}
