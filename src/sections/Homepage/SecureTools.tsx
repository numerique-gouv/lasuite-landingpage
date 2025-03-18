import Image from 'next/image'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import BentoShield from '@/assets/bento/shield.png'
import { useTranslations } from '@/locales/useTranslations'

export const SecureTools = () => {
  const t = useTranslations()

  return (
    <ContentSection>
      <div className="grid md:grid-cols-5 md:gap-8 md:mb-14">
        <Image
          loading="lazy"
          className="w-full md:col-span-2"
          src={BentoShield}
          alt="Illustation outils sécurisés"
        />
        <div className="md:col-span-3">
          <Paragraph
            tag={t('homepage.secure_tools.tag')}
            title={t('homepage.secure_tools.title')}
            description={t('homepage.secure_tools.description')}
          />
        </div>
      </div>
    </ContentSection>
  )
}
