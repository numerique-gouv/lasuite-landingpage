import Image from 'next/image'

import StripeBlueSvg from '@/assets/stripe-blue.svg'

export interface CalloutProps {
  children: any
}

export const Callout = ({ children }: CalloutProps) => (
  <div className="w-[80%] max-w-[42rem] relative my-[30px] mx-auto">
  </div>
)
