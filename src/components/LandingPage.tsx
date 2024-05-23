import Head from 'next/head'
import { TITLE_SITE } from '@/constant'
import '@gouvfr/dsfr/dist/dsfr/dsfr.css'
import { LandingPageSchema } from '@/cms/landing-page.schema'
import { LandingPageContent } from './LandingPageContent'
import Script from 'next/script'
import { DsfrHeader } from './DsfrHeader'
import { DsfrFooter } from './DsfrFooter'

export const LandingPage = ({
  id,
  data,
}: {
  id: string
  data: LandingPageSchema
}) => {
  return (
    <>
      <Script
        src="https://integration.lasuite.numerique.gouv.fr/api/v1/gaufre.js"
        strategy="lazyOnload"
        id="lasuite-gaufre-script"
      />
      <Head>
        <title>{`${data.title} - ${TITLE_SITE}`}</title>
        <meta
          key="ogtitle"
          property="og:title"
          content={`${data.title} - ${TITLE_SITE}`}
        />
      </Head>
      <div className="enable-dsfr">
        <DsfrHeader />
        <LandingPageContent {...{ id, data }} />
        <DsfrFooter />
      </div>
    </>
  )
}
