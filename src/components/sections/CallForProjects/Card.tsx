import { Br } from "@/components/Core";
import { DecorationEven, DecorationOdd } from "./Decorations";

export interface CardProps {
  title: string;
  body: any;
  index: number;
}

export const Card = ({ title, body, index }: CardProps) => (
  <div
    tabIndex={0}
    className="bg-dinum-blue-1 text-dinum-white-0 text-left px-6 py-14 sm:p-14 relative focus-visible:m-2"
  >
    <h3 className="text-3xl font-extrabold mb-7">
      Qu’est ce qu’un <Br /> {title}&nbsp;?
    </h3>
    <p className="text-lg" dangerouslySetInnerHTML={{ __html: body }} />
    {index % 2 === 0 ? <DecorationEven /> : <DecorationOdd />}
  </div>
);
