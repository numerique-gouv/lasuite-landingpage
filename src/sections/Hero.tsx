import Image from 'next/image'
import { Callout } from '@/components/Callout'
import { URL_SITE } from '@/constant'

import heroImage from '@/assets/hero-desktop.png'
import heroImageMobile from '@/assets/hero-mobile.webp'
import LogoSvg from '@/assets/logo/suite-numerique.svg'
import type { ReactElement } from 'react'
import { useTranslations } from '@/locales/useTranslations'

export const Hero = ({
  intro,
  callout,
}: {
  intro: ReactElement | string
  callout: ReactElement | string
}) => {
  const t = useTranslations()
  return (
    <div className="hero relative overflow-hidden bg-white ">
      <div className="flex flex-col justify-between items-start sm:items-center px-8 py-10 sm:py-20 md:bg-[url(/assets/bg-nid-abeille.webp)] md:bg-no-repeat md:bg-center">
        <h1 className="w-full flex justify-center pb-11">
          <Image
            src={LogoSvg}
            height={168}
            width={480}
            alt={URL_SITE}
            className="max-w-[80%]"
            priority
          />
        </h1>
        <div className="text-lg text-body max-w-[44rem] text-left sm:text-center pb-8 md:pb-0">
          {intro}
        </div>
        <Image
          src={heroImage}
          width={1000}
          alt={t('homepage.hero_img_alt')}
          className="mr-[-12%] md:flex z-10"
          priority
          placeholder="blur"
        />
        <Callout>
          La Suite numérique fédère agents et professionnels autour d'applications open-source interconnectées pour simplifier leur quotidien
        </Callout>
      </div>
    </div>
  )
}
