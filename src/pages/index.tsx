import { GetStaticProps } from 'next'
import { type EntrySchema, collection } from '@/cms/collections/homepage'
import { getFileEntry } from '@/cms/getEntry'
import { Layout } from '@/components/Layout'
import { TITLE_SITE } from '@/constant'
import { HomepageContent } from '@/components/HomepageContent'

export default function Index({ data }: { data: EntrySchema }) {
  return (
    <Layout title={TITLE_SITE}>
      <HomepageContent data={data} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const content = await getFileEntry(collection)

  return {
    props: {
      data: content,
    },
  }
}
