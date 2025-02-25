import { useState, useEffect } from 'react'
import { ContentSection } from '@/components/ContentSection'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { DINUM_PRODUCTS } from '@/utils/products'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Swiper, SwiperSlide } from 'swiper/react'

const DINUM_PRODUCTS_GRID = [
  'Tchap',
  'France Transfert',
  'Grist',
  'Docs',
  'Visio',
  'Messagerie',
]

export const Products = () => {
  const [activeItem, setActiveItem] = useState({ index: 0, name: 'Tchap' })
  //  const [isPaused, setIsPaused] = useState(false)

  //  useEffect(() => {
  //    if (isPaused) return
  //
  //    const interval = setInterval(() => {
  //      setActiveItem((prev) => {
  //        const newIndex = (prev.index + 1) % DINUM_PRODUCTS_GRID.length
  //        return { index: newIndex, name: DINUM_PRODUCTS_GRID[newIndex] }
  //      })
  //    }, 6000)
  //
  //    return () => clearInterval(interval)
  //  }, [isPaused])

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
                className={`flex hover:bg-greyscale-050 transition duration-300 ease-in items-center border border-greyscale-300 cursor-pointer rounded p-2 
              ${isActive ? 'bg-greyscale-100' : ''}`}
                onClick={() => handleClick(index, name)}
              >
                <Image className="w-auto" src={logo} alt="" />
                <span className="text-base text-blue-1 ml-2 font-medium md:whitespace-nowrap">
                  {DINUM_PRODUCTS[name]?.name}
                </span>
                {DINUM_PRODUCTS[name].status && (
                  <div className="leading-[1.5] bg-primary-200 text-xs rounded-full font-bold px-2 ml-1 text-primary-500">
                    BETA
                  </div>
                )}
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
                  className="top-0 left-0 absolute w-full h-full flex items-center justify-center"
                >
                  <Image
                    alt=""
                    className={`w-full h-full object-cover
                     ${isActive ? 'fade-in' : 'fade-out'}
                     `}
                    src={DINUM_PRODUCTS[name]?.screenshot ?? ''}
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
                    src={DINUM_PRODUCTS[name]?.screenshotMobile ?? ''}
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
                <Image src={DINUM_PRODUCTS[activeItem.name].logo} alt="" />
                <span className="text-xl text-blue-1 font-bold ml-1">
                  {DINUM_PRODUCTS[activeItem.name].name}
                </span>

                {DINUM_PRODUCTS[activeItem.name].status && (
                  <div className="leading-[1.5] bg-primary-200 text-xs rounded-full font-bold px-2 ml-2 text-primary-500">
                    BETA
                  </div>
                )}
              </div>
              <p className="font-medium">
                {DINUM_PRODUCTS[activeItem.name].description}
              </p>
            </div>

            <div className="mt-5 md:mt-0 md:ml-3">
              <Button
                href={DINUM_PRODUCTS[activeItem.name].url}
                icon={<ArrowForwardIcon />}
                iconPosition="right"
              >
                Découvrir {DINUM_PRODUCTS[activeItem.name].name}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
  )
}
