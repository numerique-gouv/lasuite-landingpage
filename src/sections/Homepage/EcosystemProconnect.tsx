import Image from 'next/image'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import { useRouter } from 'next/router'

import BentoResana from '@/assets/bento/resana.png'
import BentoResanaEn from '@/assets/bento/resana-en.png'
import BentoWebconf from '@/assets/bento/webconf.png'
import BentoWebinaire from '@/assets/bento/webinaire.png'
import BentoAudioconf from '@/assets/bento/audioconf.png'
import BentoSitesFaciles from '@/assets/bento/sitesfaciles.png'

import { useTranslations } from '@/locales/useTranslations'

export const EcosystemProconnect = () => {
  const t = useTranslations()
  const { locale } = useRouter()

  const PRODUCTS_GRID = [
    {
      name: 'Resana',
      bento: locale !== 'fr' ? BentoResanaEn : BentoResana,
      url: 'https://resana.numerique.gouv.fr/',
    },
    {
      name: 'WebConf',
      bento: BentoWebconf,
      url: 'https://webconf.numerique.gouv.fr/',
    },
    {
      name: 'Sites Faciles',
      bento: BentoSitesFaciles,
      url: 'https://sites.beta.gouv.fr/',
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

  const FIRST_ROW = PRODUCTS_GRID.slice(0, 2)
  const SECOND_ROW = PRODUCTS_GRID.slice(2)

  return (
    <ContentSection center={false} gap="gap-4 md:gap-5">
      <div className="relative align-left md:max-w-[80%]">
        <Paragraph
          tag={t('homepage.ecosystem.tag')}
          title={t('homepage.ecosystem.title')}
          description={t('homepage.ecosystem.description')}
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-8 md:mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {FIRST_ROW.map((item) => (
            <a href={item.url} key={item.url} target="_blank">
              <Image src={item.bento} alt={item.name} />
            </a>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {SECOND_ROW.map((item) => (
            <a href={item.url} key={item.url} target="_blank">
              <Image src={item.bento} alt={item.name} />
            </a>
          ))}
        </div>
      </div>
    </ContentSection>
  )
}
