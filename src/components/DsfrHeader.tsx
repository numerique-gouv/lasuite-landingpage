import Link from 'next/link'
import { LaGaufre } from './LaGaufre'
import { LocaleSwitcher } from './LocaleSwitcher'
import { useTranslations } from '@/locales/useTranslations'

export const DsfrHeader = () => {
  const t = useTranslations()
  return (
    <>
      <header role="banner" className="fr-header">
        <div className="fr-header__body">
          <div className="fr-container">
            <div className="fr-header__body-row">
              <div className="fr-header__brand fr-enlarge-link">
                <div className="fr-header__brand-top">
                  <div className="fr-header__logo">
                    <p className="fr-logo">Gouvernement</p>
                  </div>
                  <div className="fr-header__navbar">
                    <div className="me-4">
                      <LocaleSwitcher />
                      <LaGaufre />
                    </div>
                  </div>
                </div>
                <div className="fr-header__service">
                  <Link
                    href="/"
                    title={`${t('common.back_to_home')} - ${t('common.la_suite')}`}
                  >
                    <p className="fr-header__service-title">
                      <strong className="font-bold">
                        lasuite.numerique.gouv.
                      </strong>
                      <i className="font-medium">fr</i>
                    </p>
                  </Link>
                  <p className="fr-header__service-tagline">
                    {t('header.tagline')}
                  </p>
                </div>
              </div>
              <div className="fr-header__tools">
                <div className="fr-header__tools-links">
                  <LocaleSwitcher />
                  <LaGaufre />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
