import type { ReactElement } from 'react'

export const Content = ({
  title,
  body,
}: {
  title?: string
  body: ReactElement | string
}) => {
  return (
    <div className="cms-block">
      <div className="fr-container">
        {!!title && <h2>{title}</h2>}
        <div className="cms-content cms-text-width">{body}</div>
      </div>
    </div>
  )
}
