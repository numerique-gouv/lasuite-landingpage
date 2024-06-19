import { GetStaticProps } from 'next'
import { collection, type EntrySchema } from '@/cms/collections/content-page'
import { getCollectionEntry } from '@/cms/getEntry'
import { getSlugs } from '@/cms/getSlugs'
import { Layout } from '@/components/Layout'
import { PageContent } from '@/components/PageContent'
import { Raw } from '@/components/Raw'

export default function ContentPage({ data }: { data: EntrySchema }) {
  return (
    <Layout title={data.title}>
      <PageContent title={data.title}>
        <Raw>{data.body}</Raw>
      </PageContent>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const slugs = await getSlugs(collection)

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
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
