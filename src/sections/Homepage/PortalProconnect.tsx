import Image from 'next/image'
import { useRouter } from 'next/router'

import { Button } from '@/components/ui-kit-v2/Button'
import AddLinkIcon from '@mui/icons-material/AddLink'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import ProConnectIllustration from '@/assets/bento-proconnect.png'
import ProConnectIllustrationEn from '@/assets/bento-proconnect-en.png'

import { useTranslations } from '@/locales/useTranslations'

export const PortalProconnect = () => {
  const t = useTranslations()
  const { locale } = useRouter()

  return (
    <ContentSection>
      <div className="grid md:grid-cols-2 md:gap-8 md:mb-14">
        <Image
          loading="lazy"
          alt=""
          className="w-full"
          src={
            locale !== 'fr' ? ProConnectIllustrationEn : ProConnectIllustration
          }
        />
        <div>
          <Paragraph
            tag={t('homepage.portal_proconnect.tag')}
            title="ProConnect"
          >
            {t('homepage.portal_proconnect.description')}
          </Paragraph>
          <Button
            target="_blank"
            variant="primary_brand"
            href="https://partenaires.proconnect.gouv.fr/"
            icon={<AddLinkIcon />}
            iconPosition="left"
          >
            {t('homepage.portal_proconnect.button')}
          </Button>
        </div>
      </div>
    </ContentSection>
  )
}
