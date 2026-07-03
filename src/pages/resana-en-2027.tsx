import { BlockFAQ } from '@/components/content-blocks'
import { Button } from '@/components/ui-kit-v2/Button'
import { Footer } from '@/components/Footer'
import { ContentSection } from '@/components/ContentSection'
import SuiteLogo from '@/assets/logo/lasuite.svg'
import { useEffect, useState } from 'react'

import LogoGouvSvg from '@/assets/logo/gouv.svg'
import LogoResanaSvg from '@/assets/logo/resana-full.svg'
import LogoFichiersSvg from '@/assets/logo/fichiers.svg'
import LogoInterstisSvg from '@/assets/logo/interstis.svg'
import LogoShareSvg from '@/assets/logo/share.svg'

import bannerResana from '@/assets/products/banners/resana.png'
import Image from 'next/image'
import FadeInSection from '@/components/FadeInSection'
import { LaGaufre } from '@/components/LaGaufre'

const ROADMAP_MILESTONES = [
  {
    date: 'Juin 2026',
    description:
      "Communication officielle et mise à disposition de ressources pour l'aide à la décision",
    active: true,
  },
  {
    date: 'Été 2026',
    description:
      "Ouverture d'un service d'aide à la migration des données pour les organisations qui le souhaitent",
    active: false,
  },
  {
    date: 'Septembre 2026',
    description: 'Échéance de positionnement',
    active: false,
  },
  {
    date: 'Novembre 2026',
    description:
      "Dernière date pour passer commande via l'UGAP sur l'exercice 2026",
    active: false,
  },
  {
    date: '31 décembre 2026',
    description: 'Fin du financement Dinum de Resana',
    active: false,
  },
] as const

const RESANA_FAQ = {
  title: 'Questions fréquentes',
  content:
    "Les réponses aux principales questions sur l'évolution du modèle Resana.",
  questions: [
    {
      q: `J'ai entendu parler du "décommissionnement" de Resana, qu'en est-il ?`,
      a: `<p><strong>Resana n'est pas décommissionné</strong>. La Dinum arrête cependant au 31/12/2026 son financement dans le cadre de l'ouverture du marché des solutions collaboratives et de la doctrine d'achats publics numérique (circulaire SG n°6519 du 5 février 2026).</p>
<p><strong>Trois options sont ouvertes aux ministères afin d'assurer la continuité de service</strong>. Retrouvez plus d'information sur <a href="https://docs.numerique.gouv.fr/docs/57ad816c-d5f5-49f0-8808-78d3b0e32ee6/" class="underline">l'annonce officielle</a> et les <a href="https://docs.numerique.gouv.fr/docs/542784bf-c713-49ea-bdd4-ec6bcb3a191c/" class="underline">guides d'aide à la décision</a>.</p>`,
    },
    {
      q: 'Si je décide de poursuivre sur Resana, quelles sont les conditions ?',
      a: `<p><strong>Poursuivre sur Resana en 2027 est tout à fait possible</strong>, sans aucune interruption de service. Vos espaces, données, utilisateurs et communautés sont conservés tels quels. Aucune migration n'est nécessaire.</p>
<p>Pour continuer, votre administration souscrit un abonnement auprès d'Interstis via le <trong>marché UGAP</strong>. L'équipe d'Interstis se tient à votre disposition pour vous accompagner dans la <strong>contractualisation</strong>, la <strong>formation de vos administrateurs</strong> et la <strong>communication auprès de vos utilisateurs</strong>.</p>
<p>Pour toute question ou pour initier la démarche, n'hésitez pas à <a href="mailto:leslie.rialet@interstis.fr" class="underline">contacter l'équipe Interstis.</a></p>`,
    },
    {
      q: 'Si je décide de quitter Resana pour une autre solution, comment faire ?',
      a: `<p>Deux options sont possibles:</p>
<ol class="list-decimal pl-5 my-3 space-y-2">
<li><strong>La Dinum et LaSuite vous proposent le socle interministériel « cœur de suite »</strong>, incluant Tchap, Visio, France Transfert, ainsi que Fichiers pour le partage et la coédition de fichiers.</li>
<li>Vous pouvez opter pour <strong>une autre solution existante</strong> et y souscrire au besoin via le marché UGAP.</li>
</ol>
<p>Dans les deux cas, l’équipe LaSuite vous accompagne pour assurer la conservation ou la migration de vos documents actuellement stockés dans Resana. <strong>Un outil de migration open source</strong>, développé par LaSuite, est mis à votre disposition et peut être adapté à toute solution de remplacement.</p>
<p>Pour toute question ou besoin d’informations complémentaires, n’hésitez pas à <a href="mailto:paul.burgun@numerique.gouv.fr" class="underline">contacter l’équipe LaSuite</a>.</p>`,
    },
    {
      q: 'Si je décide de passer sur les solutions de LaSuite, quel est le calendrier ?',
      a: `<p>Les <strong>premières migrations pilote auront lieu dès Juin</strong>. Prenez contact avec l'équipe LaSuite pour en faire partie.</p>
<p><strong>Fin Août 2026</strong>, nous encourageons tous les <strong>ministères</strong> à se positionner d'ici <strong>la fin du mois d'Août</strong> fin de planifier et faciliter les sessions d'accompagnement à la migration.</p>
<p><strong>Fin Novembre 2026</strong>, nous encourageons les <strong>administrateurs</strong> et <strong>animateurs</strong> d'espaces à passer leurs périmètres Resana en mode « lecture seule » afin de favoriser l'adoption de la solution cible.</p>
<p><a href="#calendrier" class="underline">Retrouvez le calendrier complet ici</a>.</p>`,
    },
    {
      q: 'Combien cela va coûter ?',
      a: `<p><strong>LaSuite est portée en interministériel par la DINUM</strong>. Une gouvernance appelée "Club LaSuite" a été constituée en janvier 2026, impliquant les ministères volontaires dans les décisions stratégiques du projet, en échange d'une <strong>participation financière aux communs numériques de LaSuite</strong>. L'utilisation de Fichiers pour les agents de la fonction publique d'Etat n'entrainera pas de coûts supplémentaires.</p>
<p><strong>Interstis, éditeur de Resana</strong>, propose son alternative à compter de janvier 2027 avec un <strong>coût de 15&nbsp;€ H.T. par agent de l'État et par an</strong>, un agent étant défini comme tout utilisateur ayant un domaine de messagerie rattaché à une administration. Pour obtenir un devis précis, il est recommandé de contacter directement Interstis.</p>
<p>Si vous envisagez <strong>une autre solution</strong>, nous vous encourageons à vous référer au <strong>marché UGAP</strong> le cas échéant, en veillant à respecter la date limite d’achat fixée à la fin de l’année.</p>`,
    },
  ],
}

const WEBINAIRES_RESANA = [
  {
    day: '15',
    month: 'juin',
    time: '16h00 - 17h00',
    tag: { label: 'Ouvert à tous', bg: '#E7F2FF', color: '#265EAA' },
    title: "Comprendre l'évolution du modèle Resana",
    description:
      "Présentation du projet, des trois options ouvertes aux administrations et du calendrier. Session d'1h, avec un temps de questions-réponses.",
    cta: {
      type: 'replay',
      href: 'https://tube.numerique.gouv.fr/w/3tLuRFJA7EerG6681WX9Mb',
      label: 'Accéder au replay',
    },
  },
  {
    day: '24',
    month: 'juin',
    time: '14h00 - 15h00',
    tag: {
      label: 'Pour administrateurs et décideurs',
      bg: '#DEF7E6',
      color: '#2B695A',
    },
    title: "Détail des options et grille d'aide à la décision",
    description:
      "Revue des options à compter du 1er janvier 2027, au regard de la doctrine de l'État sur l'achat numérique. Session d'1h, avec un temps de questions-réponses.",
    cta: {
      type: 'replay',
      href: 'https://tube.numerique.gouv.fr/w/bCgDhNge3U3Bj9tMUQEvGH',
      label: 'Accéder au replay',
    },
  },
  {
    day: '30',
    month: 'juin',
    time: '14h00 - 15h00',
    tag: {
      label: 'Pour administrateurs et animateurs',
      bg: '#FFEFD9',
      color: '#984800',
    },
    title: 'Continuer sur Resana en 2027',
    description:
      "Conditions de poursuite de l'usage de RESANA en 2027. Session d'1h, avec un temps de questions-réponses.",
    cta: {
      type: 'replay',
      href: 'https://tube.numerique.gouv.fr/w/aKrjqCbL2oivzeU5Exfxaq',
      label: 'Accéder au replay',
    },
  },
  {
    day: '2',
    month: 'juillet',
    time: '14h00 - 15h00',
    tag: {
      label: 'Pour administrateurs et animateurs',
       bg: '#FFEFD9',
      color: '#984800',
    },
    title: 'Outil de migration : présentation technique et fonctionnelle',
    description:
      'Webinaire à destination des équipes administrant et animant des périmètres et espaces Resana pour comprendre comment migrer vers une autre solution.',
    cta: {
      type: 'replay',
      href: 'https://tube.numerique.gouv.fr/w/f1t3GGmtvT1MKuMvmN2Uqd',
      label: 'Accéder au replay',
    },
  },
  {
    day: '23',
    month: 'juillet',
    time: '14h00 - 15h00',
    tag: {
      label: 'Pour administrateurs et animateurs',
      bg: '#FFEFD9',
      color: '#984800',
    },
    title: 'Outil de migration : résultats des premiers pilotes et évolutions',
    description:
      'Webinaire à destination des équipes administrant et animant des périmètres et espaces Resana pour comprendre comment migrer vers une autre solution.',
    cta: {
      type: 'register',
      href: 'https://4f0df3d6.sibforms.com/serve/MUIFANKG0_ld5UMjxXkIpSSwuPobeso3ylF7NbwLSEvd4yN5j3cyZIlbeJeNmppLboGRRTtSDPpnAYVI46LLETFkBlpFbCpon420Jd7Erfkt3Q-YnlpczqU6-jKa0unDzOG9ijz5i3i7DkcxyfWCfmhvPcMSld2JWN-crelixw9iDNrL9tXZgyrQJRKtFdFRl8C_EszUy71dUBgI',
      label: "S'inscrire",
    },
  },
]

const RESSOURCES_RESANA = [
  {
    title: 'Comprendre la décision',
    body: "Textes officiels et contexte : annonce, circulaire et cadre d'achat public numérique.",
    links: [
      {
        title: 'Annonce officielle',
        href: 'https://docs.numerique.gouv.fr/docs/57ad816c-d5f5-49f0-8808-78d3b0e32ee6/',
      },
      {
        title: 'Circulaire SG n°6519 du 5 février 2026',
        href: 'https://www.legifrance.gouv.fr/download/pdf/circ?id=45649',
      },
    ],
  },
  {
    title: 'Préparer la décision',
    body: "Guides et comparatifs pour structurer votre positionnement et vos arbitrages avant d'engager la suite.",
    links: [
      {
        title: "Guide d'aide à la décision",
        href: 'https://docs.numerique.gouv.fr/docs/9a5ca4d2-845f-476c-a7fc-d88c5cc373e4/',
      },
    ],
  },
  {
    title: 'Mettre en œuvre votre choix',
    body: 'Accès directs aux dispositifs et partenaires selon la voie retenue.',
    links: [
      {
        title: 'Continuer avec Interstis',
        href: 'mailto:leslie.rialet@interstis.fr',
      },
      {
        title: "Solutions collaboratives via l'UGAP",
        href: 'https://www.ugap.fr/',
      },
      {
        title: 'Outils de migration',
        href: 'https://docs.numerique.gouv.fr/docs/9e4cebe6-4138-4d02-a4ce-c10108995156/',
      },
    ],
  },
]

function SectionSeparator() {
  return (
    <div className="w-full max-w-container mx-auto px-0" aria-hidden>
      <div className="h-px w-full rounded bg-gray-100" />
    </div>
  )
}

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
    >
      <path
        d="M3.00977 1.59084e-05C3.53759 0.00180775 4.05582 0.143185 4.51172 0.409196L16.5059 7.40529C16.96 7.6688 17.3384 8.04709 17.6006 8.50197C17.8628 8.95686 18.0005 9.473 18.001 9.99806C18.0014 10.5231 17.864 11.0389 17.6025 11.4942C17.3738 11.8926 17.0573 12.2325 16.6777 12.4883L16.5117 12.5928L4.51172 19.5928C4.0559 19.8587 3.53746 19.9992 3.00977 20.001C2.48212 20.0027 1.9634 19.8654 1.50586 19.6026C1.04822 19.3397 0.667673 18.9607 0.40332 18.5039C0.138962 18.047 -0.000156271 17.5279 1.3173e-07 17V3.00099C-0.00015623 2.47327 0.139096 1.95487 0.40332 1.49806C0.667678 1.04117 1.04815 0.661394 1.50586 0.398453C1.96338 0.135687 2.48216 -0.00170165 3.00977 1.59084e-05ZM2 17.001C1.99996 17.1769 2.04666 17.3497 2.13477 17.502C2.22288 17.6542 2.34942 17.7806 2.50195 17.8682C2.65439 17.9557 2.82714 18.0015 3.00293 18.001C3.1788 18.0004 3.35199 17.9538 3.50391 17.8652L15.5039 10.8653L15.5049 10.8643C15.656 10.7762 15.7811 10.6497 15.8682 10.4981C15.9552 10.3464 16.0011 10.1748 16.001 10C16.0008 9.825 15.9546 9.65262 15.8672 9.50099C15.7798 9.34946 15.6542 9.22356 15.5029 9.13576L15.501 9.13478L3.50391 2.13673C3.35193 2.04805 3.17888 2.00061 3.00293 2.00002C2.82717 1.9995 2.65437 2.04529 2.50195 2.13283C2.34947 2.22042 2.22288 2.34686 2.13477 2.49904C2.0467 2.65125 2 2.82416 2 3.00002V17.001Z"
        fill="#626A80"
      />
    </svg>
  )
}

function RoadmapMilestoneMarker({
  active,
  className,
}: {
  active: boolean
  className?: string
}) {
  return (
    <div
      className={`relative z-10 flex shrink-0 items-center justify-center rounded-full border-2 bg-white h-[18px] w-[18px] ${
        active ? 'border-brand-550' : 'border-gray-200'
      } ${className ?? ''}`}
      aria-hidden
    >
      {active ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden
        >
          <path
            d="M9.01172 0.131592C9.2253 0.131638 9.40975 0.200192 9.55371 0.343506L9.60449 0.398193C9.71525 0.530905 9.76851 0.695222 9.76855 0.882568C9.76855 0.97139 9.75391 1.06097 9.72559 1.15015L9.72461 1.1521C9.69585 1.23839 9.65174 1.32745 9.59473 1.4187L9.59375 1.42065L4.60938 9.18823L4.6084 9.19116C4.42867 9.45667 4.17206 9.59345 3.85254 9.59351C3.55241 9.59351 3.29895 9.45728 3.09766 9.20483L0.350586 5.76831V5.76733C0.27809 5.67915 0.221134 5.58957 0.183594 5.4978L0.181641 5.49292C0.148272 5.40113 0.131861 5.30649 0.131836 5.20972C0.131836 4.99422 0.203658 4.80782 0.350586 4.66089L0.351562 4.65894C0.501873 4.51304 0.691192 4.44223 0.90918 4.44214C1.17102 4.44214 1.38927 4.56293 1.55859 4.78394L3.81934 7.68433L8.32227 0.531982L8.32422 0.530029C8.41145 0.397283 8.5073 0.291849 8.61621 0.228271V0.229248C8.72737 0.160693 8.86225 0.131592 9.01172 0.131592Z"
            fill="#304DDF"
            stroke="#304DDF"
            strokeWidth="0.2625"
          />
        </svg>
      ) : null}
    </div>
  )
}

function HeaderResana2027() {
  return (
    <>
      <header className="max-w-container w-[100%] mx-auto fade-in bg-white md:px-3 xl:px-0 absolute top-0 right-0 left-0 z-50">
        <div className="flex items-center justify-between w-full">
          <div className="relative px-6 sm:px-0 flex py-4 items-center fr-enlarge-link">
            <Image
              className="hidden md:block mr-4 sm:mr-8 w-18 sm:w-28"
              src={LogoGouvSvg}
              width={109}
              height={59}
              alt="GOUVERNEMENT - Liberté, Égalité, Fraternité"
            />
            <Image
              width={180}
              height={40}
              className="md:block"
              src={LogoResanaSvg}
              alt="Resana en 2027"
            />
          </div>
          <div className="flex items-center gap-2 shrink-0 px-6 sm:px-0 py-4">
            <Button
              href="https://docs.numerique.gouv.fr/docs/542784bf-c713-49ea-bdd4-ec6bcb3a191c/"
              variant="secondary_brand"
              size="medium"
              target="_blank"
              className="hidden lg:flex"
            >
              Voir la documentation
            </Button>
            <LaGaufre />
          </div>
        </div>
      </header>
    </>
  )
}

function BlockHeroResana2027() {
  return (
    <div className="w-[100%] max-w-container mx-auto mt-[100px] md:mt-[140px] overflow-hidden md:overflow-visible md:px-3 xl:px-0">
      <div className="md:flex gap-8 md:justify-between mb-8 md:mb-[74px]">
        <div className="text-left md:max-w-[700px] relative px-6 md:px-0 z-10">
          <h2 className="text-gray-850 text-[2rem] md:text-[2.75rem] text-balance leading-[2.5rem] md:leading-[3rem] font-bold pb-4">
            Le modèle de Resana évolue à compter de 2027
          </h2>
          <p className="mb-4 mx-auto text-gray-600 text-base md:text-[1.25rem]">
            À compter de 2027, le financement de Resana par la Dinum prend fin
            dans une logique d'ouverture du marché des solutions collaboratives.
            Resana reste disponible et continue sans interruption, opéré par
            Interstis. Trois options non exclusives s'ouvrent aux
            administrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 my-6">
            <Button href="#options" variant="primary_brand">
              Explorer les options
            </Button>
            <Button href="#webinaires" variant="tertiary_bordered">
              S’inscrire à un webinaire
            </Button>
          </div>

          <a
            className="text-gray-600 underline underline-offset-2 "
            href="https://docs.numerique.gouv.fr/docs/57ad816c-d5f5-49f0-8808-78d3b0e32ee6/"
            target="_blank"
            aria-label="Lire l’annonce officielle - Nouvelle fenêtre"
          >
            Lire l’annonce officielle
          </a>
        </div>
        <div className="md:block hidden text-center">
          <Image
            src={bannerResana}
            height={300}
            width={300}
            alt=""
            className="max-w-[90%]"
            priority
          />
        </div>
      </div>
    </div>
  )
}

function mobileRoadmapLineClass(
  segmentStartIndex: number,
  lastActiveIndex: number
) {
  return segmentStartIndex <= lastActiveIndex ? 'bg-brand-550' : 'bg-gray-200'
}

function CalendrierResana2027() {
  const lastActiveIndex = ROADMAP_MILESTONES.reduce<number>(
    (acc, milestone, index) => (milestone.active ? index : acc),
    -1
  )

  return (
    <div
      id="calendrier"
      className="bg-gray-025 py-12 md:py-[72px] mt-12 scroll-mt-24"
    >
      <div className="max-w-container mx-auto w-[100%]">
        <div className="px-6 md:px-3 xl:px-0">
          <h3 className="text-gray-850 md:text-[2.75rem] text-3xl sm:leading-[42px] md:leading-[48px] font-bold pb-6">
            Calendrier
          </h3>
          <p className="text-gray-550 text-sm md:text-lg mb-12">
            Les principales étapes du projet d'ici la fin du financement Dinum,
            le 31 décembre 2026.
          </p>

          {/* Mobile */}
          <ul className="flex list-none flex-col gap-0 p-0 m-0 md:hidden">
            {ROADMAP_MILESTONES.map((milestone, index) => (
              <li key={milestone.date} className={`flex gap-4`}>
                <div className="flex w-[18px] shrink-0 flex-col items-center self-stretch">
                  <div
                    className={`w-[2px] min-h-0 flex-1 ${
                      index === 0
                        ? 'bg-transparent'
                        : mobileRoadmapLineClass(index - 1, lastActiveIndex)
                    }`}
                    aria-hidden
                  />
                  <RoadmapMilestoneMarker
                    active={milestone.active}
                    className="shrink-0"
                  />
                  <div
                    className={`w-[2px] min-h-0 flex-1 ${
                      index === ROADMAP_MILESTONES.length - 1
                        ? 'bg-transparent'
                        : mobileRoadmapLineClass(index, lastActiveIndex)
                    }`}
                    aria-hidden
                  />
                </div>
                <div className="min-w-0 flex-1 rounded-lg mb-4 border border-gray-100 bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                  <p className="text-sm font-bold text-brand-550">
                    {milestone.date}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-gray-550">
                    {milestone.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-5">
            {ROADMAP_MILESTONES.map((milestone, index) => (
              <div
                key={milestone.date}
                className={`relative flex flex-col items-center ${index === 0 ? 'pl-0' : 'pl-3'} ${index === ROADMAP_MILESTONES.length - 1 ? 'pr-0' : 'pr-3'}`}
              >
                {index === 0 && (
                  <div
                    className="absolute top-[8px] left-0 h-[2px] w-1/2 bg-brand-550 rounded-full"
                    aria-hidden
                  />
                )}
                {index > 0 && (
                  <div
                    className="absolute top-[8px] left-0 h-[2px] w-1/2 bg-gray-200"
                    aria-hidden
                  />
                )}
                {index < ROADMAP_MILESTONES.length && (
                  <div
                    className="absolute top-[8px] left-1/2 h-[2px] w-1/2 bg-gray-200"
                    aria-hidden
                  />
                )}
                <RoadmapMilestoneMarker active={milestone.active} />
                <div className="mt-5 w-full rounded-lg border border-gray-100 bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                  <p className="text-sm font-medium text-brand-550 md:text-xl">
                    {milestone.date}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const SURFACE_TERTIARY = '#EEF1F4'

function webinaireDateSquareBackground(semanticPrimary: string) {
  return `radial-gradient(1677.72% 141.42% at 100% 0%, ${semanticPrimary} 0%, transparent 100%), ${SURFACE_TERTIARY}`
}

function WebinairesResana2027() {
  return (
    <div id="webinaires" className="py-12 md:py-[72px] scroll-mt-24">
      <div className="max-w-container mx-auto w-full px-6 md:px-3 xl:px-0">
        <h3 className="text-gray-850 md:text-[2.75rem] text-3xl font-bold leading-tight md:leading-[48px] pb-2">
          Webinaires
        </h3>
        <p className="text-gray-550 text-sm md:text-lg mb-10">
          Sessions d&apos;information, d&apos;accompagnement et d&apos;échanges
          techniques pour vous aider à comprendre l&apos;évolution du modèle
          Resana.
        </p>
        <ul className="flex list-none flex-col gap-4 p-0 m-0">
          {WEBINAIRES_RESANA.map((session) => (
            <li
              key={`${session.day}-${session.month}`}
              className="flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] md:flex-row"
            >
              <div className="flex shrink-0 p-3 pb-0 md:items-center md:justify-center md:px-4 md:py-5">
                <div
                  className="flex size-[102px] shrink-0 flex-col items-center justify-center rounded w-full md:size-[144px]"
                  style={{
                    background: webinaireDateSquareBackground(session.tag.bg),
                  }}
                >
                  <span className="text-[44px] font-bold leading-none text-gray-850">
                    {session.day}
                  </span>
                  <span className="mt-1 text-lg lowercase font-medium text-gray-850">
                    {session.month}
                  </span>
                </div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1 p-5 md:pl-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-600">
                  <span>{session.time}</span>
                  <span
                    className="rounded px-2 py-0.5 text-xs font-medium"
                    style={{
                      backgroundColor: session.tag.bg,
                      color: session.tag.color,
                    }}
                  >
                    {session.tag.label}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-850 md:text-xl">
                  {session.title}
                </h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  {session.description}
                </p>
                {session.cta?.type === 'replay' ? (
                  <Button
                    href={session.cta.href}
                    variant="neutral_bordered"
                    size="medium"
                    target="_blank"
                    icon={<PlayIcon />}
                    className="mt-1"
                  >
                    {session.cta.label}
                  </Button>
                ) : (
                  ''
                )}
                {session.cta?.type === 'register' ? (
                  <Button
                    href={session.cta.href}
                    target="_blank"
                    size="medium"
                    variant="primary_brand"
                    className="mt-1"
                  >
                    {session.cta.label}
                  </Button>
                ) : (
                  ''
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const resourceLinkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden
  >
    <path
      d="M11.3333 4C11.3709 4 11.4075 4.00381 11.4434 4.00977C11.4501 4.01089 11.4569 4.01169 11.4635 4.01302C11.4737 4.01502 11.4835 4.01773 11.4935 4.02018C11.5041 4.0228 11.5149 4.02485 11.5254 4.02799C11.5588 4.03803 11.5907 4.05149 11.6217 4.06641C11.6311 4.0709 11.6406 4.07513 11.6497 4.08008C11.7469 4.13258 11.8294 4.20837 11.89 4.30013C11.9065 4.32512 11.9208 4.35108 11.9336 4.3776C11.9758 4.46511 12 4.563 12 4.66667V11.3333C12 11.7015 11.7015 12 11.3333 12C10.9651 12 10.6667 11.7015 10.6667 11.3333V6.27604L5.13802 11.8047C4.87767 12.065 4.45566 12.065 4.19531 11.8047C3.93497 11.5443 3.93497 11.1223 4.19531 10.862L9.72396 5.33333H4.66667C4.29848 5.33333 4 5.03486 4 4.66667C4 4.29848 4.29848 4 4.66667 4H11.3333Z"
      fill="#626A80"
    />
  </svg>
)

function RessourcesResana2027() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-container mx-auto w-full px-6 md:px-3 xl:px-0 my-10">
        <h3 className="text-gray-850 md:text-[2.75rem] text-3xl font-bold leading-tight md:leading-[48px] pb-6">
          Ressources
        </h3>
        <p className="text-gray-550 text-sm md:text-lg mb-6 max-w-3xl">
          Documents officiels, guides d&apos;aide à la décision et outils pour
          accompagner votre choix.
        </p>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {RESSOURCES_RESANA.map((col) => (
            <div key={col.title} className="flex min-w-0 flex-col">
              <h4 className="mb-[6px] text-lg font-bold text-gray-850">
                {col.title}
              </h4>
              <p className="mb-3 text-sm leading-relaxed text-gray-850">
                {col.body}
              </p>
              <ul className="flex list-none flex-col gap-[6px]">
                {col.links.map((link) => (
                  <li key={link.title}>
                    <Button
                      href={link.href}
                      target="_blank"
                      variant="neutral_bordered"
                      size="nano"
                      icon={resourceLinkIcon}
                      iconPosition="right"
                    >
                      {link.title}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function OptionsResana2027() {
  return (
    <div id="options" className="py-12 md:py-[72px]">
      <div className="max-w-container mx-auto w-[100%]">
        <div className="px-6 md:px-3 xl:px-0">
          <h3 className="text-gray-850 md:text-[2.75rem] text-3xl sm:leading-[42px] md:leading-[48px] font-bold pb-2 md:pb-6">
            Trois options s’offrent à vous
          </h3>
          <p className="text-gray-550 text-sm md:text-lg mb-0 md:mb-12">
            Chaque ministère, service ou opérateur de l'État est libre de
            retenir la solution la mieux adaptée à ses besoins. Ces options ne
            sont pas exclusives et peuvent être combinées selon vos usages.
          </p>

          <div className="flex flex-col md:flex-row gap-6 py-8 md:py-12">
            <article
              className="flex w-full max-w-2xl flex-col items-start gap-4 self-stretch rounded-lg border border-gray-100 pt-6 px-6 pb-[72px] shadow-[0_8px_20px_0_rgba(0,0,0,0.03)]"
              style={{
                background:
                  'radial-gradient(1576.36% 132.88% at 63.77% -0.29%, rgba(0, 175, 159, 0.05) 0%, rgba(255, 255, 255, 0) 50%, #ffffff 100%), #ffffff',
              }}
            >
              <Image
                src={LogoInterstisSvg}
                alt="Interstis"
                width={120}
                height={28}
                className="w-auto"
              />
              <h4 className="text-xl font-bold leading-snug text-gray-850 md:text-2xl">
                Continuer sur Resana
              </h4>
              <p className="text-sm leading-relaxed text-gray-550 md:text-base">
                Resana reste disponible en 2027, sous un autre nom et sans
                interruption. Interstis, qui opère la plateforme depuis son
                lancement, en assure la pérennité.
                <br />
                Pour poursuivre, votre entité souscrit un abonnement direct
                auprès d'Interstis.
              </p>
            </article>
            <article
              className="flex w-full max-w-2xl flex-col items-start gap-4 self-stretch rounded-lg border border-gray-100 pt-6 px-6 pb-[72px] shadow-[0_8px_20px_0_rgba(0,0,0,0.03)]"
              style={{
                background: `radial-gradient(1576.36% 132.88% at 63.77% -0.29%, rgba(62, 93, 231, 0.05) 0%, rgba(62, 93, 231, 0.00) 100%), #ffffff`,
              }}
            >
              <Image
                src={LogoFichiersSvg}
                alt="LaSuite Fichiers"
                width={120}
                height={28}
                className="w-auto"
              />
              <h4 className="text-xl font-bold leading-snug text-gray-850 md:text-2xl">
                Migrer vers LaSuite Fichiers
              </h4>
              <p className="text-sm leading-relaxed text-gray-550 md:text-base">
                Fichiers est la brique interministérielle de partage et de
                stockage de LaSuite, aux côtés de Tchap, Visio et
                FranceTransfert.
                <br />
                Un outil de migration permettra de transférer vos contenus vers
                Fichiers. L'outil est open source.
              </p>
              {/* <Button
                  href="#"
                  variant="secondary_brand"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.0029 14.989C6.68843 15.0103 7.34634 15.2518 7.87985 15.6746L8.10055 15.867L8.11227 15.8787C9.30022 17.0517 9.28463 18.9331 8.26462 20.1424L8.26559 20.1433C7.82287 20.6703 7.21261 21.057 6.62594 21.3435C6.02782 21.6357 5.38249 21.8583 4.8027 22.0242C4.21992 22.1909 3.68208 22.3064 3.29098 22.3806C3.09475 22.4179 2.93283 22.4456 2.8193 22.4636C2.76287 22.4726 2.71809 22.4796 2.68649 22.4842C2.67067 22.4865 2.65742 22.4878 2.64841 22.489C2.64411 22.4896 2.64031 22.4906 2.63766 22.491H2.63278C2.32397 22.5323 2.01326 22.4271 1.79294 22.2068C1.57282 21.9866 1.46764 21.6766 1.50876 21.3679V21.366C1.50888 21.3651 1.50953 21.3634 1.50973 21.3621C1.5101 21.3594 1.51011 21.3557 1.51071 21.3513C1.51196 21.3424 1.51429 21.3299 1.51657 21.3142C1.52118 21.2826 1.52808 21.2372 1.53708 21.1804C1.55506 21.067 1.58187 20.9059 1.61911 20.7097C1.69335 20.3187 1.80887 19.7808 1.97555 19.198C2.14141 18.6182 2.36404 17.972 2.65622 17.3738C2.94278 16.7872 3.32944 16.1768 3.85641 15.7342C4.45555 15.2297 5.22003 14.9649 6.0029 14.989ZM5.94137 16.9881C5.65077 16.9791 5.36686 17.0771 5.1445 17.2644L5.14352 17.2654C4.92062 17.4526 4.68212 17.7829 4.45309 18.2517C4.22967 18.7092 4.04602 19.2352 3.89938 19.7478C3.85228 19.9125 3.80981 20.0738 3.77145 20.2283C3.92609 20.1899 4.08811 20.1485 4.2529 20.1013C4.76539 19.9547 5.29072 19.77 5.74801 19.5467C6.21679 19.3177 6.54708 19.0801 6.73434 18.8572L6.7363 18.8543C7.13316 18.3845 7.09848 17.6912 6.70993 17.3045C6.50078 17.1093 6.22763 16.997 5.94137 16.9881Z"
                        fill="#304DDF"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.0058 0.999777C22.5556 1.00322 22.9998 1.45006 23 1.99978C23 4.80999 22.2101 9.70589 17.1465 13.4148C17.2317 13.7725 17.3293 14.2436 17.3965 14.7644C17.4696 15.3317 17.5108 15.9851 17.4511 16.6277C17.3922 17.2617 17.2285 17.9595 16.832 18.5545L16.831 18.5554C16.1522 19.5702 14.872 20.1587 13.9775 20.4832C13.4969 20.6575 13.0526 20.7819 12.7295 20.8621C12.5674 20.9023 12.4337 20.9319 12.3388 20.9519C12.2914 20.9619 12.2526 20.9691 12.2256 20.9744C12.2123 20.977 12.2012 20.9797 12.1933 20.9812C12.1896 20.9819 12.186 20.9827 12.1836 20.9832H12.1787C11.887 21.0361 11.5869 20.9573 11.3593 20.7674C11.1318 20.5774 11 20.2962 11 19.9998V15.4138L8.58688 13.0008H3.99997C3.70366 13.0008 3.42238 12.8687 3.23239 12.6414C3.04254 12.414 2.96289 12.1135 3.01559 11.822L3.99997 12.0008L3.01657 11.8211V11.8162C3.01702 11.8137 3.0178 11.8102 3.01852 11.8064C3.02001 11.7985 3.02275 11.7875 3.02536 11.7742C3.03063 11.7472 3.03786 11.7091 3.04782 11.6619C3.0678 11.5671 3.09748 11.4333 3.13766 11.2713C3.2178 10.9482 3.34227 10.5038 3.51657 10.0232C3.84102 9.12877 4.42948 7.84767 5.4443 7.16872C6.0426 6.76985 6.74511 6.61003 7.38083 6.55642C8.02507 6.50211 8.67938 6.54973 9.24704 6.62966C9.7556 6.70128 10.2168 6.80175 10.5713 6.8904C11.7852 5.16592 13.3778 3.73703 15.2314 2.71755C17.3061 1.57661 19.6382 0.98515 22.0058 0.999777ZM15.3388 14.5496C14.5807 14.9679 13.8001 15.3446 13 15.6765V18.7039C13.0958 18.6726 13.1948 18.6396 13.2949 18.6033C14.1577 18.2903 14.8778 17.8791 15.1689 17.4441C15.3118 17.2291 15.4177 16.8965 15.4599 16.4422C15.5014 15.9957 15.4749 15.5001 15.4131 15.0203C15.3921 14.8574 15.3654 14.6997 15.3388 14.5496ZM20.958 3.03982C19.2911 3.17526 17.6675 3.66083 16.1953 4.47048C14.4195 5.44717 12.9223 6.86161 11.8476 8.57985L11.8418 8.58962C11.1965 9.59745 10.639 10.6584 10.1748 11.7605L12.2412 13.8269C13.3565 13.3636 14.4311 12.8069 15.4531 12.1619C19.6781 9.32408 20.7535 5.61396 20.958 3.03982ZM7.5488 8.5486C7.09514 8.58686 6.76636 8.69165 6.55466 8.83278C6.12021 9.12451 5.70909 9.84303 5.39645 10.7049C5.36006 10.8052 5.32627 10.9047 5.29489 11.0008H8.32614C8.65832 10.2104 9.03405 9.43928 9.45212 8.69118C9.29798 8.66177 9.13547 8.63375 8.96774 8.61013C8.48814 8.54261 7.9937 8.5111 7.5488 8.5486Z"
                        fill="#304DDF"
                      />
                    </svg>
                  }
                >
                  Migrer
                </Button> */}
            </article>
            <article
              className="flex w-full max-w-2xl flex-col items-start gap-4 self-stretch rounded-lg border border-gray-100 pt-6 px-6 pb-[72px] shadow-[0_8px_20px_0_rgba(0,0,0,0.03)]"
              style={{
                background:
                  'radial-gradient(1576.36% 132.88% at 63.77% -0.29%, rgba(98, 106, 128, 0.05) 0%, rgba(219, 219, 219, 0) 100%), #ffffff',
              }}
            >
              <Image
                src={LogoShareSvg}
                alt=""
                width={120}
                height={28}
                className="w-auto"
              />
              <h4 className="text-xl font-bold leading-snug text-gray-850 md:text-2xl">
                Choisir une solution d'un éditeur privé ou interne
              </h4>
              <p className="text-sm leading-relaxed text-gray-550 md:text-base">
                En cohérence avec la doctrine d'achats publics numériques
                (circulaire SG n°6519 du 5 février 2026), vous pouvez opter pour
                une solution dite "sur étagère", notamment à travers le marché
                UGAP, ou vous reposer sur des solutions pré-existantes en
                interne.
              </p>
            </article>
          </div>

          <p className="text-gray-600 text-sm md:text-lg mb-4">
            Retrouvez toutes les informations dans la documentation officielle.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              href="https://docs.numerique.gouv.fr/docs/542784bf-c713-49ea-bdd4-ec6bcb3a191c/"
              variant="primary_brand"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M9 12C9.55229 12 10 12.4477 10 13C10 13.5523 9.55229 14 9 14H5.5C4.94772 14 4.5 13.5523 4.5 13C4.50001 12.4477 4.94772 12 5.5 12H9Z"
                    fill="#EDF0FF"
                  />
                  <path
                    d="M12.5 8.5C13.0523 8.5 13.5 8.94772 13.5 9.5C13.5 10.0523 13.0523 10.5 12.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5C4.50001 8.94772 4.94772 8.5 5.5 8.5H12.5Z"
                    fill="#EDF0FF"
                  />
                  <path
                    d="M12.5 5C13.0523 5 13.5 5.44772 13.5 6C13.5 6.55229 13.0523 7 12.5 7H5.5C4.94772 7 4.5 6.55229 4.5 6C4.50001 5.44772 4.94772 5 5.5 5H12.5Z"
                    fill="#EDF0FF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2002 2.21052e-06C13.0237 -3.04136e-07 13.7016 -0.00101541 14.252 0.0439475C14.8141 0.089871 15.3311 0.188261 15.8164 0.435549C16.569 0.818998 17.181 1.43108 17.5645 2.1836C17.8117 2.66889 17.9101 3.186 17.9561 3.74805C18.001 4.29843 18 4.97632 18 5.79981V16.2002C18 17.0237 18.001 17.7016 17.9561 18.252C17.9101 18.814 17.8117 19.3311 17.5645 19.8164C17.181 20.5689 16.569 21.181 15.8164 21.5645C15.3311 21.8117 14.8141 21.9101 14.252 21.9561C13.7016 22.001 13.0237 22 12.2002 22H5.79981C4.97636 22 4.29841 22.001 3.74805 21.9561C3.18623 21.9101 2.6697 21.8115 2.18458 21.5645C1.43192 21.181 0.819037 20.5681 0.435552 19.8154C0.188506 19.3303 0.0898512 18.8138 0.04395 18.252C-0.00100136 17.7016 -1.77352e-05 17.0236 4.71533e-06 16.2002V5.79981C2.68997e-05 4.97629 -5.65276e-05 4.29844 0.0449266 3.74805C0.0908682 3.186 0.189246 2.66889 0.436528 2.1836C0.820039 1.43113 1.43206 0.81897 2.18458 0.435549C2.66983 0.188352 3.18703 0.0898658 3.74903 0.0439475C4.29936 -0.000988707 4.97744 4.70942e-06 5.80079 2.21052e-06H12.2002ZM5.80079 2C4.94423 2 4.36121 2.00034 3.91114 2.03711C3.47325 2.07291 3.24912 2.13818 3.09278 2.21778C2.71656 2.40947 2.41051 2.71562 2.21875 3.0918C2.13906 3.24819 2.07392 3.47273 2.03809 3.91113C2.00132 4.36117 2.00003 4.94339 2 5.79981V16.2002C1.99998 17.0566 2.00133 17.6388 2.03809 18.0889C2.0739 18.5273 2.13809 18.7518 2.21778 18.9082C2.4095 19.2845 2.71557 19.5905 3.0918 19.7822C3.2482 19.8619 3.47271 19.9271 3.91114 19.9629C4.36117 19.9997 4.94342 20 5.79981 20H12.2002C13.0566 20 13.6388 19.9996 14.0889 19.9629C14.5272 19.9271 14.7518 19.8619 14.9082 19.7822C15.2845 19.5905 15.5905 19.2845 15.7822 18.9082C15.8619 18.7518 15.9271 18.5273 15.9629 18.0889C15.9997 17.6388 16 17.0566 16 16.2002V5.79981C16 4.94341 15.9997 4.36117 15.9629 3.91113C15.9271 3.47272 15.8619 3.2482 15.7822 3.0918C15.5905 2.71556 15.2845 2.40949 14.9082 2.21778C14.7518 2.1381 14.5272 2.07293 14.0889 2.03711C13.6388 2.00037 13.0566 2 12.2002 2H5.80079Z"
                    fill="#EDF0FF"
                  />
                </svg>
              }
            >
              Voir la documentation
            </Button>
            <Button href="#webinaires" variant="tertiary_bordered">
              S&apos;inscrire à un webinaire
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const FOOTER_LASUITE_DESCRIPTION = [
  'Simple.',
  'Open-source.',
  'Conçue pour le service public de demain.',
]

function FooterLaSuiteDescriptionList({
  items,
  delay = 600,
}: {
  items: string[]
  delay?: number
}) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      items.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, index])
        }, index * delay)
      })
    }
  }, [isVisible, items, delay])

  return (
    <FadeInSection className="pb-10 pt-2" onVisibleChange={setIsVisible}>
      {items.map((item: string, index: number) => (
        <span
          key={index}
          className={`${index > 1 && 'block'} ${index == 1 && 'ml-1.5'} text-gray-550 text-sm md:text-xl font-normal transition-all duration-500 ${
            visibleItems.includes(index) ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {item}
        </span>
      ))}
    </FadeInSection>
  )
}

function FooterLaSuiteResana2027() {
  return (
    <ContentSection background="gray">
      <div className="text-center mx-auto py-10 relative">
        <FadeInSection delay={200}>
          <div className="mx-auto px-10 max-w-[300px] md:w-80">
            <Image
              className="mx-auto"
              src={SuiteLogo}
              alt=""
              width={300}
              height={100}
            />
          </div>
        </FadeInSection>

        <FooterLaSuiteDescriptionList items={FOOTER_LASUITE_DESCRIPTION} />

        <FadeInSection delay={1500}>
          <div className="flex md:flex-row flex-col gap-5 items-center justify-center">
            <Button
              href="https://docs.numerique.gouv.fr/docs/afc65f0a-15f3-42b6-9d64-b332c0fb2ed2/"
              target="_blank"
              variant="secondary_brand"
              iconPosition="left"
            >
              Démarrer avec LaSuite
            </Button>
          </div>
        </FadeInSection>
      </div>
    </ContentSection>
  )
}

export default function Resana2027Page() {
  return (
    <div className="min-h-screen flex flex-col text-body">
      <HeaderResana2027 />
      <FadeInSection>
        <BlockHeroResana2027 />
        <CalendrierResana2027 />
        <OptionsResana2027 />
        <SectionSeparator />
      </FadeInSection>
      <FadeInSection>
        <WebinairesResana2027 />
        <SectionSeparator />
      </FadeInSection>
      <FadeInSection>
        <div className="md:mt-[72px] pb-[72px]">
          <BlockFAQ {...RESANA_FAQ} />
        </div>
        <SectionSeparator />
      </FadeInSection>
      <FadeInSection>
        <RessourcesResana2027 />
      </FadeInSection>
      <FadeInSection>
        <FooterLaSuiteResana2027 />
      </FadeInSection>
      <Footer />
    </div>
  )
}
