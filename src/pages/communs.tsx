import Image from 'next/image'
import { Button } from '@/components/Button'
import { Br } from '@/components/Br'
import { Layout } from '@/components/Layout'

import LogoSvg from '@/assets/logo/suite-numerique.svg'
import InitiativesPlaningDesktop from '@/assets/initiatives-planing-desktop.svg'
import InitiativesPlaningMobile1 from '@/assets/initiatives-planing-mobile-1.svg'
import InitiativesPlaningMobile2 from '@/assets/initiatives-planing-mobile-2.svg'
import InitiativesFinanceDesktop from '@/assets/initiatives-finance-desktop.svg'
import InitiativesFinanceMobile1 from '@/assets/initiatives-finance-mobile-1.svg'
import InitiativesFinanceMobile2 from '@/assets/initiatives-finance-mobile-2.svg'
import InitiativesFinanceMobile3 from '@/assets/initiatives-finance-mobile-3.svg'
import InitiativesFinanceMobile4 from '@/assets/initiatives-finance-mobile-4.svg'
import { SwiperWrapper } from '@/components/SwiperWrapper'

export default function Communs() {
  return (
    <Layout title="Le Fonds Communs Numériques" className="bg-white text-body">
      <div className="hero relative overflow-hidden">
        <div className="flex flex-col justify-between items-center gap-11 py-10 md:py-20 max-w-[40em] mx-auto">
          <Image
            src={LogoSvg}
            height={168}
            width={480}
            alt=""
            className="max-w-[80%]"
          />
          <h1 className="w-full flex text-center justify-center text-2xl text-[1.75rem] sm:text-4xl font-bold mb-[1.75rem] md:mb-[3.75rem] mt-[2rem] md:mt-[6rem] px-4 text-balance">
            Le Fonds Communs Numériques pour La&nbsp;Suite numérique
          </h1>
          <div className="text-left px-4">
            <h2 className="text-xl font-bold mb-[1.75rem]">
              Qu&apos;est-ce que le Fonds&nbsp;?
            </h2>
            <p className="text-lg mb-[1.75rem]">
              Avec <strong>La Suite numérique</strong>, notre défi est
              d’apporter aux agents publics de nouveaux outils de travail
              ouverts et propices aux usages collaboratifs.
            </p>
            <p className="text-lg mb-[3rem]">
              La DINUM ne développe pas directement les produits de La Suite
              numérique, mais s’emploie à constituer un système inter-opérable
              et simple d’utilisation, composé d’outils développés par d’autres
              acteurs. Avec ce fonds, notre objectif est de contribuer à
              consolider les écosystèmes autour des produits et briques
              techniques que nous utilisons. Vous êtes une entité publique ou
              privée et vous portez une solution collaborative structurée sous
              forme de commun numérique&nbsp;? <Br showOnMobile />{' '}
              <b className="text-grey-2">
                Obtenez un financement et un accompagnement pour travailler avec
                nous, dans le cadre du Fonds Communs Numériques pour La Suite
                numérique.
              </b>{' '}
              Le fonds a vocation à soutenir des projets visant le développement
              de nouvelles fonctionnalités autant que des projets visant à
              favoriser la pérennité et à l’évolutivité des produits (ex :
              re-factorisation)
            </p>
            <h2 className="text-xl font-bold mb-[1.75rem]">
              {' '}
              De quoi bénéficient les projets sélectionnés&nbsp;?
            </h2>
            <ul className="text-lg list-disc pl-10">
              <li>
                Un ticket de financement allant jusqu&apos;à{' '}
                <strong>40.000 euros renouvelable.</strong>
              </li>
              <li>
                Un <strong>interlocuteur permanent</strong> qui aide à discuter
                avec les différentes équipes de la DINUM.
              </li>
              <li>
                Un <strong>feedback et une contribution technique</strong> par
                les équipes de la DINUM.
              </li>
              <li>
                La <strong>possibilité de communiquer</strong> sur le soutien de
                la DINUM et de l&apos;Etat français.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full justify-center flex">
        <h2 className="text-2xl text-[1.75rem] sm:text-4xl font-bold px-4 py-[4rem] max-w-[31em] text-balance text-center">
          Un calendrier en 2 temps sur 2024
        </h2>
      </div>
      <div className="w-full hidden md:flex justify-center">
        <Image
          src={InitiativesPlaningDesktop}
          width={800}
          height={640}
          alt=""
        />
      </div>
      <div className="w-full max-w-[25rem] mx-auto md:hidden">
        <SwiperWrapper
          slides={[
            // slides have a tabIndex so that keyboard users on small screens can view each slide by pressing the tab key. But the actual text alternative is written after, visible by everyone. We add an alt here just so that mobile screen reader users dont get to focus something that is empty, they get the info they must go forward.
            <Image
              key="1"
              tabIndex={0}
              src={InitiativesPlaningMobile1}
              width={400}
              alt="Premier temps détaillé ci-dessous"
            />,
            <Image
              key="2"
              tabIndex={0}
              src={InitiativesPlaningMobile2}
              width={400}
              alt="Deuxième temps détaillé ci-dessous"
            />,
          ]}
        />
      </div>
      <div className="flex flex-col">
        <div className="text-left px-4 text-lg max-w-[40em] mx-auto">
          <h3 className="mt-[1.75rem] text-xl text-black font-bold ">
            Mars 2024
          </h3>
          <p className="mb-[1.75rem] mt-[0.875rem]">
            <strong>Objectif de ce premier temps :</strong> Tester la meilleure
            façon pour la DINUM de travailler avec les porteurs de communs
            numériques.
          </p>
          <p className="mb-[42px]">
            <strong>Comment :</strong> en utilisant le projet de La Suite
            numérique comme point de départ, travailler main dans la main avec
            un petit nombre de projets pour tester et itérer sur les
            apprentissages de la coopération.
          </p>
        </div>
        <div className="text-left px-4 text-lg max-w-[40em] mx-auto">
          <h3 className="text-xl text-black font-bold ">Septembre 2024</h3>
          <p className="mb-[1.75rem] mt-[0.875rem]">
            <strong>Objectif de ce deuxième temps :</strong> étendre la
            collaboration à d&apos;autres projets de communs numériques.
          </p>
          <p className="mb-[42px]">
            <strong>Comment :</strong> en utilisant les apprentissages du
            premier lot, contribuer à d&apos;autres projets de communs
            numériques autour des thématiques de La Suite numérique,
            c&apos;est-à-dire tout outil collaboratif qui peut aider les agents
            publics à faire leur travail de manière plus efficace.
          </p>
        </div>
      </div>
      <div className="w-full items-center flex flex-col">
        <h2 className="text-2xl text-[1.75rem] sm:text-4xl font-bold px-4 pb-[2rem] max-w-[31em] text-center text-balance">
          Processus de sélection
        </h2>

        <div className="hidden md:block">
          <Image
            src={InitiativesFinanceDesktop}
            width={800}
            height={640}
            alt=""
          />
        </div>
        <div className="w-full max-w-[25rem] mx-auto md:hidden">
          <SwiperWrapper
            slides={[
              // slides have a tabIndex so that keyboard users on small screens can view each slide by pressing the tab key. But for screen reader users, the text alternative is written after, to get some semantic html. We add an alt here just so that screen reader users dont get to focus something that is empty and get the info they must go forward.
              <Image
                key="1"
                tabIndex={0}
                src={InitiativesFinanceMobile1}
                width={400}
                alt="1ère étape détaillée ci-dessous"
              />,
              <Image
                key="2"
                tabIndex={0}
                src={InitiativesFinanceMobile2}
                width={400}
                alt="2e étape détaillée ci-dessous"
              />,
              <Image
                key="3"
                tabIndex={0}
                src={InitiativesFinanceMobile3}
                width={400}
                alt="3e étape détaillée ci-dessous"
              />,
              <Image
                key="4"
                tabIndex={0}
                src={InitiativesFinanceMobile4}
                width={400}
                alt="4e étape détaillée ci-dessous"
              />,
            ]}
          />
        </div>
        <div className="sr-only">
          <h3 className="text-xl text-black font-bold">
            Étape 1 : Revue de la proposition
          </h3>
          <p className="mb-[1.75rem] mt-[0.875rem]">
            La proposition est-elle éligible et de qualité suffisante ?
          </p>
          <h3 className="text-xl text-black font-bold">
            Étape 2 : Discussion avec les projets
          </h3>
          <p className="mb-[1.75rem] mt-[0.875rem]">
            Clarification des attentes et améliorations du projet initial
          </p>
          <h3 className="text-xl text-black font-bold">
            Étape 3 : Validation (comité de sélection de la DINUM)
          </h3>
          <p className="mb-[1.75rem] mt-[0.875rem]">
            Sur la base des objectifs et des besoins prioritaires
          </p>
          <h3 className="text-xl text-black font-bold">
            Étape 4 : Début du travail ensemble
          </h3>
        </div>
      </div>
      <h2 className="sr-only">Proposer un projet</h2>
      <p className="w-full justify-center flex pt-10 pb-40">
        <Button
          variant="outline"
          href="https://www.demarches-simplifiees.fr/commencer/fonds-communs-numeriques-pour-la-suite-numerique"
        >
          Je propose mon projet&nbsp;!
        </Button>
      </p>
    </Layout>
  )
}
