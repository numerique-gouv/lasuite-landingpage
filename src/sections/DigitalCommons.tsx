import { ContentSection } from '@/components/ContentSection'
import { SwiperWrapper } from '@/components/SwiperWrapper'
import Image, { StaticImageData } from 'next/image'
import { ExternalLink } from '@/components/ExternalLink'

import BigBlueButtonPng from '@/assets/logo/commons/big-blue-button.png'
import CollaboraPng from '@/assets/logo/commons/collabora.png'
import OnlyOfficePng from '@/assets/logo/commons/only-office.png'
import OpenXChangePng from '@/assets/logo/commons/ox.png'
import GristPng from '@/assets/logo/commons/grist.png'
import JitsiPng from '@/assets/logo/commons/jitsi.png'
import MatrixPng from '@/assets/logo/commons/matrix.png'
import MarianneApplicationsSvg from '@/assets/marianne-applications.svg'
import MarianneApplicationsMobileSvg from '@/assets/marianne-applications-mobile.svg'

interface CardProps {
  title: string
  href: string
  img: StaticImageData
}

const Card: React.FC<CardProps> = ({ img, title, href }) => (
  <div className="flex flex-col items-center">
    <Image src={img} height={92} width={92} alt="" />
    <h3 className="text-lg text-body mt-6 mb-4">{title}</h3>
    <div className="flex gap-1 justify-center items-center">
      <ExternalLink
        className="text-sm underline hover:no-underline active:underline text-blue-1 external-link-blue"
        href={href}
        aria-label={`${title} - En savoir plus`}
      >
        En savoir plus
      </ExternalLink>
    </div>
  </div>
)

const data: CardProps[] = [
  {
    title: 'Big Blue Button',
    href: 'https://bigbluebutton.org/',
    img: BigBlueButtonPng,
  },
  {
    title: 'Collabora',
    href: 'https://www.collaboraoffice.com/',
    img: CollaboraPng,
  },
  {
    title: 'Only Office',
    href: 'https://www.onlyoffice.com/fr/',
    img: OnlyOfficePng,
  },
  {
    title: 'OpenXChange',
    href: 'https://www.open-xchange.com/',
    img: OpenXChangePng,
  },
  {
    title: 'Grist',
    href: 'https://www.getgrist.com/',
    img: GristPng,
  },
  {
    title: 'Jitsi',
    href: 'https://jitsimeet.fr/',
    img: JitsiPng,
  },
  {
    title: 'Matrix',
    href: 'https://matrix.org/',
    img: MatrixPng,
  },
]

export const DigitalCommons = () => (
  <>
    <ContentSection className="bg-white text-body">
      <h2 className="text-3xl md:text-4xl max-w-[33rem] font-bold">
        <span aria-hidden={true}>
          Des applications à la carte et interconnectées…
        </span>
        <span className="sr-only">
          Des applications à la carte et interconnectées basées sur des Communs
          Numériques Libres
        </span>
      </h2>
      <Image
        src={MarianneApplicationsSvg}
        height={400}
        width={1300}
        className="md:mt-5 hidden sm:flex"
        alt=""
      />
      <Image
        src={MarianneApplicationsMobileSvg}
        height={400}
        width={390}
        alt=""
        className="mb-[-3rem] mt-[-1.5rem] sm:hidden"
      />
    </ContentSection>
    <ContentSection className="bg-white text-body pt-0 md:pt-0">
      <div
        aria-hidden={true}
        className="text-3xl text-title md:text-4xl max-w-[33rem] font-bold"
      >
        … basées sur des communs numériques libres
      </div>
      <ul className="hidden md:flex gap-6 flex-wrap justify-center py-10">
        {data.map((digitalCommon) => (
          <li key={digitalCommon.title}>
            <Card {...digitalCommon} />
          </li>
        ))}
      </ul>
      <div className="w-full md:hidden">
        <SwiperWrapper
          slides={data.map((digitalCommon) => (
            <Card key={digitalCommon.title} {...digitalCommon} />
          ))}
        />
      </div>
      {/*<Callout>*/}
      {/*  La Suite est un ensemble de communs numériques libres reliés grâce au bouton Pro Connect*/}
      {/*</Callout>*/}
      <p className="text-lg max-w-[38em] text-left sm:text-center">
        Les applications de La Suite numérique respectent un cahier des charges
        vertueux :{' '}
        <strong>
          être des logiciels libres et respecter une charte graphique commune.
        </strong>
      </p>
    </ContentSection>
  </>
)
