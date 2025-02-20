import { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/Button';
import AddLinkIcon from '@mui/icons-material/AddLink';
import { ContentSection } from '@/components/ContentSection';
import { Paragraph } from '@/components/Paragraph';
import BentoShield from '@/assets/bento/shield.png'

export const SecureTools = () => {
  return (
    <ContentSection>
      <div className="grid md:grid-cols-5 md:gap-8 md:mb-14">
        <Image 
          width="100%"
          height="auto"
          loading="lazy"
          className="w-full md:col-span-2"
          src={BentoShield} 
          alt="Illustation outils sécurisés"
          />
        <div className="md:col-span-3">
          <Paragraph 
            tag="Sécurité"
            title="Outils sécurisés"
            description={`Les agents bénéficient d'un environnement de travail 
              sécurisé, avec l'assurance que leurs données sont stockées en France.
              Les outils de La Suite sont conçus avec la sécurité comme priorité, assurant 
              une protection maximale de vos données sensibles. Hébergés uniquement sur des 
              infrastructures SecNumCloud certifiées par l'ANSSI, les applications garantissent 
              un niveau de sécurité optimal dans le respect de la souveraineté numérique française.`}
          />
        </div>
      </div>
    </ContentSection>
  )
}
