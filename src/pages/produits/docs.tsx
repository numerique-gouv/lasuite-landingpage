import { LayoutProducts } from '@/components/LayoutProducts'
import { useRouter } from 'next/router'
import docsContent from '@/content/products/docs.json'
import { BlockHero, BlockFAQ } from '@/components/content-blocks'
import { ProductsFooter } from '@/components/content-blocks'
import FadeInSection from '@/components/FadeInSection'
import Features from '@/sections/produits/docs/Features'
import Testimonials from '@/components/content-blocks/Testimonials'
import FAQLinks from '@/sections/produits/docs/FAQLinks'
import Advantages from '@/sections/produits/docs/Advantages'
import RoadMap from '@/components/content-blocks/RoadMap'
import Decisions from '@/components/content-blocks/Decisions'
import CTA from '@/components/content-blocks/CTA'
export default function DocsPage() {
  const { locale = 'fr' } = useRouter()
  const content: any = docsContent as any
  const product = content.global
  const localized = content[locale] || content['fr']

  return (
    <LayoutProducts
      title={
        localized?.title ||
        content['fr']?.title ||
        content.global?.title ||
        'Docs'
      }
      productContent={content}
      locale={locale}
    >
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
