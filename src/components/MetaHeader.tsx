import Head from 'next/head'
import { useRouter } from 'next/router'
import { URL_SITE } from '@/constant'
import { useTranslations } from '@/locales/useTranslations'

const DEFAULT_META_IMAGE_URL = `https://${URL_SITE}/lasuite.png`

export type MetaHeaderProps = {
  imageUrl?: string
  imageWidth?: string
  imageHeight?: string
  imageType?: string
  description?: string
  canonicalUrl?: string
}

export const MetaHeader = ({
  imageUrl = DEFAULT_META_IMAGE_URL,
  imageWidth = '600',
  imageHeight = '600',
  imageType = 'image/webp',
  description,
  canonicalUrl,
}: MetaHeaderProps = {}) => {
  const t = useTranslations()
  const router = useRouter()
  const metaDescription = description || t('head.meta_desc')

  // Construire l'URL canonique
  const canonical =
    canonicalUrl || `https://${URL_SITE}${router.asPath.split('?')[0]}`

  return (
    <Head>
      <meta key="description" name="description" content={metaDescription} />
      <meta key="robots" name="robots" content="index, follow" />
      <link key="canonical" rel="canonical" href={canonical} />
      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:image" name="twitter:image" content={imageUrl} />
      <meta
        key="og:description"
        property="og:description"
        content={metaDescription}
      />
      <meta key="og:image" property="og:image" content={imageUrl} />
      <meta
        key="og:image:width"
        property="og:image:width"
        content={imageWidth}
      />
      <meta
        key="og:image:height"
        property="og:image:height"
        content={imageHeight}
      />
      <meta key="og:image:type" property="og:image:type" content={imageType} />
      <meta key="og:url" property="og:url" content={canonical} />
      <meta
        key="google-site-verification"
        name="google-site-verification"
        content="3aBlUYDu-74uaKsSb6HXnyW_PhHwgti18SbcZGdYbl4"
      />
    </Head>
  )
}
