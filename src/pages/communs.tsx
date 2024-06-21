import { GetStaticProps } from 'next'
import { type EntrySchema, collection } from '@/cms/collections/communs'
import { getFileEntry } from '@/cms/getEntry'
import { Layout } from '@/components/Layout'
import { CommunsContent } from '@/components/CommunsContent'

export default function Communs({ data }: { data: EntrySchema }) {
  return (
    <Layout title={data.title}>
      <CommunsContent data={data} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale,
  defaultLocale,
}) => {
  const content = await getFileEntry(collection, locale)

  if (
    !!locale &&
    locale !== defaultLocale &&
    content.enabled_i18n[locale] === false
  ) {
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
