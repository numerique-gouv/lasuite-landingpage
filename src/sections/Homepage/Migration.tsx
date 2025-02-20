import { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/Button'
import VisioIconWhite from '@/assets/products/visio-white.svg'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import BentoWires from '@/assets/bento/wires.png'

const VisioLogoIcon = () => {
  return (
    <>
      <Image 
        width="30px"
        height="30px"
        loading="lazy"
        className="fill-white"
        src={VisioIconWhite}
        alt="logo visio"
      />
    </>
  );
}

export const Migration = () => {

  return (
    <ContentSection>
      <div className="grid md:grid-cols-2 md:gap-8 md:mb-14">
        <div className="">

          <Paragraph 
            tag="Migration"
            title="Passez à La Suite !">
            Vous souhaitez équiper vos agents des outils de La Suite ? Nos experts vous accompagnent dans l'intégration de nos applications au sein de votre système d'information, de la mise en place des prérequis jusqu'à l'harmonisation avec vos outils actuels.
            <br /><br />
            Réservez une démonstration personnalisée pour découvrir nos solutions. Nos experts répondront à vos questions techniques et vous présenteront notre feuille de route.
          </Paragraph>
         <Button
            href="https://grist.numerique.gouv.fr/o/docs/forms/9pCcc1QTyMmDq93YGQP2xF/49"
            target="_blank"
            icon={<VisioLogoIcon />}
            iconPosition="left"
            title="Réserver une démo"
          >
            Réserver une démo
          </Button>
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
