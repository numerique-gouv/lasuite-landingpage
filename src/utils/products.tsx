import TchapLogo from '@/assets/products/logo-tchap.svg'
import TchapTextLogo from '@/assets/products/logo-text-tchap.svg'
import TchapScreenshot from '@/assets/products/app-tchap.png'
// import TchapScreenshotMobile from '@/assets/products/app-tchap-mobile.png'
// import TchapScreenshotEn from '@/assets/products/app-tchap-en.png'
// import TchapScreenshotMobileEn from '@/assets/products/app-tchap-mobile-en.png'

import GristLogo from '@/assets/products/logo-grist.svg'
import GristTextLogo from '@/assets/products/logo-text-grist.svg'
import GristScreenshot from '@/assets/products/app-grist.png'
// import GristScreenshotMobile from '@/assets/products/app-grist-mobile.png'

import DocsSvg from '@/assets/products/logo-docs.svg'
import DocsTextSvg from '@/assets/products/logo-text-docs.svg'
import DocsScreenshot from '@/assets/products/app-docs.png'
// import DocsScreenshotMobile from '@/assets/products/app-docs-mobile.png'
// import DocsScreenshotEn from '@/assets/products/app-docs-en.png'
// import DocsScreenshotMobileEn from '@/assets/products/app-docs-mobile-en.png'
// import DocsScreenshotBox from '@/assets/products/app-docs.png'

import VisioLogo from '@/assets/products/logo-visio.svg'
import VisioTextLogo from '@/assets/products/logo-text-visio.svg'
import VisioScreenshot from '@/assets/products/app-visio.png'
// import VisioScreenshotMobile from '@/assets/products/app-visio-mobile.png'
// import VisioScreenshotEn from '@/assets/products/app-visio-en.png'
// import VisioScreenshotMobileEn from '@/assets/products/app-visio-mobile.png'

import MessagerieLogo from '@/assets/products/logo-messagerie.svg'
import MessagerieTextLogo from '@/assets/products/logo-text-messagerie.svg'
import MessagerieScreenshot from '@/assets/products/app-messagerie.png'
// import MessagerieScreenshotMobile from '@/assets/products/app-messagerie-mobile.png'
// import MessagerieScreenshotEn from '@/assets/products/app-messagerie.png'
// import MessagerieScreenshotMobileEn from '@/assets/products/app-messagerie-mobile.png'

import FranceTransfertLogo from '@/assets/products/logo-ft.svg'
import FranceTransfertTextLogo from '@/assets/products/logo-text-ft.svg'
import FranceTransfertScreenshot from '@/assets/products/app-francetransfert.png'
// import FranceTransfertScreenshotMobile from '@/assets/products/app-france-transfert-mobile.png'
// import FranceTransfertScreenshotEn from '@/assets/products/app-france-transfert-en.png'
// import FranceTransfertScreenshotMobileEn from '@/assets/products/app-france-transfert-mobile-en.png'

import FichiersLogo from '@/assets/products/logo-fichiers.svg'
import FichiersTextLogo from '@/assets/products/logo-text-fichiers.svg'
import FichiersScreenshot from '@/assets/products/app-fichiers.png'
// import FichiersScreenshotMobile from '@/assets/products/app-drive-mobile.png'
// import FichiersScreenshotEn from '@/assets/products/app-drive-en.png'
// import FichiersScreenshotMobileEn from '@/assets/products/app-drive-mobile-en.png'

import { StaticImageData } from 'next/image'

export const LASUITE_PRODUCTS: Record<
  string,
  {
    logo: StaticImageData
    logoText?: StaticImageData
    screenshot?: StaticImageData
    screenshotMobile?: StaticImageData
    screenshotEn?: StaticImageData
    screenshotMobileEn?: StaticImageData
    screenshotBox?: StaticImageData
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
    logoText: TchapTextLogo,
    screenshot: TchapScreenshot,
    // screenshotMobile: TchapScreenshotMobile,
    // screenshotEn: TchapScreenshotEn,
    // screenshotMobileEn: TchapScreenshotMobileEn,
    keepRawScreenshot: true,
    name: 'Tchap',
    url: 'https://tchap.numerique.gouv.fr',
    caption: 'la messagerie instantanée de la sphère publique',
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
    logoText: FranceTransfertTextLogo,
    screenshot: FranceTransfertScreenshot,
    // screenshotMobile: FranceTransfertScreenshotMobile,
    // screenshotEn: FranceTransfertScreenshotEn,
    // screenshotMobileEn: FranceTransfertScreenshotMobileEn,
    name: 'France Transfert',
    url: 'https://francetransfert.numerique.gouv.fr/',
    description:
      'Envoyez et recevez facilement des fichiers volumineux, avec un service pensé pour les besoins de l’administration.',
  },
  Fichiers: {
    displayDetails: true,
    logo: FichiersLogo,
    logoText: FichiersTextLogo,
    screenshot: FichiersScreenshot,
    // screenshotMobile: FichiersScreenshotMobile,
    // screenshotEn: FichiersScreenshotEn,
    // screenshotMobileEn: FichiersScreenshotMobileEn,
    name: 'Fichiers',
    url: 'https://fichiers.numerique.gouv.fr/',
    description: 'Centralisez vos fichiers, partagez-les avec les bonnes personnes et gardez une organisation efficace.',
  },
  Visio: {
    displayDetails: true,
    logo: VisioLogo,
    logoText: VisioTextLogo,
    screenshot: VisioScreenshot,
    // screenshotMobile: VisioScreenshotMobile,
    // screenshotEn: VisioScreenshotEn,
    // screenshotMobileEn: VisioScreenshotMobileEn,
    name: 'Visio',
    url: '/produits/visio',
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
  Grist: {
    displayDetails: true,
    logo: GristLogo,
    logoText: GristTextLogo,
    screenshot: GristScreenshot,
    // screenshotMobile: GristScreenshotMobile,
    // screenshotEn: GristScreenshot,
    // screenshotMobileEn: GristScreenshotMobile,
    // screenshotBox: GristScreenshotBox,
    name: 'Grist',
    url: '/produits/grist',
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
    status: 'BETA',
  },
  Docs: {
    displayDetails: true,
    logo: DocsSvg,
    logoText: DocsTextSvg,
    url: '/produits/docs',
    screenshot: DocsScreenshot,
    // screenshotMobile: DocsScreenshotMobile,
    // screenshotEn: DocsScreenshotEn,
    // screenshotMobileEn: DocsScreenshotMobileEn,
    // screenshotBox: DocsScreenshotBox,
    name: 'Docs',
    caption:
      'la solution de prise de notes collaboratives qui vous permet de vous concentrer sur votre contenu',
    description:
      "L'éditeur de texte collaboratif qui privilégie le contenu sur la mise en forme.",
  },
  Messagerie: {
    displayDetails: true,
    logo: MessagerieLogo,
    logoText: MessagerieTextLogo,
    screenshot: MessagerieScreenshot,
    // screenshotMobile: MessagerieScreenshotMobile,
    // screenshotEn: MessagerieScreenshotEn,
    // screenshotMobileEn: MessagerieScreenshotMobileEn,
    name: 'Messagerie',
    url: 'https://messagerie.numerique.gouv.fr/',
    caption:
      'une boite mail et agenda open-source sécurisés pour les petites équipes',
    description: 'Accédez à votre adresse mail pro et gérez vos échanges du quotidien.',
    status: 'BETA',
  }
}
