import Image from "next/image";
import { Callout } from "@/components/Callout";
import { Br } from "@/components/Br";
import { URL_SITE } from "@/constant";

import heroImage from "@/assets/hero-desktop.webp";
import heroImageMobile from "@/assets/hero-mobile.webp";
import LogoSvg from "@/assets/logo/suite-numerique.svg"

export const Hero = () => (
  <div className="hero relative overflow-hidden bg-dinum-white-0 ">
    <div className="flex flex-col justify-between items-start sm:items-center px-8 py-10 sm:py-20 md:bg-[url(/assets/bg-nid-abeille.webp)] md:bg-no-repeat md:bg-center">
      <h1 className="w-full flex justify-center pb-11">
        <Image
          src={LogoSvg}
          height={168}
          width={480}
          alt={URL_SITE}
          className="max-w-[80%]"
          priority
        />
      </h1>
      <p className="text-lg text-dinum-grey-1 max-w-[44rem] text-left sm:text-center pb-8 md:pb-0">
        <strong>
          La Suite numérique vise à fédèrer tous les agents et professionnels de
          la sphère publique{" "}
        </strong>{" "}
        autour d’applications disponibles à la carte et interconnectées, pour
        une gestion fluide et efficace du travail quotidien.
      </p>
      <Image
        src={heroImage}
        width={1000}
        alt="La Suite numérique est une suite d'outils disponible sur téléphones, tablettes et ordinateurs"
        className="mr-[-12%] hidden md:flex z-10"
        priority
        placeholder="blur"
      />
      <Image
        src={heroImageMobile}
        width={800}
        alt="La Suite numérique est une suite d'outils disponible sur téléphones, tablettes et ordinateurs"
        className="md:hidden z-10 pb-8"
        priority
        placeholder="blur"
      />
      <Callout>
        Travailler avec La Suite numérique,
        <Br /> c’est contribuer à notre souveraineté numérique.
      </Callout>
    </div>
  </div>
);
