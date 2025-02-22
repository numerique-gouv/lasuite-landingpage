import { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/Button'
import AddLinkIcon from '@mui/icons-material/AddLink'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import ProConnectIllustration from '@/assets/bento-proconnect.png'

export const PortalProconnect = () => {
  return (
    <ContentSection>
      <div className="grid md:grid-cols-2 md:gap-8 md:mb-14">
        <Image loading="lazy" className="w-full" src={ProConnectIllustration} />
        <div>
          <Paragraph tag="Portail Unique" title="ProConnect">
            Simplifiez votre quotidien avec ProConnect ! Accédez à La Suite et à
            tous vos services numériques avec une identité unique et sécurisée.
            ProConnect gère vos connexions pour vous permettre de vous
            concentrer sur l'essentiel.
            <br />
            <br />
            Éditeurs : ProConnect vous aide à accélérer votre croissance. Simple
            à intégrer, notre solution vous connecte à un écosystème numérique
            dynamique et vous permet de participer à la transformation numérique
            de l'État.
          </Paragraph>
          <Button
            href="https://github.com/numerique-gouv/proconnect-documentation?tab=readme-ov-file#-proconnect---documentation"
            icon={<AddLinkIcon />}
            iconPosition="left"
          >
            J’intègre ProConnect à mon service
          </Button>
        </div>
      </div>
    </ContentSection>
  )
}
