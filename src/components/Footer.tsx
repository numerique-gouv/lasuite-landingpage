import Link from 'next/link'
import { ExternalLink, LinkProps } from '@/components/ExternalLink'
import { useTranslations } from '@/locales/useTranslations'

import Image from 'next/image'
import { Button } from '@/components/ui-kit-v2/Button'
import GitHubIcon from '@mui/icons-material/GitHub'
import Image from 'next/image'

const hover =
  'hover:underline hover:decoration-2 hover:underline-offset-4 transition ease-in-out delay-50 duration-300 hover:cursor-pointer'

const externalLinks: LinkProps[] = [
  { href: 'https://legifrance.gouv.fr/fr/', children: 'legifrance.gouv.fr' },
  { href: 'https://info.gouv.fr/fr/', children: 'info.gouv.fr' },
  { href: 'https://www.service-public.fr/', children: 'service-public.fr' },
  { href: 'https://www.data.gouv.fr/fr/', children: 'data.gouv.fr' },
]

const pages = [
  { href: '/mentions-legales', children: 'footer.legal' as const },
  { href: '/suivi', children: 'footer.privacy_policy' as const },
  { href: '/accessibilite', children: 'footer.accessiblity' as const },
]

export const Footer = () => {
  const t = useTranslations()
  return (
    <footer className="py-8 mt-auto bg-white border-t border-gray-025">
      <div className="fr-container max-w-container">
        <div className="flex flex-wrap justify-between mb-6">
          <Link
            className="w-fit flex no-wrap items-center gap-2 xs:gap-6 hover:bg-white-1 p-4 pl-0 transition ease-in-out delay-50 duration-300 min-w-[114px] ml-[-0.5rem] overflow-hidden"
            href="/"
            title={`${t('common.back_to_home')} - ${t('common.la_suite')}`}
          >
            <p className="logo-footer text-base xs:text-xl font-bold leading-[1.0317460317em] tracking-[-.01em] pl-2 uppercase align-middle inline-block">
              Gouvernement
            </p>
            <span className="logo-footer-separator w-100% md:block hidden" />
            <p className="font-bold leading-5 text-sm xs:text-base md:block hidden">
              Direction
              <br />
              interministérielle
              <br />
              du numérique
            </p>
          </Link>
          <div className="basis-full md:basis-2/4 max-w-2xl">
            <div className="mt-2 md:mt-0 flex justify-end">
              <ExternalLink
                href="https://numerique.gouv.fr"
                aria-label="numerique.gouv.fr - Nouvelle fenêtre"
              >
                <Image
                  src="/numeriquegouv.png"
                  alt="numerique.gouv.fr - L'alliance du numérique de l'État"
                  width={130}
                  height={130}
                  className="w-auto h-auto"
                />
              </ExternalLink>
            </div>
            <ul className="flex flex-wrap justify-end mt-2">
              {externalLinks.map((link) => (
                <li
                  key={link.children}
                  className={`mr-6 my-2 decoration-gray-800 ${hover}`}
                >
                  <ExternalLink
                    className="font-bold text-sm text-gray-800 external-link-grey"
                    {...link}
                  >
                    {link.children}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-100 flex flex-row flex-wrap">
          <div className="mt-2 mb-4 sm:mb-0 w-[75%] m-w-[75%]">
            <ul className="block justify-start flex-wrap">
              {pages.map((link) => (
                <li
                  key={link.children}
                  className="inline internal-link-footer text-xs text-gray-700"
                >
                  <Link
                    {...link}
                    locale={false}
                    className={`border-grey-1 ${hover}`}
                  >
                    {t(link.children)}
                  </Link>
                </li>
              ))}
              <li className="inline internal-link-footer text-xs text-gray-700">
                <ExternalLink
                  href="https://github.com/suitenumerique/"
                  className={`border-grey-1 ${hover} gap-1 external-link-grey`}
                  aria-label="GitHub LaSuite - Nouvelle fenêtre"
                >
                  <GitHubIcon className="text-[14px] mr-1" aria-hidden="true" style={{ marginTop: '-3px', fontSize: '14px', lineHeight: '1.2', verticalAlign: 'middle' }} />
                  <span>Code source</span>
                </ExternalLink>
              </li>
            </ul>
          </div>
          <div className="mt-2">
            <p className="inline text-xs text-gray-700 leading-5">
              {t('footer.license', {
                license: (
                  <ExternalLink
                    key="license"
                    href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
                    className={`relative underline underline-offset-4 external-link-grey ${hover}`}
                  >
                    {t<string>('footer.etalab')}
                  </ExternalLink>
                ),
              })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
