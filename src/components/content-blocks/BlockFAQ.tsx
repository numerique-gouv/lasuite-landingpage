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
}

export const BlockFAQ: FC<BlockFAQBlock> = (props) => {
  const block = props
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  
  if (!block) return null
  
  const toggleItem = (idx: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(idx)) {
        newSet.delete(idx)
      } else {
        newSet.add(idx)
      }
      return newSet
    })
  }
  
  return (
    <div className="max-w-container mx-auto px-3 xl:px-0">
      <div className="md:gap-8">
        <div className="mb-8 md:mb-12 md:order-first px-3 md:px-0 pt-12 md:pt-0">
          <h3 className="text-gray-850 md:text-[2.75rem] text-3xl sm:leading-[42px] md:leading-[48px] font-bold pb-2 md:pb-8">{block.title}</h3>
            <p className="text-gray-550 text-sm md:text-lg"
              dangerouslySetInnerHTML={{
                __html: block.content,
              }}
            />
        </div>
        <div className="flex flex-col rounded-lg overflow-hidden border border-greyscale-200">
          {block.questions?.map((q: FAQQuestion, qIdx: number) => (
            <AccordionItem
              key={qIdx}
              question={q.q}
              answer={q.a}
              open={openItems.has(qIdx)}
              onClick={() => toggleItem(qIdx)}
              idx={qIdx}
              lastItem={qIdx === block.questions.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const AccordionItem: FC<{
  question: string
  answer: string
  open: boolean
  onClick: () => void
  idx: number
  lastItem: boolean
}> = ({ question, answer, open, onClick, idx, lastItem }) => {
  return (
    <div className={`border-greyscale-200 hover:bg-gray-050 transition-colors overflow-hidden
      ${open ? 'bg-gray-050 open-container' : ''}
      ${!lastItem ? 'border-b' : ''}`}>
      <button
        className={`px-3.5  ${open ? 'text-gray-850' : 'text-gray-600' } w-full text-left flex justify-between items-center py-2 font-medium text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-550 focus-visible:ring-inset`}
        aria-expanded={open}
        aria-controls={`faq-panel-${idx}`}
        onClick={onClick}
        type="button"
      >
        <span className= "text-base md:text-lg">{question}</span>
        <span className={`transition-transform ml-2 text-gray-550 ${open ? 'rotate-180' : ''}`}><KeyboardArrowDownIcon fontSize="small" /></span>
      </button>
      <div
        id={`faq-panel-${idx}`}
        className={`faq-answer ${open ? 'open pb-3' : ''} text-sm px-3.5 text-gray-600`}
      >
        {answer}
      </div>
    </div>
  )
}
