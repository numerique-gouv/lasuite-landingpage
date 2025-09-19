import { useTranslations } from '@/locales/useTranslations'
import Link from 'next/link'

export const DsfrFooter = () => {
  const t = useTranslations()
  const newWindow = t('common.new_window')
  return (
    <footer className="fr-footer" role="contentinfo" id="footer">
      <div className="fr-container">
        <div className="fr-footer__body">
          <div className="fr-footer__brand fr-enlarge-link">
            <Link
              href="/"
              title={`${t('common.back_to_home')} - ${t('common.la_suite')}`}
            >
              <p className="fr-logo">Gouvernement</p>
            </Link>
          </div>
          <div className="fr-footer__content">
            <ul className="fr-footer__content-list">
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  target="_blank"
                  rel="noopener external"
                  title={`legifrance.gouv.fr - ${newWindow}`}
                  href="https://legifrance.gouv.fr"
                >
                  legifrance.gouv.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  target="_blank"
                  rel="noopener external"
                  title={`gouvernement.fr - ${newWindow}`}
                  href="https://gouvernement.fr"
                >
                  gouvernement.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  target="_blank"
                  rel="noopener external"
                  title={`service-public.fr - ${newWindow}`}
                  href="https://service-public.fr"
                >
                  service-public.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  target="_blank"
                  rel="noopener external"
                  title={`data.gouv.fr - ${newWindow}`}
                  href="https://data.gouv.fr"
                >
                  data.gouv.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fr-footer__bottom">
          <ul className="fr-footer__bottom-list">
            <li className="fr-footer__bottom-item">
              <Link className="fr-footer__bottom-link" href="/mentions-legales">
                {t('footer.legal')}
              </Link>
            </li>
            <li className="fr-footer__bottom-item">
              <Link className="fr-footer__bottom-link" href="/suivi">
                {t('footer.privacy_policy')}
              </Link>
            </li>
            <li className="fr-footer__bottom-item">
              <Link className="fr-footer__bottom-link" href="/accessibilite">
                {t('footer.accessiblity')}
              </Link>
            </li>
          </ul>
          <div className="fr-footer__bottom-copy">
            <p>
              {t('footer.license', {
                license: (
                  <a
                    key="license"
                    href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
                    target="_blank"
                    rel="noopener external"
                    title="licence etalab-2.0 - nouvelle fenêtre"
                  >
                    {t('footer.etalab')}
                  </a>
                ),
              })}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
