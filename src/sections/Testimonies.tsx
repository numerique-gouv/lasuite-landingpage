import { SwiperWrapper } from '@/components/SwiperWrapper'
import { ContentSection } from '@/components/ContentSection'

import { Br } from '@/components/Br'

import Image, { StaticImageData } from 'next/image'
import { ReactElement } from 'react'

import AccountSvg from '@/assets/account.svg'
import AnctSvg from '@/assets/logo/anct.svg'
import InterieurSvg from '@/assets/logo/ministere-interieur.svg'
import EducationNationaleSvg from '@/assets/logo/education-nationale.svg'

interface CardProps {
  img: StaticImageData
  title: string
  key: string
  quote: ReactElement
  entity: string
}

const Card = ({ title, quote, img, entity }: CardProps) => (
  <div
    tabIndex={0}
    className="flex flex-col bg-white p-7 text-left flex-1 max-w-[36rem] lg:min-w-[18rem]"
  >
    <h3 className="h-[114px] w-[140px] relative">
      <Image
        src={img}
        layout={'fill'}
        objectFit={'contain'}
        alt={`Témoignage - ${entity}`}
      />
    </h3>
    <div className="flex flex-row items-center mt-7 gap-4 pb-5">
      <Image src={AccountSvg} height={60} width={60} alt="" />
      <p className="font-bold text-grey-2">{title}</p>
    </div>
    <blockquote className="text-body leading-6 text-pretty">{quote}</blockquote>
  </div>
)

const data: CardProps[] = [
  {
    quote: (
      <p>
        Je suis proviseur adjoint d’une cité scolaire.{' '}
        <strong>
          Tchap est une application respectueuse des données personnelles.
        </strong>{' '}
        Je m’en sers pour cloisonner le monde personnel et professionnel parce
        que le monde enseignant peut devenir invasif.{' '}
        <strong>
          Je m’en sers avec le personnel de l’éducation nationale en fonction
          des missions, avec des collègues du même bassin, aussi pour des
          échanges directs plus informels.
        </strong>
      </p>
    ),
    title: 'Agent',
    img: EducationNationaleSvg,
    key: 'educ-nat',
    entity: "Ministère de l'éducation nationale et de la jeunesse",
  },
  {
    quote: (
      <>
        <p>
          Je fais de l’animation de projets inter-collectivités donc j&apos;ai
          beaucoup de liens avec des partenaires de l’Etat.{' '}
          <strong>
            J’utilise Tchap parce que j&apos;étais intéressé par l’open source.
          </strong>
          <Br />
        </p>
        <p>
          <Br />
          Mon prédécesseur avait fait une expérimentation avec quelques
          collectivités mais nous{' '}
          <strong>
            on veut l&apos;utiliser tous les jours, pour l&apos;animation au
            quotidien des nos communautés.
          </strong>
        </p>
      </>
    ),
    title: 'Agent de la collectivité territoriale',
    img: AnctSvg,
    key: 'anct',
    entity: 'Agence nationale de la cohésion des territoires',
  },
  {
    quote: (
      <p>
        Avec la dernière mise à jour de Tchap, on a les{' '}
        <strong>mêmes fonctionnalités qu’avec WhatsApp,</strong> mais en{' '}
        <strong>plus confidentiel.</strong> Bravo !
      </p>
    ),
    title: 'Agent',
    img: InterieurSvg,
    key: 'interieur',
    entity: "Ministère de l'intérieur",
  },
  {
    quote: (
      <p>
        Je suis enseignant et dans mon établissement j’ai mis en place le
        workflow de <strong>RESANA</strong> pour la gestion d’actions qui
        nécessitent plusieurs étapes de validation, cette GED permet de{' '}
        <strong>dématérialiser ce processus simplement</strong>.
      </p>
    ),
    title: 'Agent',
    img: EducationNationaleSvg,
    key: 'educ-nat-2',
    entity: "Ministère de l'éducation nationale et de la jeunesse",
  },
  {
    quote: (
      <p>
        La <strong>coédition</strong> nous permet de travailler sur des dossiers
        et partager les documents et ce, même avec des parties prenantes
        externes.{' '}
        <strong>
          Je promeus RESANA pour sa facilité de prise en main et l’ensemble des
          outils disponibles
        </strong>
        .
      </p>
    ),
    title: 'Agent',
    img: EducationNationaleSvg,
    key: 'educ-nat-4',
    entity: "Ministère de l'éducation nationale et de la jeunesse",
  },
]

export const Testimonies = () => (
  <ContentSection className="bg-white-1 text-left sm:text-center">
    <h2 className="text-3xl md:text-4xl font-bold max-w-[30rem] text-center px-4 ">
      Ils utilisent déjà des applications de La&nbsp;Suite…
    </h2>
    <p className="text-lg max-w-[38rem]">
      La Suite est un projet en construction, certaines de ses applications sont
      encore en phase de test, mais{' '}
      <strong>
        d&apos;autres sont déjà utilisées par des centaines de milliers
        d&apos;agents et toujours plus chaque jour !{' '}
      </strong>
      <Br />
      Découvrez les applications stars de La Suite :
    </p>
    <div className="w-full">
      <SwiperWrapper
        slides={data.map((testimony) => (
          <Card {...testimony} key={testimony.key} />
        ))}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
        }}
      />
    </div>
  </ContentSection>
)
