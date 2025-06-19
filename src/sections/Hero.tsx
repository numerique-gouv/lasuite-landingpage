import Image from 'next/image'
import { TITLE_SITE } from '@/constant'
import HeroHome from '@/assets/hero-home.png'
import { useTranslations } from '@/locales/useTranslations'

export const Hero = () => {
  const t = useTranslations()

  return (
    <div className="fade-in relative overflow-hidden bg-white md:pt-4">
      <div
        className={
          'flex flex-col justify-between items-start sm:items-center pt-3 sm:pt-9 px-3'
        }
      >
        <h1 className="w-full flex justify-center pt-6 sm:mt-12">
          <Image
            src={HeroHome}
            height={168}
            width={480}
            alt={TITLE_SITE}
            className={'max-w-[80%]'}
            priority
          />
        </h1>
        <div className="mx-auto max-w-[80vw] md:max-w-[52vw]">
          <h2 className="text-greyscale-900 md:text-5xl text-4xl sm:leading-[42px] md:leading-[52px] font-bold text-center pb-4">
            {t('homepage.hero.title')}
          </h2>
          <p className="text-center md:w-[80%] mx-auto text-greyscale-700 text-base">
            {t('homepage.hero.description')}
          </p>
        </div>
      </div>
    </div>
  )
}
