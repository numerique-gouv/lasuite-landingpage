import TchapLogo from '@/assets/products/tchap.svg'
import TchapScreenshot from '@/assets/products/app-tchap.png'
import TchapScreenshotMobile from '@/assets/products/app-tchap-mobile.png'

import GristLogo from '@/assets/products/grist.svg'
import GristScreenshot from '@/assets/products/app-grist.png'
import GristScreenshotMobile from '@/assets/products/app-grist-mobile.png'

import DocsSvg from '@/assets/products/docs.svg'
import DocsScreenshot from '@/assets/products/app-docs.png'
import DocsScreenshotMobile from '@/assets/products/app-docs-mobile.png'

import VisioLogo from '@/assets/products/visio.svg'
import VisioScreenshot from '@/assets/products/app-visio.png'
import VisioScreenshotMobile from '@/assets/products/app-visio-mobile.png'

import MessagerieLogo from '@/assets/products/messagerie.svg'
import MessagerieScreenshot from '@/assets/products/app-messagerie.png'
import MessagerieScreenshotMobile from '@/assets/products/app-messagerie-mobile.png'

import FranceTransfertLogo from '@/assets/products/france_transfert.svg'
import FranceTransfertScreenshot from '@/assets/products/app-france-transfert.png'
import FranceTransfertScreenshotMobile from '@/assets/products/app-france-transfert-mobile.png'

import ResanaLogo from '@/assets/products/resana.svg'
import ResanaScreenshot from '@/assets/products/resana_screenshot.webp'

import WebinaireLogo from '@/assets/products/webinaire.svg'
import WebinaireScreenshot from '@/assets/products/webinaire_screenshot.webp'

import { StaticImageData } from 'next/image'
import AudioConfSvg from '@/assets/products/audioconf.svg'
import ContactSvg from '@/assets/products/contact.svg'
import EquipesSvg from '@/assets/products/equipes.svg'

export const DINUM_PRODUCTS: Record<
  string,
  {
    logo: StaticImageData
    screenshot?: StaticImageData
    screenshotMobile?: StaticImageData
    keepRawScreenshot?: boolean
    name?: string
    url?: string
    caption?: string
    description?: string
    items?: React.ReactNode[]
    displayDetails?: boolean
    status?: string
  }
> = {
  Tchap: {
    displayDetails: true,
    logo: TchapLogo,
    screenshot: TchapScreenshot,
    screenshotMobile: TchapScreenshotMobile,
    keepRawScreenshot: true,
    name: 'Tchap',
    url: 'https://tchap.beta.gouv.fr/',
    caption: 'la messagerie instantanée de la sphère publique',
    description:
      'La messagerie instantanée sécurisée pour communiquer où que vous soyez.',
    items: [
      <>
        <strong>Retrouvez tous vos interlocuteurs</strong> de la sphère publique
      </>,
      <>
        <strong>Créez et gérez des salons</strong>, avec différents niveaux
        d’accès
      </>,
      <>
        Faites des <strong>appels ou des visios</strong> en 1:1 en un clic
      </>,
    ],
  },
  'France Transfert': {
    displayDetails: true,
    logo: FranceTransfertLogo,
    screenshot: FranceTransfertScreenshot,
    screenshotMobile: FranceTransfertScreenshotMobile,
    name: 'France Transfert',
    url: 'https://francetransfert.numerique.gouv.fr/',
    caption: 'partagez vos fichiers en toute sécurité',
    description:
      'Le service sécurisé pour envoyer et recevoir des fichiers volumineux.',
    items: [
      <>
        Transférez des <strong>fichiers lourds</strong>
      </>,
    ],
  },
  Webinaire: {
    displayDetails: true,
    logo: WebinaireLogo,
    screenshot: WebinaireScreenshot,
    name: 'Webinaire',
    url: 'https://webinaire.numerique.gouv.fr/',
    caption: 'la plateforme de webinaires dédiée à la sphère publique',
    description:
      'Organisez et participez à des webinaires en toute simplicité. Planifiez, diffusez et collaborez en direct avec vos collègues, le tout dans un environnement sécurisé',
    items: [
      <>
        <strong>Partagez votre écran</strong>, une présentation ou un tableau
        blanc collaboratif
      </>,
      <>
        <strong>Enregistrez la vidéo</strong> et partagez la aux participants
      </>,
      <>
        <strong>Invitez des modérateurs</strong> et créez une salle d'attente
      </>,
    ],
  },
  Visio: {
    displayDetails: true,
    logo: VisioLogo,
    screenshot: VisioScreenshot,
    screenshotMobile: VisioScreenshotMobile,
    name: 'Visio',
    url: 'https://visio.numerique.gouv.fr/',
    caption:
      'La solution de visioconférence pour les agents de la sphère publique',
    description:
      'La visioconférence simple et efficace pour communiquer et collaborer.',
    items: [
      <>
        <strong>Lien personnalisés</strong>
      </>,
      <>
        Organisation de <strong>sondages</strong>
      </>,
    ],
    status: 'BETA',
  },
  Resana: {
    displayDetails: true,
    logo: ResanaLogo,
    screenshot: ResanaScreenshot,
    name: 'Resana',
    url: 'https://resana.numerique.gouv.fr/public/',
    caption: 'l’espace de stockage partagé par plus de 400000 agents publics',
    description:
      'Stockez tous vos fichiers (documents, images, feuilles de calcul)  à un seul endroit. Organisez vos espaces et partagez-les à qui  vous voulez, en toute sécurité',
    items: [
      <>
        <strong>Stockez et partagez</strong> des fichiers
      </>,
      <>
        <strong>Coéditez des documents</strong> en ligne (textes, tableurs et
        présentations)
      </>,
      <>
        Créez des <strong>questionnaires</strong> et des <strong>votes</strong>{' '}
        en ligne
      </>,
    ],
  },
  Grist: {
    displayDetails: true,
    logo: GristLogo,
    screenshot: GristScreenshot,
    screenshotMobile: GristScreenshotMobile,
    name: 'Grist',
    url: 'https://grist.numerique.gouv.fr/',
    caption: 'un tableur collaboratif simple,  flexible et puissant',
    description:
      'Le tableur collaboratif pour structurer vos bases de données.',
    items: [
      <>
        <strong>Construisez des outils métiers</strong> sans avoir à coder
      </>,
      <>
        Gagnez du temps dans le <strong>suivi de vos missions</strong>
      </>,
      <>
        <strong>Travaillez sereinement à plusieurs</strong> sur vos jeux de
        données
      </>,
    ],
  },
  Docs: {
    displayDetails: true,
    logo: DocsSvg,
    url: 'https://docs.numerique.gouv.fr',
    screenshot: DocsScreenshot,
    screenshotMobile: DocsScreenshotMobile,
    name: 'Docs',
    caption:
      'la solution de prise de notes collaboratives qui vous permet de vous concentrer sur votre contenu',
    description:
      "L'éditeur de texte collaboratif qui privilégie le contenu sur la mise en forme.",
    status: 'BETA',
    items: [
      <>
        <strong>Invitez vos collègues</strong> ou partagez un lien d'édition
      </>,
      <>
        <strong>Collaborez en temps réel</strong> sur vos documents
      </>,
      <>
        <strong>Exportez</strong> vos documents et faites les circuler
      </>,
      <>
        <strong>Hors-ligne ?</strong> Vous pouvez{' '}
        <strong>continuer d'éditer</strong> vos documents
      </>,
    ],
  },
  Messagerie: {
    displayDetails: true,
    logo: MessagerieLogo,
    screenshot: MessagerieScreenshot,
    screenshotMobile: MessagerieScreenshotMobile,
    name: 'Messagerie',
    url: 'https://webmail.numerique.gouv.fr/',
    caption:
      'une boite mail et agenda open-source sécurisés pour les petites équipes',
    description: 'La messagerie professionnelle des agents de l’État.',
    status: 'BETA',
    items: [
      <>
        <strong>Gérez votre boîte aux lettres</strong> avec une interface
        dernière génération
      </>,
      <>
        <strong>Partagez vos agendas</strong> facilement
      </>,
    ],
  },
  AudioConf: {
    displayDetails: false,
    logo: AudioConfSvg,
    url: 'https://www.numerique.gouv.fr/outils-agents/audioconference-etat/',
  },
  Contact: {
    displayDetails: false,
    logo: ContactSvg,
  },
  Equipes: {
    displayDetails: false,
    logo: EquipesSvg,
  },
}
