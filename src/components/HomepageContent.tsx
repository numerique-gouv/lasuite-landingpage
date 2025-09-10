import { Hero } from '@/sections/Hero'
import { Products } from '@/sections/Products'
import { PortalProconnect } from '@/sections/Homepage/PortalProconnect'
import { EcosystemProconnect } from '@/sections/Homepage/EcosystemProconnect'
import { Communs } from '@/sections/Homepage/Communs'
import { SecureTools } from '@/sections/Homepage/SecureTools'
import { Migration } from '@/sections/Homepage/Migration'
import { SuiteTerritoriale } from '@/sections/Homepage/SuiteTerritoriale'
import { FooterLaSuite } from '@/sections/Homepage/FooterLaSuite'
import FadeInSection from '@/components/FadeInSection'
import { useEffect } from 'react'
import { injectCrisp } from '@/utils/inject-crisp'

/**
 * output the homepage content with data taken from the CMS file
 *
 * several data fields contain already-made HTML, so we use the <Raw> component
 * here to abstract this notion from lower-level components
 */
export const HomepageContent = () => {
  useEffect(() => {
    injectCrisp()
  }, [])

  return (
    <>
      <Hero />
      <FadeInSection>
        <Products />
      </FadeInSection>
      <FadeInSection>
        <PortalProconnect />
      </FadeInSection>
      <FadeInSection>
        <EcosystemProconnect />
      </FadeInSection>
      <FadeInSection>
        <Communs />
      </FadeInSection>
      <FadeInSection>
        <SecureTools />
      </FadeInSection>
      <FadeInSection>
        <Migration />
      </FadeInSection>
      <FadeInSection>
        <SuiteTerritoriale />
      </FadeInSection>
      <FadeInSection>
        <FooterLaSuite />
      </FadeInSection>
    </>
  )
}
