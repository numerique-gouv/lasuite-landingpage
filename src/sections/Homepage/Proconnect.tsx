import Image from 'next/image'
import { useRouter } from 'next/router'

import { Button } from '@/components/ui-kit-v2/Button'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import ProConnectLogo from '@/assets/proconnect/logomark-proconnect.svg'

import { useTranslations } from '@/locales/useTranslations'

export const ProConnect = ({ content }: { content: any }) => {
  const t = useTranslations()
  const { locale } = useRouter()

  return (
    <ContentSection verticalPadding={false}>
      <div className="relative w-full md:py-10 py-12">
        <div className="py-0 md:py-20 text-center px-6 md:px-0">
          <Image
            className="mx-auto pb-8 md:pb-10"
            src={ProConnectLogo}
            alt="LaSuite"
            width="100"
            height="100"/>
          <Paragraph
            title={content.title}
          >
            <p className="md:max-w-[700px] mx-auto pb-12 md:pb-10">
              {content.description}
            </p>
          </Paragraph>

          <div className="grid md:grid-cols-3 mt-10 md:justify-center items-center px-6 md:px-0">
          {content.items && content.items.map((item: any, index: number) => (
            <div key={item.title} className="mx-auto w-full">
              <Image className="relative mx-auto mb-6" src={item.icon} alt={item.title} width={80} height={80} />
              <p className="text-brand-600 text-xl font-medium mb-3 md:mb-6">{item.title}</p>
              {index < content.items.length - 1 && <div className="md:hidden border-b border-gray-100 pt-6 mb-6" />}
            </div>
          ))}
          </div>

          <div className="mx-2 md:mx-0">
            <Button
              target="_blank"
              className="mx-auto mt-10"
              variant="neutral_bordered"
              href={content.button.href}
              icon={<InfoOutlinedIcon />}
              iconPosition="left"
            >
              {content.button.title}
            </Button>
          </div>
        </div>
      </div>
    </ContentSection>
  )
}
