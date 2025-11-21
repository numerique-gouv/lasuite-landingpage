import { Head, Html, Main, NextScript } from 'next/document'
import { URL_SITE } from '@/constant'

export default function RootLayout() {
  return (
    <Html>
      <Head>
        <link
          rel="sitemap"
          type="application/xml"
          href={`https://${URL_SITE}/sitemap.xml`}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
