/*
A component that displays an image, a title and a description, each one below the other.
*/

import { StaticImageData } from 'next/image'
import { ZoomableImage } from './ZoomableImage'

export const Card = ({
  image,
  title,
  description,
}: {
  image: StaticImageData
  title: string
  description: string
}) => {
  return (
    <div className="flex flex-col gap-4">
      <ZoomableImage src={image} alt="" className="w-full h-auto" />
      <h3 className="text-2xl md:text-[1.375em] md:leading-[1.75rem] text-greyscale-700 font-bold">
        {title}
      </h3>
      <p className="text-greyscale-600 text-base">{description}</p>
    </div>
  )
}
