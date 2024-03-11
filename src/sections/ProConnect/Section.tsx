import Image from "next/image";
import { SwiperWrapper } from "@/components/Swiper";
import { ContentSection } from "@/components/ContentSection";
import { Br } from "@/components";

import { Card } from "./Card";
import { data } from "./data";

export const Section = () => (
  <ContentSection className="bg-dinum-white-1 text-left sm:text-center">
    <h2 className="px-4 text-3xl md:text-4xl font-bold text-center">
      Connecter tous les intervenants <Br /> de la sphère publique
    </h2>
    <Image src="/france-connect.svg" height={246} width={540} alt="" />
    <p className="text-lg text-dinum-grey-1 max-w-[44rem]">
      Le bouton Pro Connect est au cœur de La Suite numérique. <Br />
      Au même titre que France Connect relie les services publics numériques des
      citoyens et citoyennes,{" "}
      <strong>
        Pro Connect crée le lien entre les outils numériques des professionnels
        de la sphère publique.
      </strong>
    </p>
    <Image src="/button-fc.svg" height={150} width={350} alt="" />
    <h3 className="text-2xl text-dinum-blue-1 font-bold">
      Grâce au bouton Pro Connect, La Suite permet une action&nbsp;…
    </h3>
    <div className="hidden md:flex flex-row gap-3 md:gap-6 max-w-[54em]">
      {data.map((content) => (
        <Card {...content} key={content.title} />
      ))}
    </div>
    <div className="w-full md:hidden">
      <SwiperWrapper
        slides={data.map((content) => (
          <Card {...content} key={content.title} />
        ))}
      />
    </div>
  </ContentSection>
);
