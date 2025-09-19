import { Fragment } from 'react'
import Link from 'next/link'
import { LaGaufre } from './LaGaufre'
import { LocaleSwitcher } from './LocaleSwitcher'
import { useTranslations } from '@/locales/useTranslations'

export const DsfrHeader = ({
  navItems = [],
}: {
  navItems?: Array<{
    title: string
    href?: string
    items?: Array<{
      title: string
      href: string
      description?: string
    }>
  }>
}) => {
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
                      {navItems?.length ? (
                        <button
                          data-fr-opened="false"
                          aria-controls="modal-header"
                          title="Menu"
                          type="button"
                          id="button-header"
                          className="fr-btn--menu fr-btn"
                        >
                          {t('common.menu')}
                        </button>
                      ) : null}
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
        {navItems?.length ? (
          <div
            className="fr-header__menu fr-modal"
            id="modal-header"
            aria-labelledby="button-header"
          >
            <div className="fr-container">
              <button
                aria-controls="modal-header"
                title={t('common.close')}
                type="button"
                id="button-2168"
                className="fr-btn--close fr-btn"
              >
                {t('common.close')}
              </button>
              <div className="fr-header__menu-links"></div>
              <nav className="fr-nav" role="navigation">
                <ul className="fr-nav__list">
                  {navItems.map((item, i) => (
                    <li key={item.title} className="fr-nav__item">
                      {item.href ? (
                        <a
                          className="fr-nav__link"
                          href={item.href}
                          target={
                            item.href.startsWith('http') ? '_blank' : '_self'
                          }
                        >
                          {item.title}
                        </a>
                      ) : (
                        <Fragment>
                          <button
                            className="fr-nav__btn"
                            aria-expanded="false"
                            aria-controls={`collapse-menu-${i}`}
                          >
                            {item.title}
                          </button>
                          <div
                            className="fr-collapse fr-menu"
                            id={`collapse-menu-${i}`}
                          >
                            <ul className="fr-menu__list">
                              {item.items?.map((child) => (
                                <li
                                  key={child.title}
                                  className="fr-enlarge-link"
                                >
                                  <a
                                    className="fr-nav__link fr-pb-0-5v"
                                    href={child.href}
                                    target={
                                      child.href.startsWith('http')
                                        ? '_blank'
                                        : '_self'
                                    }
                                  >
                                    {child.title}
                                  </a>
                                  <span className="flex fr-text--xs fr-px-2w fr-pb-1w">
                                    {child.description}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Fragment>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        ) : null}
      </header>
    </>
  )
}
