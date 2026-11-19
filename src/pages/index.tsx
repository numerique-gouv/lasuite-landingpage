import { Layout } from '@/components/Layout'
import { TITLE_SITE } from '@/constant'
import { HomepageContent } from '@/components/HomepageContent'
import { useRouter } from 'next/router'
import homepageContent from '@/content/homepage.json'

import {
  getStatusBannerStaticProps,
  type StatusBannerPageProps,
} from '@/cms/getStatusBanner'

export const getStaticProps = getStatusBannerStaticProps('home')

export default function Index({ statusBanner }: StatusBannerPageProps) {
  const { locale = 'fr' } = useRouter()
  const content: any = homepageContent as any
  const localized = content[locale] || content['fr']

  return (
    <Layout title={TITLE_SITE} statusBanner={statusBanner}>
      <HomepageContent content={localized} />
    </Layout>
  )
}
