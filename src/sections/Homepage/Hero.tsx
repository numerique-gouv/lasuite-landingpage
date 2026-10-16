import Image from 'next/image'
import { TITLE_SITE, WEBINAIRE_URL } from '@/constant'
import { ContentSection } from '@/components/ContentSection'
import HeroHome from '@/assets/hero-home.png'
import HeroHomeMobile from '@/assets/hero-home-mobile.png'
import { Button } from '@/components/ui-kit-v2/Button'
import { SocialProof } from '@/components/content-blocks/SocialProof'
import MiniatureVideo from '@/assets/miniature_video.png'
import { useTranslations } from '@/locales/useTranslations'

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="20"
    viewBox="0 0 18 20"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3.00977 1.59084e-05C3.53759 0.00180775 4.05582 0.143185 4.51172 0.409196L16.5059 7.40529C16.96 7.6688 17.3384 8.04709 17.6006 8.50197C17.8628 8.95686 18.0005 9.473 18.001 9.99806C18.0014 10.5231 17.864 11.0389 17.6025 11.4942C17.3738 11.8926 17.0573 12.2325 16.6777 12.4883L16.5117 12.5928L4.51172 19.5928C4.0559 19.8587 3.53746 19.9992 3.00977 20.001C2.48212 20.0027 1.9634 19.8654 1.50586 19.6026C1.04822 19.3397 0.667673 18.9607 0.40332 18.5039C0.138962 18.047 -0.000156271 17.5279 1.3173e-07 17V3.00099C-0.00015623 2.47327 0.139096 1.95487 0.40332 1.49806C0.667678 1.04117 1.04815 0.661394 1.50586 0.398453C1.96338 0.135687 2.48216 -0.00170165 3.00977 1.59084e-05ZM2 17.001C1.99996 17.1769 2.04666 17.3497 2.13477 17.502C2.22288 17.6542 2.34942 17.7806 2.50195 17.8682C2.65439 17.9557 2.82714 18.0015 3.00293 18.001C3.1788 18.0004 3.35199 17.9538 3.50391 17.8652L15.5039 10.8653L15.5049 10.8643C15.656 10.7762 15.7811 10.6497 15.8682 10.4981C15.9552 10.3464 16.0011 10.1748 16.001 10C16.0008 9.825 15.9546 9.65262 15.8672 9.50099C15.7798 9.34946 15.6542 9.22356 15.5029 9.13576L15.501 9.13478L3.50391 2.13673C3.35193 2.04805 3.17888 2.00061 3.00293 2.00002C2.82717 1.9995 2.65437 2.04529 2.50195 2.13283C2.34947 2.22042 2.22288 2.34686 2.13477 2.49904C2.0467 2.65125 2 2.82416 2 3.00002V17.001Z"
      fill="currentColor"
    />
  </svg>
)

export const Hero = ({ content }: { content: any }) => {
  const t = useTranslations()
  const teaserVoiciLaSuiteUrl = '#'

  return (
    <div className="w-[100%] lg:max-w-[70em] px-4 max-w-container mx-auto overflow-hidden md:overflow-visible">
      <div className="lg:grid lg:grid-cols-5 lg:justify-between pt-6">
        <div className="text-left md:col-span-3 relative md:mt-6 z-10">
          <Image
            src={HeroHome}
            height={100}
            width={1000}
            alt=""
            className="max-w-[100%] hidden sm:block"
            priority
          />
          <Image
            src={HeroHomeMobile}
            height={100}
            width={1000}
            alt=""
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
              href={WEBINAIRE_URL}
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
              href={teaserVoiciLaSuiteUrl}
              className="block cursor-pointer"
              aria-label="Voir le teaser Voici LaSuite"
            >
              <div className="relative w-full">
                <Image
                  src={MiniatureVideo}
                  width="382"
                  height="215"
                  alt=""
                  priority
                />
              </div>
            </a>
            <Button
              href={teaserVoiciLaSuiteUrl}
              icon={<PlayIcon />}
              iconPosition="left"
              className="relative mx-auto"
              variant="tertiary_neutral"
              aria-label={`Vidéo Teaser Voici LaSuite - ${t('common.new_window')}`}
              target="_blank"
            >
              Voir le teaser
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <SocialProof socialProof={content.social_proof} />
      </div>
    </div>
  )
}
