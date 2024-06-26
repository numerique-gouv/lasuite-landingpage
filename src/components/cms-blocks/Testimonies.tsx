import type { ReactElement } from 'react'

export const Testimonies = ({
  title,
  items = [],
}: {
  title?: string
  items: Array<{ quote: ReactElement | string; author: ReactElement | string }>
}) => {
  if (!items.length) return null
  return (
    <div className="cms-block">
      <div className="fr-container">
        {!!title && <h2>{title}</h2>}
        <div className="md:columns-2 xl:columns-3 gap-8">
          {items.map((item, i) => (
            <div
              className="fr-card fr-mb-4w break-inside-avoid"
              style={{
                border: '1px solid var(--border-default-blue-france)',
              }}
              key={i}
            >
              <div className="fr-card__body">
                <div className="fr-card__content">
                  <figure key={i} className="fr-quote cms-testimony">
                    <blockquote>{item.quote}</blockquote>
                    <figcaption>
                      <p className="fr-quote__author">{item.author}</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
