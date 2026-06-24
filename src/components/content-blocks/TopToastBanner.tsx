import React from 'react'

type TopToastBannerType = 'info' | 'success' | 'warning'
type TopToastBannerLink = {
  label: string
  url: string
}

type TopToastBannerProps = {
  title?: string
  content?: string
  type?: TopToastBannerType
  link?: TopToastBannerLink
}

const toneClasses: Record<TopToastBannerType, string> = {
  info: 'bg-brand-050 border-brand-150 text-brand-650',
  success: 'bg-[#e9f8f0] border-[#a9dfc1] text-[#1f6f46]',
  warning: 'bg-[#fff7e6] border-[#ffd78a] text-[#8f5b00]',
}

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
      className={`w-full border-b mb-10 ${toneClasses[type]}`}
    >
      <div className="max-w-container mx-auto px-8 md:px-3 xl:px-0 py-2 md:py-3 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div className="md:pr-4">
          {title && <p className="font-bold text-sm md:text-base">{title}</p>}
          {content && (
            <p className="text-sm md:text-base mt-1" dangerouslySetInnerHTML={{ __html: content }} />
          )}
        </div>
        {link?.label && link?.url && (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base font-semibold underline underline-offset-2 whitespace-nowrap"
          >
            {link.label}
          </a>
        )}
      </div>
    </section>
  )
}

export default TopToastBanner
