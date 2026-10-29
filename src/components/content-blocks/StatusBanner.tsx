import React, { useState } from 'react'

export type StatusBannerType = 'default' | 'warning' | 'error'

export type StatusBannerProps = {
  message?: string
  type?: StatusBannerType
  link?: {
    label?: string
    url?: string
  }
  /**
   * allow the user to close the banner (hidden until next page load)
   */
  dismissible?: boolean
}

const toneClasses: Record<
  StatusBannerType,
  { banner: string; button: string }
> = {
  default: {
    banner: 'bg-[#3E5DE7] text-[#EDF0FF]',
    button: 'hover:bg-[#304DDF] focus-visible:outline-[#EDF0FF]',
  },
  warning: {
    banner: 'bg-[#A75400] text-[#FFEEDF]',
    button: 'hover:bg-[#8A4500] focus-visible:outline-[#FFEEDF]',
  },
  error: {
    banner: 'bg-[#CF202D] text-[#FFEDEB]',
    button: 'hover:bg-[#B01B26] focus-visible:outline-[#FFEDEB]',
  },
}

const ExternalLinkIcon = () => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 4h6v6" />
    <path d="M20 4 10 14" />
    <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
)

const CloseIcon = () => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const StatusBanner: React.FC<StatusBannerProps> = ({
  message,
  type = 'default',
  link,
  dismissible = true,
}) => {
  const [dismissed, setDismissed] = useState(false)
  if (!message || dismissed) return null
  // only allow http(s) and mailto links: blocks `javascript:` urls typed in the CMS
  const hasLink =
    !!link?.label && !!link?.url && /^(https?:\/\/|mailto:)/i.test(link.url)
  const isMailto = hasLink && /^mailto:/i.test(link!.url!)

  const tone = toneClasses[type] || toneClasses.default
  const buttonClasses = `flex items-center gap-1 h-6 px-1 rounded text-xs font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 ${tone.button}`

  return (
    <section
      role="status"
      aria-live="polite"
      className={`w-full min-h-8 flex flex-row items-center justify-between gap-4 py-1 pr-1 pl-3 border-b border-[#DFE2EA] ${tone.banner}`}
    >
      <p className="flex-1 text-xs font-bold leading-4">{message}</p>
      <div className="flex flex-row items-center gap-1 shrink-0">
        {hasLink && (
          <a
            href={link!.url}
            {...(!isMailto && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
            className={buttonClasses}
          >
            <ExternalLinkIcon />
            <span>{link!.label}</span>
            {!isMailto && <span className="sr-only"> (nouvelle fenêtre)</span>}
          </a>
        )}
        {dismissible && (
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className={`${buttonClasses} w-6 justify-center`}
            aria-label="Fermer le bandeau"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    </section>
  )
}

export default StatusBanner
