import Head from 'next/head'
import { URL_SITE } from '@/constant'
import { useTranslations } from '@/locales/useTranslations'

export const MetaHeader = () => {
  const t = useTranslations()
  return (
    <Head>
      {/* title/og:title are set via the Layout */}
      <meta name="twitter:card" content="summary" />
      <meta property="og:description" content={t('head.meta_desc')} />
      <meta
        name="og:image"
        content={`https://${URL_SITE}/suite-numerique.png`}
      />
      <meta
        name="image"
        property="og:image"
        content={`https://${URL_SITE}/suite-numerique.png`}
      />
      <meta
        name="google-site-verification"
        content="3aBlUYDu-74uaKsSb6HXnyW_PhHwgti18SbcZGdYbl4"
      />
    </Head>
  )
}
