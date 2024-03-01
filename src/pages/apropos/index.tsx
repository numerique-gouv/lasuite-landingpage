import React from "react";

import { Layout, ContentSection } from "@/components/Layout";
import { Header, SubTitle, Text } from "@/components/LegalTerms";
import { ADDRESS_DINUM, CONTACT_EMAIL } from "@/constant";

export default function Apropos() {
  return (
    <Layout title="À propos">
      <Header>À propos</Header>
      <ContentSection classNameChildren="items-start max-w-[54rem]">
        <div>
          <SubTitle>Éditeur</SubTitle>
          <Text>
            Équipe La Suite Numérique de la Direction interministérielle du
            numérique {ADDRESS_DINUM}.
          </Text>
        </div>
        <div>
          <SubTitle>Directeur de la publication</SubTitle>
          <Text>Directeur interministériel du numérique.</Text>
        </div>
        <div>
          <SubTitle>Copyright</SubTitle>
          <Text>
            Illustrations de la page accueil: Shutter Stock. Toute autre
            illustration : DINUM
          </Text>
        </div>
        <div>
          <SubTitle>Plus d&apos;infos ?</SubTitle>
          <Text>
            L&apos;équipe de La Suite Numérique peut être contactée directement
            à{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="underline decoration-2 underline-offset-4 transition ease-in-out delay-50 duration-300 hover:cursor-pointer"
              aria-label={`écrire à ${CONTACT_EMAIL}`}
            >
              {CONTACT_EMAIL}
            </a>
            .
          </Text>
        </div>
      </ContentSection>
    </Layout>
  );
}
