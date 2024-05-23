import Link from 'next/link'
import { LaGaufre } from './LaGaufre'

export const DsfrHeader = () => {
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
                      <LaGaufre />
                    </div>
                  </div>
                </div>
                <div className="fr-header__service">
                  <Link href="/" title="Accueil - La Suite numérique">
                    <p className="fr-header__service-title">
                      <strong className="font-bold">
                        lasuite.numerique.gouv.
                      </strong>
                      <i className="font-medium">fr</i>
                    </p>
                  </Link>
                  <p className="fr-header__service-tagline">
                    Un État efficace, simple, souverain grâce au numérique
                  </p>
                </div>
              </div>
              <div className="fr-header__tools">
                <div className="fr-header__tools-links">
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
