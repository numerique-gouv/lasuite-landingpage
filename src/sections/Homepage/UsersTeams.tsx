import { useEffect, useRef } from 'react'
import Image, { StaticImageData } from 'next/image'

import { ContentSection } from '@/components/ContentSection'
import EducationNationaleLogo from '@/assets/logo/education-nationale.svg'
import MinistereInterieurLogo from '@/assets/logo/ministere-interieur.svg'
import AnctLogo from '@/assets/logo/anct.svg'

const TEAMS: Array<{ name: string; logo: StaticImageData; widthLogo: number }> =
  [
    {
      name: 'Anct',
      logo: AnctLogo,
      widthLogo: 180,
    },
    {
      name: 'Education Nationale',
      logo: EducationNationaleLogo,
      widthLogo: 130,
    },
    {
      name: "Ministère de l'intérieur",
      logo: MinistereInterieurLogo,
      widthLogo: 110,
    },
  ]

export const UsersTeams = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Vérifier que le contenu est assez large pour scroller
    if (scrollContainer.scrollWidth > scrollContainer.clientWidth) {
      setTimeout(() => {
        scrollContainer.scrollTo({
          left: 0,
          behavior: 'smooth',
        })
      }, 300)
    }
  }, [])
  return (
    <ContentSection>
      <div className="w-full">
        <div className="border border-greyscale-300 md:border-white py-4 md:py-6 rounded text-center">
          <p className="text-xs">La Suite est utilisée par les équipes de</p>
          <div
            ref={scrollRef}
            className="relative flex snap-x snap-mandatory justify-start md:justify-center gap-8 overflow-x-auto px-6"
          >
            {TEAMS.map((item, index) => (
              <div key={index} className="self-start shrink-0 snap-center my-5">
                <Image
                  width={item.widthLogo}
                  loading="lazy"
                  className="flex px-3"
                  src={item.logo}
                  alt={item.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentSection>
  )
}
