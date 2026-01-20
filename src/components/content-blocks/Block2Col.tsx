import Image from 'next/image'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import { FC } from 'react'
import { Button } from '@/components/Button'

import GitHubIcon from '@mui/icons-material/GitHub'
import ChatIcon from '@mui/icons-material/Chat'

const iconMap: Record<string, React.ReactNode> = {
  GitHubIcon: <GitHubIcon />,
  ChatIcon: <ChatIcon />,
}

interface Block2colBlock {
  tag?: string
  title: string
  content: string
  image?: {
    src: string
    alt: string
    position?: 'left' | 'right'
  }
  buttons?: {
    text: string
    variant?: 'outline' | 'tertiary'
    icon?: string
  }[]
}

interface Block2colProps {
  blocks: Block2colBlock[]
}

export const Block2Col: FC<Block2colProps> = ({ blocks }) => (
  <>
    {blocks.map((block, idx) => (
      <ContentSection key={idx}>
        <div className="grid md:grid-cols-2 md:gap-8">
          <div
            className={
              block.image?.position === 'left'
                ? 'mb-10 md:order-last'
                : 'mb-10 md:order-first'
            }
          >
            <Paragraph title={block.title}>
              <p
                dangerouslySetInnerHTML={{
                  __html: block.content,
                }}
              />
            </Paragraph>
            {block.buttons && (
              <div className="flex gap-4 mt-6">
                {block.buttons.map((button, idButton) => (
                  <Button
                    key={idButton}
                    variant={button.variant}
                    icon={button.icon ? iconMap[button.icon] : undefined}
                  >
                    {button.text}
                  </Button>
                ))}
              </div>
            )}
          </div>
          {block.image && (
            <Image
              loading="lazy"
              alt={block.image.alt}
              className={
                block.image.position === 'left'
                  ? 'w-full md:order-first'
                  : 'w-full'
              }
              src={`/assets/products/${block.image.src}`}
              width={800}
              height={400}
            />
          )}
        </div>
      </ContentSection>
    ))}
  </>
)
