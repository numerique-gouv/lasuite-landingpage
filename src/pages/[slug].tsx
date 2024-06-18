import { promises as fs } from 'fs'
import path from 'path'
import { GetStaticProps } from 'next'
import { collection, type EntrySchema } from '@/cms/collections/content-page'
import { Layout } from '@/components/Layout'
import { PageContent } from '@/components/PageContent'
import { getCollectionEntry } from '@/cms/getEntry'
import pages from '.'

export default function ContentPage({ data }: { data: EntrySchema }) {
  return (
    <Layout title={data.title}>
      <PageContent title={data.title}>
        <div dangerouslySetInnerHTML={{ __html: data.body }} />
      </PageContent>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const pages = await fs
    .readdir(path.join(process.cwd(), 'content', 'content-pages', 'fr'))
    .then((files) =>
      files
        .filter((file) => file.endsWith('.yml'))
        .map((file) => file.replace(/\.yml$/, ''))
    )

  return {
    paths: pages.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params?.slug || Array.isArray(context.params.slug)) {
    throw Error('No page provided')
  }

  const content = await getCollectionEntry(
    collection,
    context.params.slug as string
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
