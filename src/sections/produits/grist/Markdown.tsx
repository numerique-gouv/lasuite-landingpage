import { useTranslations } from '@/locales/useTranslations'
import ReactMarkdown from 'react-markdown'

export const Markdown = ({
  children,
  className,
}: {
  children: string
  className?: string
}) => {
  const t = useTranslations()
  return (
    <ReactMarkdown
      className={className}
      components={{
        a: ({ children, href }) => {
          const withTargetBlank = !(href || '').startsWith('#')
          if (!withTargetBlank) {
            return <a href={href}>{children}</a>
          }
          return (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {children}
              <span className="sr-only">{t('common.new_window')}</span>
            </a>
          )
        },
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
