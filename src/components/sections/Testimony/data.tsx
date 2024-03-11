import { Br } from "@/components";
import { CardProps } from "./Card";

export const data: CardProps[] = [
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
