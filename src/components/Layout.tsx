import Head from 'next/head'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { TITLE_SITE } from '@/constant'
import { MetaHeader } from '@/components/MetaHeader'
import React from 'react'
import { useTranslations } from '@/locales/useTranslations'

export const Layout: React.FC<{
  children: React.ReactNode
  background?: 'gray'
  logo?: React.ReactNode
  loginUrl?: string
  /**
   * Text to use as page <title>. It should represent what the current page is about.
   * The website name is appended to the title automatically.
   */
  title: string
}> = ({ title, background, logo, loginUrl, ...props }) => {
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
      <MetaHeader description={isHomepage ? t('head.meta_desc') : undefined} />
      <NavBar
        logo={logo}
        loginUrl={loginUrl}
        translation={title == TITLE_SITE}
      />
      <main {...props}>{props.children}</main>
      <Footer />
    </div>
  )
}
