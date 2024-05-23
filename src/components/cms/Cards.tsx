import { title } from 'process'
import { Raw } from './Raw'

export const Cards = ({
  items = [],
}: {
  items: Array<{ image?: string; title: string; body: string }>
}) => {
  if (!items.length) return null
  const columnClasses =
    items.length === 4
      ? 'fr-col-12 fr-col-sm-6 fr-col-xl-3'
      : items.length === 3
        ? 'fr-col-12 fr-col-md-4'
        : 'fr-col-12 fr-col-md-6'
  return (
    <div className="cms-block">
      <div className="fr-container">
        <div className="fr-grid-row fr-grid-row--gutters fr-my-0">
          {items.map((item, i) => {
            return (
              <div className={columnClasses} key={i}>
                <div
                  className="fr-card"
                  style={{
                    border: '1px solid var(--border-default-blue-france)',
                  }}
                >
                  <div className="fr-card__body">
                    <div className="fr-card__content">
                      {!!item.image && (
                        <img
                          src={item.image}
                          alt=""
                          width="48"
                          height="48"
                          className="my-8 mx-auto"
                        />
                      )}
                      <h3
                        className="fr-card__title"
                        style={{
                          textWrap: 'balance',
                          color: 'var(--text-title-blue-france)',
                        }}
                      >
                        {item.title}
                      </h3>
                      <Raw className="fr-card__desc">{item.body}</Raw>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
