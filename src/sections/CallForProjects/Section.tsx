import Image from "next/image";
import { SwiperWrapper } from "@/components/Swiper";
import { ContentSection } from "@/components/ContentSection";
import { Button } from "@/components";

import { data } from "./data";
import { Card } from "./Card";

import IllustrationIdea from "../../../public/call-for-projects/illustration.webp";

export const Section = () => (
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
