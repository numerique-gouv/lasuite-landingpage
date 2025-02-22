import { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/Button'
import VisioIconWhite from '@/assets/products/visio-white.svg'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import BentoLasuite from '@/assets/bento/suite-numerique.png'

const VisioLogoIcon = () => {
  return (
    <>
      <Image
        width="24"
        height="24"
        alt=""
        loading="lazy"
        className="fill-white"
        src={VisioIconWhite}
      />
    </>
  )
}

export const Migration = () => {
  return (
    <ContentSection>
      <div className="grid md:grid-cols-2 md:gap-8 md:mb-14">
        <Image
          loading="lazy"
          alt="La Suite Numérique"
          className="w-full"
          src={BentoLasuite}
        />

        <div className="md:order-first">
          <Paragraph tag="Migration" title="Passez à La Suite !">
            Vous souhaitez équiper vos agents des outils de La Suite ? Nos
            experts vous accompagnent dans l'intégration de nos applications au
            sein de votre système d'information, de la mise en place des
            prérequis jusqu'à l'harmonisation avec vos outils actuels.
            <br />
            <br />
            Réservez une démonstration personnalisée pour découvrir nos
            solutions. Nos experts répondront à vos questions techniques et vous
            présenteront notre feuille de route.
          </Paragraph>
          <Button
            href="https://grist.numerique.gouv.fr/o/docs/forms/9pCcc1QTyMmDq93YGQP2xF/49"
            icon={<VisioLogoIcon />}
            iconPosition="left"
          >
            Réserver une démo
          </Button>
        </div>
      </div>
    </ContentSection>
  )
}
