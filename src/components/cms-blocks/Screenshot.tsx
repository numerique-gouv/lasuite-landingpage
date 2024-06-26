import classNames from 'classnames'
import type { ReactElement } from 'react'
import { EntryImage } from '@/cms/types'
import { CmsImage } from '../CmsImage'
import { useTranslations } from '@/locales/useTranslations'

export const Screenshot = ({
  title,
  body,
  image,
  image_object,
  image_position = 'right',
}: {
  title?: string
  body: ReactElement | string
  image_position?: string
} & EntryImage) => {
  const t = useTranslations()
  return (
    <div className="cms-block">
      <div className="fr-container">
        <div className="fr-grid-row items-center fr-grid-row--gutters">
          <div
            className={classNames('fr-col', {
              'order-5': image_position === 'left',
            })}
          >
            {!!title && <h2>{title}</h2>}
            <div className="cms-content cms-text-width">{body}</div>
          </div>
          <div className="fr-col">
            <a href={image}>
              <CmsImage
                src={image}
                {...image_object}
                alt={t('service_landing_page.screenshot_block.image_alt')}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
