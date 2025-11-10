import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui-kit-v2/Button'

type CTAData = {
  description?: string
  button?: {
    title_desktop?: string
    title_mobile?: string
    url?: string
  }
  image?: {
    src: string
    alt: string
  }
}

export const CTA: React.FC<CTAData> = ({ description, button, image }) => {
  return (
    <div className="bg-brand-550 ">
      <div className="max-w-container mt-16 md:mt-0 mx-auto w-[100%] md:flex flex-col md:flex-row items-center justify-between gap-8 py-12 md:py-0 px-6 xl:px-0">
        <div className="flex-1 text-white">
          {description && (
            <p className="text-xl md:text-xl mb-4">{description}</p>
          )}
          {button && (
            <>
              <div className="hidden md:block">
                <Button href={button.url || '#'} variant="secondary_brand">
                  {button.title_desktop || button.title_mobile || 'Commencer'}
                </Button>
              </div>
              <div className="md:hidden">
                <Button href={button.url || '#'} variant="secondary_brand" className="bg-brand-050">
                  {button.title_mobile || button.title_desktop || 'Commencer'}
                </Button>
              </div>
            </>
          )}
        </div>
        {image && image.src && (
          <div className="hidden md:block flex-shrink-0">
            <Image
              src={`/assets/products/${image.src}`}
              alt={image.alt}
              width={400}
              height={300}
              className="w-auto h-auto max-w-[400px]"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default CTA

