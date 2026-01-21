import Image from 'next/image'
import { Button } from '@/components/ui-kit-v2/Button'
import SuiteLogo from '@/assets/logo/lasuite.svg'
import SuiteLogoAnime from '@/assets/logo/lasuite-anime.gif'

import { NEWSLETTER_FORM } from '@/constant'
import { useTranslations } from '@/locales/useTranslations'

import { ContentSection } from '@/components/ContentSection'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import { useEffect, useState } from 'react'
import FadeInSection from '@/components/FadeInSection'

const FadeInList = ({
  items,
  delay = 600,
}: {
  items: string[]
  delay?: number
}) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      items.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, index])
        }, index * delay)
      })
    }
  }, [isVisible, items, delay])

  return (
    <FadeInSection className="pb-10 pt-2" onVisibleChange={setIsVisible}>
      {items.map((item: string, index: number) => (
        <span
          key={index}
          className={`${index > 1 && 'block'} ${index == 1 && 'ml-1.5'} text-gray-550 text-sm md:text-xl font-normal transition-all duration-500 ${
            visibleItems.includes(index) ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {item}
        </span>
      ))}
    </FadeInSection>
  )
}

export const FooterLaSuite = ({ content }: { content: any }) => {
  const urlForm = NEWSLETTER_FORM
  const t = useTranslations()

  return (
    <ContentSection background="gray">
      <div className="text-center mx-auto py-10">
        <FadeInSection delay={200}>
          <div className="mx-auto px-10 max-w-[300px] md:w-80">
            <Image
              className="mx-auto"
              src={SuiteLogo}
              alt="LaSuite"
              width="300"
              height="100"
            />
          </div>
        </FadeInSection>

        {content.description && Array.isArray(content.description) && (
          <FadeInList items={content.description} />
        )}

        <FadeInSection delay={1500}>
          <div className="flex md:flex-row flex-col gap-5 items-center justify-center">
            <Button
              href={urlForm}
              target="_blank"
              variant="primary_brand"
              iconPosition="left"
            >
              {content.newsletter_button.title}
            </Button>

            <Button
              href={content.start_button.href}
              target="_blank"
              variant="tertiary_bordered"
              iconPosition="left"
            >
              {content.start_button.title}
            </Button>
          </div>
        </FadeInSection>
      </div>
    </ContentSection>
  )
}
