import Head from 'next/head'
import { ProductsHeader } from '@/components/content-blocks/ProductsHeader'
import { ProductsHero } from '@/components/content-blocks/ProductsHero'
import { Footer } from '@/components/Footer'
import { TITLE_SITE } from '@/constant'
import React from 'react'
import { useTranslations } from '@/locales/useTranslations'

export type ProductContent = Record<string, any>

export const LayoutProducts: React.FC<{
  children: React.ReactNode
  background?: 'gray'
  /**
   * Text to use as page <title>. It should represent what the current page is about.
   * The website name is appended to the title automatically.
   */
  title: string
  productContent: ProductContent
  locale: string
}> = ({ title, background, productContent, locale, ...props }) => {
  const isHomepage = title === TITLE_SITE
  const pageTitle = isHomepage ? title : `${title} - ${TITLE_SITE}`
  const t = useTranslations()
  const product = productContent.global;
  const content = productContent[locale] || productContent['fr']

  return (
    <div
      className={`min-h-screen flex flex-col text-body ${background === 'gray' ? 'bg-white-1' : 'bg-white'}`}
    >
      <Head>
        <title>{content.title || pageTitle}</title>
        <meta
          key="ogtitle"
          property="og:title"
          content={isHomepage ? t('head.homepage_og_title') : (content.title || pageTitle)}
        />
        <meta name="description" content={content.description} />
        <link
          href="favicon.ico"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="favicon-dark.ico"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <ProductsHeader productContent={content} slug={product.slug} />
      <main {...props}>
        <ProductsHero productContent={content} slug={product.slug} />
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        {content.features && (
          <ul>
            {content.features.map((feature: string, idx: number) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        )}
        {props.children}
      </main>
      <Footer />
    </div>
  )
}
