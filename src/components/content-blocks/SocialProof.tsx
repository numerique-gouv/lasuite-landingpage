import React from 'react'
import Image from 'next/image'
import { Raw } from '@/components/Raw'

type SocialProofItem = {
  src: string
  title: string
  height?: number
  width?: number
}
type SocialProofProps = { title?: string; items?: SocialProofItem[] }

export const SocialProof: React.FC<{ socialProof: SocialProofProps }> = ({
  socialProof,
}) => {
  const { title, items = [] } = socialProof || {}
  if (!items || items.length === 0) return null
  return (
    <div className="flex flex-col justify-between xl:flex-row gap-2 mt-6 py-8 pb-4 md:pb-8">
      {title && (
        <div className="px-6 max-w-[600px] text-sm lg:max-w-[300px] text-gray-600">
          <Raw>{title}</Raw>
        </div>
      )}
      <div
        className="flex items-center mt-8 lg:mt-0 gap-[25px] md:gap-16 overflow-x-auto scroll-smooth scrollbar-hide lg:snap-x lg:snap-mandatory lg:flex-wrap lg:overflow-visible lg:snap-none px-6 pb-4 md:pb-0"
        style={{ WebkitOverflowScrolling: 'touch' as any }}
      >
        {items.map((item, idx) => (
          <div key={`social-proof-${idx}`} className="snap-start shrink-0">
            <Image
              src={`/assets/${item.src}`}
              alt={item.title}
              height={item.height || 32}
              width={item.width || 80}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SocialProof
