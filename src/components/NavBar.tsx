import Link from 'next/link'
import { LaGaufre } from '@/components/LaGaufre'
import { LocaleSwitcher } from './LocaleSwitcher'
import { useTranslations } from '@/locales/useTranslations'
import LogoSvg from '@/assets/logo/suite-numerique.svg'
import LogoGouvSvg from '@/assets/logo/gouv.svg'
import Image from 'next/image'

/**
 * NavBar Component
 * This component represents the navigation bar for the application.
 *
 * We kinda match DSFR styling here but with custom dom/classes for our specific use case.
 */
export const NavBar = () => {
  const t = useTranslations()
  return (
    <header className="fade-in bg-white px-4 fixed top-0 right-0 left-0 z-50">
        <div className="flex items-center">
          <div className="flex py-3.5 items-center fr-enlarge-link">
             <Image
                  className="mr-3 w-28"
                  src={LogoGouvSvg}
                  alt="Logo gouvernement"
                />
            <div className="ml-5">
              <Image
                  className="w-28"
                  src={LogoSvg}
                  alt="Logo de la suite numérique"
                />
            </div>
          </div>
          <div className="flex items-center gap-4 top-0 right-0 sm:relative z-10 ml-auto">
            <LocaleSwitcher />
            <LaGaufre />
          </div>
        </div>
    </header>
  )
}
