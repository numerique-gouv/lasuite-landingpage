import Image from 'next/image'
import { SwiperWrapper } from '@/components/SwiperWrapper'
import { ContentSection } from '@/components/ContentSection'
import { Br } from '@/components/Br'

import ProConnectSvg from '@/assets/pro-connect.svg'
import ProConnectButtonSvg from '@/assets/pro-connect-button.svg'

interface CardProps {
  title: string
  target: string
  text: string
}

const Card = ({ title, target, text }: CardProps) => (
  <div className="bg-white-0 p-8 w-full text-left">
    <h3>
      <span className="font-extrabold text-3xl text-blue-1">{title}</span>
      <Br className="inline" />
      <span className="text-lg text-grey-1">
        pour&nbsp;<strong>{target}</strong>
      </span>
    </h3>
    <p className="mt-8 text-lg text-grey-1 text-pretty">{text}</p>
  </div>
)

const data: CardProps[] = [
  {
    title: 'Simple',
    target: "l'Agent Public.",
    text: "Une seule connexion suffit à accéder à toutes les applications de La Suite. Fini la multitude d'identifiants et de mots de passes !",
  },
  {
    title: 'Efficace',
    target: 'les Organisations.',
    text: 'Les applications de La Suite sont interconnectées, ce qui facilite la collaboration entre les différentes organisations de la sphère publique.',
  },
  {
    title: 'Souveraine',
    target: 'Nous.',
    text: 'Les applications de La Suite sont des Communs Numériques Libres et contribuent ainsi à notre souveraineté numérique.',
  },
]

export const ProConnect = () => (
  <ContentSection className="bg-white-1 text-left sm:text-center">
    <h2 className="px-4 text-3xl md:text-4xl font-bold text-center">
      Connecter tous les intervenants <Br /> de la sphère publique
    </h2>
    <Image src={ProConnectSvg} height={246} width={540} alt="" />
    <p className="text-lg text-grey-1 max-w-[44rem]">
      Le bouton Pro Connect est au cœur de La Suite numérique. <Br />
      Au même titre que France Connect relie les services publics numériques des
      citoyens et citoyennes,{' '}
      <strong>
        Pro Connect crée le lien entre les outils numériques des professionnels
        de la sphère publique.
      </strong>
    </p>
    <Image src={ProConnectButtonSvg} height={150} width={350} alt="" />
    <h3 className="text-2xl text-blue-1 font-bold">
      Grâce au bouton Pro Connect, La Suite permet une action&nbsp;…
    </h3>
    <div className="hidden md:flex flex-row gap-3 md:gap-6 max-w-[54em]">
      {data.map((content) => (
        <Card {...content} key={content.title} />
      ))}
    </div>
    <div className="w-full md:hidden">
      <SwiperWrapper
        slides={data.map((content) => (
          <Card {...content} key={content.title} />
        ))}
      />
    </div>
  </ContentSection>
)
