import React from "react";

import { Header, List, SubTitle, Text } from "@/components/LegalTerms";
import { ADDRESS_DINUM, CONTACT_EMAIL, URL_SITE } from "@/constant";
import { ExternalLink, Strong } from "@/components/Core";
import { Layout, ContentSection } from "@/components/Layout";

export default function Accessibilite() {
  return (
    <Layout>
      <Header>Accessibilité</Header>
      <ContentSection classNameChildren="items-start max-w-[54rem]">
        <Text>
          <Strong>La Suite numérique</Strong> s’engage à rendre ses services
          numériques accessibles, conformément à l’article 47 de la loi n°
          2005-102 du 11 février 2005.
        </Text>
        <div>
          <SubTitle>Déclaration d’accessibilité</SubTitle>
          <Text>
            <em>Établie le 20 décembre 2023.</em>
          </Text>
          <Text>
            Cette déclaration d’accessibilité s’applique au site{" "}
            <Strong>{URL_SITE}</Strong>.
          </Text>
        </div>
        <div>
          <SubTitle>État de conformité</SubTitle>
          <Text>
            {URL_SITE} est non conforme avec le RGAA 4.1. Le site n’a{" "}
            <Strong>pas encore été audité</Strong>.
          </Text>
        </div>
        <div>
          <SubTitle className="text-[2rem] leading-9 font-bold mb-4">
            Amélioration et contact
          </SubTitle>
          <Text>
            Si vous n’arrivez pas à accéder à un contenu ou à un service, vous
            pouvez contacter le responsable de {URL_SITE} pour être orienté vers
            une alternative accessible ou obtenir le contenu sous une autre
            forme.
          </Text>
          <List>
            <li>
              E-mail :{" "}
              <a
                href={`mailto: ${CONTACT_EMAIL}`}
                aria-label={`écrire à ${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>Adresse : {ADDRESS_DINUM}</li>
          </List>
          <Text>Nous essayons de répondre dans les 2 jours ouvrés.</Text>
        </div>
        <div>
          <SubTitle>Voie de recours</SubTitle>
          <Text>
            Cette procédure est à utiliser dans le cas suivant : vous avez
            signalé au responsable du site internet un défaut d’accessibilité
            qui vous empêche d’accéder à un contenu ou à un des services du
            portail et vous n’avez pas obtenu de réponse satisfaisante.
          </Text>
          <Text>Vous pouvez :</Text>
          <List>
            <li>
              Écrire un message au{" "}
              <ExternalLink
                href="https://formulaire.defenseurdesdroits.fr/formulaire_saisine/"
                className="underline underline-offset-4"
                title="Défenseur des droits"
              >
                Défenseur des droits
              </ExternalLink>
            </li>
            <li>
              Contacter le délégué du{" "}
              <ExternalLink
                href="https://www.defenseurdesdroits.fr/carte-des-delegues"
                className="underline underline-offset-4"
                title="Défenseur des droits dans votre région"
              >
                Défenseur des droits dans votre région
              </ExternalLink>
            </li>
            <li>
              Envoyer un courrier par la poste (gratuit, ne pas mettre de
              timbre) : Défenseur des droits Libre réponse 71120 75342 Paris
              CEDEX 07
            </li>
          </List>
        </div>
      </ContentSection>
    </Layout>
  );
}
