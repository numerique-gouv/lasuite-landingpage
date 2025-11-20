import Image from 'next/image'
import { Button } from "@/components/ui-kit-v2/Button";
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import BentoLasuite from '@/assets/bento/bento-webinaire-suite-numerique.png'
import { useTranslations } from '@/locales/useTranslations'
import { WEBINAIRE_URL } from '@/constant'

export const Migration = () => {
  const t = useTranslations()

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
          <Paragraph
            tag={t('homepage.migration.tag')}
            title={t('homepage.migration.title')}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: t('homepage.migration.description'),
              }}
            />
          </Paragraph>
          <Button target="_blank" href={WEBINAIRE_URL} iconPosition="left">
            {t('homepage.migration.button')}
          </Button>
        </div>
      </div>
    </ContentSection>
  )
}
