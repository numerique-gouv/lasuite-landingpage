import Image from 'next/image'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import { useRouter } from 'next/router'

import BentoResana from '@/assets/bento/resana.png'
import BentoResanaEn from '@/assets/bento/resana-en.png'
import BentoWebconf from '@/assets/bento/webconf.png'
import BentoWebinaire from '@/assets/bento/webinaire.png'
import BentoAudioconf from '@/assets/bento/audioconf.png'

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

  return (
    <ContentSection center={false} gap="gap-4 md:gap-5">
      <div className="relative align-left md:max-w-[80%]">
        <Paragraph
          tag={t('homepage.ecosystem.tag')}
          title={t('homepage.ecosystem.title')}
          description={t('homepage.ecosystem.description')}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 md:mb-14">
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
