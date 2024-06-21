import { useTranslations } from '@/locales/useTranslations'
import Link from 'next/link'

const enabledServices = [
  'audioconf',
  'demarches',
  'equipes',
  'france-transfert',
  'grist',
  'messagerie',
  'pad',
  'rdv',
  'resana',
  'tchap',
  'webconf',
  'webinaire',
]

export const SuiteNumerique = ({
  id,
  title,
}: {
  id: string
  title: string
}) => {
  const bgId = enabledServices.includes(id) ? id : 'default'
  const t = useTranslations()
  return (
    <div className="cms-block !py-0 relative">
      <picture>
        <source
          srcSet={`https://integration.lasuite.numerique.gouv.fr/api/backgrounds/v1/${bgId}.avif`}
          type="image/avif"
        />
        <img
          src={`https://integration.lasuite.numerique.gouv.fr/api/backgrounds/v1/${bgId}.jpg`}
          alt=""
          width="1920"
          height="1200"
          className="absolute inset-0 z-10 w-full h-full object-cover pointer-events-none"
        />
      </picture>
      <div className="fr-container flex items-end relative z-20 !pt-24 !pb-4">
        <p className="fr-m-0 text-lg !font-normal  w-fit  !text-blue-1">
          <Link
            href="/"
            className="!bg-none hover:!bg-grey-0 active:!bg-white py-2 px-4 bg-white inline-block"
          >
            {t('service_landing_page.suite_numerique.body', {
              title,
              la_suite: (
                <span className="font-bold">{t('common.la_suite')}</span>
              ),
            })}
          </Link>
        </p>
      </div>
    </div>
  )
}
