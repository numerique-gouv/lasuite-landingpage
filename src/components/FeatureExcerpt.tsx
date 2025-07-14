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
    <div className={classNames('flex flex-col md:flex-row gap-4 md:gap-8')}>
      <div
        className="flex-shrink-0"
        style={{
          order: imagePosition === 'left' ? -1 : 1,
        }}
      >
        <ZoomableImage
          loading="lazy"
          className="w-[523px] h-auto"
          src={image}
          alt=""
        />
      </div>
      <div className="md:col-span-3">
        {/* show the tag first in the UI, but make sure screen readers don't miss the tag if navigating by heading by having it first in the DOM*/}
        <div className="flex flex-col-reverse items-start">
          {title && (
            <h3 className="text-2xl md:text-[2.5rem] md:leading-[3rem] font-bold my-3 md:my-5">
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
