import { Layout } from '@/components/Layout'
import { TITLE_SITE } from '@/constant'
import { HomepageContent } from '@/components/HomepageContent'

export default function Index() {
  return (
    <Layout title={TITLE_SITE}>
      <HomepageContent />
    </Layout>
  )
}
