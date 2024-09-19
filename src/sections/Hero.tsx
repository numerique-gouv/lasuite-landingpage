import Image, { StaticImageData } from 'next/image'
import { Callout } from '@/components/Callout'
import { URL_SITE } from '@/constant'
import LogoSvg from '@/assets/logo/suite-numerique.svg'
import type { ReactElement } from 'react'
import { useTranslations } from '@/locales/useTranslations'

export const Hero = ({
  intro,
  callout,
  image,
  imageClassName,
  backgroundImage = true
}: {
  intro: ReactElement | string
  callout: ReactElement | string
  image: StaticImageData
  imageClassName?: string
  backgroundImage?: boolean
}) => {
  const t = useTranslations()
  const background = backgroundImage ? 'md:bg-[url(/assets/bg-nid-abeille.webp)] md:bg-no-repeat md:bg-center' : ''
  return (
    <div className="hero relative overflow-hidden bg-white ">
      <div className={"flex flex-col justify-between items-start sm:items-center px-8 py-10 sm:py-20 md:bg-no-repeat md:bg-center " + background}>
        <h1 className="w-full flex justify-center pb-11">
          <Image
            src={LogoSvg}
            height={168}
            width={480}
            alt={URL_SITE}
            className={"max-w-[80%]"}
            priority
          />
        </h1>
        <div className="text-blue-1 text-4xl font-bold max-w-[44rem] text-left sm:text-center pb-8 md:pb-0 text-center">
          {intro}
        </div>
        <Image
          src={image}
          width={1000}
          alt={t('homepage.hero_img_alt')}
          className={"flex z-10 " + imageClassName}
          priority
          placeholder="blur"
        />
        <Callout>
          {callout}
        </Callout>
      </div>
    </div>
  )
}
