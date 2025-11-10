import Image from 'next/image'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import { FC } from 'react'

interface BlockFull3ColSubBlock {
  title: string
  content: string
  image?: {
    src: string
    alt: string
  }
}

interface BlockFull3ColBlock {
  tag?: string
  title: string
  content: string
  blocks: BlockFull3ColSubBlock[]
}

interface BlockFull3ColProps {
  blocks: BlockFull3ColBlock[]
}

export const BlockFull3Col: FC<BlockFull3ColProps> = ({ blocks }) => (
  <>
    {blocks.map((block, idx) => (
      <ContentSection key={idx}>
        <div className="md:gap-8 md:mb-14">
          <div className="mb-10 md:order-first">
            <Paragraph tag={block.tag} title={block.title}>
              <p
                dangerouslySetInnerHTML={{
                  __html: block.content,
                }}
              />
            </Paragraph>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {block.blocks?.map((sub, subIdx) => (
              <div key={subIdx} className="flex flex-col text-left">
                {sub.image && (
                  <Image
                    loading="lazy"
                    alt={sub.image.alt}
                    className="w-full mb-2"
                    src={`/assets/products/${sub.image.src}`}
                    width={200}
                    height={120}
                  />
                )}
                <h3 className="font-bold leading-[1.27] text-[1.35rem] text-greyscale-700 mb-1 mt-4">{sub.title}</h3>
                <p>{sub.content}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
    ))}
  </>
)
