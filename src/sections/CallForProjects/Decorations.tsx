import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { CommonProps } from "@/types";

const WhiteUnion: React.FC<Omit<CommonProps, "children">> = ({ className }) => (
  <Image
    className={twMerge("absolute", className)}
    src="/call-for-projects/white-union.svg"
    width={30}
    height={30}
    alt=""
  />
);

const WhiteSquare: React.FC<Omit<CommonProps, "children">> = ({
  className,
}) => (
  <span
    className={twMerge(
      "h-[28px] w-[28px] bg-dinum-white-0 absolute z-10",
      className,
    )}
  />
);

export const DecorationOdd = () => (
  <>
    <WhiteSquare className="top-0 right-[28px]" />
    <WhiteSquare className="top-[28px] right-0" />
    <WhiteSquare className="bottom-[28px] left-0" />
    <WhiteSquare className="bottom-0 left-[28px]" />
    <WhiteSquare className="bottom-0 left-[56px]" />
    <WhiteUnion className="bottom-[20px] right-[20px]" />
  </>
);

export const DecorationEven = () => (
  <>
    <WhiteSquare className="bottom-0 right-0" />
    <WhiteSquare className="bottom-[28px] right-[28px]" />
    <WhiteUnion className="top-[20px] left-[20px] rotate-180" />
  </>
);
