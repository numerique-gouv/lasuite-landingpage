import classNames from 'classnames'
import { Raw } from './Raw'

export const Screenshot = ({
  title,
  body,
  image,
  image_position = 'right',
}: {
  title?: string
  body: string
  image: string
  image_position?: string
}) => {
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
            <Raw className="cms-content cms-text-width">{body}</Raw>
          </div>
          <div className="fr-col">
            <a href={image}>
              <img src={image} alt="Voir l'image en grand format" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
