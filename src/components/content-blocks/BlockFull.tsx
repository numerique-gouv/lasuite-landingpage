import Image from 'next/image'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import { FC } from 'react'

interface BlockFullBlock {
  tag?: string
  title: string
  content: string
  image?: {
    src: string
    alt: string
  }
}

interface BlockFullProps {
  blocks: BlockFullBlock[]
}

export const BlockFull: FC<BlockFullProps> = ({ blocks }) => (
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
          <div className="">
            {block.image && (
              <Image
                loading="lazy"
                alt={block.image.alt}
                className="w-full"
                src={`/assets/products/${block.image.src}`}
                width={800}
                height={400}
              />
            )}
          </div>
        </div>
      </ContentSection>
    ))}
  </>
)
