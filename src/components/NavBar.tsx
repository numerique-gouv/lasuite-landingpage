import { useState } from 'react'
import Link from 'next/link'
import { LaGaufre } from '@/components/LaGaufre'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'
import LogoSvg from '@/assets/logo/suite-numerique.svg'
import LogoGouvSvg from '@/assets/logo/gouv.svg'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

/**
 * NavBar Component
 * This component represents the navigation bar for the application.
 *
 * We kinda match DSFR styling here but with custom dom/classes for our specific use case.
 */
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fade-in bg-white px-4 sm:fixed relative top-0 right-0 left-0 z-50">
      <div className="flex items-center">
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="absolute text-blue-1 top-[9.5px] left-[19px] p-2 rounded-md focus:outline-none focus:bg-greyscale-050"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
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
        <div className="absolute flex items-center gap-4 top-[9.5px] right-[19px] md:top-0 md:right-0 sm:relative z-10 ml-auto">
          <div className="hidden md:block">
            <LocaleSwitcher />
          </div>
          <LaGaufre />
        </div>
      </div>
      <div
        className={`fixed md:hidden top-[67px] left-0 h-full w-full bg-white will-change-transform z-50 shadow-md transform transition-all ease-in-out duration-300
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div class="text-center mt-8">
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  )
}
