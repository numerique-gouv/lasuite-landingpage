import Image from 'next/image'
import { Button } from '@/components/Button'
import VisioIconWhite from '@/assets/products/visio-white.svg'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import BentoLasuite from '@/assets/bento/suite-numerique.png'
import { useTranslations } from '@/locales/useTranslations'

const VisioLogoIcon = () => {
  return (
    <>
      <Image
        width="24"
        height="24"
        alt=""
        loading="lazy"
        className="fill-white"
        src={VisioIconWhite}
      />
    </>
  )
}

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
            title={t('homepage.migration.title')}>
            <p dangerouslySetInnerHTML={{ __html: t('homepage.migration.description') }} />
          </Paragraph>
          <Button
            href="https://grist.numerique.gouv.fr/o/docs/forms/9pCcc1QTyMmDq93YGQP2xF/49"
            icon={<VisioLogoIcon />}
            iconPosition="left"
          >
            {t('homepage.migration.button')}
          </Button>
        </div>
      </div>
    </ContentSection>
  )
}
