import { ContentSection } from '@/components/ContentSection'
import MessagerieSvg from '@/assets/products/messagerie.svg'
import TchapSvg from '@/assets/products/tchap.svg'
import ResanaSvg from '@/assets/products/resana.svg'
import ContactSvg from '@/assets/products/contact.svg'
import GristSvg from '@/assets/products/grist.svg'
import FranceTransfertSvg from '@/assets/products/france_transfert.svg'
import EquipesSvg from '@/assets/products/equipes.svg'
import VisioSvg from '@/assets/products/visio.svg'
import WebinaireSvg from '@/assets/products/webinaire.svg'
import AudioConfSvg from '@/assets/products/audioconf.svg'
import PadSvg from '@/assets/products/pad.svg'
import DocsSvg from '@/assets/products/docs.svg'

import Image from 'next/image'
import { Button } from '@/components/Button'

const PRODUCTS = [
  ['Messagerie', MessagerieSvg],
  ['Tchap', TchapSvg],
  ['Resana', ResanaSvg],
  ['Grist', GristSvg],
  ['Contact', ContactSvg],
  ['France Transfert', FranceTransfertSvg],
  ['Equipes', EquipesSvg],
  ['Visio', VisioSvg],
  ['Webinaire', WebinaireSvg],
  ['AudioConf', AudioConfSvg],
  ['Pad', PadSvg],
  ['Docs', DocsSvg],
]

export const Products = () => {
  return (
    <ContentSection>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-8">
        {PRODUCTS.map(([name, Icon]) => (
          <div
            key={name}
            className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] flex flex-col items-center justify-between bg-grey-6 rounded p-2 md:p-4"
          >
            <div className="flex-grow flex flex-col items-center justify-center overflow-hidden">
              <Image
                className="w-9/12 md:w-auto"
                src={Icon}
                alt={`Logo ${name}`}
              />
            </div>

            <h4 className="text-sm md:text-lg md:whitespace-nowrap">{name}</h4>
          </div>
        ))}
      </div>
      <Button href="/products" variant="outline">
        Je découvre les produits de La Suite
      </Button>
    </ContentSection>
  )
}
