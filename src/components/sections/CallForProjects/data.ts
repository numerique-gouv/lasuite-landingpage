import { CardProps } from "./Card";

export type QuestionProps = Omit<CardProps, "index">;

export const data: QuestionProps[] = [
  {
    title: "commun numérique",
    body: "Les communs numériques sont des ressources partagées sous forme de biens immatériels utilisables librement. Ils sont produits et gérés par une communauté ouverte d’acteurs partageant des valeurs et des règles de collaboration ou de gouvernance. Il peut s’agir : de logiciels et librairies libres exploitables dans de nouvelles solutions, de standards ouverts, de données et contenus ouverts.",
  },
  {
    title: "logiciel libre",
    body: "Un logiciel libre est un programme informatique dont l’utilisation, la modification et la distribution sont permises, généralement sans coût financier. L’aspect clé des logiciels libres réside dans la liberté qu'ils offrent à leurs utilisateurs. Cela signifie que les utilisateurs ont le droit d’exécuter, copier, distribuer, étudier, modifier et améliorer le logiciel. Ces libertés sont garanties par des licences spécifiques. Les logiciels libres encouragent la collaboration et la transparence, favorisant ainsi la création et le partage ouvert de connaissances informatiques.",
  },
];
