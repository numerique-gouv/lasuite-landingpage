import Head from 'next/head'
import { ProductsHeader } from '@/components/content-blocks/ProductsHeader'
import { Footer } from '@/components/Footer'
import { TITLE_SITE } from '@/constant'
import React from 'react'
import { useTranslations } from '@/locales/useTranslations'

export type ProductContent = Record<string, any>

export const LayoutProducts: React.FC<{
  children: React.ReactNode
  title: string
  productContent: ProductContent
  locale: string
}> = ({ title, productContent, locale, children }) => {
  const isHomepage = title === TITLE_SITE
  const pageTitle = isHomepage ? title : `${title} - ${TITLE_SITE}`
  const t = useTranslations()
  const product = productContent.global
  const content = productContent[locale] || productContent['fr']

  return (
    <div className={`min-h-screen flex flex-col text-body'`}>
      <Head>
        <title>{product.title || pageTitle}</title>
        <meta
          key="ogtitle"
          property="og:title"
          content={isHomepage ? t('head.homepage_og_title') : (content.title || pageTitle)}
        />
        <meta name="description" content={content.description} />
        <link href="/favicon.ico" rel="icon" media="(prefers-color-scheme: light)" />
        <link href="/favicon-dark.ico" rel="icon" media="(prefers-color-scheme: dark)" />
      </Head>
      <ProductsHeader productContent={content} slug={product.slug} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}


