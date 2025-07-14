import { useTranslations } from '@/locales/useTranslations'
import GristLogo from '@/assets/grist/grist-logo.png'
import LaSuiteLogo from '@/assets/grist/lasuite-logo.png'
import Image from 'next/image'
import { Button } from '@/components/Button'
import Markdown from 'react-markdown'

export const Footer = () => {
  const t = useTranslations()
  return (
    <div className="bg-greyscale-050 py-10 border-t-2 border-blue-1">
      <span role="heading" aria-level={2} className="sr-only">
        {t('common.footer')}
      </span>
      <div className="fr-container">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
          <div className=" flex flex-col gap-3 max-w-64">
            <h3>
              <Image className="w-[78px] h-auto" src={GristLogo} alt="Grist" />
            </h3>
            <p className="text-sm">
              {t('grist-landing.footer.about.description')}
            </p>
            <Button
              size="small"
              href={t('grist-landing.footer.about.cta.href')}
            >
              {t('grist-landing.footer.about.cta.label')}
            </Button>
          </div>

          <div className="text-[0.875rem]">
            <h3 className="font-bold mb-4">Menu</h3>
            <Markdown className="[&_ul]:flex [&_ul]:flex-col [&_ul]:gap-4">
              {t('grist-landing.footer.menu')}
            </Markdown>
          </div>

          <div className="max-w-56 text-[0.875rem]">
            <h3>
              <Image
                className="w-[75px] h-auto mb-4"
                src={LaSuiteLogo}
                alt="La Suite numérique"
              />
            </h3>
            <p className="font-bold mb-4">
              {t('grist-landing.footer.lasuite.title')}
            </p>
            <Markdown className="[&_ul]:flex [&_ul]:flex-col [&_ul]:gap-4">
              {t('grist-landing.footer.lasuite.links')}
            </Markdown>
          </div>
        </div>
      </div>
    </div>
  )
}
