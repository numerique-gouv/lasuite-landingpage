import classNames from 'classnames'
import { Raw } from './Raw'

export const FollowUs = ({
  newsletter,
  socials,
}: {
  newsletter: { enable: boolean; body?: string; cta_href?: string }
  socials: {
    enable: boolean
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
    youtube?: string
  }
}) => {
  if (!newsletter.enable && !socials.enable) return null
  const socialLinks = socials.enable
    ? [
        socials.facebook ? ['facebook', socials.facebook] : null,
        socials.twitter ? ['twitter', socials.twitter] : null,
        socials.instagram ? ['instagram', socials.instagram] : null,
        socials.linkedin ? ['linkedin', socials.linkedin] : null,
        socials.youtube ? ['youtube', socials.youtube] : null,
      ].filter((item) => !!item)
    : []
  return (
    <div className="fr-follow">
      <div className="fr-container">
        <div className="fr-grid-row">
          {newsletter && newsletter.enable ? (
            <div
              className={classNames('fr-col-12', {
                'fr-col-md-8': socials && socials.enable,
              })}
            >
              <div className="fr-follow__newsletter">
                <div>
                  <p className="fr-h5">
                    Abonnez-vous à notre lettre d’information
                  </p>
                  <Raw tag="p" className="fr-text--sm">
                    {newsletter.body}
                  </Raw>
                </div>
                <div className="fr-btns-group fr-btns-group--inline-md">
                  <a
                    href={newsletter.cta_href}
                    className="fr-btn"
                    title="S‘abonner à notre lettre d’information"
                  >
                    S&apos;abonner
                  </a>
                </div>
              </div>
            </div>
          ) : null}
          {socials && socials.enable ? (
            <div
              className={classNames('fr-col-12', {
                'fr-col-md-4': newsletter && newsletter.enable,
              })}
            >
              <div className="fr-follow__social">
                <p className="fr-h5">
                  Suivez-nous <br /> sur les réseaux sociaux
                </p>
                <ul className="fr-btns-group">
                  {(socialLinks as Array<[string, string]>).map((link) => (
                    <li key={link[0]}>
                      <a
                        className={`fr-btn--${link[0]} fr-btn`}
                        title={`Suivez-nous sur ${link[0]} (nouvelle fenêtre)`}
                        rel="noopener external"
                        href={link[1]}
                        target="_blank"
                      >
                        {link[0]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
