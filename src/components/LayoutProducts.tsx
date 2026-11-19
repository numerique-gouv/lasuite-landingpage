import Head from 'next/head'
import { ProductsHeader } from '@/components/content-blocks/ProductsHeader'
import { TopToastBanner } from '@/components/content-blocks/TopToastBanner'
import { Footer } from '@/components/Footer'
import { TITLE_SITE, URL_SITE } from '@/constant'
import { MetaHeader } from '@/components/MetaHeader'
import React from 'react'
import { useTranslations } from '@/locales/useTranslations'
import { StatusBanner } from '@/components/content-blocks/StatusBanner'
import type { EntrySchema as StatusBannerEntry } from '@/cms/collections/status-banner'

export type ProductContent = Record<string, any>

export const LayoutProducts: React.FC<{
  children: React.ReactNode
  title: string
  productContent: ProductContent
  locale: string
  /**
   * CMS status banner data, see `getStatusBannerStaticProps`
   */
  statusBanner?: StatusBannerEntry | null
}> = ({ title, productContent, locale, statusBanner, children }) => {
  const isHomepage = title === TITLE_SITE
  const t = useTranslations()
  const product = productContent.global
  const content = productContent[locale] || productContent['fr']
  const pageTitle = isHomepage
    ? title
    : `${product.title || title} - ${t('common.la_suite_numerique')}`

  return (
    <div className={`min-h-screen flex flex-col text-body'`}>
      <Head>
        <title>{pageTitle}</title>
        <meta
          key="ogtitle"
          property="og:title"
          content={
            isHomepage
              ? t('head.homepage_og_title')
              : content.title || pageTitle
          }
        />
        <link
          href="/favicon.ico"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="/favicon-dark.ico"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <MetaHeader description={content.hero?.subtitle} />
      {statusBanner && (
        <StatusBanner
          message={statusBanner.message}
          type={statusBanner.type}
          link={statusBanner.link}
        />
      )}
      {content?.top_banner && (
        <TopToastBanner
          title={content.top_banner.title}
          content={content.top_banner.content}
          type={content.top_banner.type}
          link={content.top_banner.link}
        />
      )}
      <ProductsHeader
        productContent={content}
        slug={product.slug}
        productTitle={product.title}
      />
      <main>{children}</main>
      <Footer links={content.footer_links} />
    </div>
  )
}
