import { Hero } from '@/sections/Hero'
import { Products } from '@/sections/Products'
import { PortalProconnect } from '@/sections/Homepage/PortalProconnect'
import { EcosystemProconnect } from '@/sections/Homepage/EcosystemProconnect'
import { Editors } from '@/sections/Homepage/Editors'
import { SecureTools } from '@/sections/Homepage/SecureTools'
import { Migration } from '@/sections/Homepage/Migration'
import { SuiteTerritoriale } from '@/sections/Homepage/SuiteTerritoriale'
import { FooterLaSuite } from '@/sections/Homepage/FooterLaSuite'
import FadeInSection from '@/components/FadeInSection'
import { useEffect } from 'react'
import { ProConnectButton } from '@/components/ProConnectButton'
/**
 * output the homepage content with data taken from the CMS file
 *
 * several data fields contain already-made HTML, so we use the <Raw> component
 * here to abstract this notion from lower-level components
 */
export const HomepageContent = () => {
  useEffect(() => {
    if (!window.$crisp) {
      window.$crisp = []
      window.CRISP_WEBSITE_ID = '58ea6697-8eba-4492-bc59-ad6562585041'

      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'https://client.crisp.chat/l.js'
      document.head.appendChild(script)
    }
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
        <Editors />
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
