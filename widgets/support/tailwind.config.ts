import type { Config } from 'tailwindcss'
import baseConfig from '../../tailwind.config'

const fs = 'var(--widget-font-size, 1rem)'

/**
 * Same theme as the landing page, but content is limited to modules that
 * ship inside the embeddable support widget — avoids scanning the whole site.
 *
 * Font sizes use `--widget-font-size` so the widget can keep a 16px base even
 * when the host page changes `html` rem.
 */
const config: Config = {
  ...baseConfig,
  theme: {
    ...baseConfig.theme,
    fontSize: {
      xxs: [`calc(${fs} * 0.675)`, `calc(${fs} * 0.7)`],
      xs: [`calc(${fs} * 0.75)`, `calc(${fs} * 1)`],
      sm: [`calc(${fs} * 0.875)`, `calc(${fs} * 1.25)`],
      base: [`calc(${fs} * 1)`, `calc(${fs} * 1.5)`],
      lg: [`calc(${fs} * 1.125)`, `calc(${fs} * 1.75)`],
      xl: [`calc(${fs} * 1.25)`, `calc(${fs} * 1.75)`],
      '2xl': [`calc(${fs} * 1.5)`, `calc(${fs} * 2)`],
      '3xl': [`calc(${fs} * 1.953)`, `calc(${fs} * 2.25)`],
      '4xl': [`calc(${fs} * 2)`, `calc(${fs} * 2.5)`],
      '5xl': [`calc(${fs} * 3)`, `calc(${fs} * 3)`],
      '6xl': [`calc(${fs} * 4)`, `calc(${fs} * 4)`],
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: `calc(${fs} * 0.125)`,
      1: `calc(${fs} * 0.25)`,
      1.5: `calc(${fs} * 0.375)`,
      2: `calc(${fs} * 0.5)`,
      2.5: `calc(${fs} * 0.625)`,
      3: `calc(${fs} * 0.75)`,
      3.5: `calc(${fs} * 0.875)`,
      4: `calc(${fs} * 1)`,
      5: `calc(${fs} * 1.25)`,
      6: `calc(${fs} * 1.5)`,
      7: `calc(${fs} * 1.75)`,
      8: `calc(${fs} * 2)`,
      9: `calc(${fs} * 2.25)`,
      10: `calc(${fs} * 2.5)`,
      11: `calc(${fs} * 2.75)`,
      12: `calc(${fs} * 3)`,
      14: `calc(${fs} * 3.5)`,
      16: `calc(${fs} * 4)`,
      20: `calc(${fs} * 5)`,
      24: `calc(${fs} * 6)`,
      28: `calc(${fs} * 7)`,
      32: `calc(${fs} * 8)`,
      36: `calc(${fs} * 9)`,
      40: `calc(${fs} * 10)`,
      44: `calc(${fs} * 11)`,
      48: `calc(${fs} * 12)`,
      52: `calc(${fs} * 13)`,
      56: `calc(${fs} * 14)`,
      60: `calc(${fs} * 15)`,
      64: `calc(${fs} * 16)`,
      72: `calc(${fs} * 18)`,
      80: `calc(${fs} * 20)`,
      96: `calc(${fs} * 24)`,
    },
  },
  content: [
    './src/components/support/**/*.{js,ts,jsx,tsx}',
    './src/components/ui-kit-v2/Button.tsx',
    './widgets/support/src/**/*.{js,ts,jsx,tsx}',
    './widgets/support/shims/**/*.{js,ts,jsx,tsx}',
  ],
}

export default config
