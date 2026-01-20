import Image from 'next/image'
import { useRouter } from 'next/router'

import { Button } from '@/components/ui-kit-v2/Button'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import { useTranslations } from '@/locales/useTranslations'

export const CoupDOeil = ({ content }: { content: any }) => {
  const t = useTranslations()
  const { locale } = useRouter()

  return (
    <ContentSection background="gray">
      <div className="md:gap-8 md:mb-10">
        <div className="mx-3 md:mx-0">
          <Paragraph
            title={content.title}
          >
            <strong>{content.subtitle}</strong>
            <p className="pt-[6px]">{content.description}</p>
          </Paragraph>
          </div>

          <div className="mx-3 md:mx-0 grid md:grid-cols-3 lg:grid-cols-5 md:gap-4 mb-10 mt-12 md:mt-0">
            {content.items.map((item: any, index: number) => (
              <div key={item.title} className="px-4 md:px-0 py-3">
                <Image src={item.src} className="md:mb-3 mb-6 max-h-[80px]" alt={item.title} width={80} height={80} />
                <h4 className="text-xl font-medium mb-[6px]">{item.title}</h4>
                <p>{item.description}</p>
                {index < content.items.length - 1 && <div className="md:hidden border-b border-gray-100 py-3" />}
              </div>
            ))}
          </div>
          {content.webinaire && (
            <div className="mx-3 md:mx-0 lg:flex justify-between">
             <p className="md:max-w-[750px] text-gray-550 md:pb-0 pb-6">{content.webinaire.description}</p>
             <Button
                className="md:self-center"
                target="_blank"
                variant="primary_brand"
                href={content.webinaire.href}
              >
              {content.webinaire.button_title}
              </Button>
            </div>
          )}
          
          
          
      </div>
    </ContentSection>
  )
}
