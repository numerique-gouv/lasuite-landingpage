import { useState } from 'react'
import { useRouter } from 'next/router'

import { ContentSection } from '@/components/ContentSection'
import Image from 'next/image'
import { Button } from '@/components/ui-kit-v2/Button'
import { DINUM_PRODUCTS } from '@/utils/products'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useTranslations } from '@/locales/useTranslations'

const DINUM_PRODUCTS_GRID = [
  'Tchap',
  'France Transfert',
  'Docs',
  'Grist',
  'Visio',
  'Messagerie',
  'Fichiers',
]

export const Products = () => {
  const t = useTranslations()
  const { locale } = useRouter()

  const [activeItem, setActiveItem] = useState({ index: 0, name: 'Tchap' })

  const handleClick = (index: number, name: string): void => {
    setActiveItem({ index, name })
  }

  return (
    <ContentSection>
      <div className="w-full">
        <div className="mb-7 md:mb-8 px-2 md:px-0 flex fade-in gap-[14px] flex-wrap w-full justify-center">
          {DINUM_PRODUCTS_GRID.map((name, index) => {
            const hasLink = DINUM_PRODUCTS[name]?.url
            const logo = DINUM_PRODUCTS[name]?.logo
            let isActive = index === activeItem.index

            return (
              <button
                key={name}
                className={`flex hover:bg-gray-025 transition duration-300 ease-in items-center border border-gray-100 cursor-pointer rounded px-2 py-1 
                  ${isActive ? 'bg-gray-050' : ''}`}
                onClick={() => handleClick(index, name)}
              >
                <Image
                  height="30"
                  src={logo}
                  alt={DINUM_PRODUCTS[name]?.name || name}
                />
              </button>
            )
          })}
        </div>

        <div className="px-2 md:px-0 md:max-w-[90%] mx-auto">
          <div className="sm:block mt-0 hidden aspect-[219/137] lasuite-hero-boxshadow rounded-xl relative w-full">
            {DINUM_PRODUCTS_GRID.map((name, index) => {
              let isActive = index === activeItem.index
              return (
                <div
                  key={name}
                  className={`top-0 left-0 absolute w-full h-full flex items-center justify-center
                    ${!isActive ? 'pointer-events-none' : ''}
                    `}
                >
                  <Image
                    alt=""
                    className={`w-full h-full object-cover
                     ${isActive ? 'fade-in' : 'fade-out'}
                     `}
                    src={
                      locale !== 'fr'
                        ? DINUM_PRODUCTS[name]?.screenshotEn ?? ''
                        : DINUM_PRODUCTS[name]?.screenshot ?? ''
                    }
                  />
                </div>
              )
            })}
          </div>

          <div className="flex sm:hidden mt-0 aspect-[2/2] rounded-xl relative w-full">
            {DINUM_PRODUCTS_GRID.map((name, index) => {
              let isActive = index === activeItem.index
              return (
                <div
                  key={name}
                  className="top-0 left-0 rounded-xl absolute w-full h-full flex items-center justify-center"
                >
                  <Image
                    alt=""
                    className={`w-full rounded-xl h-full object-cover
                     ${isActive ? 'fade-in' : 'fade-out'}
                     `}
                    src={
                      locale !== 'fr'
                        ? DINUM_PRODUCTS[name]?.screenshotMobileEn ?? ''
                        : DINUM_PRODUCTS[name]?.screenshotMobile ?? ''
                    }
                  />
                </div>
              )
            })}
          </div>

          <div
            className={`md:flex relative justify-between items-center fade-in mt-5`}
            key={activeItem.index}
          >
            <div className="block">
              <div className="flex items-center mb-1">
                <Image
                  src={DINUM_PRODUCTS[activeItem.name].logo}
                  height="35"
                  alt={DINUM_PRODUCTS[activeItem.name].name || activeItem.name}
                />
              </div>
              <p className="text-gray-550 text-base">
                {t(`homepage.slider_products.${activeItem.name}.description`)}
              </p>
              <p
                className="text-gray-550 text-base"
                dangerouslySetInnerHTML={{
                  __html: t(
                    `homepage.slider_products.${activeItem.name}.basedOn`
                  ),
                }}
              ></p>
            </div>

            <div className="mt-5 md:mt-0 md:ml-3">
              <Button
                href={DINUM_PRODUCTS[activeItem.name].url}
                target="_blank"
                variant="primary_brand"
                icon={<ArrowForwardIcon />}
                iconPosition="right"
              >
                {t('homepage.slider_products.button')}{' '}
                {DINUM_PRODUCTS[activeItem.name].name}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
  )
}
