import Image from 'next/image'
import { Button } from '@/components/ui-kit-v2/Button'
import WelcomeToLaSuite from '@/assets/welcometolasuite.svg'
import SuiteLogo from '@/assets/logo/lasuite.svg'
import { NEWSLETTER_FORM } from '@/constant'
import { useTranslations } from '@/locales/useTranslations'

import { ContentSection } from '@/components/ContentSection'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'

export const FooterLaSuite = () => {
  const urlForm = NEWSLETTER_FORM
  const t = useTranslations()

  const openCrisp = () => {
    if (window.$crisp) {
      window.$crisp.push(['do', 'chat:open'])
    }
  }

  return (
    <ContentSection>
      <div className="text-center mx-auto mb-20">
        <div className="mx-auto w-72 md:w-96">
          <Image className="" src={WelcomeToLaSuite} alt="Welcome to LaSuite" />
        </div>
        <div className="mx-auto px-10 max-w-[300px] md:w-80">
          <Image
            className="mx-auto"
            src={SuiteLogo}
            alt="LaSuite"
            width="300"
            height="100"
          />
        </div>

        <p className="pb-10 pt-2 text-gray-550 text-sm md:text-xl font-normal">
          {t('homepage.footer.description')}
        </p>

        <div className="flex md:flex-row flex-col gap-5 items-center justify-center">
          <div onClick={openCrisp}>
            <Button
              variant="secondary_brand"
              icon={<ChatOutlinedIcon />}
              iconPosition="left"
            >
              {t('homepage.footer.contact_button')}
            </Button>
          </div>

          <Button
            href={urlForm}
            target="_blank"
            variant="primary_brand"
            icon={<ArticleOutlinedIcon />}
            iconPosition="left"
          >
            {t('homepage.footer.newsletter_button')}
          </Button>
        </div>
      </div>
    </ContentSection>
  )
}
