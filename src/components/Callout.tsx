import Image from 'next/image'

import StripeBlueSvg from '@/assets/stripe-blue.svg'

export interface CalloutProps {
  children: any
}

export const Callout = ({ children }: CalloutProps) => (
  <div className="w-[80%] max-w-[42rem] relative my-[30px] mx-auto">
    <Image
      className="flex absolute top-[-1.3rem] left-[-1.3rem] h-[1.3rem] w-[1.3rem]"
      src={StripeBlueSvg}
      width={30}
      height={30}
      alt=""
    />
    <div className="w-full flex justify-center text-left sm:text-center">
      <p className="text-xl sm:text-2xl text-blue-1 font-bold">{children}</p>
    </div>
    <Image
      className="rotate-180 flex absolute bottom-[-1.3rem] right-[-1.3rem] h-[1.3rem] w-[1.3rem]"
      src={StripeBlueSvg}
      width={30}
      height={30}
      alt=""
    />
  </div>
)
