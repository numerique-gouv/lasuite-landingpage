import { useId } from 'react'
import { Raw } from './Raw'

export const QandA = ({
  title,
  items,
  opened = false,
}: {
  title?: string
  items: Array<{ question: string; answer: string }>
  opened?: boolean
}) => {
  const id = useId()
  if (!items.length) return null
  return (
    <div className="cms-block">
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
                <Raw className="cms-text-width">{item.answer}</Raw>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
