import React from 'react'

export type TopToastBannerType = 'info' | 'success' | 'warning' | 'error'
type TopToastBannerLink = {
  label?: string
  url?: string
}

export type TopToastBannerProps = {
  title?: string
  content?: string
  type?: TopToastBannerType
  link?: TopToastBannerLink
}

const toneClasses: Record<TopToastBannerType, string> = {
  info: 'bg-brand-050 border-brand-150 text-brand-650',
  success: 'bg-[#e9f8f0] border-[#a9dfc1] text-[#1f6f46]',
  warning: 'bg-[#FFEEDF] border-[#FFD0A8] text-[#A75400]',
  error: 'bg-[#FFEDEB] border-[#FFC5C0] text-[#CF202D]',
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
    className="shrink-0"
  >
    <path d="M14 4h6v6" />
    <path d="M20 4 10 14" />
    <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
  </svg>
)

export const TopToastBanner: React.FC<TopToastBannerProps> = ({
  title,
  content,
  type = 'info',
  link,
}) => {
  if (!title && !content) return null

  return (
    <section
      role="status"
      aria-live="polite"
      className={`w-full border-b mb-10 ${toneClasses[type] || toneClasses.info}`}
    >
      <div className="max-w-container mx-auto px-8 md:px-3 xl:px-0 py-2 md:py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="md:pr-4">
          {title && <p className="font-bold text-sm md:text-base">{title}</p>}
          {content && (
            <p
              className="text-sm md:text-base mt-1"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}
        </div>
        {link?.label && link?.url && (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm md:text-base font-semibold underline underline-offset-2 whitespace-nowrap"
          >
            <ExternalLinkIcon />
            {link.label}
            <span className="sr-only"> (nouvelle fenêtre)</span>
          </a>
        )}
      </div>
    </section>
  )
}

export default TopToastBanner
