import { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/Button';
import VisioIcon from '@/assets/icons/visio.svg'
import { ContentSection } from '@/components/ContentSection';
import { Paragraph } from '@/components/Paragraph';
import BentoSuiteTerritoriale from '@/assets/bento/suite-territoriale.png'

export const SuiteTerritoriale = () => {
  return (
    <ContentSection>
      <div className="grid md:grid-cols-7 md:gap-8">
         <Image 
          width="100%"
          height="auto"
          loading="lazy"
          className="md:col-span-4 w-full"
          src={BentoSuiteTerritoriale} 
          alt="Illustation migration"
          />
        <div className="md:col-span-3">

          <Paragraph 
            tag="Territoires"
            title="Des services essentiels pour les collectivités"
          >
            <p> L’ANCT et ses partenaires proposent La Suite aux collectivités 
              de moins de <strong>3500</strong> personnes et EPCI de moins de <strong>15 000</strong> personnes, en mettant 
              à disposition des solutions et un accompagnement personnalisé pour leur transformation numérique.</p>
          </Paragraph>
          <Button
            href='https://suiteterritoriale.anct.gouv.fr/'
            iconPosition="left"
            title="Découvrir La Suite Territoriale"
          >
            Découvrir La Suite Territoriale
          </Button>
        </div>
    
      </div>
    </ContentSection>
  )
}
