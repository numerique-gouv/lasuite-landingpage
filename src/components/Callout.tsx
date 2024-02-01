import Image from "next/image";

export interface CalloutProps {
  children: any;
}

type UnionSVGProps = {
  className: string;
};

const UnionSVG = ({ className }: UnionSVGProps) => (
  <Image className={className} src="/union.svg" width={30} height={30} alt="" />
);

export const Callout = ({ children }: CalloutProps) => (
  <div className="w-[80%] max-w-[42rem] relative my-[30px] mx-auto">
    <UnionSVG className="flex absolute top-[-1.3rem] left-[-1.3rem] h-[1.3rem] w-[1.3rem]" />
    <div className="w-full flex justify-center text-left sm:text-center">
      <div className="text-xl sm:text-2xl text-dinum-blue-1 font-bold">
        {children}
      </div>
    </div>
    <UnionSVG className="rotate-180 flex absolute bottom-[-1.3rem] right-[-1.3rem] h-[1.3rem] w-[1.3rem]" />
  </div>
);
