import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui-kit-v2/Button'
import { Raw } from '@/components/Raw'

export type FeatureItem = {
  title?: string
  description?: string
  image?: { src: string; alt?: string }
  icon?: React.ReactNode
  link?: { url: string; label: string; variant?: string }
  type?: 'full' | 'basic'
}

export const CardFeature: React.FC<{ item: FeatureItem }> = ({ item }) => {
  const isFull = item.type === 'full'
  const hasImage = !!item.image?.src

  const containerClasses = `flex justify-between bg-white h-full border border-greyscale-200 shadow-[0_4px_10px_rgba(0,0,0,0.05)] overflow-hidden rounded-lg ${isFull ? 'flex-col md:flex-row' : 'flex-col'}`
  const titleClasses = 'text-[1.5rem] font-bold'

  return (
    <div className={containerClasses}>
      <div className="flex-1 p-8 max-w-[500px]">
        {item.title && <h4 className={titleClasses}>{item.title}</h4>}
        {item.description && (
          <Raw className="text-gray-550 mt-1.5 text-base">
            {item.description}
          </Raw>
        )}
      </div>
      {hasImage && (
        <div className={isFull ? 'w-full md:w-1/2' : 'w-full'}>
          <Image
            src={`/assets/products/${item.image!.src}`}
            alt={item.image!.alt || item.title || ''}
            width={isFull ? 600 : 400}
            height={isFull ? 360 : 240}
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  )
}

export default CardFeature
