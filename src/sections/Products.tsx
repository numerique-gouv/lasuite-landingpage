import { useState, useEffect } from 'react'
import { ContentSection } from '@/components/ContentSection'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { DINUM_PRODUCTS } from '@/utils/products'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

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
  const [isPaused, setIsPaused] = useState(false)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setActiveItem((prev) => {
        const newIndex = (prev.index + 1) % DINUM_PRODUCTS_GRID.length
        return { index: newIndex, name: DINUM_PRODUCTS_GRID[newIndex] }
      })
    }, 6000)

    return () => clearInterval(interval)
  }, [isPaused])

  const handleClick = (index: number, name: string): void => {
    setIsFading(true)
    setTimeout(() => {
      setActiveItem({ index, name })
      setIsPaused(true)
      setIsFading(false)
    }, 200)
  }

  return (
    <ContentSection>
      <div className="flex fade-in gap-4 flex-wrap text-left w-full justify-start sm:justify-center">
        {DINUM_PRODUCTS_GRID.map((name, index) => {
          const hasLink = DINUM_PRODUCTS[name]?.url
          const logo = DINUM_PRODUCTS[name]?.logo
          const isActive = index === activeItem.index

          return (
            <div
              key={name}
              className={`flex items-center border border-greyscale-300 cursor-pointer rounded p-2 
              ${isActive ? 'bg-greyscale-100' : ''}`}
              onClick={() => handleClick(index, name)}
            >
              <Image className="w-auto" src={logo} alt={`Logo ${name}`} />
              <span className="text-base text-blue-1 ml-2 font-medium md:whitespace-nowrap">
                {DINUM_PRODUCTS[name]?.name}
              </span>
            </div>
          )
        })}
      </div>

      <div className="md:w-max-[80vw] md:w-[85%]">
        <div className="flex mt-0">
          {activeItem.name && DINUM_PRODUCTS[activeItem.name] && (
            <Image
              key={activeItem.index}
              className={`lasuite-hero-boxshadow sm:block rounded-xl hidden 
                ${isFading ? 'fade-out' : 'fade-in-right'}`}
              src={DINUM_PRODUCTS[activeItem.name].screenshot ?? ''}
              alt={`Screenshot ${activeItem.name}`}
            />
          )}
        </div>

        <div className="flex sm:hidden mt-0">
          {activeItem.name && DINUM_PRODUCTS[activeItem.name] && (
            <Image
              key={activeItem.index}
              className="fade-in-right"
              src={DINUM_PRODUCTS[activeItem.name].screenshotMobile ?? ''}
              alt={`Screenshot ${activeItem.name}`}
            />
          )}
        </div>
        <div
          className={`md:flex justify-between fade-in-left`}
          key={activeItem.index}
        >
          <div className="block mt-5">
            <div className="flex items-center mb-1">
              <Image
                src={DINUM_PRODUCTS[activeItem.name].logo}
                alt={`Logo ${activeItem.name}`}
              />
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

          <div className="mt-5 md:mt-4 md:ml-3">
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
    </ContentSection>
  )
}
