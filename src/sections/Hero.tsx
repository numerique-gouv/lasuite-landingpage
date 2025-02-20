import Image, { StaticImageData } from 'next/image'
import { Callout } from '@/components/Callout'
import { TITLE_SITE } from '@/constant'
import HeroHome from '@/assets/hero-home.png'
import type { ReactElement } from 'react'
import { useTranslations } from '@/locales/useTranslations'

export const Hero = () => {
  const t = useTranslations()

  return (
    <div className="fade-in relative overflow-hidden bg-white">
      <div
        className={
          'flex flex-col justify-between items-start sm:items-center pt-16 pt-8 px-3'
        }
      >
        <h1 className="w-full flex justify-center pt-11 sm:mt-11">
          <Image
            src={HeroHome}
            height={168}
            width={480}
            alt={TITLE_SITE}
            className={'max-w-[80%]'}
            priority
          />
        </h1>
        <div className="mx-auto max-w-[70vw] md:max-w-[45vw]">
          <h2 className="text-greyscale-900 md:text-6xl text-5xl sm:leading-[52px] md:leading-[72px] font-bold text-center pb-4">
            L’espace de travail souverain
          </h2>
          <p className="text-center w-[80%] mx-auto text-greyscale-700 text-base">
            Créez. Organisez. Collaborez. Dans un environnement français et
            open-source.
          </p>
        </div>
      </div>
    </div>
  )
}
