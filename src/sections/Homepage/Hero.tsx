import Image from 'next/image'
import { TITLE_SITE } from '@/constant'
import { ContentSection } from '@/components/ContentSection'
import HeroHome from '@/assets/hero-home.png'
import HeroHomeMobile from '@/assets/hero-home-mobile.png'
import { Button } from '@/components/ui-kit-v2/Button'
import { SocialProof } from '@/components/content-blocks/SocialProof'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import MiniatureVideo from '@/assets/miniature_video.png'
import { useTranslations } from '@/locales/useTranslations'

export const Hero = ({ content }: { content: any }) => {
  const t = useTranslations()
  const videoUrl =
    'https://tube.numerique.gouv.fr/w/gzwjk8H5Pm4MqrcUo5eMPG?start=12s'

  return (
    <ContentSection padding={false}>
      <div className="lg:grid lg:grid-cols-5 lg:justify-between pt-6">
        <div className="text-left md:col-span-3 relative md:mt-6 px-6 z-10">
          <Image
            src={HeroHome}
            height={100}
            width={1000}
            alt={TITLE_SITE}
            className="max-w-[100%] hidden sm:block"
            priority
          />
          <Image
            src={HeroHomeMobile}
            height={100}
            width={1000}
            alt={TITLE_SITE}
            className="max-w-[100%] sm:hidden"
            priority
          />
          <h1 className="sr-only">{TITLE_SITE}</h1>
          <h2
            className="mt-6 text-greyscale-800 text-[2rem] md:text-[2.75rem] text-balance leading-[2.5rem] md:leading-[3rem] font-bold pb-4"
            dangerouslySetInnerHTML={{
              __html: content.title,
            }}
          ></h2>
          <p className="mb-4 mx-auto text-gray-550 text-base md:text-[1.25rem]">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-2 my-6">
            <Button href="#products" variant="default">
              {content.button_products.title}
            </Button>
            <Button
              href={content.button_start.href}
              variant="tertiary_bordered"
              target="_blank"
            >
              {content.button_start.title}
            </Button>
          </div>

          <span className="text-gray-550">
            <a
              className="text-gray-550 underline underline-offset-2"
              href="https://4f0df3d6.sibforms.com/serve/MUIFAM04omZ5l-BIAyEWSC8KKbXjrZ-mnM3gywzBFVt7yJJVATMb_Kct_JEuCEWaSiBnPSxUDSLkcMf-3DCTy1DHEjgVrxiY4BIZA43L5amMjiqTOpczMPvxkZfg--0pIED0XaSsrpxocCSicdRGPQGvszgHDnmaJfWaJuIDw5h0i3pDotP-XZpY-usa2LRZj6MadTh0C_sVMLHS"
              target="_blank"
              aria-label={`Inscrivez-vous au prochain webinaire - ${t('common.new_window')}`}
            >
              Inscrivez-vous
            </a>
            &nbsp;au prochain webinaire
          </span>
        </div>

        <div className="flex items-center col-span-2 justify-center pt-6">
          <div className="">
            <a
              href={videoUrl}
              target="_blank"
              className="block cursor-pointer"
              aria-label={`Regarder la vidéo - ${t('common.new_window')}`}
            >
              <div className="relative w-full">
                <Image
                  src={MiniatureVideo}
                  width="382"
                  height="215"
                  alt="Keynote La Suite Vidéo"
                  priority
                />
              </div>
            </a>
            <Button
              href={videoUrl}
              icon={<PlayArrowIcon />}
              iconPosition="left"
              className="relative mx-auto"
              variant="tertiary_neutral"
              aria-label={`Regarder la vidéo - ${t('common.new_window')}`}
              target="_blank"
            >
              Regarder la vidéo
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <SocialProof socialProof={content.social_proof} />
      </div>
    </ContentSection>
  )
}
