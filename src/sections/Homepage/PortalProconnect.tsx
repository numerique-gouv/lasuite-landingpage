import Image from 'next/image'
import { Button } from '@/components/Button'
import AddLinkIcon from '@mui/icons-material/AddLink'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import ProConnectIllustration from '@/assets/bento-proconnect.png'

import { useTranslations } from '@/locales/useTranslations'

export const PortalProconnect = () => {
  const t = useTranslations()

  return (
    <ContentSection>
      <div className="grid md:grid-cols-2 md:gap-8 md:mb-14">
        <Image
          loading="lazy"
          alt=""
          className="w-full"
          src={ProConnectIllustration}
        />
        <div>
          <Paragraph tag={t('homepage.portal_proconnect.tag')} title="ProConnect">
            {t('homepage.portal_proconnect.description')}
          </Paragraph>
          <Button
            href="https://github.com/numerique-gouv/proconnect-documentation?tab=readme-ov-file#-proconnect---documentation"
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
