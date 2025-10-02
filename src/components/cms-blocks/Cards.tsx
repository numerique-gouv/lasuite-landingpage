import Image from 'next/image'
import type { ReactElement } from 'react'

export const Cards = ({
  title,
  items = [],
}: {
  title?: string
  items: Array<{
    image?: string
    title: string
    href?: string
    body: ReactElement | string
  }>
}) => {
  if (!items.length) return null
  const columnClasses =
    items.length === 4
      ? 'fr-col-12 fr-col-sm-6 fr-col-xl-3'
      : items.length % 3 === 0
        ? 'fr-col-12 fr-col-sm-6 fr-col-lg-4'
        : 'fr-col-12 fr-col-md-6'
  return (
    <div className="cms-block">
      <div className="fr-container">
        {!!title && <h2>{title}</h2>}
        <div className="fr-grid-row fr-grid-row--gutters fr-my-0">
          {items.map((item, i) => {
            return (
              <div className={columnClasses} key={i}>
                <div
                  className="fr-card fr-enlarge-link"
                  style={{
                    borderBottom: '4px solid var(--border-plain-blue-france)',
                  }}
                >
                  <div className="fr-card__body">
                    <div className="fr-card__content">
                      {!!item.image && (
                        <Image
                          src={item.image}
                          alt=""
                          width="64"
                          height="64"
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
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                      </h3>
                      <div className="fr-card__desc">{item.body}</div>
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
