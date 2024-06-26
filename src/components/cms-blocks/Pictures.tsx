import { EntryImage } from '@/cms/types'
import type { ReactElement } from 'react'
import { CmsImage } from '../CmsImage'

export const Pictures = ({
  title,
  body,
  items,
}: {
  title?: string
  body?: ReactElement | string
  items: Array<{ alt: string; href?: string } & EntryImage>
}) => {
  if (!items.length) return null
  return (
    <div className="cms-block">
      <div className="fr-container">
        {!!title && <h2>{title}</h2>}
        {!!body && <div className="cms-content cms-text-width">{body}</div>}
        <div className="flex flex-wrap justify-center mt-8 gap-16">
          {items.map((item, i) => {
            const img = (
              <CmsImage
                className="w-auto h-24"
                src={item.image}
                {...item.image_object}
                title={item.alt}
                alt={item.alt}
              />
            )
            if (item.href) {
              return (
                <div key={i}>
                  <a
                    className="cms-image-link"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {img}
                  </a>
                </div>
              )
            }
            return <div key={i}>{img}</div>
          })}
        </div>
      </div>
    </div>
  )
}
