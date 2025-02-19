import { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/Button';
import VisioIcon from '@/assets/icons/visio.svg'
import { ContentSection } from '@/components/ContentSection';
import { Paragraph } from '@/components/Paragraph';
import BentoWires from '@/assets/bento/wires.png'

export const Migration = () => {
  return (
    <ContentSection>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="">
          <Paragraph 
            tag="Migration"
            title="Passez à La Suite !"
            description={`Vous souhaitez équiper vos agents des outils de La Suite ? Nos experts vous accompagnent dans l'intégration de nos applications au sein de votre système d'information, de la mise en place des prérequis jusqu'à l'harmonisation avec vos outils actuels.

            Réservez une démonstration personnalisée pour découvrir nos solutions. Nos experts répondront à vos questions techniques et vous présenteront notre feuille de route.`}
          />
{/*          <Button
            href='#'
            target="_blank"
            icon={<VisioIcon />}
            iconPosition="left"
            title="J’intègre ProConnect à mon service"
          >
            Réserver une démo
          </Button>*/}
        </div>
        <Image 
          width="100%"
          height="auto"
          loading="lazy"
          className="w-full hidden md:block"
          src={BentoWires} 
          alt="Illustation migration"
          />
      </div>
    </ContentSection>
  )
}
