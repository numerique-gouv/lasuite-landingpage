import Link from 'next/link'
import { Br } from '@/components/Br'

/**
 * NavBar Component
 * This component represents the navigation bar for the application.
 *
 * We kinda match DSFR styling here but with custom dom/classes for our specific use case.
 */
export const NavBar = () => (
  <header className="bg-white navbar-shadow">
    <div className="fr-container">
      <div className="-mx-4 lg:w-fit lg:py-2">
        <div className="sm:flex items-center fr-enlarge-link hover:bg-white-1 rounded transition ease-in-out delay-50 duration-300">
          <p className="p-4 logo text-[0.7875rem] font-bold leading-[1.0317460317em] tracking-[-.01em] uppercase align-middle inline-block">
            république
            <Br className="inline" />
            française
          </p>
          <p className="p-4 border-t border-grey-4 sm:border-0">
            <Link
              className="block text-xl"
              href="/"
              aria-label="Accueil - lasuite.numerique.gouv.fr"
            >
              <strong>lasuite.numerique.gouv.</strong>
              <i>fr</i>
            </Link>
            <span className="block text-xs sm:text-sm text-black-1">
              Un État efficace, simple, souverain grâce au numérique
            </span>
          </p>
        </div>
      </div>
    </div>
  </header>
)
