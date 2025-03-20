import Image from 'next/image'
import { Button } from '@/components/Button'
import WelcomeToLaSuite from '@/assets/welcometolasuite.png'
import SuiteNumeriqueLogo from '@/assets/logo/suite-numerique.svg'
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
          <Image
            className=""
            src={WelcomeToLaSuite}
            alt="Welcome to la suite"
          />
        </div>
        <div className="mx-auto px-10 max-w-[300px] md:w-80">
          <Image
            className="mx-auto"
            src={SuiteNumeriqueLogo}
            alt="Logo la suite numérique"
          />
        </div>

        <p className="my-7 font-medium">{t('homepage.footer.description')}</p>

        <div className="flex md:flex-row flex-col gap-5 items-center justify-center">
          <Button
            onClick={openCrisp}
            variant="tertiary"
            icon={<ChatOutlinedIcon />}
            iconPosition="left"
          >
            {t('homepage.footer.contact_button')}
          </Button>

          <Button
            href={urlForm}
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
