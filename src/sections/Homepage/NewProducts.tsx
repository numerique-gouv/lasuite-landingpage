import Image from 'next/image'
import { useRouter } from 'next/router'

import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import { ProductCard } from '@/components/ProductCard'

import { useTranslations } from '@/locales/useTranslations'
import AIImage from '@/assets/ai.png'

const DINUM_PRODUCTS_GRID = [
  'Docs',
  'Grist',
]

export const NewProducts = ({ content }: { content: any }) => {
  const t = useTranslations()
  const { locale } = useRouter()

  return (
    <ContentSection>
      <div className="gap-0">
        <Paragraph
          title={content.title}
          description={content.description}
        />
        <div className="grid md:grid-cols-2 gap-8 md:mb-14">
          {DINUM_PRODUCTS_GRID.map((name) => (
            <div key={name}>
              <ProductCard 
                name={name}
                background="gray"
                content={content[name]}
                locale={locale}
              />
            </div>
          ))}
        </div>

        {content.AI && (
          <div
            className="rounded-lg border w-full mt-4 md:mt-0"
            style={{
              borderRadius: '8px',
              border: '1px solid #DFE2EA',
              background: 'radial-gradient(1576.36% 132.88% at 63.77% -0.29%, rgba(62, 93, 231, 0.04) 0%, rgba(62, 93, 231, 0.00) 100%), var(--Background-Surface-Tertiary, #F6F8F9)',
              boxShadow: '0 8px 20px 0 rgba(0, 0, 0, 0.03)',
            }}
          >
            <div className="grid md:grid-cols-3 h-full">
              <div className="col-span-2 p-6 md:p-8 md:pr-0">
                <h4 className="text-greyscale-800 text-xl font-bold mb-4">
                  {content.AI.title}
                </h4>
                <p className="text-gray-550 text-base">
                  {content.AI.description}
                </p>
              </div>
              <div className="hidden md:block flex-shrink-0">
                {AIImage && (
                  <Image
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                    src={AIImage}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </ContentSection>
  )
}
