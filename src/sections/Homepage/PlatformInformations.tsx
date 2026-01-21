import Image from 'next/image'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import { useTranslations } from '@/locales/useTranslations'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export const PlatformInformations = ({ content }: { content: any }) => {
  const t = useTranslations()

  return (
    <div className="bg-brand-550 py-12 md:py-[120px]">
      <ContentSection verticalPadding={false}>
        <div>
          <div className="mx-3 md:mx-0">
            {content.title && (
              <h3 className="text-gray-050 md:text-[2.75rem] text-3xl sm:leading-[42px] md:leading-[48px] font-bold pb-4">
                {content.title}
              </h3>
            )}
            {content.description && (
              <p className="text-gray-050 text-sm md:text-lg mb-12">
                {content.description}
                <a
                  className="text-gray-050 underline ml-1"
                  href={content.link.src}
                  target="_blank"
                >
                  {content.link.title}
                  <ArrowForwardIcon
                    className="ml-1"
                    style={{ fontSize: '1rem', verticalAlign: 'middle' }}
                  />
                </a>
              </p>
            )}
          </div>
          {content.items && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {content.items.map((item: any) => (
                <div
                  key={item.title}
                  className="bg-gray-000 p-6 rounded-lg border-1 border-gray-100"
                >
                  <div className="flex-shrink-0 pb-6">
                    <Image
                      src={`/${item.icon}`}
                      alt=""
                      width={40}
                      height={40}
                      className="w-12 h-12"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-850 text-lg font-medium mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </ContentSection>
    </div>
  )
}
