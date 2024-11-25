import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

const figmaColors = {
  'white-1': '#F8F8F8',
  'grey-0': '#D9D9D9',
  'grey-1': '#7F7E7E',
  'grey-2': '#161616',
  'grey-3': '#4D4D4D',
  'grey-4': '#DDDDDD',
  'grey-5': '#3A3A3A',
  'grey-6': '#FAF9F9',
  'blue-1': '#000091',
  'black-1': '#161616',
  transparent: 'transparent',
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xxs: ['0.675rem', '0.7rem'],
      xs: ['0.75rem', '1rem'],
      sm: ['0.8rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.563rem', '2rem'],
      '3xl': ['1.953rem', '2.25rem'],
      '4xl': ['2rem', '2.5rem'],
      '5xl': ['3rem', '3rem'],
      '6xl': ['5rem', '5rem'],
    },
    /*
     * we don't want to use thin font-weights as they are not very readable depending on the device
     * and we don't have a "black" variant of Marianne so prevent using it
     */
    fontWeight: {
      normal: '400',
      medium: '500',
      bold: '700',
      extrabold: '800',
    },
    /*
     * we convert px media queries to em so that text-only zooms trigger
     * responsive breakpoints. We want the website to render correctly with
     * up to 200% text zoom (RGAA criteria) and this is the easiest way to achieve that.
     */
    screens: {
      xs: '24em', // 384px
      sm: '40em', // 640px
      md: '48em', // 768px
      lg: '64em', // 1024px
      xl: '80em', // 1280px
      '2xl': '96em', // 1536px
    },
    colors: {
      ...figmaColors,
      white: '#FFFFFF',
      body: figmaColors['grey-3'],
      title: figmaColors['black-1'],
      dsfr: {
        'blue-1': '#f5f5fe',
        'blue-2': '#1212ff',
        'blue-3': '#f3f6fe',
        'grey-0': '#f6f6f6',
        'grey-1': '#eeeeee',
        'info-0': '#e8edff',
        'info-1': '#0063cb',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-marianne)', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateRows: {
        '26': 'repeat(26, minmax(0, 1fr))',
        '27': 'repeat(27, minmax(0, 1fr))',
        '28': 'repeat(28, minmax(0, 1fr))',
        '29': 'repeat(29, minmax(0, 1fr))',
        '32': 'repeat(32, minmax(0, 1fr))',
        '34': 'repeat(34, minmax(0, 1fr))',
      },
      gridRow: {
        ...defaultTheme.gridRow,
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
        'span-25': 'span 25 / span 25',
        'span-26': 'span 26 / span 26',
        'span-27': 'span 27 / span 27',
        'span-28': 'span 28 / span 28',
        'span-29': 'span 29 / span 29',
        'span-30': 'span 30 / span 30',
        'span-31': 'span 31 / span 31',
        'span-32': 'span 32 / span 32',
        'span-33': 'span 33 / span 33',
        'span-34': 'span 34 / span 34',
        'span-35': 'span 35 / span 35',
        'span-36': 'span 36 / span 36',
      },
      gridRowStart: {
        ...defaultTheme.gridRowStart,
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        '25': '25',
        '26': '26',
        '27': '27',
        '28': '28',
        '29': '29',
        '30': '30',
        '31': '31',
        '32': '32',
        '33': '33',
        '34': '34',
        '35': '35',
        '36': '36',
      },
    },
  },
  plugins: [],
}
export default config
