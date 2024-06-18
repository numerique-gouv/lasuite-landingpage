import { promises as fs } from 'fs'
import path from 'path'
import { GetStaticProps } from 'next'
import { collection, type EntrySchema } from '@/cms/collections/landing-page'
import { DsfrFooter } from '@/components/DsfrFooter'
import { DsfrHeader } from '@/components/DsfrHeader'
import { LandingPageContent } from '@/components/LandingPageContent'
import { TITLE_SITE } from '@/constant'
import Head from 'next/head'
import Script from 'next/script'
import '@gouvfr/dsfr/dist/dsfr/dsfr.css'
import { getCollectionEntry } from '@/cms/getEntry'

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
        <LandingPageContent data={data} />
        <DsfrFooter />
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const enabledServices = await fs
    .readdir(path.join(process.cwd(), 'content', 'landing-pages', 'fr'))
    .then((files) =>
      files
        .filter((file) => file.endsWith('.yml'))
        .map((file) => file.replace(/\.yml$/, ''))
    )

  return {
    paths: enabledServices.map((service) => ({ params: { service } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.service || Array.isArray(context.params.service)) {
    throw Error('No service provided')
  }

  const content = await getCollectionEntry(collection, context.params.service)

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
