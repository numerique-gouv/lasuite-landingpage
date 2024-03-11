import React from "react";

import { ContentPage } from "@/components";
import { ADDRESS_DINUM, CONTACT_EMAIL } from "@/constant";

export default function Apropos() {
  return (
    <ContentPage title="À propos">
      <h2>Éditeur</h2>
      <p>
        Équipe La Suite Numérique de la Direction interministérielle du
        numérique {ADDRESS_DINUM}.
      </p>
      <h2>Directeur de la publication</h2>
      <p>Directeur interministériel du numérique.</p>
      <h2>Copyright</h2>
      <p>
        Illustrations de la page accueil: Shutter Stock. Toute autre
        illustration : DINUM
      </p>
      <h2>Plus d&apos;infos ?</h2>
      <p>
        L&apos;équipe de La Suite Numérique peut être contactée directement à{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="underline decoration-1 hover:decoration-2 underline-offset-4 transition ease-in-out delay-50 duration-300 hover:cursor-pointer"
          aria-label={`écrire à ${CONTACT_EMAIL}`}
        >
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </ContentPage>
  );
}
