import { Hero } from '@/sections/Homepage/Hero'
import { Products } from '@/sections/Homepage/Products'
import { ProConnect } from '@/sections/Homepage/Proconnect'
import { NewProducts } from '@/sections/Homepage/NewProducts'
import { CoupDOeil } from '@/sections/Homepage/CoupDOeil'
import { ForTeams } from '@/sections/Homepage/ForTeams'
import { BlockFAQ } from '@/components/content-blocks'
import FAQLinks from '@/components/content-blocks/FAQLinks'
import { ContentSection } from '@/components/ContentSection'

import Testimonials from '@/components/content-blocks/Testimonials'
import { PlatformInformations} from '@/sections/Homepage/PlatformInformations'
import { Ecosystem} from '@/sections/Homepage/Ecosystem'

import { FooterLaSuite } from '@/sections/Homepage/FooterLaSuite'
import FadeInSection from '@/components/FadeInSection'
import { useEffect } from 'react'
import { injectCrisp } from '@/utils/inject-crisp'

/**
 * output the homepage content with data taken from the JSON file
 *
 * several data fields contain already-made HTML, so we use the <Raw> component
 * here to abstract this notion from lower-level components
 */
export const HomepageContent = ({ content }: { content: any }) => {
  useEffect(() => {
    injectCrisp()
  }, [])

  return (
    <>
      <Hero content={content.hero} />
      <FadeInSection>
        <Products content={content.products} />
      </FadeInSection>
      <FadeInSection>
        <NewProducts content={content.new_products} />
      </FadeInSection>
      <FadeInSection>
        <CoupDOeil content={content.coupdoeil} />
      </FadeInSection>
      <FadeInSection>
        <ContentSection padding={false}>
          <Testimonials testimonials={content.testimonials || []} />
        </ContentSection>
      </FadeInSection>
      <FadeInSection>
        <PlatformInformations content={content.platform} />
      </FadeInSection>
      <FadeInSection>
        <ProConnect content={content.proconnect} />
      </FadeInSection>
      <FadeInSection>
        <Ecosystem content={content.ecosystem} />
      </FadeInSection>
      <FadeInSection>
        <ForTeams content={content.forTeams} />
      </FadeInSection>
      <div className="md:mt-[72px] md:pb-[72px]">
      <ContentSection padding={false} gap="gap-0">
        <BlockFAQ {...content.faq} />
        <FAQLinks links={content.faq?.links} />
      </ContentSection>
      </div>
      <div className="mt-12">
        <FadeInSection>
          <FooterLaSuite content={content.footer} />
        </FadeInSection>
      </div>
    </>
  )
}
