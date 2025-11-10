import React from 'react'
import Image from 'next/image'

type SocialProofItem = { src: string; title: string }
type SocialProofProps = { title?: string; items?: SocialProofItem[] }

export const SocialProof: React.FC<{ socialProof: SocialProofProps }> = ({ socialProof }) => {
  const { title, items = [] } = socialProof || {}
  if (!items || items.length === 0) return null
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-2 mt-6">
      {title && (
        <div className="max-w-[300px] text-gray-550">
          {title}
        </div>
      )}
      <div
        className="flex items-center gap-16 overflow-x-auto scroll-smooth snap-x snap-mandatory md:flex-wrap md:overflow-visible md:snap-none"
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


