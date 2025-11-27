import Image from 'next/image'
import { TITLE_SITE } from '@/constant'
import HeroHome from '@/assets/hero-home.svg'
import { useTranslations } from '@/locales/useTranslations'

export const Hero = () => {
  const t = useTranslations()

  return (
    <div className="mx-auto md:mt-4 fade-in relative overflow-hidden bg-white ">
      <div
        className={
          'flex flex-col justify-between items-start sm:items-center pt-3 sm:pt-9 px-3'
        }
      >
        <div className="w-full md:w-[80%] flex justify-center pt-6 sm:mt-12">
          <iframe
            className="aspect-video mb-8"
            src="https://www.youtube-nocookie.com/embed/X6c-mYOWrvA?si=f9gVEXkHZIHbm3nj"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            width="800"
          ></iframe>
          {/*          <Image
            src={HeroHome}
            height={168}
            width={480}
            alt={TITLE_SITE}
            className={'max-w-[80%]'}
            priority
          />*/}
        </div>
        <div className="text-center mx-auto max-w-[80vw] md:max-w-[72vw]">
          <h1 className="sr-only">{TITLE_SITE}</h1>
          <h2 className="text-greyscale-800 text-[2rem] md:text-[2.75rem] leading-[2.5rem] md:leading-[3rem] font-bold pb-4">
            {t('homepage.hero.title')}
          </h2>
          <p className="mb-4 mx-auto text-gray-550 text-base md:text-[1.25rem]">
            {t('homepage.hero.description')}
          </p>
        </div>
      </div>
    </div>
  )
}
