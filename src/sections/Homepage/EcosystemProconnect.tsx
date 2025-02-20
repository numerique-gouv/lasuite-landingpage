import { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/Button'
import AddLinkIcon from '@mui/icons-material/AddLink'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'

import BentoResana from '@/assets/bento/resana.png'
import BentoWebconf from '@/assets/bento/webconf.png'
import BentoWebinaire from '@/assets/bento/webinaire.png'
import BentoAudioconf from '@/assets/bento/audioconf.png'

const PRODUCTS_GRID = [
  {
    name: 'Resana',
    bento: BentoResana,
    url: 'https://resana.numerique.gouv.fr/',
  },
  {
    name: 'WebConf',
    bento: BentoWebconf,
    url: 'https://webconf.numerique.gouv.fr/',
  },
  {
    name: 'Webinaire',
    bento: BentoWebinaire,
    url: 'https://webinaire.numerique.gouv.fr/',
  },
  {
    name: 'Audioconf',
    bento: BentoAudioconf,
    url: 'https://audioconf.numerique.gouv.fr/',
  },
]

export const EcosystemProconnect = () => {
  return (
    <ContentSection>
      <Paragraph
        tag="Services de l'État"
        title="L'écosystème ProConnect"
        description={`Continuez à utiliser les services de l’État avec ProConnect. Résana, Webinaire, Webconf, Audioconf... Autant d'outils puissants à portée de main qui complémentent La Suite à merveille.`}
      />
      <div className="grid md:grid-cols-2 gap-8 md:mb-14">
        {PRODUCTS_GRID.map((item) => {
          return (
            <a href={item.url} key={item.url} target="_blank">
              <Image src={item.bento} alt={item.name} />
            </a>
          )
        })}
      </div>
    </ContentSection>
  )
}
