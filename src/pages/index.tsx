import { Layout } from '@/components/Layout'
import { TITLE_SITE } from '@/constant'
import { HomepageContent } from '@/components/HomepageContent'
import { useRouter } from 'next/router'
import homepageContent from '@/content/homepage.json'

export default function Index() {
  const { locale = 'fr' } = useRouter()
  const content: any = homepageContent as any
  const localized = content[locale] || content['fr']

  return (
    <Layout title={TITLE_SITE}>
      <HomepageContent content={localized} />
    </Layout>
  )
}
