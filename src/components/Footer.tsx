import Link from 'next/link'
import { Br } from '@/components/Br'
import { ExternalLink, LinkProps } from '@/components/ExternalLink'

const hover =
  'hover:underline hover:decoration-2 hover:underline-offset-4 transition ease-in-out delay-50 duration-300 hover:cursor-pointer'

const externalLinks: LinkProps[] = [
  { href: 'https://legifrance.gouv.fr/fr/', children: 'legifrance.gouv.fr' },
  { href: 'https://info.gouv.fr/fr/', children: 'info.gouv.fr' },
  { href: 'https://www.service-public.fr/', children: 'service-public.fr' },
  { href: 'https://www.data.gouv.fr/fr/', children: 'data.gouv.fr' },
]

const pages: LinkProps[] = [
  { href: '/apropos', children: 'Mentions Légales' },
  { href: '/suivi', children: 'Données personnelles et cookies' },
  { href: '/accessibilite', children: 'Accessibilité: audit en cours' },
]

export const Footer = () => (
  <footer className="py-8 mt-auto border-t-2 bg-white border-blue-1">
    <div className="fr-container">
      <div className="flex flex-wrap justify-between mb-6">
        <Link
          className="w-fit flex no-wrap items-center gap-2 xs:gap-6 hover:bg-white-1 p-4 pl-0 transition ease-in-out delay-50 duration-300 min-w-[114px] ml-[-0.5rem] overflow-hidden"
          href="/"
          aria-label="Retour à l'accueil"
        >
          <p className="logo-footer text-base xs:text-xl font-bold leading-[1.0317460317em] tracking-[-.01em] pl-2 uppercase align-middle inline-block">
            Gouvernement
          </p>
          <span className="logo-footer-separator" />
          <p className="font-bold leading-5 text-sm xs:text-base">
            Direction
            <Br showOnMobile />
            interministérielle
            <Br showOnMobile />
            du numérique
          </p>
        </Link>
        <div className="basis-full md:basis-2/4 max-w-2xl">
          <ul className="flex flex-wrap align-middle mt-2">
            {externalLinks.map((link) => (
              <li
                key={link.href}
                className={`mr-6 my-2 decoration-grey-5 ${hover}`}
              >
                <ExternalLink
                  className="font-bold text-sm text-grey-5 external-link-grey"
                  {...link}
                >
                  {link.children}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 border-t border-grey-0 flex flex-row flex-wrap">
        <div className="mt-2 mb-4 sm:mb-0 w-[75%] m-w-[75%]">
          <ul className="block justify-start flex-wrap">
            {pages.map((link) => (
              <li
                key={link.href}
                className="inline internal-link-footer text-xs text-grey-3"
              >
                <Link {...link} className={`border-grey-1 ${hover}`}>
                  {link.children}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <p className="inline text-xs text-grey-3 leading-5">
            Sauf mention contraire, tous les contenus de ce site sont sous{' '}
            <ExternalLink
              href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
              className={`relative underline underline-offset-4 external-link-grey ${hover}`}
            >
              licence etalab-2.0
            </ExternalLink>
          </p>
        </div>
      </div>
    </div>
  </footer>
)
