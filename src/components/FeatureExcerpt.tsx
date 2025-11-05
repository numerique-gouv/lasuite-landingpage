/*
 * A component that displays a screenshot and some text next to it (optional tag, title, description).
 */
import Image, { StaticImageData } from 'next/image'
import { Paragraph } from './Paragraph'
import classNames from 'classnames'
import { Tag } from './Tag'
import { Button } from './Button'
import { ZoomableImage } from './ZoomableImage'

export const FeatureExcerpt = ({
  image,
  imagePosition = 'left',
  tag,
  title,
  description,
  cta,
}: {
  image: StaticImageData
  imagePosition?: 'left' | 'right'
  tag?: string
  title: string
  description: string
  cta?: {
    href: string
    label: string
    target?: '_blank'
  }
}) => {
  return (
    <div
      className={classNames('flex flex-col gap-4 md:gap-8', {
        'md:flex-row': imagePosition === 'left',
        'md:flex-row-reverse': imagePosition === 'right',
      })}
    >
      <div className="flex-shrink-0">
        <ZoomableImage
          loading="lazy"
          className="w-full md:w-[400px] lg:w-[523px] h-auto"
          src={image}
          alt=""
        />
      </div>
      <div className="md:col-span-3">
        {/* show the tag first in the UI, but make sure screen readers don't miss the tag if navigating by heading by having it first in the DOM*/}
        <div className="flex flex-col-reverse items-start">
          {title && (
            <h3 className="text-2xl lg:text-[2.5rem] lg:leading-[3rem] font-bold my-3 lg:my-5">
              {title}
            </h3>
          )}
          {tag && <Tag>{tag}</Tag>}
        </div>
        {description && (
          <p className="mb-4 text-greyscale-600 text-base">{description}</p>
        )}
        {cta && (
          <p>
            <Button target={cta.target} href={cta.href}>
              {cta.label}
            </Button>
          </p>
        )}
      </div>
    </div>
  )
}
