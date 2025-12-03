import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui-kit-v2/Button'

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H12V5H5V19H19V12H21V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM9.7 15.7L8.3 14.3L17.6 5H14V3H21V10H19V6.4L9.7 15.7Z"
      fill="#3E5DE7"
    />
  </svg>
)

type RoadMapItem = {
  src: string
  alt: string
}

type RoadMapData = {
  title?: string
  content?: string
  items?: RoadMapItem[]
  link?: {
    title: string
    url: string
  }
}

export const RoadMap: React.FC<RoadMapData> = ({
  title,
  content,
  items,
  link,
}) => {
  if (!items || items.length === 0) return null

  return (
    <div className="mt-12 md:py-[120px] px-3 xl:px-0">
      <div className="max-w-container mx-auto w-[100%]">
        <div className="px-3 md:px-0">
          {title && (
            <h3 className="text-gray-850 md:text-[2.75rem] text-3xl sm:leading-[42px] md:leading-[48px] font-bold pb-6">
              {title}
            </h3>
          )}
          {content && (
            <p className="text-gray-550 text-sm md:text-lg mb-12">{content}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] md:gap-8 mb-8">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1

            if (isLast) {
              return (
                <div
                  key={`roadmap-${idx}`}
                  className="md:col-span-2 bg-gray-025 border border-greyscale-100 shadow-[0_4px_10px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden flex flex-col justify-center md:flex-row md:justify-between items-center h-24 px-6 relative"
                >
                  <span className="text-gray-850 font-bold text-base md:text-2xl z-10 relative text-center md:text-left">
                    {item.alt}
                  </span>
                  <div
                    className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-30 md:opacity-100"
                    style={{
                      backgroundImage: `url(/assets/products/${item.src})`,
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain',
                      transform: 'scale(3.5)',
                    }}
                  />
                </div>
              )
            }

            return (
              <div
                key={`roadmap-${idx}`}
                className="bg-gray-025 border border-greyscale-100 shadow-[0_4px_10px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden"
              >
                <Image
                  src={`/assets/products/${item.src}`}
                  alt={item.alt}
                  width={600}
                  height={320}
                  className="w-full h-auto"
                />
              </div>
            )
          })}
        </div>
        {link && link.url && link.title && (
          <div className="flex justify-center mt-12 md:mt-10">
            <Button
              href={link.url}
              variant="tertiary_brand"
              target="_blank"
              icon={<ExternalLinkIcon />}
              iconPosition="left"
            >
              {link.title}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default RoadMap
