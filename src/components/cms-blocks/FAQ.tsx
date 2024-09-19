import { ReactElement, useId } from 'react'

export const FAQ = ({
  title,
  items,
  opened = false,
}: {
  title?: string
  items: Array<{
    question: ReactElement | string
    answer: ReactElement | string
  }>
  opened?: boolean
}) => {
  const id = useId()
  if (!items.length) return null
  return (
    <div>
      <div className="fr-container">
        {!!title && <h2>{title}</h2>}
        <div className="fr-accordions-group">
          {items.map((item, i) => (
            <div key={i} className="fr-accordion cms-question">
              <h3 className="fr-accordion__title">
                <button
                  className="fr-accordion__btn fr-btn--lg fr-py-4v"
                  aria-expanded={opened ? 'true' : 'false'}
                  aria-controls={`${id}-${i}`}
                >
                  {item.question}
                </button>
              </h3>
              <div
                className={`fr-collapse cms-answer fr-mx-0 fr-px-3w ${opened ? 'fr-collapse--expanded' : ''}`}
                id={`${id}-${i}`}
                style={{
                  /* @ts-ignore */
                  '--collapse-max-height': opened ? 'none' : undefined,
                }}
              >
                <div className="cms-text-width">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
