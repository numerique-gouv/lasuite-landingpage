import { ContentSection } from "@/components/ContentSection";
import { SwiperWrapper as Swiper } from "@/components/Swiper";
import Image from "next/image";
import {ExternalLink} from "@/components";

interface CardProps {
  title: string;
  href: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ img, title, href }) => (
  <div className="flex flex-col items-center">
    <Image src={img} height={92} width={92} alt="" />
    <h3 className="text-lg text-dinum-grey-1 mt-6 mb-4">{title}</h3>
    <div className="flex gap-1 justify-center items-center">
      <ExternalLink
        className="text-sm underline text-dinum-blue-1 external-link-blue"
        href={href}
        aria-label={`${title} - En savoir plus`}
      >
        En savoir plus
      </ExternalLink>
    </div>
  </div>
);

const data: CardProps[] = [
  {
    title: "Big Blue Button",
    href: "https://bigbluebutton.org/",
    img: "/digital-commons/big-blue-button.png",
  },
  {
    title: "Collabora",
    href: "https://www.collaboraoffice.com/",
    img: "/digital-commons/collabora.png",
  },
  {
    title: "Only Office",
    href: "https://www.onlyoffice.com/fr/",
    img: "/digital-commons/only-office.png",
  },
  {
    title: "OpenXChange",
    href: "https://www.open-xchange.com/",
    img: "/digital-commons/ox.png",
  },
  {
    title: "Grist",
    href: "https://www.getgrist.com/",
    img: "/digital-commons/grist.png",
  },
  {
    title: "Jitsi",
    href: "https://jitsimeet.fr/",
    img: "/digital-commons/jitsi.png",
  },
  {
    title: "Matrix",
    href: "https://matrix.org/",
    img: "/digital-commons/matrix.png",
  },
];

export const DigitalCommons = () => (
  <>
    <ContentSection className="bg-dinum-white-0 text">
      <h2 className="text-3xl md:text-4xl max-w-[33rem] font-bold">
        <span aria-hidden={true}>
          Des applications à la carte et inter-connectées…
        </span>
        <span className="sr-only">
          Des applications à la carte et inter-connectées basées sur des Communs
          Numériques Libres
        </span>
      </h2>
      <Image
        src="/logos-applications.svg"
        height={400}
        width={1300}
        className="md:mt-5 hidden sm:flex"
        alt=""
      />
      <Image
        src="/logos-applications-mobile.svg"
        height={400}
        width={390}
        alt=""
        className="mb-[-3rem] mt-[-1.5rem] sm:hidden"
      />
    </ContentSection>
    <ContentSection className="bg-dinum-white-0 pt-0 md:pt-0">
      <div
        aria-hidden={true}
        className="text-3xl md:text-4xl max-w-[33rem] font-bold"
      >
        … basées sur des communs numériques libres
      </div>
      <ul className="hidden md:flex gap-6 flex-wrap justify-center py-10">
        {data.map((digitalCommon) => (
          <li key={digitalCommon.title}>
            <Card {...digitalCommon} />
          </li>
        ))}
      </ul>
      <div className="w-full md:hidden">
        <Swiper
          slides={data.map((digitalCommon) => (
            <Card key={digitalCommon.title} {...digitalCommon} />
          ))}
        />
      </div>
      {/*<Callout>*/}
      {/*  La Suite est un ensemble de communs numériques libres reliés grâce au bouton Pro Connect*/}
      {/*</Callout>*/}
      <p className="text-lg text-dinum-grey-1 max-w-[38em] text-left sm:text-center">
        Les applications de La Suite numérique respectent un cahier des charges
        vertueux :{" "}
        <strong>
          être des logiciels libres et respecter une charte graphique commune.
        </strong>
      </p>
    </ContentSection>
  </>
);
