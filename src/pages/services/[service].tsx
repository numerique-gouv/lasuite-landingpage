import { GetStaticProps } from 'next'
import { collection, type EntrySchema } from '@/cms/collections/service-page'
import { getCollectionEntry } from '@/cms/getEntry'
import { getSlugs } from '@/cms/getSlugs'
import Head from 'next/head'
import Script from 'next/script'
import { DsfrHeader } from '@/components/DsfrHeader'
import { DsfrFooter } from '@/components/DsfrFooter'
import { ServicePageContent } from '@/components/ServicePageContent'
import { TITLE_SITE } from '@/constant'
import '@gouvfr/dsfr/dist/dsfr/dsfr.css'

export default function ServiceLandingPage({ data }: { data: EntrySchema }) {
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
        <ServicePageContent data={data} />
        <DsfrFooter />
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const slugs = await getSlugs(collection)

  return {
    paths: slugs.map((service) => ({ params: { service } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.service || Array.isArray(context.params.service)) {
    throw Error('No service provided')
  }

  const content = await getCollectionEntry(
    collection,
    context.params.service,
    context.locale
  )

  if (content.enabled === false) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: content,
    },
  }
}
