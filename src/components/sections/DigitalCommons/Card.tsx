import Image from "next/image";
import { ExternalLink, LinkProps } from "@/components/Core";

export interface CardProps {
  title: string;
  href: string;
  img: string;
}

export const Card: React.FC<CardProps> = ({ img, title, href }) => (
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
