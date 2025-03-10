import Link from 'next/link'
import { LaGaufre } from '@/components/LaGaufre'
import { LocaleSwitcher } from './LocaleSwitcher'
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
  return (
    <header className="fade-in bg-white px-4 sm:fixed relative top-0 right-0 left-0 z-50">
      <div className="flex items-center">
        <div className="relative mx-auto sm:mx-0 sm:flex py-3.5 items-center fr-enlarge-link">
          <Image
            className="mr-3 w-28 hidden md:block"
            src={LogoGouvSvg}
            alt="GOUVERNEMENT - Liberté, Égalité, Fraternité"
          />
          <Link href="/" className="sm:ml-5">
            <Image
              className="w-28"
              src={LogoSvg}
              alt="lasuite.numerique.gouv.fr"
            />
          </Link>
        </div>
        <div className="absolute items-center gap-4 top-[9.5px] right-[19px] md:top-0 md:right-0 sm:relative z-10 ml-auto">
          <LocaleSwitcher />
          <LaGaufre />
        </div>
      </div>
    </header>
  )
}
