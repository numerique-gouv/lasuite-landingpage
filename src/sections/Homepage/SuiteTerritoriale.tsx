import { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/Button'
import VisioIcon from '@/assets/icons/visio.svg'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import BentoSuiteTerritoriale from '@/assets/bento/suite-territoriale.png'

export const SuiteTerritoriale = () => {
  return (
    <ContentSection>
      <div className="grid md:grid-cols-2 md:gap-8">
        <Image
          loading="lazy"
          className="md:col-span-1 w-full"
          src={BentoSuiteTerritoriale}
          alt="La Suite Territoriale"
        />
        <div className="md:col-span-1">
          <Paragraph
            tag="Territoires"
            title="Des services essentiels pour les collectivités"
          >
            <p>
              L’ANCT propose une sélection de services numériques aux communes
              de moins <strong>3 500 habitants</strong> et EPCI de moins de{' '}
              <strong>15 000 habitants</strong>. Elle se déploie avec ProConnect
              auprès des professionnels de la sphère publique territoriale.
              Toute collectivité <strong>adhérente à un OPSN partenaire</strong>{' '}
              pourra également bénéficier des services de la Suite territoriale.
            </p>
          </Paragraph>
          <Button
            href="https://suiteterritoriale.anct.gouv.fr/"
            iconPosition="left"
          >
            Découvrir La Suite Territoriale
          </Button>
        </div>
      </div>
    </ContentSection>
  )
}
