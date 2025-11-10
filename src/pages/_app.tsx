import localFont from 'next/font/local'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { MetaHeader as Head } from '@/components/MetaHeader'
import { useEffect } from 'react'
import { TranslationsProvider } from '@/locales/useTranslations'
import { useRouter } from 'next/router'
// import '@gouvfr/dsfr/dist/dsfr/dsfr.css'
// import '@gouvfr/dsfr/dist/utility/icons/icons-system/icons-system.css'
// import '@gouvfr-lasuite/ui-kit/style';

declare global {
  interface Window {
    _mtm?: any[]
    _paq?: any[]
    $crisp?: any
    CRISP_WEBSITE_ID?: string
  }
}

const marianne = localFont({
  src: [
    {
      path: '../fonts/sources/Marianne-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/sources/Marianne-Regular_Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/sources/Marianne-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/sources/Marianne-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/sources/Marianne-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  /**
   * sadly Next.js doesn't allow us to preload only a specific font variant.
   * Since we have a few, it's actually counter-productive to preload them all,
   * it's better to not preloading anything.
   */
  preload: false,
  variable: '--font-marianne',
})

/**
 * Initializes Matomo tracking as per the Matomo integration guide.
 *
 * This function includes the necessary code snippets for setting up Matomo tracking
 * on a web page. It initializes the Matomo tracking script and pushes the start event
 * to the Matomo data layer.
 *
 * Note: This code is directly copied and pasted from the Matomo integration guide.
 * Ensure that MATOMO_ID is correctly defined before using this function.
 */
function setUpMatomoAnalytics() {
  var _paq = (window._paq = window._paq || [])
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['setExcludedQueryParams', ['simulationId', '_csrf']])
  _paq.push(['trackPageView'])
  _paq.push(['enableLinkTracking'])
  ;(function () {
    var u = 'https://stats.data.gouv.fr/'
    _paq.push(['setTrackerUrl', u + 'matomo.php'])
    _paq.push(['setSiteId', '298'])
    var d = document,
      g = d.createElement('script'),
      s = d.getElementsByTagName('script')[0]
    g.async = true
    g.src = u + 'matomo.js'
    if (s?.parentNode) {
      s.parentNode.insertBefore(g, s)
    } else {
      d.head.appendChild(g)
    }
  })()
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setUpMatomoAnalytics()
  }, [])

  const { locale, defaultLocale } = useRouter()

  return (
    <div className={`${marianne.variable} font-sans`}>
      <TranslationsProvider locale={locale || defaultLocale}>
        <Head />
        <Component {...pageProps} />
      </TranslationsProvider>
    </div>
  )
}

