import Image from 'next/image'
import { useRouter } from 'next/router'

import { Button } from '@/components/ui-kit-v2/Button'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import { DINUM_PRODUCTS } from '@/utils/products'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useTranslations } from '@/locales/useTranslations'

export const NewProducts = () => {
  const t = useTranslations()
  const { locale } = useRouter()

  const PRODUCTS_GRID = ['Docs', 'Grist']

  return (
    <ContentSection>
      <div className="gap-0">
        <div className="grid md:grid-cols-1 mb-4">
          <Paragraph
            tag={t('homepage.new_products.tag')}
            title={t('homepage.new_products.title')}
          >
            {t('homepage.new_products.description')}
          </Paragraph>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:mb-14">
          {PRODUCTS_GRID.map((name, index) => {
            const hasLink = DINUM_PRODUCTS[name]?.url
            const logo = DINUM_PRODUCTS[name]?.logo

            return (
              <div key={name}>
                <Image alt="" src={DINUM_PRODUCTS[name]?.screenshotBox || ''} />
                <div className="flex flex-col md:flex-row md:justify-between mt-4 gap-4">
                  <Image
                    height="40"
                    src={logo}
                    alt={DINUM_PRODUCTS[name]?.name || name}
                  />
                  <Button
                    href={DINUM_PRODUCTS[name].url}
                    target="_blank"
                    variant="primary_brand"
                    icon={<ArrowForwardIcon />}
                    iconPosition="right"
                    aria-label={`${t('homepage.slider_products.button')} - ${t('common.new_window')}`}
                  >
                    {t('homepage.slider_products.button')}{' '}
                    {DINUM_PRODUCTS[name].name}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </ContentSection>
  )
}
