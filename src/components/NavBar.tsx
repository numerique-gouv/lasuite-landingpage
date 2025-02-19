import Link from 'next/link'
import { LaGaufre } from '@/components/LaGaufre'
import { LocaleSwitcher } from './LocaleSwitcher'
import { useTranslations } from '@/locales/useTranslations'
import LogoSvg from '@/assets/logo/suite-numerique.svg'
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
    <header className="bg-white px-2 fixed top-0 right-0 left-0 z-50">
        <div className="flex sm:items-center">
          <div className="flex  items-center fr-enlarge-link">
            <p className="p-4 logo text-[0.7875rem] font-bold leading-[1.0317460317em] tracking-[-.01em] uppercase align-middle inline-block">
              Gouvernement
            </p>
            <div className="p-4">
              <Image
                  className="w-28"
                  src={LogoSvg}
                  alt="Logo de la suite numérique"
                />
            </div>
          </div>
          <div className="absolute flex items-center gap-4 top-0 right-0 sm:relative z-10 p-4 ml-auto">
            <LocaleSwitcher />
            <LaGaufre />
          </div>
        </div>
    </header>
  )
}
