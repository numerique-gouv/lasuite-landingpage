import { Layout } from '@/components/Layout'
import { TITLE_SITE, URL_SITE } from '@/constant'
import { HomepageContent } from '@/components/HomepageContent'
import Image from 'next/image'
import LogoSvg from '@/assets/logo/suite-numerique.svg'
import TchapScreenshot from '@/assets/products/tchap_screenshot.png'
import TchapLogo from '@/assets/products/tchap.svg'
import ResanaScreenshot from '@/assets/products/resana_screenshot.png'
import ResanaLogo from '@/assets/products/resana.svg'
import WebinaireLogo from '@/assets/products/webinaire.svg'
import WebinaireScreenshot from '@/assets/products/webinaire_screenshot.png'
import VisioLogo from '@/assets/products/visio.svg'
import VisioScreenshot from '@/assets/products/visio_screenshot.png'
import PadLogo from '@/assets/products/pad.svg'
import PadScreenshot from '@/assets/products/pad_screenshot.png'
import GristLogo from '@/assets/products/grist.svg'
import GristScreenshot from '@/assets/products/grist_screenshot.png'
import FranceTransfertLogo from '@/assets/products/france_transfert.svg'
import FranceTransfertScreenshot from '@/assets/products/france_transfert_screenshot.png'
import MessagerieLogo from '@/assets/products/messagerie.svg'
import MessagerieScreenshot from '@/assets/products/messagerie_screenshot.png'
import heroImage from '@/assets/nuancier.webp'
import heroImageMobile from '@/assets/hero-mobile.webp'
import { Callout } from '@/components/Callout'
import { ContentSection } from '@/components/ContentSection'

export default function Products() {
  return (
    <Layout title={TITLE_SITE}>
      <Hero />
      <ProductsDetails />
    </Layout>
  )
}


const Hero = () => {
  return <div className='hero relative overflow-hidden bg-white '>
    <div
      className='flex flex-col justify-between items-start sm:items-center px-8 md:bg-[url(/assets/bg-nid-abeille.webp)] md:bg-no-repeat md:bg-center'>
      <Image
        src={heroImage}
        width={1000}
        alt={''}
        className='flex z-10'
        priority
        placeholder='blur'
      />
      <Callout>
        Un quotidien simplifié grâce aux outils numériques interconnectés, collaboratifs, innovants et souverains
      </Callout>
    </div>
  </div>
}

const PRODUCTS = [
  {
    logo: TchapLogo,
    screenshot: TchapScreenshot,
    name: 'Tchap',
    caption: 'la messagerie instantanée de la sphère publique',
    description: 'Envoyer des messages, faire des appels, et rechercher ses interlocuteurs sur l’annuaire',
    items: [
      <><strong>Retrouvez tous vos interlocuteurs</strong> de la sphère publique</>,
      <><strong>Créez et gérez des salons</strong>, avec différents niveaux d’accès</>,
      <>Faites des <strong>appels ou des visios</strong> en 1:1 en un clic</>,
    ],
  }, {
    logo: ResanaLogo,
    screenshot: ResanaScreenshot,
    name: 'Resana',
    caption: 'l’espace de stockage partagé par plus de 400000 agents publics',
    description: 'Stockez tous vos fichiers (documents, images, feuilles de calcul)  à un seul endroit. Organisez vos espaces et partagez-les à qui  vous voulez, en toute sécurité',
    items: [
      <><strong>Stockez et partagez</strong> des fichiers</>,
      <><strong>Coéditez des documents</strong> en ligne (textes, tableurs et présentations)</>,
      <>Créez des <strong>questionnaires</strong> et des <strong>votes</strong> en ligne</>,
    ],
  }, {
    logo: WebinaireLogo,
    screenshot: WebinaireScreenshot,
    name: 'Webinaire',
    caption: 'la plateforme de  webinaires dédiée à la sphère publique',
    description: 'Organisez et participez à des webinaires en toute simplicité. Planifiez, diffusez et collaborez en direct avec vos collègues, le tout dans un environnement sécurisé',
    items: [
      <><strong>Partagez votre écran</strong>, une présentation ou un tableau blanc collaboratif</>,
      <><strong>Enregistrez la vidéo</strong> et partagez la aux participants</>,
      <><strong>Invitez des modérateurs</strong> et créez une salle d'attente</>,
    ],
  }, {
    logo: VisioLogo,
    screenshot: VisioScreenshot,
    name: 'Webconf',
    caption: 'la solution de visioconférence pour les agents de la sphère publique',
    description: 'Tenez vos réunions à distance en toute simplicité. Connectez-vous avec vos collègues en toute sécurité, sans installation, pour des échanges fluides et efficaces',
    items: [
      <><strong>Lien personnalisés</strong></>,
      <>Organisation de <strong>sondages</strong></>,
    ],
  }, {
    logo: PadLogo,
    screenshot: PadScreenshot,
    name: 'Note Pad',
    caption: 'le meilleur moyen d’écrire et de partager vos notes au format Markdown',
    description: 'Créez, éditez et collaborez en ligne. Tout est sauvegardé automatiquement pour un travail fluide et sécurisé',
    items: [
      <><strong>Choisissez la vue</strong> que vous préférez : tout en markdown ou avec l’aperçu final.</>,
      <>Bénéficiez d’une <strong>correction orthographique</strong></>,
    ],
  }, {
    logo: GristLogo,
    screenshot: GristScreenshot,
    name: 'Grist',
    caption: 'un tableur collaboratif simple,  flexible et puissant',
    description: 'Créez, gérez et analysez vos données dans un environnement simple et intuitif. Collaborez en temps réel avec vos collègues tout en assurant la sécurité de vos informations',
    items: [
      <><strong>Construisez des outils métiers</strong> sans avoir à coder</>,
      <>Gagnez du temps dans le <strong>suivi de vos missions</strong></>,
      <><strong>Travaillez sereinement à plusieurs</strong> sur vos jeux de données</>,
    ],
  }, {
    logo: FranceTransfertLogo,
    screenshot: FranceTransfertScreenshot,
    name: 'France Transfert',
    caption: 'partagez vos fichiers en toute sécurité',
    description: 'Transférez vos documents en toute confiance, même les plus volumineux. Partagez facilement avec vos collègues, tout en garantissant la confidentialité et la sécurité des données',
    items: [
      <>Transférez des <strong>fichiers lourds</strong></>,
    ],
  }, {
    logo: MessagerieLogo,
    screenshot: MessagerieScreenshot,
    name: "Mail / OpenXchange",
    caption: "la première messagerie et agenda open-source  sécurisés de l’État",
    description: "Gérez vos emails et vos rendez-vous dans un environnement sécurisé conçu pour les besoins des agents du service public",
    items: [
      <><strong>Gérez votre boîte aux lettres</strong> avec une interface dernière génération</>,
      <><strong>Partagez vos agendas</strong> facilement</>,
    ]
  },
]

const ProductsDetails = () => {
  return <ContentSection>
    <div className='flex flex-col items-center gap-20'>
      {PRODUCTS.map(({ logo, screenshot, name, caption, description, items }, index) => (
        <div className='flex gap-6 flex-col md:flex-row' key={name}>
          <div className={'md:w-1/2 ' + (index % 2 === 0 ? 'md:order-1' : 'md:order-2')}>
            <div className='flex items-center gap-4'>
              <Image src={logo} alt={name + ' logo'}></Image>
              <h3 className='text-xl sm:text-2xl text-blue-1 font-bold'><span
                className='font-extrabold'>{name}</span>, {caption}</h3>
            </div>

            <div className='mt-4 font-base md:text-lg'>
              <p className='text-grey-3  font-bold'>
                {description}
              </p>
              <ul className='list-disc ml-4 mt-4'>
                {items.map((item, index) => (
                  <li key={index} className='text-grey-3'>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={'md:w-1/2 ' + (index % 2 === 0 ? 'md:order-2' : 'md:order-1')}>
            <Image src={screenshot} alt='Tchap screenshot'></Image>
          </div>
        </div>
      ))}
    </div>
  </ContentSection>
}
