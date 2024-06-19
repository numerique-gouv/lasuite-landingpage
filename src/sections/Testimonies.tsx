import Image from 'next/image'
import { EntryImage } from '@/cms/types'
import { SwiperWrapper } from '@/components/SwiperWrapper'
import { ContentSection } from '@/components/ContentSection'
import { CmsImage } from '@/components/CmsImage'
import AccountSvg from '@/assets/account.svg'
import type { ReactElement } from 'react'

interface CardProps extends EntryImage {
  author: ReactElement | string
  quote: ReactElement | string
}

const Card = ({ author, quote, image, image_object }: CardProps) => (
  <div
    tabIndex={0}
    className="flex flex-col bg-white p-7 text-left flex-1 max-w-[36rem] lg:min-w-[18rem]"
  >
    <h3 className="h-[114px] w-[140px] relative">
      <CmsImage
        src={image}
        {...image_object}
        className="object-contain"
        alt=""
      />
    </h3>
    <div className="flex flex-row items-center mt-7 gap-4 pb-5">
      <Image src={AccountSvg} height={60} width={60} alt="" />
      <p className="font-bold text-grey-2">{author}</p>
    </div>
    <blockquote className="text-body leading-6 text-pretty">{quote}</blockquote>
  </div>
)

export const Testimonies = ({
  title,
  description,
  items = [],
}: {
  title: string
  description: ReactElement | string
  items?: CardProps[]
}) => (
  <ContentSection background="gray">
    <h2 className="text-3xl md:text-4xl font-bold max-w-[30rem] text-center px-4 ">
      {title}
    </h2>
    <div className="text-lg max-w-[38rem] text-left sm:text-center">
      {description}
    </div>
    <div className="w-full">
      <SwiperWrapper
        slides={items.map((testimony, i) => (
          <Card {...testimony} key={i} />
        ))}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
        }}
      />
    </div>
  </ContentSection>
)
