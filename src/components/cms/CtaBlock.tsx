import { Raw } from './Raw'

export const CtaBlock = ({
  title,
  body,
  cta,
}: {
  title?: string
  body?: string
  cta: { href: string; target_blank?: boolean; label: string }
}) => {
  if (!cta.label || !cta.href) return null
  return (
    <div className="cms-block">
      <div className="fr-container">
        {!!title && <h2>{title}</h2>}
        {!!body && <Raw className="cms-content cms-text-width">{body}</Raw>}
        <div className="flex justify-center">
          <a
            className="fr-btn fr-btn--lg"
            href={cta.href}
            target={cta.target_blank ? '_blank' : undefined}
            rel="noopener noreferrer"
          >
            {cta.label}
          </a>
        </div>
      </div>
    </div>
  )
}
