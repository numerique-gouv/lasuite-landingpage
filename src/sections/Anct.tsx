import Image from 'next/image'
import { ContentSection } from '@/components/ContentSection'
import SuiteTerritoriale from '@/assets/logo/suite-territoriale.svg'
import type { ReactElement } from 'react'

export const Anct = ({
  description,
  logos = [],
}: {
  description: ReactElement | string
  logos: { image: string; alt: string }[]
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
        <img src={logo.image} alt={logo.alt} key={i} />
      ))}
    </div>
  </ContentSection>
)
