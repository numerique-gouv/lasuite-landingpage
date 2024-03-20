import Head from 'next/head'
import { twMerge } from 'tailwind-merge'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { CommonProps } from '@/types'
import { TITLE_SITE } from '@/constant'

export const Layout: React.FC<
  CommonProps & {
    /**
     * Text to use as page <title>. It should represent what the current page is about.
     * The website name is appended to the title automatically.
     */
    title: string
    layoutClassName?: string
  }
> = ({ title, layoutClassName, ...props }) => {
  const isHomepage = title === TITLE_SITE
  const pageTitle = isHomepage ? title : `${title} - ${TITLE_SITE}`
  return (
    <div className={twMerge('min-h-screen flex flex-col', layoutClassName)}>
      <Head>
        <title>{pageTitle}</title>
        <meta
          key="ogtitle"
          property="og:title"
          content={
            isHomepage ? 'Travailler avec La Suite numérique' : pageTitle
          }
        />
      </Head>
      <NavBar />
      <main {...props}>{props.children}</main>
      <Footer />
    </div>
  )
}
