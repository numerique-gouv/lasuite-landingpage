import { CardProps } from "./Card";

export type QuestionProps = Omit<CardProps, "index">;

export const data: QuestionProps[] = [
  {
    title: "Commun Numérique",
    body: "Le terme &quot;Commun Numérique&quot; fait référence à un ensemble de ressources ou de connaissances partagées en ligne, accessibles à un large public. Ces ressources peuvent inclure des logiciels, des données, des documents, des informations ou d'autres contenus numériques qui sont disponibles de manière collective et souvent gratuite. L'idée sous-jacente est de favoriser l’accès ouvert et partagé à des biens numériques dans l'intérêt commun, encourageant ainsi la collaboration et la création collective dans le monde numérique.",
  },
  {
    title: "Logiciel libre",
    body: "Un logiciel libre est un programme informatique dont l’utilisation, la modification et la distribution sont permises, généralement sans coût financier. L’aspect clé des logiciels libres réside dans la liberté qu'ils offrent à leurs utilisateurs. Cela signifie que les utilisateurs ont le droit d’exécuter, copier, distribuer, étudier, modifier et améliorer le logiciel. Ces libertés sont garanties par des licences spécifiques. Les logiciels libres encouragent la collaboration et la transparence, favorisant ainsi la création et le partage ouvert de connaissances informatiques.",
  },
];
