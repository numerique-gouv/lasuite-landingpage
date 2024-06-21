import { ButtonExternalLink } from '@/components/ExternalLink'
import { NEWSLETTER_FORM } from '@/constant'
import { ReactElement } from 'react'

export const Newsletter = ({
  title,
  body,
  url = NEWSLETTER_FORM,
}: {
  title: string
  body: ReactElement | string
  url?: string
}) => {
  return (
    <div className="bg-dsfr-blue-1 py-8 text-left">
      <div className="fr-container">
        <div className="flex flex-col items-start justify-between">
          <h2 className="text-[1.375rem] leading-7 font-bold mb-3">{title}</h2>
          <p className="text-[.875rem] text-grey-5 leading-6 mb-6">{body}</p>
          <p>
            <ButtonExternalLink
              href={url}
              aria-label="S'abonner à la newsletter"
              className="text-lg"
            >
              S&apos;abonner
            </ButtonExternalLink>
          </p>
        </div>
      </div>
    </div>
  )
}
