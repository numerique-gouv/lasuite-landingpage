import type { ReactElement } from 'react'
import classNames from 'classnames'
import type { EntryImage } from '@/cms/types'
import { Raw } from '../Raw'
import { CmsImage } from '../CmsImage'

export const Hero = ({
  title,
  subtitle,
  image,
  image_object,
  embed,
  actions = [],
}: {
  title: ReactElement | string
  subtitle?: ReactElement | string
  embed?: string
  actions: Array<{
    label: string
    href: string
    target_blank?: boolean
    primary?: boolean
  }>
} & Partial<EntryImage>) => {
  const showVideo = !!embed
  return (
    <div className="cms-block">
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters fr-my-0">
          <div className="fr-col">
            <div>
              <h1 className="[&>strong]:font-extrabold">{title}</h1>
              <p className="fr-text--lead">{subtitle}</p>
            </div>
            {!!actions.length && (
              <ul className="fr-btns-group fr-btns-group--inline-md fr-btns-group--lg">
                {actions.map((action, i) => (
                  <li key={i}>
                    <a
                      key={action.label}
                      href={action.href}
                      target={action.target_blank ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={classNames('fr-btn', {
                        'fr-btn--secondary': !action.primary,
                      })}
                    >
                      {action.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="fr-col">
            {!!embed && <Raw>{embed}</Raw>}
            {!showVideo && !!image && (
              <CmsImage src={image} {...image_object} alt="" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
