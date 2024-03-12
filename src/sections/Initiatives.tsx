import Image from "next/image";
import { SwiperWrapper } from "@/components/SwiperWrapper";
import { ContentSection } from "@/components/ContentSection";
import {Br} from "@/components/Br";
import {Button} from "@/components/Button";
import {CommonProps} from "@/types";
import {twMerge} from "tailwind-merge";

import IllustrationIdea from "@/assets/idea.webp";
import StripeWhiteSvg from "@/assets/stripe-white.svg";


const WhiteSquare: React.FC<Omit<CommonProps, "children">> = ({ className}) => (
  <span
    className={twMerge(
      "h-[28px] w-[28px] bg-dinum-white-0 absolute z-10",
      className,
    )}
  />
);

const DecorationOdd = () => (
  <>
    <WhiteSquare className="top-0 right-[28px]" />
    <WhiteSquare className="top-[28px] right-0" />
    <WhiteSquare className="bottom-[28px] left-0" />
    <WhiteSquare className="bottom-0 left-[28px]" />
    <WhiteSquare className="bottom-0 left-[56px]" />
    <Image
      className="absolute bottom-[20px] right-[20px]"
      src={StripeWhiteSvg}
      width={30}
      height={30}
      alt=""
    />
  </>
);

const DecorationEven = () => (
  <>
    <WhiteSquare className="bottom-0 right-0" />
    <WhiteSquare className="bottom-[28px] right-[28px]" />
    <Image
      className="absolute top-[20px] left-[20px] rotate-180"
      src={StripeWhiteSvg}
      width={30}
      height={30}
      alt=""
    />
  </>
);

interface CardProps {
  title: string;
  body: any;
  index: number;
}

const Card = ({ title, body, index }: CardProps) => (
  <div
    tabIndex={0}
    className="bg-dinum-blue-1 text-dinum-white-0 text-left px-6 py-14 sm:p-14 relative focus-visible:m-2 md:basis-1/2"
  >
    <h3 className="text-3xl font-extrabold mb-7">
      Qu’est ce qu’un <Br /> {title}&nbsp;?
    </h3>
    <p className="text-lg" dangerouslySetInnerHTML={{ __html: body }} />
    {index % 2 === 0 ? <DecorationEven /> : <DecorationOdd />}
  </div>
);

const data: Omit<CardProps, "index">[] = [
  {
    title: "commun numérique",
    body: "Les communs numériques sont des ressources partagées sous forme de biens immatériels utilisables librement. Ils sont produits et gérés par une communauté ouverte d’acteurs partageant des valeurs et des règles de collaboration ou de gouvernance. Il peut s’agir : de logiciels et librairies libres exploitables dans de nouvelles solutions, de standards ouverts, de données et contenus ouverts.",
  },
  {
    title: "logiciel libre",
    body: "Un logiciel libre est un programme informatique dont l’utilisation, la modification et la distribution sont permises, généralement sans coût financier. L’aspect clé des logiciels libres réside dans la liberté qu'ils offrent à leurs utilisateurs. Cela signifie que les utilisateurs ont le droit d’exécuter, copier, distribuer, étudier, modifier et améliorer le logiciel. Ces libertés sont garanties par des licences spécifiques. Les logiciels libres encouragent la collaboration et la transparence, favorisant ainsi la création et le partage ouvert de connaissances informatiques.",
  },
];


export const Initiatives = () => (
  <>
    <ContentSection className="bg-dinum-white-1 text-left sm:text-center">
      <h2 className="text-3xl md:text-4xl font-bold max-w-[34rem] text-center">
        Contribuer à La&nbsp;Suite numérique, c’est possible&nbsp;!
      </h2>
      <Image
        src={IllustrationIdea}
        height={460}
        width={700}
        alt=""
        placeholder="blur"
      />
      <p className="text-lg text-dinum-grey-1 max-w-[38rem] text-pretty">
        Vous êtes une entité publique ou privée et vous portez une solution
        collaborative structurée sous forme de commun numérique ou de logiciel
        libre ? Vous pouvez intégrer La Suite numérique{" "}
        <strong>
          pour être utile à des milliers d&apos;agents publics en France&nbsp;!
        </strong>
      </p>
      <p className="text-lg text-dinum-grey-1 max-w-[38rem] text-pretty">
        Obtenez un <strong>financement</strong> et un{" "}
        <strong>accompagnement</strong> pour travailler avec nous, dans le cadre
        du fonds communs numériques pour La Suite collaborative.
      </p>
      <p>
        <Button
          aria-label="En savoir plus sur comment contribuer à La Suite numérique"
          href="/communs"
        >
          En savoir plus
        </Button>
      </p>
    </ContentSection>
    <ContentSection
      className="bg-dinum-white-0 pt-0 sm:pt-[50px]"
      classNameChildren="px-0 sm:px-4"
    >
      <div className="hidden md:flex flex-row gap-10">
        {data.map((value, index) => (
          <Card {...value} key={value?.title} index={index} />
        ))}
      </div>
      <div className="w-full md:hidden">
        <SwiperWrapper
          slides={data.map((value, index) => (
            <Card {...value} key={value?.title} index={index} />
          ))}
        />
      </div>
    </ContentSection>
  </>
);
