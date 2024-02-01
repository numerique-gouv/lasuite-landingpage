import { Layout, ContentSection } from "@/components/Layout";
import { SubTitle, Header, Text } from "@/components/LegalTerms";

export default function Suivi() {
  return (
    <Layout>
      <Header>Suivi d&apos;audience et vie privée</Header>
      <ContentSection classNameChildren="items-start max-w-[54rem]">
        <div>
          <SubTitle>Cookies déposés</SubTitle>
          <p className="mb-3">Nous ne déposons aucun cookie.</p>
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
            Nous n’utilisons aucun outil pour surveiller les usages du site.
          </p>
        </div>
        <div>
          <SubTitle>
            Je contribue à enrichir vos données, puis-je y accéder ?
          </SubTitle>
          <Text>
            Les statistisques d&apos;usage de nos produits ne sont pas encore en
            accès libre.
          </Text>
        </div>
      </ContentSection>
    </Layout>
  );
}
