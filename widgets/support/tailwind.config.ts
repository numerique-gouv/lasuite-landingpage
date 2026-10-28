import type { Config } from 'tailwindcss'
import baseConfig from '../../tailwind.config'

/**
 * Same theme as the landing page, but content is limited to modules that
 * ship inside the embeddable support widget — avoids scanning the whole site.
 */
const config: Config = {
  ...baseConfig,
  content: [
    './src/components/support/**/*.{js,ts,jsx,tsx}',
    './src/components/ui-kit-v2/Button.tsx',
    './widgets/support/src/**/*.{js,ts,jsx,tsx}',
    './widgets/support/shims/**/*.{js,ts,jsx,tsx}',
  ],
}

export default config
