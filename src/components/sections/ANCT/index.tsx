import Image from "next/image";
import { ContentSection } from "@/components/Layout";
import { Strong } from "@/components/Core";

export const Section = () => (
  <ContentSection className="bg-dinum-white-0">
    <h2 className="text-3xl md:text-4xl font-bold flex flex-row items-center gap-6">
      <Image
        src="/anct/suite-territoriale.svg"
        height={132}
        width={250}
        alt="La Suite Territoriale"
      />
    </h2>
    <div className="flex flex-col gap-4">
      <p className="text-lg text-dinum-grey-1 max-w-[45em] text-left sm:text-center">
        Afin de{" "}
        <Strong>
          renforcer la cybersécurité des collectivités territoriales,
        </Strong>{" "}
        ANCT et ANSSI proposent de contribuer à l’ouverture de la Suite
        numérique aux élus locaux et agents publics territoriaux.
      </p>
      <p className="text-lg text-dinum-grey-1 max-w-[45em] text-left sm:text-center">
        <Strong>
          La Suite territoriale vise ainsi à mettre à disposition des
          collectivités un ensemble de services numériques sécurisés,
        </Strong>{" "}
        notamment nom de domaine, serveur mail et espace de stockage minimal.
      </p>
      <p className="text-lg text-dinum-grey-1 max-w-[45em] text-left sm:text-center">
        <Strong>
          Ces services de base seront complétés par des services opérés au
          niveau national
        </Strong>{" "}
        (DINUM, ANCT, ANSSI) <Strong>comme au niveau local</Strong> (opérateurs
        publics de services numériques) à travers la Suite numérique :
        visioconférence, transfert de fichiers lourds, tableur collaboratif…
      </p>
      <p className="text-lg text-dinum-grey-1 max-w-[45em] text-left sm:text-center">
        <Strong>
          L&apos;ANCT propose aux collectivités territoriales et partenaires
          locaux de participer aux développements de la Suite territoriale
        </Strong>{" "}
        en rejoignant le groupe pilote ainsi que les ateliers ouverts organisés
        à partir de mars 2024.
      </p>
    </div>
    <div className="flex flex-col gap-8 items-center md:flex-row mb-10">
      <Image src="/anct/anct.svg" height={60} width={136} alt="" />
      <Image src="/anct/anssi.svg" height={60} width={60} alt="" />
      <Image src="/anct/france-2030.svg" height={60} width={60} alt="" />
    </div>
  </ContentSection>
);
