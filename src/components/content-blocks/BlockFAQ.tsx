import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import { FC, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@/components/Button'

import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'

interface FAQQuestion {
  q: string
  a: string
}

interface BlockFAQBlock {
  tag?: string
  title: string
  content: string
  questions: FAQQuestion[]
  footerContent?: string
  button?: {
    url: string
    text: string
  }
}

interface BlockFAQProps {
  blocks: BlockFAQBlock[]
}

export const BlockFAQ: FC<BlockFAQProps> = ({ blocks }) => (
  <>
    {blocks.map((block, idx) => (
      <FAQAccordionSection key={idx} block={block} />
    ))}
  </>
)

const openCrisp = () => {
  if (window.$crisp) {
    window.$crisp.push(['do', 'chat:open'])
  }
}

const FAQAccordionSection: FC<{ block: BlockFAQBlock }> = ({ block }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  return (
    <ContentSection>
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
        <div className="flex flex-col border border-b-0 border-greyscale-200">
          {block.questions?.map((q, qIdx) => (
            <AccordionItem
              key={qIdx}
              question={q.q}
              answer={q.a}
              open={openIdx === qIdx}
              onClick={() => setOpenIdx(openIdx === qIdx ? null : qIdx)}
              idx={qIdx}
            />
          ))}
        </div>
        {block.footerContent && (
          <div className="mt-10 text-greyscale-700">
            <p className="mb-4">{block.footerContent}</p>
            {block.button && (
                <Button
                  variant="tertiary"
                  onClick={openCrisp}
                  icon={<ChatOutlinedIcon />}
                  iconPosition="left"
                >
                  {block.button.text}
                </Button>
            )}
          </div>
        )}
      </div>
    </ContentSection>
  )
}

const AccordionItem: FC<{
  question: string
  answer: string
  open: boolean
  onClick: () => void
  idx: number
}> = ({ question, answer, open, onClick, idx }) => {
  return (
    <div className={`border-b border-greyscale-200
      ${open ? 'bg-greyscale-050 open-container' : ''}`}>
      <button
        className={`px-4 pt-3 text-primary-text w-full text-left flex justify-between items-center py-3 font-medium text-base`}
        aria-expanded={open}
        aria-controls={`faq-panel-${idx}`}
        onClick={onClick}
        type="button"
      >
        <span>{question}</span>
        <span className={`transition-transform ml-2 ${open ? 'rotate-180' : ''}`}><KeyboardArrowDownIcon /></span>
      </button>
      <div
        id={`faq-panel-${idx}`}
        className={`faq-answer ${open ? 'open pt-3 pb-3' : ''} text-small px-4 text-greyscale-700`}
      >
        {answer}
      </div>
    </div>
  )
}
