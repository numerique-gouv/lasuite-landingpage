import { Br, Strong } from "@/components/Core";

export interface CardProps {
  title: string;
  target: string;
  text: string;
}

export const Card = ({ title, target, text }: CardProps) => (
  <div className="bg-dinum-white-0 p-8 w-full text-left">
    <h3>
      <span className="font-extrabold text-3xl text-dinum-blue-1">{title}</span>
      <Br className="inline" />
      <span className="text-lg text-dinum-grey-1">
        pour&nbsp;<Strong>{target}</Strong>
      </span>
    </h3>
    <p className="mt-8 text-lg text-dinum-grey-1 text-pretty">{text}</p>
  </div>
);
