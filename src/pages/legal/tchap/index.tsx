import { GetStaticProps } from 'next'
import {
  collection,
  type EntrySchema,
} from '@/cms/collections/legal-drive-page'
import { getCollectionEntry } from '@/cms/getEntry'
import { Layout } from '@/components/Layout'
import { PageContent } from '@/components/PageContent'
import { Raw } from '@/components/Raw'

export default function LegalDocsMentionsLegales({
  data,
}: {
  data: EntrySchema
}) {
  return (
    <Layout title={data.title}>
      <PageContent title={data.title}>
        <Raw>{data.body}</Raw>
      </PageContent>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const content = await getCollectionEntry(
    collection,
    'mentions-legales',
    context.locale
  )

  if (
    content.enabled === false ||
    (!!context.locale &&
      context.locale !== context.defaultLocale &&
      content.enabled_i18n[context.locale] === false)
  ) {
    return { notFound: true }
  }

  return {
    props: { data: content },
  }
}
