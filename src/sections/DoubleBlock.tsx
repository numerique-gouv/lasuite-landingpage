import { PropsWithChildren, ReactElement } from 'react'
import Image, { StaticImageData } from 'next/image'

export const DoubleBlock = ({
  children,
  image,
  reverse = false,
  fit = 'object-cover',
}: {
  image: StaticImageData
  reverse?: boolean
  fit?: string
} & PropsWithChildren) => {
  const ImageBlock = (
    <Image
      src={image}
      aria-hidden={true}
      alt=""
      className={'flex z-10 h-full ' + fit}
      priority
      placeholder={image.src.endsWith('svg') ? undefined : 'blur'}
    />
  )

  const ContentBlock = <div className="p-10">{children}</div>

  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className={`md:w-1/2 md:order-${reverse ? 2 : 1}`}>
        {ContentBlock}
      </div>
      <div className={`md:w-1/2 md:order-${reverse ? 1 : 2}`}>{ImageBlock}</div>
    </div>
  )
}
