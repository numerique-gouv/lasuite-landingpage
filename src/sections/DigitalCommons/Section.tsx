import { ContentSection } from "@/components/ContentSection";
import { SwiperWrapper as Swiper } from "@/components/Swiper";
import Image from "next/image";

import { content } from "./data";
import { Card } from "./Card";

export const Section = () => (
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
        {content.map((digitalCommon) => (
          <li key={digitalCommon.title}>
            <Card {...digitalCommon} />
          </li>
        ))}
      </ul>
      <div className="w-full md:hidden">
        <Swiper
          slides={content.map((digitalCommon) => (
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
