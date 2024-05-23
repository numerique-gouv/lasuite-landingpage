import { Raw } from './Raw'

export const Content = ({ title, body }: { title?: string; body: string }) => {
  return (
    <div className="cms-block">
      <div className="fr-container">
        {!!title && <h2>{title}</h2>}
        <Raw className="cms-content cms-text-width">{body}</Raw>
      </div>
    </div>
  )
}
