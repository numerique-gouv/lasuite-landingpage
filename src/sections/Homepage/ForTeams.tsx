import Image from 'next/image'
import { useRouter } from 'next/router'

import { Button } from '@/components/ui-kit-v2/Button'
import CalendarIcon from '@mui/icons-material/CalendarMonthRounded'
import { ContentSection } from '@/components/ContentSection'
import { Paragraph } from '@/components/Paragraph'
import LaSuiteShadow from '@/assets/logo/LaSuiteShadow.svg'

import { useTranslations } from '@/locales/useTranslations'

export const ForTeams = ({ content }: { content: any }) => {
  const t = useTranslations()
  const { locale } = useRouter()

  return (
    <ContentSection padding={false}>
      <div className="relative w-full md:py-10 py-12 border-b border-gray-100 md:mb-12">
        <div className="md:py-20 text-center px-6 md:px-0">
          <Image
            className="mx-auto md:pb-12 pb-8"
            src={LaSuiteShadow}
            alt="LaSuite"
            width="100"
            height="100"
          />
          <Paragraph title={content.title}>
            <p className="max-w-[700px] mx-auto pb-8 md:pb-10">
              {content.description}
            </p>
          </Paragraph>

          <Button
            target="_blank"
            className="mx-auto mt-10"
            variant="secondary_brand"
            href={content.button.href}
            icon={<CalendarIcon />}
            iconPosition="left"
          >
            {content.button.title}
          </Button>
        </div>
      </div>
    </ContentSection>
  )
}
