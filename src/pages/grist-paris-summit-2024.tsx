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

const ProgramItem = ({
  time,
  title,
  author,
  children,
}: {
  time: string
  title: string
  author?: string
  children?: ReactNode
}) => {
  return (
    <div className="flex flex-col mb-12 relative">
      <div className="rounded-full w-3 h-3 bg-dsfr-info-0 absolute -mt-1 top-[3.25rem] -left-8"></div>
      <p className="-order-1 bg-dsfr-blue-3 text-dsfr-info-1 font-bold w-fit rounded-md px-2 py-0 text-base md:text-lg mb-2">
        {time}
      </p>
      <h3 className="text-blue-1 font-bold text-xl md:text-2xl mb-2">
        {title}
      </h3>
      {!!author && (
        <p className="text-base md:text-xl text-blue-1 mb-2">{author}</p>
      )}
      {!!children && <div className="text-base md:text-lg">{children}</div>}
    </div>
  )
}

export default function GristParisSummit2024() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelector(anchor.getAttribute('href')!)?.scrollIntoView({
          behavior: 'smooth',
        })
      })
    })
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
        <div>
          <Button size="large" href="#inscription">
            S'inscrire gratuitement à l'évènement
          </Button>
          {/*
          program will be up soon, just keep this until we have the content to prevent having to think about how to display it later
          <div className="mt-6 justify-center">
            <Button variant="outline" href="#programme">
              Voir le programme
            </Button>
          </div> */}
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

      <ContentSection center={false}>
        <div>
          <h2 className="font-bold mb-8 text-3xl" id="programme">
            Programme
          </h2>
          <div className="md:text-lg">
            <p className="mb-4">
              Le programme détaillé sera bientôt disponible.
            </p>
          </div>
          {/* program will be up soon, just keep this until we have the content to prevent having to think about how to display it later
          <ul className="text-lg md:text-xl relative">
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 -left-[27px] w-[2px] h-full bg-[#e4e4f3]"
            ></div>
            <ProgramItem time="8h30" title="Ouverture des portes"></ProgramItem>
            <ProgramItem time="9h" title="Conférence d'ouverture">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                condimentum efficitur massa, vel gravida augue ultrices vel.
                Etiam massa leo, mattis at nunc nec, laoreet molestie ante.
              </p>
            </ProgramItem>
          </ul> */}
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
            Pas de panique si vous ne parlez pas anglais&nbsp;:{' '}
            <strong>une transcription et traduction</strong> en direct des
            prises de paroles publiques aura lieu.
          </p>
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
