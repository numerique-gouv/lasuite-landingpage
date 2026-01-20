import Image from 'next/image'
import { useRouter } from 'next/router'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import { Button } from '@/components/ui-kit-v2/Button'
import { useTranslations } from '@/locales/useTranslations'

export const Ecosystem = ({ content }: { content: any }) => {
  const t = useTranslations()
  const { locale } = useRouter()

  return (
    <ContentSection padding={false}>
      <div className="border-b border-gray-100 border-t md:py-10 py-12">
      <div className="py-0 md:py-20 md:px-[67px]">
        <div className="text-center px-6 md:px-0">
          <Paragraph
            title={content.title}
            description={content.description}
          />
        </div>

        {content.items && (
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {content.items.map((item: any, index: number) => (
              <div
                key={item.title}
                className="text-left rounded-lg border p-6 mx-3 md:mx-0"
                style={{
                  borderRadius: '8px',
                  border: '1px solid #DFE2EA',
                  background: 'radial-gradient(1576.36% 132.88% at 63.77% -0.29%, rgba(62, 93, 231, 0.04) 0%, rgba(62, 93, 231, 0.00) 100%), #F6F8F9',
                  boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.05)',
                }}
              >
                <div className="mb-4">
                  <Image
                    src={`/${item.icon}`}
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-lg font-bold mb-1.5">
                  {item.title}
                </h4>
                <p className="text-gray-850 text-sm pb-12">
                  {item.description}
                </p>
                {item.logos && item.logos.length > 0 && (
                  <div className="flex flex-wrap align-center gap-4 mt-12">
                    {item.logos.map((logo: string, logoIndex: number) => (
                      <Image
                        key={logoIndex}
                        src={`/${logo}`}
                        alt=""
                        width={60}
                        className="w-auto max-w-[80px]"
                        height={45}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-10 mx-6 md:mx-0">
          <Button
            href={content.button.href}
            target="_blank"
            className="mx-auto"
            variant="tertiary_bordered"
          >
            {content.button.title}
          </Button>
        </div>
      </div>
      </div>
    </ContentSection>
  )
}
