import { SwiperWrapper } from "@/components/Swiper";
import { ContentSection } from "@/components/sections";

import { Br } from "@/components";

import { Card } from "./Card";
import { data } from "./data";

export const Section = () => (
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
