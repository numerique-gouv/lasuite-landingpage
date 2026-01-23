import { LayoutProducts } from '@/components/LayoutProducts'
import { useRouter } from 'next/router'
import fichiersContent from '@/content/products/fichiers.json'
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

export default function FichiersPage() {
  const { locale = 'fr' } = useRouter()
  const content: any = fichiersContent as any
  const product = content.global
  const localized = content[locale] || content['fr']

  return (
    <LayoutProducts
      title={
        localized?.title ||
        content['fr']?.title ||
        content.global?.title ||
        'Fichiers'
      }
      productContent={content}
      locale={locale}
    >
      <h1 className="sr-only">{content.global?.title}</h1>
      <FadeInSection>
        <BlockHero productContent={localized} slug={product.slug} />
      </FadeInSection>
      <FadeInSection>
        <Features productContentFeatures={localized.features} />
      </FadeInSection>
      {/*      <FadeInSection>
        <Testimonials testimonials={localized.testimonials || []} />
      </FadeInSection>*/}
      <div className="mt-[48px] md:mt-[120px]">
        <FadeInSection>
          <BlockFAQ {...localized.faq} />
        </FadeInSection>
      </div>
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
