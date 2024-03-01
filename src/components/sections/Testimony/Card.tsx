import Image from "next/image";
import { ReactElement } from "react";

export interface CardProps {
  img: string;
  title: string;
  key: string;
  quote: ReactElement;
  entity: string;
}

export const Card = ({ title, quote, img, entity }: CardProps) => (
  <div className="flex flex-col bg-white p-7 text-left flex-1">
    <h3 className="h-[114px] w-[140px] relative">
      <Image
        src={img}
        layout={"fill"}
        objectFit={"contain"}
        alt={`Témoignage - ${entity}`}
      />
    </h3>
    <div className="flex flex-row items-center mt-7 gap-4 pb-5">
      <Image src="/testimony/account.svg" height={60} width={60} alt="" />
      <p className="text-sm font-bold text-dinum-grey-2">{title}</p>
    </div>
    <blockquote className="text-sm text-dinum-grey-1 leading-6 text-pretty">
      {quote}
    </blockquote>
  </div>
);
