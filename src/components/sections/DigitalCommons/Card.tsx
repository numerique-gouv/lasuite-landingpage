import Image from "next/image";
import { ExternalLink, LinkProps } from "@/components/Core";

export interface CardProps extends Omit<LinkProps, "children"> {
  img: string;
}

export const Card: React.FC<CardProps> = (props) => (
  <div className="flex flex-col items-center">
    <Image src={props.img} height={92} width={92} alt="" />
    <h4 className="text-lg text-dinum-grey-1 mt-6 mb-4">{props.title}</h4>
    <div className="flex gap-1 justify-center items-center">
      <ExternalLink
        className="text-sm underline text-dinum-blue-1 external-link-blue"
        href={props.href}
        title={`${props.title} - En savoir plus`}
      >
        En savoir plus
      </ExternalLink>
    </div>
  </div>
);
