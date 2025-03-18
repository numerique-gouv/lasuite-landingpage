import Image from 'next/image'
import { Button } from '@/components/Button'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import BentoSuiteTerritoriale from '@/assets/bento/suite-territoriale.png'
import { useTranslations } from '@/locales/useTranslations'

export const SuiteTerritoriale = () => {
  const t = useTranslations()

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
            tag={t('homepage.suite_territoriale.tag')}
            title={t('homepage.suite_territoriale.title')}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: t('homepage.suite_territoriale.description'),
              }}
            />
          </Paragraph>
          <Button
            href="https://suiteterritoriale.anct.gouv.fr/"
            iconPosition="left"
          >
            {t('homepage.suite_territoriale.button')}
          </Button>
        </div>
      </div>
    </ContentSection>
  )
}
