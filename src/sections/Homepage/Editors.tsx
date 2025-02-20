import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ContentSection } from '@/components/ContentSection';
import { Paragraph } from '@/components/Paragraph';
import BentoWimiWhaler from '@/assets/bento/wimi-whaler.png'

export const Editors = () => {
  return (
    <ContentSection>
      <div className="grid md:grid-cols-2 md:gap-8 md:mb-14">
        <div>
          <Paragraph 
            tag="Editeurs"
            title="Ça ne s'arrête pas là !"
            description={`Des acteurs majeurs du numérique français comme Wimi et Whaller utilisent aussi ProConnect. Ces plateformes collaboratives sécurisées ont intégré notre solution d'authentification pour offrir à leurs utilisateurs une expérience de connexion simplifiée et sécurisée, tout en maintenant leurs hauts standards de protection des données.`}
          />

        </div>
        <Image 
          width="100%"
          height="auto"
          loading="lazy"
          className="w-full"
          src={BentoWimiWhaler} 
          alt="Wimi Whaler"
          />
      </div>
    </ContentSection>
  )
}
