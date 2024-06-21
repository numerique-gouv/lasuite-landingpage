import type { ReactElement } from 'react'
import Image from 'next/image'
import { SwiperWrapper } from '@/components/SwiperWrapper'
import { ContentSection } from '@/components/ContentSection'
import { Button } from '@/components/Button'

import IllustrationIdea from '@/assets/idea.webp'
import StripeWhiteSvg from '@/assets/stripe-white.svg'

const WhiteSquare: React.FC<{ className: string }> = ({ className }) => (
  <span
    className={`h-[28px] w-[28px] bg-white absolute z-10 ${className || ''}`}
  />
)

const DecorationOdd = () => (
  <>
    <WhiteSquare className="top-0 right-[28px]" />
    <WhiteSquare className="top-[28px] right-0" />
    <WhiteSquare className="bottom-[28px] left-0" />
    <WhiteSquare className="bottom-0 left-[28px]" />
    <WhiteSquare className="bottom-0 left-[56px]" />
    <Image
      className="absolute bottom-[20px] right-[20px]"
      src={StripeWhiteSvg}
      width={30}
      height={30}
      alt=""
    />
  </>
)

const DecorationEven = () => (
  <>
    <WhiteSquare className="bottom-0 right-0" />
    <WhiteSquare className="bottom-[28px] right-[28px]" />
    <Image
      className="absolute top-[20px] left-[20px] rotate-180"
      src={StripeWhiteSvg}
      width={30}
      height={30}
      alt=""
    />
  </>
)

interface CardProps {
  question: ReactElement | string
  answer: ReactElement | string
  index: number
}

const Card = ({ question, answer, index }: CardProps) => (
  <div
    tabIndex={0}
    className="bg-blue-1 text-white text-left px-6 py-14 sm:p-14 relative focus-visible:m-2 md:basis-1/2"
  >
    <h3 className="text-3xl text-white font-extrabold mb-7">{question}</h3>
    <div className="text-lg">{answer}</div>
    {index % 2 === 0 ? <DecorationEven /> : <DecorationOdd />}
  </div>
)

export const Initiatives = ({
  description,
  cta,
  items = [],
}: {
  description: ReactElement | string
  cta: {
    label: string
    href: string
  }
  items: Array<Omit<CardProps, 'index'>>
}) => (
  <>
    <ContentSection background="gray">
      <h2 className="text-3xl md:text-4xl font-bold max-w-[34rem] text-center">
        Contribuer à La&nbsp;Suite numérique, c’est possible&nbsp;!
      </h2>
      <Image
        src={IllustrationIdea}
        height={460}
        width={700}
        alt=""
        placeholder="blur"
      />
      <div className="text-lg max-w-[38rem] text-pretty text-left sm:text-center [&_p+p]:mt-[50px]">
        {description}
      </div>
      <p>
        <Button href={cta.href} variant="outline">
          {cta.label}
        </Button>
      </p>
    </ContentSection>
    <ContentSection padding={false}>
      <div className="hidden md:flex flex-row gap-10 md:py-20 md:px-4">
        {items.map((value, index) => (
          <Card {...value} key={index} index={index} />
        ))}
      </div>
      <div className="w-full md:hidden pb-[50px]">
        <SwiperWrapper
          slides={items.map((value, index) => (
            <Card {...value} key={index} index={index} />
          ))}
        />
      </div>
    </ContentSection>
  </>
)
