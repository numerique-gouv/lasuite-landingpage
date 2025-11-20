import React from 'react'
import { Button } from '@/components/ui-kit-v2/Button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { CardFeature } from '../../../components/content-blocks/CardFeature'

export type ProductContent = Record<string, any>

export const Features: React.FC<{
  productContentFeatures?: ProductContent
}> = ({ productContentFeatures }) => {
  if (!productContentFeatures) return null
  return (
    <div className="bg-gray-025">
      <div className="pt-12 md:pt-[120px] md:flex justify-between max-w-container mx-auto w-[100%] px-6 md:px-3 xl:px-0 pb-12">
        <h3 className="text-greyscale-800 md:text-[2.75rem] text-3xl sm:leading-[42px] md:leading-[48px] font-bold pb-4 md:pb-0">
          {productContentFeatures.title}
        </h3>
        {productContentFeatures.cta && (
          <Button
            href={productContentFeatures.cta?.url || '#'}
            variant="primary_brand"
            icon={<PlayArrowIcon />}
            iconPosition="left"
          >
            {productContentFeatures.cta.title}
          </Button>
        )}
      </div>
      {Array.isArray(productContentFeatures?.items) &&
        productContentFeatures.items.length > 0 && (
          <div className="max-w-container px-3 xl:px-0 auto-cols-max items-stretch place-content-stretch mx-auto w-[100%] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pb-12 md:pb-[120px]">
            {productContentFeatures.items.map((item: any, idx: number) => {
              const isFull = item.type === 'full'
              return (
                <div
                  key={`feat-${idx}`}
                  className={isFull ? 'md:col-span-2' : ''}
                >
                  <CardFeature item={item} />
                </div>
              )
            })}
          </div>
        )}
    </div>
  )
}

export default Features
