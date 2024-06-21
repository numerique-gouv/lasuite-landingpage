import Link from 'next/link'
import { LaGaufre } from '@/components/LaGaufre'
import { LocaleSwitcher } from './LocaleSwitcher'
import { useTranslations } from '@/locales/useTranslations'

/**
 * NavBar Component
 * This component represents the navigation bar for the application.
 *
 * We kinda match DSFR styling here but with custom dom/classes for our specific use case.
 */
export const NavBar = () => {
  const t = useTranslations()
  return (
    <header className="bg-white navbar-shadow">
      <div className="fr-container">
        <div className="-mx-4 lg:py-2">
          <div className="flex sm:items-center">
            <div className="sm:flex lg:w-fit grow lg:grow-0 items-center fr-enlarge-link hover:bg-white-1 rounded transition ease-in-out delay-50 duration-300">
              <p className="p-4 logo text-[0.7875rem] font-bold leading-[1.0317460317em] tracking-[-.01em] uppercase align-middle inline-block">
                Gouvernement
              </p>
              <p className="p-4 border-t border-grey-4 sm:border-0">
                <Link
                  className="block text-xl"
                  href="/"
                  aria-label={`${t('common.back_to_home')} - ${t('common.la_suite')}`}
                >
                  <strong>lasuite.numerique.gouv.</strong>
                  <i>fr</i>
                </Link>
                <span className="block text-xs sm:text-sm text-black-1">
                  {t('header.tagline')}
                </span>
              </p>
            </div>
            <div className="absolute flex items-center gap-4 top-0 right-0 sm:relative z-10 p-4 ml-auto">
              <LocaleSwitcher />
              <LaGaufre />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
