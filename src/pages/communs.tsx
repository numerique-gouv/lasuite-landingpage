import { GetStaticProps } from 'next'
import { type EntrySchema, collection } from '@/cms/collections/communs'
import { getFileEntry } from '@/cms/getEntry'
import { Layout } from '@/components/Layout'
import { CommunsContent } from '@/components/CommunsContent'

export default function Communs({ data }: { data: EntrySchema }) {
  return (
    <Layout title="Le Fonds Communs Numériques">
      <CommunsContent data={data} />
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
