import type { ReactElement } from 'react'
import Image from 'next/image'
import { ContentSection } from '@/components/ContentSection'
import { CmsImage } from '@/components/CmsImage'
import SuiteTerritoriale from '@/assets/logo/suite-territoriale.svg'
import { EntryImage } from '@/cms/types'

export const Anct = ({
  description,
  logos = [],
}: {
  description: ReactElement | string
  logos: Array<{ alt: string } & EntryImage>
}) => (
  <ContentSection>
    <h2 className="text-3xl md:text-4xl font-bold flex flex-row items-center gap-6">
      <Image
        src={SuiteTerritoriale}
        height={132}
        width={250}
        alt="La Suite Territoriale"
      />
    </h2>
    <div className="flex flex-col gap-4 text-lg max-w-[45em] text-left">
      {description}
    </div>
    <div className="flex flex-col gap-8 items-center md:flex-row mb-10">
      <h3 className="sr-only">Acteurs de La Suite Territoriale</h3>
      {logos.map((logo, i) => (
        <CmsImage
          src={logo.image}
          {...logo.image_object}
          alt={logo.alt}
          key={i}
        />
      ))}
    </div>
  </ContentSection>
)
