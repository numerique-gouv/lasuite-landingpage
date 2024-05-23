import classNames from 'classnames'
import { Raw } from './Raw'

export const Hero = ({
  title,
  subtitle,
  image,
  embed,
  actions = [],
}: {
  title: string
  subtitle?: string
  image?: string
  embed?: string
  actions: Array<{
    label: string
    href: string
    target_blank?: boolean
    primary?: boolean
  }>
}) => {
  const showVideo = !!embed
  return (
    <div className="cms-block">
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters fr-my-0">
          <div className="fr-col">
            <div>
              <Raw tag="h1" className="[&>strong]:font-extrabold">
                {title}
              </Raw>
              <Raw tag="p" className="fr-text--lead">
                {subtitle}
              </Raw>
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
            {(!!embed && (
              <div
                dangerouslySetInnerHTML={{
                  __html: embed,
                }}
              />
            )) ||
              null}
            {(!showVideo && !!image && <img src={image} alt="" />) || null}
          </div>
        </div>
      </div>
    </div>
  )
}
