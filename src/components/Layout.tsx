import Head from 'next/head'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { TITLE_SITE } from '@/constant'
import React from 'react'
import { useTranslations } from '@/locales/useTranslations'

export const Layout: React.FC<{
  children: React.ReactNode
  background?: 'gray'
  /**
   * Text to use as page <title>. It should represent what the current page is about.
   * The website name is appended to the title automatically.
   */
  title: string
}> = ({ title, background, ...props }) => {
  const isHomepage = title === TITLE_SITE
  const pageTitle = isHomepage ? title : `${title} - ${TITLE_SITE}`
  const t = useTranslations()
  return (
    <div
      className={`min-h-screen flex flex-col text-body ${background === 'gray' ? 'bg-white-1' : 'bg-white'}`}
    >
      <Head>
        <title>{pageTitle}</title>
        <meta
          key="ogtitle"
          property="og:title"
          content={isHomepage ? t('head.homepage_og_title') : pageTitle}
        />
      </Head>
      <NavBar />
      <main {...props}>{props.children}</main>
      <Footer />
    </div>
  )
}
