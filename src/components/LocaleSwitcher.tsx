import { useRouter } from 'next/router'
import LogoI18n from '@/assets/i18n.svg'
import { useTranslations } from '@/locales/useTranslations'

const labels: Record<string, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
}

export const LocaleSwitcher = () => {
  const router = useRouter()
  const { pathname, asPath, query, locale, locales } = router
  const t = useTranslations()
  if (!locales || locales.length < 2) {
    return null
  }
  return (
    <div>
      <select
        onInput={(event) => {
          router.push({ pathname, query }, asPath, {
            locale: event.currentTarget.value,
          })
        }}
        className="bg-white p-2 pl-9 font-bold outline-grey-4 text-blue-1 hover:bg-dsfr-grey-0 bg-no-repeat"
        style={{
          backgroundImage: `url(${LogoI18n.src})`,
          backgroundPosition: '0.75rem center',
        }}
        value={locale}
        aria-label={t('header.locale_switcher_alt')}
      >
        {(locales || []).map((availableLocale) => (
          <option key={availableLocale} value={availableLocale}>
            {labels[availableLocale]}
          </option>
        ))}
      </select>
    </div>
  )
}
