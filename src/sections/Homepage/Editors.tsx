import Image from 'next/image'
import { useRouter } from 'next/router'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import BentoWhaller from '@/assets/bento/bento-whaller.png'
import BentoWhallerEn from '@/assets/bento/bento-whaller-en.png'

import { useTranslations } from '@/locales/useTranslations'

export const Editors = () => {
  const t = useTranslations()
  const { locale } = useRouter()

  return (
    <ContentSection>
      <div className="grid md:grid-cols-2 md:gap-8 md:mb-14">
        <div>
          <Paragraph
            tag={t('homepage.editors.tag')}
            title={t('homepage.editors.title')}
            description={t('homepage.editors.description')}
          />
        </div>
        <Image
          loading="lazy"
          className="w-full"
          src={locale === 'en' ? BentoWhallerEn : BentoWhaller}
          alt="Whaller - Plateforme collaborative certifiée par l'ANSSI, offrant un intranet et réseau social d'entreprise sécurisé pour les organisations."
        />
      </div>
    </ContentSection>
  )
}
