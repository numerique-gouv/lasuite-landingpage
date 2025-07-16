import Head from 'next/head'
import { ProductsHeader } from '@/components/content-blocks/ProductsHeader'
import { Footer } from '@/components/Footer'
import { TITLE_SITE } from '@/constant'
import React from 'react'
import { useTranslations } from '@/locales/useTranslations'
import { BlockHero } from '@/components/content-blocks'
import { ProductsFooter } from '@/components/content-blocks'
import * as blocksComponents from '@/components/content-blocks'
import FadeInSection from '@/components/FadeInSection'

export type ProductContent = Record<string, any>

export const LayoutProducts: React.FC<{
  children: React.ReactNode
  /**
   * Text to use as page <title>. It should represent what the current page is about.
   * The website name is appended to the title automatically.
   */
  title: string
  productContent: ProductContent
  locale: string
}> = ({ title, productContent, locale, ...props }) => {
  const isHomepage = title === TITLE_SITE
  const pageTitle = isHomepage ? title : `${title} - ${TITLE_SITE}`
  const t = useTranslations()
  const product = productContent.global;
  const currentContent = productContent[locale];
  const content = productContent[locale] || productContent['fr']

  return (
    <div
      className={`min-h-screen flex flex-col text-body bg-white-1'`}
    >
      <Head>
        <title>{product.title || pageTitle}</title>
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
        <FadeInSection>
          <BlockHero productContent={content} slug={product.slug} />
        </FadeInSection>
        {currentContent.contents && (
          <div id="content">
            {currentContent.contents.map((block: any, idx: number) => {
              const Comp = (blocksComponents as Record<string, React.ComponentType<any>>)[block.blockType]
              if (!Comp) return null
              return (
                <FadeInSection key={idx}>
                  <Comp blocks={[block]} />
                </FadeInSection>
              )
            })}
          </div>
        )}
        {props.children}
      </main>
      <FadeInSection>
        <ProductsFooter productContent={content} slug={product.slug} />
      </FadeInSection>
      <Footer />
    </div>
  )
}
