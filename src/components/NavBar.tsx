import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui-kit-v2/Button'
import { LaGaufre } from '@/components/LaGaufre'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'
import LogoSvg from '@/assets/logo/lasuite.svg'
import LogoGouvSvg from '@/assets/logo/gouv.svg'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useTranslations } from '@/locales/useTranslations'

/**
 * NavBar Component
 * This component represents the navigation bar for the application.
 *
 * We kinda match DSFR styling here but with custom dom/classes for our specific use case.
 */
export const NavBar = ({
  logo,
  loginUrl,
  translation,
}: {
  logo?: React.ReactNode
  loginUrl?: string
  translation?: boolean
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations()

  return (
    <header className="fade-in bg-white px-4 sm:fixed relative top-0 right-0 left-0 z-50">
      <div className="flex items-center">
        <div className="flex items-center gap-4 sm:hidden">
          <button
            className="w-[48px] h-[48px] absolute text-brand-550 top-[9.5px] left-[19px] p-2 rounded-md focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isOpen ? (
              <CloseIcon className="text-3xl" />
            ) : (
              <MenuIcon className="text-3xl" />
            )}
          </button>
        </div>
        <div className="relative mx-auto sm:mx-0 sm:flex py-3.5 sm:items-center items-center fr-enlarge-link">
          <Image
            className="mr-3 w-28 hidden sm:block md:block"
            src={LogoGouvSvg}
            alt="GOUVERNEMENT - Liberté, Égalité, Fraternité"
          />
          <Link href="/" className="sm:ml-5">
            {logo || (
              <Image
                className="w-30"
                src={LogoSvg}
                alt="lasuite.numerique.gouv.fr"
              />
            )}
          </Link>
        </div>
        <div className="absolute flex items-center gap-4 sm:top-[9.5px] right-[19px] md:top-0 md:right-0 sm:relative z-10 ml-auto">
          {!!loginUrl && (
            <div className="hidden md:block">
              <Button
                href={loginUrl}
                variant="tertiary_brand"
              >
                {t('common.login')}
              </Button>
            </div>
          )}
          <div className="hidden md:block">
          {translation && (
            <LocaleSwitcher />
          )}
          </div>
          <LaGaufre />
        </div>
      </div>
      <div
        className={`fixed md:hidden top-[67px] left-0 h-full w-full bg-white will-change-transform z-50 shadow-md transform transition-all ease-in-out duration-300
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="text-center mt-8">
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  )
}
