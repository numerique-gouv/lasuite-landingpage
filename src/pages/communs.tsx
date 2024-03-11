import Image from "next/image";
import { ButtonExternalLink } from "@/components/ExternalLink";
import { Br } from "@/components/BreakLine";
import { Layout } from "@/components/Layout";

import LogoSvg from "@/assets/logo/suite-numerique.svg"
import InitiativesPlaning from "@/assets/initiatives-planing.svg"
import InitiativesFinance from "@/assets/initiatives-finance.svg"

export default function Communs() {
  return (
    <Layout title="Le Fonds Communs Numériques">
      <div className="hero relative overflow-hidden bg-dinum-white-0 ">
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
            <p className="text-lg text-dinum-grey-1 mb-[1.75rem]">
              Avec <strong>La Suite numérique</strong>, notre défi est
              d’apporter aux agents publics de nouveaux outils de travail
              ouverts et propices aux usages collaboratifs.
            </p>
            <p className="text-lg text-dinum-grey-1 mb-[3rem]">
              La DINUM ne développe pas directement les produits de La Suite
              numérique, mais s’emploie à constituer un système inter-opérable
              et simple d’utilisation, composé d’outils développés par d’autres
              acteurs. Avec ce fonds, notre objectif est de contribuer à
              consolider les écosystèmes autour des produits et briques
              techniques que nous utilisons. Vous êtes une entité publique ou
              privée et vous portez une solution collaborative structurée sous
              forme de commun numérique&nbsp;? <Br className="inline" />{" "}
              <b className="text-dinum-grey-2">
                Obtenez un financement et un accompagnement pour travailler avec
                nous, dans le cadre du Fonds Communs Numériques pour La Suite
                numérique.
              </b>{" "}
              Le fonds a vocation à soutenir des projets visant le développement
              de nouvelles fonctionnalités autant que des projets visant à
              favoriser la pérennité et à l’évolutivité des produits (ex :
              re-factorisation)
            </p>
            <h2 className="text-xl font-bold mb-[1.75rem]">
              {" "}
              De quoi bénéficient les projets sélectionnés&nbsp;?
            </h2>
            <ul className="text-lg text-dinum-grey-1 list-disc pl-10">
              <li>
                Un ticket de financement allant jusqu&apos;à{" "}
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
      <div className="w-full justify-center flex">
        <Image src={InitiativesPlaning} width={800} height={640} alt="" />
      </div>
      <div className="flex flex-col">
        <div className="text-left px-4 text-lg text-dinum-grey-1 max-w-[40em] mx-auto">
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
        <div className="text-left px-4 text-lg text-dinum-grey-1 max-w-[40em] mx-auto">
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
        <Image src={InitiativesFinance} width={800} height={640} alt="" />
      </div>
      <div className="w-full justify-center flex pt-10 pb-40">
        <ButtonExternalLink href="https://www.demarches-simplifiees.fr/commencer/fonds-communs-numeriques-pour-la-suite-numerique">
          Je propose mon projet !
        </ButtonExternalLink>
      </div>
    </Layout>
  );
}
