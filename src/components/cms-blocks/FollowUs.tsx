import { useTranslations } from '@/locales/useTranslations'
import classNames from 'classnames'
import type { ReactElement } from 'react'

export const FollowUs = ({
  newsletter = { enable: false },
  socials = { enable: false },
}: {
  newsletter?: {
    enable?: boolean
    body?: ReactElement | string
    cta_href?: string
  }
  socials?: {
    enable?: boolean
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
    youtube?: string
  }
}) => {
  const t = useTranslations()
  if (!newsletter.enable && !socials.enable) return null
  const socialLinks = socials.enable
    ? [
        socials.facebook ? { id: 'facebook', url: socials.facebook } : null,
        socials.twitter ? { id: 'twitter', url: socials.twitter } : null,
        socials.instagram ? { id: 'instagram', url: socials.instagram } : null,
        socials.linkedin ? { id: 'linkedin', url: socials.linkedin } : null,
        socials.youtube ? { id: 'youtube', url: socials.youtube } : null,
      ].filter((item) => !!item)
    : []
  return (
    <div className="fr-follow">
      <div className="fr-container">
        <div className="fr-grid-row">
          {newsletter?.enable && (
            <div
              className={classNames('fr-col-12', {
                'fr-col-md-8': socials?.enable,
              })}
            >
              <div className="fr-follow__newsletter">
                <div>
                  <p className="fr-h5">
                    {t('service_landing_page.newsletter.title')}
                  </p>
                  <p className="fr-text--sm">{newsletter.body}</p>
                </div>
                <div className="fr-btns-group fr-btns-group--inline-md">
                  <a
                    href={newsletter.cta_href}
                    className="fr-btn"
                    title={t('service_landing_page.newsletter.button_alt')}
                  >
                    {t('service_landing_page.newsletter.button')}
                  </a>
                </div>
              </div>
            </div>
          )}
          {socials?.enable && (
            <div
              className={classNames('fr-col-12', {
                'fr-col-md-4': newsletter?.enable,
              })}
            >
              <div className="fr-follow__social">
                <p className="fr-h5">
                  {t('service_landing_page.social_networks.body', {
                    linebreak: <br />,
                  })}
                </p>
                <ul className="fr-btns-group">
                  {(socialLinks as Array<{ id: string; url: string }>).map(
                    (link) => (
                      <li key={link.id}>
                        <a
                          className={`fr-btn--${link.id} fr-btn`}
                          title={`${t(
                            'service_landing_page.social_networks.link',
                            {
                              network: link.id,
                            }
                          )} - ${t('common.new_window')}`}
                          rel="noopener external"
                          href={link.url}
                          target="_blank"
                        >
                          {link.id}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
