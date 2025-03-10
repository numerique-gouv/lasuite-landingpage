import { ReactNode, useEffect } from 'react'
import { Layout } from '@/components/Layout'
import { ContentSection } from '@/components/ContentSection'
import { DoubleBlock } from '@/sections/DoubleBlock'
import { Button } from '@/components/Button'
import { Callout } from '@/components/Callout'
import Image from 'next/image'
import SuiteLogo from '@/assets/logo/suite-numerique.svg'
import GristGouvLogo from '@/assets/grist-summit/gristgouv-hex.svg'
import GristDinum from '@/assets/grist-summit/grist-and-dinum.png'
import FFG from '@/assets/grist-summit/ffg.png'

const ThemeIcon = ({
  theme,
  size,
  withAlt = true,
}: {
  theme: 'real-world' | 'power-user' | 'commons'
  size?: 'xs'
  withAlt?: boolean
}) => {
  const label = `Theme: ${
    theme === 'real-world'
      ? `Real-world Grist Examples`
      : theme === 'power-user'
        ? 'Become a Grist Power User'
        : 'The La Suite Project and Digital Commons'
  }`
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size === 'xs' ? 18 : 24}
      height={size === 'xs' ? 18 : 24}
      fill="currentColor"
      className="text-dsfr-info-1 block"
      {...(withAlt
        ? {
            role: 'img',
            'aria-label': label,
          }
        : { 'aria-hidden': true })}
    >
      {withAlt && <title>{label}</title>}
      {theme === 'real-world' && (
        <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
      )}
      {theme === 'power-user' && (
        <path d="M15.9994 2V4H14.9994V7.24291C14.9994 8.40051 15.2506 9.54432 15.7357 10.5954L20.017 19.8714C20.3641 20.6236 20.0358 21.5148 19.2836 21.8619C19.0865 21.9529 18.8721 22 18.655 22H5.34375C4.51532 22 3.84375 21.3284 3.84375 20.5C3.84375 20.2829 3.89085 20.0685 3.98181 19.8714L8.26306 10.5954C8.74816 9.54432 8.99939 8.40051 8.99939 7.24291V4H7.99939V2H15.9994ZM13.3873 10.0012H10.6115C10.5072 10.3644 10.3823 10.7221 10.2371 11.0724L10.079 11.4335L6.12439 20H17.8734L13.9198 11.4335C13.7054 10.9691 13.5276 10.4902 13.3873 10.0012ZM10.9994 7.24291C10.9994 7.49626 10.9898 7.7491 10.9706 8.00087H13.0282C13.0189 7.87982 13.0119 7.75852 13.0072 7.63704L12.9994 7.24291V4H10.9994V7.24291Z"></path>
      )}
      {theme === 'commons' && (
        <path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 16.3996 19.1598 20.1355 15.2122 21.4732L14.9859 21.5469L12.082 13.997C13.151 13.95 14.001 13.0544 14.001 12C14.001 10.8954 13.1055 10 12.001 10C10.8964 10 10.001 10.8954 10.001 12C10.001 13.0768 10.8519 13.9548 11.918 13.9983L9.01501 21.5466L8.78975 21.4732C4.84212 20.1355 2.00098 16.3996 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 14.9201 5.56547 17.4747 7.90198 18.8715L9.38145 15.023C8.5358 14.2896 8.00098 13.2073 8.00098 12C8.00098 9.79086 9.79184 8 12.001 8C14.2101 8 16.001 9.79086 16.001 12C16.001 13.2075 15.466 14.29 14.62 15.0234C15.1861 16.4969 15.6797 17.7803 16.0998 18.8729C18.4362 17.4751 20.001 14.9203 20.001 12C20.001 7.58172 16.4193 4 12.001 4Z"></path>
      )}
    </svg>
  )
}

/** specific timeslots shenanigans to take less space on unimportant stuff
 * yes this is a mess
 **/
const adjustVerticalSpaceAndPos = (hourAndMinutes: number) => {
  let verticalPosAdjustment = 0
  let verticalSpace = 0
  if ([9, 10, 12.5, 15.5].includes(hourAndMinutes)) {
    verticalSpace = 1
  }
  if (hourAndMinutes !== 9) {
    verticalPosAdjustment -= 1
  }
  if (hourAndMinutes > 10) {
  }
  if (hourAndMinutes > 12.5) {
    verticalPosAdjustment -= 5
  }
  if (hourAndMinutes > 14) {
    verticalPosAdjustment += 1
  }
  if (hourAndMinutes > 15.5) {
  }
  return { verticalPosAdjustment, verticalSpace }
}

const AgendaTimespot = ({
  fr,
  en,
  rows = 1,
}: {
  fr: string
  en: string
  rows?: number
}) => {
  const fullTimeslot = fr.endsWith('h') ? `${fr}00` : fr
  const hour = Number(fullTimeslot.slice(0, -3))
  const minutes = Number(fullTimeslot.slice(-2))
  const hourAndMinutes = hour + minutes / 60
  let verticalPos = 1 + (hour - 9) * 4 + (minutes > 0 ? (minutes / 60) * 4 : 0)
  const adjustment = adjustVerticalSpaceAndPos(hourAndMinutes)
  verticalPos += adjustment.verticalPosAdjustment
  return (
    <span
      aria-hidden="true"
      className={`sticky left-0 flex flex-col z-10 bg-white text-right p-2 lg:p-4 pl-0 col-start-1 text-dsfr-info-1 row-start-${verticalPos} row-span-${rows}`}
    >
      <span className="text-sm lg:text-base">{fr}</span>
      <span className="text-xxs lg:text-xs italic ">{en}</span>
    </span>
  )
}

const AgendaRooms = ({ row }: { row: number }) => {
  return (
    <>
      <span
        aria-hidden="true"
        className={`text-center h-min text-dsfr-info-1 text-sm p-2 h-m lg:p-4 col-start-2 row-start-${row}`}
      >
        Main Stage
      </span>
      <span
        aria-hidden="true"
        className={`text-center h-min text-dsfr-info-1 text-sm p-2 h-m lg:p-4 col-start-3 row-start-${row}`}
      >
        Big Table
      </span>
      <span
        aria-hidden="true"
        className={`text-center h-min text-dsfr-info-1 text-sm p-2 h-m lg:p-4 col-start-4 row-start-${row}`}
      >
        Classrooms
      </span>
    </>
  )
}

const AgendaItem = ({
  time,
  stage,
  duration,
  theme,
  type,
  title,
  author,
  children,
}: {
  time:
    | '9h'
    | '9h30'
    | '9h45'
    | '10h'
    | '10h30'
    | '11h'
    | '11h15'
    | '11h30'
    | '12h'
    | '12h30'
    | '14h'
    | '14h30'
    | '15h'
    | '15h30'
    | '16h'
    | '16h30'
    | '17h'
    | '17h15'
  title: ReactNode
  author?: string
  type?: 'informal'
  stage: 'main' | 'table' | 'classrooms' | 'break' | 'plenary'
  theme?: 'real-world' | 'power-user' | 'commons'
  duration: '15m' | '30m' | '45m' | '1h' | '1h30'
  className?: string
  children?: ReactNode
}) => {
  // col-span-3 row-span-1 row-span-2 row-span-3 row-span-4 row-span-5 row-span-6 col-start-1 col-start-2 col-start-3 col-start-4 col-start-5
  // row-start-1 row-start-2 row-start-3 row-start-4 row-start-5 row-start-6 row-start-7
  // row-start-8 row-start-9 row-start-10 row-start-11 row-start-12 row-start-13
  // row-start-14 row-start-15 row-start-16 row-start-17 row-start-18 row-start-19 row-start-20 row-start-21
  // row-start-22 row-start-23 row-start-24 row-start-25 row-start-26 row-start-27 row-start-28 row-start-29
  // row-start-30 row-start-31 row-start-32 row-start-33 row-start-34
  const fullTimeslot = time.endsWith('h') ? `${time}00` : time
  const hour = Number(fullTimeslot.slice(0, -3))
  const minutes = Number(fullTimeslot.slice(-2))
  const hourAndMinutes = hour + minutes / 60

  const stageStyles =
    stage === 'break'
      ? 'mb-2 md:mb-4 p-2 lg:p-4'
      : 'mb-2 md:mb-4 p-2 lg:p-4 lg:shadow border border-[#6a6af4] bg-[#fafafa] bsg-[#e3e3fd]'
  const typeStyles = type === 'informal' ? 'border-dashed' : ''

  let verticalPos = 1 + (hour - 9) * 4 + (minutes > 0 ? (minutes / 60) * 4 : 0)
  let verticalSpace =
    duration === '15m'
      ? 1
      : duration === '30m'
        ? 2
        : duration === '45m'
          ? 3
          : duration === '1h'
            ? 4
            : 6

  const adjustment = adjustVerticalSpaceAndPos(hourAndMinutes)
  verticalPos += adjustment.verticalPosAdjustment
  if (adjustment.verticalSpace) {
    verticalSpace = adjustment.verticalSpace
  }
  const stagesColStart = stage === 'main' ? 2 : stage === 'table' ? 3 : 4
  const inSpecificTrack =
    stage === 'main' || stage === 'table' || stage === 'classrooms'
  return (
    <div
      className={`${stageStyles} ${typeStyles}  relative ${
        inSpecificTrack
          ? `col-start-${stagesColStart}`
          : 'col-start-2 col-span-3'
      } row-start-${verticalPos} row-span-${verticalSpace}
      ${stage === 'main' && 'mr-1 md:mr-2'}
      ${stage === 'table' && 'ml-1 mr-1 md:ml-2 md:mr-2'}
      ${stage === 'classrooms' && 'ml-1 md:ml-2'}
      `}
    >
      <div className="max-w-[calc(100vw_-_60px_-_3rem)]">
        <h3
          className={`${stage === 'break' ? 'italic text-[inherit]' : 'text-blue-1'} text-sm lg:text-base mb-1`}
        >
          <span className="sr-only">
            {time}
            {stage === 'main'
              ? ' - Main Stage'
              : stage === 'table'
                ? '- Big Table'
                : stage === 'classrooms'
                  ? '- Classrooms'
                  : ''}
          </span>
          {title}
        </h3>
        <div className="absolute bottom-[2px] right-[2px] hover:cursor-help">
          {theme && <ThemeIcon size="xs" theme={theme} />}
        </div>
        <p className="sr-only">Duration: {duration}</p>
        {!!author && (
          <p
            className={`text-xs md:text-sm text-[#5959f3] ${!!children ? 'mb-2' : ''}`}
          >
            {author}
          </p>
        )}
        <div className={`text-xs md:text-sm`}>
          {typeof children === 'string' ? <p>{children}</p> : children}
        </div>
      </div>
    </div>
  )
}

export default function GristParisSummit2024() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        history.pushState(
          null,
          '',
          document.location.pathname + anchor.getAttribute('href')!
        )
        document.querySelector(anchor.getAttribute('href')!)?.scrollIntoView({
          behavior: 'smooth',
        })
      })
    })

    const content = document.querySelector<HTMLDivElement>(
      '.js-horizontal-scroll-content'
    )!
    const container = document.querySelector<HTMLDivElement>(
      '.js-horizontal-scroll-container'
    )!
    const shadow = document.querySelector<HTMLDivElement>(
      '.js-horizontal-scroll-shadow'
    )!
    const updateShadowOpacity = () => {
      const contentScrollWidth = content.scrollWidth - container.offsetWidth
      console.log(contentScrollWidth)

      const currentScroll = content.scrollLeft / contentScrollWidth
      shadow.style.opacity =
        contentScrollWidth > 0 ? `${1 - currentScroll}` : '0'
    }
    content.addEventListener('scroll', updateShadowOpacity)
    window.addEventListener('resize', updateShadowOpacity)
    updateShadowOpacity()
  }, [])
  return (
    <Layout title={'Grist Paris Summit 2024'}>
      <div className="hero relative overflow-hidden bg-white ">
        <div className="flex flex-col justify-between items-center py-12 md:py-24 px-4 md:px-8 bg-contain md:bg-auto bg-[url(/assets/bg-nid-abeille.webp)] bg-no-repeat bg-center">
          <div className="flex flex-col md:-ml-[30px]">
            <Image
              className="mb-2 -order-2 w-[60px] md:hidden h-auto"
              src={GristGouvLogo}
              alt=""
            />
            <div className="flex items-center gap-4">
              <Image
                className="mt-4 w-[60px] hidden md:block md:w-[120px] h-auto"
                src={GristGouvLogo}
                alt=""
              />
              <h1 className="text-blue-1 text-5xl md:text-6xl font-extrabold">
                Grist Paris <br />
                Summit
              </h1>
            </div>
            <p className=" md:ml-[136px] uppercase font-medium -order-1 text-lg md:text-2xl mb-2 text-blue-1">
              3 décembre 2O24
            </p>
            <p className="mt-4  md:ml-[136px] font-medium text-blue-1 text-xl md:text-2xl">
              La Faïencerie <br />
              <span className="text-lg md:text-xl font-normal">
                18 rue du Paradis, Paris 10e
              </span>
            </p>
          </div>
        </div>
      </div>
      <ContentSection>
        <div className="flex flex-col items-center">
          <Button size="large" href="#inscription">
            S'inscrire gratuitement à l'évènement
          </Button>
          <div className="mt-6 justify-center w-fit">
            <Button variant="outline" href="#agenda">
              Voir le programme
            </Button>
          </div>
        </div>
      </ContentSection>
      <ContentSection padding={false} gap="">
        <DoubleBlock image={GristDinum} fit="object-contain">
          <h2 className="text-3xl font-bold mb-4">L'évènement</h2>
          <p className="md:text-lg mb-4">
            <strong>Grist Paris Summit</strong> est un évènement co-organisé par
            l'équipe Grist Gouv de la{' '}
            <a
              className="underline hover:no-underline"
              href="https://www.numerique.gouv.fr/dinum/"
            >
              DINUM
            </a>
            , La Suite numérique, et l'
            <a
              className="underline hover:no-underline"
              href="https://agence-cohesion-territoires.gouv.fr/"
            >
              ANCT
            </a>
            .
          </p>
          <p className="md:text-lg mb-4">
            Il se tiendra le <strong>mardi 3 décembre à la Faïencerie</strong>{' '}
            (18 rue de Paradis, 75010 Paris).
          </p>
        </DoubleBlock>
        <DoubleBlock image={SuiteLogo} reverse={true} fit="object-contain p-8">
          <h2 className="font-bold mb-4 text-3xl">
            Grist et La Suite numérique
          </h2>
          <p className="md:text-lg">
            Grist est l'un des outils clés de{' '}
            <strong>La Suite numérique</strong> développée par la DINUM. Cette
            suite d'outils numériques, conçue pour les agents publics, vise à
            rendre le travail collaboratif plus simple, plus sécurisé et plus
            souverain en s'appuyant sur un écosystème d'outils open-source.
            <br />
            <br />
            Au sein de cette suite, Grist joue un rôle crucial en offrant une
            plateforme flexible de gestion de données, permettant aux agents de
            créer et de partager des bases de données et des feuilles de calcul
            de manière collaborative et interopérable avec les autres outils de
            La Suite.
          </p>
        </DoubleBlock>
      </ContentSection>

      <div className="bg-[#ecedf5]">
        <ContentSection center={false}>
          <div>
            <h2 className="font-bold mb-8 text-3xl">Opportunités</h2>
            <ul className="md:text-lg lg:list-disc">
              <li className="mb-8">
                <strong>Rencontre</strong> des cofondateurs de Grist Labs ainsi
                que des équipes de l'ANCT et de la DINUM, qui contribuent
                activement au développement et au déploiement de Grist dans
                l'administration française
              </li>
              <li className="mb-8">
                <strong>Échanges</strong> avec d’autres utilisateurs issus de
                ministères, de collectivités territoriales, ou d’organisations
                européennes, sur les usages de Grist dans différents contextes
                administratifs
              </li>
              <li className="mb-8">
                <strong>Démonstrations</strong> en direct de Grist, pour mieux
                comprendre ses fonctionnalités et son impact sur la gestion des
                données au sein des administrations
              </li>
              <li className="mb-8">
                <strong>Réflexions</strong> sur l’avenir de Grist dans La Suite
                numérique et sur son rôle dans l'amélioration des pratiques
                collaboratives dans le secteur public
              </li>
              <li className="mb-8">
                <strong>Découverte</strong> de La Suite numérique
              </li>
            </ul>
          </div>
        </ContentSection>
      </div>

      <ContentSection background="gray" gap="">
        <h2 className="font-bold mb-4 italic text-3xl" lang="en">
          We speak english!
        </h2>
        <div className="max-w-[600px]">
          <p className="text-base md:text-lg font-medium text-gray-3 text-center mb-4">
            La majeure partie de l'évènement se déroulera{' '}
            <strong>en anglais</strong> afin d'inclure nos partenaires
            internationaux dans les discussions.
          </p>
          <p className="md:text-lg font-medium text-gray-3 text-center">
            <strong>Une transcription et traduction</strong> en direct de
            certaines prises de paroles publiques aura lieu.
          </p>
        </div>
      </ContentSection>

      <ContentSection center={false}>
        <div className="w-full">
          <h2 className="font-bold mb-8 text-3xl" id="agenda">
            Programme
          </h2>
          <div className="md:text-lg">
            <p className="mb-4">
              Les portes ouvrent à 9h. Les conférences se déroulent en anglais
              dans trois salles (<i lang="en">Main Stage</i>,{' '}
              <i lang="en">Big Table</i> et <i lang="en">Classrooms</i>) et sont
              réparties en trois thématiques :
            </p>
            <ul className="mb-4 list-dsisc pl-4 md:pl-8 text-base">
              <li className="mb-2">
                <span className="">
                  <span className="inline-flex mr-2 align-middle">
                    <ThemeIcon theme="real-world" withAlt={false} />
                  </span>
                  <span>exemples concrets d'utilisation de Grist</span>
                </span>
              </li>
              <li className="mb-2">
                <span className="">
                  <span className="inline-flex mr-2 align-middle">
                    <ThemeIcon theme="power-user" withAlt={false} />
                  </span>
                  <span>devenir expert·e de Grist</span>
                </span>
              </li>
              <li className="mb-2">
                <span className="">
                  <span className="inline-flex mr-2 align-middle">
                    <ThemeIcon theme="commons" withAlt={false} />
                  </span>
                  <span>La Suite numérique et les communs numériques</span>
                </span>
              </li>
            </ul>
            <p className="mb-4">
              Des transcriptions en anglais et français ont lieu pour les
              conférences du <i lang="en">Main Stage</i> :
            </p>
            <ul className="md:text-lg pl-10 mb-8 list-disc">
              <li>
                <a
                  className="text-blue-1 hover:underline"
                  href="https://www.tadeo.fr/event/DINUM_03_12_24_FR/?path=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJib29raW5nX2lkIjoiMTQ2ODA3IiwidGl0bGUiOiJESU5VTSIsImJhc2VQYXRoIjoiaHR0cHM6XC9cL3d3dy50YWRlby5mclwvZXZlbnRcL0RJTlVNXzAzXzEyXzI0X0ZSXC8iLCJwcm90b2NvbCI6InYxLmNsaWVudC13ZWItYXBwIn0.xmM05oDjPz_idgYNlfsHOvFbC-5izgDpiuw5mADrWbc"
                >
                  Transcription en français
                </a>
              </li>
              <li>
                <a
                  className="text-blue-1 hover:underline"
                  href="https://www.tadeo.fr/event/DINUM_03_12_24_EN/?path=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJib29raW5nX2lkIjoiMTQ2ODA0IiwidGl0bGUiOiJESU5VTSIsImJhc2VQYXRoIjoiaHR0cHM6XC9cL3d3dy50YWRlby5mclwvZXZlbnRcL0RJTlVNXzAzXzEyXzI0X0VOXC8iLCJwcm90b2NvbCI6InYxLmNsaWVudC13ZWItYXBwIn0.C2VGbZaK4kVBOAHoK03Nu34C45eGIDDiJyXr4WiK46A"
                >
                  Transcription en anglais /{' '}
                  <i lang="en">English transcription</i>
                </a>
              </li>
            </ul>
            <p className="mb-8 text-base italic">
              Le programme est détaillé en anglais.
            </p>
          </div>

          <div className="relative js-horizontal-scroll-container -ml-4 -mr-4 md:ml-0 md:mr-0">
            <span
              className="absolute right-0 top-0 w-4 h-full z-10 pointer-events-none bg-[linear-gradient(270deg,_#00000020,_transparent)] js-horizontal-scroll-shadow"
              style={{ opacity: 0 }}
            ></span>

            <div
              id="schedule"
              className="js-horizontal-scroll-content mt-16 w-full overflow-x-auto"
            >
              <div
                lang="en"
                className="grist-summit-agenda-grid pr-2 min-w-[560px] sm:min-w-[760px] md:min-w-0 grid grid-cols-[60px_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] md:grid-cols-[100px_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)]"
              >
                <AgendaTimespot fr="9h" en="9 am" />
                <AgendaTimespot fr="9h30" en="9:30 am" />
                <AgendaTimespot fr="9h45" en="9:45 am" />
                <AgendaTimespot fr="10h" en="10 am" />
                <AgendaRooms row={5} />
                <AgendaTimespot fr="10h30" en="10:30 am" rows={2} />
                <AgendaTimespot fr="11h" en="11 am" rows={2} />
                <AgendaTimespot fr="11h30" en="11:30 am" rows={4} />
                <span
                  className="p-4 col-start-1 row-start-13"
                  aria-hidden="true"
                ></span>
                <span
                  className="p-4 col-start-1 row-start-14"
                  aria-hidden="true"
                ></span>
                <AgendaTimespot fr="12h30" en="12:30 pm" />
                <AgendaTimespot fr="14h" en="2 pm" rows={2} />
                <AgendaRooms row={17} />
                <AgendaTimespot fr="14h30" en="2:30 pm" rows={2} />
                <AgendaTimespot fr="15h" en="3 pm" rows={2} />
                <AgendaTimespot fr="15h30" en="3:30 pm" />
                <AgendaRooms row={23} />
                <AgendaTimespot fr="16h" en="4 pm" rows={2} />
                <AgendaTimespot fr="16h30" en="4:30 pm" rows={2} />
                <AgendaTimespot fr="17h" en="5 pm" />
                <AgendaTimespot fr="17h15" en="5:15 pm" />

                {/* 9h */}
                <AgendaItem
                  time="9h"
                  duration="30m"
                  title="Doors opening"
                  stage="break"
                >
                  Get a coffee and meet the team before the first conference
                </AgendaItem>
                {/* 9h30 */}
                <AgendaItem
                  time="9h30"
                  duration="15m"
                  title="What is La Suite?"
                  author="Arnaud Robin, La Suite CPO"
                  stage="plenary"
                ></AgendaItem>
                {/* 9h45 */}
                <AgendaItem
                  time="9h45"
                  duration="15m"
                  title="The French Strategy Around Digital Commons"
                  author="Pierre Pezziardi"
                  stage="plenary"
                ></AgendaItem>
                {/* 10h */}
                <AgendaItem
                  time="10h"
                  duration="30m"
                  title="Coffee Break and Networking"
                  stage="break"
                ></AgendaItem>
                {/* 10h30 */}
                <AgendaItem
                  time="10h30"
                  duration="1h"
                  theme="power-user"
                  stage="table"
                  title="What is Grist?"
                  author="Anais Concepcion, Grist Labs Co-CEO"
                ></AgendaItem>
                <AgendaItem
                  time="10h30"
                  theme="real-world"
                  stage="main"
                  duration="30m"
                  title="10 Grist use cases from French local governments & cities in 30 minutes"
                  author="Aude Zuliani, Raywan Serdoun and Nicolas Imbert, Grist.gouv"
                ></AgendaItem>
                <AgendaItem
                  time="10h30"
                  duration="30m"
                  theme="commons"
                  stage="classrooms"
                  author="La Suite team"
                  title="The other La Suite tools"
                ></AgendaItem>
                <AgendaItem
                  time="11h"
                  duration="30m"
                  theme="real-world"
                  stage="main"
                  title="Open Data and Data Collection Possibilities"
                  author="French open data team"
                ></AgendaItem>
                <AgendaItem
                  time="11h"
                  duration="15m"
                  theme="commons"
                  title="ProConnect: La Suite Single Sign-On"
                  stage="classrooms"
                  author="La Suite team"
                ></AgendaItem>
                <AgendaItem
                  time="11h15"
                  theme="commons"
                  stage="classrooms"
                  duration="15m"
                  title="Extending La Suite: the uMap example"
                  author="Virgille Deville, La Suite"
                ></AgendaItem>
                {/* 11h30 */}
                <AgendaItem
                  time="11h30"
                  duration="1h"
                  stage="main"
                  theme="power-user"
                  author="Dmitry Sagalovskiy, Grist Labs Founder and Co-CEO"
                  title="Adapting from Spreadsheets to Grist"
                ></AgendaItem>
                <AgendaItem
                  time="11h30"
                  duration="1h"
                  theme="real-world"
                  stage="classrooms"
                  title="Open Forum"
                  type="informal"
                >
                  Come and chat about anything Grist with the teams and the
                  audience
                </AgendaItem>
                <AgendaItem
                  time="11h30"
                  duration="1h"
                  theme="commons"
                  stage="table"
                  title="How to turn Grist into digital commons?"
                  type="informal"
                >
                  Come and chat with the audience and Grégoire from the
                  Grist.gouv team
                </AgendaItem>
                {/* 12h30 */}
                <AgendaItem
                  time="12h30"
                  duration="1h30"
                  title="Lunch break"
                  stage="break"
                >
                  No need to rush, you have an hour and a half to eat
                </AgendaItem>
                {/* 14h */}
                <AgendaItem
                  time="14h"
                  duration="30m"
                  title="Open Source Politics participatory budget example"
                  stage="plenary"
                  author="Bertille Mazari"
                ></AgendaItem>
                {/* 14h30 */}
                <AgendaItem
                  time="14h30"
                  theme="real-world"
                  stage="main"
                  duration="30m"
                  title="How to connect Grist to your data ecosystem: the ANCT example"
                  author="Raywan Serdoun and Nicolas Imbert, Grist.gouv"
                ></AgendaItem>
                <AgendaItem
                  time="14h30"
                  theme="power-user"
                  stage="table"
                  duration="1h"
                  title="Intro to Formulas"
                  author="Dmitry Sagalovskiy, Grist Labs Founder and Co-CEO"
                ></AgendaItem>
                <AgendaItem
                  time="14h30"
                  theme="commons"
                  stage="classrooms"
                  duration="30m"
                  title="Self-Hosting Grist"
                  author="Florent Fayolle, Grist.gouv"
                ></AgendaItem>
                <AgendaItem
                  time="15h"
                  theme="real-world"
                  stage="main"
                  duration="30m"
                  title="Grist for association management: climbing club example"
                  author="Raphaël Pierquin, Grist.gouv"
                ></AgendaItem>
                {/* 15h30 */}
                <AgendaItem
                  time="15h30"
                  duration="30m"
                  title="Networking Break"
                  stage="break"
                ></AgendaItem>
                {/* 16h */}
                <AgendaItem
                  time="16h"
                  duration="30m"
                  theme="real-world"
                  stage="main"
                  title="Collaborative Reporting"
                  author="Vincent Viers, Grist.gouv"
                ></AgendaItem>
                <AgendaItem
                  time="16h"
                  duration="30m"
                  theme="commons"
                  stage="classrooms"
                  title="How to contribute to Grist as a non-developer?"
                  author="Florent Fayolle and Grégoire Cutzach, Grist.gouv"
                ></AgendaItem>
                <AgendaItem
                  time="16h"
                  duration="1h"
                  theme="power-user"
                  stage="table"
                  title="How to code a custom widget"
                  author="Paul Fitzpatrick, CTO, and Jarosław Sadziński, software engineer, from Grist Labs"
                ></AgendaItem>
                <AgendaItem
                  time="16h30"
                  duration="30m"
                  theme="commons"
                  stage="classrooms"
                  title="Integrating Grist with other La Suite tools"
                  type="informal"
                >
                  Come and chat with the audience and Lucie from the Grist.gouv
                  team
                </AgendaItem>
                <AgendaItem
                  time="17h"
                  stage="plenary"
                  duration="15m"
                  title="Closing keynote"
                  author="Vincent Viers, Grist.gouv"
                ></AgendaItem>
                <AgendaItem
                  time="17h15"
                  duration="15m"
                  title="Cocktail 🎉"
                  stage="break"
                >
                  <div className="sm:flex gap-x-2">
                    <p>
                      Dramä Cocktail Bar, 48 rue de l’Échiquier, 75010 Paris{' '}
                      <br />
                      Sponsored by the{' '}
                      <a
                        href="https://codefor.fr/assemblies/grist-france"
                        target="_blank"
                        title="Fédération Française de Grist (nouvelle fenêtre)"
                        className="text-blue-1 hover:underline"
                      >
                        French Grist Federation (
                        <i lang="fr">Fédération Française de Grist</i>)
                      </a>
                    </p>
                    <div className="ml-auto mt-2 sm:-mt-6">
                      <Image src={FFG} alt="" width={160} height={64} />
                    </div>
                  </div>
                </AgendaItem>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      <div className="my-24">
        <Callout>
          Rejoignez-nous le 3 décembre pour découvrir comment Grist peut
          transformer la gestion des données au sein de vos équipes&nbsp;!
        </Callout>
      </div>
      <ContentSection center={false}>
        <div>
          <h2 className="font-bold mb-4 text-3xl">Ouvert à toutes et tous</h2>
          <div className="text-base md:text-lg">
            <p className="mb-4">
              Cet évènement est ouvert à toutes et tous, que vous soyez novice
              ou gristeur·ice chevronné·e.
            </p>
            <p className="mb-4">
              Sont attendus lors de cette journée, entre autres&nbsp;:
            </p>
            <ul className="list-disc pl-10 mb-4">
              <li className="mb-2">
                des agents publics utilisants déjà l'outil ou souhaitant le
                découvrir
              </li>
              <li className="mb-2">
                des acteurs privés intéressés par la solution
              </li>
              <li className="mb-2">
                les représentants d'autres pays européens qui collaborent avec
                la DINUM sur le projet de Suite Numérique
              </li>
              <li className="mb-2">
                les équipes qui font vivre le projet Grist au quotidien
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>
      <ContentSection center={false}>
        <div>
          <h2 className="font-bold mb-4 text-3xl">Le lieu</h2>
          <div className="text-base md:text-lg">
            <p className="mb-4">
              L'événement se déroule à la Faïencerie, 18 rue du Paradis, 75010.
            </p>
            <p className="mb-4">
              L'entièreté des espaces où ont lieu les conférences est accessible
              aux personnes à mobilité réduite.
            </p>
            <h3 className="font-bold text-xl mb-4">Accès en métro</h3>
            <ul className="list-disc pl-10 mb-4">
              <li className="mb-2">Gare de l'Est : Ligne 4, 5 & 7</li>
              <li className="mb-2">Château d'eau : Ligne 5</li>
              <li className="mb-2">Poissonnière : Ligne 7</li>
            </ul>
            <h3 className="font-bold text-xl mb-4">Parking à proximité</h3>
            <p>
              Parking Magenta Gare de l'Est, 2 square Alban Satragne, 75010
              Paris
            </p>
          </div>
        </div>
      </ContentSection>
      <ContentSection center={false}>
        <div>
          <h2 className="font-bold pt-4 mb-4 text-3xl" id="inscription">
            S'inscrire
          </h2>
          <p className="text-base md:text-lg">
            L'évènement est gratuit mais l'inscription via le formulaire
            ci-dessous est obligatoire.
          </p>
        </div>
      </ContentSection>
      <iframe
        src="https://docs.getgrist.com/forms/5mkpr2WwvTzXpfeo28jksf/55"
        height="1380px"
        width="100%"
      ></iframe>
    </Layout>
  )
}
