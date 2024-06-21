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
import type { ReactElement } from 'react'
import { useTranslations } from '@/locales/useTranslations'

interface CardProps {
  title: string
  href: string
  img: StaticImageData
}

const Card: React.FC<CardProps> = ({ img, title, href }) => {
  const t = useTranslations()

  return (
    <div className="flex flex-col items-center">
      <Image src={img} height={92} width={92} alt="" />
      <h3 className="text-lg text-body mt-6 mb-4">{title}</h3>
      <div className="flex gap-1 justify-center items-center">
        <ExternalLink
          className="text-sm underline hover:no-underline active:underline text-blue-1 external-link-blue"
          href={href}
          aria-label={`${title} - ${t('common.know_more')}`}
        >
          {t('common.know_more')}
        </ExternalLink>
      </div>
    </div>
  )
}

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

export const DigitalCommons = ({
  title,
  description,
}: {
  /**
   * Title is split in two parts
   */
  title: [string, string]
  description: ReactElement | string
}) => (
  <>
    <ContentSection>
      <h2 className="text-3xl md:text-4xl max-w-[33rem] font-bold text-center">
        <span aria-hidden={true}>{title[0]}</span>
        {/* we combine both title parts as one sentence for screen reader users */}
        <span className="sr-only">{`${title[0]} ${title[1]}`}</span>
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
    <ContentSection padding={false}>
      <div
        aria-hidden={true}
        className="text-3xl text-title md:text-4xl max-w-[33rem] font-bold text-center px-4"
      >
        {title[1]}
      </div>
      <ul className="hidden md:flex gap-6 flex-wrap justify-center py-10 px-4">
        {data.map((digitalCommon) => (
          <li key={digitalCommon.title}>
            <Card {...digitalCommon} />
          </li>
        ))}
      </ul>
      <div className="w-full md:hidden px-4">
        <SwiperWrapper
          slides={data.map((digitalCommon) => (
            <Card key={digitalCommon.title} {...digitalCommon} />
          ))}
        />
      </div>
      {/*<Callout>*/}
      {/*  La Suite est un ensemble de communs numériques libres reliés grâce au bouton Pro Connect*/}
      {/*</Callout>*/}
      <div className="text-lg max-w-[38em] text-left sm:text-center pb-[50px] md:pb-20 px-4">
        {description}
      </div>
    </ContentSection>
  </>
)
