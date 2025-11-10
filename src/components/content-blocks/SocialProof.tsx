import React from 'react'
import Image from 'next/image'

type SocialProofItem = { src: string; title: string }
type SocialProofProps = { title?: string; items?: SocialProofItem[] }

export const SocialProof: React.FC<{ socialProof: SocialProofProps }> = ({ socialProof }) => {
  const { title, items = [] } = socialProof || {}
  if (!items || items.length === 0) return null
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-2 mt-6 py-8 pb-4 md:pb-8">
      {title && (
        <div className="px-6 md:px-0 md:max-w-[300px] text-gray-600"
         dangerouslySetInnerHTML={{
              __html: title,
            }}>
        </div>
      )}
      <div
        className="flex items-center mt-8 md:mt-0 gap-[25px] md:gap-16 overflow-x-auto scroll-smooth scrollbar-hide md:snap-x md:snap-mandatory md:flex-wrap md:overflow-visible md:snap-none px-6 md:pl-0 pb-4 md:pb-0"
        style={{ WebkitOverflowScrolling: 'touch' as any }}
      >
        {items.map((item, idx) => (
          <div key={`social-proof-${idx}`} className="snap-start shrink-0">
            <Image src={`/assets/${item.src}`} alt={item.title} width={80} height={32} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SocialProof


