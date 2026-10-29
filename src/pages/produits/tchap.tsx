import { LayoutProducts } from '@/components/LayoutProducts'
import { useRouter } from 'next/router'
import tchapContent from '@/content/products/tchap.json'
import { BlockHero, BlockFAQ } from '@/components/content-blocks'
import { ProductsFooter } from '@/components/content-blocks'
import FadeInSection from '@/components/FadeInSection'
import Features from '@/components/content-blocks/Features'
import Testimonials from '@/components/content-blocks/Testimonials'
import FAQLinks from '@/components/content-blocks/FAQLinks'
import Advantages from '@/components/content-blocks/Advantages'
import RoadMap from '@/components/content-blocks/RoadMap'
import Decisions from '@/components/content-blocks/Decisions'
import CTA from '@/components/content-blocks/CTA'
import { StatusBanner } from '@/components/content-blocks/StatusBanner'
import type { GetStaticProps } from 'next'
import { getFileEntry } from '@/cms/getEntry'
import {
  collection as tchapBannerCollection,
  type EntrySchema as TchapBannerEntry,
} from '@/cms/collections/tchap-banner'

export const getStaticProps: GetStaticProps = async ({ locale = 'fr' }) => {
  let banner: TchapBannerEntry | null = null
  try {
    banner = await getFileEntry(tchapBannerCollection, locale)
  } catch (error) {
    banner = null
  }
  return {
    // JSON round-trip drops `undefined` values, which Next can't serialize
    props: {
      banner: banner?.enabled ? JSON.parse(JSON.stringify(banner)) : null,
    },
  }
}

export default function TchapPage({
  banner,
}: {
  banner: TchapBannerEntry | null
}) {
  const { locale = 'fr' } = useRouter()
  const content: any = tchapContent as any
  const product = content.global
  const localized = content[locale] || content['fr']

  return (
    <LayoutProducts
      title={
        localized?.title ||
        content['fr']?.title ||
        content.global?.title ||
        'Tchap'
      }
      productContent={content}
      locale={locale}
      statusBanner={
        banner && (
          <StatusBanner
            message={banner.message}
            type={banner.type}
            link={banner.link}
          />
        )
      }
    >
      <h1 className="sr-only">{content.global?.title}</h1>
      <FadeInSection>
        <BlockHero productContent={localized} slug={product.slug} />
      </FadeInSection>
      <FadeInSection>
        <Features productContentFeatures={localized.features} />
      </FadeInSection>
      <FadeInSection>
        <Testimonials testimonials={localized.testimonials || []} />
      </FadeInSection>
      <FadeInSection>
        <BlockFAQ {...localized.faq} />
      </FadeInSection>
      <FadeInSection>
        <FAQLinks links={localized.faq?.links} />
      </FadeInSection>
      <FadeInSection>
        <Advantages {...localized.advantages} />
      </FadeInSection>
      <FadeInSection>
        <RoadMap {...localized.roadmap} />
      </FadeInSection>
      <FadeInSection>
        <CTA {...localized.cta} />
      </FadeInSection>
      <FadeInSection>
        <Decisions {...localized.decisions} />
      </FadeInSection>
      <FadeInSection>
        <ProductsFooter productContent={localized} slug={product.slug} />
      </FadeInSection>
    </LayoutProducts>
  )
}
