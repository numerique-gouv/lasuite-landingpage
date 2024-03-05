import { ContentPage, ContentSection } from "@/components/Layout";
import { SubTitle, Text } from "@/components/LegalTerms";
import { ExternalLink } from "@/components/Core";
import React from "react";
import { URL_SITE } from "@/constant";

export default function Suivi() {
  return (
    <ContentPage title="Suivi d’audience et vie privée">
      <ContentSection classNameChildren="items-start max-w-[54rem]">
        <div>
          <SubTitle>Cookies déposés</SubTitle>
          <Text>
            Ce site dépose un petit fichier texte (un « cookie ») sur votre
            ordinateur lorsque vous le consultez. Cela nous permet de mesurer le
            nombre de visites et de comprendre quelles sont les pages les plus
            consultées.
          </Text>
          <Text className="font-serif">
            Vous pouvez vous opposer au suivi de votre navigation sur ce site
            web. Cela protégera votre vie privée, mais empêchera également le
            propriétaire d&apos;apprendre de vos actions et de créer une
            meilleure expérience pour vous et les autres utilisateurs.
          </Text>
          <iframe
            className="w-full"
            src="https://stats.data.gouv.fr/index.php?module=CoreAdminHome&amp;action=optOut&amp;language=fr"
          ></iframe>
        </div>
        <div>
          <SubTitle>
            Ce site n’affiche pas de bannière de consentement aux cookies,
            pourquoi ?
          </SubTitle>
          <Text>
            C’est vrai, vous n’avez pas eu à cliquer sur un bloc qui recouvre la
            moitié de la page pour dire que vous êtes d’accord avec le dépôt de
            cookies — même si vous ne savez pas ce que ça veut dire !
          </Text>
          <Text>
            Rien d’exceptionnel, pas de passe-droit lié à un .gouv.fr . Nous
            respectons simplement la loi, qui dit que certains outils de suivi
            d’audience, correctement configurés pour respecter la vie privée,
            sont exemptés d’autorisation préalable.
          </Text>
          <p className="mb-3">
            Nous utilisons pour cela{" "}
            <ExternalLink
              href="https://matomo.org/"
              className="underline decoration-1 hover:decoration-2 transition ease-in-out delay-50 duration-300 underline-offset-4"
            >
              Matomo
            </ExternalLink>
            , un outil{" "}
            <ExternalLink
              href="https://matomo.org/free-software/"
              className="underline decoration-1 hover:decoration-2 transition ease-in-out delay-50 duration-300 underline-offset-4"
            >
              libre
            </ExternalLink>
            , paramétré pour être en conformité avec la{" "}
            <ExternalLink
              href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies-solutions-pour-les-outils-de-mesure-daudience"
              className="underline decoration-1 hover:decoration-2 transition ease-in-out delay-50 duration-300 underline-offset-4"
            >
              recommandation « Cookies »
            </ExternalLink>{" "}
            de la <span className="decoration-dotted underline">CNIL</span>.
            Cela signifie que votre adresse IP, par exemple, est anonymisée
            avant d’être enregistrée. Il est donc impossible d’associer vos
            visites sur ce site à votre personne.
          </p>
        </div>
        <div>
          <SubTitle>
            Je contribue à enrichir vos données, puis-je y accéder ?
          </SubTitle>
          <Text>
            Bien sûr ! Les statistiques d’usage de la majorité de nos produits,
            dont {URL_SITE}, sont disponibles en accès libre sur{" "}
            <ExternalLink
              href="https://stats.data.gouv.fr/index.php?module=CoreHome&action=index&idSite=21&period=range&date=previous30#?period=range&date=previous30&module=VisitsSummary&action=index&idSite=21&category=Dashboard_Dashboard&subcategory=1"
              className="underline decoration-1 hover:decoration-2 transition ease-in-out delay-50 duration-300 underline-offset-4"
            >
              stats.data.gouv.fr
            </ExternalLink>{" "}
            .
          </Text>
        </div>
      </ContentSection>
    </ContentPage>
  );
}
