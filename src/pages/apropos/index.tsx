import React from "react";

import { ContentPage } from "@/components/Layout";
import { SubTitle, Text } from "@/components/LegalTerms";
import { ADDRESS_DINUM, CONTACT_EMAIL } from "@/constant";

export default function Apropos() {
  return (
    <ContentPage title="À propos">
      <SubTitle>Éditeur</SubTitle>
      <Text>
        Équipe La Suite Numérique de la Direction interministérielle du
        numérique {ADDRESS_DINUM}.
      </Text>
      <SubTitle>Directeur de la publication</SubTitle>
      <Text>Directeur interministériel du numérique.</Text>
      <SubTitle>Copyright</SubTitle>
      <Text>
        Illustrations de la page accueil: Shutter Stock. Toute autre
        illustration : DINUM
      </Text>
      <SubTitle>Plus d&apos;infos ?</SubTitle>
      <Text>
        L&apos;équipe de La Suite Numérique peut être contactée directement à{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="underline decoration-1 hover:decoration-2 underline-offset-4 transition ease-in-out delay-50 duration-300 hover:cursor-pointer"
          aria-label={`écrire à ${CONTACT_EMAIL}`}
        >
          {CONTACT_EMAIL}
        </a>
        .
      </Text>
    </ContentPage>
  );
}
