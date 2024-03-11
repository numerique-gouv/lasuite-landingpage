import { SwiperWrapper } from "@/components/Swiper";
import { ContentSection } from "@/components/ContentSection";

import { Br } from "@/components";

import Image from "next/image";
import { ReactElement } from "react";


interface CardProps {
  img: string;
  title: string;
  key: string;
  quote: ReactElement;
  entity: string;
}

const Card = ({ title, quote, img, entity }: CardProps) => (
  <div className="flex flex-col bg-white p-7 text-left flex-1">
    <h3 className="h-[114px] w-[140px] relative">
      <Image
        src={img}
        layout={"fill"}
        objectFit={"contain"}
        alt={`Témoignage - ${entity}`}
      />
    </h3>
    <div className="flex flex-row items-center mt-7 gap-4 pb-5">
      <Image src="/testimony/account.svg" height={60} width={60} alt="" />
      <p className="font-bold text-dinum-grey-2">{title}</p>
    </div>
    <blockquote className="text-dinum-grey-1 leading-6 text-pretty">
      {quote}
    </blockquote>
  </div>
);

const data: CardProps[] = [
  {
    quote: (
      <p className="text-dinum-grey-1">
        Je suis proviseur adjoint d’une cité scolaire.{" "}
        <strong>
          Tchap est une application respectueuse des données personnelles.
        </strong>{" "}
        Je m’en sers pour cloisonner le monde personnel et professionnel parce
        que le monde enseignant peut devenir invasif.{" "}
        <strong>
          Je m’en sers avec le personnel de l’éducation nationale en fonction
          des missions, avec des collègues du même bassin, aussi pour des
          échanges directs plus informels.
        </strong>
      </p>
    ),
    title: "Agent",
    img: "/testimony/logo-education-nationale.svg",
    key: "educ-nat",
    entity: "Ministère de l'éducation nationale et de la jeunesse",
  },
  {
    quote: (
      <p className="text-dinum-grey-1">
        Je fais de l’animation de projets inter-collectivités donc j&apos;ai
        beaucoup de liens avec des partenaires de l’Etat.{" "}
        <strong>
          J’utilise Tchap parce que j&apos;étais intéressé par l’open source.
        </strong>
        <Br />
        <Br />
        Mon prédécesseur avait fait une expérimentation avec quelques
        collectivités mais nous{" "}
        <strong>
          on veut l&apos;utiliser tous les jours, pour l&apos;animation au
          quotidien des nos communautés.
        </strong>
      </p>
    ),
    title: "Agent de la collectivité territoriale",
    img: "/testimony/logo-anct.svg",
    key: "anct",
    entity: "Agence nationale de la cohésion des territoires",
  },
  {
    quote: (
      <p className="text-dinum-grey-1">
        Avec la dernière mise à jour de Tchap, on a les{" "}
        <strong>mêmes fonctionnalités qu’avec WhatsApp,</strong> mais en{" "}
        <strong>plus confidentiel.</strong> Bravo !
      </p>
    ),
    title: "Agent",
    img: "/testimony/logo-interieur.svg",
    key: "interieur",
    entity: "Ministère de l'intérieur",
  },
];

export const Testimonies = () => (
  <ContentSection className="bg-dinum-white-1 text-left sm:text-center">
    <h2 className="text-3xl md:text-4xl font-bold max-w-[30rem] text-center px-4 ">
      Ils utilisent déjà des applications de La&nbsp;Suite…
    </h2>
    <p className="text-lg text-dinum-grey-1 max-w-[38rem]">
      La Suite est un projet en construction, certaines de ses applications sont
      encore en phase de test, mais{" "}
      <strong>
        d&apos;autres sont déjà utilisées par des milliers d&apos;agents et
        toujours plus chaque jour !{" "}
      </strong>
      <Br />
      Découvrez les applications stars de La Suite :
    </p>
    <div className="hidden md:flex flex-row gap-7">
      {data.map((testimony) => (
        <Card {...testimony} key={testimony.key} />
      ))}
    </div>
    <div className="w-full md:hidden">
      <SwiperWrapper
        slides={data.map((testimony) => (
          <Card {...testimony} key={testimony.key} />
        ))}
      />
    </div>
  </ContentSection>
);
